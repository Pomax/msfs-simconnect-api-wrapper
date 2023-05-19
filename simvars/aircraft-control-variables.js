// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Control_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Number,
  Degrees,
  Radians,
  PercentOver100,
  Position,
} from "./simvar-utils.js";

const AILERONS = {
  "AILERON AVERAGE DEFLECTION": define(`Angle deflection`, Radians, Float64),
  "AILERON LEFT DEFLECTION": define(`Angle deflection`, Radians, Float64),
  "AILERON LEFT DEFLECTION PCT": define(
    `Percent deflection`,
    PercentOver100,
    Float64
  ),
  "AILERON POSITION": define(
    `Percent aileron input left/right`,
    Position,
    SFloat64
  ),
  "AILERON RIGHT DEFLECTION": define(`Angle deflection`, Radians, Float64),
  "AILERON RIGHT DEFLECTION PCT": define(
    `Percent deflection`,
    PercentOver100,
    Float64
  ),
  "AILERON TRIM": define(`Angle deflection`, Radians, Float64),
  "AILERON TRIM DISABLED": define(
    `Whether or not the Aileron Trim has been disabled`,
    Bool,
    Float64 // wrong type probably
  ),
  "AILERON TRIM PCT": define(
    `The trim position of the ailerons. Zero is fully retracted`,
    PercentOver100,
    SFloat64
  ),
};

const ELEVATOR = {
  "ELEVATOR DEFLECTION": define(`Angle deflection`, Radians, Float64),
  "ELEVATOR DEFLECTION PCT": define(
    `Percent deflection`,
    PercentOver100,
    Float64
  ),
  "ELEVATOR POSITION": define(
    `Percent elevator input deflection`,
    Position,
    SFloat64
  ),
  "ELEVATOR TRIM DISABLED": define(
    `Whether or not the Elevator Trim has been disabled`,
    Bool,
    Int32
  ),
  "ELEVATOR TRIM DOWN LIMIT": define(
    `Returns the maximum elevator trim value. This corresponds to the elevator_trim_down_limit in the Flight Model Config file`,
    Degrees,
    Float64
  ),
  "ELEVATOR TRIM INDICATOR": define(
    `Percent elevator trim (for indication)`,
    Position,
    Float64
  ),
  "ELEVATOR TRIM NEUTRAL": define(`Elevator trim neutral`, Radians, Float64),
  "ELEVATOR TRIM PCT": define(`Percent elevator trim`, PercentOver100, Float64),
  "ELEVATOR TRIM POSITION": define(
    `Elevator trim deflection`,
    Radians,
    SFloat64
  ),
  "ELEVATOR TRIM UP LIMIT": define(
    `Returns the maximum elevator trim value. This corresponds to the elevator_trim_up_limit in the Flight Model Config file`,
    Degrees,
    Float64
  ),
  "ELEVON DEFLECTION": define(`Elevon deflection`, Radians, Float64),
};

const FLAPS = {
  "FLAP DAMAGE BY SPEED": define(
    `True if flaps are damaged by excessive speed`,
    Bool,
    Int32
  ),
  "FLAP POSITION SET": define(
    `Set the position of the flaps control`,
    Position,
    SFloat64
  ),
  "FLAP SPEED EXCEEDED": define(
    `True if safe speed limit for flaps exceeded`,
    Bool,
    Int32
  ),
  "FLAPS AVAILABLE": define(`True if flaps available`, Bool, Int32),
  "FLAPS EFFECTIVE HANDLE INDEX:index": define(
    `This returns the effective flaps handle index, after some of the conditions have potentially forced the state to change`,
    Number,
    Int32
  ),
  "FLAPS HANDLE INDEX:index": define(
    `Index of current flap position`,
    Number,
    SInt32
  ),
  "FLAPS HANDLE PERCENT": define(
    `Percent flap handle extended`,
    PercentOver100,
    Float64
  ),
  "FLAPS NUM HANDLE POSITIONS": define(
    `Number of available flap positions`,
    Number,
    Int32
  ),
  "LEADING EDGE FLAPS LEFT ANGLE": define(
    `Angle left leading edge flap extended. Use LEADING_EDGE_FLAPS_LEFT_PERCENT to set a value`,
    Radians,
    Float64
  ),
  "LEADING EDGE FLAPS LEFT INDEX": define(
    `Index of left leading edge flap position`,
    Number,
    Int32
  ),
  "LEADING EDGE FLAPS LEFT PERCENT": define(
    `Percent left leading edge flap extended`,
    PercentOver100,
    SFloat64
  ),
  "LEADING EDGE FLAPS RIGHT ANGLE": define(
    `Angle right leading edge flap extended. Use LEADING_EDGE_FLAPS_RIGHT_PERCENT to set a value`,
    Radians,
    Float64
  ),
  "LEADING EDGE FLAPS RIGHT INDEX": define(
    `Index of right leading edge flap position`,
    Number,
    Int32
  ),
  "LEADING EDGE FLAPS RIGHT PERCENT": define(
    `Percent right leading edge flap extended`,
    PercentOver100,
    SFloat64
  ),
  "TRAILING EDGE FLAPS LEFT ANGLE": define(
    `Angle left trailing edge flap extended. Use TRAILING_EDGE_FLAPS_LEFT_PERCENT to set a value`,
    Radians,
    Float64
  ),
  "TRAILING EDGE FLAPS LEFT INDEX": define(
    `Index of left trailing edge flap position`,
    Number,
    Int32
  ),
  "TRAILING EDGE FLAPS LEFT PERCENT": define(
    `Percent left trailing edge flap extended`,
    PercentOver100,
    SFloat64
  ),
  "TRAILING EDGE FLAPS RIGHT ANGLE": define(
    `Angle right trailing edge flap extended. Use TRAILING_EDGE_FLAPS_RIGHT_PERCENT to set a value`,
    Radians,
    Float64
  ),
  "TRAILING EDGE FLAPS RIGHT INDEX": define(
    `Index of right trailing edge flap position`,
    Number,
    Int32
  ),
  "TRAILING EDGE FLAPS RIGHT PERCENT": define(
    `Percent right trailing edge flap extended`,
    PercentOver100,
    SFloat64
  ),
};

