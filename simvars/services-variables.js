// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Services_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const BAGGAGE_LOADER = {
  "BAGGAGELOADER ANGLE CURRENT": {
    desc: `Current angle of the baggage loader ramp, relative to the ground.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "BAGGAGELOADER ANGLE TARGET": {
    desc: `Target angle of the baggage loader ramp, relative to the ground.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "BAGGAGELOADER END RAMP Y": {
    desc: `"Y" axis position of the end of the baggage loader ramp, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BAGGAGELOADER END RAMP Z": {
    desc: `"Z" axis position of the end of the baggage loader ramp, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BAGGAGELOADER PIVOT Y": {
    desc: `"Y" axis position of the baggage loader ramp pivot, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BAGGAGELOADER PIVOT Z": {
    desc: `"Z" axis position of the baggage loader ramp pivot, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
};

const BOARDING_RAMP = {
  "BOARDINGRAMP ELEVATION CURRENT": {
    desc: `The current altitude AGL of the top of the boarding ramp stairs.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP ELEVATION TARGET": {
    desc: `The target altitude AGL of the top of the boarding ramp stairs.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP END POSITION Y": {
    desc: `The "Y" axis position of the top of the boarding ramp stairs when extended at maximal capacity, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP END POSITION Z": {
    desc: `The "Z" axis position of the top of the boarding ramp stairs when extended at maximal capacity, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP ORIENTATION CURRENT": {
    desc: `The current orientation of the boarding ramp stairs, where 0 is at rest and 1 is suited for boarding.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP ORIENTATION TARGET": {
    desc: `The target orientation of of the boarding ramp stairs, where 0 is at rest and 1 is suited for boarding.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP START POSITION Y": {
    desc: `The "Y" axis position of the top of the boarding ramp stairs when at minimal extension, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "BOARDINGRAMP START POSITION Z": {
    desc: `The "Z" axis position of the top of the boarding ramp stairs when at minimal extension, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
};

const CATERING_TRUCK = {
  "CATERINGTRUCK AIRCRAFT DOOR CONTACT OFFSET Z": {
    desc: `The "Z" axis position of the point of contact between the catering truck and the bottom of the aircraft door, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "CATERINGTRUCK ELEVATION CURRENT": {
    desc: `The current altitude AGL of the bottom of the catering truck container.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "CATERINGTRUCK ELEVATION TARGET": {
    desc: `The target altitude AGL of the bottom of the catering truck container.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "CATERINGTRUCK OPENING CURRENT": {
    desc: `The current state of the catering truck when opening the container and deploying the bridge, where 0 is fully closed and 1 is fully opened and deployed.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "CATERINGTRUCK OPENING TARGET": {
    desc: `The target state of the catering truck the container is opene and the bridge deployed, where 0 is fully closed and 1 is fully opened and deployed.`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
};

const FUEL_TRUCK = {
  "FUELTRUCK HOSE DEPLOYED": {
    desc: `The current deployment amount of the fuel truck hose. Currently can only be set to 0 (not deployed) and 1 (deployed).`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "FUELTRUCK HOSE END POSX": {
    desc: `The "X" axis position of the end of the fuel truck hose when fully deployed, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "FUELTRUCK HOSE END POSZ": {
    desc: `The "Z" axis position of the end of the fuel truck hose when fully deployed, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "FUELTRUCK HOSE END RELATIVE HEADING": {
    desc: `The heading of the end of the fuel truck hose, relative to the vehicle heading.`,
    units: `degrees`,
    ...dataType(`Float64`),
  },
};

const GROUND_POWER_UNITS = {
  "GROUNDPOWERUNIT HOSE DEPLOYED": {
    desc: `The current deployment amount of the ground power unit hose. Currently can only be set to 0 (not deployed) and 1 (deployed).`,
    units: `Percent Over 100`,
    ...dataType(`Float64`),
  },
  "GROUNDPOWERUNIT HOSE END POSX": {
    desc: `The "X" axis position of the end of the ground power unit hose when fully deployed, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "GROUNDPOWERUNIT HOSE END POSZ": {
    desc: `The "Z" axis position of the end of the ground power unit hose when fully deployed, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "GROUNDPOWERUNIT HOSE END RELATIVE HEADING": {
    desc: `The heading of the end of the ground power unit hose, relative to the vehicle heading.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
};

const JETWAY = {
  "JETWAY HOOD LEFT BEND": {
    desc: `The target position for the left bend animation of the jetway hood.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "JETWAY HOOD LEFT DEPLOYMENT": {
    desc: `The target angle for the left deployment animation of the jetway hood, where 0 is considered vertical.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "JETWAY HOOD RIGHT BEND": {
    desc: `The target position for the right bend animation of the jetway hood.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "JETWAY HOOD RIGHT DEPLOYMENT": {
    desc: `The target angle for the right deployment animation of the jetway hood, where 0 is considered vertical.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "JETWAY HOOD TOP HORIZONTAL": {
    desc: `Target position for the top horizontal animation of the jetway hood. Values can be between -100% and 100%.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "JETWAY HOOD TOP VERTICAL": {
    desc: `Target position for the top vertical animation of the jetway hood. Values can be between -100% and 100%.`,
    units: `Percent`,
    ...dataType(`Float64`),
  },
  "JETWAY MOVING": {
    desc: `This will be 1 (TRUE) id the jetway body is currently moving (it will not include checks on hood animation).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "JETWAY WHEEL ORIENTATION CURRENT": {
    desc: `The current angle of the jetway wheels.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "JETWAY WHEEL ORIENTATION TARGET": {
    desc: `The (approximate) target angle for the jetway wheels.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "JETWAY WHEEL SPEED": {
    desc: `The current speed of the jetway wheels.`,
    units: `Meters per second`,
    ...dataType(`Float64`),
  },
};

const MARSHALLER = {
  "MARSHALLER AIRCRAFT DIRECTION PARKINGSPACE": {
    desc: `Currently not used in the simulation.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "MARSHALLER AIRCRAFT DISTANCE": {
    desc: `The distance between the Marshaller and the aircraft.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "MARSHALLER AIRCRAFT DISTANCE DIRECTION X PARKINGSPACE": {
    desc: `Position on the X axis of the aircraft in the parking space (negative means the aircraft is on the left side and positive the right side).`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "MARSHALLER AIRCRAFT DISTANCE DIRECTION Z PARKINGSPACE": {
    desc: `Position on the Z axis of the aircraft in the parking space (negative means the aircraft is behind the parking space and positive is in front of the parking space).`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "MARSHALLER AIRCRAFT ENGINE SHUTDOWN": {
    desc: `True if the engine(s) of the aircraft is (are) shut down.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "MARSHALLER AIRCRAFT HEADING PARKINGSPACE": {
    desc: `Angle between the direction of the aircraft and the direction of the parking place.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "MARSHALLER AIRCRAFT PROJECTION POINT PARKINGSPACE": {
    desc: `Value in Z axis of the projection from the aircraft position following the heading of the aircraft.  `,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "MARSHALLER AIRCRAFT VELOCITY": {
    desc: `The velocity of the aircraft.`,
    units: `Knots`,
    ...dataType(`Float64`),
  },
};

const PUSHBACK = {
  "PUSHBACK ANGLE": {
    desc: `Pushback angle (the heading of the tug).`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "PUSHBACK ATTACHED": {
    desc: `True if this vehicle is attached to an aircraft.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "PUSHBACK AVAILABLE": {
    desc: `True if a push back is available on the parking space.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
  "PUSHBACK CONTACTX": {
    desc: `The towpoint position, relative to the aircrafts datum reference point.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "PUSHBACK CONTACTY": {
    desc: `Pushback contact position in vertical direction.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "PUSHBACK CONTACTZ": {
    desc: `Pushback contact position in fore/aft direction.`,
    units: `Feet`,
    ...dataType(`Float64`),
  },
  "PUSHBACK STATE:index": {
    desc: `Type of pushback.`,
    units: `Enum`,
    ...dataType(`Int32`),
  },
  "PUSHBACK WAIT": {
    desc: `True if waiting for pushback.`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
};

const WAGONS = {
  "WAGON BACK LINK LENGTH": {
    desc: `The length of the link at the back of the vehicle used to attach a wagon behind.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "WAGON BACK LINK ORIENTATION": {
    desc: `The current orientation of the link at the back of the vehicle used to attach a wagon behind.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "WAGON BACK LINK START POSZ": {
    desc: `The "Z" axis position of the start of the link at the back of the vehicle used to attach a wagon behind, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "WAGON FRONT LINK LENGTH": {
    desc: `The length of the link at the front of the vehicle used to be attached as wagon.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
  "WAGON FRONT LINK ORIENTATION": {
    desc: `The current orientation of the link at the front of the vehicle used to be attached as wagon.`,
    units: `Degrees`,
    ...dataType(`Float64`),
  },
  "WAGON FRONT LINK START POSZ": {
    desc: `The "Z" axis position of the start of the link at the front of the vehicle used to be attached as wagon, relative to the ground.`,
    units: `Meters`,
    ...dataType(`Float64`),
  },
};

export const ServiceVariables = {
  ...BAGGAGE_LOADER,
  ...BOARDING_RAMP,
  ...CATERING_TRUCK,
  ...FUEL_TRUCK,
  ...GROUND_POWER_UNITS,
  ...JETWAY,
  ...MARSHALLER,
  ...PUSHBACK,
  ...WAGONS,
};
