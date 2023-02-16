// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Engine_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

export const AircraftEngineVariables = {
  "BLEED AIR ENGINE:index": {
    desc: `Returns whether or not the indexed engine attempts to provide bleed air`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "BLEED AIR SOURCE CONTROL:index": {
    desc: `The bleed air system source controller for an indexed engine`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "ENGINE CONTROL SELECT": {
    desc: `Selected engines (combination of bit flags)`,
    units: `mask`,
    ...dataType(`Int32`, SETTABLE),
  },
  "ENGINE PRIMER": {
    desc: `The engine primer position`,
    units: `position`,
    ...dataType(`Int32`, SETTABLE),
  },
  "ENGINE TYPE": {
    desc: `Engine type`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "ENG ANTI ICE:index": {
    desc: `Anti-ice switch for the indexed engine, true if enabled false otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ENG COMBUSTION:index": {
    desc: `True if the indexed engine is running, false otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ENG CYLINDER HEAD TEMPERATURE:index": {
    desc: `The indexed engine cylinder head temperature`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
  "ENG EXHAUST GAS TEMPERATURE:index": {
    desc: `Exhaust gas temperature for the indexed engine`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
  "ENG EXHAUST GAS TEMPERATURE GES:index": {
    desc: `Governed engine setting exhaust gas temperature for the indexed engine`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ENG FAILED:index": {
    desc: `Failure flag for the indexed engine that has failed`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "ENG FUEL FLOW BUG POSITION:index": {
    desc: `Fuel flow reference in pounds per hour for the indexed engine`,
    units: `pounds per hour`,
    ...dataType(`Float64`),
  },
  "ENG FUEL FLOW GPH:index": {
    desc: `Engine fuel flow in gallons per hour for the indexed engine`,
    units: `gallons per hour`,
    ...dataType(`Float64`),
  },
  "ENG FUEL FLOW PPH:index": {
    desc: `The indexed engine fuel flow in pounds per hour`,
    units: `pounds per hour`,
    ...dataType(`Float64`),
  },
  "ENG HYDRAULIC PRESSURE:index": {
    desc: `The indexed engine hydraulic pressure`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "ENG HYDRAULIC QUANTITY:index": {
    desc: `The indexed enginehydraulic fluid quantity, as a percentage of total capacity`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ENG MANIFOLD PRESSURE:index": {
    desc: `The indexed engine manifold pressure`,
    units: `inches`,
    ...dataType(`Float64`),
  },
  "ENG MAX RPM": {
    desc: `The indexed engine Maximum rpm`,
    units: `RPM`,
    ...dataType(`Float64`),
  },
  "ENG N1 RPM:index": {
    desc: `The indexed engine N1 rpm`,
    units: `RPM`,
    ...dataType(`Float64`),
  },
  "ENG N2 RPM:index": {
    desc: `The indexed engine N2 rpm`,
    units: `RPM`,
    ...dataType(`Float64`),
  },
  "ENG OIL PRESSURE:index": {
    desc: `The indexed engine oil pressure`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "ENG OIL QUANTITY:index": {
    desc: `The indexed engine oil quantity as a percentage of full capacity`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "ENG OIL TEMPERATURE:index": {
    desc: `The indexed engine oil temperature`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
  "ENG ON FIRE:index": {
    desc: `The indexed engine on fire state`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "ENG PRESSURE RATIO:index": {
    desc: `The indexed engine pressure ratio`,
    units: `ratio`,
    ...dataType(`Float64`),
  },
  "ENG RPM ANIMATION PERCENT:index": {
    desc: `The indexed engine percentage maximum rated rpm (used for visual animation)`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "ENG TORQUE:index": {
    desc: `The indexed engine torque`,
    units: `foot pounds`,
    ...dataType(`Float64`),
  },
  "ENG VIBRATION:index": {
    desc: `The indexed engine vibration`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "ESTIMATED FUEL FLOW:index": {
    desc: `Estimated fuel flow to the indexed engine at cruise speed`,
    units: `pounds per hour`,
    ...dataType(`Float64`),
  },
  "FULL THROTTLE THRUST TO WEIGHT RATIO": {
    desc: `Full throttle thrust to weight ratio`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG ANTI ICE POSITION:index": {
    desc: `The indexed engine anti-ice switch state`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG COMBUSTION:index": {
    desc: `Set the indexed engine combustion flag to TRUE or FALSE. Note that this will not only stop all combustion, but it will also set the engine RPM to 0, regardless of the actual state of the simulation`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GENERAL ENG COMBUSTION EX1:index": {
    desc: `This SimVar is similar to GENERAL ENG COMBUSTION, in that it can also be used to enable or disable engine combustion. However this SimVar will not interfere with the current state of ths simulation. For example, if the aircraft has a turbine engine with auto_ignition enabled or it's a propeller engine with magnetos, then in the subsequent simulation frames this SimVar may be set to 1 (TRUE) again as the engine restarts automatically`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GENERAL ENG COMBUSTION SOUND PERCENT:index": {
    desc: `Percent of maximum sound being created by the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG DAMAGE PERCENT:index": {
    desc: `Percent of total damage to the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG ELAPSED TIME:index": {
    desc: `Total elapsed time since the indexed engine was started`,
    units: `Hours`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG EXHAUST GAS TEMPERATURE:index": {
    desc: `The indexed engine exhaust gas temperature`,
    units: `rankine`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG FAILED:index": {
    desc: `The indexed engine fail flag`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG FIRE DETECTED:index": {
    desc: `Detects if a fire has been detected in an indexed engine or not. If 0 (FALSE) no fire has been detected and if 1 (TRUE) then it has`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG FUEL PRESSURE:index": {
    desc: `The indexed engine fuel pressure`,
    units: `pounds`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG FUEL PUMP ON:index": {
    desc: `Whether the indexed engine fuel pump on (1, TRUE) or off (0, FALSE)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG FUEL PUMP SWITCH:index": {
    desc: `Fuel pump switch state the indexed engine. If 0 (FALSE) the pump is off and if 1 (TRUE) then it is on`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG FUEL PUMP SWITCH EX1:index": {
    desc: `Equivalent to GENERAL ENG FUEL PUMP SWITCH but differentiates between ON and AUTO`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG FUEL USED SINCE START:index": {
    desc: `Fuel used since the indexed engine was last started`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG FUEL VALVE:index": {
    desc: `Fuel valve state for the indexed engine. If 0 (FALSE) then the valve is closed and if 1 (TRUE) then it is open`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG GENERATOR ACTIVE:index": {
    desc: `Settable alternator (generator) on/off switch for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GENERAL ENG GENERATOR SWITCH:index": {
    desc: `Alternator (generator) on/off switch state for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG HOBBS ELAPSED TIME:index": {
    desc: `This can be used to find the time since the indexed engine started running`,
    units: `seconds`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG MASTER ALTERNATOR": {
    desc: `The alternator switch for a specific engine. Requires an engine index (1:4) when used`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG MAX REACHED RPM:index": {
    desc: `Maximum attained rpm for the indexed engine`,
    units: `RPM`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG MIXTURE LEVER POSITION:index": {
    desc: `Percent of max mixture lever position for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG OIL LEAKED PERCENT:index": {
    desc: `Percent of max oil capacity leaked for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "GENERAL ENG OIL PRESSURE:index": {
    desc: `The indexed engine oil pressure`,
    units: `pounds`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG OIL TEMPERATURE:index": {
    desc: `The indexed engine oil temperature`,
    units: `rankine`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG PCT MAX RPM:index": {
    desc: `Percent of max rated rpm for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG PROPELLER LEVER POSITION:index": {
    desc: `Percent of max prop lever position for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG REVERSE THRUST ENGAGED": {
    desc: `This will return 1 (TRUE) if the reverse thruster is engaged, or 0 (FALSE) otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG RPM:index": {
    desc: `The RPM for an indexed engine`,
    units: `RPM`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG STARTER:index": {
    desc: `The indexed engine starter on/off state`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG STARTER ACTIVE:index": {
    desc: `True if the indexed engine starter is active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "GENERAL ENG THROTTLE LEVER POSITION:index": {
    desc: `Percent of max throttle position for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GENERAL ENG THROTTLE MANAGED MODE:index": {
    desc: `Current mode of the managed throttle for the indexed engine`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "MASTER IGNITION SWITCH": {
    desc: `Aircraft master ignition switch (grounds all engines magnetos)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "MAX EGT": {
    desc: `The maximum EGT, as set using the egt_peak_temperature parameter in the engine.cfg file`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
  "MAX OIL TEMPERATURE": {
    desc: `The maximum oil temperature, as set using the parameter oil_temp_heating_constant in the engine.cfg file`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
  "MAX RATED ENGINE RPM": {
    desc: `Maximum rated rpm for the indexed engine`,
    units: `RPM`,
    ...dataType(`Float64`),
  },
  "NUMBER OF ENGINES": {
    desc: `Number of engines (minimum 0, maximum 4)`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "PANEL AUTO FEATHER SWITCH:index": {
    desc: `Auto-feather arming switch for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP AUTO CRUISE ACTIVE": {
    desc: `True if prop auto cruise active`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP AUTO FEATHER ARMED:index": {
    desc: `Auto-feather armed state for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP BETA:index": {
    desc: `The "prop beta" is the pitch of the blades of the propeller, and this can be used to retrieve the current pitch setting, per indexed engine`,
    units: `radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PROP BETA FORCED ACTIVE": {
    desc: `This can be used to enable the propeller forced beta mode (1, TRUE) or disable it (0, FALSE), when being written to. When being read from, it will return TRUE (1) if the forced beta mode is enabled or FALSE (0) if it isn't. When enabled, the PROP BETA FORCED POSITION value will be used to drive the prop beta, while the internal coded simulation logic is used when this is disabled`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PROP BETA FORCED POSITION": {
    desc: `Get or set the beta at which the prop is forced. Only valid when PROP BETA FORCED ACTIVE is TRUE (1)`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PROP BETA MAX": {
    desc: `The "prop beta" is the pitch of the blades of the propeller. This retrieves the maximum possible pitch value for all engines`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PROP BETA MIN": {
    desc: `The "prop beta" is the pitch of the blades of the propeller. This retrieves the minimum possible pitch value for all engines`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PROP BETA MIN REVERSE": {
    desc: `The "prop beta" is the pitch of the blades of the propeller. This retrieves the minimum possible pitch value when the propeller is in reverse for all engines`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PROP DEICE SWITCH:index": {
    desc: `True if prop deice switch on for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP FEATHERED:index": {
    desc: `This will return the feathered state of the propeller for an indexed engine. The state is either feathered (true) or not (false)`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP FEATHERING INHIBIT:index": {
    desc: `Feathering inhibit flag for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP FEATHER SWITCH:index": {
    desc: `Prop feather switch for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP MAX RPM PERCENT:index": {
    desc: `Percent of max rated rpm for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PROP ROTATION ANGLE": {
    desc: `Prop rotation angle`,
    units: `radians`,
    ...dataType(`Float64`),
  },
  "PROP RPM:index": {
    desc: `Propeller rpm for the indexed engine`,
    units: `RPM`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PROP SYNC ACTIVE:index": {
    desc: `True if prop sync is active the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "PROP SYNC DELTA LEVER:index": {
    desc: `Corrected prop correction input on slaved engine for the indexed engine`,
    units: `position`,
    ...dataType(`Int32`),
  },
  "PROP THRUST:index": {
    desc: `Propeller thrust for the indexed engine`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "RECIP CARBURETOR TEMPERATURE:index": {
    desc: `Carburetor temperature the indexed engine`,
    units: `celsius`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG ALTERNATE AIR POSITION:index": {
    desc: `Alternate air control the indexed engine`,
    units: `position`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG ANTIDETONATION TANK MAX QUANTITY:index": {
    desc: `The maximum quantity of water/methanol mixture in the ADI tank for the indexed engine. This value is set as part of the [ANTIDETONATION_SYSTEM.N] section in the aircraft configuration files`,
    units: `gallons`,
    ...dataType(`Float64`),
  },
  "RECIP ENG ANTIDETONATION TANK QUANTITY:index": {
    desc: `The quantity of water/methanol mixture currently in the ADI tank for the indexed engine`,
    units: `gallons`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG ANTIDETONATION TANK VALVE:index": {
    desc: `The status of the ADI tank valve for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG ANTIDETONATION FLOW RATE:index": {
    desc: `This gives the actual flow rate of the Anti Detonation system for the indexed engine`,
    units: `gallons per hour`,
    ...dataType(`Float64`),
  },
  "RECIP ENG BRAKE POWER:index": {
    desc: `Brake power produced by the indexed engine`,
    units: `pounds`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG COOLANT RESERVOIR PERCENT:index": {
    desc: `Percent coolant available for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG COWL FLAP POSITION:index": {
    desc: `Percent cowl flap opened for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG CYLINDER HEAD TEMPERATURE:index": {
    desc: `Engine cylinder head temperature for the indexed engine`,
    units: `celsius`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG CYLINDER HEALTH:index": {
    desc: `Index high 16 bits is engine number, low16 cylinder number, both indexed from 1`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "RECIP ENG DETONATING:index": {
    desc: `Set to 1 (TRUE) if the indexed engine is detonating`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "RECIP ENG EMERGENCY BOOST ACTIVE:index": {
    desc: `Whether emergency boost is active (1, TRUE) or not (0, FALSE) for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG EMERGENCY BOOST ELAPSED TIME:index": {
    desc: ` The elapsed time that emergency boost has been active on the indexed engine. The timer will start when boost is first activated`,
    units: `hours`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG ENGINE MASTER SWITCH:index": {
    desc: `Whether or not the Engine Master switch is active on an indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "RECIP ENG FUEL AVAILABLE:index": {
    desc: `True if fuel is available for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG FUEL FLOW:index": {
    desc: `The indexed engine fuel flow`,
    units: `pounds per hour`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG FUEL NUMBER TANKS USED:index": {
    desc: `Number of tanks currently being used by the indexed engine`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "RECIP ENG FUEL TANKS USED:index": {
    desc: `Fuel tanks used by the indexed engine, one or more bit flags`,
    units: `mask`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG FUEL TANK SELECTOR:index": {
    desc: `Fuel tank selected for the indexed engine. See Fuel Tank Selection for a list of values`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "RECIP ENG GLOW PLUG ACTIVE:index": {
    desc: `Whether or not the Glow Plug is active on the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "RECIP ENG LEFT MAGNETO:index": {
    desc: ` Left magneto state for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG MANIFOLD PRESSURE:index": {
    desc: `The indexed engine manifold pressure`,
    units: `pounds`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG NITROUS TANK MAX QUANTITY:index": {
    desc: `The maximum quantity of nitrous permitted per indexed engine`,
    units: `gallons`,
    ...dataType(`Float64`),
  },
  "RECIP ENG NITROUS TANK QUANTITY:index": {
    desc: `The quantity of nitrous per indexed engine`,
    units: `gallons`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG NITROUS TANK VALVE": {
    desc: `The statte of the nitrous tank valve for the indexed engine. Either 1 (TRUE) for open or 0 (FALSE) for closed`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG NUM CYLINDERS:index": {
    desc: `The number of cylinders for the indexed engine`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "RECIP ENG NUM CYLINDERS FAILED:index": {
    desc: `The number of cylinders that have failed in the indexed engine`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "RECIP ENG PRIMER:index": {
    desc: `The indexed engine primer state`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG RADIATOR TEMPERATURE:index": {
    desc: `The indexed engine radiator temperature`,
    units: `celsius`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG RIGHT MAGNETO:index": {
    desc: ` The indexed engine right magneto state`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG STARTER TORQUE:index": {
    desc: `Torque produced by the indexed engine`,
    units: `Foot pound`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG SUPERCHARGER ACTIVE GEAR:index": {
    desc: `Returns which of the supercharger gears is engaged for the indexed engine`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "RECIP ENG TURBINE INLET TEMPERATURE:index": {
    desc: `The indexed engine turbine inlet temperature`,
    units: `celsius`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP ENG TURBOCHARGER FAILED:index": {
    desc: `The indexed engine turbo failed state`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "RECIP ENG WASTEGATE POSITION:index": {
    desc: `When the engine.cfg parameter turbocharged is TRUE, this SimVar will return the percentage that the turbo waste gate is closed for the indexed engine. If the turbocharged variable is FALSE and the manifold_pressure_regulator parameter is TRUE, then this will return the percentage that the manifold pressure regulator is closed for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RECIP MAX CHT": {
    desc: `This will return the cylinder head temperature value set by the cht_heating_constant parameter in the engine.cfg file`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
  "RECIP MIXTURE RATIO:index": {
    desc: `Fuel / Air mixture ratio for the indexed engine`,
    units: `ratio`,
    ...dataType(`Float64`, SETTABLE),
  },
  "SHUTOFF VALVE PULLED": {
    desc: `This checks if the shutoff valve to the engine has been pulled (true) or not (false). When pulled piston engines will be blocked from getting any fuel`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "THROTTLE LOWER LIMIT": {
    desc: `Percent throttle defining lower limit (negative for reverse thrust equipped airplanes)`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "TURB ENG AFTERBURNER:index": {
    desc: `Afterburner state for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TURB ENG AFTERBURNER PCT ACTIVE:index": {
    desc: `The percentage that the afterburner is running at`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "TURB ENG AFTERBURNER STAGE ACTIVE:index": {
    desc: `The stage of the afterburner, or 0 if the afterburner is not active`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TURB ENG BLEED AIR:index": {
    desc: `Bleed air pressure for the indexed engine`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "TURB ENG COMMANDED N1:index": {
    desc: ` Effective commanded N1 for the indexed turbine engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG CONDITION LEVER POSITION:index": {
    desc: ` See documentation`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "TURB ENG CORRECTED FF:index": {
    desc: `Corrected fuel flow for the indexed engine`,
    units: `pounds per hour`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG CORRECTED N1:index": {
    desc: `The indexed turbine engine corrected N1`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG CORRECTED N2:index": {
    desc: `The indexed turbine engine corrected N2`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG FREE TURBINE TORQUE:index": {
    desc: `The amount of free torque for the indexed turbine engine`,
    units: `foot pound`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG FUEL AVAILABLE:index": {
    desc: `True if fuel is available for the indexed engine`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TURB ENG FUEL EFFICIENCY LOSS:index": {
    desc: `This is used to control the fuel efficiency loss of the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG FUEL FLOW PPH:index": {
    desc: `The indexed engine fuel flow rate`,
    units: `pounds per hour`,
    ...dataType(`Float64`),
  },
  "TURB ENG HIGH IDLE:index": {
    desc: `Retrieves the high idle N1 value to be reached by the the indexed turboprop engine with throttle in idle position and condition lever in high idle position (condition lever position can be checked or set using the TURB_ENG_CONDITION_LEVER_POSITION SimVar)`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "TURB ENG IGNITION SWITCH:index": {
    desc: `True if the the indexed turbine engine ignition switch is on`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TURB ENG IGNITION SWITCH EX1:index": {
    desc: `Position of the the indexed turbine engine Ignition Switch. Similar to TURB_ENG_IGNITION_SWITCH but differentiates between ON and AUTO`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "TURB ENG IS IGNITING:index": {
    desc: `Whether or not the ignition system is currently running for the indexed engine. Depends on TURB_ENG_IGNITION_SWITCH_EX1 Enum, the cfg var ignition_auto_type and current state of the plane`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TURB ENG ITT:index": {
    desc: `Retrieve or set the ITT for the indexed engine`,
    units: `rankine`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG ITT COOLING EFFICIENCY LOSS:index": {
    desc: `This is used to control the ITT cooling efficiency loss of the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG JET THRUST:index": {
    desc: `The indexed engine jet thrust`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "TURB ENG LOW IDLE:index": {
    desc: `Retrieves the low idle N1 value to be reached by the the indexed turboprop engine with throttle in idle position and condition lever in low idle position (condition lever position can be checked or set using the TURB_ENG_CONDITION_LEVER_POSITION SimVar)`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "TURB ENG MASTER STARTER SWITCH": {
    desc: `True if the turbine engine master starter switch is on, false otherwise`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "TURB ENG MAX TORQUE PERCENT:index": {
    desc: `Percent of max rated torque for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`), SETTABLE,
  },
  "TURB ENG N1:index": {
    desc: `The indexed turbine engine N1 value`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG N1 LOSS:index": {
    desc: `This is used to control the N1 loss of the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG N2:index": {
    desc: ` The indexed turbine engine N2 value`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG NUM TANKS USED:index": {
    desc: `Number of tanks currently being used by the indexed engine`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TURB ENG PRESSURE RATIO:index": {
    desc: `The indexed engine pressure ratio`,
    units: `ratio`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG PRIMARY NOZZLE PERCENT:index": {
    desc: `Percent thrust of primary nozzle for the indexed engine`,
    units: `percent Over 100`,
    ...dataType(`Float64`),
  },
  "TURB ENG REVERSE NOZZLE PERCENT:index": {
    desc: `Percent thrust reverser nozzles deployed for the indexed engine`,
    units: `percent`,
    ...dataType(`Float64`),
  },
  "TURB ENG TANKS USED:index": {
    desc: `Fuel tanks used by the indexed engine`,
    units: `mask`,
    ...dataType(`Int32`),
  },
  "TURB ENG TANK SELECTOR:index": {
    desc: `Fuel tank selected for the indexed engine. See Fuel Tank Selection for a list of values`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "TURB ENG THROTTLE COMMANDED N1:index": {
    desc: ` The indexed turbine engine commanded N1 for current throttle position`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG THRUST EFFICIENCY LOSS:index": {
    desc: `This can be used to control the thrust efficiency loss of the indexed engine, where a value of 0 is 100% of available thrust, and 100 is 0% available thrust`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TURB ENG VIBRATION:index": {
    desc: `The indexed turbine engine vibration value`,
    units: `number`,
    ...dataType(`Int32`),
  },
  "TURB MAX ITT": {
    desc: `Retrieve the itt_peak_temperature as set in the engine.cfg file`,
    units: `rankine`,
    ...dataType(`Float64`),
  },
};
