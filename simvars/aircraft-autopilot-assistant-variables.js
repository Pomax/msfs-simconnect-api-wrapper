// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_AutopilotAssistant_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const AUTOPILOT = {
  "AUTOPILOT AIRSPEED ACQUISITION": {
    desc: `Currently not used within the simulation`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT AIRSPEED HOLD": {
    desc: `returns whether airspeed hold is active (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT AIRSPEED HOLD CURRENT": {
    desc: `Currently not used within the simulation`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT AIRSPEED HOLD VAR": {
    desc: `Returns the target holding airspeed for the autopilot`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT AIRSPEED MAX CALCULATED": {
    desc: `Returns the maximum calculated airspeed (kcas) limit set for the autopilot`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT AIRSPEED MIN CALCULATED": {
    desc: `Returns the minimum calculated airspeed (kcas) limit set for the autopilot`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT ALT RADIO MODE": {
    desc: `If enabled the Autopilot will use the Radio Altitude rather than the Indicated Altitude`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT ALTITUDE ARM": {
    desc: `Returns whether the autopilot is in Altitude Arm mode (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT ALTITUDE LOCK": {
    desc: `Altitude hold active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT ALTITUDE LOCK VAR": {
    desc: `Set or get the slot index which the altitude hold mode will track when captured. See alt_mode_slot_index for more information`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AUTOPILOT ALTITUDE MANUALLY TUNABLE": {
    desc: `Whether or not the autopilot altitude is manually tunable or not`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT ALTITUDE SLOT INDEX": {
    desc: `Index of the slot that the autopilot will use for the altitude reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT APPROACH ACTIVE": {
    desc: `When true, the autopilot is currently flying the approach Flight Plan (the last legs)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT APPROACH ARM": {
    desc: `Returns true when the autopilot is active on the approach, once it reaches the adequate condition (in most cases, once it reaches the second-last waypoint of the flightplan)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT APPROACH CAPTURED": {
    desc: `Returns true when the lateral NAV mode is engaged and the angular deviation with the current tuned navigation frequency is less than 5°`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT APPROACH HOLD": {
    desc: `Returns whether pproach mode is active (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT APPROACH IS LOCALIZER": {
    desc: `Returns true if the current approach is using a localizer`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT ATTITUDE HOLD": {
    desc: `Attitude hold active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT AVAILABLE": {
    desc: `Available flag`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT AVIONICS MANAGED": {
    desc: `Returns whether the autopilot has active managed avionics (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT BACKCOURSE HOLD": {
    desc: `Returns whether the autopilot back course mode is active (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT BANK HOLD": {
    desc: `Returns whether the autopilot bank hold mode is active (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT BANK HOLD REF": {
    desc: `The current bank-hold bank reference. Note that if you set this, the next frame the value will be overwritten by the engine, so you may need to write to this every game frame to ensure it maintains the required value`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AUTOPILOT CRUISE SPEED HOLD": {
    desc: `Currently not used within the simulation`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT DEFAULT PITCH MODE": {
    desc: `The current default pitch mode of the autopilot as configured in the plane configuration with the parameter default_pitch_mode`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT DEFAULT ROLL MODE": {
    desc: `The current default roll mode of the autopilot as configured in the plane configuration with the parameter default_bank_mode`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT DISENGAGED": {
    desc: `Returns whether the autopilot has been disengaged (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT FLIGHT DIRECTOR ACTIVE": {
    desc: `Flight director active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT FLIGHT DIRECTOR BANK": {
    desc: `Reference bank angle`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT FLIGHT DIRECTOR BANK EX1": {
    desc: `Raw reference bank angle`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT FLIGHT DIRECTOR PITCH": {
    desc: `Reference pitch angle`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT FLIGHT DIRECTOR PITCH EX1": {
    desc: `Raw reference pitch angle`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT FLIGHT LEVEL CHANGE": {
    desc: `Boolean, toggles the autopilot Flight Level Change mode`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "AUTOPILOT GLIDESLOPE ACTIVE": {
    desc: `When true, the autopilot is receiving a signal from the runway beacon and is following the slope to reach the ground`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT GLIDESLOPE ARM": {
    desc: `Returns true when the autopilot is active on the glide slope`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT GLIDESLOPE HOLD": {
    desc: `Returns whether the autopilot glidslope hold is active (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT HEADING LOCK": {
    desc: `Returns whether the autopilot heading lock is enabled (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT HEADING LOCK DIR": {
    desc: `Specifies / Returns the locked in heading for the autopilot`,
    units: `degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AUTOPILOT HEADING MANUALLY TUNABLE": {
    desc: `Whether or not the autopilot heading is manually tunable or not`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "AUTOPILOT HEADING SLOT INDEX": {
    desc: `Index of the slot that the autopilot will use for the heading reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MACH HOLD": {
    desc: `Mach hold active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MACH HOLD VAR": {
    desc: `Returns the target holding mach airspeed for the autopilot`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MANAGED INDEX": {
    desc: `Currently not used within the simulation`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MANAGED SPEED IN MACH": {
    desc: `Returns whether the managed speed is in mach (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MANAGED THROTTLE ACTIVE": {
    desc: `Returns whether the autopilot managed throttle is active (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MASTER": {
    desc: `On/off flag`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MAX BANK": {
    desc: `Returns the maximum banking angle for the autopilot, in radians.`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT MAX BANK ID": {
    desc: `Returns the index of the current maximum bank setting of the autopilot`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT MAX SPEED HOLD": {
    desc: `Currently not used within the simulation`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT NAV1 LOCK": {
    desc: `Returns TRUE (1) if the autopilot Nav1 lock is applied, or 0 (FALSE) otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT NAV SELECTED": {
    desc: `Index of Nav radio selected`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT PITCH HOLD": {
    desc: `Set to True if the autopilot pitch hold has is engaged`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT PITCH HOLD REF": {
    desc: `Returns the current autotpilot reference pitch.`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT RPM HOLD": {
    desc: `True if autopilot rpm hold applied`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT RPM HOLD VAR": {
    desc: `Selected rpm`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT RPM SLOT INDEX": {
    desc: `Index of the slot that the autopilot will use for the RPM reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT SPEED SETTING": {
    desc: `Currently not used within the simulation`,
    units: `knots`,
    ...dataType(`Float64`),
  },
  "AUTOPILOT SPEED SLOT INDEX": {
    desc: `Index of the managed references`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT TAKEOFF POWER ACTIVE": {
    desc: `Takeoff / Go Around power mode active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT THROTTLE ARM": {
    desc: `Returns whether the autopilot auto-throttle is armed (1, TRUE) or not (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT THROTTLE MAX THRUST": {
    desc: `This can be used to set/get the thrust lever position for autopilot maximum thrust`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AUTOPILOT VERTICAL HOLD": {
    desc: `True if autopilot vertical hold applied`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT VERTICAL HOLD VAR": {
    desc: `Selected vertical speed`,
    units: `feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AUTOPILOT VS SLOT INDEX": {
    desc: `Index of the slot that the autopilot will use for the VS reference. Note that there are 3 slots (1, 2, 3) that you can set/get normally, however you can also target slot index 0. Writing to slot 0 will overwrite all other slots with the slot 0 value, and by default the autopilot will follow slot 0 if you have not selected any slot index`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT WING LEVELER": {
    desc: `Wing leveler active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AUTOPILOT YAW DAMPER": {
    desc: `Yaw damper active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const AIRCRAFT_ASSISTANCE = {
  "ASSISTANCE LANDING ENABLED": {
    desc: `Returns whether landing assistance has been enabled or not`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ASSISTANCE TAKEOFF ENABLED": {
    desc: `Returns whether takeoff assistance has been enabled or not`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const AI_AIRCRAFT_PILOT = {
  "AI ANTISTALL STATE": {
    desc: `The current state of the AI anti-stall system`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "AI AUTOTRIM ACTIVE": {
    desc: `Returns whether the AI auto-trim system is enabled or not`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AI AUTOTRIM ACTIVE AGAINST PLAYER": {
    desc: `Returns whether the AI auto-trim system is enabled or not for AI controlled aircraft`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AI CONTROLS": {
    desc: `Returns whether the AI control system is enabled or not`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "AI CURSOR MODE ACTIVE": {
    desc: `Returns whether the AI cursor mode is active or not`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATTITUDE BARS POSITION": {
    desc: `AI reference pitch reference bars`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ATTITUDE CAGE": {
    desc: `AI caged state`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ATTITUDE INDICATOR BANK DEGREES": {
    desc: `AI bank indication`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "ATTITUDE INDICATOR PITCH DEGREES": {
    desc: `AI pitch indication`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "DELEGATE CONTROLS TO AI": {
    desc: `Returns whether the AI control system is active or not`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
};

const FLIGHT_ASSISTANT = {
  "FLY ASSISTANT CANCEL DESTINATION": {
    desc: `When set with any value this will cancel the current flight assistant destination`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLY ASSISTANT CANCEL DESTINATION DISPLAY": {
    desc: `When set with any value this will cancel the display of the current flight assistant destination`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLY ASSISTANT COM AI LOCKED": {
    desc: `Returns true when the copilot AI control is active and therefore COM AI is locked on active too`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY ASSISTANT HAVE DESTINATION": {
    desc: `Returns true when a destination has been set in the flight assistant`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY ASSISTANT LANDING SPEED": {
    desc: `Returns the POH range or an estimated value for this speed`,
    units: null, // String (max 32 chars)`
    ...dataType(`String32`),
  },
  "FLY ASSISTANT LANDING SPEED DISPLAY MODE": {
    desc: `Returns the display mode of the speed, CSS side (only STALL SPEED is working and will turn red when below)`,
    units: null, // String (max 32 chars)`
    ...dataType(`String32`),
  },
  "FLY ASSISTANT NEAREST CATEGORY": {
    desc: `Selected category`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLY ASSISTANT NEAREST COUNT": {
    desc: `Number of elements in this category`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "FLY ASSISTANT NEAREST NAME": {
    desc: `Returns the name of the element at the specified index`,
    units: null, // String (max 256 chars)
    ...dataType(`String256`),
  },
  "FLY ASSISTANT NEAREST SELECTED": {
    desc: `Returns the index of the currently selected element`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLY ASSISTANT RIBBONS ACTIVE": {
    desc: `Returns true when both ribbon assistances are active (taxi and landing), and can also be used to set them`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLY ASSISTANT SET AS DESTINATION": {
    desc: `When set with any value, it will set the selected element as the current destination`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLY ASSISTANT STALL SPEED": {
    desc: `Returns the flight assistant stall speed`,
    units: `knots`,
    ...dataType(`Float64`, SETTABLE),
  },
  "FLY ASSISTANT STALL SPEED DISPLAY MODE": {
    desc: `Returns the flight assistant stall speed display mode`,
    units: null, // String (max 32 chars)
    ...dataType(`String32`),
  },
  "FLY ASSISTANT TAKEOFF SPEED": {
    desc: `Returns the flight assistant takeoff speed`,
    units: `knots`,
    ...dataType(`Float64`, SETTABLE),
  },
  "FLY ASSISTANT TAKEOFF SPEED DISPLAY MODE": {
    desc: `Returns the flight assistant takeoff speed display mode`,
    units: null, // String (max 32 chars)
    ...dataType(`String32`),
  },
  "FLY ASSISTANT TAKEOFF SPEED ESTIMATED": {
    desc: `Can be set to override the estimated takeoff speed`,
    units: `knots`,
    ...dataType(`Float64`, SETTABLE),
  },
};

export const AircraftAutopilotAssistantVariables = {
  ...AUTOPILOT,
  ...AIRCRAFT_ASSISTANCE,
  ...AI_AIRCRAFT_PILOT,
  ...FLIGHT_ASSISTANT,
};
