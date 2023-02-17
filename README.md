# msfs-simconnect-api-wrapper

A JavaScripty wrapper around EvenAR's excellent [node-simconnect](https://github.com/EvenAR/node-simconnect/) with a simplified API.

See [test.js](./test.js) for the basics, which you can run (with MSFS open and sitting on the apron with a plane =) using `npm test`.

This is still a work in progress, although it does wrap almost all simvars (see below) at the moment.

## API

this is still a work in progress, so not all functions work yet.

### constructor

The constructor takes a node-simconnect `handle`:

```javascript
import { open, Protocol } from "node-simconnect";
import { MSFS_API } from "./msfs-api.js";
import { SimVars } from "./msfs-simvars.js";

try {
  const { handle } = await open("My MSFS Connection", Protocol.KittyHawk);
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

Supported Simvars:

("not verified" meaning that they've been ported, marked settable where appropriate, pass the test run, but they've not been individually confirmed to be correct with respect to the documentation yet)

- [X] Camera Variables (_not verified_)
- [X] Services Variables (_not verified_)
- [X] Miscellaneous Variables (_not verified_)
- Aircraft SimVars:
  - [X] Aircraft Autopilot/Assistant Variables (_not verified_)
  - [X] Aircraft Brake/Landing Gear Variables (_not verified_)
  - [X] Aircraft Control Variables (_not verified_)
  - [X] Aircraft Electrics Variables (_not verified_)
  - [X] Aircraft Engine Variables (_not verified_)
  - [X] Aircraft Flight Model Variables (_not verified_)
  - [X] Aircraft Fuel Variables (_not verified_)
  - [X] Aircraft Misc. Variables (_not verified_)
  - [X] Aircraft Radio Navigation Variables (_not verified_)
  - [X] Aircraft System Variables (_not verified_)
  - [X] Helicopter Variables (_not verified_)

Supported SimEvents:

_pending_

## Helping out

File an issue if you want to help get this wrapper to 100% simvar and event support!
Even if you just want to help verify a few variables, that's a few variables fewer that I'll need to run through =)
