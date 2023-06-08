import { SystemEvents, MSFS_API } from "./msfs-api.js";
import { SimVars } from "./simvars/index.js";

const api = new MSFS_API();

(async function tryConnect() {
  api.connect({
    retries: Infinity,
    retryInterval: 5,
    onConnect: (nodeSimconnectHandle) => connect(nodeSimconnectHandle),
    onRetry: (_retries, interval) =>
      console.log(`Connection failed: retrying in ${interval} seconds.`),
  });
})();

async function connect(handle) {
  const pauseOff = api.on(SystemEvents.PAUSED, () => {
    pauseOff();
    console.log(`sim paused`);
  });

  const unpauseOff = api.on(SystemEvents.UNPAUSED, () => {
    unpauseOff();
    console.log(`sim unpaused`);
  });

  const { NEARBY_AIRPORTS } = await api.get(`NEARBY_AIRPORTS`);
  console.log(`${NEARBY_AIRPORTS.length} nearby airports`);

  const { ALL_AIRPORTS } = await api.get(`ALL_AIRPORTS`);
  console.log(`${ALL_AIRPORTS.length} total airports on the planet`);

  const airportData = await api.get(`AIRPORT:CYYJ`);
  console.log(JSON.stringify(airportData, null, 2));

  const inRange = api.on(SystemEvents.AIRPORTS_IN_RANGE, (data) => {
    console.log(data);
    inRange();
  });

  const outOfRange = api.on(SystemEvents.AIRPORTS_OUT_OF_RANGE, (data) => {
    console.log(data);
    outOfRange();
  });

  try {
    await api.get(`PLANE_LONGITUDE`, `NO_THANKS`);
  } catch (e) {
    console.log(e.message);
  }

  runTests(api);
}

async function runTests(api) {
  await testSimVars(api);
  await testSimEvents(api);
  testInterval(api, () => {
    process.exit(0);
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
