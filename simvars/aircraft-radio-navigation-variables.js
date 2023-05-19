// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_RadioNavigation_Variables.htm
import { define } from "./simvar-utils.js";

// data types
import {
  Int32,
  SInt32,
  Float64,
  SFloat64,
  String32,
  SString32,
} from "./simvar-utils.js";

// data units
import {
  Bool,
  Knots,
  Feet,
  Number,
  Degrees,
  Enum,
  Radians,
  Percent,
  PercentOver100,
  NullUnit,
  Seconds,
  ADF_BCD32,
  Meters,
  MHz,
  Flags,
  Hz,
  NM,
  BCD16,
  MetersPerSecond,
} from "./simvar-utils.js";

const ADF = {
  "ADF ACTIVE FREQUENCY:index": define(
    `ADF frequency. Index of 1 or 2.`,
    ADF_BCD32,
    Float64
  ),
  "ADF AVAILABLE:index": define(`True if ADF is available`, Bool, Int32),
  "ADF CARD": define(`ADF compass rose setting`, Degrees, Float64),
  "ADF IDENT": define(`ICAO code`, NullUnit, String32),
  //   "ADF LATLONALT:index": define(
  //     desc:`Returns the latitude, longitude and altitude of the station the radio equipment is currently tuned to, or zeros if the radio is not tuned to any ADF station. Index of 1 or 2 for ADF 1 and ADF 2.`,
  //     units:`SIMCONNECT_DATA_LATLONALT`,
  //   ),
  "ADF NAME:index": define(`Descriptive name`, NullUnit, String32),
  "ADF RADIAL:index": define(
    `Current direction from NDB station`,
    Degrees,
    Float64
  ),
  "ADF RADIAL MAG:index": define(
    `Returns the magnetic bearing to the currently tuned ADF transmitter.`,
    Degrees,
    Float64
  ),
  "ADF SIGNAL:index": define(`Signal strength`, Number, Int32),
  "ADF SOUND:index": define(`ADF audio flag. Index of 0 or 1.`, Bool, Int32),
  "ADF STANDBY AVAILABLE:index": define(
    `True if ADF Standby is available`,
    Bool,
    Int32
  ),
  "ADF STANDBY FREQUENCY:index": define(`ADF standby frequency`, Hz, Float64),
  "ADF VOLUME": define(
    `Returns the volume of the ADF`,
    PercentOver100,
    Float64
  ),
};

