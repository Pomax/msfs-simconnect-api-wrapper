v3.1.0

- Airport code has been restored, in a radically different way internally, but with the same API as before.

The airport data is now stored in a bundled database file. If the bundled database and the in-game airport database different in the number of airports, you'll get a console warning that you'll probably want to update your version of `msfs-simconnect-api-wrapper`.

v3.0.0

- The airport code has been disabled, because it's all kinds of broken at the moment, and needs to be redone.
- you can now pass `host` and `port` values as part of the `.connect()` options.
- you can now pass an `onException` handler as part of the `.connect()` options.

v2.3.0

- Added all env. vars listed on https://docs.flightsimulator.com/html/Additional_Information/Reverse_Polish_Notation.htm#EnvironmentVariables

v2.2.1

- removed a rogue console.log from the reconnect code

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
