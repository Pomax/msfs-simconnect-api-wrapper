# msfs-simconnect-api-wrapper

A JavaScripty wrapper around EvenAR's excellent [node-simconnect](https://github.com/EvenAR/node-simconnect/) with a simplified API.

See [test.js](./test.js) for the basics, which you can run (with MSFS open and sitting on the apron with a plane =) using `npm test`.

This is still a work in progress, although it does wrap all simvars and system events at the moment.

## API

This API manager has an argless constructor that does nothing other than allocate internal values. In order to work with MSFS, you need to call the `connect` function first:

```javascript
import { MSFS_API } from "./msfs-api.js";

const api = new MSFS_API();
try {
  await api.connect();

  //...your code here...
} catch (err) {
  console.error(err);
}
```

### methods

- `connect(name?)`, sets up a connection to MSFS. This function will throw is no connection can be established.
- `on(evtDefinition, handler)`, starts listening for a specific simconnect event with a specific handler. Returns a corresponding arg-less `off()` function to clean up the listener. See the "System events" section below for details on the event definition.
- `off(evtDefinition, handler)`, stop listening for a specific simconnect event with a specific handler. You'll typically not need to call this, just use the function that `on` returns. See the "System events" section below for details on the event definition.
- `get(...propNames)`, accepts a list of simvars (with spaces or underscores) and async-returns a key/value pair object with each simvar as key (with spaces replaced by underscores).
- `schedule(handler, interval, ...propNames)`, sets up a periodic call to `handler` every `interval` milliseconds with the result of `get(...propNames)`. Returns an arg-less `off()` to end the scheduled call.
- `set(propName, value)`, accepts a single simvar and the value its should be set to. This will throw for simvars that are not settable.
- `trigger(triggerName, value?)`, triggers a simconnect event, with optional value.

### System events (used for on/off handling):

All event names in https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/API_Reference/Events_And_Data/SimConnect_SubscribeToSystemEvent.htm are supported as constants on the `SystemEvents` object. Event names are keyed using UPPER_SNAKE_CASE. That is, the first few events are encoded as:

```javascript
const SystemEvents = {
  ...
  AIRCRAFT_LOADED: {
    name: `AircraftLoaded`,
    desc: `Request a notification when the aircraft flight dynamics file is changed. These files have a .AIR extension. The filename is returned in a SIMCONNECT_RECV_EVENT_FILENAME structure.`,
  },
  CRASHED: {
    name: `Crashed`,
    desc: `Request a notification if the user aircraft crashes.`,
  },
  ...
```

Meaning you if you wanted to listen for the `AircraftLoaded` event, you would use `api.on(SystemEvents.AIRCRAFT_LOADED, functionHandleHere)`.

### Supported Simvars:

All simvars are supported, barring several simvars with data types for which I need to figure out how to actually deference then, such as LatLonAlt structs, or the (super rare) bool/string combination.

- [x] Camera Variables (_not verified_)
- [x] Services Variables (_not verified_)
- [x] Miscellaneous Variables (_not verified_)
- Aircraft SimVars:
  - [x] Aircraft Autopilot/Assistant Variables (_not verified_)
  - [x] Aircraft Brake/Landing Gear Variables (_not verified_)
  - [x] Aircraft Control Variables (_not verified_)
  - [x] Aircraft Electrics Variables (_not verified_)
  - [x] Aircraft Engine Variables (_not verified_)
  - [x] Aircraft Flight Model Variables (_not verified_)
  - [x] Aircraft Fuel Variables (_not verified_)
  - [x] Aircraft Misc. Variables (_not verified_)
  - [x] Aircraft Radio Navigation Variables (_not verified_)
  - [x] Aircraft System Variables (_not verified_)
  - [x] Helicopter Variables (_not verified_)

"not verified" means that they've been ported, marked settable where appropriate, pass the test run, but they've not been individually confirmed to be correct with respect to the documentation yet.

### Supported SimEvents:

SimEvents are resolved by key name, so as long as you use a valid keyname, you can trigger it. See https://docs.flightsimulator.com/html/Programming_Tools/Event_IDs/Event_IDs.htm for the full list (there are... a lot).

## Helping out

File an issue if you want to help get this wrapper to 100% simvar and event support!
Even if you just want to help verify a few variables, that's a few variables fewer that I'll need to run through =)

<!--
  simvar regex:

    from:   \s+([A-Z ]+(:index)?)\s\s+(.*)\s\s+(.*)
    to:     "$1": {\ndesc: `$3`,\nunits: `$4`,\n},
-->
