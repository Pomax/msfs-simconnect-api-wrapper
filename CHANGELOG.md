v2.2.0

- added an `autoReconnect` property to the `connect()` options. When `true`, this will try to automatically reconnect to MSFS if it happens to disappear/disconnect at any point. Note that this _will_ retrigger `onConnect`.

v2.1.1

- Added an explicit throw when calling `on`, `trigger`, `get`, `set`, and `schedule` when the API is not
  connected to MSFS. This would already throw, but only at the point where the simconnect DLL was asked
  to do things, which led to unnecessarily cryptic errors with unnecessarily deep stack traces.

v2.1

- added fuel variables. They were missing despite the readme saying they were implemented.
- added a catch for unknown vars so the code doesn't actually crash.

v2.0.1

- fix exception on repeated airport:index calls.

v2.0.0

Added support for airport queries:

- new special variables `NEARBY_AIRPORTS`, `ALL_AIRPORTS`, and `AIRPORT:index` where index is an ICAO code.
- new events `AIRPORTS_IN_RANGE` and `AIRPORTS_OUT_OF_RANGE`.

Removes `getSpecial` in favour of `get` with a single variable argument

v1.4.1

- [x] Camera Variables
- [x] Services Variables
- [x] Miscellaneous Variables
- Aircraft SimVars:
  - [x] Aircraft Autopilot/Assistant Variables
  - [x] Aircraft Brake/Landing Gear Variables
  - [x] Aircraft Control Variables
  - [x] Aircraft Electrics Variables
  - [x] Aircraft Engine Variables
  - [x] Aircraft Flight Model Variables
  - [x] Aircraft Fuel Variables
  - [x] Aircraft Misc. Variables
  - [x] Aircraft Radio Navigation Variables
  - [x] Aircraft System Variables
  - [x] Helicopter Variables

---

There was no changelog prior to v1.4.1
