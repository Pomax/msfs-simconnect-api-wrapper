// See https://docs.flightsimulator.com/html/Programming_Tools/Event_IDs/Event_IDs.htm

import { EVENT_IDS } from "./event-ids.js";
import { AircraftMiscEvents } from "./aircraft-misc-events.js";

const SimEvents = {
  ...AircraftMiscEvents,
};

// hook up the correct event ids
Object.entries(EVENT_IDS).forEach(([key, id]) => {
  if (SimEvents[key]) {
    SimEvents[key].id = id;
  }
});

export { SimEvents };
