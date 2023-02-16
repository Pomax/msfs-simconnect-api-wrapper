// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Simulation_Variables.htm

/*
- [X]  Aircraft Autopilot/Assistant Variables
- [X]  Aircraft Brake/Landing Gear Variables
- [X]  Aircraft Control Variables
- [X]  Aircraft Electrics Variables
- [X]  Aircraft Engine Variables
- [ ]  Aircraft Flight Model Variables
- [ ]  Aircraft Fuel Variables
- [X]  Aircraft Misc. Variables
- [ ]  Aircraft Radio Navigation Variables
- [ ]  Aircraft System Variables
*/

import { AircraftAutopilotAssistantVariables } from "./aircraft-autopilot-assistant-variables.js";
import { AircraftBakeLandingGearVariables } from "./aircraft-brake-landing-gear-variables.js";
import { AircraftControlVariables } from "./aircraft-control-variables.js";
import { AircraftElectricsVariables } from "./aircraft-electrics-variables.js";
import { AircraftEngineVariables } from "./aircraft-engine-variables.js";
import { AircraftMiscVariables } from "./aircraft-misc-variables.js";

const SimVars = {
  ...AircraftAutopilotAssistantVariables,
  ...AircraftBakeLandingGearVariables,
  ...AircraftControlVariables,
  ...AircraftElectricsVariables,
  ...AircraftEngineVariables,
  ...AircraftMiscVariables,
};

const proxy = new Proxy(SimVars, {
  get(target, prop) {
    // Make sure that variables with an index number
    // find the ":index" definition of that variable.
    if (prop.includes(`:`)) prop = prop.replace(/:.*/, `:index`);
    return target[prop];
  },
});

export { proxy as SimVars };
