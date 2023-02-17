// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Miscellaneous_Variables.htm

const MISC = {
  "ANIMATION DELTA TIME": {
    desc: `Difference of time between the current frame and the last frame where this SimObject has been animated`,
    units: `Seconds`,
  },
  "ARTIFICIAL GROUND ELEVATION": {
    desc: `In case scenery is not loaded for AI planes, this variable can be used to set a default surface elevation.`,
    units: `Feet`,
  },
  CATEGORY: {
    desc: `Type of aircraft  `,
    units: `string`,
  },
  "CRASH FLAG": {
    desc: `Flag value that indicates the cause of a crash.`,
    units: `enum`,
  },
  "CRASH SEQUENCE": {
    desc: `The state of the crash event sequence. `,
    units: `enum`,
  },
  "GROUND ALTITUDE": {
    desc: `Altitude of surface.`,
    units: `Meters`,
  },
  "HAND ANIM STATE": {
    desc: `What frame of the hand is currently used.`,
    units: `enum`,
  },
  "IDLE ANIMATION ID": {
    desc: `The ID of the idle animation for the sim object.`,
    units: `String`,
  },
  MAGVAR: {
    desc: `Magnetic variation.`,
    units: `Degrees`,
  },
  "MISSION SCORE": {
    desc: ``,
    units: `Number`,
  },
  REALISM: {
    desc: `General realism percent.`,
    units: `Number`,
  },
  "REALISM CRASH DETECTION": {
    desc: `True indicates crash detection is turned on.`,
    units: `Bool`,
  },
  "REALISM CRASH WITH OTHERS": {
    desc: `True indicates crashing with other aircraft is possible.`,
    units: `Bool`,
  },
  "SIM DISABLED": {
    desc: `Is sim disabled.`,
    units: `Bool`,
  },
  "SIM ON GROUND": {
    desc: `On ground flag.`,
    units: `Bool`,
  },
  "SIM SHOULD SET ON GROUND": {
    desc: ``,
    units: `Bool`,
  },
  "TRACK IR ENABLE": {
    desc: `Returns true if Track IR is enabled or not.`,
    units: `Bool`,
  },
  "TOTAL WORLD VELOCITY": {
    desc: `Speed relative to the earths center.`,
    units: `Feet per second`,
  },
  "USER INPUT ENABLED": {
    desc: `Is input allowed from the user.`,
    units: `Bool`,
  },
  "VISUAL MODEL RADIUS": {
    desc: `Model radius.`,
    units: `Meters`,
  },
  "VELOCITY WORLD X": {
    desc: `Speed relative to earth, in East/West direction.`,
    units: `Feet per second`,
  },
  "VELOCITY WORLD Y": {
    desc: `Speed relative to earth, in vertical direction.`,
    units: `Feet per second`,
  },
  "VELOCITY WORLD Z": {
    desc: `Speed relative to earth, in North/South direction.`,
    units: `Feet per second`,
  },
};

const AMBIENT_WEATHER = {
  "AMBIENT DENSITY": {
    desc: `Ambient density.`,
    units: `Slugs per cubic feet`,
  },
  "AMBIENT PRECIP RATE": {
    desc: `The current precipitation rate.`,
    units: `millimeters of water`,
  },
  "AMBIENT PRECIP STATE": {
    desc: `The current state of precipitation.`,
    units: `mask`,
  },
  "AMBIENT PRESSURE": {
    desc: `Ambient pressure.`,
    units: `Inches of mercury, inHg`,
  },
  "AMBIENT TEMPERATURE": {
    desc: `Ambient temperature.`,
    units: `Celsius`,
  },
  "AMBIENT VISIBILITY": {
    desc: `Ambient visibility (only measures ambient particle visibility - related to ambient density).`,
    units: `Meters`,
  },
  "AMBIENT WIND DIRECTION": {
    desc: `Wind direction, relative to true north.`,
    units: `Degrees`,
  },
  "AMBIENT WIND VELOCITY": {
    desc: `Wind velocity.`,
    units: `Knots`,
  },
  "AMBIENT WIND X": {
    desc: `Wind component in East/West direction.`,
    units: `Meters per second`,
  },
  "AMBIENT WIND Y": {
    desc: `Wind component in vertical direction.`,
    units: `Meters per second`,
  },
  "AMBIENT WIND Z": {
    desc: `Wind component in North/South direction.`,
    units: `Meters per second`,
  },
  "BAROMETER PRESSURE": {
    desc: `Barometric pressure.`,
    units: `Millibars`,
  },
  "SEA LEVEL PRESSURE": {
    desc: `Barometric pressure at sea level.`,
    units: `Millibars`,
  },
  "STRUCT AMBIENT WIND": {
    desc: `X (latitude), Y (vertical) and Z (longitude) components of the wind.`,
    units: `Feet per second`,
  },
};
