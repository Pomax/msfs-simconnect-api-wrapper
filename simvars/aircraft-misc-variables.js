// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Misc_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64, String128 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Knots,
  Feet,
  Degrees,
  Enum,
  Radians,
  PercentOver100,
  NullUnit,
  Rankine,
  Celsius,
  Mach,
  FeetPerSecond,
  RadiansPerSecondSquared,
} from "./simvar-utils.js";

const AIRCRAFT_STATES = {
  "AMBIENT IN CLOUD": define(`True if the aircraft is in a cloud`, Bool, Int32),
  "CONTRAILS CONDITIONS MET": define(
    `True if the aircraft has met the conditions required to spawn the contrail VFX`,
    Bool,
    Int32
  ),
  "IS SLEW ACTIVE": define(`True if slew is active`, Bool, SInt32),
  "IS SLEW ALLOWED": define(`True if slew is enabled`, Bool, SInt32),
  "IS USER SIM": define(`Is this the user loaded aircraft`, Bool, Int32),
  "ON ANY RUNWAY": define(
    `Whether or not the plane is currently on a runway`,
    Bool,
    Int32
  ),
  "PLANE IN PARKING STATE": define(
    `Whether or not the plane is currently parked (true) or not (false)`,
    Bool,
    Int32
  ),
  "SURFACE CONDITION": define(
    `The state of the surface directly under the aircraft`,
    Enum,
    Int32
  ),
  "SURFACE INFO VALID": define(
    `True indicates that the SURFACE CONDITION return value is meaningful`,
    Bool,
    Int32
  ),
  "SURFACE TYPE": define(`The type of surface under the aircraft`, Enum, Int32),
  "STRUCTURAL ICE PCT": define(
    `Amount of ice on aircraft structure. 100 is fully iced`,
    PercentOver100,
    Float64
  ),
  TITLE: define(`Title from aircraft.cfg`, NullUnit, String128),
  "TOW CONNECTION": define(
    `True if a towline is connected to both tow plane and glider`,
    Bool,
    Int32
  ),
  "WINDSHIELD RAIN EFFECT AVAILABLE": define(
    `Is visual effect available on this aircraft`,
    Bool,
    Int32
  ),
};