const FLY_BY_WIRE = {
  "FLY BY WIRE ALPHA PROTECTION": define(
    `Returns true if the fly-by-wire alpha protection is enabled or false otherwise`,
    Bool,
    Int32
  ),
  "FLY BY WIRE ELAC FAILED": define(
    `True if the Elevators and Ailerons computer has failed`,
    Bool,
    Int32
  ),
  "FLY BY WIRE ELAC SWITCH": define(
    `True if the fly by wire Elevators and Ailerons computer is on`,
    Bool,
    Int32
  ),
  "FLY BY WIRE FAC FAILED": define(
    `True if the Flight Augmentation computer has failed`,
    Bool,
    Int32
  ),
  "FLY BY WIRE FAC SWITCH": define(
    `True if the fly by wire Flight Augmentation computer is on`,
    Bool,
    Int32
  ),
  "FLY BY WIRE SEC FAILED": define(
    `True if the Spoilers and Elevators computer has failed`,
    Bool,
    Int32
  ),
  "FLY BY WIRE SEC SWITCH": define(
    `True if the fly by wire Spoilers and Elevators computer is on`,
    Bool,
    Int32
  ),
};

const FOLDING_WINGS = {
  "FOLDING WING HANDLE POSITION": define(
    `True if the folding wing handle is engaged`,
    Bool,
    Int32
  ),
  "FOLDING WING LEFT PERCENT": define(
    `Left folding wing position, 1.0 is fully folded`,
    PercentOver100,
    Float64
  ),
  "FOLDING WING RIGHT PERCENT": define(
    `Right folding wing position, 1.0 is fully folded`,
    PercentOver100,
    Float64
  ),
};

const RUDDER = {
  "RUDDER DEFLECTION": define(`Angle deflection`, Radians, Float64),
  "RUDDER DEFLECTION PCT": define(
    `Percent deflection`,
    PercentOver100,
    Float64
  ),
  "RUDDER PEDAL INDICATOR": define(`Rudder pedal position`, Position, Float64),
  "RUDDER PEDAL POSITION": define(
    `Percent rudder pedal deflection (for animation)`,
    Position,
    SFloat64
  ),
  "RUDDER POSITION": define(
    `Percent rudder input deflection`,
    Position,
    SFloat64
  ),
  "RUDDER TRIM": define(`Angle deflection`, Radians, Float64),
  "RUDDER TRIM DISABLED": define(
    `Whether or not the Rudder Trim has been disabled`,
    Bool,
    Int32
  ),
  "RUDDER TRIM PCT": define(
    `The trim position of the rudder. Zero is no trim`,
    PercentOver100,
    SFloat64
  ),
};

const SPOILERS = {
  "SPOILERS ARMED": define(
    `Checks if autospoilers are armed (true) or not (false)`,
    Bool,
    Int32
  ),
  "SPOILER AVAILABLE": define(`True if spoiler system available`, Bool, Int32),
  "SPOILERS HANDLE POSITION": define(
    `Spoiler handle position`,
    PercentOver100,
    Float64
  ),
  "SPOILERS LEFT POSITION": define(
    `Percent left spoiler deflected`,
    PercentOver100,
    Float64
  ),
  "SPOILERS RIGHT POSITION": define(
    `Percent right spoiler deflected`,
    PercentOver100,
    Float64
  ),
};

const CARRIER_OPERATIONS = {
  "BLAST SHIELD POSITION:index": define(
    `Indexed from 1, 100 is fully deployed, 0 flat on deck`,
    PercentOver100,
    Float64
  ),
  "CABLE CAUGHT BY TAILHOOK:index": define(
    `A number 1 through 4 for the cable number caught by the tailhook. Cable 1 is the one closest to the stern of the carrier. A value of 0 indicates no cable was caught`,
    Number,
    Int32
  ),
  "CATAPULT STROKE POSITION:index": define(
    `Catapults are indexed from 1. This value will be 0 before the catapult fires, and then up to 100 as the aircraft is propelled down the catapult. The aircraft may takeoff before the value reaches 100 (depending on the aircraft weight, power applied, and other factors), in which case this value will not be further updated. This value could be used to drive a bogie animation`,
    Number,
    Int32
  ),
  "HOLDBACK BAR INSTALLED": define(
    `Holdback bars allow build up of thrust before takeoff from a catapult, and are installed by the deck crew of an aircraft carrier`,
    Bool,
    Int32
  ),
  "LAUNCHBAR HELD EXTENDED": define(
    `This will be True if the launchbar is fully extended, and can be used, for example, to change the color of an instrument light`,
    Bool,
    Int32
  ),
  "LAUNCHBAR POSITION": define(
    `Installed on aircraft before takeoff from a carrier catapult. Note that gear cannot retract with this extended. 100 = fully extended`,
    PercentOver100,
    Float64
  ),
  "LAUNCHBAR SWITCH": define(
    `If this is set to True the launch bar switch has been engaged`,
    Bool,
    Int32
  ),
  "NUMBER OF CATAPULTS": define(
    `Maximum of 4. A model can contain more than 4 catapults, but only the first four will be read and recognized by the simulation`,
    Number,
    Int32
  ),
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
