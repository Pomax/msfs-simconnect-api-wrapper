import {
  RawBuffer,
  SimConnectPeriod,
  SimConnectConstants,
} from "node-simconnect";

import { SimEvents } from "./simevents/index.js";
import { SimVars } from "./simvars/index.js";

function codeSafe(string) {
  return string.replaceAll(` `, `_`);
}

/**
 * API:
 *
 * - on(evtName, handler), returns a corresponding arg-less `off()` function.
 * - off(evtName, handler)
 * - get(...propNames)
 * - set(propName, value)
 */
export class MSFS_API {
  constructor(handle) {
    this.handle = handle;
    this.id = 0;
    this.reserved = new Set();
    // TODO: finish up the event wrapping
  }

  nextId() {
    if (this. id > 900) {
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

  /**
   * Add an event listener. This returns a function that acts
   * as the corresponding `off()` function, without needing to
   * pass any arguments in.
   *
   * @param {*} eventName
   * @param {*} eventHandler
   * @returns
   */
  on(eventName, eventHandler) {
    this.handler.on(eventName, eventHandler);
    return () => this.off(eventName, eventHandler);
  }

  /**
   * Remove an event listener.
   *
   * @param {*} eventName
   * @param {*} eventHandler
   */
  off(eventName, eventHandler) {
    this.handler.off(eventName, eventHandler);
  }

  /**
   *
   * @param {*} triggerName
   * @param {*} value
   */
  trigger(triggerName, value = 0) {
    throw new Error(`not implemented`);

    const { handle } = this;
    const def = SimEvents[triggerName];
    handle.transmitClientEvent(
      SimConnectConstants.OBJECT_ID_USER,
      def.id,
      value,
      0,
      0
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
    const DATA_ID = this.nextId();
    const def = SimVars[propName];
    const bufferLength = 100; // TODO: we probably want to allocate only as much buffer as we actually need
    const buffer = def.write(new RawBuffer(bufferLength), value);
    const payload = { buffer, arrayCount: 0, tagged: false };
    handle.addToDataDefinition(DATA_ID, propName, def.units, def.data_type);
    handle.setDataOnSimObject(
      DATA_ID,
      SimConnectConstants.OBJECT_ID_USER,
      payload
    );
  }

  /**
   *
   * @param {*} handler
   * @param {*} interval
   * @param  {...any} propNames
   */
  schedule(handler, interval, ...propNames) {
    let running = true;

    const run = async() => {
      handler(await this.get(...propNames));
      if (running) setTimeout(run, interval);
    };
    run();
    return () => (running=false);
  }
}
