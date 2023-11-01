import { define } from "./simvar-utils.js";

// data types
import { Float64, Int32 } from "./simvar-utils.js";

// data units
import { Number, Seconds, Bool } from "./simvar-utils.js";

export const EnvironmentVariables = {
  "ABSOLUTE TIME": define(
    `This returns the seconds since 12:00 am 1/1/1AD Zulu Time.`,
    Seconds,
    Float64
  ),
  "ZULU TIME": define(
    `This returns the seconds since midnight (00:00 Zulu Time) on the current day.`,
    Seconds,
    Float64
  ),
  "ZULU DAY OF WEEK": define(
    `This returns the current Zulu Time day of the week as an integer value between 0 and 6 (inclusive), where 0 is Monday and 6 is Sunday.`,
    Number,
    Float64
  ),
  "ZULU DAY OF MONTH": define(
    `This returns the current Zulu Time day of the month as an integer value between 1 and 31 (inclusive).`,
    Number,
    Float64
  ),
  "ZULU MONTH OF YEAR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "ZULU DAY OF YEAR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "ZULU YEAR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "ZULU SUNRISE TIME": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Seconds,
    Float64
  ),
  "ZULU SUNSET TIME": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Seconds,
    Float64
  ),
  "LOCAL TIME": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Seconds,
    Float64
  ),
  "LOCAL DAY OF WEEK": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "LOCAL DAY OF MONTH": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "LOCAL MONTH OF YEAR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "LOCAL DAY OF YEAR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "LOCAL YEAR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "TIME ZONE OFFSET": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Seconds,
    Float64
  ),
  "TIME OF DAY": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "TOOLTIP UNITS": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "UNITS OF MEASURE": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "SIMULATION RATE": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "SIMULATION TIME": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Seconds,
    Float64
  ),
  "SIMULATION DELTA TIME": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Number,
    Float64
  ),
  "IS IN VR": define(
    `This returns the current Zulu Time month of the year as an integer value between 1 and 12 (inclusive), where 1 is January and 12 is December.`,
    Bool,
    Int32
  ),
};
