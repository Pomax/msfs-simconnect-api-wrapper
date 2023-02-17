// See https://docs.flightsimulator.com/html/Programming_Tools/Event_IDs/Aircraft_Misc_Events.htm
const AIRCRAFT_FAILURES = {
  MASTER_CAUTION_ACKNOWLEDGE: {
    desc: ``,
  },
  MASTER_CAUTION_OFF: {
    desc: ``,
  },
  MASTER_CAUTION_ON: {
    desc: ``,
  },
  MASTER_CAUTION_SET: {
    desc: ``,
  },
  MASTER_CAUTION_TOGGLE: {
    desc: ``,
  },
  MASTER_WARNING_ACKNOWLEDGE: {
    desc: ``,
  },
  MASTER_WARNING_OFF: {
    desc: ``,
  },
  MASTER_WARNING_ON: {
    desc: ``,
  },
  MASTER_WARNING_SET: {
    desc: ``,
  },
  MASTER_WARNING_TOGGLE: {
    desc: ``,
  },
  TOGGLE_ELECTRICAL_FAILURE: {
    desc: `Toggle electrical system failure`,
  },
  TOGGLE_ENGINE1_FAILURE: {
    desc: `Toggle engine 1 failure`,
  },
  TOGGLE_ENGINE2_FAILURE: {
    desc: `Toggle engine 2 failure`,
  },
  TOGGLE_ENGINE3_FAILURE: {
    desc: `Toggle engine 3 failure`,
  },
  TOGGLE_ENGINE4_FAILURE: {
    desc: `Toggle engine 4 failure`,
  },
  TOGGLE_HYDRAULIC_FAILURE: {
    desc: `Toggles hydraulic system failure`,
  },
  TOGGLE_LEFT_BRAKE_FAILURE: {
    desc: `Toggles left brake failure`,
  },
  TOGGLE_PITOT_BLOCKAGE: {
    desc: `Toggles blocked pitot tube`,
  },
  TOGGLE_RIGHT_BRAKE_FAILURE: {
    desc: `Toggles right brake failure`,
  },
  TOGGLE_STATIC_PORT_BLOCKAGE: {
    desc: `Toggles blocked static port`,
  },
  TOGGLE_TOTAL_BRAKE_FAILURE: {
    desc: `Toggles brake failure (both)`,
  },
  TOGGLE_VACUUM_FAILURE: {
    desc: `Toggle vacuum system failure`,
  },
};

const LANDING_GEAR_BRAKES = {
  ANTISKID_BRAKES_TOGGLE: {
    desc: `Turn the anti-skid braking system on or off.`,
  },
  AXIS_LEFT_BRAKE_SET: {
    desc: `Sets the left brake position from an axis controller (e.g. joystick) to the value given as the parameter [0], from -16383 (0 braking) to +16383 (maximum braking). Note that this is on a non-linear scale`,
    args: `number`,
  },
  AXIS_RIGHT_BRAKE_SET: {
    desc: `Sets the right brake position from an axis controller (e.g. joystick) to the value given as the parameter [0], from -16383 (0 braking) to +16383 (maximum braking). Note that this is on a non-linear scale`,
    args: `number`,
  },
  BRAKES: {
    desc: `Increment brake pressure`,
  },
  BRAKES_LEFT: {
    desc: `Increments left brake pressure`,
  },
  BRAKES_RIGHT: {
    desc: `Increments right brake pressure`,
  },
  GEAR_DOWN: {
    desc: `Sets gear handle in DOWN position`,
  },
  GEAR_EMERGENCY_HANDLE_TOGGLE: {
    desc: ``,
  },
  GEAR_PUMP: {
    desc: `Increments emergency gear extension`,
  },
  GEAR_SET: {
    desc: `Sets gear handle position up/down (0,1)`,
    args: `number`,
  },
  GEAR_TOGGLE: {
    desc: `Toggle gear handle`,
  },
  GEAR_UP: {
    desc: `Sets gear handle in UP position`,
  },
  PARKING_BRAKES: {
    desc: `Toggles the parking brake on/off`,
  },
  PARKING_BRAKE_SET: {
    desc: `Set the parking brake on/off`,
    args: `number`,
  },
  RETRACT_FLOAT_SWITCH_DEC: {
    desc: `If the plane has retractable floats, moves the retract position from Extend to Neutral, or Neutral to Retract.`,
  },
  RETRACT_FLOAT_SWITCH_INC: {
    desc: `If the plane has retractable floats, moves the retract position from Retract to Neutral, or Neutral to Extend.`,
  },
};

const GLIDERS = {
  MAC_CREADY_SETTING_DEC: {
    desc: `Decrement the MacCready setting by 0.1 m/s, down to a minimum of 0 m/s.`,
  },
  MAC_CREADY_SETTING_INC: {
    desc: `Increment the MacCready setting by 0.1 m/s, up to a maximum of 5 m/s.`,
  },
  MAC_CREADY_SETTING_SET: {
    desc: `Set the MacCready setting to a value between 0 and 5 m/s.`,
    args: `float`,
  },
};

