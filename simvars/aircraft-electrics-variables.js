// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Electrics_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Percent,
  PercentOver100,
  Pounds,
  Amperes,
  Volts,
} from "./simvar-utils.js";

const GENERAL_BUSES = {
  // BUS LOOKUP INDEX This is a settable simvar meaning that it can both be read and set. Some of the simvars in this list are using this to lookup a value using two arguments (one argument in addition to the component index). For example to check the state of the connection between a "circuit.45" and the "bus.2" it would be written as follows:
  // 2 (>A:BUS LOOKUP INDEX, Number) (A:CIRCUIT CONNECTION ON:45, Bool)
  // -
  "BUS BREAKER PULLED": define(
    `This will be true if the bus breaker is pulled. Requires a BUS_LOOKUP_INDEX and a bus index`,
    Bool,
    SInt32
  ),
  "BUS CONNECTION ON": define(
    `This will be true if the bus is connected. Requires a BUS_LOOKUP_INDEX and a bus index`,
    Bool,
    Int32
  ),
  "ELECTRICAL GENALT LOAD": define(
    `This returns the percentage of the load output that is being consumed. This requires an alternator index when referencing`,
    Percent,
    Float64
  ),
  "ELECTRICAL GENALT BUS AMPS": define(
    `The load handled by the alternator. This requires an alternator index when referencing`,
    Amperes,
    SFloat64
  ),
  "ELECTRICAL GENALT BUS VOLTAGE": define(
    `General alternator voltage. This requires an alternator index when referencing`,
    Volts,
    SFloat64
  ),
  "ELECTRICAL MAIN BUS VOLTAGE": define(
    `The main bus voltage. Use a bus index when referencing`,
    Volts,
    SFloat64
  ),
  "ELECTRICAL AVIONICS BUS AMPS": define(
    `Avionics bus current`,
    Amperes,
    SFloat64
  ),
  "ELECTRICAL AVIONICS BUS VOLTAGE": define(
    `Avionics bus voltage`,
    Volts,
    SFloat64
  ),
  "ELECTRICAL MAIN BUS AMPS": define(`Main bus current`, Amperes, SFloat64),
  "ELECTRICAL TOTAL LOAD AMPS": define(`Total load amps`, Amperes, SFloat64),
  "NEW ELECTRICAL SYSTEM": define(
    `Is the aircraft using the new Electrical System or the legacy FSX one`,
    Bool,
    Int32
  ),
};

const ALTERNATORS = {
  "ALTERNATOR BREAKER PULLED": define(
    `This will be true if the alternator breaker is pulled. Requires a BUS_LOOKUP_INDEX and an alternator index`,
    Bool,
    SInt32
  ),
  "ALTERNATOR CONNECTION ON": define(
    `This will be true if the alternator is connected. Requires a BUS_LOOKUP_INDEX and an alternator index`,
    Bool,
    Int32
  ),
  "GENERAL ENG MASTER ALTERNATOR:index": define(
    `The alternator (generator) switch position, true if the switch is ON. Requires an engine index, and the use of an alternator index when referencing`,
    Bool,
    Int32
  ),
};

const APU = {
  "APU BLEED PRESSURE RECEIVED BY ENGINE": define(
    `Bleed air pressure received by the engine from the APU`,
    Pounds,
    Float64
  ),
  "APU GENERATOR ACTIVE:index": define(
    `Set or get whether an APU is active (true) or not (false). Takes an index to be able to have multiple generators on a single APU`,
    Bool,
    SInt32
  ),
  "APU GENERATOR SWITCH:index": define(
    `Enables or disables the APU for an engine. Takes an index to be able to have multiple generators on a single APU`,
    Bool,
    Int32
  ),
  "APU ON FIRE DETECTED": define(
    `Will return true if the APU is on fire, or false otherwise`,
    Bool,
    Int32
  ),
  "APU PCT RPM": define(
    `Auxiliary power unit RPM, as a percentage`,
    PercentOver100,
    Float64
  ),
  "APU PCT STARTER": define(
    `Auxiliary power unit starter, as a percentage`,
    PercentOver100,
    Float64
  ),
  "APU SWITCH": define(
    `Boolean, whether or not the APU is switched on`,
    Bool,
    SInt32
  ),
  "APU VOLTS:index": define(
    `The volts from the APU to the selected engine. Takes an index to be able to have multiple generators on a single APU`,
    Volts,
    Float64
  ),
  "BLEED AIR APU": define(
    `Boolean, returns whether or not the APU attempts to provide Bleed Air`,
    Bool,
    Int32
  ),
};

