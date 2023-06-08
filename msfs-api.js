import {
  RawBuffer,
  SimConnectPeriod,
  SimConnectConstants,
  open,
  Protocol,
} from "node-simconnect";

// imports used by the API
import { SimVars } from "./simvars/index.js";
import { SystemEvents as SysEvents } from "./system-events/index.js";
import {
  SystemEvents as AirportEvents,
  airportGetHandler,
} from "./special/airports.js";

// Special import for working with airport data
const { AIRPORTS_IN_RANGE, AIRPORTS_OUT_OF_RANGE } = SysEvents;

const SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT = 0;
const SIMCONNECT_FACILITY_AIRPORT = 1000;

const codeSafe = (string) => string.replaceAll(` `, `_`);

// direct export for downstream users:
export const SystemEvents = Object.assign({}, SysEvents, AirportEvents);

/**
 * API:
 *
 * - on(evtName, handler), returns a corresponding arg-less `off()` function.
 * - off(evtName, handler)
 * - get(...propNames)
 * - set(propName, value)
 */
export class MSFS_API {
  constructor(appName = "MSFS API", AirportDB) {
    this.appName = appName;
    this.AirportDB = AirportDB;

    // set up a listener list for simconnect event handling:
    this.eventListeners = {};

    // set up a list for special (non-simconnect) get handlers
    this.specialGetHandlers = [airportGetHandler];

    // set up an event/data/request id counter:
    this.id = 1;
    this.reserved = new Set();
  }

  async connect(opts = {}) {
    opts.retries ??= 0;
    opts.retryInterval ??= 0;
    opts.onConnect ??= () => {};
    opts.onRetry ??= () => {};
    try {
      const { handle } = await open(this.appName, Protocol.KittyHawk);
      if (!handle) throw new Error(`No connection handle to MSFS`);
      this.handle = handle;
      this.connected = true;
      opts.onConnect(handle);
      handle.on("event", (event) => this.handleSystemEvent(event));
      handle.on("exception", (e) => console.error(e));
      this.addAirportHandling(handle);
    } catch (err) {
      if (opts.retries) {
        opts.retries--;
        opts.onRetry(opts.retries, opts.retryInterval);
        setTimeout(() => this.connect(opts), 1000 * opts.retryInterval);
      } else throw new Error(`No connection to MSFS`);
    }
  }

  nextId() {
    if (this.id > 900) {
      this.id = 0;
    }
    let id = this.id++;
    while (this.reserved.has(id)) {
      id = this.id++;
    }
    this.reserved.add(id);
    return id;
  }

  releaseId(id) {
    this.reserved.delete(id);
  }

  // We want to make sure we only ever register for an event once
  // because MSFS does not follow the JS "register multiple handlers"
  // concept. That's up to you. So.... that's where this code comes in:
  addEventListener(eventName, eventHandler) {
    const { eventListeners: e } = this;
    if (!e[eventName]) {
      const eventID = this.nextId();
      this.handle.subscribeToSystemEvent(eventID, eventName);
      e[eventName] = {
        eventID,
        eventName,
        data: undefined,
        handlers: [eventHandler],
      };
      e[eventID] = e[eventName];
    }

    // do we need to send the most recently known value?
    else {
      e[eventName].handlers.push(eventHandler);
      const { data } = e[eventName];
      if (data) eventHandler(data);
    }
  }

  removeEventListener(eventName, eventHandler) {
    const { eventListeners: e } = this;
    const obj = e[eventName];
    const pos = obj.handlers.findIndex((h) => h === eventHandler);
    if (pos > -1) obj.handlers.splice(pos, 1);
  }

  handleSystemEvent(event) {
    const { clientEventId: eventID, data } = event;
    const entry = this.eventListeners[eventID];

    if (!entry) {
      return console.error(
        `handling data for id ${eventID} without an event handler entry??`
      );
    }

    entry.data = data;
    entry.handlers.forEach((handle) => handle(data));
  }

  addAirportHandling(handle) {
    // TODO: - [x] get(`NEARBY_AIRPORTS`) to get the current list of nearby airports.
    //       - [ ] get(`ALL_AIRPORTS`) to get the list of all airports in the sim.
    //       - [x] on(`AIRPORTS_IN_RANGE`) to subscribe to "new airports in range" events.
    //       - [x] on(`AIRPORTS_OUT_OF_RANGE`) to subscribe to "airports dropping out of range" events.
    //       - [x] document these four special cases
    const TYPE = SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT;
    const IN_RANGE = this.nextId();
    const OUT_OF_RANGE = this.nextId();

    handle.subscribeToFacilitiesEx1(TYPE, IN_RANGE, OUT_OF_RANGE);

    handle.on("airportList", (data) => {
      const { requestID: id } = data;

      // work around the node-simconnect typo, if it still exists
      if (data.aiports) {
        data.airports ??= data.aiports;
        delete data.aiports;
      }

      // Are there in/out of range airports?
      this.eventListeners[id]?.handlers.forEach((handle) =>
        handle(data.airports)
      );
    });
  }