const MISCELLANEOUS_SYSTEMS = {
  ANNUNCIATOR_SWITCH_OFF: {
    desc: `Turns off (0) the annunciator switch.`,
  },
  ANNUNCIATOR_SWITCH_ON: {
    desc: `Turns on (1) the annunciator switch.`,
  },
  ANNUNCIATOR_SWITCH_TOGGLE: {
    desc: `Toggles the annunciator switch off (0) and on (1).`,
  },
  BLEED_AIR_SOURCE_CONTROL_INC: {
    desc: `Increases the bleed air source control. Order of operation is Auto -> Off -> APU -> Engines.`,
  },
  BLEED_AIR_SOURCE_CONTROL_DEC: {
    desc: `Decreases the bleed air source control. Order of operation is Engines -> APU -> Off -> Auto.`,
  },
  BLEED_AIR_SOURCE_CONTROL_SET: {
    desc: `Sets the bleed air system source`,
    args: `number`,
  },
  CABIN_NO_SMOKING_ALERT_SWITCH_TOGGLE: {
    desc: `Turn the "No smoking" alert on or off.`,
  },
  CABIN_SEATBELTS_ALERT_SWITCH_TOGGLE: {
    desc: `Turn the "Fasten seatbelts" alert on or off.`,
  },
  DECREASE_DECISION_HEIGHT: {
    desc: `Decrements the AGL decision height reference by 1m.`,
  },
  INCREASE_DECISION_HEIGHT: {
    desc: `Increments the AGL decision height reference by 1m.`,
  },
  DECISION_HEIGHT_SET: {
    desc: `Set the AGL decision height reference, in meters.`,
    args: `number`,
  },
  DECREASE_DECISION_ALTITUDE_MSL: {
    desc: `Decrements the MSL decision height reference by 1m`,
  },
  INCREASE_DECISION_ALTITUDE_MSL: {
    desc: `Increments the MSL decision height reference by 1m`,
  },
  SET_DECISION_ALTITUDE_MSL: {
    desc: `Set the MSL decision height reference, in meters.`,
    args: `number`,
  },
  EXTINGUISH_ENGINE_FIRE: {
    desc: `This key event requires a two digit number for parameter [0]. The first digit represents the fire extinguisher index to use, and the second represents the engine index. For example, a value of 11 would represent using bottle 1 on engine 1. 21 would represent using bottle 2 on engine 1. Typical entries for a twin engine aircraft would be 11 and 22.`,
    args: `number`,
  },
  HORN_TRIGGER: {
    desc: `Trigger the aircraft horn.`,
  },
  HYDRAULIC_SWITCH_TOGGLE: {
    desc: `Turn the hydraulic switch on or off`,
    args: `bool`,
  },
  PITOT_HEAT_OFF: {
    desc: `Turns pitot heat switch off`,
  },
  PITOT_HEAT_ON: {
    desc: `Turns pitot heat switch on`,
  },
  PITOT_HEAT_SET: {
    desc: `Sets pitot heat switch on/off`,
    args: `bool`,
  },
  PITOT_HEAT_TOGGLE: {
    desc: `Toggles pitot heat switch`,
  },
  TOGGLE_PUSHBACK: {
    desc: `Toggles pushback.`,
  },
  RELEASE_DROPPABLE_OBJECTS: {
    desc: `Release one droppable object. Multiple key events will release multiple objects.`,
  },
  TOW_PLANE_REQUEST: {
    desc: `Request a tow plane. The user aircraft must be tow-able, stationary, on the ground and not already attached for this to succeed.`,
  },
  SCRIPT_EVENT_1: {
    desc: ``,
  },
  SCRIPT_EVENT_2: {
    desc: ``,
  },
  SEE_OWN_AC_OFF: {
    desc: ``,
  },
  SEE_OWN_AC_ON: {
    desc: ``,
  },
  SEE_OWN_AC_SET: {
    desc: ``,
  },
  SEE_OWN_AC_TOGGLE: {
    desc: ``,
  },
  SET_TAIL_HOOK_HANDLE: {
    desc: `Sets the tail hook handle`,
    args: `bool`,
  },
  SET_WING_FOLD: {
    desc: `Sets the wings into the folded position suitable for storage, typically on a carrier`,
    args: `bool`,
  },
  SMOKE_OFF: {
    desc: `Turns the smoke system off.`,
  },
  SMOKE_ON: {
    desc: `Turns the smoke system on.`,
  },
  SMOKE_SET: {
    desc: `Sets smoke system on/off`,
    args: `bool`,
  },
  SMOKE_TOGGLE: {
    desc: `Toggle smoke system switch.`,
  },
  TOGGLE_TAIL_HOOK_HANDLE: {
    desc: `Toggles tail hook.`,
  },
  TOGGLE_ALTERNATE_STATIC: {
    desc: `Toggles alternate static pressure port.`,
  },
  TOGGLE_AIRCRAFT_EXIT: {
    desc: `Toggles primary door open/close. Usually followed by (for example) KEY_SELECT_2, etc... for subsequent doors`,
  },
  TOGGLE_AIRCRAFT_EXIT_FAST: {
    desc: ``,
  },
  TOGGLE_STRUCTURAL_DEICE: {
    desc: `Toggles structural deice switch.`,
  },
  TOGGLE_TAILWHEEL_LOCK: {
    desc: `Toggles tail wheel lock.`,
  },
  TOGGLE_WATER_BALLAST_VALVE: {
    desc: `Turn the water ballast valve on or off.`,
  },
  TOGGLE_WATER_RUDDER: {
    desc: `Toggles water rudders.`,
  },
  TOGGLE_WING_FOLD: {
    desc: `Toggles wing folding.`,
  },
  TOW_PLANE_RELEASE: {
    desc: `Release a towed aircraft`,
  },
  TUG_DISABLE: {
    desc: `Disables tug.`,
  },
  TUG_HEADING: {
    desc: `Triggers the tug and sets the desired heading. The units are a 32 bit integer (0 to 4294967295) which represent 0 to 360 degrees. To set a 45 degree angle, for example, set the value to 4294967295 / 8.`,
    args: `number`,
  },
  TUG_SPEED: {
    desc: `Triggers tug, and sets desired speed, in feet per second. The speed can be either positive (forward movement) or negative (backward movement).`,
    args: `float`,
  },
  WAR_EMERGENCY_POWER: {
    desc: ``,
  },
};

