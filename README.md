# msfs-simconnect-api-wrapper

A JavaScripty wrapper around EvenAR's excellent [node-simconnect](https://github.com/EvenAR/node-simconnect/) with a simplified API.

See [test.js](./test.js) for the basics, which you can run (with MSFS open and sitting on the apron with a plane =) using `npm test`.

This is still a work in progress, although it does wrap (almost) all the Aircraft simvars (845) as well as all Camera simvars (35) at the moment.

## API

this is still a work in progress, so not all functions work yet.

### constructor

The constructor takes a node-simconnect `handle`:

```javascript
import { open, Protocol } from "node-simconnect";
import { MSFS_API } from "./msfs-api.js";
import { SimVars } from "./msfs-simvars.js";

try {
  const { recvOpen, handle } = await open("My app", Protocol.KittyHawk);
  const api = new MSFS_API(handle);

  //...your code here...

} catch (err) {
  console.error(err);
}
```

### methods

- `on(evtName, handler)`, starts listening for a specific simconnect event with a specific handler. Returns a corresponding arg-less `off()` function to clean up the listener.
- `off(evtName, handler)`, stop listening for a specific simconnect event with a specific handler. You'll typically not need to call this, just use the function that `on` returns.
- `get(...propNames)`, accepts a list of simvars (with spaces or underscores) and async-returns a key/value pair object with each simvar as key (with spaces replaced by underscores).
- `schedule(handler, interval, ...propNames)`, sets up a periodic call to `handler` every `interval` milliseconds with the result of `get(...propNames)`. Returns an arg-less `off()` to end the scheduled call.
- `set(propName, value)`, accepts a single simvar and the value its should be set to. This will throw for simvars that are not settable.
- `trigger(triggerName, value?)`, triggers a simconnect event, with optional value.

#### API status

API functions:

- `on()` _pending_
- `off()` _pending_
- `get()` **implemented**
- `schedule()` **implemented**
- `set()` **implemented**
- `trigger()` _pending_

Simvars:

- [X] Camera Variables
- [ ] Services Variables
- [X] Miscellaneous Variables
- Aircraft SimVars:
  - [X] Aircraft Autopilot/Assistant Variables
  - [X] Aircraft Brake/Landing Gear Variables
  - [X] Aircraft Control Variables
  - [X] Aircraft Electrics Variables
  - [X] Aircraft Engine Variables
  - [X] Aircraft Flight Model Variables
  - [X] Aircraft Fuel Variables
  - [X] Aircraft Misc. Variables
  - [X] Aircraft Radio Navigation Variables
  - [ ] Aircraft System Variables
  - [ ] Helicopter Variables

SimEvents:

_pending_