const ATC = {
  "ATC AIRLINE": define(
    `The name of the Airline used by ATC, as a string with a maximum length of 50 characters.`,
    NullUnit,
    SString32
  ),
  "ATC AIRPORT IS TOWERED": define(
    `If the airport is controlled, this boolean is true.`,
    Bool,
    Int32
  ),
  "ATC CLEARED IFR": define(
    `Returns whether or not the user has filed an IFR flightplan that has been cleared by the sim ATC`,
    Bool,
    Int32
  ),
  "ATC CLEARED LANDING": define(
    `Whether the ATC has cleared the plane for landing.`,
    Bool,
    Int32
  ),
  "ATC CLEARED TAKEOFF": define(
    `Whether the ATC has cleared the plane for takeoff.`,
    Bool,
    Int32
  ),
  "ATC CLEARED TAXI": define(
    `Whether the ATC has cleared the plane for taxi.`,
    Bool,
    Int32
  ),
  "ATC CURRENT WAYPOINT ALTITUDE": define(
    `Returns the target altitude for the current ATC flightplan waypoint.`,
    Bool,
    Int32
  ),
  "ATC FLIGHT NUMBER": define(
    `Flight Number used by ATC, as a string with a maximum number of 6 characters.`,
    NullUnit,
    SString32
  ),
  "ATC FLIGHTPLAN DIFF ALT": define(
    `Altitude between the position of the aircraft and his closest waypoints in the flightplan.`,
    Meters,
    Float64
  ),
  "ATC FLIGHTPLAN DIFF DISTANCE": define(
    `Returns the lateral distance the user's plane is from the ATC flight plan track.`,
    Meters,
    Float64
  ),
  "ATC FLIGHTPLAN DIFF HEADING": define(
    `Heading between the position of the aircraft and his closest waypoints in the flightplan.`,
    Degrees,
    Float64
  ),
  "ATC HEAVY": define(
    `Is this aircraft recognized by ATC as heavy.`,
    Bool,
    SInt32
  ),
  "ATC ID": define(
    `ID used by ATC, as a string with a maximum number of 10 characters.`,
    NullUnit,
    SString32
  ),
  "ATC IFR FP TO REQUEST": define(
    `Returns true if the user has a valid IFR flight plan they can as for clearance for with ATC at the airport they are currently at.`,
    Bool,
    Int32
  ),
  "ATC MODEL": define(
    `Model used by ATC, as a string with a maximum number of 10 characters.`,
    NullUnit,
    String32
  ),
  "ATC ON PARKING SPOT": define(
    `Is ATC aircraft on parking spot.`,
    Bool,
    Int32
  ),
  "ATC PREVIOUS WAYPOINT ALTITUDE": define(
    `Returns the target altitude for the previous ATC flightplan waypoint.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY AIRPORT NAME": define(
    `The name of the airport of the runway assigned by the ATC. Returns "" if no runway is assigned.`,
    NullUnit,
    String32
  ),
  "ATC RUNWAY DISTANCE": define(
    `This float represents the distance between the player's plane and the center of the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY END DISTANCE": define(
    `This is a float corresponding to the horizontal distance between the player's plane and the end of the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY HEADING DEGREES TRUE": define(
    `This float represents the true heading of the runway selected by the ATC.`,
    Degrees,
    Float64
  ),
  "ATC RUNWAY LENGTH": define(
    `The length of the runway assigned by the ATC. Returns -1 if no runway is assigned.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY RELATIVE POSITION X": define(
    `This is a float corresponding to the player's main gear relative X (transverse) position on the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY RELATIVE POSITION Y": define(
    `This is a float corresponding to the player's main gear relative Y (height) position on the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY RELATIVE POSITION Z": define(
    `This is a float corresponding to the player's main gear relative Z (longitudinal) position on the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY SELECTED": define(
    `This is a boolean corresponding to whether or not the ATC has pre-selected a runway for the player's plane. If this is false, every other ATC RUNWAY * SimVar will return default values.`,
    Bool,
    Int32
  ),
  "ATC RUNWAY START DISTANCE": define(
    `This is a float corresponding to the horizontal distance between the player's plane and the start of the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY TDPOINT RELATIVE POSITION X": define(
    `This float represents the player's main gear relative X (transverse) position according to the aiming point of the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY TDPOINT RELATIVE POSITION Y": define(
    `This float represents the player's main gear relative Y (height) position according to the aiming point of the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY TDPOINT RELATIVE POSITION Z": define(
    `This float represents the player's main relative Z (longitudinal) position according to the aiming point of the runway selected by the ATC.`,
    Meters,
    Float64
  ),
  "ATC RUNWAY WIDTH": define(
    `The width of the runway assigned by the ATC. Returns -1 if no runway is assigned.`,
    Meters,
    Float64
  ),
  "ATC SUGGESTED MIN RWY LANDING": define(
    `Suggested minimum runway length for landing. Used by ATC.`,
    Feet,
    Float64
  ),
  "ATC SUGGESTED MIN RWY TAKEOFF": define(
    `Suggested minimum runway length for takeoff. Used by ATC.`,
    Feet,
    Float64
  ),
  "ATC TAXIPATH DISTANCE": define(
    `Returns the lateral distance the user's plane is from the path of the currently issued ATC taxi instructions.`,
    Meters,
    Float64
  ),
  "ATC TYPE": define(`Type used by ATC.`, NullUnit, String32),
};

