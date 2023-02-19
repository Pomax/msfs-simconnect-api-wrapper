// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Control_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const AILERONS = {
  "AILERON AVERAGE DEFLECTION": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AILERON LEFT DEFLECTION": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AILERON LEFT DEFLECTION PCT": {
    desc: `Percent deflection`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "AILERON POSITION": {
    desc: `Percent aileron input left/right`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "AILERON RIGHT DEFLECTION": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AILERON RIGHT DEFLECTION PCT": {
    desc: `Percent deflection`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "AILERON TRIM": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "AILERON TRIM DISABLED": {
    desc: `Whether or not the Aileron Trim has been disabled`,
    units: `bool`,
    ...dataType(`Float64`), // wrong type probably
  },
  "AILERON TRIM PCT": {
    desc: `The trim position of the ailerons. Zero is fully retracted`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const ELEVATOR = {
  "ELEVATOR DEFLECTION": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "ELEVATOR DEFLECTION PCT": {
    desc: `Percent deflection`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ELEVATOR POSITION": {
    desc: `Percent elevator input deflection`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELEVATOR TRIM DISABLED": {
    desc: `Whether or not the Elevator Trim has been disabled`,
    units: `bool`,
    ...dataType(`Int32`), // there is no true bool datatype
  },
  "ELEVATOR TRIM DOWN LIMIT": {
    desc: `Returns the maximum elevator trim value. This corresponds to the elevator_trim_down_limit in the Flight Model Config file`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ELEVATOR TRIM INDICATOR": {
    desc: `Percent elevator trim (for indication)`,
    units: `position`,
    ...dataType(`Float64`),
  },
  "ELEVATOR TRIM NEUTRAL": {
    desc: `Elevator trim neutral`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "ELEVATOR TRIM PCT": {
    desc: `Percent elevator trim`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ELEVATOR TRIM POSITION": {
    desc: `Elevator trim deflection`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELEVATOR TRIM UP LIMIT": {
    desc: `Returns the maximum elevator trim value. This corresponds to the elevator_trim_up_limit in the Flight Model Config file`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
  "ELEVON DEFLECTION": {
    desc: `Elevon deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
};

const FLAPS = {
  "FLAP DAMAGE BY SPEED": {
    desc: `True if flaps are damaged by excessive speed`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLAP POSITION SET": {
    desc: `Set the position of the flaps control`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "FLAP SPEED EXCEEDED": {
    desc: `True if safe speed limit for flaps exceeded`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLAPS AVAILABLE": {
    desc: `True if flaps available`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLAPS EFFECTIVE HANDLE INDEX:index": {
    desc: `This returns the effective flaps handle index, after some of the conditions have potentially forced the state to change`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "FLAPS HANDLE INDEX:index": {
    desc: `Index of current flap position`,
    units: `number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FLAPS HANDLE PERCENT": {
    desc: `Percent flap handle extended`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "FLAPS NUM HANDLE POSITIONS": {
    desc: `Number of available flap positions`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "LEADING EDGE FLAPS LEFT ANGLE": {
    desc: `Angle left leading edge flap extended. Use LEADING_EDGE_FLAPS_LEFT_PERCENT to set a value`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "LEADING EDGE FLAPS LEFT INDEX": {
    desc: `Index of left leading edge flap position`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "LEADING EDGE FLAPS LEFT PERCENT": {
    desc: `Percent left leading edge flap extended`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "LEADING EDGE FLAPS RIGHT ANGLE": {
    desc: `Angle right leading edge flap extended. Use LEADING_EDGE_FLAPS_RIGHT_PERCENT to set a value`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "LEADING EDGE FLAPS RIGHT INDEX": {
    desc: `Index of right leading edge flap position`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "LEADING EDGE FLAPS RIGHT PERCENT": {
    desc: `Percent right leading edge flap extended`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TRAILING EDGE FLAPS LEFT ANGLE": {
    desc: `Angle left trailing edge flap extended. Use TRAILING_EDGE_FLAPS_LEFT_PERCENT to set a value`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "TRAILING EDGE FLAPS LEFT INDEX": {
    desc: `Index of left trailing edge flap position`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TRAILING EDGE FLAPS LEFT PERCENT": {
    desc: `Percent left trailing edge flap extended`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TRAILING EDGE FLAPS RIGHT ANGLE": {
    desc: `Angle right trailing edge flap extended. Use TRAILING_EDGE_FLAPS_RIGHT_PERCENT to set a value`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "TRAILING EDGE FLAPS RIGHT INDEX": {
    desc: `Index of right trailing edge flap position`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TRAILING EDGE FLAPS RIGHT PERCENT": {
    desc: `Percent right trailing edge flap extended`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const FLY_BY_WIRE = {
  "FLY BY WIRE ALPHA PROTECTION": {
    desc: `Returns true if the fly-by-wire alpha protection is enabled or false otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY BY WIRE ELAC FAILED": {
    desc: `True if the Elevators and Ailerons computer has failed`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY BY WIRE ELAC SWITCH": {
    desc: `True if the fly by wire Elevators and Ailerons computer is on`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY BY WIRE FAC FAILED": {
    desc: `True if the Flight Augmentation computer has failed`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY BY WIRE FAC SWITCH": {
    desc: `True if the fly by wire Flight Augmentation computer is on`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY BY WIRE SEC FAILED": {
    desc: `True if the Spoilers and Elevators computer has failed`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FLY BY WIRE SEC SWITCH": {
    desc: `True if the fly by wire Spoilers and Elevators computer is on`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const FOLDING_WINGS = {
  "FOLDING WING HANDLE POSITION": {
    desc: `True if the folding wing handle is engaged`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "FOLDING WING LEFT PERCENT": {
    desc: `Left folding wing position, 1.0 is fully folded`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "FOLDING WING RIGHT PERCENT": {
    desc: `Right folding wing position, 1.0 is fully folded`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
};

const RUDDER = {
  "RUDDER DEFLECTION": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "RUDDER DEFLECTION PCT": {
    desc: `Percent deflection`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "RUDDER PEDAL INDICATOR": {
    desc: `Rudder pedal position`,
    units: `position`,
    ...dataType(`Float64`),
  },
  "RUDDER PEDAL POSITION": {
    desc: `Percent rudder pedal deflection (for animation)`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RUDDER POSITION": {
    desc: `Percent rudder input deflection`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RUDDER TRIM": {
    desc: `Angle deflection`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "RUDDER TRIM DISABLED": {
    desc: `Whether or not the Rudder Trim has been disabled`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "RUDDER TRIM PCT": {
    desc: `The trim position of the rudder. Zero is no trim`,
    units: `percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const SPOILERS = {
  "SPOILERS ARMED": {
    desc: `Checks if autospoilers are armed (true) or not (false)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "SPOILER AVAILABLE": {
    desc: `True if spoiler system available`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "SPOILERS HANDLE POSITION": {
    desc: `Spoiler handle position`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "SPOILERS LEFT POSITION": {
    desc: `Percent left spoiler deflected`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "SPOILERS RIGHT POSITION": {
    desc: `Percent right spoiler deflected`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
};

const CARRIER_OPERATIONS = {
  "BLAST SHIELD POSITION:index": {
    desc: `Indexed from 1, 100 is fully deployed, 0 flat on deck`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "CABLE CAUGHT BY TAILHOOK:index": {
    desc: `A number 1 through 4 for the cable number caught by the tailhook. Cable 1 is the one closest to the stern of the carrier. A value of 0 indicates no cable was caught`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "CATAPULT STROKE POSITION:index": {
    desc: `Catapults are indexed from 1. This value will be 0 before the catapult fires, and then up to 100 as the aircraft is propelled down the catapult. The aircraft may takeoff before the value reaches 100 (depending on the aircraft weight, power applied, and other factors), in which case this value will not be further updated. This value could be used to drive a bogie animation`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "HOLDBACK BAR INSTALLED": {
    desc: `Holdback bars allow build up of thrust before takeoff from a catapult, and are installed by the deck crew of an aircraft carrier`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "LAUNCHBAR HELD EXTENDED": {
    desc: `This will be True if the launchbar is fully extended, and can be used, for example, to change the color of an instrument light`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "LAUNCHBAR POSITION": {
    desc: `Installed on aircraft before takeoff from a carrier catapult. Note that gear cannot retract with this extended. 100 = fully extended`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "LAUNCHBAR SWITCH": {
    desc: `If this is set to True the launch bar switch has been engaged`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "NUMBER OF CATAPULTS": {
    desc: `Maximum of 4. A model can contain more than 4 catapults, but only the first four will be read and recognized by the simulation`,
    units: `number`,
    ...dataType(`Int32`),
  },
};

export const AircraftControlVariables = {
  ...AILERONS,
  ...ELEVATOR,
  ...FLAPS,
  ...FLY_BY_WIRE,
  ...FOLDING_WINGS,
  ...RUDDER,
  ...SPOILERS,
  ...CARRIER_OPERATIONS,
};
