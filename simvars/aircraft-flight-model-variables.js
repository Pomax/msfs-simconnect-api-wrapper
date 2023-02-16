// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_FlightModel_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const GENERAL = {
  "BETA DOT": {
    desc: `Beta dot`,
    units: `radians per second`,
    ...dataType(`Float64`),
  },
  "DECISION ALTITUDE MSL": {
    desc: `Design decision altitude above mean sea level`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DECISION HEIGHT": {
    desc: `Design decision height`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN CRUISE ALT": {
    desc: `This design constant represents the optimal altitude the aircraft should maintain when in cruise. It is derived from the cruise_alt setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN SPAWN ALTITUDE CRUISE": {
    desc: `This design constant represents the spawn altitude for the aircraft when spawning in cruise. It is derived from the spawn_cruise_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 1500ft.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN SPAWN ALTITUDE DESCENT": {
    desc: `This design constant represents the spawn altitude for the aircraft when spawning in descent. It is derived from the spawn_descent_altitude setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default is 500ft.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN SPEED CLIMB": {
    desc: `This design constant represents the optimal climb speed for the aircraft. It is derived from the climb_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN SPEED MIN ROTATION": {
    desc: `This design constant represents the minimum speed required for aircraft rotation. It is derived from the rotation_speed_min setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is -1.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN SPEED VC": {
    desc: `This design constant represents the aircraft ideal cruising speed. It is derived from the cruise_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. The default value is computed an internal function that uses the estimated cruise altitude and estimated cruise percent power, according of the engine type, the number of engines, the density, the wing area and some drag parameters. Normally this value is set in the CFG file and the default value is never used.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "DESIGN SPEED VS0": {
    desc: `This design constant represents the the stall speed when flaps are fully extended. It is derived from the full_flaps_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.8 x VS.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "DESIGN SPEED VS1": {
    desc: `This design constant represents the stall speed when flaps are fully retracted. It is derived from the flaps_up_stall_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg. Default value is 0.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "DESIGN TAKEOFF SPEED": {
    desc: `This design constant represents the aircraft ideal takoff speed. It is derived from the takeoff_speed setting in the [REFERENCE SPEEDS] section of the flightmodel.cfg.`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "DYNAMIC PRESSURE": {
    desc: `Dynamic pressure`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "ESTIMATED CRUISE SPEED": {
    desc: `Estimated cruise speed`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "G FORCE": {
    desc: `Current g force`,
    units: `gforce`,
    ...dataType(`Float64`, SETTABLE),
  },
  "G LIMITER SETTING": {
    desc: `This returns the setting of the G-limiter, as set using the GLimiterSetting parameter`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "INCIDENCE ALPHA": {
    desc: `Angle of attack`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "INCIDENCE BETA": {
    desc: `Sideslip angle`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "IS TAIL DRAGGER": {
    desc: `True if the aircraft is a taildragger`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "LINEAR CL ALPHA": {
    desc: `Linear CL alpha`,
    units: `per radian`,
    ...dataType(`Float64`),
  },
  "MACH MAX OPERATE": {
    desc: `Maximum design mach`,
    units: `mach`,
    ...dataType(`Float64`),
  },
  "MAX G FORCE": {
    desc: `Maximum G force attained`,
    units: `gforce`,
    ...dataType(`Float64`),
  },
  "MIN DRAG VELOCITY": {
    desc: `Minimum drag velocity, in clean, with no input and no gears, when at 10000ft.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "MIN G FORCE": {
    desc: `Minimum G force attained`,
    units: `gforce`,
    ...dataType(`Float64`),
  },
  "SEMIBODY LOADFACTOR Y": {
    desc: `Acceleration along the axis Y divided by the gravity constant g (usually around 9.81m.s²)`,
    units: `Number`,
    ...dataType(`Float64`)
  },
  "SEMIBODY LOADFACTOR YDOT": {
    desc: `Derivative of SEMIBODY LOADFACTOR Y in relation to time.`,
    units: `Number`,
    ...dataType(`Float64`),
  },
  "SIGMA SQRT": {
    desc: `Sigma sqrt`,
    units: `number`,
    ...dataType(`Float64`),
  },
  "SIMULATED RADIUS": {
    desc: `Simulated radius`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "STALL ALPHA": {
    desc: `The angle of attack which produces the maximum lift coefficient before entering into stall conditions.`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "STATIC PITCH": {
    desc: `The angle at which static pitch stability is achieved.`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "TYPICAL DESCENT RATE": {
    desc: `the typical (normal) descent rate for the aircraft.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "WING AREA": {
    desc: `Total wing area`,
    units: `square feet`,
    ...dataType(`Float64`),
  },
  "WING FLEX PCT:index": {
    desc: `The current wing flex. Different values can be set for each wing (for example, during banking). Set an index of 1 for the left wing, and 2 for the right wing.`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "WING SPAN": {
    desc: `Total wing span`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "YAW STRING ANGLE": {
    desc: `The yaw string angle. Yaw strings are attached to gliders as visible indicators of the yaw angle. An animation of this is not implemented in ESP.`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "YAW STRING PCT EXTENDED": {
    desc: `Yaw string angle as a percentage`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ZERO LIFT ALPHA": {
    desc: `The angle of attack at which the wing has zero lift.`,
    units: `radians`,
    ...dataType(`Float64`),
  },
};

const CENTER_OF_GRAVITY = {
  "CG AFT LIMIT": {
    desc: `Most backward authorized position of the CG according to the POH.`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "CG FEET": {
    desc: `The longitudinal CG position relative to the Reference Datum Position.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "CG FEET AFT LIMIT": {
    desc: `The aft CG limit position relative to the Reference Datum Position.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "CG FEET LATERAL": {
    desc: `The lateral CG position relative to the Reference Datum Position.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "CG FEET LATERAL LEFT LIMIT": {
    desc: `The left hand lateral CG position relative to the Reference Datum Position.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "CG FEET LATERAL RIGHT LIMIT": {
    desc: `The right hand lateral CG position relative to the Reference Datum Position.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "CG FEET FWD LIMIT": {
    desc: `The forward CG limit position relative to the Reference Datum Position.`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "CG FWD LIMIT": {
    desc: `Most forward authorized position of the CG according to the POH.`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "CG MAX MACH": {
    desc: `Deprecated, do not use!`,
    units: `mach`,
    ...dataType(`Float64`),
  },
  "CG MIN MACH": {
    desc: `Deprecated, do not use!`,
    units: `mach`,
    ...dataType(`Float64`),
  },
  "CG PERCENT": {
    desc: `Longitudinal CG position as a percent of reference chord`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "CG PERCENT LATERAL": {
    desc: `Lateral CG position as a percent of reference chord`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "STATIC CG TO GROUND": {
    desc: `Static CG position with reference to the ground`,
    units: `feet`,
    ...dataType(`Float64`),
  },
};

const INTERACTIVE_POINTS = {
  "INTERACTIVE POINT BANK": {
    desc: `Interactive Point orientation: Bank`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT HEADING": {
    desc: `Interactive Point orientation: Heading`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT JETWAY LEFT BEND": {
    desc: `Interactive Point Jetway constant, determining the desired left bend ratio of jetway hood`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT JETWAY LEFT DEPLOYMENT": {
    desc: `Interactive Point Jetway constant, determining the desired left deployment angle of jetway hood`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT JETWAY RIGHT BEND": {
    desc: `Interactive Point Jetway constant, determining the desired right bend ratio of jetway hood`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT JETWAY RIGHT DEPLOYMENT": {
    desc: `Interactive Point Jetway constant, determining the desired right deployment angle of jetway hood`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT JETWAY TOP HORIZONTAL": {
    desc: `Interactive Point Jetway constant, determining the desired top horizontal ratio of displacement of jetway hood`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT JETWAY TOP VERTICAL": {
    desc: `Interactive Point Jetway constant, determining the desired top vertical ratio of displacement of jetway hood`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT GOAL": {
    desc: `The Interactive Point goal percentage of opening (if it's for a door) or percentage of deployment (if it's for a hose or cable).`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "INTERACTIVE POINT OPEN": {
    desc: `Interactive Point current percentage of opening (if door) or deployment (if hose/cable)`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "INTERACTIVE POINT PITCH": {
    desc: `Interactive Point orientation: Pitch`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT POSX": {
    desc: `Interactive Point X position relative to datum reference point`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT POSY": {
    desc: `Interactive Point Y position relative to datum reference point`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT POSZ": {
    desc: `Interactive Point Z position relative to datum reference point`,
    units: `feet`,
    ...dataType(`Float64`),
  },
  "INTERACTIVE POINT TYPE": {
    desc: `The type of interactive point`,
    units: `enum`,
    ...dataType(`Int32`),
  },
};

const WEIGHT = {
  "EMPTY WEIGHT": {
    desc: `Empty weight of the aircraft`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "EMPTY WEIGHT CROSS COUPLED MOI": {
    desc: `Empty weight cross coupled moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "EMPTY WEIGHT PITCH MOI": {
    desc: `Empty weight pitch moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "EMPTY WEIGHT ROLL MOI": {
    desc: `Empty weight roll moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "EMPTY WEIGHT YAW MOI": {
    desc: `Empty weight yaw moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "MAX GROSS WEIGHT": {
    desc: `Maximum gross weight of the aircaft`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "TOTAL WEIGHT": {
    desc: `Total weight of the aircraft`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "TOTAL WEIGHT CROSS COUPLED MOI": {
    desc: `Total weight cross coupled moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "TOTAL WEIGHT PITCH MOI": {
    desc: `Total weight pitch moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "TOTAL WEIGHT ROLL MOI": {
    desc: `Total weight roll moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
  "TOTAL WEIGHT YAW MOI": {
    desc: `Total weight yaw moment of inertia`,
    units: `slugs`,
    ...dataType(`Float64`),
  },
};

export const AircraftFlightModelVariables = {
  ...GENERAL,
  ...CENTER_OF_GRAVITY,
  ...INTERACTIVE_POINTS,
  ...WEIGHT,
};
