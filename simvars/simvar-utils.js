import { SimConnectDataType } from "node-simconnect";

export const SETTABLE = true;

export function dataType(typeName, settable = false) {
  return {
    data_type: SimConnectDataType[typeName.toUpperCase()],
    read: (data) => data[`read${typeName}`](),
    write: settable
      ? function (buffer, value) {
          buffer[`write${typeName}`](value);
          return buffer;
        }
      : function () {
          throw new Error(`SimVar "${this.name}" is not settable`);
        },
    settable,
  };
}