const AIRCRAFT_POSITION_DIRECTION_AND_SPEED = {
  "ACCELERATION BODY X": define(
    `Acceleration relative to aircraft X axis, in east/west direction`,
    Feet,
    Float64
  ),
  "ACCELERATION BODY Y": define(
    `Acceleration relative to aircraft Y axis, in vertical direction`,
    Feet,
    Float64
  ),
  "ACCELERATION BODY Z": define(
    `Acceleration relative to aircraft Z axis, in north/south direction`,
    Feet,
    Float64
  ),
  "ACCELERATION WORLD X": define(
    `Acceleration relative to the earth X axis, in east/west direction`,
    Feet,
    Float64
  ),
  "ACCELERATION WORLD Y": define(
    `Acceleration relative to the earth Y axis, in vertical direction`,
    Feet,
    Float64
  ),
  "ACCELERATION WORLD Z": define(
    `Acceleration relative to the earth Z axis, in north/south direction`,
    Feet,
    Float64
  ),
  "SURFACE RELATIVE GROUND SPEED": define(
    `The speed of the aircraft relative to the speed of the first surface directly underneath it. Use this to retrieve, for example, an aircraft's taxiing speed while it is moving on a moving carrier. It also applies to airborne aircraft, for example when a helicopter is successfully hovering above a moving ship, this value should be zero. The returned value will be the same as GROUND VELOCITY if the first surface beneath it is not moving`,
    FeetPerSecond,
    Float64
  ),
  "GROUND VELOCITY": define(` relative to the earths surface`, Knots, Float64),
  "PLANE ALTITUDE": define(`Altitude of aircraft`, Feet, SFloat64),
  "PLANE ALT ABOVE GROUND": define(
    `Altitude above the surface`,
    Feet,
    SFloat64
  ),
  "PLANE ALT ABOVE GROUND MINUS CG": define(
    `Altitude above the surface minus CG`,
    Feet,
    SFloat64
  ),
  "PLANE BANK DEGREES": define(
    `Bank angle, although the name mentions degrees the units used are radians`,
    Radians,
    SFloat64
  ),
  "PLANE HEADING DEGREES GYRO": define(
    `Heading indicator taken from the aircraft gyro`,
    Degrees,
    SFloat64
  ),
  "PLANE HEADING DEGREES MAGNETIC": define(
    `Heading relative to magnetic north - although the name mentions degrees the units used are radians`,
    Radians,
    SFloat64
  ),
  "PLANE HEADING DEGREES TRUE": define(
    `Heading relative to true north - although the name mentions degrees the units used are radians`,
    Radians,
    SFloat64
  ),
  "PLANE LATITUDE": define(
    `Latitude of aircraft, North is positive, South negative`,
    Radians,
    SFloat64
  ),
  "PLANE LONGITUDE": define(
    `Longitude of aircraft, East is positive, West negative`,
    Radians,
    SFloat64
  ),
  "PLANE PITCH DEGREES": define(
    `Pitch angle, although the name mentions degrees the units used are radians`,
    Radians,
    SFloat64
  ),
  "PLANE TOUCHDOWN BANK DEGREES": define(
    `This float represents the bank of the player's plane from the last touchdown`,
    Degrees,
    SFloat64
  ),
  "PLANE TOUCHDOWN HEADING DEGREES MAGNETIC": define(
    `This float represents the magnetic heading of the player's plane from the last touchdown`,
    Degrees,
    Float64
  ),
  "PLANE TOUCHDOWN HEADING DEGREES TRUE": define(
    `This float represents the true heading of the player's plane from the last touchdown`,
    Degrees,
    Float64
  ),
  "PLANE TOUCHDOWN LATITUDE": define(
    `This float represents the plane latitude for the last touchdown`,
    Radians,
    Float64
  ),
  "PLANE TOUCHDOWN LONGITUDE": define(
    `This float represents the plane longitude for the last touchdown`,
    Radians,
    Float64
  ),
  "PLANE TOUCHDOWN NORMAL VELOCITY": define(
    `This float represents the player's plane speed according to ground normal from the last touchdown`,
    Feet,
    Float64
  ),
  "PLANE TOUCHDOWN PITCH DEGREES": define(
    `This float represents the pitch of the player's plane from the last touchdown`,
    Degrees,
    Float64
  ),
  "RELATIVE WIND VELOCITY BODY X": define(
    `Lateral (X axis) speed relative to wind`,
    Feet,
    Float64
  ),
  "RELATIVE WIND VELOCITY BODY Y": define(
    `Vertical (Y axis) speed relative to wind`,
    Feet,
    Float64
  ),
  "RELATIVE WIND VELOCITY BODY Z": define(
    `Longitudinal (Z axis) speed relative to wind`,
    Feet,
    Float64
  ),
  "ROTATION ACCELERATION BODY X": define(
    `Rotation acceleration relative to aircraft X axis`,
    RadiansPerSecondSquared,
    SFloat64
  ),
  "ROTATION ACCELERATION BODY Y": define(
    `Rotation acceleration relative to aircraft Y axis`,
    RadiansPerSecondSquared,
    SFloat64
  ),
  "ROTATION ACCELERATION BODY Z": define(
    `Rotation acceleration relative to aircraft Z axis`,
    RadiansPerSecondSquared,
    SFloat64
  ),
  "ROTATION VELOCITY BODY X": define(
    `Rotation velocity relative to aircraft X axis`,
    Feet,
    SFloat64
  ),
  "ROTATION VELOCITY BODY Y": define(
    `Rotation velocity relative to aircraft Y axis`,
    Feet,
    SFloat64
  ),
  "ROTATION VELOCITY BODY Z": define(
    `Rotation velocity relative to aircraft Z axis`,
    Feet,
    SFloat64
  ),
  "SLOPE TO ATC RUNWAY": define(
    `The slope between the plane and the expected landing position of the runway. Returns 0 if no runway is assigned`,
    Radians,
    Float64
  ),
  "VELOCITY BODY X": define(
    `True lateral speed, relative to aircraft X axis`,
    Feet,
    SFloat64
  ),
  "VELOCITY BODY Y": define(
    `True vertical speed, relative to aircraft Y axis`,
    Feet,
    SFloat64
  ),
  "VELOCITY BODY Z": define(
    `True longitudinal speed, relative to aircraft Z axis`,
    Feet,
    SFloat64
  ),
  "VERTICAL SPEED": define(
    `The current indicated vertical speed for the aircraft`,
    Feet,
    SFloat64
  ),
};

