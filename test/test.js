import {
  SystemEvents,
  MSFS_API,
  MSFS_NOT_CONNECTED,
  loadAirportDB,
} from "../msfs-api.js";
import { SimVars } from "../simvars/index.js";

const api = new MSFS_API();

/**
 * ...docs go here...
 */
(async function tryConnect() {
  console.log(`Testing call prevention prior to connection`);
  await testAPriori();
  console.log(`testing direct airport access`);
  const airports = loadAirportDB();
  console.log(`${airports.length} airports loaded directly`);
  // find all airports near Denver
  const [lat, long] = [39.7642219, -105.0202604];
  const start = performance.now();
  const denver = airports.filter((a) => {
    const { latitude: y, longitude: x } = a;
    return lat - 0.5 < y && y < lat + 0.5 && long - 0.5 < x && x < long + 0.5;
  });
  const end = performance.now();
  console.log(`found ${denver.length} airports found in a 1 arc degree rect around Denver in ${end - start}ms`);
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

/**
 * ...docs go here...
 */
async function testAPriori() {
  try {
    await Promise.all(
      [`on`, `trigger`, `get`, `set`, `schedule`].map(async (fname) => {
        try {
          await api[fname](`the function input should not matter`);
          throw new Error(
            `"${fname}" was allowed through, despite there not being a connection yet.`
          );
        } catch (e) {
          if (e.message !== MSFS_NOT_CONNECTED) throw e;
        }
      })
    );
  } catch (e) {
    throw e;
  }
}

/**
 * ...docs go here...
 * @param {*} handle
 */
async function connect(handle) {
  console.log(`MSFS connected`);

  const { CAMERA_STATE: camera } = await api.get(`CAMERA_STATE`);
  if (camera > 10) {
    throw new Error(`MSFS needs to be "in game" for the tests to run\n`);
  }

  const pauseOff = api.on(SystemEvents.PAUSED, () => {
    pauseOff();
    console.log(`sim paused`);
  });

  const unpauseOff = api.on(SystemEvents.UNPAUSED, () => {
    unpauseOff();
    console.log(`sim unpaused`);
  });

  const { ALL_AIRPORTS } = await api.get(`ALL_AIRPORTS`);
  console.log(`${ALL_AIRPORTS.length} total airports on the planet`);

  const { NEARBY_AIRPORTS } = await api.get(`NEARBY_AIRPORTS`);
  console.log(`${NEARBY_AIRPORTS.length} airports in local reality bubble`);

  const radius = 10;
  const near = await api.get(`NEARBY_AIRPORTS:${radius}`);
  const nearList = near[`NEARBY_AIRPORTS:${radius}`];
  console.log(
    `${nearList.length} airports found within a ${radius}NM radius around the plane`
  );

  console.log(`getting ${NEARBY_AIRPORTS[0].icao}`);
  const airportData = await api.get(`AIRPORT:${NEARBY_AIRPORTS[0].icao}`);
  console.log(`result:`, JSON.stringify(airportData, null, 2));

  api.on(SystemEvents.AIRPORTS_IN_RANGE, (data) => {
    console.log(`New in range:`, data);
  });

  api.on(SystemEvents.AIRPORTS_OUT_OF_RANGE, (data) => {
    console.log(`Out of range:`, data);
  });

  try {
    console.log(`Quick "unknown var" test`);
    await api.get(`PLANE_LONGITUDE`, `NO_THANKS`);
  } catch (e) {
    if (e.message !== `Cannot get SimVar: "NO THANKS" unknown.`) throw e;
  }

  runTests(api);
}

/**
 * ...docs go here...
 * @param {*} api
 */
async function runTests(api) {
  console.log(`Running sim variables tests`);
  await testSimVars(api);

  console.log(`Running sim events tests`);
  await testSimEvents(api);

  console.log(`Running interval test`);
  testInterval(api, () => {
    process.exit(0);
  });
}

/**
 * ...docs go here...
 * @param {*} api
 */
async function testSimVars(api) {
  const varKeys = Object.keys(SimVars);

  for (let i = 0; i < varKeys.length; i++) {
    const key = varKeys[i];
    console.log(`[${i}] ${key}`);
    console.log(await api.get(key.replace(`:index`, `:1`)), `\n`);
  }

  console.log(`Tested ${varKeys.length} sim vars.`);
}

/**
 * ...docs go here...
 * @param {*} api
 */
async function testSimEvents(api) {
  let lock = await api.get(`TAILWHEEL_LOCK_ON`);
  await api.trigger(`TOGGLE_TAILWHEEL_LOCK`);
  let newlock = await api.get(`TAILWHEEL_LOCK_ON`);
  if (lock === newlock) {
    throw new Error(`TAILWHEEL_LOCK_ON did not change state!`);
  }
  console.log(`\nSim event trigger passed.\n`);
}

/**
 * ...docs go here...
 * @param {*} api
 * @param {*} done
 */
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
