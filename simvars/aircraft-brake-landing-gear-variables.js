// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Brake_Landing_Gear_Variables.htm

import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Feet,
  Number,
  Enum,
  Radians,
  Percent,
  PercentOver100,
  Pounds,
  Position,
  RPM,
  Centimeters,
} from "./simvar-utils.js";

const BRAKES = {
  "ANTISKID BRAKES ACTIVE": define(
    `True if antiskid brakes active. This can be set using the AntiSkidActive parameter`,
    Bool,
    Int32
  ),
  "AUTOBRAKES ACTIVE": define(
    `Whether or not the AutoBrakes are currently active`,
    Bool,
    Int32
  ),
  "AUTO BRAKE SWITCH CB": define(`Auto brake switch position`, Number, Int32),
  "BRAKE DEPENDENT HYDRAULIC PRESSURE": define(
    `Brake dependent hydraulic pressure reading`,
    Pounds,
    Float64
  ),
  "BRAKE INDICATOR": define(`Brake on indication`, Position, Float64),
  "BRAKE LEFT POSITION": define(`Percent left brake`, Position, SFloat64),
  "BRAKE LEFT POSITION EX1": define(
    `Percent left brake, ignoring the effect of the parking brake`,
    Position,
    SFloat64
  ),
  "BRAKE PARKING INDICATOR": define(`Parking brake indicator`, Bool, Int32),
  "BRAKE PARKING POSITION": define(
    `Gets the parking brake position - either on (true) or off (false)`,
    Bool,
    Int32
  ),
  "BRAKE RIGHT POSITION": define(`Percent right brake`, Position, SFloat64),
  "BRAKE RIGHT POSITION EX1": define(
    `Percent right brake, ignoring the effect of the parking brake`,
    Position,
    SFloat64
  ),
  "REJECTED TAKEOFF BRAKES ACTIVE": define(
    `Whether or not the rejected takeoff brakes are currently active.`,
    Bool,
    Int32
  ),
  "TOE BRAKES AVAILABLE": define(
    `True if toe brakes are available`,
    Bool,
    Int32
  ),
};

const CONTACT_POINTS = {
  "CONTACT POINT COMPRESSION:index": define(
    `The percentage value representing the amount the contact point is compressed.`,
    Percent,
    Float64
  ),
  "CONTACT POINT IS ON GROUND:index": define(
    `Returns true if the indexed contact point is on the ground, or will return false otherwise.`,
    Bool,
    Int32
  ),
  "CONTACT POINT IS SKIDDING:index": define(
    `Returns true if the indexed contact point is skidding, or will return false otherwise.`,
    Bool,
    Int32
  ),
  "CONTACT POINT POSITION:index": define(
    `The currently extended position of the (retractable) contact point, expressed as a percentage.`,
    Position,
    Float64
  ),
  "CONTACT POINT SKIDDING FACTOR:index": define(
    `The skidding factor associated with the indexed contact point, from 0 to 1.`,
    PercentOver100,
    Float64,
    Float64
  ),
  "CONTACT POINT WATER DEPTH:index": define(
    `This returns the depth of the water for the indexed contact point.`,
    Feet,
    Float64
  ),
};

