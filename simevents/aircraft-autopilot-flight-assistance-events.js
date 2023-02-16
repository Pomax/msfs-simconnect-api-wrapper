// See https://docs.flightsimulator.com/html/Programming_Tools/Event_IDs/Aircraft_Autopilot_Flight_Assist_Events.htm

const AUTOPILOT = {
  // ...
};

const FLIGHT_ASSISTANCE = {
  // ...
};

const G1000 = {
  // ...
};

const VIRTUAL_COCKPIT = {
  // ...
};

const G_LIMITER = {
  // ...
};

export const AircraftAutopilotFlightAssistanceEvents = {
  ...AUTOPILOT,
  ...FLIGHT_ASSISTANCE,
  ...G1000,
  ...VIRTUAL_COCKPIT,
  ...G_LIMITER,
};
