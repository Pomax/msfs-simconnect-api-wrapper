// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Helicopter_Variables.htmBool

import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Feet,
  Number,
  Degrees,
  Radians,
  PercentOver100,
  RPM,
  Rankine,
} from "./simvar-utils.js";

const COLLECTIVE = {
  "COLLECTIVE POSITION": define(
    `The position of the helicopter\'s collective. 0 is fully up, 100 fully depressed.`,
    PercentOver100,
    Float64
  ),
};

const ROTORS = {
  "DISK BANK ANGLE:index": define(
    `Rotor bank angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    Radians,
    Float64
  ),
  "DISK BANK PCT:index": define(
    `Rotor bank percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    PercentOver100,
    Float64
  ),
  "DISK CONING PCT:index": define(
    `Rotor coning percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    PercentOver100,
    Float64
  ),
  "DISK PITCH ANGLE:index": define(
    `Rotor pitch angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    Radians,
    Float64
  ),
  "DISK PITCH PCT:index": define(
    `Rotor pitch percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    PercentOver100,
    Float64
  ),
  "ROTOR BRAKE ACTIVE": define(
    `Whether the rotor brake is active (1, TRUE) or not (0, FALSE).`,
    Bool,
    Int32
  ),
  "ROTOR BRAKE HANDLE POS": define(
    `The percentage actuated of the rotor brake handle.`,
    PercentOver100,
    Float64
  ),
  "ROTOR CHIP DETECTED": define(
    `Whether the rotor chip is detected (1,TRUE) or not (0, FALSE).`,
    Bool,
    Int32
  ),
  "ROTOR CLUTCH ACTIVE": define(
    `Whether the rotor clutch is active (1, TRUE) or not (0, FALSE).`,
    Bool,
    Int32
  ),
  "ROTOR CLUTCH SWITCH POS": define(
    `The rotor clutch switch position, either on (1 TRUE) or off (0, FALSE).`,
    Bool,
    Int32
  ),
  "ROTOR COLLECTIVE BLADE PITCH PCT": define(
    `The rotor collective blade pitch.`,
    PercentOver100,
    Float64
  ),
  "ROTOR CYCLIC BLADE MAX PITCH POSITION": define(
    `The position (angle) at which blade has the maximum cyclic pitch.`,
    Degrees,
    Float64
  ),
  "ROTOR CYCLIC BLADE PITCH PCT": define(
    `The rotor cyclic blade (maximum) pitch.`,
    PercentOver100,
    Float64
  ),
  "ROTOR GOV ACTIVE": define(
    `Whether the rotor governor is active (1, TRUE) or not (0, FALSE).`,
    Bool,
    Int32
  ),
  "ROTOR GOV SWITCH POS": define(
    `The rotor governor switch position, either on (1 TRUE) or off (0, FALSE).`,
    Bool,
    Int32
  ),
  "ROTOR LATERAL TRIM PCT": define(
    `The rotor lateral trim percentage.`,
    PercentOver100,
    Float64
  ),
  "ROTOR LONGITUDINAL TRIM PCT": define(
    `The rotor longitudinal trim percentage.`,
    PercentOver100,
    Float64
  ),
  "ROTOR ROTATION ANGLE:index": define(
    `Rotor rotation angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    Radians,
    Float64
  ),
  "ROTOR RPM:index": define(`The indexed rotor RPM.`, RPM, Float64),
  "ROTOR RPM PCT:index": define(
    `Percent max rated rpm of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    PercentOver100,
    Float64
  ),
  "ROTOR TEMPERATURE": define(
    `The main rotor transmission temperature.`,
    Rankine,
    Float64
  ),
  //   "STRUCT ROTOR POSITION:index": define(
  //     `The position of the indexed rotor.`,
  //     units: `SIMCONNECT_DATA_XYZ`,
  //   ),
  "TAIL ROTOR BLADE PITCH PCT": define(
    `The pitch position of the tailrotor blades.`,
    PercentOver100,
    Float64
  ),
  "TAIL ROTOR PEDAL POSITION": define(
    `Percent tail rotor pedal deflection.`,
    PercentOver100,
    Float64
  ),
};

const ENGINE = {
  // The following two simvars trigger SIMCONNECT_EXCEPTION_NAME_UNRECOGNIZED exceptions:
  // "ENG ROTOR RPM:index": define(
  //   `Returns the indexed rotor RPM.`,
  //   units: `percent scalar`,
  //   Int32,
  // },
  // "ENG TORQUE PERCENT:index": define(
  //   `Returns the indexed rotor torque.`,
  //   units: `percent scalar`,
  //   Int32,
  // },
};

const SLING = {
  "IS ATTACHED TO SLING": define(
    `Set to true if this object is attached to a sling.`,
    Bool,
    Int32
  ),
  "NUM SLING CABLES": define(
    `The number of sling cables (not hoists) that are configured for the helicopter.`,
    Number,
    Int32
  ),
  // TODO: figure out how to expose this simvar properly
  // "SLING ACTIVE PAYLOAD STATION:index,param": define(
  //   `The payload station (identified by the parameter) where objects will be placed from the sling (identified by the index).`,
  //   Number,
  //   SInt32,
  // },
  "SLING CABLE BROKEN:index": define(
    `THis will be True (1) if the indexed cable is broken, or False (0) otherwise.`,
    Bool,
    Int32
  ),
  "SLING CABLE EXTENDED LENGTH:index": define(
    `The length of the indexed cable extending from the aircraft.`,
    Feet,
    SFloat64
  ),
  "SLING HOIST PERCENT DEPLOYED:index": define(
    `The percentage of the full length of the sling cable deployed.`,
    PercentOver100,
    Float64
  ),
  "SLING HOIST SWITCH:index": define(
    `This will be True (1) if the hoist is enabled or False (0) otherwise.`,
    Bool,
    SInt32
  ),
  "SLING HOOK IN PICKUP MODE": define(
    `This will be True (1) if the hook is in pickup mode or False (0) otherwise. When True, the hook will be capable of picking up another object.`,
    Bool,
    Int32
  ),
  //  Need to figure out whether this data type is even supported...
  //
  //   "SLING OBJECT ATTACHED:index": define(
  //     `
  //         If the SimVar units are set as boolean, this will return True (1) if a sling object is attached, or False (0) otherwise.
  //         If the SimVar units are set as a string, tis will return the container title of the object.
  //         Note that there can be multiple sling positions, indexed from 1. The sling positions are set in the Aircraft Configuration File.
  //     `,
  //     units: `Bool/String`,
  //   ),
};

export const HelicopterVariables = {
  ...COLLECTIVE,
  ...ROTORS,
  ...ENGINE,
  ...SLING,
};
