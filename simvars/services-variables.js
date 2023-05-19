// See https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Services_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, Float64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Knots,
  Feet,
  Degrees,
  Enum,
  Radians,
  Percent,
  PercentOver100,
  Meters,
  MetersPerSecond,
} from "./simvar-utils.js";

const BAGGAGE_LOADER = {
  "BAGGAGELOADER ANGLE CURRENT": define(
    `Current angle of the baggage loader ramp, relative to the ground.`,
    Degrees,
    Float64
  ),
  "BAGGAGELOADER ANGLE TARGET": define(
    `Target angle of the baggage loader ramp, relative to the ground.`,
    Degrees,
    Float64
  ),
  "BAGGAGELOADER END RAMP Y": define(
    `"Y" axis position of the end of the baggage loader ramp, relative to the ground.`,
    Meters,
    Float64
  ),
  "BAGGAGELOADER END RAMP Z": define(
    `"Z" axis position of the end of the baggage loader ramp, relative to the ground.`,
    Meters,
    Float64
  ),
  "BAGGAGELOADER PIVOT Y": define(
    `"Y" axis position of the baggage loader ramp pivot, relative to the ground.`,
    Meters,
    Float64
  ),
  "BAGGAGELOADER PIVOT Z": define(
    `"Z" axis position of the baggage loader ramp pivot, relative to the ground.`,
    Meters,
    Float64
  ),
};

const BOARDING_RAMP = {
  "BOARDINGRAMP ELEVATION CURRENT": define(
    `The current altitude AGL of the top of the boarding ramp stairs.`,
    Meters,
    Float64
  ),
  "BOARDINGRAMP ELEVATION TARGET": define(
    `The target altitude AGL of the top of the boarding ramp stairs.`,
    Meters,
    Float64
  ),
  "BOARDINGRAMP END POSITION Y": define(
    `The "Y" axis position of the top of the boarding ramp stairs when extended at maximal capacity, relative to the ground.`,
    Meters,
    Float64
  ),
  "BOARDINGRAMP END POSITION Z": define(
    `The "Z" axis position of the top of the boarding ramp stairs when extended at maximal capacity, relative to the ground.`,
    Meters,
    Float64
  ),
  "BOARDINGRAMP ORIENTATION CURRENT": define(
    `The current orientation of the boarding ramp stairs, where 0 is at rest and 1 is suited for boarding.`,
    PercentOver100,
    Float64
  ),
  "BOARDINGRAMP ORIENTATION TARGET": define(
    `The target orientation of of the boarding ramp stairs, where 0 is at rest and 1 is suited for boarding.`,
    PercentOver100,
    Float64
  ),
  "BOARDINGRAMP START POSITION Y": define(
    `The "Y" axis position of the top of the boarding ramp stairs when at minimal extension, relative to the ground.`,
    Meters,
    Float64
  ),
  "BOARDINGRAMP START POSITION Z": define(
    `The "Z" axis position of the top of the boarding ramp stairs when at minimal extension, relative to the ground.`,
    Meters,
    Float64
  ),
};

const CATERING_TRUCK = {
  "CATERINGTRUCK AIRCRAFT DOOR CONTACT OFFSET Z": define(
    `The "Z" axis position of the point of contact between the catering truck and the bottom of the aircraft door, relative to the ground.`,
    Meters,
    Float64
  ),
  "CATERINGTRUCK ELEVATION CURRENT": define(
    `The current altitude AGL of the bottom of the catering truck container.`,
    Meters,
    Float64
  ),
  "CATERINGTRUCK ELEVATION TARGET": define(
    `The target altitude AGL of the bottom of the catering truck container.`,
    Meters,
    Float64
  ),
  "CATERINGTRUCK OPENING CURRENT": define(
    `The current state of the catering truck when opening the container and deploying the bridge, where 0 is fully closed and 1 is fully opened and deployed.`,
    PercentOver100,
    Float64
  ),
  "CATERINGTRUCK OPENING TARGET": define(
    `The target state of the catering truck the container is opene and the bridge deployed, where 0 is fully closed and 1 is fully opened and deployed.`,
    PercentOver100,
    Float64
  ),
};

const FUEL_TRUCK = {
  "FUELTRUCK HOSE DEPLOYED": define(
    `The current deployment amount of the fuel truck hose. Currently can only be set to 0 (not deployed) and 1 (deployed).`,
    PercentOver100,
    Float64
  ),
  "FUELTRUCK HOSE END POSX": define(
    `The "X" axis position of the end of the fuel truck hose when fully deployed, relative to the ground.`,
    Meters,
    Float64
  ),
  "FUELTRUCK HOSE END POSZ": define(
    `The "Z" axis position of the end of the fuel truck hose when fully deployed, relative to the ground.`,
    Meters,
    Float64
  ),
  "FUELTRUCK HOSE END RELATIVE HEADING": define(
    `The heading of the end of the fuel truck hose, relative to the vehicle heading.`,
    Degrees,
    Float64
  ),
};

const GROUND_POWER_UNITS = {
  "GROUNDPOWERUNIT HOSE DEPLOYED": define(
    `The current deployment amount of the ground power unit hose. Currently can only be set to 0 (not deployed) and 1 (deployed).`,
    PercentOver100,
    Float64
  ),
  "GROUNDPOWERUNIT HOSE END POSX": define(
    `The "X" axis position of the end of the ground power unit hose when fully deployed, relative to the ground.`,
    Meters,
    Float64
  ),
  "GROUNDPOWERUNIT HOSE END POSZ": define(
    `The "Z" axis position of the end of the ground power unit hose when fully deployed, relative to the ground.`,
    Meters,
    Float64
  ),
  "GROUNDPOWERUNIT HOSE END RELATIVE HEADING": define(
    `The heading of the end of the ground power unit hose, relative to the vehicle heading.`,
    Degrees,
    Float64
  ),
};

