// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_RadioNavigation_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const ADF = {
  "ADF ACTIVE FREQUENCY:index": {
    desc: `ADF frequency. Index of 1 or 2.`,
    units: `frequency ADF BCD32`,
    ...dataType(`Float64`),
  },
  "ADF AVAILABLE:index": {
    desc: `True if ADF is available`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ADF CARD": {
    desc: `ADF compass rose setting`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ADF IDENT": {
    desc: `ICAO code`,
    units: null,
    ...dataType(`String32`),
  },
  //   "ADF LATLONALT:index": {
  //     desc:`Returns the latitude, longitude and altitude of the station the radio equipment is currently tuned to, or zeros if the radio is not tuned to any ADF station. Index of 1 or 2 for ADF 1 and ADF 2.`,
  //     units:`SIMCONNECT_DATA_LATLONALT`,
  //   },
  "ADF NAME:index": {
    desc: `Descriptive name`,
    units: null,
    ...dataType(`String32`),
  },
  "ADF RADIAL:index": {
    desc: `Current direction from NDB station`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ADF RADIAL MAG:index": {
    desc: `Returns the magnetic bearing to the currently tuned ADF transmitter.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ADF SIGNAL:index": {
    desc: `Signal strength`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "ADF SOUND:index": {
    desc: `ADF audio flag. Index of 0 or 1.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ADF STANDBY AVAILABLE:index": {
    desc: `True if ADF Standby is available`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ADF STANDBY FREQUENCY:index": {
    desc: `ADF standby frequency`,
    units: `Hz`,
    ...dataType(`Float64`),
  },
  "ADF VOLUME": {
    desc: `Returns the volume of the ADF`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
};

