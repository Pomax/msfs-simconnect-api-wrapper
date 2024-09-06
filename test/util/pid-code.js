import { PIDController } from "./pid-controller.js";

let elevatorPID = new PIDController(1, 0.5, 0);
elevatorPID.setTarget(0);

let aileronPID = new PIDController(1, 0, 1);
aileronPID.setTarget(0);

export function updateElevator(api, elevator, VS) {
  return;
  const recommendation = elevatorPID.update(VS);
  const correction = constrainMap(recommendation, -1000, 1000, -1, 1);
  api.set(`ELEVATOR_POSITION`, constrain(elevator + correction, -1, 1));
}

export function updateAileron(api, aileron, bank, turnRate, heading) {
  const hdiff = heading - 340;
  console.log(bank.toFixed(4), turnRate.toFixed(4), heading.toFixed(4), hdiff.toFixed(4));
  if ((hdiff < 0 && turnRate >= 0) || (hdiff > 0 && turnRate <= 0)) {
    const recommendation = aileronPID.update(hdiff);
    const correction = constrainMap(recommendation, -3, 3, -0.01, 0.01);
    api.set(`AILERON_POSITION`, constrain(aileron + correction, -1, 1));
  }
}

function map(v, ds, de, ts, te) {
  const d = de - ds;
  if (d === 0) return ts;
  return ts + ((v - ds) * (te - ts)) / d;
}

function constrain(v, m, M) {
  if (m > M) return constrain(v, M, m);
  return v > M ? M : v < m ? m : v;
}

function constrainMap(v, ds, de, ts, te) {
  return constrain(map(v, ds, de, ts, te), ts, te);
}
