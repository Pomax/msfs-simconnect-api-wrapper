// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Misc_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const AIRCRAFT_STATES = {
  "AMBIENT IN CLOUD": {
    desc: `True if the aircraft is in a cloud`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CONTRAILS CONDITIONS MET": {
    desc: `True if the aircraft has met the conditions required to spawn the contrail VFX`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "IS SLEW ACTIVE": {
    desc: `True if slew is active`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "IS SLEW ALLOWED": {
    desc: `True if slew is enabled`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "IS USER SIM": {
    desc: `Is this the user loaded aircraft`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ON ANY RUNWAY": {
    desc: `Whether or not the plane is currently on a runway`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PLANE IN PARKING STATE": {
    desc: `Whether or not the plane is currently parked (true) or not (false)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "SURFACE CONDITION": {
    desc: `The state of the surface directly under the aircraft`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "SURFACE INFO VALID": {
    desc: `True indicates that the SURFACE CONDITION return value is meaningful`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "SURFACE TYPE": {
    desc: `The type of surface under the aircraft`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "STRUCTURAL ICE PCT": {
    desc: `Amount of ice on aircraft structure. 100 is fully iced`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "TITLE": {
    desc: `Title from aircraft.cfg`,
    units: null,
    ...dataType(`String128`),
  },
  "TOW CONNECTION": {
    desc: `True if a towline is connected to both tow plane and glider`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "WINDSHIELD RAIN EFFECT AVAILABLE": {
    desc: `Is visual effect available on this aircraft`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const AIRCRAFT_POSITION_DIRECTION_AND_SPEED = {
  "ACCELERATION BODY X": {
    desc: `Acceleration relative to aircraft X axis, in east/west direction`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ACCELERATION BODY Y": {
    desc: `Acceleration relative to aircraft Y axis, in vertical direction`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ACCELERATION BODY Z": {
    desc: `Acceleration relative to aircraft Z axis, in north/south direction`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ACCELERATION WORLD X": {
    desc: `Acceleration relative to the earth X axis, in east/west direction`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ACCELERATION WORLD Y": {
    desc: `Acceleration relative to the earth Y axis, in vertical direction`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ACCELERATION WORLD Z": {
    desc: `Acceleration relative to the earth Z axis, in north/south direction`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "SURFACE RELATIVE GROUND SPEED": {
    desc: `The speed of the aircraft relative to the speed of the first surface directly underneath it. Use this to retrieve, for example, an aircraft's taxiing speed while it is moving on a moving carrier. It also applies to airborne aircraft, for example when a helicopter is successfully hovering above a moving ship, this value should be zero. The returned value will be the same as GROUND VELOCITY if the first surface beneath it is not moving`,
    units: `feet per second`,
    ...dataType(`Float64`),
  },
  "GROUND VELOCITY": {
    desc: ` relative to the earths surface`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "PLANE ALTITUDE": {
    desc: `Altitude of aircraft`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE ALT ABOVE GROUND": {
    desc: `Altitude above the surface`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE ALT ABOVE GROUND MINUS CG": {
    desc: `Altitude above the surface minus CG`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE BANK DEGREES": {
    desc: `Bank angle, although the name mentions degrees the units used are radians`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE HEADING DEGREES GYRO": {
    desc: `Heading indicator taken from the aircraft gyro`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE HEADING DEGREES MAGNETIC": {
    desc: `Heading relative to magnetic north - although the name mentions degrees the units used are radians`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE HEADING DEGREES TRUE": {
    desc: `Heading relative to true north - although the name mentions degrees the units used are radians`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE LATITUDE": {
    desc: `Latitude of aircraft, North is positive, South negative`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE LONGITUDE": {
    desc: `Longitude of aircraft, East is positive, West negative`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE PITCH DEGREES": {
    desc: `Pitch angle, although the name mentions degrees the units used are radians`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE TOUCHDOWN BANK DEGREES": {
    desc: `This float represents the bank of the player's plane from the last touchdown`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PLANE TOUCHDOWN HEADING DEGREES MAGNETIC": {
    desc: `This float represents the magnetic heading of the player's plane from the last touchdown`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "PLANE TOUCHDOWN HEADING DEGREES TRUE": {
    desc: `This float represents the true heading of the player's plane from the last touchdown`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "PLANE TOUCHDOWN LATITUDE": {
    desc: `This float represents the plane latitude for the last touchdown`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PLANE TOUCHDOWN LONGITUDE": {
    desc: `This float represents the plane longitude for the last touchdown`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PLANE TOUCHDOWN NORMAL VELOCITY": {
    desc: `This float represents the player's plane speed according to ground normal from the last touchdown`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "PLANE TOUCHDOWN PITCH DEGREES": {
    desc: `This float represents the pitch of the player's plane from the last touchdown`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "RELATIVE WIND VELOCITY BODY X": {
    desc: `Lateral (X axis) speed relative to wind`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "RELATIVE WIND VELOCITY BODY Y": {
    desc: `Vertical (Y axis) speed relative to wind`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "RELATIVE WIND VELOCITY BODY Z": {
    desc: `Longitudinal (Z axis) speed relative to wind`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "ROTATION ACCELERATION BODY X": {
    desc: `Rotation acceleration relative to aircraft X axis`,
    units: `radians per second squared`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ROTATION ACCELERATION BODY Y": {
    desc: `Rotation acceleration relative to aircraft Y axis`,
    units: `radians per second squared`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ROTATION ACCELERATION BODY Z": {
    desc: `Rotation acceleration relative to aircraft Z axis`,
    units: `radians per second squared`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ROTATION VELOCITY BODY X": {
    desc: `Rotation velocity relative to aircraft X axis`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ROTATION VELOCITY BODY Y": {
    desc: `Rotation velocity relative to aircraft Y axis`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ROTATION VELOCITY BODY Z": {
    desc: `Rotation velocity relative to aircraft Z axis`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "SLOPE TO ATC RUNWAY": {
    desc: `The slope between the plane and the expected landing position of the runway. Returns 0 if no runway is assigned`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "VELOCITY BODY X": {
    desc: `True lateral speed, relative to aircraft X axis`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "VELOCITY BODY Y": {
    desc: `True vertical speed, relative to aircraft Y axis`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "VELOCITY BODY Z": {
    desc: `True longitudinal speed, relative to aircraft Z axis`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "VERTICAL SPEED": {
    desc: `The current indicated vertical speed for the aircraft`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
};

/**

THIS ONE'S GOING TO NEED A SECOND LOOK, BECAUSE OF XYZ NIFTINESS

const AIRCRAFT_STRUCTS = {
    "EYEPOINT POSITION": {
        desc: `The eyepoint position relative to the reference datum position for the aircraft. SIMCONNECT_DATA_XYZ feet`,
    },
    "STRUC AIRSPEED HOLD PID CONSTS": {
        desc: `Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. PID_STRUCT`,
    },
    "STRUC HEADING HOLD PID CONSTS": {
        desc: `Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. PID_STRUCT`,
    },
    "STRUCT BODY ROTATION ACCELERATION 	": {
        desc: ` body rotation acceleration. SIMCONNECT_DATA_XYZ radians per second`,
    },
    "STRUCT BODY ROTATION VELOCITY": {
        desc: `The body rotation velocity. SIMCONNECT_DATA_XYZ radians per second`,
    },
    "STRUCT BODY VELOCITY": {
        desc: `The object body velocity. SIMCONNECT_DATA_XYZ feet per second`,
    },
    "STRUCT ENGINE POSITION:index": {
        desc: `The position of the indexed engine relative to the Datum Reference Point for the aircraft. SIMCONNECT_DATA_XYZ feet.`,
    },
    "STRUCT EYEPOINT DYNAMIC ANGLE": {
        desc: `The angle of the eyepoint view. Zero, zero, zero is straight ahead. SIMCONNECT_DATA_XYZ radians`,
    },
    "STRUCT EYEPOINT DYNAMIC OFFSET": {
        desc: `A variable offset away from the EYEPOINT POSITION. SIMCONNECT_DATA_XYZ feet`,
    },
    "STRUCT LATLONALT": {
        desc: `Returns the latitude, longitude and altitude of the user aircraft. 	SIMCONNECT_DATA_LATLONALT`,
    },
    "STRUCT LATLONALTPBH": {
        desc: `Returns the pitch, bank and heading of the user aircraft. 	SIMCONNECT_DATA_LATLONALT`,
    },
};

**/

const AIRSPEED = {
  "AIRCRAFT WIND X": {
    desc: `Wind component in aircraft lateral (X) axis`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AIRCRAFT WIND Y": {
    desc: `Wind component in aircraft vertical (Y) axis.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AIRCRAFT WIND Z": {
    desc: `Wind component in aircraft longitudinal (Z) axis.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AIRSPEED BARBER POLE": {
    desc: `Redline airspeed (dynamic on some aircraft).`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AIRSPEED INDICATED": {
    desc: `Indicated airspeed.`,
    units: `knots`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AIRSPEED MACH": {
    desc: `Current mach.`,
    units: `mach`,
    ...dataType(`Float64`),
  },
  "AIRSPEED SELECT INDICATED OR TRUE": {
    desc: `The airspeed, whether true or indicated airspeed has been selected.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AIRSPEED TRUE": {
    desc: `True airspeed.`,
    units: `knots`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AIRSPEED TRUE RAW": {
    desc: `Equivalent to AIRSPEED TRUE, but does not account for wind when used to Set Airspeed value`,
    units: `knots`,
    ...dataType(`Float64`, SETTABLE),
  },
  "BARBER POLE MACH": {
    desc: `Mach associated with maximum airspeed.`,
    units: `mach`,
    ...dataType(`Float64`),
  },
  "TOTAL VELOCITY": {
    desc: `Velocity regardless of direction. For example, if a helicopter is ascending vertically at 100 fps, getting this variable will return 100.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "WINDSHIELD WIND VELOCITY": {
    desc: `Longitudinal speed of wind on the windshield.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
};

const TEMPERATURE = {
  "STANDARD ATM TEMPERATURE": {
    desc: `Outside temperature on the standard ATM scale`,
    units: `rankine`, // Whoever came up with this unit of temperature actively made things worse.
    ...dataType(`Float64`),
  },
  "TOTAL AIR TEMPERATURE": {
    desc: `Total air temperature is the air temperature at the front of the aircraft where the ram pressure from the speed of the aircraft is taken into account`,
    units: `celsius`,
    ...dataType(`Float64`),
  },
};

export const AircraftMiscVariables = {
  ...AIRCRAFT_STATES,
  ...AIRCRAFT_POSITION_DIRECTION_AND_SPEED,
  //  ...AIRCRAFT_STRUCTS,
  ...AIRSPEED,
  ...TEMPERATURE,
};
