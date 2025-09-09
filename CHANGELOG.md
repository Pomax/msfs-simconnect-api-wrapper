# How this library is versioned

This library _strictly_ adheres to [semver](https://semver.org)'s major.minor.patch versioning:

- patch version changes indicate bug fixes and/or internal-only code changes,
- minor version changes indicate new functionality that does not break backward compatibility,
- major version changes indicate backward-incompatible external API changes, no matter how small.

# Version history

v4.7.0 (6 September 2024)

- Updated airports based on MSFS v1.39.9.0 - this omits a few dozen airports that are "not really airporst" but alias codes, and break SimConnect (so hard that it crashes MSFS).

v4.6.0 (6 September 2024)

- Updated airports based on MSFS v1.37.19.0
- added the `.periodic()` function for scheduling event updates using MSFS's built in interval identifiers rather than specifying your own interval in milliseconds.

v4.5.0 (16 February 2024)

- Updated runway start and end points with an altitude value in the third array position.

v4.4.0 (16 February 2024)

- Updated airports based on MSFS v1.36.2.0

v4.3.0 (19 December 2023)

- Updated runway objects with their in-game start and end point, as well as the in-game runway bounding box, so that you don't have to do that work if you just want to visualize airports, or do runway related calculations.

v4.2.0

- Added an export for `loadAirportDB`, so that you can directly load the airport data rather than having to go through the API. If you want to do that, of course.

v4.1.0

- Added `heading` and `trueHeading` to runway approach objects, because having to write code that turns an approach marking into a heading is something you should not have to do, that's something an API should have already done for you.
- Added instructions on how to regenerate the airport database file, in case that should ever be necessary for you to do manually.

v4.0.0

- Fixed an issue with runway slope values being double-converted. This is a breaking change for any code that relied on runway slope.

v3.2.0

- The airport data has been updated for MSFS2020 v1.35.21.0 (SU14)

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
