import { Protocol, open } from "node-simconnect";

const { handle } = await open(`airport test`, Protocol.KittyHawk);

const AIRPORT_TYPE = 0;
const list = [];
const requestId = 1;
await new Promise((resolve) => {
  const handler = (data) => {
    if (data.requestID === requestId) {
      const { airports, entryNumber, outOf } = data;
      list.push(...airports);
      if (entryNumber >= outOf -1) {
        handle.off("airportList", handler);
        resolve();
      }
    }
  };
  handle.on("airportList", handler);
  handle.requestFacilitiesList(AIRPORT_TYPE, requestId);
});

console.log(`found ${list.length} airports`);
handle.close();
