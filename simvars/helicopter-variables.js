// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Helicopter_Variables.htmBool

import { dataType, SETTABLE } from "./simvar-utils.js";

const COLLECTIVE = {
  "COLLECTIVE POSITION": {
    desc: `The position of the helicopter\'s collective. 0 is fully up, 100 fully depressed.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
};

const ROTORS = {
  "DISK BANK ANGLE:index": {
    desc: `Rotor bank angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "DISK BANK PCT:index": {
    desc: `Rotor bank percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "DISK CONING PCT:index": {
    desc: `Rotor coning percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "DISK PITCH ANGLE:index": {
    desc: `Rotor pitch angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "DISK PITCH PCT:index": {
    desc: `Rotor pitch percent of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR BRAKE ACTIVE": {
    desc: `Whether the rotor brake is active (1, TRUE) or not (0, FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ROTOR BRAKE HANDLE POS": {
    desc: `The percentage actuated of the rotor brake handle.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR CHIP DETECTED": {
    desc: `Whether the rotor chip is detected (1,TRUE) or not (0, FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ROTOR CLUTCH ACTIVE": {
    desc: `Whether the rotor clutch is active (1, TRUE) or not (0, FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ROTOR CLUTCH SWITCH POS": {
    desc: `The rotor clutch switch position, either on (1 TRUE) or off (0, FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ROTOR COLLECTIVE BLADE PITCH PCT": {
    desc: `The rotor collective blade pitch.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR CYCLIC BLADE MAX PITCH POSITION": {
    desc: `The position (angle) at which blade has the maximum cyclic pitch.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "ROTOR CYCLIC BLADE PITCH PCT": {
    desc: `The rotor cyclic blade (maximum) pitch.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR GOV ACTIVE": {
    desc: `Whether the rotor governor is active (1, TRUE) or not (0, FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ROTOR GOV SWITCH POS": {
    desc: `The rotor governor switch position, either on (1 TRUE) or off (0, FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ROTOR LATERAL TRIM PCT": {
    desc: `The rotor lateral trim percentage.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR LONGITUDINAL TRIM PCT": {
    desc: `The rotor longitudinal trim percentage.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR ROTATION ANGLE:index": {
    desc: `Rotor rotation angle of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "ROTOR RPM:index": {
    desc: `The indexed rotor RPM.`,
    units: `RPM`,
    ...dataType(`Float64`),
  },
  "ROTOR RPM PCT:index": {
    desc: `Percent max rated rpm of the given rotor index. Index should be specified to 1 for main rotor and 2 for tail rotor.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ROTOR TEMPERATURE": {
    desc: `The main rotor transmission temperature.`,
    units: `Rankine`,
    ...dataType(`Float64`),
  },
  //   "STRUCT ROTOR POSITION:index": {
  //     desc: `The position of the indexed rotor.`,
  //     units: `SIMCONNECT_DATA_XYZ`,
  //   },
  "TAIL ROTOR BLADE PITCH PCT": {
    desc: `The pitch position of the tailrotor blades.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "TAIL ROTOR PEDAL POSITION": {
    desc: `Percent tail rotor pedal deflection.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
};

const ENGINE = {
  // The following two simvars trigger SIMCONNECT_EXCEPTION_NAME_UNRECOGNIZED exceptions:
  // "ENG ROTOR RPM:index": {
  //   desc: `Returns the indexed rotor RPM.`,
  //   units: `percent scalar`,
  //   ...dataType(`Int32`),
  // },
  // "ENG TORQUE PERCENT:index": {
  //   desc: `Returns the indexed rotor torque.`,
  //   units: `percent scalar`,
  //   ...dataType(`Int32`),
  // },
};

const SLING = {
  "IS ATTACHED TO SLING": {
    desc: `Set to true if this object is attached to a sling.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "NUM SLING CABLES": {
    desc: `The number of sling cables (not hoists) that are configured for the helicopter.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  // TODO: figure out how to expose this simvar properly
  // "SLING ACTIVE PAYLOAD STATION:index,param": {
  //   desc: `The payload station (identified by the parameter) where objects will be placed from the sling (identified by the index).`,
  //   units: `Number`,
  //   ...dataType(`Int32`, SETTABLE),
  // },
  "SLING CABLE BROKEN:index": {
    desc: `THis will be True (1) if the indexed cable is broken, or False (0) otherwise.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "SLING CABLE EXTENDED LENGTH:index": {
    desc: `The length of the indexed cable extending from the aircraft.`,
    units: `Feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "SLING HOIST PERCENT DEPLOYED:index": {
    desc: `The percentage of the full length of the sling cable deployed.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "SLING HOIST SWITCH:index": {
    desc: `This will be True (1) if the hoist is enabled or False (0) otherwise.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "SLING HOOK IN PICKUP MODE": {
    desc: `This will be True (1) if the hook is in pickup mode or False (0) otherwise. When True, the hook will be capable of picking up another object.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  //  Need to figure out whether this data type is even supported...
  //
  //   "SLING OBJECT ATTACHED:index": {
  //     desc: `
  //         If the SimVar units are set as boolean, this will return True (1) if a sling object is attached, or False (0) otherwise.
  //         If the SimVar units are set as a string, tis will return the container title of the object.
  //         Note that there can be multiple sling positions, indexed from 1. The sling positions are set in the Aircraft Configuration File.
  //     `,
  //     units: `Bool/String`,
  //   },
};

export const HelicopterVariables = {
  ...COLLECTIVE,
  ...ROTORS,
  ...ENGINE,
  ...SLING,
};
