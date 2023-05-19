// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Miscellaneous_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import {
  Int32,
  SInt32,
  Float64,
  SFloat64,
  String32,
  String128,
} from "./simvar-utils.js";

// data units
import {
  Bool,
  Knots,
  Feet,
  Number,
  Degrees,
  Enum,
  NullUnit,
  Mask,
  Seconds,
  Celsius,
  FeetPerSecond,
  Meters,
  MetersPerSecond,
  InchesOfMecury,
  Millibars,
  SlugsPerCubicFeet,
  MillimetersOfWater,
} from "./simvar-utils.js";

const MISC = {
  "ANIMATION DELTA TIME": define(
    `Difference of time between the current frame and the last frame where this SimObject has been animated`,
    Seconds,
    Float64
  ),
  "ARTIFICIAL GROUND ELEVATION": define(
    `In case scenery is not loaded for AI planes, this variable can be used to set a default surface elevation.`,
    Feet,
    Float64
  ),
  CATEGORY: define(`Type of aircraft`, NullUnit, String128),
  "CRASH FLAG": define(
    `Flag value that indicates the cause of a crash.`,
    Enum,
    Int32
  ),
  "CRASH SEQUENCE": define(
    `The state of the crash event sequence.`,
    Enum,
    Int32
  ),
  "GROUND ALTITUDE": define(`Altitude of surface.`, Meters, Float64),
  "HAND ANIM STATE": define(
    `What frame of the hand is currently used.`,
    Enum,
    SInt32
  ),
  "IDLE ANIMATION ID": define(
    `The ID of the idle animation for the sim object.`,
    NullUnit,
    String32
  ),
  MAGVAR: define(`Magnetic variation.`, Degrees, Float64),
  "MISSION SCORE": define(``, Number, SInt32),
  REALISM: define(`General realism percent.`, Number, SInt32),
  "REALISM CRASH DETECTION": define(
    `True indicates crash detection is turned on.`,
    Bool,
    Int32
  ),
  "REALISM CRASH WITH OTHERS": define(
    `True indicates crashing with other aircraft is possible.`,
    Bool,
    Int32
  ),
  "SIM DISABLED": define(`Is sim disabled.`, Bool, SInt32),
  "SIM ON GROUND": define(`On ground flag.`, Bool, Int32),
  "SIM SHOULD SET ON GROUND": define(``, Bool, SInt32),
  "TRACK IR ENABLE": define(
    `Returns true if Track IR is enabled or not.`,
    Bool,
    SInt32
  ),
  "TOTAL WORLD VELOCITY": define(
    `Speed relative to the earths center.`,
    FeetPerSecond,
    SFloat64
  ),
  "USER INPUT ENABLED": define(`Is input allowed from the user.`, Bool, SInt32),
  "VISUAL MODEL RADIUS": define(`Model radius.`, Meters, Float64),
  "VELOCITY WORLD X": define(
    `Speed relative to earth, in East/West direction.`,
    FeetPerSecond,
    SFloat64
  ),
  "VELOCITY WORLD Y": define(
    `Speed relative to earth, in vertical direction.`,
    FeetPerSecond,
    SFloat64
  ),
  "VELOCITY WORLD Z": define(
    `Speed relative to earth, in North/South direction.`,
    FeetPerSecond,
    SFloat64
  ),
};

const AMBIENT_WEATHER = {
  "AMBIENT DENSITY": define(`Ambient density.`, SlugsPerCubicFeet, Float64),
  "AMBIENT PRECIP RATE": define(
    `The current precipitation rate.`,
    MillimetersOfWater,
    Float64
  ),
  "AMBIENT PRECIP STATE": define(
    `The current state of precipitation.`,
    Mask,
    Int32
  ),
  "AMBIENT PRESSURE": define(`Ambient pressure.`, InchesOfMecury, Float64),
  "AMBIENT TEMPERATURE": define(`Ambient temperature.`, Celsius, Float64),
  "AMBIENT VISIBILITY": define(
    `Ambient visibility (only measures ambient particle visibility - related to ambient density).`,
    Meters,
    Float64
  ),
  "AMBIENT WIND DIRECTION": define(
    `Wind direction, relative to true north.`,
    Degrees,
    Float64
  ),
  "AMBIENT WIND VELOCITY": define(`Wind velocity.`, Knots, Float64),
  "AMBIENT WIND X": define(
    `Wind component in East/West direction.`,
    MetersPerSecond,
    Float64
  ),
  "AMBIENT WIND Y": define(
    `Wind component in vertical direction.`,
    MetersPerSecond,
    Float64
  ),
  "AMBIENT WIND Z": define(
    `Wind component in North/South direction.`,
    MetersPerSecond,
    Float64
  ),
  "BAROMETER PRESSURE": define(`Barometric pressure.`, Millibars, Float64),
  "SEA LEVEL PRESSURE": define(
    `Barometric pressure at sea level.`,
    Millibars,
    Float64
  ),
  "STRUCT AMBIENT WIND": define(
    `X (latitude), Y (vertical) and Z (longitude) components of the wind.`,
    FeetPerSecond,
    Float64
  ),
};

export const MiscellaneousVariables = {
  ...MISC,
  ...AMBIENT_WEATHER,
};