const SIM_CONTROL = {
  BACK_TO_FLY: {
    desc: `This will raise the aircraft off the ground and into flight, or - if already in flight - it will force the aircraft to gain height.`,
  },
};

const CABIN_PRESSURIZATION = {
  PRESSURIZATION_PRESSURE_ALT_INC: {
    desc: `Increases the altitude that the cabin is pressurized to by 3.25.`,
  },
  PRESSURIZATION_PRESSURE_ALT_DEC: {
    desc: `Decreases the altitude that the cabin is pressurized to by 3.25.`,
  },
  PRESSURIZATION_CLIMB_RATE_INC: {
    desc: `Increment the cabin pressurization by 0.0541.`,
  },
  PRESSURIZATION_CLIMB_RATE_DEC: {
    desc: `Decrements the cabin pressurization by 0.0541.`,
  },
  PRESSURIZATION_CLIMB_RATE_SET: {
    desc: `Sets the cabin pressurization.`,
    args: `number`,
  },
  PRESSURIZATION_PRESSURE_DUMP_SWTICH: {
    desc: `Toggles the pressure dump switch between on (sets the cabin pressure to the outside air pressure) and off.`,
  },
};

const NOSE_WHEEL_STEERING = {
  AXIS_STEERING_SET: {
    desc: `Sets the value of the nose wheel steering position. Zero is straight ahead (-16384, far left +16384, far right).`,
    args: `number`,
  },
  NOSE_WHEEL_STEERING_LIMIT_SET: {
    desc: `Set the steering angle limit for the nose wheel. -180° maps to -16383 and 180° maps to 16383.`,
    args: `number`,
  },
  STEERING_INC: {
    desc: `Increments the nose wheel steering position by 5 percent.`,
  },
  STEERING_DEC: {
    desc: `Decrements the nose wheel steering position by 5 percent.`,
  },
  STEERING_SET: {
    desc: `Sets the value of the nose wheel steering position. Zero is straight ahead (-16383, far left +16383, far right).`,
    args: `number`,
  },
};

const WINDSHIELD_DE_ICE = {
  WINDSHIELD_DEICE_OFF: {
    desc: `Switches on the windshield deicing system. 	-`,
  },
  WINDSHIELD_DEICE_ON: {
    desc: `Switches off the windshield deicing system. 	-`,
  },
  WINDSHIELD_DEICE_SET: {
    desc: `Sets the windshield deicing system on or off based on the input parameter [0].`,
    args: `bool`,
  },
  WINDSHIELD_DEICE_TOGGLE: {
    desc: `Toggles the windshield deicing system on and off. 	-`,
  },
};

const CATAPULT_LAUNCHES = {
  TAKEOFF_ASSIST_ARM_TOGGLE: {
    desc: `Deploy or remove the launch assist arm.`,
  },
  TAKEOFF_ASSIST_ARM_SET: {
    desc: `Used to set or unset the launch assist arm.`,
    args: `bool`,
  },
  TAKEOFF_ASSIST_FIRE: {
    desc: `If everything is set up correctly. Launch from the catapult.`,
  },
  TOGGLE_LAUNCH_BAR_SWITCH: {
    desc: `Toggle the request for the launch bar to be installed or removed.`,
  },
  SET_LAUNCH_BAR_SWITCH: {
    desc: `Set the switch of the launch bar extension system to be on or off.`,
    args: `bool`,
  },
};

export const AircraftMiscEvents = {
  ...AIRCRAFT_FAILURES,
  ...LANDING_GEAR_BRAKES,
  ...GLIDERS,
  ...MISCELLANEOUS_SYSTEMS,
  ...SIM_CONTROL,
  ...CABIN_PRESSURIZATION,
  ...NOSE_WHEEL_STEERING,
  ...WINDSHIELD_DE_ICE,
  ...CATAPULT_LAUNCHES,
};
