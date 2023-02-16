// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Simulation_Variables.htm

import { AircraftAutopilotAssistantVariables } from "./aircraft-autopilot-assistant-variables.js";
import { AircraftBakeLandingGearVariables } from "./aircraft-brake-landing-gear-variables.js";
import { AircraftControlVariables } from "./aircraft-control-variables.js";
import { AircraftElectricsVariables } from "./aircraft-electrics-variables.js";
import { AircraftEngineVariables } from "./aircraft-engine-variables.js";
import { AircraftFlightModelVariables } from "./aircraft-flight-model-variables.js";
import { AircraftMiscVariables } from "./aircraft-misc-variables.js";
import { AircraftRadioNavigationVariables } from "./aircraft-radio-navigation-variables.js";
import { AircraftSystemVariables } from "./aircraft-system-variables.js";
import { CameraVariables } from "./camera-variables.js";

const SimVars = {
  ...AircraftAutopilotAssistantVariables,
  ...AircraftBakeLandingGearVariables,
  ...AircraftControlVariables,
  ...AircraftElectricsVariables,
  ...AircraftEngineVariables,
  ...AircraftFlightModelVariables,
  ...AircraftMiscVariables,
  ...AircraftRadioNavigationVariables,
  ...AircraftSystemVariables,
  ...CameraVariables,
};

// Make sure that variables that use a :number suffix
// resolve to the ":index" definition for that variable.
const proxy = new Proxy(SimVars, {
  get(target, prop) {
    if (prop.includes(`:`)) prop = prop.replace(/:.*/, `:index`);
    return target[prop];
  },
});

export { proxy as SimVars };
