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

  const off = api.on(SystemEvents.AIRPORTS, (data) => {
    console.log(data);
    off();
  });

  for (let i=0; i<2000; i++) {
    try {
      await api.get(`PLANE_LONGITUDE`, `NO_THANKS`);
    } catch (e) {
      console.log(`${i}: ${e.message}`);
    }
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
