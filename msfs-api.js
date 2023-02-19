import {
  RawBuffer,
  SimConnectPeriod,
  SimConnectConstants,
  open,
  Protocol,
} from "node-simconnect";

// imports used by the API
import { SimVars } from "./simvars/index.js";

// direct export for users:
export { SystemEvents } from "./system-events/index.js";

const codeSafe = (string) => string.replaceAll(` `, `_`);

/**
 * API:
 *
 * - on(evtName, handler), returns a corresponding arg-less `off()` function.
 * - off(evtName, handler)
 * - get(...propNames)
 * - set(propName, value)
 */
export class MSFS_API {
  constructor(appName = "MSFS API") {
    this.appName = appName;

    // set up a listener list for simconnect event handling:
    this.eventListeners = [];

    // set up an event/data/request id counter:
    this.id = 0;
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

  handleSystemEvent(event) {
    const { clientEventId, data } = event;
    // console.log(event, this.eventListeners);
    this.eventListeners.forEach(({ id, eventHandler }) => {
      if (clientEventId === id) eventHandler(data);
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
    const { name: eventName } = eventDefinition;
    const { handle } = this;
    const eventID = this.nextId();
    handle.subscribeToSystemEvent(eventID, eventName);
    // console.log(`registering for "${eventName}" using id ${eventID}`);
    this.eventListeners.push({
      id: eventID,
      eventName,
      eventHandler,
    });
    return () => this.off(eventID, eventName);
  }

  /**
   * Remove an event listener.
   *
   * @param {*} eventID the id that was used to register this event handler
   * @param {*} eventName the event name associated with this event id
   */
  off(eventID, eventName) {
    const { handle } = this;
    handle.unsubscribeFromSystemEvent(eventID);
    // console.log(`unregistering from "${eventName}" with id ${eventID}`);
    const pos = this.eventListeners.findIndex((e) => e.eventName === eventName);
    // console.log(`removing listener in position ${pos}`)
    this.eventListeners.splice(pos, 1);
    this.releaseId(eventID);
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
