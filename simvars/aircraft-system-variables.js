// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_System_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const GENERAL = {
  //
};

const VARIOMETER = {
  //
};

const WATER_BALLAST = {
  //
};

const LIGHTS = {
  //
};

const HYDRAULICS = {
  //
};

const PARTIAL_PANELS = {
  //
};

const PAYLOAD_STATIONS = {
  //
};

const WARNING_VARIABLES = {
  //
};

const YOKE = {
  //
};

export const AircraftSystemVariables = {
  ...GENERAL,
  ...VARIOMETER,
  ...WATER_BALLAST,
  ...LIGHTS,
  ...HYDRAULICS,
  ...PARTIAL_PANELS,
  ...PAYLOAD_STATIONS,
  ...WARNING_VARIABLES,
  ...YOKE,
};
