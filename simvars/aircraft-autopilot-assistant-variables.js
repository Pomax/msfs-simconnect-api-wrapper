// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_AutopilotAssistant_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import {
  Int32,
  SInt32,
  Float64,
  SFloat64,
  String32,
  String256,
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
} from "./simvar-utils.js";

const AUTOPILOT = {
  "AUTOPILOT AIRSPEED ACQUISITION": define(
    `Currently not used within the simulation`,
    Bool,
    Int32
  ),
  "AUTOPILOT AIRSPEED HOLD": define(
    `returns whether airspeed hold is active (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT AIRSPEED HOLD CURRENT": define(
    `Currently not used within the simulation`,
    Bool,
    Int32
  ),
  "AUTOPILOT AIRSPEED HOLD VAR": define(
    `Returns the target holding airspeed for the autopilot`,
    Knots,
    Float64
  ),
  "AUTOPILOT AIRSPEED MAX CALCULATED": define(
    `Returns the maximum calculated airspeed (kcas) limit set for the autopilot`,
    Knots,
    Float64
  ),
  "AUTOPILOT AIRSPEED MIN CALCULATED": define(
    `Returns the minimum calculated airspeed (kcas) limit set for the autopilot`,
    Knots,
    Float64
  ),
  "AUTOPILOT ALT RADIO MODE": define(
    `If enabled the Autopilot will use the Radio Altitude rather than the Indicated Altitude`,
    Bool,
    Int32
  ),
  "AUTOPILOT ALTITUDE ARM": define(
    `Returns whether the autopilot is in Altitude Arm mode (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT ALTITUDE LOCK": define(`Altitude hold active`, Bool, Int32),
  "AUTOPILOT ALTITUDE LOCK VAR": define(
    `Set or get the slot index which the altitude hold mode will track when captured. See alt_mode_slot_index for more information`,
    Feet,
    SFloat64
  ),
  "AUTOPILOT ALTITUDE MANUALLY TUNABLE": define(
    `Whether or not the autopilot altitude is manually tunable or not`,
    Bool,
    Int32
  ),
  "AUTOPILOT ALTITUDE SLOT INDEX": define(
    `Index of the slot that the autopilot will use for the altitude reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    Number,
    Int32
  ),
  "AUTOPILOT APPROACH ACTIVE": define(
    `When true, the autopilot is currently flying the approach Flight Plan (the last legs)`,
    Bool,
    Int32
  ),
  "AUTOPILOT APPROACH ARM": define(
    `Returns true when the autopilot is active on the approach, once it reaches the adequate condition (in most cases, once it reaches the second-last waypoint of the flightplan)`,
    Bool,
    Int32
  ),
  "AUTOPILOT APPROACH CAPTURED": define(
    `Returns true when the lateral NAV mode is engaged and the angular deviation with the current tuned navigation frequency is less than 5°`,
    Bool,
    Int32
  ),
  "AUTOPILOT APPROACH HOLD": define(
    `Returns whether pproach mode is active (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT APPROACH IS LOCALIZER": define(
    `Returns true if the current approach is using a localizer`,
    Bool,
    Int32
  ),
  "AUTOPILOT ATTITUDE HOLD": define(`Attitude hold active`, Bool, Int32),
  "AUTOPILOT AVAILABLE": define(`Available flag`, Bool, Int32),
  "AUTOPILOT AVIONICS MANAGED": define(
    `Returns whether the autopilot has active managed avionics (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT BACKCOURSE HOLD": define(
    `Returns whether the autopilot back course mode is active (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT BANK HOLD": define(
    `Returns whether the autopilot bank hold mode is active (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT BANK HOLD REF": define(
    `The current bank-hold bank reference. Note that if you set this, the next frame the value will be overwritten by the engine, so you may need to write to this every game frame to ensure it maintains the required value`,
    Degrees,
    SFloat64
  ),
  "AUTOPILOT CRUISE SPEED HOLD": define(
    `Currently not used within the simulation`,
    Bool,
    Int32
  ),
  "AUTOPILOT DEFAULT PITCH MODE": define(
    `The current default pitch mode of the autopilot as configured in the plane configuration with the parameter default_pitch_mode`,
    Enum,
    Int32
  ),
  "AUTOPILOT DEFAULT ROLL MODE": define(
    `The current default roll mode of the autopilot as configured in the plane configuration with the parameter default_bank_mode`,
    Enum,
    Int32
  ),
  "AUTOPILOT DISENGAGED": define(
    `Returns whether the autopilot has been disengaged (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT FLIGHT DIRECTOR ACTIVE": define(
    `Flight director active`,
    Bool,
    Int32
  ),
  "AUTOPILOT FLIGHT DIRECTOR BANK": define(
    `Reference bank angle`,
    Radians,
    Float64
  ),
  "AUTOPILOT FLIGHT DIRECTOR BANK EX1": define(
    `Raw reference bank angle`,
    Radians,
    Float64
  ),
  "AUTOPILOT FLIGHT DIRECTOR PITCH": define(
    `Reference pitch angle`,
    Radians,
    Float64
  ),
  "AUTOPILOT FLIGHT DIRECTOR PITCH EX1": define(
    `Raw reference pitch angle`,
    Radians,
    Float64
  ),
  "AUTOPILOT FLIGHT LEVEL CHANGE": define(
    `Boolean, toggles the autopilot Flight Level Change mode`,
    Bool,
    SInt32
  ),
  "AUTOPILOT GLIDESLOPE ACTIVE": define(
    `When true, the autopilot is receiving a signal from the runway beacon and is following the slope to reach the ground`,
    Bool,
    Int32
  ),
  "AUTOPILOT GLIDESLOPE ARM": define(
    `Returns true when the autopilot is active on the glide slope`,
    Bool,
    Int32
  ),
  "AUTOPILOT GLIDESLOPE HOLD": define(
    `Returns whether the autopilot glidslope hold is active (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT HEADING LOCK": define(
    `Returns whether the autopilot heading lock is enabled (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT HEADING LOCK DIR": define(
    `Specifies / Returns the locked in heading for the autopilot`,
    Degrees,
    SFloat64
  ),
  "AUTOPILOT HEADING MANUALLY TUNABLE": define(
    `Whether or not the autopilot heading is manually tunable or not`,
    Bool,
    SInt32
  ),
  "AUTOPILOT HEADING SLOT INDEX": define(
    `Index of the slot that the autopilot will use for the heading reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    Number,
    Int32
  ),
  "AUTOPILOT MACH HOLD": define(`Mach hold active`, Bool, Int32),
  "AUTOPILOT MACH HOLD VAR": define(
    `Returns the target holding mach airspeed for the autopilot`,
    Number,
    Int32
  ),
  "AUTOPILOT MANAGED INDEX": define(
    `Currently not used within the simulation`,
    Number,
    Int32
  ),
  "AUTOPILOT MANAGED SPEED IN MACH": define(
    `Returns whether the managed speed is in mach (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT MANAGED THROTTLE ACTIVE": define(
    `Returns whether the autopilot managed throttle is active (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT MASTER": define(`On/off flag`, Bool, Int32),
  "AUTOPILOT MAX BANK": define(
    `Returns the maximum banking angle for the autopilot, in radians.`,
    Radians,
    Float64
  ),
  "AUTOPILOT MAX BANK ID": define(
    `Returns the index of the current maximum bank setting of the autopilot`,
    Number,
    Int32
  ),
  "AUTOPILOT MAX SPEED HOLD": define(
    `Currently not used within the simulation`,
    Bool,
    Int32
  ),
  "AUTOPILOT NAV1 LOCK": define(
    `Returns TRUE (1) if the autopilot Nav1 lock is applied, or 0 (FALSE) otherwise`,
    Bool,
    Int32
  ),
  "AUTOPILOT NAV SELECTED": define(
    `Index of Nav radio selected`,
    Number,
    Int32
  ),
  "AUTOPILOT PITCH HOLD": define(
    `Set to True if the autopilot pitch hold has is engaged`,
    Bool,
    Int32
  ),
  "AUTOPILOT PITCH HOLD REF": define(
    `Returns the current autotpilot reference pitch.`,
    Radians,
    Float64
  ),
  "AUTOPILOT RPM HOLD": define(
    `True if autopilot rpm hold applied`,
    Bool,
    Int32
  ),
  "AUTOPILOT RPM HOLD VAR": define(`Selected rpm`, Number, Int32),
  "AUTOPILOT RPM SLOT INDEX": define(
    `Index of the slot that the autopilot will use for the RPM reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    Number,
    Int32
  ),
  "AUTOPILOT SPEED SETTING": define(
    `Currently not used within the simulation`,
    Knots,
    Float64
  ),
  "AUTOPILOT SPEED SLOT INDEX": define(
    `Index of the managed references`,
    Number,
    Int32
  ),
  "AUTOPILOT TAKEOFF POWER ACTIVE": define(
    `Takeoff / Go Around power mode active`,
    Bool,
    Int32
  ),
  "AUTOPILOT THROTTLE ARM": define(
    `Returns whether the autopilot auto-throttle is armed (1, TRUE) or not (0, FALSE)`,
    Bool,
    Int32
  ),
  "AUTOPILOT THROTTLE MAX THRUST": define(
    `This can be used to set/get the thrust lever position for autopilot maximum thrust`,
    Percent,
    SFloat64
  ),
  "AUTOPILOT VERTICAL HOLD": define(
    `True if autopilot vertical hold applied`,
    Bool,
    Int32
  ),
  "AUTOPILOT VERTICAL HOLD VAR": define(
    `Selected vertical speed`,
    Feet,
    SFloat64
  ),
  "AUTOPILOT VS SLOT INDEX": define(
    `Index of the slot that the autopilot will use for the VS reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    Number,
    Int32
  ),
  "AUTOPILOT WING LEVELER": define(`Wing leveler active`, Bool, Int32),
  "AUTOPILOT YAW DAMPER": define(`Yaw damper active`, Bool, Int32),
};

const AIRCRAFT_ASSISTANCE = {
  "ASSISTANCE LANDING ENABLED": define(
    `Returns whether landing assistance has been enabled or not`,
    Bool,
    Int32
  ),
  "ASSISTANCE TAKEOFF ENABLED": define(
    `Returns whether takeoff assistance has been enabled or not`,
    Bool,
    Int32
  ),
};

const AI_AIRCRAFT_PILOT = {
  "AI ANTISTALL STATE": define(
    `The current state of the AI anti-stall system`,
    Enum,
    Int32
  ),
  "AI AUTOTRIM ACTIVE": define(
    `Returns whether the AI auto-trim system is enabled or not`,
    Bool,
    Int32
  ),
  "AI AUTOTRIM ACTIVE AGAINST PLAYER": define(
    `Returns whether the AI auto-trim system is enabled or not for AI controlled aircraft`,
    Bool,
    Int32
  ),
  "AI CONTROLS": define(
    `Returns whether the AI control system is enabled or not`,
    Bool,
    Int32
  ),
  "AI CURSOR MODE ACTIVE": define(
    `Returns whether the AI cursor mode is active or not`,
    Bool,
    Int32
  ),
  "ATTITUDE BARS POSITION": define(
    `AI reference pitch reference bars`,
    PercentOver100,
    Float64
  ),
  "ATTITUDE CAGE": define(`AI caged state`, Bool, Int32),
  "ATTITUDE INDICATOR BANK DEGREES": define(
    `AI bank indication`,
    Radians,
    Float64
  ),
  "ATTITUDE INDICATOR PITCH DEGREES": define(
    `AI pitch indication`,
    Radians,
    Float64
  ),
  "DELEGATE CONTROLS TO AI": define(
    `Returns whether the AI control system is active or not`,
    Bool,
    SInt32
  ),
};

const FLIGHT_ASSISTANT = {
  "FLY ASSISTANT CANCEL DESTINATION": define(
    `When set with any value this will cancel the current flight assistant destination`,
    Number,
    SInt32
  ),
  "FLY ASSISTANT CANCEL DESTINATION DISPLAY": define(
    `When set with any value this will cancel the display of the current flight assistant destination`,
    Number,
    SInt32
  ),
  "FLY ASSISTANT COM AI LOCKED": define(
    `Returns true when the copilot AI control is active and therefore COM AI is locked on active too`,
    Bool,
    Int32
  ),
  "FLY ASSISTANT HAVE DESTINATION": define(
    `Returns true when a destination has been set in the flight assistant`,
    Bool,
    Int32
  ),
  "FLY ASSISTANT LANDING SPEED": define(
    `Returns the POH range or an estimated value for this speed`,
    NullUnit, // String (max 32 chars)`
    String32
  ),
  "FLY ASSISTANT LANDING SPEED DISPLAY MODE": define(
    `Returns the display mode of the speed, CSS side (only STALL SPEED is working and will turn red when below)`,
    NullUnit, // String (max 32 chars)`
    String32
  ),
  "FLY ASSISTANT NEAREST CATEGORY": define(`Selected category`, Enum, SInt32),
  "FLY ASSISTANT NEAREST COUNT": define(
    `Number of elements in this category`,
    Number,
    Int32
  ),
  "FLY ASSISTANT NEAREST NAME": define(
    `Returns the name of the element at the specified index`,
    NullUnit, // String (max 256 chars)`
    String256
  ),
  "FLY ASSISTANT NEAREST SELECTED": define(
    `Returns the index of the currently selected element`,
    Number,
    SInt32
  ),
  "FLY ASSISTANT RIBBONS ACTIVE": define(
    `Returns true when both ribbon assistances are active (taxi and landing), and can also be used to set them`,
    Bool,
    SInt32
  ),
  "FLY ASSISTANT SET AS DESTINATION": define(
    `When set with any value, it will set the selected element as the current destination`,
    Number,
    SInt32
  ),
  "FLY ASSISTANT STALL SPEED": define(
    `Returns the flight assistant stall speed`,
    Knots,
    SFloat64
  ),
  "FLY ASSISTANT STALL SPEED DISPLAY MODE": define(
    `Returns the flight assistant stall speed display mode`,
    NullUnit, // String (max 32 chars)`
    String32
  ),
  "FLY ASSISTANT TAKEOFF SPEED": define(
    `Returns the flight assistant takeoff speed`,
    Knots,
    SFloat64
  ),
  "FLY ASSISTANT TAKEOFF SPEED DISPLAY MODE": define(
    `Returns the flight assistant takeoff speed display mode`,
    NullUnit, // String (max 32 chars)`
    String32
  ),
  "FLY ASSISTANT TAKEOFF SPEED ESTIMATED": define(
    `Can be set to override the estimated takeoff speed`,
    Knots,
    SFloat64
  ),
};

export const AircraftAutopilotAssistantVariables = {
  ...AUTOPILOT,
  ...AIRCRAFT_ASSISTANCE,
  ...AI_AIRCRAFT_PILOT,
  ...FLIGHT_ASSISTANT,
};
