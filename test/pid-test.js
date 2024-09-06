import { SimConnectPeriod, MSFS_API } from "../msfs-api.js";
import { watch } from "./util/reload-watcher.js";

let updateElevator, updateAileron;
await watch(import.meta.dirname, "util/pid-code.js", (lib) => {
  updateElevator = lib.updateElevator;
  updateAileron = lib.updateAileron;
});

let stop = () => {};
const api = new MSFS_API();

(async function tryConnect() {
  console.log(`Testing call prevention prior to connection`);
  console.log(`Awaiting connection`);
  api.connect({
    autoReconnect: true,
    retries: Infinity,
    retryInterval: 5,
    onConnect: connect,
    onRetry: (_retries, interval) =>
      console.log(`Connection failed: retrying in ${interval} seconds.`),
  });
})();

async function connect() {
  console.log(`MSFS connected`);

  let time = Date.now();

  // Ask simconnect to update us on the state of
  // a small set of vars every frame.
  stop = api.periodic(
    (data) => {
      // But let's only run code (at most) 30 times a second.
      const now = Date.now();
      if (now - time < 30) return;
      time = now;

      console.log(`.`);

      // Also, don't run if the AP is on.
      if (data.AUTOPILOT_MASTER === 1) return;

      // VS0 mode
      {
        const elevator = data.AILERON_POSITION;
        const VS = data.VERTICAL_SPEED * 60; // fpm;
        updateElevator(api, elevator, VS);
      }

      // LVL mode
      {
        const aileron = data.AILERON_POSITION;
        const bank = (data.PLANE_BANK_DEGREES * 180) / Math.PI;
        const turnRate = (data.TURN_INDICATOR_RATE * 180) / Math.PI;
        const heading = (data.PLANE_HEADING_DEGREES_MAGNETIC * 180) / Math.PI;
        updateAileron(api, aileron, bank, turnRate, heading);
      }
    },
    SimConnectPeriod.SIM_FRAME,
    `AUTOPILOT_MASTER`,
    `AILERON_POSITION`,
    `ELEVATOR_POSITION`,
    `PLANE_BANK_DEGREES`,
    `TURN_INDICATOR_RATE`,
    `PLANE_HEADING_DEGREES_MAGNETIC`,
    `VERTICAL_SPEED`
  );
}

process.on("SIGINT", function () {
  console.log(`running stop first...`);
  stop();
  setInterval(() => {
    process.exit();
  }, 1000);
});
