// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Aircraft_SimVars/Aircraft_Brake_Landing_Gear_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const BRAKES = {
  "ANTISKID BRAKES ACTIVE": {
    desc:`True if antiskid brakes active. This can be set using the AntiSkidActive parameter`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "AUTOBRAKES ACTIVE": {
    desc:`Whether or not the AutoBrakes are currently active`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "AUTO BRAKE SWITCH CB": {
    desc:`Auto brake switch position`,
    units:`number`,
    ...dataType(`Int32`),
  },
  "BRAKE DEPENDENT HYDRAULIC PRESSURE": {
    desc:`Brake dependent hydraulic pressure reading`,
    units:`pounds`,
    ...dataType(`Float64`),
  },
  "BRAKE INDICATOR": {
    desc:`Brake on indication`,
    units:`position`,
    ...dataType(`Float64`),
  },
  "BRAKE LEFT POSITION": {
    desc:`Percent left brake`,
    units:`position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "BRAKE LEFT POSITION EX1": {
    desc:`Percent left brake, ignoring the effect of the parking brake`,
    units:`position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "BRAKE PARKING INDICATOR": {
    desc:`Parking brake indicator`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "BRAKE PARKING POSITION": {
    desc:`Gets the parking brake position - either on (true) or off (false)`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "BRAKE RIGHT POSITION": {
    desc:`Percent right brake`,
    units:`position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "BRAKE RIGHT POSITION EX1": {
    desc:`Percent right brake, ignoring the effect of the parking brake`,
    units:`position`,
    ...dataType(`Float64`, SETTABLE),
  },
  "REJECTED TAKEOFF BRAKES ACTIVE": {
    desc:`Whether or not the rejected takeoff brakes are currently active.`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "TOE BRAKES AVAILABLE": {
    desc:`True if toe brakes are available`,
    units:`bool`,
    ...dataType(`Int32`),
  },
};

const CONTACT_POINTS = {
  "CONTACT POINT COMPRESSION:index": {
    desc:`The percentage value representing the amount the contact point is compressed.`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "CONTACT POINT IS ON GROUND:index": {
    desc:`Returns true if the indexed contact point is on the ground, or will return false otherwise.`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "CONTACT POINT IS SKIDDING:index": {
    desc:`Returns true if the indexed contact point is skidding, or will return false otherwise.`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "CONTACT POINT POSITION:index": {
    desc:`The currently extended position of the (retractable) contact point, expressed as a percentage.`,
    units:`position`,
    ...dataType(`Float64`),
  },
  "CONTACT POINT SKIDDING FACTOR:index": {
    desc:`The skidding factor associated with the indexed contact point, from 0 to 1.`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
    ...dataType(`Float64`),
  },
  "CONTACT POINT WATER DEPTH:index": {
    desc:`This returns the depth of the water for the indexed contact point.`,
    units:`feet`,
    ...dataType(`Float64`),
  },
};

const LANDING_GEAR = {
  "AUX WHEEL ROTATION ANGLE": {
    desc:`Aux wheel rotation angle (rotation around the axis for the wheel)`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "AUX WHEEL RPM": {
    desc:`Rpm of fourth set of gear wheels`,
    units:`RPM`,
    ...dataType(`Float64`),
  },
  "CENTER WHEEL ROTATION ANGLE": {
    desc:`Center wheel rotation angle (rotation around the axis for the wheel)`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "CENTER WHEEL RPM": {
    desc:`Center landing gear rpm`,
    units:`RPM`,
    ...dataType(`Float64`),
  },
  "GEAR ANIMATION POSITION:index": {
    desc:`Percent indexed gear animation extended`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "GEAR AUX POSITION": {
    desc:`Percent auxiliary gear extended`,
    units:`percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GEAR AUX STEER ANGLE": {
    desc:`Aux wheel angle, negative to the left, positive to the right. The aux wheel is the fourth set of landing gear, sometimes used on helicopters`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "GEAR AUX STEER ANGLE PCT": {
    desc:`Aux steer angle as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "GEAR CENTER POSITION": {
    desc:`Percent center gear extended`,
    units:`percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GEAR CENTER STEER ANGLE": {
    desc:`Center wheel angle, negative to the left, positive to the right`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "GEAR CENTER STEER ANGLE PCT": {
    desc:`Center steer angle as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "GEAR DAMAGE BY SPEED": {
    desc:`True if gear has been damaged by excessive speed`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "GEAR EMERGENCY HANDLE POSITION": {
    desc:`True if gear emergency handle applied`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "GEAR HANDLE POSITION": {
    desc:`The gear handle position, where 0 means the handle is retracted and 1 is the handle fully applied`,
    units:`percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GEAR HYDRAULIC PRESSURE": {
    desc:`Gear hydraulic pressure`,
    units:`pounds`,
    ...dataType(`Float64`),
  },
  "GEAR IS ON GROUND:index": {
    desc:`True if the gear is on the ground`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "GEAR IS SKIDDING:index": {
    desc:`True if the gear is skidding`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "GEAR LEFT POSITION": {
    desc:`Percent left gear extended`,
    units:`percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GEAR LEFT STEER ANGLE": {
    desc:`Left wheel angle, negative to the left, positive to the right`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "GEAR LEFT STEER ANGLE PCT": {
    desc:`Left steer angle as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "GEAR POSITION:index": {
    desc:`Position of landing gear`,
    units:`enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GEAR RIGHT POSITION": {
    desc:`Percent right gear extended`,
    units:`percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "GEAR RIGHT STEER ANGLE": {
    desc:`Right wheel angle, negative to the left, positive to the right`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "GEAR RIGHT STEER ANGLE PCT": {
    desc:`Right steer angle as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "GEAR SPEED EXCEEDED": {
    desc:`True if safe speed limit for gear exceeded`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "GEAR STEER ANGLE:index": {
    desc:`Alternative method of getting the steer angle`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "GEAR STEER ANGLE PCT:index": {
    desc:`Alternative method of getting steer angle as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "GEAR TOTAL PCT EXTENDED": {
    desc:`Percent total gear extended`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "GEAR WARNING:index": {
    desc:`Gear warnings`,
    units:`enum`,    ...dataType(`Float64`),    ...dataType(`Float64`),
    ...dataType(`Int32`),
  },
  "GEAR WATER DEPTH": {
    desc:`The depth of the gear in the water`,
    units:`centimeters`,
    ...dataType(`Float64`),
  },
  "IS GEAR FLOATS": {
    desc:`True if landing gear are floats`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "IS GEAR RETRACTABLE": {
    desc:`True if gear can be retracted`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "IS GEAR SKIDS": {
    desc:`True if landing gear is skids`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "IS GEAR SKIS": {
    desc:`True if landing gear is skis`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "IS GEAR WHEELS": {
    desc:`True if landing gear is wheels`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "LEFT WHEEL ROTATION ANGLE": {
    desc:`Left wheel rotation angle (rotation around the axis for the wheel)`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "LEFT WHEEL RPM": {
    desc:`Left landing gear rpm`,
    units:`RPM`,
    ...dataType(`Float64`),
  },
  "NOSEWHEEL LOCK ON": {
    desc:`True if the nosewheel lock is engaged. This can be set using the NosewheelLock parameter.`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "NOSEWHEEL MAX STEERING ANGLE": {
    desc:`Can be used to get or set the maximum permitted steering angle for the nose wheel of the aircraft`,
    units:`radians`,
    ...dataType(`Float64`, SETTABLE),
  },
  "RETRACT FLOAT SWITCH": {
    desc:`True if retract float switch on`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "RETRACT LEFT FLOAT EXTENDED": {
    desc:`If aircraft has retractable floats`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "RETRACT RIGHT FLOAT EXTENDED": {
    desc:`If aircraft has retractable floats`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "RIGHT WHEEL ROTATION ANGLE": {
    desc:`Right wheel rotation angle (rotation around the axis for the wheel)`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "RIGHT WHEEL RPM": {
    desc:`Right landing gear rpm.`,
    units:`RPM`,
    ...dataType(`Float64`),
  },
  "STEER INPUT CONTROL": {
    desc:`Position of steering tiller`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "TAILWHEEL LOCK ON": {
    desc:`True if tailwheel lock applied. This can be set using the TailwheelLock parameter.`,
    units:`bool`,
    ...dataType(`Int32`),
  },
  "WATER LEFT RUDDER EXTENDED": {
    desc:`Percent extended`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "WATER LEFT RUDDER STEER ANGLE": {
    desc:`Water left rudder angle, negative to the left, positive to the right`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "WATER LEFT RUDDER STEER ANGLE PCT": {
    desc:`Water left rudder angle as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "WATER RIGHT RUDDER EXTENDED": {
    desc:`Percent extended`,
    units:`percent`,
    ...dataType(`Float64`),
  },
  "WATER RIGHT RUDDER STEER ANGLE": {
    desc:`Water right rudder angle, negative to the left, positive to the right`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "WATER RIGHT RUDDER STEER ANGLE PCT": {
    desc:`Water right rudder as a percentage`,
    units:`percent Over 100`,
    ...dataType(`Float64`),
  },
  "WATER RUDDER HANDLE POSITION": {
    desc:`Position of the water rudder handle (0 handle retracted, 1 rudder handle applied)`,
    units:`percent Over 100`,
    ...dataType(`Float64`, SETTABLE),
  },
  "WHEEL ROTATION ANGLE:index": {
    desc:`Wheel rotation angle (rotation around the axis for the wheel)`,
    units:`radians`,
    ...dataType(`Float64`),
  },
  "WHEEL RPM:index": {
    desc:`Wheel rpm`,
    units:`RPM`,
    ...dataType(`Float64`),
  },
};

export const AircraftBakeLandingGearVariables = {
  ...BRAKES,
  ...CONTACT_POINTS,
  ...LANDING_GEAR,
};
