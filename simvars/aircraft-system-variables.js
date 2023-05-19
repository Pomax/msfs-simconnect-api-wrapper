// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_System_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import {
  Int32,
  SInt32,
  Float64,
  SFloat64,
  String32,
  SString32,
} from "./simvar-utils.js";

// data units
import {
  Bool,
  Feet,
  Number,
  Degrees,
  Enum,
  Radians,
  Percent,
  PercentOver100,
  NullUnit,
  Pounds,
  Position,
  Mask,
  GallonsPerHour,
  RadiansPerSecond,
  FeetPerSecond,
  Meters,
  MetersPerSecond,
  InchesOfMecury,
  Millibars,
  Position128,
  KPH,
} from "./simvar-utils.js";

const GENERAL = {
  "AIRSPEED TRUE CALIBRATE": define(
    `Angle of True calibration scale on airspeed indicator.`,
    Degrees,
    SFloat64
  ),
  "ALTERNATE STATIC SOURCE OPEN:index": define(
    `Alternate static air source.`,
    Bool,
    Int32
  ),
  "ANEMOMETER PCT RPM": define(
    `Anemometer rpm as a percentage.`,
    PercentOver100,
    Float64
  ),
  "ANGLE OF ATTACK INDICATOR": define(`AoA indication.`, Radians, Float64),
  "APPLY HEAT TO SYSTEMS": define(
    `Used when too close to a fire.`,
    Bool,
    SInt32
  ),
  "AUDIO PANEL AVAILABLE": define(
    `True if the audio panel is available.`,
    Bool,
    Int32
  ),
  "AUDIO PANEL VOLUME": define(
    `The Volume of the Audio Panel.`,
    Percent,
    Float64
  ),
  "AUTOTHROTTLE ACTIVE": define(`Auto-throttle active.`, Bool, Int32),
  "AUTO COORDINATION": define(`Is auto-coordination active.`, Bool, SInt32),
  "AVIONICS MASTER SWITCH:index": define(
    `The avionics master switch position, true if the switch is ON. Use an avionics circuit index when referencing.`,
    Bool,
    Int32
  ),
  "CABIN NO SMOKING ALERT SWITCH": define(
    `True if the No Smoking switch is on.`,
    Bool,
    Int32
  ),
  "CABIN SEATBELTS ALERT SWITCH": define(
    `True if the Seatbelts switch is on.`,
    Bool,
    Int32
  ),
  "CANOPY OPEN": define(
    `Percent primary door/exit open.`,
    PercentOver100,
    SFloat64
  ),
  "CARB HEAT AVAILABLE": define(
    `True if carburetor heat available.`,
    Bool,
    Int32
  ),
  "DELTA HEADING RATE": define(
    `Rate of turn of heading indicator.`,
    RadiansPerSecond,
    SFloat64
  ),
  "DME SOUND": define(`DME audio flag.`, Bool, Int32),
  "ELT ACTIVATED": define(
    `Whether or not the Emergency Locator Transmitter is active.`,
    Bool,
    Int32
  ),
  "EXTERNAL SYSTEM VALUE": define(`Generic SimVar.`, Number, SInt32),
  "FIRE BOTTLE DISCHARGED": define(
    `True if the fire bottle is discharged.`,
    Bool,
    Int32
  ),
  "FIRE BOTTLE SWITCH": define(
    `True if the fire bottle switch is on.`,
    Bool,
    Int32
  ),
  "GLASSCOCKPIT AUTOMATIC BRIGHTNESS": define(
    `This variable will return a value between 0 and 1 for the automatic brightness setting for glass cockpit displays, where 0 is the dimmest and 1 is the brightest. This value will vary depending on the time of day.`,
    Number,
    Int32
  ),
  "GPWS SYSTEM ACTIVE": define(
    `True if the Ground Proximity Warning System is active.`,
    Bool,
    SInt32
  ),
  "GPWS WARNING": define(
    `True if Ground Proximity Warning System installed.`,
    Bool,
    Int32
  ),
  "GYRO DRIFT ERROR": define(
    `Angular error of heading indicator.`,
    Radians,
    Float64
  ),
  "HAS STALL PROTECTION": define(
    `Will return whether the aircraft has stall protection (true) or not (false).`,
    Bool,
    Int32
  ),
  "HEADING INDICATOR": define(
    `Heading indicator (directional gyro) indication.`,
    Radians,
    Float64
  ),
  "INDICATED ALTITUDE": define(`The indicated altitude.`, Feet, SFloat64),
  "INDICATED ALTITUDE CALIBRATED": define(
    `Indicated altitude with the altimeter calibrated to current sea level pressure.`,
    Feet,
    Float64
  ),
  "INDICATED ALTITUDE EX1": define(
    `Similar to INDICATED_ALTITUDE but doesn't affect actual plane position when setting this variable.`,
    Feet,
    Float64
  ),
  "INDUCTOR COMPASS HEADING REF": define(
    `Inductor compass heading.`,
    Radians,
    Float64
  ),
  "INDUCTOR COMPASS PERCENT DEVIATION": define(
    `Inductor compass deviation reading.`,
    PercentOver100,
    Float64
  ),
  "INTERCOM MODE": define(`Intercom Mode`, Enum, Int32),
  "INTERCOM SYSTEM ACTIVE": define(
    `Whether or not the intercom system is active.`,
    Bool,
    Int32
  ),
  "IS ALTITUDE FREEZE ON": define(
    `True if the altitude of the aircraft is frozen.`,
    Bool,
    Int32
  ),
  "IS ATTITUDE FREEZE ON": define(
    `True if the attitude (pitch, bank and heading) of the aircraft is frozen.`,
    Bool,
    Int32
  ),
  "IS LATITUDE LONGITUDE FREEZE ON": define(
    `True if the lat/lon of the aircraft (either user or AI controlled) is frozen. If this variable returns true, it means that the latitude and longitude of the aircraft are not being controlled by ESP, so enabling, for example, a SimConnect client to control the position of the aircraft. This can also apply to altitude and attitude. Also refer to the range of KEY_FREEZE..... Event IDs.`,
    Bool,
    Int32
  ),
  "KOHLSMAN SETTING HG:index": define(
    `The value for the given altimeter index in inches of mercury.`,
    InchesOfMecury,
    Float64
  ),
  "KOHLSMAN SETTING MB:index": define(
    `The value for the given altimeter index in millibars.`,
    Millibars,
    Float64
  ),
  "KOHLSMAN SETTING STD:index": define(
    `True if the indexed altimeter is in"Standard" mode, or false otherwise.`,
    Bool,
    Int32
  ),
  "MAGNETIC COMPASS": define(`Compass reading.`, Degrees, SFloat64),
  "MANUAL FUEL PUMP HANDLE": define(
    `Position of manual fuel pump handle. 1 is fully deployed.`,
    PercentOver100,
    Float64
  ),
  "OVERSPEED WARNING": define(`Overspeed warning state.`, Bool, Int32),
  "PANEL ANTI ICE SWITCH": define(
    `True if panel anti-ice switch is on.`,
    Bool,
    Int32
  ),
  "PITOT ICE PCT": define(
    `Amount of pitot ice. 100 is fully iced.`,
    PercentOver100,
    Float64
  ),
  "PITOT HEAT": define(`Pitot heat active.`, Bool, Int32),
  "PITOT HEAT SWITCH:index": define(`Pitot heat switch state.`, Enum, Int32),
  "PLANE HEADING DEGREES GYRO": define(
    `Heading indicator (directional gyro) indication.`,
    Radians,
    SFloat64
  ),
  "PRESSURE ALTITUDE": define(
    `Standard Altitude, ie: at a 1013.25 hPa (1 atmosphere) setting.`,
    Meters,
    Float64
  ),
  "PRESSURIZATION CABIN ALTITUDE": define(
    `The current altitude of the cabin pressurization.`,
    Feet,
    Float64
  ),
  "PRESSURIZATION CABIN ALTITUDE GOAL": define(
    `The set altitude of the cabin pressurization.`,
    Feet,
    Float64
  ),
  "PRESSURIZATION CABIN ALTITUDE RATE": define(
    `The rate at which cabin pressurization changes.`,
    FeetPerSecond,
    Float64
  ),
  "PRESSURIZATION DUMP SWITCH": define(
    `True if the cabin pressurization dump switch is on.`,
    Bool,
    Int32
  ),
  "PRESSURIZATION PRESSURE DIFFERENTIAL": define(
    `The difference in pressure between the set altitude pressurization and the current pressurization.`,
    Pounds,
    Float64
  ),
  "RAD INS SWITCH": define(`True if Rad INS switch on.`, Bool, Int32),
  "SELECTED DME": define(`Selected DME.`, Number, Int32),
  "SMOKESYSTEM AVAILABLE": define(`Smoke system available.`, Bool, Int32),
  "SMOKE ENABLE": define(
    `Set to True to activate the smoke system, if one is available. Please see the notes for SMOKESYSTEM AVAILABLE for more information.`,
    Bool,
    SInt32
  ),
  "SPEAKER ACTIVE": define(
    `Whether or not the speaker is active.`,
    Bool,
    Int32
  ),
  "STALL HORN AVAILABLE": define(`True if stall alarm available.`, Bool, Int32),
  "STALL PROTECTION OFF LIMIT": define(
    `Alpha below which the Stall Protection can be disabled. See the [STALL PROTECTION] section for more information.`,
    Radians,
    Float64
  ),
  "STALL PROTECTION ON GOAL": define(
    `The alpha that the Stall Protection will attempt to reach when triggered. See the [STALL PROTECTION] section for more information.`,
    Radians,
    Float64
  ),
  "STALL PROTECTION ON LIMIT": define(
    `Alpha above which the Stall Protection timer starts. See the [STALL PROTECTION] section for more information.`,
    Radians,
    Float64
  ),
  "STALL WARNING": define(`Stall warning state.`, Bool, Int32),
  "STRUCTURAL DEICE SWITCH": define(
    `True if the aircraft structure deice switch is on.`,
    Bool,
    Int32
  ),
  "SUCTION PRESSURE": define(
    `Vacuum system suction pressure.`,
    InchesOfMecury,
    SFloat64
  ),
  "TAILHOOK HANDLE": define(
    `True if the tailhook handle is engaged.`,
    Bool,
    Int32
  ),
  "TAILHOOK POSITION": define(
    `Percent tail hook extended.`,
    PercentOver100,
    SFloat64
  ),
  "TOW RELEASE HANDLE": define(
    `Position of tow release handle. 100 is fully deployed.`,
    PercentOver100,
    Float64
  ),
  "TRUE AIRSPEED SELECTED": define(
    `True if True Airspeed has been selected.`,
    Bool,
    SInt32
  ),
  "TURN COORDINATOR BALL": define(
    `Turn coordinator ball position.`,
    Position128,
    Int32
  ),
  "TURN COORDINATOR BALL INV": define(
    `Turn coordinator ball position inverted (upside down).`,
    Position128,
    Int32
  ),
  "TURN INDICATOR RATE": define(
    `Turn indicator reading.`,
    RadiansPerSecond,
    Float64
  ),
  "TURN INDICATOR SWITCH": define(
    `True if turn indicator switch is on.`,
    Bool,
    Int32
  ),
  "WINDSHIELD DEICE SWITCH": define(
    `True if the aircraft windshield deice switch is on.`,
    Bool,
    Int32
  ),
};

