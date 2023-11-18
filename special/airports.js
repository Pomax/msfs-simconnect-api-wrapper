/**
 * This extension adds the following special (non-simconnect) variables:
 *
 * - ALL_AIRPORTS, for a list of all airports in the game.
 * - NEARBY_AIRPORTS, for a list of all airports in the "local reality bubble".
 * - NEARBY_AIRPORTS:NM, for a list of all airports within <NM> nautical miles.
 * - AIRPORT:ICAO, for getting a specific airport's information, where `ICAO` is the four character ICAO code.
 *
 * This extension adds the following special (non-simconnect) events:
 *
 * - AIRPORTS_IN_RANGE, triggered when new airports are added to the "local reality bubble".
 * - AIRPORTS_OUT_OF_RANGE, triggered when airports are removed from the "local reality bubble".
 */
import { Protocol, open } from "node-simconnect";
import { getDistanceBetweenPoints } from "./utils.js";
import {
  RUNWAY_SURFACES,
  RUNWAY_NUMBER,
  RUNWAY_DESIGNATOR,
  ILS_TYPES,
  SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT,
  SIMCONNECT_FACILITY_AIRPORT,
} from "./constants.js";

// TODO: enable these two events again
// export const AirportEvents = {
//   AIRPORTS_IN_RANGE: {
//     name: `Airports in range`,
//     desc: `Use this event with the on() function to get notified about airports coming into range of our airplane (by being loaded into the sim's "reality bubble").`,
//   },
//   AIRPORTS_OUT_OF_RANGE: {
//     name: `Airports out of range`,
//     desc: `Use this event with the on() function to get notified about airports dropping out of range of our airplane (by being loaded into the sim's "reality bubble").`,
//   },
// };

const KM_PER_NM = 1.852;
const FEET_PER_METERS = 3.28084;
const degrees = (rad) => (rad / Math.PI) * 180;
const radians = (deg) => (deg / 180) * Math.PI;

const NEARBY_AIRPORTS = `NEARBY AIRPORTS`;
const ALL_AIRPORTS = `ALL AIRPORTS`;
const AIRPORT = `AIRPORT:`;
const SPECIAL_VARS = [ALL_AIRPORTS, NEARBY_AIRPORTS, AIRPORT];

const AIRPORT_TYPE = SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT;

const nextId = (function () {
  const startId = 100;
  let id = startId;
  return () => {
    if (id > 900) {
      id = startId;
    }
    return id++;
  };
})();

/**
 * ...docs go here...
 */
export async function getAirportHandler(api, handle) {
  return new Promise(async (resolve) => {
    const finished = () => resolve(handler);
    const airports = new AirportHandler(api, finished);

    async function handler(varName) {
      return airports.get(varName);
    }

    handler.supports = function (name) {
      if (SPECIAL_VARS.includes(name)) return true;
      if (name.startsWith(NEARBY_AIRPORTS)) return true;
      if (name.startsWith(AIRPORT)) return true;
      return false;
    };
  });
}

/**
 * ...docs go here...
 */
export class AirportHandler {
  constructor(api, finished) {
    this.api = api;
    this.init(api.remote, finished);
  }

  async init(remote, finished) {
    console.log(`building new handle`);
    // For some reason if we use our existing API handle, we only get 2 of the
    // 33 pages for "all airports", so in order to get the full list of airports,
    // the airport handler uses its own, dedicated simconnection.
    const { handle } = await open(`airport`, Protocol.KittyHawk, remote);
    this.handle = handle;
    console.log(`registering facility data`);
    registerFacilityDefinition(handle);
    console.log(`getting all-airport list`);
    this.airports = await this.loadAirportsFromGame();
    finished();
  }

  async loadAirportsFromGame() {
    const { handle } = this;
    const list = [];
    const requestId = nextId();
    await new Promise((resolve) => {
      const handler = (data) => {
        if (data.requestID === requestId) {
          const { airports, entryNumber, outOf } = data;
          list.push(...airports);
          if (entryNumber >= outOf - 1) {
            handle.off("airportList", handler);
            resolve();
          }
        }
      };
      handle.on("airportList", handler);
      handle.requestFacilitiesList(AIRPORT_TYPE, requestId);
    });
    handle.close();
    list.forEach((airport) => (airport.altitude *= FEET_PER_METERS));
    return list;
  }

  /**
   *
   * @param {*} varName
   * @returns
   */
  async get(varName) {
    const propName = varName.replaceAll(` `, `_`);
    if (varName === ALL_AIRPORTS) {
      return { [propName]: this.airports };
    }
    if (varName.startsWith(NEARBY_AIRPORTS)) {
      return { [propName]: await this.getAllNearbyAirports(varName) };
    }
    if (varName.startsWith(AIRPORT)) {
      return { [propName]: await this.getAirport(varName) };
    }
    return {};
  }

  /**
   *
   * @param {*} varName
   * @returns
   */
  async getAllNearbyAirports(varName) {
    const {
      CAMERA_STATE: camera,
      PLANE_LATITUDE: lat,
      PLANE_LONGITUDE: long,
    } = await this.api.get(`CAMERA_STATE`, `PLANE_LATITUDE`, `PLANE_LONGITUDE`);

    // if we're not in game, there are no nearby airports.
    if (camera > 10) return [];

    // otherwise, check for airports within 200NM
    const distanceNM = getVarArg(varName) ?? 200;
    const KM = distanceNM * KM_PER_NM;
    const found = [];
    this.airports.forEach((airport) => {
      const d = getDistanceBetweenPoints(
        lat,
        long,
        radians(airport.latitude),
        radians(airport.longitude)
      );
      if (d <= KM) {
        found.push({ ...airport, distance: d / KM_PER_NM });
      }
    });
    found.sort((a, b) => a.distance - b.distance);
    return found;
  }

