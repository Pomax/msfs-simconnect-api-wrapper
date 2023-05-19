// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_FlightModel_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, Float64, SFloat64 } from "./simvar-utils.js";

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
  Pounds,
  RadiansPerSecond,
  GForce,
  PerRadian,
  Mach,
  SquareFeet,
  Slugs,
} from "./simvar-utils.js";

const GENERAL = {
  "BETA DOT": define(`Beta dot`, RadiansPerSecond, Float64),
  "DECISION ALTITUDE MSL": define(
    `Design decision altitude above mean sea level`,
    Feet,
    Float64
  ),
  "DECISION HEIGHT": define(`Design decision height`, Feet, Float64),
  "DESIGN CRUISE ALT": define(
    `This design constant represents the optimal altitude the aircraft should maintain when in cruise. It is derived from the cruise_alt setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft.`,
    Feet,
    Float64
  ),
  "DESIGN SPAWN ALTITUDE CRUISE": define(
    `This design constant represents the spawn altitude for the aircraft when spawning in cruise. It is derived from the spawn_cruise_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft.`,
    Feet,
    Float64
  ),
  "DESIGN SPAWN ALTITUDE DESCENT": define(
    `This design constant represents the spawn altitude for the aircraft when spawning in descent. It is derived from the spawn_descent_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 500ft.`,
    Feet,
    Float64
  ),
  "DESIGN SPEED CLIMB": define(
    `This design constant represents the optimal climb speed for the aircraft. It is derived from the climb_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1.`,
    Feet,
    Float64
  ),
  "DESIGN SPEED MIN ROTATION": define(
    `This design constant represents the minimum speed required for aircraft rotation. It is derived from the rotation_speed_min setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1.`,
    Feet,
    Float64
  ),
  "DESIGN SPEED VC": define(
    `This design constant represents the aircraft ideal cruising speed. It is derived from the cruise_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. The default value is computed an internal function that uses the estimated cruise altitude and estimated cruise percent power, according of the engine type, the number of engines, the density, the wing area and some drag parameters. Normally this value is set in the CFG file and the default value is never used.`,
    Feet,
    Float64
  ),
  "DESIGN SPEED VS0": define(
    `This design constant represents the the stall speed when flaps are fully extended. It is derived from the full_flaps_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.8 x VS.`,
    Knots,
    Float64
  ),
  "DESIGN SPEED VS1": define(
    `This design constant represents the stall speed when flaps are fully retracted. It is derived from the flaps_up_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.`,
    Knots,
    Float64
  ),
  "DESIGN TAKEOFF SPEED": define(
    `This design constant represents the aircraft ideal takoff speed. It is derived from the takeoff_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg.`,
    Knots,
    Float64
  ),
  "DYNAMIC PRESSURE": define(`Dynamic pressure`, Pounds, Float64),
  "ESTIMATED CRUISE SPEED": define(`Estimated cruise speed`, Feet, Float64),
  "G FORCE": define(`Current g force`, GForce, SFloat64),
  "G LIMITER SETTING": define(
    `This returns the setting of the G-limiter, as set using the GLimiterSetting parameter`,
    Enum,
    Int32
  ),
  "INCIDENCE ALPHA": define(`Angle of attack`, Radians, Float64),
  "INCIDENCE BETA": define(`Sideslip angle`, Radians, Float64),
  "IS TAIL DRAGGER": define(
    `True if the aircraft is a taildragger`,
    Bool,
    Int32
  ),
  "LINEAR CL ALPHA": define(`Linear CL alpha`, PerRadian, Float64),
  "MACH MAX OPERATE": define(`Maximum design mach`, Mach, Float64),
  "MAX G FORCE": define(`Maximum G force attained`, GForce, Float64),
  "MIN DRAG VELOCITY": define(
    `Minimum drag velocity, in clean, with no input and no gears, when at 10000ft.`,
    Feet,
    Float64
  ),
  "MIN G FORCE": define(`Minimum G force attained`, GForce, Float64),
  "SEMIBODY LOADFACTOR Y": define(
    `Acceleration along the axis Y divided by the gravity constant g (usually around 9.81m.s²)`,
    Number,
    Float64
  ),
  "SEMIBODY LOADFACTOR YDOT": define(
    `Derivative of SEMIBODY LOADFACTOR Y in relation to time.`,
    Number,
    Float64
  ),
  "SIGMA SQRT": define(`Sigma sqrt`, Number, Float64),
  "SIMULATED RADIUS": define(`Simulated radius`, Feet, Float64),
  "STALL ALPHA": define(
    `The angle of attack which produces the maximum lift coefficient before entering into stall conditions.`,
    Radians,
    Float64
  ),
  "STATIC PITCH": define(
    `The angle at which static pitch stability is achieved.`,
    Radians,
    Float64
  ),
  "TYPICAL DESCENT RATE": define(
    `the typical (normal) descent rate for the aircraft.`,
    Feet,
    Float64
  ),
  "WING AREA": define(`Total wing area`, SquareFeet, Float64),
  "WING FLEX PCT:index": define(
    `The current wing flex. Different values can be set for each wing (for example, during banking). Set an index of 1 for the left wing, and 2 for the right wing.`,
    PercentOver100,
    SFloat64
  ),
  "WING SPAN": define(`Total wing span`, Feet, Float64),
  "YAW STRING ANGLE": define(
    `The yaw string angle. Yaw strings are attached to gliders as visible indicators of the yaw angle. An animation of this is not implemented in ESP.`,
    Radians,
    Float64
  ),
  "YAW STRING PCT EXTENDED": define(
    `Yaw string angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "ZERO LIFT ALPHA": define(
    `The angle of attack at which the wing has zero lift.`,
    Radians,
    Float64
  ),
};

const CENTER_OF_GRAVITY = {
  "CG AFT LIMIT": define(
    `Most backward authorized position of the CG according to the POH.`,
    PercentOver100,
    Float64
  ),
  "CG FEET": define(
    `The longitudinal CG position relative to the Reference Datum Position.`,
    Feet,
    Float64
  ),
  "CG FEET AFT LIMIT": define(
    `The aft CG limit position relative to the Reference Datum Position.`,
    Feet,
    Float64
  ),
  "CG FEET LATERAL": define(
    `The lateral CG position relative to the Reference Datum Position.`,
    Feet,
    Float64
  ),
  "CG FEET LATERAL LEFT LIMIT": define(
    `The left hand lateral CG position relative to the Reference Datum Position.`,
    Feet,
    Float64
  ),
  "CG FEET LATERAL RIGHT LIMIT": define(
    `The right hand lateral CG position relative to the Reference Datum Position.`,
    Feet,
    Float64
  ),
  "CG FEET FWD LIMIT": define(
    `The forward CG limit position relative to the Reference Datum Position.`,
    Feet,
    Float64
  ),
  "CG FWD LIMIT": define(
    `Most forward authorized position of the CG according to the POH.`,
    PercentOver100,
    Float64
  ),
  "CG MAX MACH": define(`Deprecated, do not use!`, Mach, Float64),
  "CG MIN MACH": define(`Deprecated, do not use!`, Mach, Float64),
  "CG PERCENT": define(
    `Longitudinal CG position as a percent of reference chord`,
    PercentOver100,
    Float64
  ),
  "CG PERCENT LATERAL": define(
    `Lateral CG position as a percent of reference chord`,
    PercentOver100,
    Float64
  ),
  "STATIC CG TO GROUND": define(
    `Static CG position with reference to the ground`,
    Feet,
    Float64
  ),
};

const INTERACTIVE_POINTS = {
  "INTERACTIVE POINT BANK": define(
    `Interactive Point orientation: Bank`,
    Degrees,
    Float64
  ),
  "INTERACTIVE POINT HEADING": define(
    `Interactive Point orientation: Heading`,
    Degrees,
    Float64
  ),
  "INTERACTIVE POINT JETWAY LEFT BEND": define(
    `Interactive Point Jetway constant, determining the desired left bend ratio of jetway hood`,
    Percent,
    Float64
  ),
  "INTERACTIVE POINT JETWAY LEFT DEPLOYMENT": define(
    `Interactive Point Jetway constant, determining the desired left deployment angle of jetway hood`,
    Degrees,
    Float64
  ),
  "INTERACTIVE POINT JETWAY RIGHT BEND": define(
    `Interactive Point Jetway constant, determining the desired right bend ratio of jetway hood`,
    Percent,
    Float64
  ),
  "INTERACTIVE POINT JETWAY RIGHT DEPLOYMENT": define(
    `Interactive Point Jetway constant, determining the desired right deployment angle of jetway hood`,
    Degrees,
    Float64
  ),
  "INTERACTIVE POINT JETWAY TOP HORIZONTAL": define(
    `Interactive Point Jetway constant, determining the desired top horizontal ratio of displacement of jetway hood`,
    Percent,
    Float64
  ),
  "INTERACTIVE POINT JETWAY TOP VERTICAL": define(
    `Interactive Point Jetway constant, determining the desired top vertical ratio of displacement of jetway hood`,
    Percent,
    Float64
  ),
  "INTERACTIVE POINT GOAL": define(
    `The Interactive Point goal percentage of opening (if it's for a door) or percentage of deployment (if it's for a hose or cable).`,
    PercentOver100,
    SFloat64
  ),
  "INTERACTIVE POINT OPEN": define(
    `Interactive Point current percentage of opening (if door) or deployment (if hose/cable)`,
    PercentOver100,
    SFloat64
  ),
  "INTERACTIVE POINT PITCH": define(
    `Interactive Point orientation: Pitch`,
    Degrees,
    Float64
  ),
  "INTERACTIVE POINT POSX": define(
    `Interactive Point X position relative to datum reference point`,
    Feet,
    Float64
  ),
  "INTERACTIVE POINT POSY": define(
    `Interactive Point Y position relative to datum reference point`,
    Feet,
    Float64
  ),
  "INTERACTIVE POINT POSZ": define(
    `Interactive Point Z position relative to datum reference point`,
    Feet,
    Float64
  ),
  "INTERACTIVE POINT TYPE": define(
    `The type of interactive point`,
    Enum,
    Int32
  ),
};

const WEIGHT = {
  "EMPTY WEIGHT": define(`Empty weight of the aircraft`, Pounds, Float64),
  "EMPTY WEIGHT CROSS COUPLED MOI": define(
    `Empty weight cross coupled moment of inertia`,
    Slugs,
    Float64
  ),
  "EMPTY WEIGHT PITCH MOI": define(
    `Empty weight pitch moment of inertia`,
    Slugs,
    Float64
  ),
  "EMPTY WEIGHT ROLL MOI": define(
    `Empty weight roll moment of inertia`,
    Slugs,
    Float64
  ),
  "EMPTY WEIGHT YAW MOI": define(
    `Empty weight yaw moment of inertia`,
    Slugs,
    Float64
  ),
  "MAX GROSS WEIGHT": define(
    `Maximum gross weight of the aircaft`,
    Pounds,
    Float64
  ),
  "TOTAL WEIGHT": define(`Total weight of the aircraft`, Pounds, Float64),
  "TOTAL WEIGHT CROSS COUPLED MOI": define(
    `Total weight cross coupled moment of inertia`,
    Slugs,
    Float64
  ),
  "TOTAL WEIGHT PITCH MOI": define(
    `Total weight pitch moment of inertia`,
    Slugs,
    Float64
  ),
  "TOTAL WEIGHT ROLL MOI": define(
    `Total weight roll moment of inertia`,
    Slugs,
    Float64
  ),
  "TOTAL WEIGHT YAW MOI": define(
    `Total weight yaw moment of inertia`,
    Slugs,
    Float64
  ),
};

export const AircraftFlightModelVariables = {
  ...GENERAL,
  ...CENTER_OF_GRAVITY,
  ...INTERACTIVE_POINTS,
  ...WEIGHT,
};
