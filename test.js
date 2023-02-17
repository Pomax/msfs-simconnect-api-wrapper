import { open, Protocol } from "node-simconnect";
import { MSFS_API } from "./msfs-api.js";
import { SimEvents } from "./simevents/index.js";
import { SimVars } from "./simvars/index.js";

const EVENT_ID_PAUSE = 1;

async function connect() {
  const { recvOpen, handle } = await open("My app", Protocol.KittyHawk);
  console.log("Connected to", recvOpen.applicationName);
  return handle;
}

async function run(handle) {
  handle.subscribeToSystemEvent(EVENT_ID_PAUSE, "Pause");
  handle.on("event", function (recvEvent) {
    switch (recvEvent.eventID) {
      case EVENT_ID_PAUSE:
        console.log(recvEvent.data === 1 ? "Sim paused" : "Sim unpaused");
        break;
    }
  });

  handle.on("exception", function (e) {
    console.log(e);
  });

  // TODO: wrap the event system so that it's eventname based
  const api = new MSFS_API(handle);

  await testSimVars(api);
  // await testSimEvents(api);
  testInterval(api, () => {
    process.exit(0);
  });
}

(async function tryConnect() {
  try {
    const handle = await connect();
    run(handle);
  } catch (e) {
    console.log(`Connection failed: retrying in 5 seconds.`);
    setTimeout(tryConnect, 5000);
  }
})();

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
  console.log(`tailwheel lock:`, await api.get(`TAILWHEEL_LOCK_ON`));
  api.trigger(`TOGGLE_TAILWHEEL_LOCK`);
  console.log(`tailwheel lock:`, await api.get(`TAILWHEEL_LOCK_ON`));
  api.trigger(`TOGGLE_TAILWHEEL_LOCK`);
  console.log(`tailwheel lock:`, await api.get(`TAILWHEEL_LOCK_ON`));
}

function testInterval(api, done) {
  const stop = api.schedule((data) => {
    console.log(data);
  }, 500, "RUDDER POSITION", "PLANE LONGITUDE", "PLANE LATITUDE");

  setTimeout(() => {
    stop();
    done();
  }, 5000);
}