  /**
   *
   * @param {*} varName
   * @returns
   */
  async getAirport(varName) {
    const { handle } = this;

    return new Promise((resolve) => {
      const requestID = nextId();
      const icao = getVarArg(varName);
      const airportData = { icao, runways: [] };
      console.log(`getting icao: ${icao} using request ID ${requestID}`);

      console.log(`setting up data handler`);
      const handler = ({ data, type, userRequestId }) => {
        console.log(`received data`, userRequestId, type);
        if (userRequestId !== requestID) return;
        if (type === 0) getAirportData(data, airportData);
        if (type === 1) addRunwayData(data, airportData);
      };
      handle.on("facilityData", handler);

      console.log(`setting up data end handler`);
      const endHandler = ({ userRequestId: id, ...rest }) => {
        console.log(`received data end`, id, rest);
        if (id === requestID) {
          handle.off("facilityDataEnd", endHandler);
          handle.off("facilityData", handler);
          resolve({ [varName]: airportData });
        }
      };
      handle.on("facilityDataEnd", endHandler);

      console.log(`running requestFacilityData`);
      handle.requestFacilityData(SIMCONNECT_FACILITY_AIRPORT, requestID, icao);
    });
  }
}

/**
 *
 * @param {*} varName
 * @returns
 */
function getVarArg(varName) {
  if (!varName.includes(`:`)) return;
  return varName.substring(varName.indexOf(`:`) + 1);
}

/**
 *
 * @param {*} handle
 * @returns
 */
function registerFacilityDefinition(handle) {
  // Airport
  handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, "OPEN AIRPORT"); // Open
  [
    `LATITUDE`,
    `LONGITUDE`,
    `ALTITUDE`,
    `MAGVAR`,
    `NAME`,
    `NAME64`,
    `REGION`,
    `N_RUNWAYS`,
  ].forEach((property) =>
    handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, property)
  );

  // Runway
  handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, "OPEN RUNWAY"); // "start of data" marker
  [
    `LATITUDE`,
    `LONGITUDE`,
    `ALTITUDE`,
    `HEADING`,
    `LENGTH`,
    `WIDTH`,
    `PATTERN_ALTITUDE`,
    `SLOPE`,
    `TRUE_SLOPE`,
    `SURFACE`,
  ].forEach((property) =>
    handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, property)
  );
  [
    `PRIMARY_NUMBER`,
    `PRIMARY_DESIGNATOR`,
    `PRIMARY_ILS_TYPE`,
    `PRIMARY_ILS_ICAO`,
    `PRIMARY_ILS_REGION`,
  ].forEach((property) =>
    handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, property)
  );
  [
    `SECONDARY_NUMBER`,
    `SECONDARY_DESIGNATOR`,
    `SECONDARY_ILS_TYPE`,
    `SECONDARY_ILS_ICAO`,
    `SECONDARY_ILS_REGION`,
  ].forEach((property) =>
    handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, property)
  );

  handle.addToFacilityDefinition(SIMCONNECT_FACILITY_AIRPORT, "CLOSE RUNWAY"); // "end of data" marker
}

/**
 *
 * @param {*} data
 * @param {*} airportData
 */
function getAirportData(data, airportData) {
  const latitude = degrees(data.readFloat64());
  const longitude = degrees(data.readFloat64());
  const altitude = data.readFloat64();
  const declination = data.readFloat32();
  const name = data.readString32();
  const name64 = data.readString64();
  const region = data.readString8();
  const runwayCount = data.readInt32();

  Object.assign(airportData, {
    latitude,
    longitude,
    altitude,
    declination,
    name,
    name64,
    region,
    runwayCount,
  });
}

/**
 *
 * @param {*} data
 * @param {*} airportData
 */
function addRunwayData(data, airportData) {
  const latitude = degrees(data.readFloat64());
  const longitude = degrees(data.readFloat64());
  const altitude = data.readFloat64();
  const heading = data.readFloat32();
  const length = data.readFloat32();
  const width = data.readFloat32();
  const patternAltitude = data.readFloat32();
  const slope = data.readFloat32();
  const slopeTrue = data.readFloat32();
  const surface = RUNWAY_SURFACES[data.readInt32()];

  const primary_number = RUNWAY_NUMBER[data.readInt32()];
  const primary_designator = RUNWAY_DESIGNATOR[data.readInt32()];
  const primary_ils_type = ILS_TYPES[data.readInt32()];
  const primary_ils_icao = data.readString8();
  const primary_ils_region = data.readString8();

  const secondary_number = RUNWAY_NUMBER[data.readInt32()];
  const secondary_designator = RUNWAY_DESIGNATOR[data.readInt32()];
  const secondary_ils_type = ILS_TYPES[data.readInt32()];
  const secondary_ils_icao = data.readString8();
  const secondary_ils_region = data.readString8();

  airportData.runways.push({
    latitude,
    longitude,
    altitude,
    heading,
    length,
    width,
    patternAltitude,
    slope,
    slopeTrue,
    surface,
    approach: [
      {
        designation: primary_designator,
        marking: primary_number,
        ILS: {
          type: primary_ils_type,
          icao: primary_ils_icao,
          region: primary_ils_region,
        },
      },
      {
        designation: secondary_designator,
        marking: secondary_number,
        ILS: {
          type: secondary_ils_type,
          icao: secondary_ils_icao,
          region: secondary_ils_region,
        },
      },
    ],
  });
}
