// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Miscellaneous_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const MISC = {
  "ANIMATION DELTA TIME": {
    desc: `Difference of time between the current frame and the last frame where this SimObject has been animated`,
    units: `Seconds`,
    ...dataType(`Float64`),
  },
  "ARTIFICIAL GROUND ELEVATION": {
    desc: `In case scenery is not loaded for AI planes, this variable can be used to set a default surface elevation.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  CATEGORY: {
    desc: `Type of aircraft`,
    units: null,
    ...dataType(`String128`),
  },
  "CRASH FLAG": {
    desc: `Flag value that indicates the cause of a crash.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "CRASH SEQUENCE": {
    desc: `The state of the crash event sequence.`,
    units: `enum`,
    ...dataType(`Int32`),
  },
  "GROUND ALTITUDE": {
    desc: `Altitude of surface.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "HAND ANIM STATE": {
    desc: `What frame of the hand is currently used.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "IDLE ANIMATION ID": {
    desc: `The ID of the idle animation for the sim object.`,
    units: null,
    ...dataType(`String32`),
  },
  "MAGVAR": {
    desc: `Magnetic variation.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "MISSION SCORE": {
    desc: ``,
    units: `Number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "REALISM": {
    desc: `General realism percent.`,
    units: `Number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "REALISM CRASH DETECTION": {
    desc: `True indicates crash detection is turned on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "REALISM CRASH WITH OTHERS": {
    desc: `True indicates crashing with other aircraft is possible.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "SIM DISABLED": {
    desc: `Is sim disabled.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "SIM ON GROUND": {
    desc: `On ground flag.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "SIM SHOULD SET ON GROUND": {
    desc: ``,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "TRACK IR ENABLE": {
    desc: `Returns true if Track IR is enabled or not.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "TOTAL WORLD VELOCITY": {
    desc: `Speed relative to the earths center.`,
    units: `Feet per second`,
    ...dataType(`Float64`, SETTABLE),
  },
  "USER INPUT ENABLED": {
    desc: `Is input allowed from the user.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "VISUAL MODEL RADIUS": {
    desc: `Model radius.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "VELOCITY WORLD X": {
    desc: `Speed relative to earth, in East/West direction.`,
    units: `Feet per second`,
    ...dataType(`Float64`, SETTABLE),
  },
  "VELOCITY WORLD Y": {
    desc: `Speed relative to earth, in vertical direction.`,
    units: `Feet per second`,
    ...dataType(`Float64`, SETTABLE),
  },
  "VELOCITY WORLD Z": {
    desc: `Speed relative to earth, in North/South direction.`,
    units: `Feet per second`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const AMBIENT_WEATHER = {
  "AMBIENT DENSITY": {
    desc: `Ambient density.`,
    units: `Slugs per cubic feet`,
    ...dataType(`Float64`),
  },
  "AMBIENT PRECIP RATE": {
    desc: `The current precipitation rate.`,
    units: `millimeters of water`,
    ...dataType(`Float64`),
  },
  "AMBIENT PRECIP STATE": {
    desc: `The current state of precipitation.`,
    units: `mask`,
    ...dataType(`Int32`),
  },
  "AMBIENT PRESSURE": {
    desc: `Ambient pressure.`,
    units: `Inches of mercury`,
    ...dataType(`Float64`),
  },
  "AMBIENT TEMPERATURE": {
    desc: `Ambient temperature.`,
    units: `Celsius`,
    ...dataType(`Float64`),
  },
  "AMBIENT VISIBILITY": {
    desc: `Ambient visibility (only measures ambient particle visibility - related to ambient density).`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "AMBIENT WIND DIRECTION": {
    desc: `Wind direction, relative to true north.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "AMBIENT WIND VELOCITY": {
    desc: `Wind velocity.`,
    units: `Knots`,
    ...dataType(`Float64`),
  },
  "AMBIENT WIND X": {
    desc: `Wind component in East/West direction.`,
    units: `Meters per second`,
    ...dataType(`Float64`),
  },
  "AMBIENT WIND Y": {
    desc: `Wind component in vertical direction.`,
    units: `Meters per second`,
    ...dataType(`Float64`),
  },
  "AMBIENT WIND Z": {
    desc: `Wind component in North/South direction.`,
    units: `Meters per second`,
    ...dataType(`Float64`),
  },
  "BAROMETER PRESSURE": {
    desc: `Barometric pressure.`,
    units: `Millibars`,
    ...dataType(`Float64`),
  },
  "SEA LEVEL PRESSURE": {
    desc: `Barometric pressure at sea level.`,
    units: `Millibars`,
    ...dataType(`Float64`),
  },
  "STRUCT AMBIENT WIND": {
    desc: `X (latitude), Y (vertical) and Z (longitude) components of the wind.`,
    units: `Feet per second`,
    ...dataType(`Float64`),
  },
};

export const MiscellaneousVariables = {
  ...MISC,
  ...AMBIENT_WEATHER,
};