const VARIOMETER = {
  "VARIOMETER MAC CREADY SETTING": define(
    `The MacCready setting used to fly an optimal speed between thermals.`,
    MetersPerSecond,
    SFloat64
  ),
  "VARIOMETER NETTO": define(
    `Variometer rate using Netto (Total Energy - polar sinkRate).`,
    FeetPerSecond,
    Float64
  ),
  "VARIOMETER RATE": define(`The variometer rate.`, FeetPerSecond, Float64),
  "VARIOMETER SPEED TO FLY": define(
    `Optimal speed to fly between thermals using polar curve and MacCready setting.`,
    KPH,
    Float64
  ),
  "VARIOMETER SPEED TO FLY GLIDE RATIO": define(
    `The glide ratio at optimal speed to fly.`,
    Number,
    Int32
  ),
  "VARIOMETER SWITCH": define(
    `True if the variometer switch is on, false if it is not.`,
    Bool,
    Int32
  ),
  "VARIOMETER TOTAL ENERGY": define(
    `The variometer rate using total energy.`,
    FeetPerSecond,
    Float64
  ),
};

const WATER_BALLAST = {
  "WATER BALLAST TANK CAPACITY:index": define(
    `The capacity of the indexed water ballast tank.`,
    Pounds,
    Float64
  ),
  "WATER BALLAST TANK NUMBER": define(
    `The number of water ballast tank available.`,
    Number,
    Int32
  ),
  "WATER BALLAST TANK QUANTITY:index": define(
    `The quantity of water ballast in the indexed tank.`,
    Pounds,
    Float64
  ),
  "WATER BALLAST VALVE": define(
    `True (1) if a water ballast valve is available, False (0) otherwise.`,
    Bool,
    Int32
  ),
  "WATER BALLAST VALVE FLOW RATE": define(
    `The flow rate of the water ballast valve.`,
    GallonsPerHour,
    Float64
  ),
};