const COM = {
  "COM1 STORED FREQUENCY": define(
    `The stored COM 1/2/3 frequency value.`,
    BCD16,
    Int32
  ),
  "COM2 STORED FREQUENCY": define(
    `The stored COM 1/2/3 frequency value.`,
    BCD16,
    Int32
  ),
  "COM3 STORED FREQUENCY": define(
    `The stored COM 1/2/3 frequency value.`,
    BCD16,
    Int32
  ),
  "COM ACTIVE BEARING:index": define(
    `Gives the bearing (in degrees) of the active COM station (airport) or a value less than 0 if the station does not belong to an airport. Index is 1, 2 or 3.`,
    Degrees,
    Float64
  ),
  "COM ACTIVE DISTANCE:index": define(
    `Gives the distance (in meters) to the active COM station (airport) or a value less than -180° if the station does not belong to an airport. Index is 1, 2 or 3.`,
    Meters,
    Float64
  ),
  "COM ACTIVE FREQUENCY:index": define(
    `Com frequency. Index is 1, 2 or 3.`,
    BCD16,
    Int32
  ),
  "COM ACTIVE FREQ IDENT:index": define(
    `The identity of the station that is tuned on the indexed active COM radio. Index is 1, 2, or 3.`,
    NullUnit,
    String32
  ),
  "COM ACTIVE FREQ TYPE:index": define(
    `The type of COM frequency for the active indexed COM system. Index is 1, 2, or 3.`,
    NullUnit,
    String32
  ),
  // "COM ACTIVE LATLONALT:index": define(
  //   `See documentation`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "COM AVAILABLE:index": define(
    `True if COM1, COM2 or COM3 is available (depending on the index, either 1, 2, or 3)`,
    Bool,
    Int32
  ),
  // "COM LATLONALT:index": define(
  //   `Not currently used in the simulation.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "COM RECEIVE:index": define(
    `Whether or not the plane is receiving on the indexed com channel or not (either 1, 2, or 3 for the index).`,
    Bool,
    Int32
  ),
  "COM RECEIVE ALL": define(
    `Toggles all COM radios to receive on`,
    Bool,
    Int32
  ),
  "COM RECEIVE EX1:index": define(
    `Whether or not the plane is receiving on the indexed com channel. Index is 1, 2 or 3.`,
    Bool,
    Int32
  ),
  "COM SPACING MODE:index": define(
    `The COM radio frequency step. Index is 1, 2 or 3.`,
    Enum,
    Int32
  ),
  "COM STANDBY FREQUENCY:index": define(
    `Com standby frequency. Index is 1, 2 or 3.`,
    BCD16,
    Int32
  ),
  "COM STANDBY FREQ IDENT:index": define(
    `The identity of the station that is tuned on the indexed standby COM radio. Index is 1, 2, or 3.`,
    NullUnit,
    String32
  ),
  "COM STANDBY FREQ TYPE:index": define(
    `The type of COM frequency for the standby indexed COM system. Index is 1, 2, or 3.`,
    NullUnit,
    String32
  ),
  "COM STATUS:index": define(
    `Radio status flag for the indexed com channel. Index is 1, 2 or 3.`,
    Enum,
    Int32
  ),
  "COM TEST:index": define(
    `Enter an index of 1, 2 or 3. Will return TRUE if the COM system is working, FALSE otherwise.`,
    Bool,
    Int32
  ),
  "COM TRANSMIT:index": define(
    `Audio panel com transmit state. Index of 1, 2 or 3.`,
    Bool,
    Int32
  ),
  "COM VOLUME": define(`The volume of the COM Radio.`, Percent, Float64),
};

const FLARM = {
  "FLARM AVAILABLE": define(
    `Whether the FLARM is available (TRUE, 1) or not (FALSE, 0).`,
    Bool,
    SInt32
  ),
  "FLARM THREAT BEARING": define(
    `The bearing of the FLARM threat aircraft, relative to track.`,
    Degrees,
    Float64
  ),
  // FLARM THREAT DATA The FLARM threat aircraft data structure, which contains data about the perceived threat, returned as a struct. Struct
  "FLARM THREAT DISTANCE": define(
    `The distance to the FLARM threat object.`,
    Meters,
    Float64
  ),
  "FLARM THREAT HEADING": define(
    `The heading to the FLARM threat object.`,
    Degrees,
    Float64
  ),
  "FLARM THREAT RELATIVE ALTITUDE": define(
    `The relative altitude of the threat object.`,
    Meters,
    Float64
  ),
  "FLARM THREAT TIME TO COLLISION": define(
    `The estimated time to a collision.`,
    Seconds,
    Float64
  ),
  "FLARM THREAT VERTICAL BEARING": define(
    `The vertical bearing towards the threat.`,
    Degrees,
    Float64
  ),
};

