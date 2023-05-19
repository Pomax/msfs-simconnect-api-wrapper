import { define } from "./simvar-utils.js";

// data types
import { Int32, SInt32, Float64, SFloat64 } from "./simvar-utils.js";

// data units
import {
  Bool,
  Number,
  Degrees,
  Radians,
  PercentOver100,
  Position,
} from "./simvar-utils.js";

export const WASMGaugeAPITokenVariables = {
  "TRAILING EDGE FLAPS0 LEFT ANGLE": define(`TESTING`, Radians, Float64),
  "TRAILING EDGE FLAPS0 RIGHT ANGLE": define(`TESTING`, Radians, Float64),
};