const BATTERIES = {
  "BATTERY BREAKER PULLED": define(
    `This will be true if the battery breaker is pulled. Requires a BUS LOOKUP INDEX and a battery index`,
    Bool,
    SInt32
  ),
  "BATTERY CONNECTION ON": define(
    `This will be true if the battery is connected. Requires a BUS_LOOKUP_INDEX and a battery index`,
    Bool,
    Int32
  ),
  "ELECTRICAL BATTERY BUS AMPS": define(
    `Battery bus current`,
    Amperes,
    SFloat64
  ),
  "ELECTRICAL BATTERY BUS VOLTAGE": define(
    `Battery bus voltage`,
    Volts,
    SFloat64
  ),
  "ELECTRICAL BATTERY ESTIMATED CAPACITY PCT": define(
    `Battery capacity over max capacity, 100 is full`,
    Percent,
    Float64
  ),
  "ELECTRICAL BATTERY LOAD": define(
    `The load handled by the battery (negative values mean the battery is receiving current). Use a battery index when referencing`,
    Amperes,
    SFloat64
  ),
  "ELECTRICAL BATTERY VOLTAGE": define(
    `The battery voltage. Use a battery index when referencing`,
    Volts,
    SFloat64
  ),
  "ELECTRICAL HOT BATTERY BUS AMPS": define(
    `Current available when battery switch is turned off`,
    Amperes,
    SFloat64
  ),
  "ELECTRICAL HOT BATTERY BUS VOLTAGE": define(
    `Voltage available when battery switch is turned off`,
    Volts,
    SFloat64
  ),
  "ELECTRICAL MASTER BATTERY": define(
    `The battery switch position, true if the switch is ON. Use a battery index when referencing`,
    Bool,
    SInt32
  ),
};

const BREAKERS = {
  "BREAKER ADF": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER ALTFLD": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER AUTOPILOT": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER AVNBUS1": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER AVNBUS2": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER AVNFAN": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER FLAP": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER GPS": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER INST": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER INSTLTS": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER NAVCOM1": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER NAVCOM2": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER NAVCOM3": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER TURNCOORD": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER WARN": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
  "BREAKER XPNDR": define(
    `Can be used to get or set the breaker state for the electrical system`,
    Bool,
    SInt32
  ),
};

const CIRCUITS = {
  "CIRCUIT AUTOPILOT ON": define(
    `Is electrical power available to this circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT AUTO BRAKES ON": define(
    `Is electrical power available to this circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT AUTO FEATHER ON": define(
    `Is electrical power available to this circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT AVIONICS ON": define(
    `Is electrical power available to this circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT BREAKER PULLED": define(
    `This will be true if the circuit breaker is pulled. Requires a BUS_LOOKUP_INDEX and a circuit index.`,
    Bool,
    SInt32
  ),
  "CIRCUIT CONNECTION ON": define(
    `This will be true if the circuit is connected. Requires a BUS_LOOKUP_INDEX and a circuit index`,
    Bool,
    Int32
  ),
  "CIRCUIT FLAP MOTOR ON": define(
    `Is electrical power available to the flap motor circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT GEAR MOTOR ON": define(
    `Is electrical power available to the gear motor circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT GEAR WARNING ON": define(
    `Is electrical power available to gear warning circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT GENERAL PANEL ON": define(
    `Is electrical power available to the general panel circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT HYDRAULIC PUMP ON": define(
    `Is electrical power available to the hydraulic pump circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT MARKER BEACON ON": define(
    `Is electrical power available to the marker beacon circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT NAVCOM1 ON": define(
    `Whether or not power is available to the NAVCOM1 circuit.`,
    Bool,
    Int32
  ),
  "CIRCUIT NAVCOM2 ON": define(
    `Whether or not power is available to the NAVCOM2 circuit.`,
    Bool,
    Int32
  ),
  "CIRCUIT NAVCOM3 ON": define(
    `Whether or not power is available to the NAVCOM3 circuit.`,
    Bool,
    Int32
  ),
  "CIRCUIT ON": define(
    `This will be true if the given circuit is functioning. Use a circuit index when referencing.`,
    Bool,
    Int32
  ),
  "CIRCUIT PITOT HEAT ON": define(
    `Is electrical power available to the pitot heat circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT POWER SETTING": define(
    `This returns the percentage of use that the circuit is getting. This requires a circuit index when referencing`,
    Percent,
    Float64
  ),
  "CIRCUIT PROP SYNC ON": define(
    `Is electrical power available to the propeller sync circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT STANDBY VACUUM ON": define(
    `Is electrical power available to the vacuum circuit`,
    Bool,
    Int32
  ),
  "CIRCUIT SWITCH ON": define(
    `The circuit switch position, true if the switch is ON. Use a circuit index when referencing.`,
    Bool,
    Int32
  ),
};

const EXTERNAL_POWER = {
  "EXTERNAL POWER AVAILABLE": define(
    `This will be true if the given external power source is available. Use an external power index when referencing`,
    Bool,
    Int32
  ),
  "EXTERNAL POWER BREAKER PULLED": define(
    `Boolean, The state of the breaker of an external power source`,
    Bool,
    SInt32
  ),
  "EXTERNAL POWER CONNECTION ON": define(
    `Boolean, The state of the connection between a bus and an external power source`,
    Bool,
    Int32
  ),
  "EXTERNAL POWER ON": define(
    `The external power switch position, true if the switch is ON. Use an external power index when referencing`,
    Bool,
    Int32
  ),
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