const GPS = {
  "GPS APPROACH AIRPORT ID": define(`ID of airport.`, NullUnit, String32),
  "GPS APPROACH APPROACH ID": define(`ID of approach.`, NullUnit, String32),
  "GPS APPROACH APPROACH INDEX": define(
    `Index of approach for given airport.`,
    Number,
    SInt32
  ),
  "GPS APPROACH APPROACH TYPE": define(`Approach type.`, Enum, SInt32),
  "GPS APPROACH IS FINAL": define(
    `Is approach transition final approach segment.`,
    Bool,
    SInt32
  ),
  "GPS APPROACH IS MISSED": define(
    `Is approach segment missed approach segment.`,
    Bool,
    SInt32
  ),
  "GPS APPROACH IS WP RUNWAY": define(`Waypoint is the runway.`, Bool, SInt32),
  "GPS APPROACH MODE": define(`Sub mode within approach mode.`, Enum, SInt32),
  "GPS APPROACH SEGMENT TYPE": define(
    `Segment type within approach.`,
    Enum,
    SInt32
  ),
  "GPS APPROACH TIMEZONE DEVIATION": define(
    `Deviation of local time from GMT.`,
    Seconds,
    Float64
  ),
  "GPS APPROACH TRANSITION ID": define(
    `ID of approach transition.`,
    NullUnit,
    SString32
  ),
  "GPS APPROACH TRANSITION INDEX": define(
    `Index of approach transition.`,
    Number,
    SInt32
  ),
  "GPS APPROACH WP COUNT": define(`Number of waypoints.`, Number, SInt32),
  "GPS APPROACH WP INDEX": define(`Index of current waypoint.`, Number, SInt32),
  "GPS APPROACH WP TYPE": define(
    `Waypoint type within approach mode.`,
    Enum,
    SInt32
  ),
  "GPS CDI NEEDLE": define(
    `The course deviation of the needle for a CDI instrument. The SimVar displays the deviation from -127 to +127. It returns a value if a flight plan is set (otherwise it will return 0) even if the autopilot isn't on GPS mode. Scaling can also be set through the GPS CDI SCALING simvar.`,
    Number,
    Int32
  ),
  "GPS CDI SCALING": define(
    `The full scale deflection of the CDI due to GPS cross-track error, in meters.`,
    Meters,
    SFloat64
  ),
  "GPS COURSE TO STEER": define(
    `Suggested heading to steer (for autopilot).`,
    Radians,
    SFloat64
  ),
  "GPS DRIVES NAV1": define(
    `GPS is driving Nav 1 indicator. Note this setting will also affect the SimVars HSI_STATION_IDENT and HSI_BEARING.`,
    Bool,
    Int32
  ),
  "GPS ETA": define(
    `Estimated time of arrival at destination.`,
    Seconds,
    Float64
  ),
  "GPS ETE": define(
    `Estimated time en route to destination.`,
    Seconds,
    Float64
  ),
  "GPS FLIGHTPLAN TOTAL DISTANCE": define(
    `This is the complete flightplan length from start to end. Essentially the cumulative length of all the flight plan legs added together.`,
    Meters,
    Float64
  ),
  "GPS FLIGHT PLAN WP COUNT": define(`Number of waypoints.`, Number, SInt32),
  "GPS FLIGHT PLAN WP INDEX": define(`Index of waypoint.`, Number, SInt32),
  "GPS GROUND MAGNETIC TRACK": define(
    `Current magnetic ground track.`,
    Radians,
    SFloat64
  ),
  "GPS GROUND SPEED": define(
    `Current ground speed.`,
    MetersPerSecond,
    SFloat64
  ),
  "GPS GROUND TRUE HEADING": define(`Current true heading.`, Radians, SFloat64),
  "GPS GROUND TRUE TRACK": define(
    `Current true ground track.`,
    Radians,
    SFloat64
  ),
  "GPS GSI SCALING": define(
    `The full scale deflection of the vertical GSI due to GPS glidepath deviation, in meters.`,
    Meters,
    SFloat64
  ),
  "GPS HAS GLIDEPATH": define(
    `Whether or not the GPS system has a presently available glidepath for guidance. Only applicable with GPS_OVERRIDDEN. When true and in GPS OVERRIDDEN, HSI_GSI_NEEDLE_VALID will also be true.`,
    Bool,
    SInt32
  ),
  // THIS VAR DOES NOT SEEM TO WORK, FOR REASONS I DON'T UNDERSTAND
  // "GPS HSI NEEDLE": define(
  //   `The glide deviation of the needle for a CDI instrument. The simvar displays the deviation from -127 to +127. It returns a value if a flight plan is set (otherwise it will return 0) even if the autopilot isn't on GPS mode. Scaling can also be set through the GPS CDI SCALING simvar.`,
  //   Number,
  //   Int32,
  // },
  "GPS IS ACTIVE FLIGHT PLAN": define(`Flight plan mode active.`, Bool, SInt32),
  "GPS IS ACTIVE WAY POINT": define(`Waypoint mode active.`, Bool, SInt32),
  "GPS IS ACTIVE WP LOCKED": define(
    `Is switching to next waypoint locked.`,
    Bool,
    Int32
  ),
  "GPS IS APPROACH ACTIVE": define(`Is approach mode active.`, Bool, Int32),
  "GPS IS APPROACH LOADED": define(`Is approach loaded.`, Bool, Int32),
  "GPS IS ARRIVED": define(`Is flight plan destination reached.`, Bool, SInt32),
  "GPS IS DIRECTTO FLIGHTPLAN": define(
    `Is Direct To Waypoint mode active.`,
    Bool,
    SInt32
  ),
  "GPS MAGVAR": define(`Current GPS magnetic variation.`, Radians, SFloat64),
  "GPS OBS ACTIVE": define(
    `Whether or not the OBS mode is currently active (disable the automatic sequencing of waypoints in GPS flight plan).`,
    Bool,
    SInt32
  ),
  "GPS OBS VALUE": define(
    `This is the currently selected OBS course in degrees, from 0 to 360.`,
    Degrees,
    SFloat64
  ),
  "GPS OVERRIDDEN": define(
    `When it is active, all sim GPS system updates are suspended. This must be set to TRUE to be able to correctly set to any other GPS SimVar.`,
    Bool,
    SInt32
  ),
  "GPS POSITION ALT": define(`Current GPS altitude.`, Meters, SFloat64),
  "GPS POSITION LAT": define(`Current GPS latitude.`, Degrees, SFloat64),
  "GPS POSITION LON": define(`Current GPS longitude.`, Degrees, SFloat64),
  "GPS TARGET ALTITUDE": define(`Altitude of GPS target.`, Meters, SFloat64),
  "GPS TARGET DISTANCE": define(`Distance to target.`, Meters, SFloat64),
  "GPS VERTICAL ANGLE": define(`Glidepath in degrees.`, Degrees, SFloat64),
  "GPS VERTICAL ANGLE ERROR": define(
    `Vertical error in degrees from GlidePath.`,
    Degrees,
    SFloat64
  ),
  "GPS VERTICAL ERROR": define(
    `Vertical deviation in meters from GlidePath.`,
    Meters,
    SFloat64
  ),
  "GPS WP BEARING": define(`Magnetic bearing to waypoint.`, Radians, SFloat64),
  "GPS WP CROSS TRK": define(`Cross track distance.`, Meters, SFloat64),
  "GPS WP DESIRED TRACK": define(
    `The required heading (magnetic) from the previous waypoint to the next waypoint.`,
    Radians,
    SFloat64
  ),
  "GPS WP DISTANCE": define(`Distance to waypoint.`, Meters, SFloat64),
  "GPS WP ETA": define(
    `Estimated time of arrival at waypoint.`,
    Seconds,
    SFloat64
  ),
  "GPS WP ETE": define(
    `Estimated time en route to waypoint.`,
    Seconds,
    SFloat64
  ),
  "GPS WP NEXT ALT": define(`Altitude of next waypoint.`, Meters, SFloat64),
  "GPS WP NEXT ID": define(`ID of next GPS waypoint.`, NullUnit, SString32),
  "GPS WP NEXT LAT": define(`Latitude of next waypoint.`, Degrees, SFloat64),
  "GPS WP NEXT LON": define(`Longitude of next waypoint.`, Degrees, SFloat64),
  "GPS WP PREV ALT": define(`Altitude of previous waypoint.`, Meters, SFloat64),
  "GPS WP PREV ID": define(`ID of previous GPS waypoint.`, NullUnit, SString32),
  "GPS WP PREV LAT": define(
    `Latitude of previous waypoint.`,
    Degrees,
    SFloat64
  ),
  "GPS WP PREV LON": define(
    `Longitude of previous waypoint.`,
    Degrees,
    SFloat64
  ),
  "GPS WP PREV VALID": define(
    `Is previous waypoint valid (i.e. current waypoint is not the first waypoint).`,
    Bool,
    SInt32
  ),
  "GPS WP TRACK ANGLE ERROR": define(
    `Tracking angle error to waypoint.`,
    Radians,
    SFloat64
  ),
  "GPS WP TRUE BEARING": define(`True bearing to waypoint.`, Radians, SFloat64),
  "GPS WP TRUE REQ HDG": define(
    `Required true heading to waypoint.`,
    Radians,
    SFloat64
  ),
  "GPS WP VERTICAL SPEED": define(
    `Vertical speed to waypoint.`,
    MetersPerSecond,
    SFloat64
  ),
};