/**

THIS ONE'S GOING TO NEED A SECOND LOOK, BECAUSE OF XYZ NIFTINESS

const AIRCRAFT_STRUCTS = {
    "EYEPOINT POSITION": define(
        `The eyepoint position relative to the reference datum position for the aircraft. SIMCONNECT_DATA_XYZ feet`,
    ),
    "STRUC AIRSPEED HOLD PID CONSTS": define(
        `Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. PID_STRUCT`,
    ),
    "STRUC HEADING HOLD PID CONSTS": define(
        `Returns the various airspeed PID constants. This is generally only used for AI controlled aircraft and boats, although it may be useful when working with RTCs and the user aircraft. PID_STRUCT`,
    ),
    "STRUCT BODY ROTATION ACCELERATION 	": define(
        ` body rotation acceleration. SIMCONNECT_DATA_XYZ radians per second`,
    ),
    "STRUCT BODY ROTATION VELOCITY": define(
        `The body rotation velocity. SIMCONNECT_DATA_XYZ radians per second`,
    ),
    "STRUCT BODY VELOCITY": define(
        `The object body velocity. SIMCONNECT_DATA_XYZ feet per second`,
    ),
    "STRUCT ENGINE POSITION:index": define(
        `The position of the indexed engine relative to the Datum Reference Point for the aircraft. SIMCONNECT_DATA_XYZ feet.`,
    ),
    "STRUCT EYEPOINT DYNAMIC ANGLE": define(
        `The angle of the eyepoint view. Zero, zero, zero is straight ahead. SIMCONNECT_DATA_XYZ radians`,
    ),
    "STRUCT EYEPOINT DYNAMIC OFFSET": define(
        `A variable offset away from the EYEPOINT POSITION. SIMCONNECT_DATA_XYZ feet`,
    ),
    "STRUCT LATLONALT": define(
        `Returns the latitude, longitude and altitude of the user aircraft. 	SIMCONNECT_DATA_LATLONALT`,
    ),
    "STRUCT LATLONALTPBH": define(
        `Returns the pitch, bank and heading of the user aircraft. 	SIMCONNECT_DATA_LATLONALT`,
    ),
};

**/

const AIRSPEED = {
  "AIRCRAFT WIND X": define(
    `Wind component in aircraft lateral (X) axis`,
    Knots,
    Float64
  ),
  "AIRCRAFT WIND Y": define(
    `Wind component in aircraft vertical (Y) axis.`,
    Knots,
    Float64
  ),
  "AIRCRAFT WIND Z": define(
    `Wind component in aircraft longitudinal (Z) axis.`,
    Knots,
    Float64
  ),
  "AIRSPEED BARBER POLE": define(
    `Redline airspeed (dynamic on some aircraft).`,
    Knots,
    Float64
  ),
  "AIRSPEED INDICATED": define(`Indicated airspeed.`, Knots, SFloat64),
  "AIRSPEED MACH": define(`Current mach.`, Mach, Float64),
  "AIRSPEED SELECT INDICATED OR TRUE": define(
    `The airspeed, whether true or indicated airspeed has been selected.`,
    Knots,
    Float64
  ),
  "AIRSPEED TRUE": define(`True airspeed.`, Knots, SFloat64),
  "AIRSPEED TRUE RAW": define(
    `Equivalent to AIRSPEED TRUE, but does not account for wind when used to Set Airspeed value`,
    Knots,
    SFloat64
  ),
  "BARBER POLE MACH": define(
    `Mach associated with maximum airspeed.`,
    Mach,
    Float64
  ),
  "TOTAL VELOCITY": define(
    `Velocity regardless of direction. For example, if a helicopter is ascending vertically at 100 fps, getting this variable will return 100.`,
    Feet,
    Float64
  ),
  "WINDSHIELD WIND VELOCITY": define(
    `Longitudinal speed of wind on the windshield.`,
    Feet,
    Float64
  ),
};

const TEMPERATURE = {
  "STANDARD ATM TEMPERATURE": define(
    `Outside temperature on the standard ATM scale`,
    Rankine,
    Float64
  ),
  "TOTAL AIR TEMPERATURE": define(
    `Total air temperature is the air temperature at the front of the aircraft where the ram pressure from the speed of the aircraft is taken into account`,
    Celsius,
    Float64
  ),
};

export const AircraftMiscVariables = {
  ...AIRCRAFT_STATES,
  ...AIRCRAFT_POSITION_DIRECTION_AND_SPEED,
  //  ...AIRCRAFT_STRUCTS,
  ...AIRSPEED,
  ...TEMPERATURE,
};
