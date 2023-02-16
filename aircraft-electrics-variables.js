// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Electrics_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const GENERAL_BUSES = {
  // BUS LOOKUP INDEX This is a settable simvar meaning that it can both be read and set. Some of the simvars in this list are using this to lookup a value using two arguments (one argument in addition to the component index). For example to check the state of the connection between a "circuit.45" and the "bus.2" it would be written as follows:
  // 2 (>A:BUS LOOKUP INDEX, Number) (A:CIRCUIT CONNECTION ON:45, Bool)
  // -
  "BUS BREAKER PULLED": {
    desc: `This will be true if the bus breaker is pulled. Requires a BUS_LOOKUP_INDEX and a bus index`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BUS CONNECTION ON": {
    desc: `This will be true if the bus is connected. Requires a BUS_LOOKUP_INDEX and a bus index`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ELECTRICAL GENALT LOAD": {
    desc: `This returns the percentage of the load output that is being consumed. This requires an alternator index when referencing`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "ELECTRICAL GENALT BUS AMPS": {
    desc: `The load handled by the alternator. This requires an alternator index when referencing`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL GENALT BUS VOLTAGE": {
    desc: `General alternator voltage. This requires an alternator index when referencing`,
    units: `volts`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL MAIN BUS VOLTAGE": {
    desc: `The main bus voltage. Use a bus index when referencing`,
    units: `volts`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL AVIONICS BUS AMPS": {
    desc: `Avionics bus current`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL AVIONICS BUS VOLTAGE": {
    desc: `Avionics bus voltage`,
    units: `volts`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL MAIN BUS AMPS": {
    desc: `Main bus current`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL TOTAL LOAD AMPS": {
    desc: `Total load amps`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "NEW ELECTRICAL SYSTEM": {
    desc: `Is the aircraft using the new Electrical System or the legacy FSX one`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const ALTERNATORS = {
  "ALTERNATOR BREAKER PULLED": {
    desc: `This will be true if the alternator breaker is pulled. Requires a BUS_LOOKUP_INDEX and an alternator index`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "ALTERNATOR CONNECTION ON": {
    desc: `This will be true if the alternator is connected. Requires a BUS_LOOKUP_INDEX and an alternator index`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG MASTER ALTERNATOR:index": {
    desc: `The alternator (generator) switch position, true if the switch is ON. Requires an engine index, and the use of an alternator index when referencing`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const APU = {
  "APU BLEED PRESSURE RECEIVED BY ENGINE": {
    desc: `Bleed air pressure received by the engine from the APU`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "APU GENERATOR ACTIVE:index": {
    desc: `Set or get whether an APU is active (true) or not (false). Takes an index to be able to have multiple generators on a single APU`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "APU GENERATOR SWITCH:index": {
    desc: `Enables or disables the APU for an engine. Takes an index to be able to have multiple generators on a single APU`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "APU ON FIRE DETECTED": {
    desc: `Will return true if the APU is on fire, or false otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "APU PCT RPM": {
    desc: `Auxiliary power unit RPM, as a percentage`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "APU PCT STARTER": {
    desc: `Auxiliary power unit starter, as a percentage`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "APU SWITCH": {
    desc: `Boolean, whether or not the APU is switched on`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "APU VOLTS:index": {
    desc: `The volts from the APU to the selected engine. Takes an index to be able to have multiple generators on a single APU`,
    units: `volts`,
    ...dataType(`Float64`),
  },
  "BLEED AIR APU": {
    desc: `Boolean, returns whether or not the APU attempts to provide Bleed Air`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const BATTERIES = {
  "BATTERY BREAKER PULLED": {
    desc: `This will be true if the battery breaker is pulled. Requires a BUS LOOKUP INDEX and a battery index`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BATTERY CONNECTION ON": {
    desc: `This will be true if the battery is connected. Requires a BUS_LOOKUP_INDEX and a battery index`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ELECTRICAL BATTERY BUS AMPS": {
    desc: `Battery bus current`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL BATTERY BUS VOLTAGE": {
    desc: `Battery bus voltage`,
    units: `volts`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL BATTERY ESTIMATED CAPACITY PCT": {
    desc: `Battery capacity over max capacity, 100 is full`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "ELECTRICAL BATTERY LOAD": {
    desc: `The load handled by the battery (negative values mean the battery is receiving current). Use a battery index when referencing`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL BATTERY VOLTAGE": {
    desc: `The battery voltage. Use a battery index when referencing`,
    units: `volts`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL HOT BATTERY BUS AMPS": {
    desc: `Current available when battery switch is turned off`,
    units: `amperes`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL HOT BATTERY BUS VOLTAGE": {
    desc: `Voltage available when battery switch is turned off`,
    units: `volts`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ELECTRICAL MASTER BATTERY": {
    desc: `The battery switch position, true if the switch is ON. Use a battery index when referencing`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
};

const BREAKERS = {
  "BREAKER ADF": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER ALTFLD": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER AUTOPILOT": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER AVNBUS1": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER AVNBUS2": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER AVNFAN": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER FLAP": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER GPS": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER INST": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER INSTLTS": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER NAVCOM1": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER NAVCOM2": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER NAVCOM3": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER TURNCOORD": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER WARN": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "BREAKER XPNDR": {
    desc: `Can be used to get or set the breaker state for the electrical system`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
};

const CIRCUITS = {
  "CIRCUIT AUTOPILOT ON": {
    desc: `Is electrical power available to this circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT AUTO BRAKES ON": {
    desc: `Is electrical power available to this circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT AUTO FEATHER ON": {
    desc: `Is electrical power available to this circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT AVIONICS ON": {
    desc: `Is electrical power available to this circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT BREAKER PULLED": {
    desc: `This will be true if the circuit breaker is pulled. Requires a BUS_LOOKUP_INDEX and a circuit index.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CIRCUIT CONNECTION ON": {
    desc: `This will be true if the circuit is connected. Requires a BUS_LOOKUP_INDEX and a circuit index`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT FLAP MOTOR ON": {
    desc: `Is electrical power available to the flap motor circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT GEAR MOTOR ON": {
    desc: `Is electrical power available to the gear motor circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT GEAR WARNING ON": {
    desc: `Is electrical power available to gear warning circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT GENERAL PANEL ON": {
    desc: `Is electrical power available to the general panel circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT HYDRAULIC PUMP ON": {
    desc: `Is electrical power available to the hydraulic pump circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT MARKER BEACON ON": {
    desc: `Is electrical power available to the marker beacon circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT NAVCOM1 ON": {
    desc: `Whether or not power is available to the NAVCOM1 circuit.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT NAVCOM2 ON": {
    desc: `Whether or not power is available to the NAVCOM2 circuit.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT NAVCOM3 ON": {
    desc: `Whether or not power is available to the NAVCOM3 circuit.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT ON": {
    desc: `This will be true if the given circuit is functioning. Use a circuit index when referencing.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT PITOT HEAT ON": {
    desc: `Is electrical power available to the pitot heat circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT POWER SETTING": {
    desc: `This returns the percentage of use that the circuit is getting. This requires a circuit index when referencing`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "CIRCUIT PROP SYNC ON": {
    desc: `Is electrical power available to the propeller sync circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT STANDBY VACUUM ON": {
    desc: `Is electrical power available to the vacuum circuit`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "CIRCUIT SWITCH ON": {
    desc: `The circuit switch position, true if the switch is ON. Use a circuit index when referencing.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

const EXTERNAL_POWER = {
  "EXTERNAL POWER AVAILABLE": {
    desc: `This will be true if the given external power source is available. Use an external power index when referencing`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "EXTERNAL POWER BREAKER PULLED": {
    desc: `Boolean, The state of the breaker of an external power source`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "EXTERNAL POWER CONNECTION ON": {
    desc: `Boolean, The state of the connection between a bus and an external power source`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "EXTERNAL POWER ON": {
    desc: `The external power switch position, true if the switch is ON. Use an external power index when referencing`,
    units: `bool`,
    ...dataType(`Int32`),
  },
};

export const AircraftElectricsVariables = {
  ...GENERAL_BUSES,
  ...ALTERNATORS,
  ...APU,
  ...BATTERIES,
  ...BREAKERS,
  ...CIRCUITS,
  ...EXTERNAL_POWER,
};
