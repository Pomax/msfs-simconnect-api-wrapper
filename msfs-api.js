import {
  RawBuffer,
  SimConnectPeriod,
  SimConnectConstants,
} from "node-simconnect";
import { SimVars } from "./msfs-simvars.js";

function getDefinition(name) {
  return SimVars[name];
}

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

    // TODO: finish up the event wrapping
  }

  nextId() {
    return this.id++;
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

  trigger(triggerName, value=undefined) {
    if (value !== undefined) {
      // ...
    }
    // ...
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
          const result = {};
          propNames.forEach((propName, pos) => {
            result[codeSafe(propName)] = defs[pos].read(data);
          });
          resolve(result);
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
    const defs = propNames.map((propName) => getDefinition(propName));
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
}
