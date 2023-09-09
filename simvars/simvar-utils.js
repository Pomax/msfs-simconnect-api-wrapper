import { SimConnectDataType } from "node-simconnect";

export const SETTABLE = true;

export function dataType(typeName, settable = false) {
  return {
    data_type: SimConnectDataType[typeName.toUpperCase()],
    read: (data) => data[`read${typeName}`](),
    write: settable
      ? function (buffer, value) {
          if (value === true) value = 1;
          if (value === false) value = 0;
          buffer[`write${typeName}`](value);
          return buffer;
        }
      : function () {
          throw new Error(`SimVar "${this.name}" is not settable`);
        },
    settable,
  };
}

// Convenience function
export function define(desc, unit, type) {
  return { desc, ...unit, ...type };
}

// Specific data types
export const Int32 = dataType(`Int32`);
export const SInt32 = dataType(`Int32`, SETTABLE);

export const Float64 = dataType(`Float64`);
export const SFloat64 = dataType(`Float64`, SETTABLE);

export const String32 = dataType(`String32`);
export const SString32 = dataType(`String32`, SETTABLE);
export const String128 = dataType(`String128`);
export const String256 = dataType(`String256`);
export const StringV = dataType(`StringV`);

// Specific unit types
export const Bool = { units: `bool` };
export const Knots = { units: `knots` };
export const Feet = { units: `feet` };
export const Number = { units: `number` };
export const Degrees = { units: `degrees` };
export const Enum = { units: `enum` };
export const Radians = { units: `radians` };
export const Percent = { units: `percent` };
export const PercentOver100 = { units: `percent Over 100` };
export const NullUnit = { units: null };
export const Pounds = { units: `pounds` };
export const Position = { units: `position` };
export const RPM = { units: `RPM` };
export const Centimeters = { units: `centimeters` };
export const Amperes = { units: `amperes` };
export const Volts = { units: `volts` };
export const Mask = { units: `mask` };
export const Rankine = { units: `rankine` };
export const PoundsPerHour = { units: `pounds per hour` };
export const GallonsPerHour = { units: `gallons per hour` };
export const Inches = { units: `inches` };
export const Ratio = { units: `ratio` };
export const FootPound = { units: `foot pound` };
export const FootPounds = { units: `foot pounds` };
export const Seconds = { units: `seconds` };
export const Minutes = { units: `minutes` };
export const Hours = { units: `hours` };
export const Celsius = { units: `celsius` };
export const Gallons = { units: `gallons` };
export const RadiansPerSecond = { units: `radians per second` };
export const GForce = { units: `gforce` };
export const PerRadian = { units: `per radian` };
export const Mach = { units: `mach` };
export const SquareFeet = { units: `square feet` };
export const Slugs = { units: `slugs` };
export const FeetPerSecond = { units: `feet per second` };
export const RadiansPerSecondSquared = { units: `radians per second squared` };
export const ADF_BCD32 = { units: `frequency ADF BCD32` };
export const Meters = { units: `meters` };
export const MHz = { units: `MHz` };
export const Flags = { units: `Flags` };
export const Hz = { units: `Hz` };
export const NM = { units: `nautical miles` };
export const BCD16 = { units: `Frequency BCD16` };
export const MetersPerSecond = { units: `Meters per second` };
export const InchesOfMecury = { units: `Inches of Mercury` };
export const Millibars = { units: `Millibars` };
export const Position128 = { units: `position 128` };
export const KPH = { units: `Kilometers per hour` };
export const SlugsPerCubicFeet = { units: `Slugs per cubic feet` };
export const MillimetersOfWater = { units: `millimeters of water` };
export const KiloPascal = { units: `kilopascal` };