const HSI = {
  "HSI BEARING": define(
    `If the GPS_DRIVES_NAV1 variable is true and the HSI BEARING VALID variable is true, this variable contains the HSI needle bearing. If the GPS DRIVES NAV1 variable is false and the HSI BEARING VALID variable is true, this variable contains the ADF1 frequency.`,
    Degrees,
    Float64
  ),
  "HSI BEARING VALID": define(
    `This will return true if the HSI BEARING variable contains valid data.`,
    Bool,
    Int32
  ),
  "HSI CDI NEEDLE": define(`Needle deflection (+/- 127).`, Number, Int32),
  "HSI CDI NEEDLE VALID": define(`Signal valid.`, Bool, Int32),
  "HSI DISTANCE": define(`DME/GPS distance.`, NM, Float64),
  "HSI GSI NEEDLE": define(`Needle deflection (+/- 119).`, Number, Int32),
  "HSI GSI NEEDLE VALID": define(`Signal valid.`, Bool, Int32),
  "HSI HAS LOCALIZER": define(`Station is a localizer.`, Bool, Int32),
  "HSI SPEED": define(`DME/GPS speed.`, Knots, Float64),
  "HSI STATION IDENT": define(
    `Returns the ident of the the next GPS waypoint, if GPS_DRIVES_NAV1 is true. If GPS DRIVES NAV1 is false, it returns the identity of the station that is tuned on nav radio 1.`,
    NullUnit,
    String32
  ),
  "HSI TF FLAGS": define(`Nav TO/FROM flag.`, Enum, Int32),
};

