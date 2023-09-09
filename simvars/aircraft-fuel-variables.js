// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Fuel_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Knots,
  Feet,
  Number,
  Degrees,
  Enum,
  Radians,
  Percent,
  PercentOver100,
  Pounds,
  RadiansPerSecond,
  GForce,
  PerRadian,
  Mach,
  SquareFeet,
  Slugs,
  Gallons,
  GallonsPerHour,
  KiloPascal,
} from "./simvar-utils.js";

const GENERAL = {
  "FUEL CROSS FEED:index": define(
    `Cross feed valve setting. This will return the current setting for the fuel crossfeed for the indexed engine, based on the current status of the simulation and the Cross Feed key events.`,
    Enum,
    Int32
  ),
  "FUEL DUMP ACTIVE": define(
    `If 1 (TRUE) then the aircraft can dump fuel.`,
    Bool,
    Int32
  ),
  "FUEL DUMP SWITCH": define(
    `f set to 1 (TRUE) then the aircraft will dump fuel at the rate set by fuel_dump_rate parameter in the flight_model.cfg file.`,
    Bool,
    Int32
  ),
  "FUEL LEFT CAPACITY": define(
    `Maximum capacity in volume of all the tanks on the left side of the aircraft.`,
    Gallons,
    Float64
  ),
  "FUEL LEFT QUANTITY": define(
    `Current quantity in volume of all the tanks on the left side of the aircraft.`,
    Gallons,
    Float64
  ),
  "FUEL PUMP": define(
    `Currently not used within the simulation.`,
    Number,
    Int32
  ),
  "FUEL RIGHT CAPACITY": define(
    `Maximum capacity in volume of all the tanks on the right side of the aircraft.`,
    Gallons,
    Float64
  ),
  "FUEL RIGHT QUANTITY": define(
    `Current quantity in volume of all the tanks on the right side of the aircraft.`,
    Gallons,
    Float64
  ),
  "FUEL SELECTED QUANTITY:index": define(
    `Quantity of fuel in the tank referenced by the indexed selector. When using the legacy fuel system, this SimVar will return the quantity of fuel in the tank pointed to by the selector you chose with the index. If passing an index higher than the number of selectors - or when using the modern fuel system - it will return the total fuel quantity available.`,
    Gallons,
    Float64
  ),
  "FUEL SELECTED QUANTITY PERCENT:index": define(
    `Percent or capacity for the tank referenced by the indexed selector. When using the legacy fuel system, this SimVar will return the percentage of fuel in the tank pointed to by the selector you chose with the index. If passing an index higher than the number of selectors available - or when using the modern fuel system - it will return the percentage of total fuel quantity available.`,
    PercentOver100,
    Float64
  ),
  "FUEL SELECTED TRANSFER MODE": define(
    `The method of transfer for the fuel. See documentation for available transfer options`,
    Enum,
    Int32
  ),
  "FUEL TOTAL CAPACITY": define(
    `Total fuel capacity of the aircraft for all tanks.`,
    Gallons,
    Float64
  ),
  "FUEL TOTAL QUANTITY": define(
    `Current total quantity of fuel in volume for all tanks of the aircraft.`,
    Gallons,
    Float64
  ),
  "FUEL TOTAL QUANTITY WEIGHT": define(
    `Current total fuel weight for all tanks of the aircraft`,
    Pounds,
    Float64
  ),
  "FUEL TRANSFER PUMP ON:index": define(
    `Returns 1 (TRUE) if the indexed pump is active.`,
    Bool,
    Int32
  ),
  "FUEL WEIGHT PER GALLON": define(
    `The weight of the fuel, per gallon.`,
    Pounds,
    Float64
  ),
  "NEW FUEL SYSTEM": define(
    `Will return 1 (TRUE) if the aircraft is using the modern [FUEL_SYSTEM] or 0 (FALSE) for the legacy [FUEL].`,
    Bool,
    Int32
  ),
  "NUM FUEL SELECTORS": define(
    `The number of fuel selectors on the aircraft.`,
    Number,
    Int32
  ),
  "UNLIMITED FUEL": define(
    `Will return 1 (TRUE) if the unlimited fuel flag has been enabled, or 0 (FALSE) otherwise.`,
    Bool,
    Int32
  ),
  "UNUSABLE FUEL TOTAL QUANTITY": define(
    `The total amount of fuel in all tanks of the aircraft which is not usable.`,
    Gallons,
    Float64
  ),
};

