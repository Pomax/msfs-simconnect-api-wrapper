// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_System_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const GENERAL = {
  "AIRSPEED TRUE CALIBRATE": {
    desc: `Angle of True calibration scale on airspeed indicator.`,
    units: `Degrees`,
    ...dataType(`Float64`, SETTABLE),
  },
  "ALTERNATE STATIC SOURCE OPEN:index": {
    desc: `Alternate static air source.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ANEMOMETER PCT RPM": {
    desc: `Anemometer rpm as a percentage.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "ANGLE OF ATTACK INDICATOR": {
    desc: `AoA indication.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "APPLY HEAT TO SYSTEMS": {
    desc: `Used when too close to a fire.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "AUDIO PANEL AVAILABLE": {
    desc: `True if the audio panel is available.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "AUDIO PANEL VOLUME": {
    desc: `The Volume of the Audio Panel.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "AUTOTHROTTLE ACTIVE": {
    desc: `Auto-throttle active.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "AUTO COORDINATION": {
    desc: `Is auto-coordination active.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "AVIONICS MASTER SWITCH:index": {
    desc: `The avionics master switch position, true if the switch is ON. Use an avionics circuit index when referencing.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "CABIN NO SMOKING ALERT SWITCH": {
    desc: `True if the No Smoking switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "CABIN SEATBELTS ALERT SWITCH": {
    desc: `True if the Seatbelts switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "CANOPY OPEN": {
    desc: `Percent primary door/exit open.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "CARB HEAT AVAILABLE": {
    desc: `True if carburetor heat available.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "DELTA HEADING RATE": {
    desc: `Rate of turn of heading indicator.`,
    units: `Radians per second`,
    ...dataType(`Float64`, SETTABLE),
  },
  "DME SOUND": {
    desc: `DME audio flag.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "ELT ACTIVATED": {
    desc: `Whether or not the Emergency Locator Transmitter is active.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "EXTERNAL SYSTEM VALUE": {
    desc: `Generic SimVar.`,
    units: `Number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "FIRE BOTTLE DISCHARGED": {
    desc: `True if the fire bottle is discharged.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "FIRE BOTTLE SWITCH": {
    desc: `True if the fire bottle switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "GLASSCOCKPIT AUTOMATIC BRIGHTNESS": {
    desc: `This variable will return a value between 0 and 1 for the automatic brightness setting for glass cockpit displays, where 0 is the dimmest and 1 is the brightest. This value will vary depending on the time of day.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "GPWS SYSTEM ACTIVE": {
    desc: `True if the Ground Proximity Warning System is active.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GPWS WARNING": {
    desc: `True if Ground Proximity Warning System installed.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "GYRO DRIFT ERROR": {
    desc: `Angular error of heading indicator.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "HAS STALL PROTECTION": {
    desc: `Will return whether the aircraft has stall protection (true) or not (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "HEADING INDICATOR": {
    desc: `Heading indicator (directional gyro) indication.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "INDICATED ALTITUDE": {
    desc: `The indicated altitude.`,
    units: `Feet`,
    ...dataType(`Float64`, SETTABLE),
  },
  "INDICATED ALTITUDE CALIBRATED": {
    desc: `Indicated altitude with the altimeter calibrated to current sea level pressure.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "INDICATED ALTITUDE EX1": {
    desc: `Similar to INDICATED_ALTITUDE but doesn't affect actual plane position when setting this variable.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "INDUCTOR COMPASS HEADING REF": {
    desc: `Inductor compass heading.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "INDUCTOR COMPASS PERCENT DEVIATION": {
    desc: `Inductor compass deviation reading.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "INTERCOM MODE": {
    desc: `Intercom Mode`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "INTERCOM SYSTEM ACTIVE": {
    desc: `Whether or not the intercom system is active.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "IS ALTITUDE FREEZE ON": {
    desc: `True if the altitude of the aircraft is frozen.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "IS ATTITUDE FREEZE ON": {
    desc: `True if the attitude (pitch, bank and heading) of the aircraft is frozen.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "IS LATITUDE LONGITUDE FREEZE ON": {
    desc: `True if the lat/lon of the aircraft (either user or AI controlled) is frozen. If this variable returns true, it means that the latitude and longitude of the aircraft are not being controlled by ESP, so enabling, for example, a SimConnect client to control the position of the aircraft. This can also apply to altitude and attitude. Also refer to the range of KEY_FREEZE..... Event IDs.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "KOHLSMAN SETTING HG:index": {
    desc: `The value for the given altimeter index in inches of mercury.`,
    units: `Inches of Mercury`,
    ...dataType(`Float64`),
  },
  "KOHLSMAN SETTING MB:index": {
    desc: `The value for the given altimeter index in millibars.`,
    units: `Millibars`,
    ...dataType(`Float64`),
  },
  "KOHLSMAN SETTING STD:index": {
    desc: `True if the indexed altimeter is in"Standard" mode, or false otherwise.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "MAGNETIC COMPASS": {
    desc: `Compass reading.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "MANUAL FUEL PUMP HANDLE": {
    desc: `Position of manual fuel pump handle. 1 is fully deployed.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "OVERSPEED WARNING": {
    desc: `Overspeed warning state.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "PANEL ANTI ICE SWITCH": {
    desc: `True if panel anti-ice switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "PITOT ICE PCT": {
    desc: `Amount of pitot ice. 100 is fully iced.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "PITOT HEAT": {
    desc: `Pitot heat active.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "PITOT HEAT SWITCH:index": {
    desc: `Pitot heat switch state.`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "PLANE HEADING DEGREES GYRO": {
    desc: `Heading indicator (directional gyro) indication.`,
    units: `Radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "PRESSURE ALTITUDE": {
    desc: `Standard Altitude, ie: at a 1013.25 hPa (1 atmosphere) setting.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "PRESSURIZATION CABIN ALTITUDE": {
    desc: `The current altitude of the cabin pressurization.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "PRESSURIZATION CABIN ALTITUDE GOAL": {
    desc: `The set altitude of the cabin pressurization.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "PRESSURIZATION CABIN ALTITUDE RATE": {
    desc: `The rate at which cabin pressurization changes.`,
    units: `Feet per second`,
    ...dataType(`Float64`),
  },
  "PRESSURIZATION DUMP SWITCH": {
    desc: `True if the cabin pressurization dump switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "PRESSURIZATION PRESSURE DIFFERENTIAL": {
    desc: `The difference in pressure between the set altitude pressurization and the current pressurization.`,
    units: `pounds`,
    ...dataType(`Float64`),
  },
  "RAD INS SWITCH": {
    desc: `True if Rad INS switch on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "SELECTED DME": {
    desc: `Selected DME.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "SMOKESYSTEM AVAILABLE": {
    desc: `Smoke system available.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "SMOKE ENABLE": {
    desc: `Set to True to activate the smoke system, if one is available. Please see the notes for SMOKESYSTEM AVAILABLE for more information.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "SPEAKER ACTIVE": {
    desc: `Whether or not the speaker is active.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "STALL HORN AVAILABLE": {
    desc: `True if stall alarm available.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "STALL PROTECTION OFF LIMIT": {
    desc: `Alpha below which the Stall Protection can be disabled. See the [STALL PROTECTION] section for more information.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "STALL PROTECTION ON GOAL": {
    desc: `The alpha that the Stall Protection will attempt to reach when triggered. See the [STALL PROTECTION] section for more information.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "STALL PROTECTION ON LIMIT": {
    desc: `Alpha above which the Stall Protection timer starts. See the [STALL PROTECTION] section for more information.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "STALL WARNING": {
    desc: `Stall warning state.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "STRUCTURAL DEICE SWITCH": {
    desc: `True if the aircraft structure deice switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "SUCTION PRESSURE": {
    desc: `Vacuum system suction pressure.`,
    units: `Inches of Mercury`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TAILHOOK HANDLE": {
    desc: `True if the tailhook handle is engaged.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "TAILHOOK POSITION": {
    desc: `Percent tail hook extended.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "TOW RELEASE HANDLE": {
    desc: `Position of tow release handle. 100 is fully deployed.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "TRUE AIRSPEED SELECTED": {
    desc: `True if True Airspeed has been selected.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "TURN COORDINATOR BALL": {
    desc: `Turn coordinator ball position.`,
    units: `position 128`,
    ...dataType(`Int32`),
  },
  "TURN COORDINATOR BALL INV": {
    desc: `Turn coordinator ball position inverted (upside down).`,
    units: `position 128`,
    ...dataType(`Int32`),
  },
  "TURN INDICATOR RATE": {
    desc: `Turn indicator reading.`,
    units: `Radians per second`,
    ...dataType(`Float64`),
  },
  "TURN INDICATOR SWITCH": {
    desc: `True if turn indicator switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WINDSHIELD DEICE SWITCH": {
    desc: `True if the aircraft windshield deice switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
};

const VARIOMETER = {
  "VARIOMETER MAC CREADY SETTING": {
    desc: `The MacCready setting used to fly an optimal speed between thermals.`,
    units: `Meters per second`,
    ...dataType(`Float64`, SETTABLE),
  },
  "VARIOMETER NETTO": {
    desc: `Variometer rate using Netto (Total Energy - polar sinkRate).`,
    units: `Feet per second`,
    ...dataType(`Float64`),
  },
  "VARIOMETER RATE": {
    desc: `The variometer rate.`,
    units: `Feet per second`,
    ...dataType(`Float64`),
  },
  "VARIOMETER SPEED TO FLY": {
    desc: `Optimal speed to fly between thermals using polar curve and MacCready setting.`,
    units: `Kilometers per hour`,
    ...dataType(`Float64`),
  },
  "VARIOMETER SPEED TO FLY GLIDE RATIO": {
    desc: `The glide ratio at optimal speed to fly.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "VARIOMETER SWITCH": {
    desc: `True if the variometer switch is on, false if it is not.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "VARIOMETER TOTAL ENERGY": {
    desc: `The variometer rate using total energy.`,
    units: `Feet per second`,
    ...dataType(`Float64`),
  },
};

const WATER_BALLAST = {
  "WATER BALLAST TANK CAPACITY:index": {
    desc: `The capacity of the indexed water ballast tank.`,
    units: `Pounds`,
    ...dataType(`Float64`),
  },
  "WATER BALLAST TANK NUMBER": {
    desc: `The number of water ballast tank available.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "WATER BALLAST TANK QUANTITY:index": {
    desc: `The quantity of water ballast in the indexed tank.`,
    units: `Pounds`,
    ...dataType(`Float64`),
  },
  "WATER BALLAST VALVE": {
    desc: `True (1) if a water ballast valve is available, False (0) otherwise.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WATER BALLAST VALVE FLOW RATE": {
    desc: `The flow rate of the water ballast valve.`,
    units: `Gallons per hour`,
    ...dataType(`Float64`),
  },
};

const LIGHTS = {
  "IS ANY INTERIOR LIGHT ON": {
    desc: `Will return true if any interior light is on or false otherwise.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  // "LANDING LIGHT PBH": {
  //   desc: `Landing light pitch bank and heading.`,
  //   units: `SIMCONNECT_DATA_XYZ structure`,
  //   TODO: figure out how to read XYZ datastructure
  // },
  "LIGHT BEACON": {
    desc: `Light switch state.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT BEACON ON": {
    desc: `Returns true if the target beacon light is functioning or if the switch is ON. Use beacon lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT BACKLIGHT INTENSITY": {
    desc: `Vehicle backlights current intensity (0 = off, 1 = full intensity).`,
    units: `Percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "LIGHT BRAKE ON": {
    desc: `Returns true if the target brake light is functioning or if the switch is ON.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT CABIN": {
    desc: `Light switch state.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT CABIN ON": {
    desc: `Returns true if the target cabin light is functioning or if the switch is ON. Use the cabin lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT CABIN POWER SETTING": {
    desc: `The current cabin light power setting. Requires the cabin lightdef index.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "LIGHT GLARESHIELD": {
    desc: `Whether or not the Light switch for the Glareshield is enabled.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT GLARESHIELD ON": {
    desc: `Returns true if the target glareshield light is functioning or if the switch is ON. Use the glareshield lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT GLARESHIELD POWER SETTING": {
    desc: `The current glareshield light power setting. Requires the glareshield lightdef index.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "LIGHT GYROLIGHT INTENSITY": {
    desc: `Vehicle gyrolights current intensity (0 = off, 1 = full intensity).`,
    units: `Percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "LIGHT HEAD ON": {
    desc: `Returns true if the target navigation light is functioning or if the switch is ON.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT HEADLIGHT INTENSITY": {
    desc: `Vehicle headlights current intensity (0 = off, 1 = full intensity).`,
    units: `Percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "LIGHT LANDING ON": {
    desc: `Returns true if the target landing light is functioning or if the switch is ON. Use landing lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT LANDING": {
    desc: `Light switch state for landing light.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT LOGO": {
    desc: `Light switch state for logo light.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT LOGO ON": {
    desc: `Returns true if the target logo light is functioning or if the switch is ON. Use the logo lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT NAV ON": {
    desc: `Returns true if the target navigation light is functioning or if the switch is ON. Use navigation lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT NAV": {
    desc: `Light switch state for the NAV light.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT ON STATES": {
    desc: `light on using bit mask (see documentation)`,
    units: `Mask`,
    ...dataType(`Int32`),
  },
  "LIGHT PANEL": {
    desc: `Light switch state of the panel light.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT PANEL ON": {
    desc: `Returns true if the target panel light is functioning or if the switch is ON. Use the panel lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT PANEL POWER SETTING": {
    desc: `The current panel light power setting. Requires the panel lightdef index.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "LIGHT PEDESTRAL": {
    desc: `Whether or not the Light switch for the Pedestal is enabled.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT PEDESTRAL ON": {
    desc: `Returns true if the target pedestral light is functioning or if the switch is ON. Requires the pedestral lightdef index.`,
    units: `bool`,
    ...dataType(`Int32`),
  },
  "LIGHT PEDESTRAL POWER SETTING": {
    desc: `The current pedestral light power setting. Requires the pedestral lightdef index.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "LIGHT POTENTIOMETER:index": {
    desc: `Adjust the potentiometer of the indexed lighting. Index is defined in the appropriate lightdef hashmap setting.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "LIGHT RECOGNITION": {
    desc: `Light switch state for the recognition light.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT RECOGNITION ON": {
    desc: `Returns true if the target recognition light is functioning or if the switch is ON. Use the recognition lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT STATES": {
    desc: `Same as LIGHT_ON_STATES.`,
    units: `Mask`,
    ...dataType(`Int32`),
  },
  "LIGHT STROBE": {
    desc: `Light switch state.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT STROBE ON": {
    desc: `Returns true if the target strobe light is functioning or if the switch is ON. Use the strobe lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT TAXI": {
    desc: `Light switch state for the taxi light.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT TAXI ON": {
    desc: `Returns true if the target taxi light is functioning or if the switch is ON. Use taxi lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "LIGHT WING": {
    desc: `Light switch state for the wing lights.`,
    units: `Bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "LIGHT WING ON": {
    desc: `Returns true if the target wing light is functioning or if the switch is ON. Use the wing lightdef index.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "MANUAL INSTRUMENT LIGHTS": {
    desc: `True if instrument lights are set manually.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "STROBES AVAILABLE": {
    desc: `True if strobe lights are available.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
};

const HYDRAULICS = {
  "HYDRAULIC PRESSURE:index": {
    desc: `Hydraulic system pressure. Indexes start at 1.`,
    units: `Pounds`,
    ...dataType(`Float64`),
  },
  "HYDRAULIC RESERVOIR PERCENT:index": {
    desc: `Hydraulic pressure changes will follow changes to this variable. Indexes start at 1.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "HYDRAULIC SWITCH": {
    desc: `True if hydraulic switch is on.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "HYDRAULIC SYSTEM INTEGRITY": {
    desc: `Percent system functional.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
};

const PARTIAL_PANELS = {
  "PARTIAL PANEL ADF": {
    desc: `Gauge fail flag.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL AIRSPEED": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL ALTIMETER": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL ATTITUDE": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL AVIONICS": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "PARTIAL PANEL COMM": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL COMPASS": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL ELECTRICAL": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL ENGINE": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL FUEL INDICATOR": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "PARTIAL PANEL HEADING": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL NAV": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL PITOT": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL TRANSPONDER": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL TURN COORDINATOR": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "PARTIAL PANEL VACUUM": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "PARTIAL PANEL VERTICAL VELOCITY": {
    desc: `Gauge fail flag.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
};

const PAYLOAD_STATIONS = {
  "DROPPABLE OBJECTS COUNT:index": {
    desc: `The number of droppable objects at the station number identified by the index.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "DROPPABLE OBJECTS TYPE:index": {
    desc: `The type of droppable object at the station number identified by the index.`,
    units: null,
    ...dataType(`String32`, SETTABLE),
  },
  "DROPPABLE OBJECTS UI NAME:index": {
    desc: `Descriptive name, used in User Interface dialogs, of a droppable object, identified by index.`,
    units: null,
    ...dataType(`String32`),
  },
  "PAYLOAD STATION COUNT": {
    desc: `Number of payload stations (1 to 15).`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "PAYLOAD STATION NAME:index": {
    desc: `Descriptive name for payload station.`,
    units: null,
    ...dataType(`String32`),
  },
  "PAYLOAD STATION NUM SIMOBJECTS:index": {
    desc: `The number of objects at the payload station.`,
    units: `Number`,
    ...dataType(`Int32`),
  },
  "PAYLOAD STATION OBJECT:index": {
    desc: `Places the named object at the payload station identified by the index (starting from 1). The string is the Container name (refer to the title property of Simulation Object Configuration Files).`,
    units: null,
    ...dataType(`String32`),
  },
  "PAYLOAD STATION WEIGHT:index": {
    desc: `Individual payload station weight.`,
    units: `Pounds`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const WARNING_VARIABLES = {
  "WARNING FUEL": {
    desc: `This is the current state of the fuel warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING FUEL LEFT": {
    desc: `This is the current state of the left fuel tank warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING FUEL RIGHT": {
    desc: `This is the current state of the right fuel tank warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING LOW HEIGHT": {
    desc: `This is the current state of the low height warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING OIL PRESSURE": {
    desc: `This is the current state of the oil pressure warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING VACUUM": {
    desc: `This is the current state of the vacuum system warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING VACUUM LEFT": {
    desc: `This is the current state of the left vacuum system warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING VACUUM RIGHT": {
    desc: `This is the current state of the right vacuum system warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "WARNING VOLTAGE": {
    desc: `This is the current state of the electrical system voltage warning, either on (true) or off (false).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
};

const YOKE = {
  // The official docs list the following var as "YOKE X INIDICATOR". This is clearly a typo.
  "YOKE X INDICATOR": {
    desc: `Yoke position in horizontal direction.`,
    units: `position`,
    ...dataType(`Float64`),
  },
  "YOKE X POSITION": {
    desc: `Percent control deflection left/right (for animation).`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "YOKE X POSITION WITH AP": {
    desc: `Percent control deflection left/right (for animation). Also includes AP's inputs.`,
    units: `position`,
    ...dataType(`Float64`),
  },
  // The official docs list the following var as "YOKE Y INIDICATOR". This is clearly a typo,
  // In fact, using the official name triggers a SIMCONNECT_EXCEPTION_NAME_UNRECOGNIZED exception.
  "YOKE Y INDICATOR": {
    desc: `Yoke position in vertical direction.`,
    units: `position`,
    ...dataType(`Float64`),
  },
  "YOKE Y POSITION": {
    desc: `Percent control deflection fore/aft (for animation).`,
    units: `position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "YOKE Y POSITION WITH AP": {
    desc: `Percent control deflection fore/aft (for animation). Also includes AP's inputs.`,
    units: `position`,
    ...dataType(`Float64`),
  },
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