const ATC = {
  "ATC AIRLINE": {
    desc: `The name of the Airline used by ATC, as a string with a maximum length of 50 characters.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "ATC AIRPORT IS TOWERED": {
    desc: `If the airport is controlled, this boolean is true.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC CLEARED IFR": {
    desc: `Returns whether or not the user has filed an IFR flightplan that has been cleared by the sim ATC`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC CLEARED LANDING": {
    desc: `Whether the ATC has cleared the plane for landing.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC CLEARED TAKEOFF": {
    desc: `Whether the ATC has cleared the plane for takeoff.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC CLEARED TAXI": {
    desc: `Whether the ATC has cleared the plane for taxi.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC CURRENT WAYPOINT ALTITUDE": {
    desc: `Returns the target altitude for the current ATC flightplan waypoint.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC FLIGHT NUMBER": {
    desc: `Flight Number used by ATC, as a string with a maximum number of 6 characters.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "ATC FLIGHTPLAN DIFF ALT": {
    desc: `Altitude between the position of the aircraft and his closest waypoints in the flightplan.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC FLIGHTPLAN DIFF DISTANCE": {
    desc: `Returns the lateral distance the user's plane is from the ATC flight plan track.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC FLIGHTPLAN DIFF HEADING": {
    desc: `Heading between the position of the aircraft and his closest waypoints in the flightplan.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ATC HEAVY": {
    desc: `Is this aircraft recognized by ATC as heavy.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "ATC ID": {
    desc: `ID used by ATC, as a string with a maximum number of 10 characters.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "ATC IFR FP TO REQUEST": {
    desc: `Returns true if the user has a valid IFR flight plan they can as for clearance for with ATC at the airport they are currently at.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC MODEL": {
    desc: `Model used by ATC, as a string with a maximum number of 10 characters.`,
    units: null,
    ...dataType(`String32`),
  },
  "ATC ON PARKING SPOT": {
    desc: `Is ATC aircraft on parking spot.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC PREVIOUS WAYPOINT ALTITUDE": {
    desc: `Returns the target altitude for the previous ATC flightplan waypoint.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY AIRPORT NAME": {
    desc: `The name of the airport of the runway assigned by the ATC. Returns "" if no runway is assigned.`,
    units: null,
    ...dataType(`String32`),
  },
  "ATC RUNWAY DISTANCE": {
    desc: `This float represents the distance between the player's plane and the center of the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY END DISTANCE": {
    desc: `This is a float corresponding to the horizontal distance between the player's plane and the end of the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY HEADING DEGREES TRUE": {
    desc: `This float represents the true heading of the runway selected by the ATC.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY LENGTH": {
    desc: `The length of the runway assigned by the ATC. Returns -1 if no runway is assigned.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY RELATIVE POSITION X": {
    desc: `This is a float corresponding to the player's main gear relative X (transverse) position on the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY RELATIVE POSITION Y": {
    desc: `This is a float corresponding to the player's main gear relative Y (height) position on the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY RELATIVE POSITION Z": {
    desc: `This is a float corresponding to the player's main gear relative Z (longitudinal) position on the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY SELECTED": {
    desc: `This is a boolean corresponding to whether or not the ATC has pre-selected a runway for the player's plane. If this is false, every other ATC RUNWAY * SimVar will return default values.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATC RUNWAY START DISTANCE": {
    desc: `This is a float corresponding to the horizontal distance between the player's plane and the start of the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY TDPOINT RELATIVE POSITION X": {
    desc: `This float represents the player's main gear relative X (transverse) position according to the aiming point of the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY TDPOINT RELATIVE POSITION Y": {
    desc: `This float represents the player's main gear relative Y (height) position according to the aiming point of the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY TDPOINT RELATIVE POSITION Z": {
    desc: `This float represents the player's main relative Z (longitudinal) position according to the aiming point of the runway selected by the ATC.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC RUNWAY WIDTH": {
    desc: `The width of the runway assigned by the ATC. Returns -1 if no runway is assigned.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC SUGGESTED MIN RWY LANDING": {
    desc: `Suggested minimum runway length for landing. Used by ATC.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ATC SUGGESTED MIN RWY TAKEOFF": {
    desc: `Suggested minimum runway length for takeoff. Used by ATC.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ATC TAXIPATH DISTANCE": {
    desc: `Returns the lateral distance the user's plane is from the path of the currently issued ATC taxi instructions.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "ATC TYPE": {
    desc: `Type used by ATC.`,
    units: null,
    ...dataType(`String32`),
  },
};

const COM = {
  "COM1 STORED FREQUENCY": {
    desc: `The stored COM 1/2/3 frequency value.`,
    units: `Frequency BCD16`,
    ...dataType(`Int32`),
  },
  "COM2 STORED FREQUENCY": {
    desc: `The stored COM 1/2/3 frequency value.`,
    units: `Frequency BCD16`,
    ...dataType(`Int32`),
  },
  "COM3 STORED FREQUENCY": {
    desc: `The stored COM 1/2/3 frequency value.`,
    units: `Frequency BCD16`,
    ...dataType(`Int32`),
  },
  "COM ACTIVE BEARING:index": {
    desc: `Gives the bearing (in degrees) of the active COM station (airport) or a value less than 0 if the station does not belong to an airport. Index is 1, 2 or 3.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "COM ACTIVE DISTANCE:index": {
    desc: `Gives the distance (in meters) to the active COM station (airport) or a value less than -180° if the station does not belong to an airport. Index is 1, 2 or 3.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "COM ACTIVE FREQUENCY:index": {
    desc: `Com frequency. Index is 1, 2 or 3.`,
    units: `Frequency BCD16`,
    ...dataType(`Int32`),
  },
  "COM ACTIVE FREQ IDENT:index": {
    desc: `The identity of the station that is tuned on the indexed active COM radio. Index is 1, 2, or 3.`,
    units: null,
    ...dataType(`String32`),
  },
  "COM ACTIVE FREQ TYPE:index": {
    desc: `The type of COM frequency for the active indexed COM system. Index is 1, 2, or 3.`,
    units: null,
    ...dataType(`String32`),
  },
  // "COM ACTIVE LATLONALT:index": {
  //   desc: `See documentation`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "COM AVAILABLE:index": {
    desc: `True if COM1, COM2 or COM3 is available (depending on the index, either 1, 2, or 3)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  // "COM LATLONALT:index": {
  //   desc: `Not currently used in the simulation.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "COM RECEIVE:index": {
    desc: `Whether or not the plane is receiving on the indexed com channel or not (either 1, 2, or 3 for the index).`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "COM RECEIVE ALL": {
    desc: `Toggles all COM radios to receive on`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "COM RECEIVE EX1:index": {
    desc: `Whether or not the plane is receiving on the indexed com channel. Index is 1, 2 or 3.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "COM SPACING MODE:index": {
    desc: `The COM radio frequency step. Index is 1, 2 or 3.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "COM STANDBY FREQUENCY:index": {
    desc: `Com standby frequency. Index is 1, 2 or 3.`,
    units: `Frequency BCD16`,
    ...dataType(`Int32`),
  },
  "COM STANDBY FREQ IDENT:index": {
    desc: `The identity of the station that is tuned on the indexed standby COM radio. Index is 1, 2, or 3.`,
    units: null,
    ...dataType(`String32`),
  },
  "COM STANDBY FREQ TYPE:index": {
    desc: `The type of COM frequency for the standby indexed COM system. Index is 1, 2, or 3.`,
    units: null,
    ...dataType(`String32`),
  },
  "COM STATUS:index": {
    desc: `Radio status flag for the indexed com channel. Index is 1, 2 or 3.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "COM TEST:index": {
    desc: `Enter an index of 1, 2 or 3. Will return TRUE if the COM system is working, FALSE otherwise.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "COM TRANSMIT:index": {
    desc: `Audio panel com transmit state. Index of 1, 2 or 3.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "COM VOLUME": {
    desc: `The volume of the COM Radio.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
};

const FLARM = {
  "FLARM AVAILABLE": {
    desc: `Whether the FLARM is available (TRUE, 1) or not (FALSE, 0).`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLARM THREAT BEARING": {
    desc: `The bearing of the FLARM threat aircraft, relative to track.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  // FLARM THREAT DATA The FLARM threat aircraft data structure, which contains data about the perceived threat, returned as a struct. Struct
  "FLARM THREAT DISTANCE": {
    desc: `The distance to the FLARM threat object.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "FLARM THREAT HEADING": {
    desc: `The heading to the FLARM threat object.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "FLARM THREAT RELATIVE ALTITUDE": {
    desc: `The relative altitude of the threat object.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "FLARM THREAT TIME TO COLLISION": {
    desc: `The estimated time to a collision.`,
    units: `seconds`,
    ...dataType(`Float64`),
  },
  "FLARM THREAT VERTICAL BEARING": {
    desc: `The vertical bearing towards the threat.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
};

const GPS = {
  "GPS APPROACH AIRPORT ID": {
    desc: `ID of airport.`,
    units: null,
    ...dataType(`String32`),
  },
  "GPS APPROACH APPROACH ID": {
    desc: `ID of approach.`,
    units: null,
    ...dataType(`String32`),
  },
  "GPS APPROACH APPROACH INDEX": {
    desc: `Index of approach for given airport.`,
    units: `Number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH APPROACH TYPE": {
    desc: `Approach type.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH IS FINAL": {
    desc: `Is approach transition final approach segment.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH IS MISSED": {
    desc: `Is approach segment missed approach segment.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH IS WP RUNWAY": {
    desc: `Waypoint is the runway.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH MODE": {
    desc: `Sub mode within approach mode.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH SEGMENT TYPE": {
    desc: `Segment type within approach.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH TIMEZONE DEVIATION": {
    desc: `Deviation of local time from GMT.`,
    units: `Seconds`,
    ...dataType(`Float64`),
  },
  "GPS APPROACH TRANSITION ID": {
    desc: `ID of approach transition.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "GPS APPROACH TRANSITION INDEX": {
    desc: `Index of approach transition.`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH WP COUNT": {
    desc: `Number of waypoints.`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH WP INDEX": {
    desc: `Index of current waypoint.`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS APPROACH WP TYPE": {
    desc: `Waypoint type within approach mode.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS CDI NEEDLE": {
    desc: `The course deviation of the needle for a CDI instrument. The SimVar displays the deviation from -127 to +127. It returns a value if a flight plan is set (otherwise it will return 0) even if the autopilot isn't on GPS mode. Scaling can also be set through the GPS CDI SCALING simvar.`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "GPS CDI SCALING": {
    desc: `The full scale deflection of the CDI due to GPS cross-track error, in meters.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS COURSE TO STEER": {
    desc: `Suggested heading to steer (for autopilot).`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS DRIVES NAV1": {
    desc: `GPS is driving Nav 1 indicator. Note this setting will also affect the SimVars HSI_STATION_IDENT and HSI_BEARING.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GPS ETA": {
    desc: `Estimated time of arrival at destination.`,
    units: `seconds`,
    ...dataType(`Float64`),
  },
  "GPS ETE": {
    desc: `Estimated time en route to destination.`,
    units: `seconds`,
    ...dataType(`Float64`),
  },
  "GPS FLIGHTPLAN TOTAL DISTANCE": {
    desc: `This is the complete flightplan length from start to end. Essentially the cumulative length of all the flight plan legs added together.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  "GPS FLIGHT PLAN WP COUNT": {
    desc: `Number of waypoints.`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS FLIGHT PLAN WP INDEX": {
    desc: `Index of waypoint.`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS GROUND MAGNETIC TRACK": {
    desc: `Current magnetic ground track.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS GROUND SPEED": {
    desc: `Current ground speed.`,
    units: `Meters per second`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS GROUND TRUE HEADING": {
    desc: `Current true heading.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS GROUND TRUE TRACK": {
    desc: `Current true ground track.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS GSI SCALING": {
    desc: `The full scale deflection of the vertical GSI due to GPS glidepath deviation, in meters.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS HAS GLIDEPATH": {
    desc: `Whether or not the GPS system has a presently available glidepath for guidance. Only applicable with GPS_OVERRIDDEN. When true and in GPS OVERRIDDEN, HSI_GSI_NEEDLE_VALID will also be true.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  // THIS VAR DOES NOT SEEM TO WORK, FOR REASONS I DON'T UNDERSTAND
  // "GPS HSI NEEDLE": {
  //   desc: `The glide deviation of the needle for a CDI instrument. The simvar displays the deviation from -127 to +127. It returns a value if a flight plan is set (otherwise it will return 0) even if the autopilot isn't on GPS mode. Scaling can also be set through the GPS CDI SCALING simvar.`,
  //   units: `number`,
  //   ...dataType(`Int32`),
  // },
  "GPS IS ACTIVE FLIGHT PLAN": {
    desc: `Flight plan mode active.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS IS ACTIVE WAY POINT": {
    desc: `Waypoint mode active.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS IS ACTIVE WP LOCKED": {
    desc: `Is switching to next waypoint locked.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GPS IS APPROACH ACTIVE": {
    desc: `Is approach mode active.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GPS IS APPROACH LOADED": {
    desc: `Is approach loaded.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GPS IS ARRIVED": {
    desc: `Is flight plan destination reached.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS IS DIRECTTO FLIGHTPLAN": {
    desc: `Is Direct To Waypoint mode active.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS MAGVAR": {
    desc: `Current GPS magnetic variation.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS OBS ACTIVE": {
    desc: `Whether or not the OBS mode is currently active (disable the automatic sequencing of waypoints in GPS flight plan).`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS OBS VALUE": {
    desc: `This is the currently selected OBS course in degrees, from 0 to 360.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS OVERRIDDEN": {
    desc: `When it is active, all sim GPS system updates are suspended. This must be set to TRUE to be able to correctly set to any other GPS SimVar.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS POSITION ALT": {
    desc: `Current GPS altitude.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS POSITION LAT": {
    desc: `Current GPS latitude.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS POSITION LON": {
    desc: `Current GPS longitude.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS TARGET ALTITUDE": {
    desc: `Altitude of GPS target.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS TARGET DISTANCE": {
    desc: `Distance to target.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS VERTICAL ANGLE": {
    desc: `Glidepath in degrees.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS VERTICAL ANGLE ERROR": {
    desc: `Vertical error in degrees from GlidePath.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS VERTICAL ERROR": {
    desc: `Vertical deviation in meters from GlidePath.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP BEARING": {
    desc: `Magnetic bearing to waypoint.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP CROSS TRK": {
    desc: `Cross track distance.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP DESIRED TRACK": {
    desc: `The required heading (magnetic) from the previous waypoint to the next waypoint.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP DISTANCE": {
    desc: `Distance to waypoint.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP ETA": {
    desc: `Estimated time of arrival at waypoint.`,
    units: `seconds`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP ETE": {
    desc: `Estimated time en route to waypoint.`,
    units: `seconds`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP NEXT ALT": {
    desc: `Altitude of next waypoint.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP NEXT ID": {
    desc: `ID of next GPS waypoint.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "GPS WP NEXT LAT": {
    desc: `Latitude of next waypoint.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP NEXT LON": {
    desc: `Longitude of next waypoint.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP PREV ALT": {
    desc: `Altitude of previous waypoint.`,
    units: `meters`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP PREV ID": {
    desc: `ID of previous GPS waypoint.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "GPS WP PREV LAT": {
    desc: `Latitude of previous waypoint.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP PREV LON": {
    desc: `Longitude of previous waypoint.`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP PREV VALID": {
    desc: `Is previous waypoint valid (i.e. current waypoint is not the first waypoint).`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPS WP TRACK ANGLE ERROR": {
    desc: `Tracking angle error to waypoint.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP TRUE BEARING": {
    desc: `True bearing to waypoint.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP TRUE REQ HDG": {
    desc: `Required true heading to waypoint.`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GPS WP VERTICAL SPEED": {
    desc: `Vertical speed to waypoint.`,
    units: `Meters per second`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const HSI = {
  "HSI BEARING": {
    desc: `If the GPS_DRIVES_NAV1 variable is true and the HSI BEARING VALID variable is true, this variable contains the HSI needle bearing. If the GPS DRIVES NAV1 variable is false and the HSI BEARING VALID variable is true, this variable contains the ADF1 frequency.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "HSI BEARING VALID": {
    desc: `This will return true if the HSI BEARING variable contains valid data.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "HSI CDI NEEDLE": {
    desc: `Needle deflection (+/- 127).`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "HSI CDI NEEDLE VALID": {
    desc: `Signal valid.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "HSI DISTANCE": {
    desc: `DME/GPS distance.`,
    units: `nautical miles`,
    ...dataType(`Float64`),
  },
  "HSI GSI NEEDLE": {
    desc: `Needle deflection (+/- 119).`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "HSI GSI NEEDLE VALID": {
    desc: `Signal valid.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "HSI HAS LOCALIZER": {
    desc: `Station is a localizer.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "HSI SPEED": {
    desc: `DME/GPS speed.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "HSI STATION IDENT": {
    desc: `Returns the ident of the the next GPS waypoint, if GPS_DRIVES_NAV1 is true. If GPS DRIVES NAV1 is false, it returns the identity of the station that is tuned on nav radio 1.`,
    units: null,
    ...dataType(`String32`),
  },
  "HSI TF FLAGS": {
    desc: `Nav TO/FROM flag.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
};

const MARKERS = {
  "INNER MARKER": {
    desc: `Inner marker state.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  // "INNER MARKER LATLONALT": {
  //   desc: `Returns the latitude, longitude and altitude of the inner marker of an approach to a runway, if the aircraft is within the required proximity, otherwise it will return zeros.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "MARKER AVAILABLE": {
    desc: `True if Marker is available.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "MARKER BEACON SENSITIVITY HIGH": {
    desc: `Whether or not the Marker Beacon is in High Sensitivity mode.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "MARKER BEACON STATE": {
    desc: `Marker beacon state.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "MARKER BEACON TEST MUTE": {
    desc: `Whether or not the Marker Beacon is in Test/Mute mode.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "MARKER SOUND": {
    desc: `Marker audio flag.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "MIDDLE MARKER": {
    desc: `Middle marker state.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  // "MIDDLE MARKER LATLONALT": {
  //   desc: `Returns the latitude, longitude and altitude of the middle marker.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "OUTER MARKER": {
    desc: `Outer marker state.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  // "OUTER MARKER LATLONALT": {
  //   desc: `Returns the latitude, longitude and altitude of the outer marker.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
};

const NAV = {
  "NAV ACTIVE FREQUENCY:index": {
    desc: `Nav active frequency. Index is 1 or 2.`,
    units: `MHz`,
    ...dataType(`Float64`),
  },
  "NAV AVAILABLE:index": {
    desc: `Flag if Nav equipped on aircraft.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV BACK COURSE FLAGS:index": {
    desc: `Returns the listed bit flags.`,
    units: `Flags`,
    ...dataType(`Int32`),
  },
  "NAV CDI:index": {
    desc: `CDI needle deflection (+/- 127).`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "NAV CLOSE DME:index": {
    desc: `Closest DME distance. Requires an index value from 1 to 4 to set which NAV to target.`,
    units: `Nautical miles`,
    ...dataType(`Float64`),
  },
  "NAV CLOSE FREQUENCY:index": {
    desc: `Closest Localizer course frequency. Requires an index value from 1 to 4 to set which NAV to target.`,
    units: `Hz`,
    ...dataType(`Float64`),
  },
  "NAV CLOSE IDENT:index": {
    desc: `ICAO code. Requires an index value from 1 to 4 to set which NAV to target.`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV CLOSE LOCALIZER:index": {
    desc: `Closest Localizer course heading. Requires an index value from 1 to 4 to set which NAV to target.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV CLOSE NAME:index": {
    desc: `Descriptive name. Requires an index value from 1 to 4 to set which NAV to target.`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV CODES": {
    desc: `Returns bit flags with the listed meaning.`,
    units: `flags`,
    ...dataType(`Int32`),
  },
  "NAV DME": {
    desc: `DME distance.`,
    units: `Nautical miles`,
    ...dataType(`Float64`),
  },
  "NAV DMESPEED": {
    desc: `DME speed.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  // "NAV DME LATLONALT:index": {
  //   desc: `Returns the DME station.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "NAV FREQUENCY": {
    desc: `Localizer course frequency`,
    units: `Hz`,
    ...dataType(`Float64`),
  },
  "NAV GLIDE SLOPE": {
    desc: `The glide slope gradient. The value returned is an integer value formed as sin(slope) * 65536 * 2`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "NAV GLIDE SLOPE ERROR": {
    desc: `Difference between current position and glideslope angle. Note that this provides 32 bit floating point precision, rather than the 8 bit integer precision of NAV GSI.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV GLIDE SLOPE LENGTH": {
    desc: `The distance between the plane and the Glide beacon.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "NAV GSI": {
    desc: `Glideslope needle deflection (+/- 119). Note that this provides only 8 bit precision, whereas NAV GLIDE SLOPE ERROR provides 32 bit floating point precision.`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "NAV GS FLAG": {
    desc: `Glideslope flag.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  // "NAV GS LATLONALT:index": {
  //   desc: `Returns the glide slope.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  // "NAV GS LLAF64": {
  //   desc: `Nav GS latitude, longitude, altitude.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "NAV HAS CLOSE DME": {
    desc: `Flag if found a close station with a DME.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV HAS CLOSE LOCALIZER": {
    desc: `Flag if found a close localizer station.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV HAS DME": {
    desc: `Flag if tuned station has a DME.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV HAS GLIDE SLOPE": {
    desc: `Flag if tuned station has a glide slope.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV HAS LOCALIZER": {
    desc: `Flag if tuned station is a localizer.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV HAS NAV": {
    desc: `Flag if Nav has signal.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV HAS TACAN": {
    desc: `Flag if Nav has a Tacan.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV IDENT": {
    desc: `ICAO code.`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV LOCALIZER": {
    desc: `Localizer course heading.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV LOC AIRPORT IDENT": {
    desc: `The airport ICAO ident for the localizer that is currently tuned on the nav radio (like 'EGLL' or 'KJFK')`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV LOC RUNWAY DESIGNATOR": {
    desc: `The letter code for the runway that the currently tuned localizer is tuned to.`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV LOC RUNWAY NUMBER": {
    desc: `NAV LOC RUNWAY NUMBER - The number portion of the runway that the currently tuned localizer is tuned to (so if the runway was 15L, this would be 15).`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV MAGVAR": {
    desc: `Magnetic variation of tuned Nav station.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV NAME": {
    desc: `Descriptive name.`,
    units: null,
    ...dataType(`String32`),
  },
  "NAV OBS": {
    desc: `OBS setting. Index of 1 or 2.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV RADIAL": {
    desc: `Radial that aircraft is on.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV RADIAL ERROR": {
    desc: `Difference between current radial and OBS tuned radial.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV RAW GLIDE SLOPE": {
    desc: `The glide slope angle.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV RELATIVE BEARING TO STATION": {
    desc: `Relative bearing to station.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "NAV SIGNAL": {
    desc: `Nav signal strength.`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "NAV SOUND:index": {
    desc: `Nav audio flag. Index of 1 or 2.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NAV STANDBY FREQUENCY:index": {
    desc: `Nav standby frequency. Index is 1 or 2.`,
    units: `MHz`,
    ...dataType(`Float64`),
  },
  "NAV TOFROM": {
    desc: `Returns whether the Nav is going to or from the current radial (or is off).`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "NAV VOLUME": {
    desc: `The volume of the Nav radio.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "NAV VOR DISTANCE": {
    desc: `Distance of the VOR beacon.`,
    units: `meters`,
    ...dataType(`Float64`),
  },
  // "NAV VOR LATLONALT:index": {
  //   desc: `Returns the VOR station latitude, longitude and altitude.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  // "NAV VOR LLAF64": {
  //   desc: `Nav VOR latitude, longitude, altitude.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
};

const TACAN = {
  "TACAN ACTIVE CHANNEL:index": {
    desc: `The active channel used by the indexed Tacan receiver on the aircraft, from 1 to 127.`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TACAN ACTIVE MODE:index": {
    desc: `The active mode used by the indexed Tacan receiver on the aircraft, where 0 = X and 1 = Y.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TACAN AVAILABLE:index": {
    desc: `Will be TRUE (1) if NAV1, NAV2, NAV3 or NAV4 can receive Tacan (depending on the index - 1, 2, 3, or 4), or FALSE (0) otherwise.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TACAN DRIVES NAV1:index": {
    desc: `Tells whether the Tacan is driving the Nav 1 indicator (TRUE, 1) or not (FALSE, 0), for autopilot purposes.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TACAN OBS:index": {
    desc: `The Tacan OBS setting, in degrees.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "TACAN STANDBY CHANNEL:index": {
    desc: `The standby channel used by the indexed Tacan receiver on the aircraft, from 1 to 127.`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TACAN STANDBY MODE:index": {
    desc: `Indicates the indexed Tacan receiver standby mode, where 0 = X and 1 = Y.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TACAN STATION CDI:index": {
    desc: `The CDI needle deflection amount(course deviation) to the station. Can be +/- 127.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "TACAN STATION DISTANCE:index": {
    desc: `The distance between the Tacan station position and the aircraft position. The index value refers to the Tacan receiver connected to the station (1 or 2).`,
    units: `Meter`,
    ...dataType(`Float64`),
  },
  "TACAN STATION IDENT:index": {
    desc: `The tuned station identifier for the indexed Tacan.`,
    units: null,
    ...dataType(`String32`),
  },
  // "TACAN STATION LATLONALT:index": {
  //   desc: `Retrieves the latitude, longitude and altitude of the Tacan station.`,
  //   units: `struct`,
  //   ...dataType(`LatLonAlt`),
  // },
  "TACAN STATION RADIAL:index": {
    desc: `The radial between the Tacan station and the aircraft.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "TACAN STATION RADIAL ERROR:index": {
    desc: `Difference between the current radial and OBS tuned radial, in degrees.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "TACAN STATION TOFROM:index": {
    desc: `Returns whether the indexed Tacan is going to or from the current radial (or is off).`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "TACAN VOLUME:index": {
    desc: `The volume value of the indexed Tacan receiver on the aircraft.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
};

const MISC = {
  "COPILOT TRANSMITTER TYPE": {
    desc: `On which channel the copilot is transmitting.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "COPILOT TRANSMITTING": {
    desc: `Whether or not the copilot is transmitting`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PILOT TRANSMITTER TYPE": {
    desc: `On which channel the pilot is transmitting.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "PILOT TRANSMITTING": {
    desc: `Whether or not the pilot is transmitting.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "RADIO HEIGHT": {
    desc: `Radar altitude.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "TRANSPONDER AVAILABLE": {
    desc: `True if a transponder is available.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TRANSPONDER CODE:index": {
    desc: `4-digit code.`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TRANSPONDER IDENT": {
    desc: `This can set the Ident transponder using the KEY_XPNDR_IDENT_SET, KEY_XPNDR_IDENT_TOGGLE, KEY_XPNDR_IDENT_ON or KEY_XPNDR_IDENT_OFF Event IDs (see XPNDR (Transponder) section for more information). When set to true, it will automatically turn false after 18 seconds.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "TRANSPONDER STATE": {
    desc: `Transponder State.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
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