const FUEL_SYSTEM = {
  "FUELSYSTEM JUNCTION SETTING:index": define(
    `This will return the current Option for the indexed junction. The index is the number of the line N component as defined by the Junction.N parameter.`,
    Number,
    Int32
  ),
  "FUELSYSTEM LINE FUEL FLOW:index": define(
    `The fuel flowing through the indexed line in Gallons per Hour. The index is the number of the line N component as defined by the Line.N parameter.`,
    GallonsPerHour,
    Float64
  ),
  "FUELSYSTEM LINE FUEL LEVEL:index": define(
    `The level of fuel in the indexed line in Gallons. The index is the number of the line N component as defined by the Line.N parameter.`,
    Gallons,
    Float64
  ),
  "FUELSYSTEM LINE FUEL PRESSURE:index": define(
    `The pressure in the indexed fuel line, measured in KiloPascal. The index is the number of the line N component as defined by the Line.N parameter.`,
    KiloPascal,
    Float64
  ),
  "FUELSYSTEM PUMP ACTIVE:index": define(
    `	Whether or not the indexed pump is actually active. The index is the number of the pump N component as defined by the Pump.N parameter.`,
    Bool,
    Int32
  ),
  "FUELSYSTEM PUMP SWITCH:index": define(
    `Whether or not the indexed pump is enabled. The index is the number of the pump N component as defined by the Pump.N parameter.`,
    Bool,
    Int32
  ),
  "FUELSYSTEM TANK CAPACITY:index": define(
    `Total capacity of the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`,
    Gallons,
    Float64
  ),
  "FUELSYSTEM TANK LEVEL:index": define(
    `Quantity of fuel available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`,
    PercentOver100,
    SFloat64
  ),
  "FUELSYSTEM TANK QUANTITY:index": define(
    `Quantity of fuel currently available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`,
    Gallons,
    SFloat64
  ),
  "FUELSYSTEM TANK TOTAL QUANTITY:index": define(
    `Total quantity of fuel available in the indexed fuel tank, including any unusable fuel. The index is the number of the tank N component as defined by the Tank.N parameter.`,
    Gallons,
    Float64
  ),
  "FUELSYSTEM TANK WEIGHT:index": define(
    `Weight of fuel available in the indexed fuel tank. The index is the number of the tank N component as defined by the Tank.N parameter.`,
    Pounds,
    SFloat64
  ),
  "FUELSYSTEM TRIGGER STATUS:index": define(
    `Whether or not the indexed trigger is active. The index is the number of the trigger N component as defined by the Trigger.N parameter.`,
    Bool,
    Int32
  ),
  "FUELSYSTEM VALVE OPEN:index": define(
    `Whether or not the indexed valve is actually fully opened. The index is the number of the valve N component as defined by the Valve.N parameter.`,
    PercentOver100,
    Float64
  ),
  "FUELSYSTEM VALVE SWITCH:index": define(
    `Whether or not the indexed valve is set to be opened. The index is the number of the valve N component as defined by the Valve.N parameter.`,
    Bool,
    Int32
  ),
};

const FUEL_TANKS = {
  "FUEL TANK CENTER CAPACITY": define(
    `Maximum capacity in volume of center tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK CENTER2 CAPACITY": define(
    `Maximum capacity in volume of center tank 2.`,
    Gallons,
    Float64
  ),
  "FUEL TANK CENTER3 CAPACITY": define(
    `Maximum capacity in volume of center tank 3.`,
    Gallons,
    Float64
  ),
  "FUEL TANK CENTER LEVEL": define(
    `Percent of maximum capacity of center tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK CENTER2 LEVEL": define(
    `Percent of maximum capacity of center tank 2.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK CENTER3 LEVEL": define(
    `Percent of maximum capacity of center tank 3.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK CENTER QUANTITY": define(
    `Current quantity in volume of center tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK CENTER2 QUANTITY": define(
    `Current quantity in volume of center tank 2.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK CENTER3 QUANTITY": define(
    `Current quantity in volume of center tank 3.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK EXTERNAL1 CAPACITY": define(
    `Maximum capacity in volume of external tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK EXTERNAL2 CAPACITY": define(
    `Maximum capacity in volume of external tank 2.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK EXTERNAL1 LEVEL": define(
    `Percent of maximum capacity of texternal tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK EXTERNAL2 LEVEL": define(
    `Percent of maximum capacity of texternal tank 2.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK EXTERNAL1 QUANTITY": define(
    `Current quantity in volume of external tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK EXTERNAL2 QUANTITY": define(
    `Current quantity in volume of external tank 2.`,
    Gallons,
    Float64
  ),
  "FUEL TANK LEFT AUX CAPACITY": define(
    `Maximum capacity in volume of the left auxiliary tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK LEFT AUX LEVEL": define(
    `Percent of maximum capacity of the left auxiliary tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK LEFT AUX QUANTITY": define(
    `Current quantity in volume of the left auxiliary tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK LEFT MAIN CAPACITY": define(
    `Maximum capacity in volume of the left main tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK LEFT MAIN LEVEL": define(
    `Percent of maximum capacity of the left main tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK LEFT MAIN QUANTITY": define(
    `Current quantity in volume of the left main tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK LEFT TIP CAPACITY": define(
    `Maximum capacity in volume of the left tip tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK LEFT TIP LEVEL": define(
    `Percent of maximum capacity of the left tip tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK LEFT TIP QUANTITY": define(
    `Current quantity in volume of the left tip tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK RIGHT AUX CAPACITY": define(
    `Maximum capacity in volume of the right auxiliary tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK RIGHT AUX LEVEL": define(
    `Percent of maximum capacity of the right auxiliary tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK RIGHT AUX QUANTITY": define(
    `Current quantity in volume of the right auxiliary tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK RIGHT MAIN CAPACITY": define(
    `Maximum capacity in volume of the right main tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK RIGHT MAIN LEVEL": define(
    `Percent of maximum capacity of the right main tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK RIGHT MAIN QUANTITY": define(
    `Current quantity in volume of the right main tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK RIGHT TIP CAPACITY": define(
    `Maximum capacity in volume of the right tip tank.`,
    Gallons,
    Float64
  ),
  "FUEL TANK RIGHT TIP LEVEL": define(
    `Percent of maximum capacity of the right tip tank.`,
    PercentOver100,
    SFloat64
  ),
  "FUEL TANK RIGHT TIP QUANTITY": define(
    `Current quantity in volume of the right tip tank.`,
    Gallons,
    SFloat64
  ),
  "FUEL TANK SELECTOR:index": define(
    `Which tank the indexed selector is set to. The index is the selector to check (from 1 to 4), and the return value will be the Fuel Tank Selection index.`,
    Enum,
    Int32
  ),
};

export const AircraftFuelVariables = {
  ...GENERAL,
  ...FUEL_SYSTEM,
  ...FUEL_TANKS,
};