const LIGHTS = {
  "IS ANY INTERIOR LIGHT ON": define(
    `Will return true if any interior light is on or false otherwise.`,
    Bool,
    Int32
  ),
  // "LANDING LIGHT PBH": define(
  //   `Landing light pitch bank and heading.`,
  //   units: `SIMCONNECT_DATA_XYZ structure`,
  //   TODO: figure out how to read XYZ datastructure
  // },
  "LIGHT BEACON": define(`Light switch state.`, Bool, SInt32),
  "LIGHT BEACON ON": define(
    `Returns true if the target beacon light is functioning or if the switch is ON. Use beacon lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT BACKLIGHT INTENSITY": define(
    `Vehicle backlights current intensity (0 = off, 1 = full intensity).`,
    PercentOver100,
    SFloat64
  ),
  "LIGHT BRAKE ON": define(
    `Returns true if the target brake light is functioning or if the switch is ON.`,
    Bool,
    Int32
  ),
  "LIGHT CABIN": define(`Light switch state.`, Bool, SInt32),
  "LIGHT CABIN ON": define(
    `Returns true if the target cabin light is functioning or if the switch is ON. Use the cabin lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT CABIN POWER SETTING": define(
    `The current cabin light power setting. Requires the cabin lightdef index.`,
    Percent,
    Float64
  ),
  "LIGHT GLARESHIELD": define(
    `Whether or not the Light switch for the Glareshield is enabled.`,
    Bool,
    SInt32
  ),
  "LIGHT GLARESHIELD ON": define(
    `Returns true if the target glareshield light is functioning or if the switch is ON. Use the glareshield lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT GLARESHIELD POWER SETTING": define(
    `The current glareshield light power setting. Requires the glareshield lightdef index.`,
    Percent,
    Float64
  ),
  "LIGHT GYROLIGHT INTENSITY": define(
    `Vehicle gyrolights current intensity (0 = off, 1 = full intensity).`,
    PercentOver100,
    SFloat64
  ),
  "LIGHT HEAD ON": define(
    `Returns true if the target navigation light is functioning or if the switch is ON.`,
    Bool,
    Int32
  ),
  "LIGHT HEADLIGHT INTENSITY": define(
    `Vehicle headlights current intensity (0 = off, 1 = full intensity).`,
    PercentOver100,
    SFloat64
  ),
  "LIGHT LANDING ON": define(
    `Returns true if the target landing light is functioning or if the switch is ON. Use landing lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT LANDING": define(
    `Light switch state for landing light.`,
    Bool,
    SInt32
  ),
  "LIGHT LOGO": define(`Light switch state for logo light.`, Bool, SInt32),
  "LIGHT LOGO ON": define(
    `Returns true if the target logo light is functioning or if the switch is ON. Use the logo lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT NAV ON": define(
    `Returns true if the target navigation light is functioning or if the switch is ON. Use navigation lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT NAV": define(`Light switch state for the NAV light.`, Bool, SInt32),
  "LIGHT ON STATES": define(
    `light on using bit mask (see documentation)`,
    Mask,
    Int32
  ),
  "LIGHT PANEL": define(`Light switch state of the panel light.`, Bool, SInt32),
  "LIGHT PANEL ON": define(
    `Returns true if the target panel light is functioning or if the switch is ON. Use the panel lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT PANEL POWER SETTING": define(
    `The current panel light power setting. Requires the panel lightdef index.`,
    Percent,
    Float64
  ),
  "LIGHT PEDESTRAL": define(
    `Whether or not the Light switch for the Pedestal is enabled.`,
    Bool,
    SInt32
  ),
  "LIGHT PEDESTRAL ON": define(
    `Returns true if the target pedestral light is functioning or if the switch is ON. Requires the pedestral lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT PEDESTRAL POWER SETTING": define(
    `The current pedestral light power setting. Requires the pedestral lightdef index.`,
    Percent,
    Float64
  ),
  "LIGHT POTENTIOMETER:index": define(
    `Adjust the potentiometer of the indexed lighting. Index is defined in the appropriate lightdef hashmap setting.`,
    PercentOver100,
    Float64
  ),
  "LIGHT RECOGNITION": define(
    `Light switch state for the recognition light.`,
    Bool,
    SInt32
  ),
  "LIGHT RECOGNITION ON": define(
    `Returns true if the target recognition light is functioning or if the switch is ON. Use the recognition lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT STATES": define(`Same as LIGHT_ON_STATES.`, Mask, Int32),
  "LIGHT STROBE": define(`Light switch state.`, Bool, SInt32),
  "LIGHT STROBE ON": define(
    `Returns true if the target strobe light is functioning or if the switch is ON. Use the strobe lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT TAXI": define(`Light switch state for the taxi light.`, Bool, SInt32),
  "LIGHT TAXI ON": define(
    `Returns true if the target taxi light is functioning or if the switch is ON. Use taxi lightdef index.`,
    Bool,
    Int32
  ),
  "LIGHT WING": define(`Light switch state for the wing lights.`, Bool, SInt32),
  "LIGHT WING ON": define(
    `Returns true if the target wing light is functioning or if the switch is ON. Use the wing lightdef index.`,
    Bool,
    Int32
  ),
  "MANUAL INSTRUMENT LIGHTS": define(
    `True if instrument lights are set manually.`,
    Bool,
    Int32
  ),
  "STROBES AVAILABLE": define(
    `True if strobe lights are available.`,
    Bool,
    Int32
  ),
};

const HYDRAULICS = {
  "HYDRAULIC PRESSURE:index": define(
    `Hydraulic system pressure. Indexes start at 1.`,
    Pounds,
    Float64
  ),
  "HYDRAULIC RESERVOIR PERCENT:index": define(
    `Hydraulic pressure changes will follow changes to this variable. Indexes start at 1.`,
    PercentOver100,
    SFloat64
  ),
  "HYDRAULIC SWITCH": define(`True if hydraulic switch is on.`, Bool, Int32),
  "HYDRAULIC SYSTEM INTEGRITY": define(
    `Percent system functional.`,
    PercentOver100,
    Float64
  ),
};

const PARTIAL_PANELS = {
  "PARTIAL PANEL ADF": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL AIRSPEED": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL ALTIMETER": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL ATTITUDE": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL AVIONICS": define(`Gauge fail flag.`, Enum, Int32),
  "PARTIAL PANEL COMM": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL COMPASS": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL ELECTRICAL": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL ENGINE": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL FUEL INDICATOR": define(`Gauge fail flag.`, Enum, Int32),
  "PARTIAL PANEL HEADING": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL NAV": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL PITOT": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL TRANSPONDER": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL TURN COORDINATOR": define(`Gauge fail flag.`, Enum, Int32),
  "PARTIAL PANEL VACUUM": define(`Gauge fail flag.`, Enum, SInt32),
  "PARTIAL PANEL VERTICAL VELOCITY": define(`Gauge fail flag.`, Enum, SInt32),
};

const PAYLOAD_STATIONS = {
  "DROPPABLE OBJECTS COUNT:index": define(
    `The number of droppable objects at the station number identified by the index.`,
    Number,
    Int32
  ),
  "DROPPABLE OBJECTS TYPE:index": define(
    `The type of droppable object at the station number identified by the index.`,
    NullUnit,
    SString32
  ),
  "DROPPABLE OBJECTS UI NAME:index": define(
    `Descriptive name, used in User Interface dialogs, of a droppable object, identified by index.`,
    NullUnit,
    String32
  ),
  "PAYLOAD STATION COUNT": define(
    `Number of payload stations (1 to 15).`,
    Number,
    Int32
  ),
  "PAYLOAD STATION NAME:index": define(
    `Descriptive name for payload station.`,
    NullUnit,
    String32
  ),
  "PAYLOAD STATION NUM SIMOBJECTS:index": define(
    `The number of objects at the payload station.`,
    Number,
    Int32
  ),
  "PAYLOAD STATION OBJECT:index": define(
    `Places the named object at the payload station identified by the index (starting from 1). The string is the Container name (refer to the title property of Simulation Object Configuration Files).`,
    NullUnit,
    String32
  ),
  "PAYLOAD STATION WEIGHT:index": define(
    `Individual payload station weight.`,
    Pounds,
    SFloat64
  ),
};

const WARNING_VARIABLES = {
  "WARNING FUEL": define(
    `This is the current state of the fuel warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING FUEL LEFT": define(
    `This is the current state of the left fuel tank warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING FUEL RIGHT": define(
    `This is the current state of the right fuel tank warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING LOW HEIGHT": define(
    `This is the current state of the low height warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING OIL PRESSURE": define(
    `This is the current state of the oil pressure warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING VACUUM": define(
    `This is the current state of the vacuum system warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING VACUUM LEFT": define(
    `This is the current state of the left vacuum system warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING VACUUM RIGHT": define(
    `This is the current state of the right vacuum system warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
  "WARNING VOLTAGE": define(
    `This is the current state of the electrical system voltage warning, either on (true) or off (false).`,
    Bool,
    Int32
  ),
};

const YOKE = {
  // The official docs list the following var as "YOKE X INIDICATOR". This is clearly a typo.
  "YOKE X INDICATOR": define(
    `Yoke position in horizontal direction.`,
    Position,
    Float64
  ),
  "YOKE X POSITION": define(
    `Percent control deflection left/right (for animation).`,
    Position,
    SFloat64
  ),
  "YOKE X POSITION WITH AP": define(
    `Percent control deflection left/right (for animation). Also includes AP's inputs.`,
    Position,
    Float64
  ),
  // The official docs list the following var as "YOKE Y INIDICATOR". This is clearly a typo,
  // In fact, using the official name triggers a SIMCONNECT_EXCEPTION_NAME_UNRECOGNIZED exception.
  "YOKE Y INDICATOR": define(
    `Yoke position in vertical direction.`,
    Position,
    Float64
  ),
  "YOKE Y POSITION": define(
    `Percent control deflection fore/aft (for animation).`,
    Position,
    SFloat64
  ),
  "YOKE Y POSITION WITH AP": define(
    `Percent control deflection fore/aft (for animation). Also includes AP's inputs.`,
    Position,
    Float64
  ),
};

export const AircraftSystemVariables = {
  ...GENERAL,
  ...VARIOMETER,
  ...WATER_BALLAST,
  ...LIGHTS,
  ...HYDRAULICS,
  ...PARTIAL_PANELS,
  ...PAYLOAD_STATIONS,
  ...WARNING_VARIABLES,
  ...YOKE,
};