const JETWAY = {
  "JETWAY HOOD LEFT BEND": define(
    `The target position for the left bend animation of the jetway hood.`,
    Percent,
    Float64
  ),
  "JETWAY HOOD LEFT DEPLOYMENT": define(
    `The target angle for the left deployment animation of the jetway hood, where 0 is considered vertical.`,
    Degrees,
    Float64
  ),
  "JETWAY HOOD RIGHT BEND": define(
    `The target position for the right bend animation of the jetway hood.`,
    Percent,
    Float64
  ),
  "JETWAY HOOD RIGHT DEPLOYMENT": define(
    `The target angle for the right deployment animation of the jetway hood, where 0 is considered vertical.`,
    Degrees,
    Float64
  ),
  "JETWAY HOOD TOP HORIZONTAL": define(
    `Target position for the top horizontal animation of the jetway hood. Values can be between -100% and 100%.`,
    Percent,
    Float64
  ),
  "JETWAY HOOD TOP VERTICAL": define(
    `Target position for the top vertical animation of the jetway hood. Values can be between -100% and 100%.`,
    Percent,
    Float64
  ),
  "JETWAY MOVING": define(
    `This will be 1 (TRUE) id the jetway body is currently moving (it will not include checks on hood animation).`,
    Bool,
    Int32
  ),
  "JETWAY WHEEL ORIENTATION CURRENT": define(
    `The current angle of the jetway wheels.`,
    Degrees,
    Float64
  ),
  "JETWAY WHEEL ORIENTATION TARGET": define(
    `The (approximate) target angle for the jetway wheels.`,
    Degrees,
    Float64
  ),
  "JETWAY WHEEL SPEED": define(
    `The current speed of the jetway wheels.`,
    MetersPerSecond,
    Float64
  ),
};

const MARSHALLER = {
  "MARSHALLER AIRCRAFT DIRECTION PARKINGSPACE": define(
    `Currently not used in the simulation.`,
    Degrees,
    Float64
  ),
  "MARSHALLER AIRCRAFT DISTANCE": define(
    `The distance between the Marshaller and the aircraft.`,
    Meters,
    Float64
  ),
  "MARSHALLER AIRCRAFT DISTANCE DIRECTION X PARKINGSPACE": define(
    `Position on the X axis of the aircraft in the parking space (negative means the aircraft is on the left side and positive the right side).`,
    Meters,
    Float64
  ),
  "MARSHALLER AIRCRAFT DISTANCE DIRECTION Z PARKINGSPACE": define(
    `Position on the Z axis of the aircraft in the parking space (negative means the aircraft is behind the parking space and positive is in front of the parking space).`,
    Meters,
    Float64
  ),
  "MARSHALLER AIRCRAFT ENGINE SHUTDOWN": define(
    `True if the engine(s) of the aircraft is (are) shut down.`,
    Bool,
    Int32
  ),
  "MARSHALLER AIRCRAFT HEADING PARKINGSPACE": define(
    `Angle between the direction of the aircraft and the direction of the parking place.`,
    Degrees,
    Float64
  ),
  "MARSHALLER AIRCRAFT PROJECTION POINT PARKINGSPACE": define(
    `Value in Z axis of the projection from the aircraft position following the heading of the aircraft.  `,
    Meters,
    Float64
  ),
  "MARSHALLER AIRCRAFT VELOCITY": define(
    `The velocity of the aircraft.`,
    Knots,
    Float64
  ),
};

const PUSHBACK = {
  "PUSHBACK ANGLE": define(
    `Pushback angle (the heading of the tug).`,
    Radians,
    Float64
  ),
  "PUSHBACK ATTACHED": define(
    `True if this vehicle is attached to an aircraft.`,
    Bool,
    Int32
  ),
  "PUSHBACK AVAILABLE": define(
    `True if a push back is available on the parking space.`,
    Bool,
    Int32
  ),
  "PUSHBACK CONTACTX": define(
    `The towpoint position, relative to the aircrafts datum reference point.`,
    Feet,
    Float64
  ),
  "PUSHBACK CONTACTY": define(
    `Pushback contact position in vertical direction.`,
    Feet,
    Float64
  ),
  "PUSHBACK CONTACTZ": define(
    `Pushback contact position in fore/aft direction.`,
    Feet,
    Float64
  ),
  "PUSHBACK STATE:index": define(`Type of pushback.`, Enum, Int32),
  "PUSHBACK WAIT": define(`True if waiting for pushback.`, Bool, Int32),
};

const WAGONS = {
  "WAGON BACK LINK LENGTH": define(
    `The length of the link at the back of the vehicle used to attach a wagon behind.`,
    Meters,
    Float64
  ),
  "WAGON BACK LINK ORIENTATION": define(
    `The current orientation of the link at the back of the vehicle used to attach a wagon behind.`,
    Degrees,
    Float64
  ),
  "WAGON BACK LINK START POSZ": define(
    `The "Z" axis position of the start of the link at the back of the vehicle used to attach a wagon behind, relative to the ground.`,
    Meters,
    Float64
  ),
  "WAGON FRONT LINK LENGTH": define(
    `The length of the link at the front of the vehicle used to be attached as wagon.`,
    Meters,
    Float64
  ),
  "WAGON FRONT LINK ORIENTATION": define(
    `The current orientation of the link at the front of the vehicle used to be attached as wagon.`,
    Degrees,
    Float64
  ),
  "WAGON FRONT LINK START POSZ": define(
    `The "Z" axis position of the start of the link at the front of the vehicle used to be attached as wagon, relative to the ground.`,
    Meters,
    Float64
  ),
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