const MARKERS = {
  "INNER MARKER": define(`Inner marker state.`, Bool, SInt32),
  // "INNER MARKER LATLONALT": define(
  //   `Returns the latitude, longitude and altitude of the inner marker of an approach to a runway, if the aircraft is within the required proximity, otherwise it will return zeros.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "MARKER AVAILABLE": define(`True if Marker is available.`, Bool, Int32),
  "MARKER BEACON SENSITIVITY HIGH": define(
    `Whether or not the Marker Beacon is in High Sensitivity mode.`,
    Bool,
    Int32
  ),
  "MARKER BEACON STATE": define(`Marker beacon state.`, Enum, SInt32),
  "MARKER BEACON TEST MUTE": define(
    `Whether or not the Marker Beacon is in Test/Mute mode.`,
    Bool,
    Int32
  ),
  "MARKER SOUND": define(`Marker audio flag.`, Bool, Int32),
  "MIDDLE MARKER": define(`Middle marker state.`, Bool, SInt32),
  // "MIDDLE MARKER LATLONALT": define(
  //   `Returns the latitude, longitude and altitude of the middle marker.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "OUTER MARKER": define(`Outer marker state.`, Bool, SInt32),
  // "OUTER MARKER LATLONALT": define(
  //   `Returns the latitude, longitude and altitude of the outer marker.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
};

