import { open, Protocol } from "node-simconnect";
import { MSFS_API } from "./msfs-api.js";
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

  // TODO: wrap the event system so that it's eventname based
  const api = new MSFS_API(handle);

  const keys = Object.keys(SimVars);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`[${i}] ${key}`);
    console.log(await api.get(key.replace(`:index`, `:1`)), `\n`);
  }

  console.log(`Tested ${keys.length} sim vars.`);
  process.exit(0);

  // (async function check() {
  //   console.log(
  //     await api.get("RUDDER POSITION", "PLANE LONGITUDE", "PLANE LATITUDE")
  //   );
  //   setTimeout(check, 500);
  // })();
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
