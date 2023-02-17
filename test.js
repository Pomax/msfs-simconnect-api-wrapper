import { Airspeed, open, Protocol } from "node-simconnect";
import { MSFS_API } from "./msfs-api.js";
import { SystemEvents } from "./system-events/index.js";
import { SimVars } from "./simvars/index.js";
// import { SimEvents } from "./simevents/index.js";

(async function tryConnect() {
  try {
    connect();
  } catch (e) {
    console.log(`Connection failed: retrying in 5 seconds.`);
    setTimeout(tryConnect, 5000);
  }
})();

async function connect() {
  const api = new MSFS_API();
  await api.connect();

  const pauseOff = api.on(SystemEvents.PAUSED, () => {
    pauseOff();
    console.log(`sim paused`);
  });

  const unpauseOff = api.on(SystemEvents.UNPAUSED, () => {
    unpauseOff();
    console.log(`sim unpaused`);
  });

  runTests(api);
}

async function runTests(api) {
  await testSimVars(api);
  await testSimEvents(api);
  testInterval(api, () => {
    // process.exit(0);
  });
}

async function testSimVars(api) {
  const varKeys = Object.keys(SimVars);

  for (let i = 0; i < varKeys.length; i++) {
    const key = varKeys[i];
    console.log(`[${i}] ${key}`);
    console.log(await api.get(key.replace(`:index`, `:1`)), `\n`);
  }

  console.log(`Tested ${varKeys.length} sim vars.`);
}

async function testSimEvents(api) {
  let lock = await api.get(`TAILWHEEL_LOCK_ON`);
  await api.trigger(`TOGGLE_TAILWHEEL_LOCK`);
  let newlock = await api.get(`TAILWHEEL_LOCK_ON`);
  if (lock === newlock) {
    throw new Error(`TAILWHEEL_LOCK_ON did not change state!`);
  }
  console.log(`\nSim event trigger passed.\n`);
}

function testInterval(api, done) {
  const stop = api.schedule(
    (data) => {
      console.log(data);
    },
    500,
    "RUDDER POSITION",
    "PLANE LONGITUDE",
    "PLANE LATITUDE"
  );

  setTimeout(() => {
    stop();
    done();
  }, 5000);
}