const NAV = {
  "NAV ACTIVE FREQUENCY:index": define(
    `Nav active frequency. Index is 1 or 2.`,
    MHz,
    Float64
  ),
  "NAV AVAILABLE:index": define(
    `Flag if Nav equipped on aircraft.`,
    Bool,
    Int32
  ),
  "NAV BACK COURSE FLAGS:index": define(
    `Returns the listed bit flags.`,
    Flags,
    Int32
  ),
  "NAV CDI:index": define(`CDI needle deflection (+/- 127).`, Number, Int32),
  "NAV CLOSE DME:index": define(
    `Closest DME distance. Requires an index value from 1 to 4 to set which NAV to target.`,
    NM,
    Float64
  ),
  "NAV CLOSE FREQUENCY:index": define(
    `Closest Localizer course frequency. Requires an index value from 1 to 4 to set which NAV to target.`,
    Hz,
    Float64
  ),
  "NAV CLOSE IDENT:index": define(
    `ICAO code. Requires an index value from 1 to 4 to set which NAV to target.`,
    NullUnit,
    String32
  ),
  "NAV CLOSE LOCALIZER:index": define(
    `Closest Localizer course heading. Requires an index value from 1 to 4 to set which NAV to target.`,
    Degrees,
    Float64
  ),
  "NAV CLOSE NAME:index": define(
    `Descriptive name. Requires an index value from 1 to 4 to set which NAV to target.`,
    NullUnit,
    String32
  ),
  "NAV CODES": define(
    `Returns bit flags with the listed meaning.`,
    Flags,
    Int32
  ),
  "NAV DME": define(`DME distance.`, NM, Float64),
  "NAV DMESPEED": define(`DME speed.`, Knots, Float64),
  // "NAV DME LATLONALT:index": define(
  //   `Returns the DME station.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "NAV FREQUENCY": define(`Localizer course frequency`, Hz, Float64),
  "NAV GLIDE SLOPE": define(
    `The glide slope gradient. The value returned is an integer value formed as sin(slope) * 65536 * 2`,
    Number,
    Int32
  ),
  "NAV GLIDE SLOPE ERROR": define(
    `Difference between current position and glideslope angle. Note that this provides 32 bit floating point precision, rather than the 8 bit integer precision of NAV GSI.`,
    Degrees,
    Float64
  ),
  "NAV GLIDE SLOPE LENGTH": define(
    `The distance between the plane and the Glide beacon.`,
    Feet,
    Float64
  ),
  "NAV GSI": define(
    `Glideslope needle deflection (+/- 119). Note that this provides only 8 bit precision, whereas NAV GLIDE SLOPE ERROR provides 32 bit floating point precision.`,
    Number,
    Int32
  ),
  "NAV GS FLAG": define(`Glideslope flag.`, Bool, Int32),
  // "NAV GS LATLONALT:index": define(
  //   `Returns the glide slope.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  // "NAV GS LLAF64": define(
  //   `Nav GS latitude, longitude, altitude.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "NAV HAS CLOSE DME": define(
    `Flag if found a close station with a DME.`,
    Bool,
    Int32
  ),
  "NAV HAS CLOSE LOCALIZER": define(
    `Flag if found a close localizer station.`,
    Bool,
    Int32
  ),
  "NAV HAS DME": define(`Flag if tuned station has a DME.`, Bool, Int32),
  "NAV HAS GLIDE SLOPE": define(
    `Flag if tuned station has a glide slope.`,
    Bool,
    Int32
  ),
  "NAV HAS LOCALIZER": define(
    `Flag if tuned station is a localizer.`,
    Bool,
    Int32
  ),
  "NAV HAS NAV": define(`Flag if Nav has signal.`, Bool, Int32),
  "NAV HAS TACAN": define(`Flag if Nav has a Tacan.`, Bool, Int32),
  "NAV IDENT": define(`ICAO code.`, NullUnit, String32),
  "NAV LOCALIZER": define(`Localizer course heading.`, Degrees, Float64),
  "NAV LOC AIRPORT IDENT": define(
    `The airport ICAO ident for the localizer that is currently tuned on the nav radio (like 'EGLL' or 'KJFK')`,
    NullUnit,
    String32
  ),
  "NAV LOC RUNWAY DESIGNATOR": define(
    `The letter code for the runway that the currently tuned localizer is tuned to.`,
    NullUnit,
    String32
  ),
  "NAV LOC RUNWAY NUMBER": define(
    `NAV LOC RUNWAY NUMBER - The number portion of the runway that the currently tuned localizer is tuned to (so if the runway was 15L, this would be 15).`,
    NullUnit,
    String32
  ),
  "NAV MAGVAR": define(
    `Magnetic variation of tuned Nav station.`,
    Degrees,
    Float64
  ),
  "NAV NAME": define(`Descriptive name.`, NullUnit, String32),
  "NAV OBS": define(`OBS setting. Index of 1 or 2.`, Degrees, Float64),
  "NAV RADIAL": define(`Radial that aircraft is on.`, Degrees, Float64),
  "NAV RADIAL ERROR": define(
    `Difference between current radial and OBS tuned radial.`,
    Degrees,
    Float64
  ),
  "NAV RAW GLIDE SLOPE": define(`The glide slope angle.`, Degrees, Float64),
  "NAV RELATIVE BEARING TO STATION": define(
    `Relative bearing to station.`,
    Degrees,
    Float64
  ),
  "NAV SIGNAL": define(`Nav signal strength.`, Number, Int32),
  "NAV SOUND:index": define(`Nav audio flag. Index of 1 or 2.`, Bool, Int32),
  "NAV STANDBY FREQUENCY:index": define(
    `Nav standby frequency. Index is 1 or 2.`,
    MHz,
    Float64
  ),
  "NAV TOFROM": define(
    `Returns whether the Nav is going to or from the current radial (or is off).`,
    Enum,
    Int32
  ),
  "NAV VOLUME": define(`The volume of the Nav radio.`, Percent, Float64),
  "NAV VOR DISTANCE": define(`Distance of the VOR beacon.`, Meters, Float64),
  // "NAV VOR LATLONALT:index": define(
  //   `Returns the VOR station latitude, longitude and altitude.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  // "NAV VOR LLAF64": define(
  //   `Nav VOR latitude, longitude, altitude.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
};