const LANDING_GEAR = {
  "AUX WHEEL ROTATION ANGLE": define(
    `Aux wheel rotation angle (rotation around the axis for the wheel)`,
    Radians,
    Float64
  ),
  "AUX WHEEL RPM": define(`Rpm of fourth set of gear wheels`, RPM, Float64),
  "CENTER WHEEL ROTATION ANGLE": define(
    `Center wheel rotation angle (rotation around the axis for the wheel)`,
    Radians,
    Float64
  ),
  "CENTER WHEEL RPM": define(`Center landing gear rpm`, RPM, Float64),
  "GEAR ANIMATION POSITION:index": define(
    `Percent indexed gear animation extended`,
    Percent,
    Float64
  ),
  "GEAR AUX POSITION": define(
    `Percent auxiliary gear extended`,
    PercentOver100,
    SFloat64
  ),
  "GEAR AUX STEER ANGLE": define(
    `Aux wheel angle, negative to the left, positive to the right. The aux wheel is the fourth set of landing gear, sometimes used on helicopters`,
    Radians,
    Float64
  ),
  "GEAR AUX STEER ANGLE PCT": define(
    `Aux steer angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "GEAR CENTER POSITION": define(
    `Percent center gear extended`,
    PercentOver100,
    SFloat64
  ),
  "GEAR CENTER STEER ANGLE": define(
    `Center wheel angle, negative to the left, positive to the right`,
    Radians,
    Float64
  ),
  "GEAR CENTER STEER ANGLE PCT": define(
    `Center steer angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "GEAR DAMAGE BY SPEED": define(
    `True if gear has been damaged by excessive speed`,
    Bool,
    Int32
  ),
  "GEAR EMERGENCY HANDLE POSITION": define(
    `True if gear emergency handle applied`,
    Bool,
    Int32
  ),
  "GEAR HANDLE POSITION": define(
    `The gear handle position, where 0 means the handle is retracted and 1 is the handle fully applied`,
    PercentOver100,
    SFloat64
  ),
  "GEAR HYDRAULIC PRESSURE": define(`Gear hydraulic pressure`, Pounds, Float64),
  "GEAR IS ON GROUND:index": define(
    `True if the gear is on the ground`,
    Bool,
    Int32
  ),
  "GEAR IS SKIDDING:index": define(`True if the gear is skidding`, Bool, Int32),
  "GEAR LEFT POSITION": define(
    `Percent left gear extended`,
    PercentOver100,
    SFloat64
  ),
  "GEAR LEFT STEER ANGLE": define(
    `Left wheel angle, negative to the left, positive to the right`,
    Radians,
    Float64
  ),
  "GEAR LEFT STEER ANGLE PCT": define(
    `Left steer angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "GEAR POSITION:index": define(`Position of landing gear`, Enum, SInt32),
  "GEAR RIGHT POSITION": define(
    `Percent right gear extended`,
    PercentOver100,
    SFloat64
  ),
  "GEAR RIGHT STEER ANGLE": define(
    `Right wheel angle, negative to the left, positive to the right`,
    Radians,
    Float64
  ),
  "GEAR RIGHT STEER ANGLE PCT": define(
    `Right steer angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "GEAR SPEED EXCEEDED": define(
    `True if safe speed limit for gear exceeded`,
    Bool,
    Int32
  ),
  "GEAR STEER ANGLE:index": define(
    `Alternative method of getting the steer angle`,
    Radians,
    Float64
  ),
  "GEAR STEER ANGLE PCT:index": define(
    `Alternative method of getting steer angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "GEAR TOTAL PCT EXTENDED": define(
    `Percent total gear extended`,
    Percent,
    Float64
  ),
  "GEAR WARNING:index": define(`Gear warnings`, Enum, Float64, Float64, Int32),
  "GEAR WATER DEPTH": define(
    `The depth of the gear in the water`,
    Centimeters,
    Float64
  ),
  "IS GEAR FLOATS": define(`True if landing gear are floats`, Bool, Int32),
  "IS GEAR RETRACTABLE": define(`True if gear can be retracted`, Bool, Int32),
  "IS GEAR SKIDS": define(`True if landing gear is skids`, Bool, Int32),
  "IS GEAR SKIS": define(`True if landing gear is skis`, Bool, Int32),
  "IS GEAR WHEELS": define(`True if landing gear is wheels`, Bool, Int32),
  "LEFT WHEEL ROTATION ANGLE": define(
    `Left wheel rotation angle (rotation around the axis for the wheel)`,
    Radians,
    Float64
  ),
  "LEFT WHEEL RPM": define(`Left landing gear rpm`, RPM, Float64),
  "NOSEWHEEL LOCK ON": define(
    `True if the nosewheel lock is engaged. This can be set using the NosewheelLock parameter.`,
    Bool,
    Int32
  ),
  "NOSEWHEEL MAX STEERING ANGLE": define(
    `Can be used to get or set the maximum permitted steering angle for the nose wheel of the aircraft`,
    Radians,
    SFloat64
  ),
  "RETRACT FLOAT SWITCH": define(
    `True if retract float switch on`,
    Bool,
    Int32
  ),
  "RETRACT LEFT FLOAT EXTENDED": define(
    `If aircraft has retractable floats`,
    Percent,
    Float64
  ),
  "RETRACT RIGHT FLOAT EXTENDED": define(
    `If aircraft has retractable floats`,
    Percent,
    Float64
  ),
  "RIGHT WHEEL ROTATION ANGLE": define(
    `Right wheel rotation angle (rotation around the axis for the wheel)`,
    Radians,
    Float64
  ),
  "RIGHT WHEEL RPM": define(`Right landing gear rpm.`, RPM, Float64),
  "STEER INPUT CONTROL": define(
    `Position of steering tiller`,
    PercentOver100,
    Float64
  ),
  "TAILWHEEL LOCK ON": define(
    `True if tailwheel lock applied. This can be set using the TailwheelLock parameter.`,
    Bool,
    Int32
  ),
  "WATER LEFT RUDDER EXTENDED": define(`Percent extended`, Percent, Float64),
  "WATER LEFT RUDDER STEER ANGLE": define(
    `Water left rudder angle, negative to the left, positive to the right`,
    PercentOver100,
    Float64
  ),
  "WATER LEFT RUDDER STEER ANGLE PCT": define(
    `Water left rudder angle as a percentage`,
    PercentOver100,
    Float64
  ),
  "WATER RIGHT RUDDER EXTENDED": define(`Percent extended`, Percent, Float64),
  "WATER RIGHT RUDDER STEER ANGLE": define(
    `Water right rudder angle, negative to the left, positive to the right`,
    PercentOver100,
    Float64
  ),
  "WATER RIGHT RUDDER STEER ANGLE PCT": define(
    `Water right rudder as a percentage`,
    PercentOver100,
    Float64
  ),
  "WATER RUDDER HANDLE POSITION": define(
    `Position of the water rudder handle (0 handle retracted, 1 rudder handle applied)`,
    PercentOver100,
    SFloat64
  ),
  "WHEEL ROTATION ANGLE:index": define(
    `Wheel rotation angle (rotation around the axis for the wheel)`,
    Radians,
    Float64
  ),
  "WHEEL RPM:index": define(`Wheel rpm`, RPM, Float64),
};

export const AircraftBakeLandingGearVariables = {
  ...BRAKES,
  ...CONTACT_POINTS,
  ...LANDING_GEAR,
};