  /**
   * Add an event listener. This returns a function that acts
   * as the corresponding `off()` function, without needing to
   * pass any arguments in.
   *
   * @param {*} eventDefinition from SystemEvents
   * @param {*} eventHandler function that gets called when the event triggers
   * @returns
   */
  on(eventDefinition, eventHandler) {
    if (!eventDefinition) {
      console.error(`on() called without an event definition`);
      console.trace();
      return;
    }
    const { name: eventName } = eventDefinition;
    this.addEventListener(eventName, eventHandler);
    return () => this.off(eventName, eventHandler);
  }

  /**
   * Remove an event listener.
   *
   * @param {*} eventName the event name to stop listening to
   * @param {*} eventHandler the event handler that should no longer trigger for this event
   */
  off(eventName, eventHandler) {
    this.removeEventListener(eventName, eventHandler);
  }

  /**
   *
   * @param {*} triggerName
   * @param {*} value
   */
  trigger(triggerName, value = 0) {
    const { handle } = this;
    const eventID = this.nextId();
    handle.mapClientEventToSimEvent(eventID, triggerName);
    handle.transmitClientEvent(
      SimConnectConstants.OBJECT_ID_USER,
      eventID,
      value,
      1, // highest priority
      16 // group id is priority
    );
  }

  /**
   *
   * @param {*} DATA_ID
   * @param {*} propNames
   * @param {*} defs
   */
  addDataDefinitions(DATA_ID, propNames, defs) {
    const { handle } = this;
    propNames.forEach((propName, pos) => {
      const def = defs[pos];
      if (def === undefined) {
        handle.clearDataDefinition(DATA_ID);
        this.releaseId(DATA_ID);
        throw new Error(`Cannot get SimVar: "${propName}" unknown.`);
      }
      handle.addToDataDefinition(
        DATA_ID,
        propName,
        def.units,
        def.data_type,
        0.0,
        SimConnectConstants.UNUSED
      );
    });
  }

  /**
   *
   * @param {*} DATA_ID
   * @param {*} REQUEST_ID
   * @param {*} propNames
   * @param {*} defs
   * @returns
   */
  generateGetPromise(DATA_ID, REQUEST_ID, propNames, defs) {
    const { handle } = this;

    return new Promise((resolve, _reject) => {
      const handleDataRequest = ({ requestID, data }) => {
        if (requestID === REQUEST_ID) {
          handle.off("simObjectData", handleDataRequest);
          handle.clearDataDefinition(DATA_ID);
          const result = {};
          propNames.forEach((propName, pos) => {
            result[codeSafe(propName)] = defs[pos].read(data);
          });
          resolve(result);
          this.releaseId(DATA_ID);
        }
      };

      handle.on("simObjectData", handleDataRequest);

      handle.requestDataOnSimObject(
        REQUEST_ID,
        DATA_ID,
        SimConnectConstants.OBJECT_ID_USER,
        SimConnectPeriod.ONCE,
        ...[0, 0, 0, 0]
      );
    });
  }

  /**
   * Get one or more simconnect variable values.
   *
   * @param  {...any} propNames
   * @returns
   */
  get(...propNames) {
    const DATA_ID = this.nextId();
    const REQUEST_ID = DATA_ID;
    propNames = propNames.map((s) => s.replaceAll(`_`, ` `));

    // see if this is a special, non-simconnect variable:
    if (propNames.length === 1) {
      const [propName] = propNames;
      for (const get of this.specialGetHandlers) {
        if (get.supports(propName)) {
          return get(this, propName);
        }
      }
    }

    // if not, regular lookup.
    const defs = propNames.map((propName) => SimVars[propName]);
    this.addDataDefinitions(DATA_ID, propNames, defs);
    return this.generateGetPromise(DATA_ID, REQUEST_ID, propNames, defs);
  }

  /**
   * Set a simconnect variable.
   *
   * @param  {...any} propNames
   * @returns
   * @throws
   */
  set(propName, value) {
    const { handle } = this;
    propName = propName.replaceAll(`_`, ` `);
    if (value == parseFloat(value)) {
      // Extremely intentionally use coercion to see if we're dealing with a number-as-string
      value = parseFloat(value);
    }
    const DATA_ID = this.nextId();
    const def = SimVars[propName];
    if (def === undefined) {
      this.releaseId(DATA_ID);
      throw new Error(`Cannot set SimVar: "${propName}" unknown.`);
    }
    const bufferLength = 100; // TODO: we probably want to allocate only as much buffer as we actually need
    const buffer = def.write(new RawBuffer(bufferLength), value);
    const payload = { buffer, arrayCount: 0, tagged: false };
    handle.addToDataDefinition(DATA_ID, propName, def.units, def.data_type);
    handle.setDataOnSimObject(
      DATA_ID,
      SimConnectConstants.OBJECT_ID_USER,
      payload
    );
    // cleanup, with *plenty* of time for SimConnect to resolve the data object before clearing it out.
    setTimeout(() => {
      this.releaseId(DATA_ID);
      handle.clearDataDefinition(DATA_ID);
    }, 500);
  }

  /**
   *
   * @param {*} handler
   * @param {*} interval
   * @param  {...any} propNames
   */
  schedule(handler, interval, ...propNames) {
    let running = true;

    const run = async () => {
      handler(await this.get(...propNames));
      if (running) setTimeout(run, interval);
    };
    run();
    return () => (running = false);
  }
}