const TACAN = {
  "TACAN ACTIVE CHANNEL:index": define(
    `The active channel used by the indexed Tacan receiver on the aircraft, from 1 to 127.`,
    Number,
    Int32
  ),
  "TACAN ACTIVE MODE:index": define(
    `The active mode used by the indexed Tacan receiver on the aircraft, where 0 = X and 1 = Y.`,
    Bool,
    Int32
  ),
  "TACAN AVAILABLE:index": define(
    `Will be TRUE (1) if NAV1, NAV2, NAV3 or NAV4 can receive Tacan (depending on the index - 1, 2, 3, or 4), or FALSE (0) otherwise.`,
    Bool,
    Int32
  ),
  "TACAN DRIVES NAV1:index": define(
    `Tells whether the Tacan is driving the Nav 1 indicator (TRUE, 1) or not (FALSE, 0), for autopilot purposes.`,
    Bool,
    Int32
  ),
  "TACAN OBS:index": define(
    `The Tacan OBS setting, in degrees.`,
    Degrees,
    Float64
  ),
  "TACAN STANDBY CHANNEL:index": define(
    `The standby channel used by the indexed Tacan receiver on the aircraft, from 1 to 127.`,
    Number,
    Int32
  ),
  "TACAN STANDBY MODE:index": define(
    `Indicates the indexed Tacan receiver standby mode, where 0 = X and 1 = Y.`,
    Bool,
    Int32
  ),
  "TACAN STATION CDI:index": define(
    `The CDI needle deflection amount(course deviation) to the station. Can be +/- 127.`,
    Number,
    Int32
  ),
  "TACAN STATION DISTANCE:index": define(
    `The distance between the Tacan station position and the aircraft position. The index value refers to the Tacan receiver connected to the station (1 or 2).`,
    Meters,
    Float64
  ),
  "TACAN STATION IDENT:index": define(
    `The tuned station identifier for the indexed Tacan.`,
    NullUnit,
    String32
  ),
  // "TACAN STATION LATLONALT:index": define(
  //   `Retrieves the latitude, longitude and altitude of the Tacan station.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "TACAN STATION RADIAL:index": define(
    `The radial between the Tacan station and the aircraft.`,
    Degrees,
    Float64
  ),
  "TACAN STATION RADIAL ERROR:index": define(
    `Difference between the current radial and OBS tuned radial, in degrees.`,
    Degrees,
    Float64
  ),
  "TACAN STATION TOFROM:index": define(
    `Returns whether the indexed Tacan is going to or from the current radial (or is off).`,
    Enum,
    Int32
  ),
  "TACAN VOLUME:index": define(
    `The volume value of the indexed Tacan receiver on the aircraft.`,
    PercentOver100,
    Float64
  ),
};

const MISC = {
  "COPILOT TRANSMITTER TYPE": define(
    `On which channel the copilot is transmitting.`,
    Enum,
    Int32
  ),
  "COPILOT TRANSMITTING": define(
    `Whether or not the copilot is transmitting`,
    Bool,
    Int32
  ),
  "PILOT TRANSMITTER TYPE": define(
    `On which channel the pilot is transmitting.`,
    Enum,
    Int32
  ),
  "PILOT TRANSMITTING": define(
    `Whether or not the pilot is transmitting.`,
    Bool,
    Int32
  ),
  "RADIO HEIGHT": define(`Radar altitude.`, Feet, Float64),
  "TRANSPONDER AVAILABLE": define(
    `True if a transponder is available.`,
    Bool,
    Int32
  ),
  "TRANSPONDER CODE:index": define(`4-digit code.`, Number, Int32),
  "TRANSPONDER IDENT": define(
    `This can set the Ident transponder using the KEY_XPNDR_IDENT_SET, KEY_XPNDR_IDENT_TOGGLE, KEY_XPNDR_IDENT_ON or KEY_XPNDR_IDENT_OFF Event IDs (see XPNDR (Transponder) section for more information). When set to true, it will automatically turn false after 18 seconds.`,
    Bool,
    SInt32
  ),
  "TRANSPONDER STATE": define(`Transponder State.`, Enum, SInt32),
};

export const AircraftRadioNavigationVariables = {
  ...ADF,
  ...ATC,
  ...COM,
  ...FLARM,
  ...GPS,
  ...HSI,
  ...MARKERS,
  ...NAV,
  ...TACAN,
  ...MISC,
};
