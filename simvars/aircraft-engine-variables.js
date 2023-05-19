// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Engine_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Number,
  Enum,
  Radians,
  Percent,
  PercentOver100,
  Pounds,
  Position,
  RPM,
  Mask,
  Rankine,
  PoundsPerHour,
  GallonsPerHour,
  Inches,
  Ratio,
  FootPound,
  FootPounds,
  Seconds,
  Hours,
  Celsius,
  Gallons,
} from "./simvar-utils.js";

export const AircraftEngineVariables = {
  "BLEED AIR ENGINE:index": define(
    `Returns whether or not the indexed engine attempts to provide bleed air`,
    Bool,
    Int32
  ),
  "BLEED AIR SOURCE CONTROL:index": define(
    `The bleed air system source controller for an indexed engine`,
    Enum,
    Int32
  ),
  "ENGINE CONTROL SELECT": define(
    `Selected engines (combination of bit flags)`,
    Mask,
    SInt32
  ),
  "ENGINE PRIMER": define(`The engine primer position`, Position, SInt32),
  "ENGINE TYPE": define(`Engine type`, Enum, Int32),
  "ENG ANTI ICE:index": define(
    `Anti-ice switch for the indexed engine, true if enabled false otherwise`,
    Bool,
    Int32
  ),
  "ENG COMBUSTION:index": define(
    `True if the indexed engine is running, false otherwise`,
    Bool,
    Int32
  ),
  "ENG CYLINDER HEAD TEMPERATURE:index": define(
    `The indexed engine cylinder head temperature`,
    Rankine,
    Float64
  ),
  "ENG EXHAUST GAS TEMPERATURE:index": define(
    `Exhaust gas temperature for the indexed engine`,
    Rankine,
    Float64
  ),
  "ENG EXHAUST GAS TEMPERATURE GES:index": define(
    `Governed engine setting exhaust gas temperature for the indexed engine`,
    PercentOver100,
    Float64
  ),
  "ENG FAILED:index": define(
    `Failure flag for the indexed engine that has failed`,
    Bool,
    Int32
  ),
  "ENG FUEL FLOW BUG POSITION:index": define(
    `Fuel flow reference in pounds per hour for the indexed engine`,
    PoundsPerHour,
    Float64
  ),
  "ENG FUEL FLOW GPH:index": define(
    `Engine fuel flow in gallons per hour for the indexed engine`,
    GallonsPerHour,
    Float64
  ),
  "ENG FUEL FLOW PPH:index": define(
    `The indexed engine fuel flow in pounds per hour`,
    PoundsPerHour,
    Float64
  ),
  "ENG HYDRAULIC PRESSURE:index": define(
    `The indexed engine hydraulic pressure`,
    Pounds,
    Float64
  ),
  "ENG HYDRAULIC QUANTITY:index": define(
    `The indexed enginehydraulic fluid quantity, as a percentage of total capacity`,
    PercentOver100,
    Float64
  ),
  "ENG MANIFOLD PRESSURE:index": define(
    `The indexed engine manifold pressure`,
    Inches,
    Float64
  ),
  "ENG MAX RPM": define(`The indexed engine Maximum rpm`, RPM, Float64),
  "ENG N1 RPM:index": define(`The indexed engine N1 rpm`, RPM, Float64),
  "ENG N2 RPM:index": define(`The indexed engine N2 rpm`, RPM, Float64),
  "ENG OIL PRESSURE:index": define(
    `The indexed engine oil pressure`,
    Pounds,
    Float64
  ),
  "ENG OIL QUANTITY:index": define(
    `The indexed engine oil quantity as a percentage of full capacity`,
    PercentOver100,
    Float64
  ),
  "ENG OIL TEMPERATURE:index": define(
    `The indexed engine oil temperature`,
    Rankine,
    Float64
  ),
  "ENG ON FIRE:index": define(`The indexed engine on fire state`, Bool, SInt32),
  "ENG PRESSURE RATIO:index": define(
    `The indexed engine pressure ratio`,
    Ratio,
    Float64
  ),
  "ENG RPM ANIMATION PERCENT:index": define(
    `The indexed engine percentage maximum rated rpm (used for visual animation)`,
    Percent,
    Float64
  ),
  "ENG TORQUE:index": define(`The indexed engine torque`, FootPounds, Float64),
  "ENG VIBRATION:index": define(`The indexed engine vibration`, Number, Int32),
  "ESTIMATED FUEL FLOW:index": define(
    `Estimated fuel flow to the indexed engine at cruise speed`,
    PoundsPerHour,
    Float64
  ),
  "FULL THROTTLE THRUST TO WEIGHT RATIO": define(
    `Full throttle thrust to weight ratio`,
    Number,
    Int32
  ),
  "GENERAL ENG ANTI ICE POSITION:index": define(
    `The indexed engine anti-ice switch state`,
    Bool,
    Int32
  ),
  "GENERAL ENG COMBUSTION:index": define(
    `Set the indexed engine combustion flag to TRUE or FALSE. Note that this will not only stop all combustion, but it will also set the engine RPM to 0, regardless of the actual state of the simulation`,
    Bool,
    SInt32
  ),
  "GENERAL ENG COMBUSTION EX1:index": define(
    `This SimVar is similar to GENERAL ENG COMBUSTION, in that it can also be used to enable or disable engine combustion. However this SimVar will not interfere with the current state of ths simulation. For example, if the aircraft has a turbine engine with auto_ignition enabled or it's a propeller engine with magnetos, then in the subsequent simulation frames this SimVar may be set to 1 (TRUE) again as the engine restarts automatically`,
    Bool,
    SInt32
  ),
  "GENERAL ENG COMBUSTION SOUND PERCENT:index": define(
    `Percent of maximum sound being created by the indexed engine`,
    Percent,
    Float64
  ),
  "GENERAL ENG DAMAGE PERCENT:index": define(
    `Percent of total damage to the indexed engine`,
    Percent,
    Float64
  ),
  "GENERAL ENG ELAPSED TIME:index": define(
    `Total elapsed time since the indexed engine was started`,
    Hours,
    Float64
  ),
  "GENERAL ENG EXHAUST GAS TEMPERATURE:index": define(
    `The indexed engine exhaust gas temperature`,
    Rankine,
    SFloat64
  ),
  "GENERAL ENG FAILED:index": define(
    `The indexed engine fail flag`,
    Bool,
    Int32
  ),
  "GENERAL ENG FIRE DETECTED:index": define(
    `Detects if a fire has been detected in an indexed engine or not. If 0 (FALSE) no fire has been detected and if 1 (TRUE) then it has`,
    Bool,
    Int32
  ),
  "GENERAL ENG FUEL PRESSURE:index": define(
    `The indexed engine fuel pressure`,
    Pounds,
    SFloat64
  ),
  "GENERAL ENG FUEL PUMP ON:index": define(
    `Whether the indexed engine fuel pump on (1, TRUE) or off (0, FALSE)`,
    Bool,
    Int32
  ),
  "GENERAL ENG FUEL PUMP SWITCH:index": define(
    `Fuel pump switch state the indexed engine. If 0 (FALSE) the pump is off and if 1 (TRUE) then it is on`,
    Bool,
    Int32
  ),
  "GENERAL ENG FUEL PUMP SWITCH EX1:index": define(
    `Equivalent to GENERAL ENG FUEL PUMP SWITCH but differentiates between ON and AUTO`,
    Bool,
    Int32
  ),
  "GENERAL ENG FUEL USED SINCE START:index": define(
    `Fuel used since the indexed engine was last started`,
    Pounds,
    Float64
  ),
  "GENERAL ENG FUEL VALVE:index": define(
    `Fuel valve state for the indexed engine. If 0 (FALSE) then the valve is closed and if 1 (TRUE) then it is open`,
    Bool,
    Int32
  ),
  "GENERAL ENG GENERATOR ACTIVE:index": define(
    `Settable alternator (generator) on/off switch for the indexed engine`,
    Bool,
    SInt32
  ),
  "GENERAL ENG GENERATOR SWITCH:index": define(
    `Alternator (generator) on/off switch state for the indexed engine`,
    Bool,
    Int32
  ),
  "GENERAL ENG HOBBS ELAPSED TIME:index": define(
    `This can be used to find the time since the indexed engine started running`,
    Seconds,
    Float64
  ),
  "GENERAL ENG MASTER ALTERNATOR": define(
    `The alternator switch for a specific engine. Requires an engine index (1:4) when used`,
    Bool,
    Int32
  ),
  "GENERAL ENG MAX REACHED RPM:index": define(
    `Maximum attained rpm for the indexed engine`,
    RPM,
    Float64
  ),
  "GENERAL ENG MIXTURE LEVER POSITION:index": define(
    `Percent of max mixture lever position for the indexed engine`,
    Percent,
    SFloat64
  ),
  "GENERAL ENG OIL LEAKED PERCENT:index": define(
    `Percent of max oil capacity leaked for the indexed engine`,
    Percent,
    Float64
  ),
  "GENERAL ENG OIL PRESSURE:index": define(
    `The indexed engine oil pressure`,
    Pounds,
    SFloat64
  ),
  "GENERAL ENG OIL TEMPERATURE:index": define(
    `The indexed engine oil temperature`,
    Rankine,
    SFloat64
  ),
  "GENERAL ENG PCT MAX RPM:index": define(
    `Percent of max rated rpm for the indexed engine`,
    Percent,
    SFloat64
  ),
  "GENERAL ENG PROPELLER LEVER POSITION:index": define(
    `Percent of max prop lever position for the indexed engine`,
    Percent,
    SFloat64
  ),
  "GENERAL ENG REVERSE THRUST ENGAGED": define(
    `This will return 1 (TRUE) if the reverse thruster is engaged, or 0 (FALSE) otherwise`,
    Bool,
    Int32
  ),
  "GENERAL ENG RPM:index": define(
    `The RPM for an indexed engine`,
    RPM,
    SFloat64
  ),
  "GENERAL ENG STARTER:index": define(
    `The indexed engine starter on/off state`,
    Bool,
    Int32
  ),
  "GENERAL ENG STARTER ACTIVE:index": define(
    `True if the indexed engine starter is active`,
    Bool,
    Int32
  ),
  "GENERAL ENG THROTTLE LEVER POSITION:index": define(
    `Percent of max throttle position for the indexed engine`,
    Percent,
    SFloat64
  ),
  "GENERAL ENG THROTTLE MANAGED MODE:index": define(
    `Current mode of the managed throttle for the indexed engine`,
    Number,
    Int32
  ),
  "MASTER IGNITION SWITCH": define(
    `Aircraft master ignition switch (grounds all engines magnetos)`,
    Bool,
    Int32
  ),
  "MAX EGT": define(
    `The maximum EGT, as set using the egt_peak_temperature parameter in the engine.cfg file`,
    Rankine,
    Float64
  ),
  "MAX OIL TEMPERATURE": define(
    `The maximum oil temperature, as set using the parameter oil_temp_heating_constant in the engine.cfg file`,
    Rankine,
    Float64
  ),
  "MAX RATED ENGINE RPM": define(
    `Maximum rated rpm for the indexed engine`,
    RPM,
    Float64
  ),
  "NUMBER OF ENGINES": define(
    `Number of engines (minimum 0, maximum 4)`,
    Number,
    Int32
  ),
  "PANEL AUTO FEATHER SWITCH:index": define(
    `Auto-feather arming switch for the indexed engine`,
    Bool,
    Int32
  ),
  "PROP AUTO CRUISE ACTIVE": define(
    `True if prop auto cruise active`,
    Bool,
    Int32
  ),
  "PROP AUTO FEATHER ARMED:index": define(
    `Auto-feather armed state for the indexed engine`,
    Bool,
    Int32
  ),
  "PROP BETA:index": define(
    `The "prop beta" is the pitch of the blades of the propeller, and this can be used to retrieve the current pitch setting, per indexed engine`,
    Radians,
    SFloat64
  ),
  "PROP BETA FORCED ACTIVE": define(
    `This can be used to enable the propeller forced beta mode (1, TRUE) or disable it (0, FALSE), when being written to. When being read from, it will return TRUE (1) if the forced beta mode is enabled or FALSE (0) if it isn't. When enabled, the PROP BETA FORCED POSITION value will be used to drive the prop beta, while the internal coded simulation logic is used when this is disabled`,
    Bool,
    SInt32
  ),
  "PROP BETA FORCED POSITION": define(
    `Get or set the beta at which the prop is forced. Only valid when PROP BETA FORCED ACTIVE is TRUE (1)`,
    Radians,
    Float64
  ),
  "PROP BETA MAX": define(
    `The "prop beta" is the pitch of the blades of the propeller. This retrieves the maximum possible pitch value for all engines`,
    Radians,
    Float64
  ),
  "PROP BETA MIN": define(
    `The "prop beta" is the pitch of the blades of the propeller. This retrieves the minimum possible pitch value for all engines`,
    Radians,
    Float64
  ),
  "PROP BETA MIN REVERSE": define(
    `The "prop beta" is the pitch of the blades of the propeller. This retrieves the minimum possible pitch value when the propeller is in reverse for all engines`,
    Radians,
    Float64
  ),
  "PROP DEICE SWITCH:index": define(
    `True if prop deice switch on for the indexed engine`,
    Bool,
    Int32
  ),
  "PROP FEATHERED:index": define(
    `This will return the feathered state of the propeller for an indexed engine. The state is either feathered (true) or not (false)`,
    Bool,
    Int32
  ),
  "PROP FEATHERING INHIBIT:index": define(
    `Feathering inhibit flag for the indexed engine`,
    Bool,
    Int32
  ),
  "PROP FEATHER SWITCH:index": define(
    `Prop feather switch for the indexed engine`,
    Bool,
    Int32
  ),
  "PROP MAX RPM PERCENT:index": define(
    `Percent of max rated rpm for the indexed engine`,
    Percent,
    SFloat64
  ),
  "PROP ROTATION ANGLE": define(`Prop rotation angle`, Radians, Float64),
  "PROP RPM:index": define(
    `Propeller rpm for the indexed engine`,
    RPM,
    SFloat64
  ),
  "PROP SYNC ACTIVE:index": define(
    `True if prop sync is active the indexed engine`,
    Bool,
    Int32
  ),
  "PROP SYNC DELTA LEVER:index": define(
    `Corrected prop correction input on slaved engine for the indexed engine`,
    Position,
    Int32
  ),
  "PROP THRUST:index": define(
    `Propeller thrust for the indexed engine`,
    Pounds,
    Float64
  ),
  "RECIP CARBURETOR TEMPERATURE:index": define(
    `Carburetor temperature the indexed engine`,
    Celsius,
    SFloat64
  ),
  "RECIP ENG ALTERNATE AIR POSITION:index": define(
    `Alternate air control the indexed engine`,
    Position,
    SInt32
  ),
  "RECIP ENG ANTIDETONATION TANK MAX QUANTITY:index": define(
    `The maximum quantity of water/methanol mixture in the ADI tank for the indexed engine. This value is set as part of the [ANTIDETONATION_SYSTEM.N] section in the aircraft configuration files`,
    Gallons,
    Float64
  ),
  "RECIP ENG ANTIDETONATION TANK QUANTITY:index": define(
    `The quantity of water/methanol mixture currently in the ADI tank for the indexed engine`,
    Gallons,
    SFloat64
  ),
  "RECIP ENG ANTIDETONATION TANK VALVE:index": define(
    `The status of the ADI tank valve for the indexed engine`,
    Bool,
    SInt32
  ),
  "RECIP ENG ANTIDETONATION FLOW RATE:index": define(
    `This gives the actual flow rate of the Anti Detonation system for the indexed engine`,
    GallonsPerHour,
    Float64
  ),
  "RECIP ENG BRAKE POWER:index": define(
    `Brake power produced by the indexed engine`,
    Pounds,
    SFloat64
  ),
  "RECIP ENG COOLANT RESERVOIR PERCENT:index": define(
    `Percent coolant available for the indexed engine`,
    Percent,
    SFloat64
  ),
  "RECIP ENG COWL FLAP POSITION:index": define(
    `Percent cowl flap opened for the indexed engine`,
    Percent,
    SFloat64
  ),
  "RECIP ENG CYLINDER HEAD TEMPERATURE:index": define(
    `Engine cylinder head temperature for the indexed engine`,
    Celsius,
    SFloat64
  ),
  "RECIP ENG CYLINDER HEALTH:index": define(
    `Index high 16 bits is engine number, low16 cylinder number, both indexed from 1`,
    PercentOver100,
    Float64
  ),
  "RECIP ENG DETONATING:index": define(
    `Set to 1 (TRUE) if the indexed engine is detonating`,
    Bool,
    Int32
  ),
  "RECIP ENG EMERGENCY BOOST ACTIVE:index": define(
    `Whether emergency boost is active (1, TRUE) or not (0, FALSE) for the indexed engine`,
    Bool,
    SInt32
  ),
  "RECIP ENG EMERGENCY BOOST ELAPSED TIME:index": define(
    ` The elapsed time that emergency boost has been active on the indexed engine. The timer will start when boost is first activated`,
    Hours,
    SFloat64
  ),
  "RECIP ENG ENGINE MASTER SWITCH:index": define(
    `Whether or not the Engine Master switch is active on an indexed engine`,
    Bool,
    Int32
  ),
  "RECIP ENG FUEL AVAILABLE:index": define(
    `True if fuel is available for the indexed engine`,
    Bool,
    SInt32
  ),
  "RECIP ENG FUEL FLOW:index": define(
    `The indexed engine fuel flow`,
    PoundsPerHour,
    SFloat64
  ),
  "RECIP ENG FUEL NUMBER TANKS USED:index": define(
    `Number of tanks currently being used by the indexed engine`,
    Number,
    Int32
  ),
  "RECIP ENG FUEL TANKS USED:index": define(
    `Fuel tanks used by the indexed engine, one or more bit flags`,
    Mask,
    SInt32
  ),
  "RECIP ENG FUEL TANK SELECTOR:index": define(
    `Fuel tank selected for the indexed engine. See Fuel Tank Selection for a list of values`,
    Enum,
    Int32
  ),
  "RECIP ENG GLOW PLUG ACTIVE:index": define(
    `Whether or not the Glow Plug is active on the indexed engine`,
    Bool,
    Int32
  ),
  "RECIP ENG LEFT MAGNETO:index": define(
    ` Left magneto state for the indexed engine`,
    Bool,
    SInt32
  ),
  "RECIP ENG MANIFOLD PRESSURE:index": define(
    `The indexed engine manifold pressure`,
    Pounds,
    SFloat64
  ),
  "RECIP ENG NITROUS TANK MAX QUANTITY:index": define(
    `The maximum quantity of nitrous permitted per indexed engine`,
    Gallons,
    Float64
  ),
  "RECIP ENG NITROUS TANK QUANTITY:index": define(
    `The quantity of nitrous per indexed engine`,
    Gallons,
    SFloat64
  ),
  "RECIP ENG NITROUS TANK VALVE": define(
    `The statte of the nitrous tank valve for the indexed engine. Either 1 (TRUE) for open or 0 (FALSE) for closed`,
    Bool,
    SInt32
  ),
  "RECIP ENG NUM CYLINDERS:index": define(
    `The number of cylinders for the indexed engine`,
    Number,
    Int32
  ),
  "RECIP ENG NUM CYLINDERS FAILED:index": define(
    `The number of cylinders that have failed in the indexed engine`,
    Number,
    Int32
  ),
  "RECIP ENG PRIMER:index": define(
    `The indexed engine primer state`,
    Bool,
    SInt32
  ),
  "RECIP ENG RADIATOR TEMPERATURE:index": define(
    `The indexed engine radiator temperature`,
    Celsius,
    SFloat64
  ),
  "RECIP ENG RIGHT MAGNETO:index": define(
    ` The indexed engine right magneto state`,
    Bool,
    SInt32
  ),
  "RECIP ENG STARTER TORQUE:index": define(
    `Torque produced by the indexed engine`,
    FootPound,
    SFloat64
  ),
  "RECIP ENG SUPERCHARGER ACTIVE GEAR:index": define(
    `Returns which of the supercharger gears is engaged for the indexed engine`,
    Number,
    Int32
  ),
  "RECIP ENG TURBINE INLET TEMPERATURE:index": define(
    `The indexed engine turbine inlet temperature`,
    Celsius,
    SFloat64
  ),
  "RECIP ENG TURBOCHARGER FAILED:index": define(
    `The indexed engine turbo failed state`,
    Bool,
    SInt32
  ),
  "RECIP ENG WASTEGATE POSITION:index": define(
    `When the engine.cfg parameter turbocharged is TRUE, this SimVar will return the percentage that the turbo waste gate is closed for the indexed engine. If the turbocharged variable is FALSE and the manifold_pressure_regulator parameter is TRUE, then this will return the percentage that the manifold pressure regulator is closed for the indexed engine`,
    Percent,
    SFloat64
  ),
  "RECIP MAX CHT": define(
    `This will return the cylinder head temperature value set by the cht_heating_constant parameter in the engine.cfg file`,
    Rankine,
    Float64
  ),
  "RECIP MIXTURE RATIO:index": define(
    `Fuel / Air mixture ratio for the indexed engine`,
    Ratio,
    SFloat64
  ),
  "SHUTOFF VALVE PULLED": define(
    `This checks if the shutoff valve to the engine has been pulled (true) or not (false). When pulled piston engines will be blocked from getting any fuel`,
    Bool,
    Int32
  ),
  "THROTTLE LOWER LIMIT": define(
    `Percent throttle defining lower limit (negative for reverse thrust equipped airplanes)`,
    Percent,
    Float64
  ),
  "TURB ENG AFTERBURNER:index": define(
    `Afterburner state for the indexed engine`,
    Bool,
    Int32
  ),
  "TURB ENG AFTERBURNER PCT ACTIVE:index": define(
    `The percentage that the afterburner is running at`,
    PercentOver100,
    Float64
  ),
  "TURB ENG AFTERBURNER STAGE ACTIVE:index": define(
    `The stage of the afterburner, or 0 if the afterburner is not active`,
    Number,
    Int32
  ),
  "TURB ENG BLEED AIR:index": define(
    `Bleed air pressure for the indexed engine`,
    Pounds,
    Float64
  ),
  "TURB ENG COMMANDED N1:index": define(
    ` Effective commanded N1 for the indexed turbine engine`,
    Percent,
    SFloat64
  ),
  "TURB ENG CONDITION LEVER POSITION:index": define(
    ` See documentation`,
    Enum,
    SInt32
  ),
  "TURB ENG CORRECTED FF:index": define(
    `Corrected fuel flow for the indexed engine`,
    PoundsPerHour,
    SFloat64
  ),
  "TURB ENG CORRECTED N1:index": define(
    `The indexed turbine engine corrected N1`,
    Percent,
    SFloat64
  ),
  "TURB ENG CORRECTED N2:index": define(
    `The indexed turbine engine corrected N2`,
    Percent,
    SFloat64
  ),
  "TURB ENG FREE TURBINE TORQUE:index": define(
    `The amount of free torque for the indexed turbine engine`,
    FootPound,
    SFloat64
  ),
  "TURB ENG FUEL AVAILABLE:index": define(
    `True if fuel is available for the indexed engine`,
    Bool,
    Int32
  ),
  "TURB ENG FUEL EFFICIENCY LOSS:index": define(
    `This is used to control the fuel efficiency loss of the indexed engine`,
    Percent,
    SFloat64
  ),
  "TURB ENG FUEL FLOW PPH:index": define(
    `The indexed engine fuel flow rate`,
    PoundsPerHour,
    Float64
  ),
  "TURB ENG HIGH IDLE:index": define(
    `Retrieves the high idle N1 value to be reached by the the indexed turboprop engine with throttle in idle position and condition lever in high idle position (condition lever position can be checked or set using the TURB_ENG_CONDITION_LEVER_POSITION SimVar)`,
    Percent,
    Float64
  ),
  "TURB ENG IGNITION SWITCH:index": define(
    `True if the the indexed turbine engine ignition switch is on`,
    Bool,
    Int32
  ),
  "TURB ENG IGNITION SWITCH EX1:index": define(
    `Position of the the indexed turbine engine Ignition Switch. Similar to TURB_ENG_IGNITION_SWITCH but differentiates between ON and AUTO`,
    Enum,
    Int32
  ),
  "TURB ENG IS IGNITING:index": define(
    `Whether or not the ignition system is currently running for the indexed engine. Depends on TURB_ENG_IGNITION_SWITCH_EX1 Enum, the cfg var ignition_auto_type and current state of the plane`,
    Bool,
    Int32
  ),
  "TURB ENG ITT:index": define(
    `Retrieve or set the ITT for the indexed engine`,
    Rankine,
    SFloat64
  ),
  "TURB ENG ITT COOLING EFFICIENCY LOSS:index": define(
    `This is used to control the ITT cooling efficiency loss of the indexed engine`,
    Percent,
    SFloat64
  ),
  "TURB ENG JET THRUST:index": define(
    `The indexed engine jet thrust`,
    Pounds,
    Float64
  ),
  "TURB ENG LOW IDLE:index": define(
    `Retrieves the low idle N1 value to be reached by the the indexed turboprop engine with throttle in idle position and condition lever in low idle position (condition lever position can be checked or set using the TURB_ENG_CONDITION_LEVER_POSITION SimVar)`,
    Percent,
    Float64
  ),
  "TURB ENG MASTER STARTER SWITCH": define(
    `True if the turbine engine master starter switch is on, false otherwise`,
    Bool,
    Int32
  ),
  "TURB ENG MAX TORQUE PERCENT:index": define(
    `Percent of max rated torque for the indexed engine`,
    Percent,
    SFloat64
  ),
  "TURB ENG N1:index": define(
    `The indexed turbine engine N1 value`,
    Percent,
    SFloat64
  ),
  "TURB ENG N1 LOSS:index": define(
    `This is used to control the N1 loss of the indexed engine`,
    Percent,
    SFloat64
  ),
  "TURB ENG N2:index": define(
    ` The indexed turbine engine N2 value`,
    Percent,
    SFloat64
  ),
  "TURB ENG NUM TANKS USED:index": define(
    `Number of tanks currently being used by the indexed engine`,
    Number,
    Int32
  ),
  "TURB ENG PRESSURE RATIO:index": define(
    `The indexed engine pressure ratio`,
    Ratio,
    SFloat64
  ),
  "TURB ENG PRIMARY NOZZLE PERCENT:index": define(
    `Percent thrust of primary nozzle for the indexed engine`,
    PercentOver100,
    Float64
  ),
  "TURB ENG REVERSE NOZZLE PERCENT:index": define(
    `Percent thrust reverser nozzles deployed for the indexed engine`,
    Percent,
    Float64
  ),
  "TURB ENG TANKS USED:index": define(
    `Fuel tanks used by the indexed engine`,
    Mask,
    Int32
  ),
  "TURB ENG TANK SELECTOR:index": define(
    `Fuel tank selected for the indexed engine. See Fuel Tank Selection for a list of values`,
    Enum,
    Int32
  ),
  "TURB ENG THROTTLE COMMANDED N1:index": define(
    ` The indexed turbine engine commanded N1 for current throttle position`,
    Percent,
    SFloat64
  ),
  "TURB ENG THRUST EFFICIENCY LOSS:index": define(
    `This can be used to control the thrust efficiency loss of the indexed engine, where a value of 0 is 100% of available thrust, and 100 is 0% available thrust`,
    Percent,
    SFloat64
  ),
  "TURB ENG VIBRATION:index": define(
    `The indexed turbine engine vibration value`,
    Number,
    Int32
  ),
  "TURB MAX ITT": define(
    `Retrieve the itt_peak_temperature as set in the engine.cfg file`,
    Rankine,
    Float64
  ),
};
