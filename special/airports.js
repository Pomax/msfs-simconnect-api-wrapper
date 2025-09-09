/**
 * This extension adds the following special (non-simconnect) variables:
 *
 * - ALL_AIRPORTS, for a list of all airports in the game.
 * - NEARBY_AIRPORTS, for a list of all airports in the "local reality bubble".
 * - NEARBY_AIRPORTS:NM, for a list of all airports within <NM> nautical miles of the aircraft.
 * - AIRPORT:ICAO, for getting a specific airport's information, where `ICAO` is the four character ICAO code.
 *
 * This extension adds the following special (non-simconnect) events:
 *
 * - AIRPORTS_IN_RANGE, triggered when new airports are added to the "local reality bubble".
 * - AIRPORTS_OUT_OF_RANGE, triggered when airports are removed from the "local reality bubble".
 */
import fs from "node:fs";
import zlib from "node:zlib";
import { Protocol, open } from "node-simconnect";
import { getDistanceBetweenPoints as dist } from "./utils.js";
import {
  RUNWAY_SURFACES,
  RUNWAY_NUMBER,
  RUNWAY_DESIGNATOR,
  ILS_TYPES,
  SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT,
} from "./constants.js";

import path from "node:path";
import url from "node:url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const AIRPORT_DB_LOCATION = path.join(__dirname, `..`, `airport.db.gz`);

export const AirportEvents = {
  AIRPORTS_IN_RANGE: {
    name: `AirportsInRage`,
    desc: `Use this event with the on() function to get notified about airports coming into range of our airplane (by being loaded into the sim's "reality bubble").`,
  },
  AIRPORTS_OUT_OF_RANGE: {
    name: `AirportsOutOfRange`,
    desc: `Use this event with the on() function to get notified about airports dropping out of range of our airplane (by being loaded into the sim's "reality bubble").`,
  },
};

const KM_PER_NM = 1.852;
const FEET_PER_METERS = 3.28084;
const { abs, asin, atan2, sin, cos, tan, PI } = Math;
const degrees = (rad) => (rad / PI) * 180;
const radians = (deg) => (deg / 180) * PI;

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
  const TYPE = SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT;
  const IN_RANGE = api.nextId();
  const OUT_OF_RANGE = api.nextId();
  handle.on(`airportList`, ({ requestID: id, airports }) => {
    if (id === IN_RANGE || id === OUT_OF_RANGE) {
      const eventName =
        AirportEvents[
          id === IN_RANGE ? `AIRPORTS_IN_RANGE` : `AIRPORTS_OUT_OF_RANGE`
        ].name;
      api.eventListeners[eventName]?.handlers.forEach((handle) =>
        handle(airports)
      );
    }
  });
  handle.subscribeToFacilitiesEx1(TYPE, IN_RANGE, OUT_OF_RANGE);

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

let cachedAirportData = undefined;

export function loadAirportDB(location = AIRPORT_DB_LOCATION) {
  if (cachedAirportData) return cachedAirportData;

  if (fs.existsSync(location)) {
    let zipped, json;
    try {
      zipped = fs.readFileSync(location);
    } catch (e) {
      console.error(`file read error:`, e);
    }
    try {
      json = zlib.gunzipSync(zipped);
    } catch (e) {
      console.error(`zlib error:`, e);
    }
    try {
      cachedAirportData = JSON.parse(json);
    } catch (e) {
      console.log(`JSON parse error:`, e);
    }
  }

  return cachedAirportData;
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
    // For some reason if we use our existing API handle, we only get 2 of the
    // 33 pages for "all airports", so in order to get the full list of airports,
    // the airport handler uses its own, dedicated simconnection.
    const { handle } = await open(`airport`, Protocol.KittyHawk, remote);
    this.handle = handle;
    console.log(`registering facility data`);

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
    const airportCount = list.length;
    // console.log(`MSFS reported ${airportCount} airports`)

    this.airports = loadAirportDB(AIRPORT_DB_LOCATION);
    if (this.airports) {
      handle.close();
      if (this.airports.length !== airportCount) {
        console.warn(
          `MSFS has ${airportCount} airports, db has ${this.airports.length} airports.`
        );
        console.warn(
          `You may need to update your version of msfs-simconnect-api-wrapper...`
        );
      }
      return finished();
    }

    console.log(`No airport database found: building a new one.`);

    let N = 0;
    const AHC = 1000;
    setDetailFields(handle, AHC);

    function getAirportDetails({ icao }) {
      if ([`NFVB`, `NTAM`].includes(icao)) {
        throw new Error(`we're stopping now.`);
      }

      return new Promise((resolve) => {
        const airportData = { icao, runways: [] };
        const requestID = nextId();

        const processData = ({ userRequestId: id, type, data }) => {
          if (type === 0) addAirportDetails(data, airportData);
          if (type === 1) addAirportRunway(data, airportData);
        };

        const processDataEnd = ({ userRequestId: id, ...rest }) => {
          handle.off("facilityData", processData);
          handle.off("facilityDataEnd", processDataEnd);
          postProcessAirport(airportData);
          resolve(airportData);
        };

        handle.on("facilityData", processData);
        handle.on("facilityDataEnd", processDataEnd);
        handle.requestFacilityData(AHC, requestID, icao);
      });
    }

    this.airports = [];

    const processAirports = async (list, resolve) => {
      if (list.length === 0) return resolve();
      const percentage = (1 - list.length / N) * 100;
      console.log(`${percentage.toFixed(2)}%`);
      const entry = list.shift();
      try {
        const details = await getAirportDetails(entry);
        this.airports.push(details);
        processAirports(list, resolve);
      } catch (e) {
        console.log(
          `Skipping the last ${toProcess.length} airports due to MSFS 2020 v1.39.9.0 crashing on them.`
        );
        resolve();
      }
    };

    const LIST_LIMIT = Infinity;
    const toProcess = list.slice(0, LIST_LIMIT);

    await new Promise((resolve) => {
      N = toProcess.length;
      processAirports(toProcess, resolve);
    });

    handle.close();

    const json = JSON.stringify(this.airports, null, 2);
    const zipped = zlib.gzipSync(Buffer.from(json));
    fs.writeFileSync(AIRPORT_DB_LOCATION, zipped);

    finished();
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
    const { PLANE_LATITUDE: lat, PLANE_LONGITUDE: long } = await this.api.get(
      `PLANE_LATITUDE`,
      `PLANE_LONGITUDE`
    );
    const distanceNM = getVarArg(varName) ?? 200;
    const KM = distanceNM * KM_PER_NM;
    const found = [];
    this.airports.forEach((airport) => {
      const alat = radians(airport.latitude);
      const along = radians(airport.longitude);
      const d = dist(lat, long, alat, along);
      if (d <= KM) found.push({ ...airport, distance: d / KM_PER_NM });
    });
    return found.sort((a, b) => a.distance - b.distance);
  }

  /**
   *
   * @param {*} varName
   * @returns
   */
  async getAirport(varName) {
    const icao = getVarArg(varName);
    return {
      [varName]: this.airports.find((airport) => airport.icao === icao),
    };
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
 * @param {*} AHC
 */
function setDetailFields(handle, AHC) {
  const add = (name) => handle.addToFacilityDefinition(AHC, name);

  // airport
  add(`OPEN AIRPORT`);
  add(`LATITUDE`);
  add(`LONGITUDE`);
  add(`ALTITUDE`);
  add(`MAGVAR`);
  add(`NAME`);
  add(`NAME64`);
  add(`REGION`);
  add(`N_RUNWAYS`);
  {
    // runways
    add(`OPEN RUNWAY`);
    add(`LATITUDE`);
    add(`LONGITUDE`);
    add(`ALTITUDE`);
    add(`HEADING`);
    add(`LENGTH`);
    add(`WIDTH`);
    add(`PATTERN_ALTITUDE`);
    add(`SLOPE`);
    add(`TRUE_SLOPE`);
    add(`SURFACE`);
    // ILS details
    add(`PRIMARY_NUMBER`);
    add(`PRIMARY_DESIGNATOR`);
    add(`PRIMARY_ILS_TYPE`);
    add(`PRIMARY_ILS_ICAO`);
    add(`PRIMARY_ILS_REGION`);
    add(`SECONDARY_NUMBER`);
    add(`SECONDARY_DESIGNATOR`);
    add(`SECONDARY_ILS_TYPE`);
    add(`SECONDARY_ILS_ICAO`);
    add(`SECONDARY_ILS_REGION`);
    add(`CLOSE RUNWAY`);
  }
  add("CLOSE AIRPORT"); // Close
}

/**
 *
 * @param {*} data
 * @param {*} airportData
 */
function addAirportDetails(data, airportData) {
  const latitude = data.readFloat64();
  const longitude = data.readFloat64();
  const altitude = data.readFloat64() * FEET_PER_METERS;
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
function addAirportRunway(data, airportData, airport) {
  const latitude = data.readFloat64();
  const longitude = data.readFloat64();
  const altitude = data.readFloat64() * FEET_PER_METERS;
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

  const approach = [
    {
      designation: primary_designator,
      marking: primary_number,
      heading: 0,
      ILS: {
        type: primary_ils_type,
        icao: primary_ils_icao,
        region: primary_ils_region,
      },
    },
    {
      designation: secondary_designator,
      marking: secondary_number,
      heading: 0,
      ILS: {
        type: secondary_ils_type,
        icao: secondary_ils_icao,
        region: secondary_ils_region,
      },
    },
  ];

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
    approach,
  });
}

// Improve the airport information
function postProcessAirport(airport) {
  // abstract our runways
  airport.runways.forEach((runway) => setRunwayBounds(runway));
  // set the approach headings in true degrees, rather than using the runway markings
  airport.runways.forEach((runway) => setRunwayApproachHeadings(runway));
}

function setRunwayApproachHeadings(runway) {
  const { start, end } = runway;
  runway.approach[0].heading = getHeadingFromTo(...end, ...start);
  runway.approach[1].heading = getHeadingFromTo(...start, ...end);
}

// by including runway start, end, and bounding box information
function setRunwayBounds(runway) {
  const {
    altitude,
    latitude: lat,
    longitude: long,
    length,
    width,
    heading,
    slopeTrue,
  } = runway;
  let args;

  // Find the runway endpoints. length is in meters, getPointAtDistance
  // needs kilometers, so we divide by 1000, and then each end is half
  // the length from the center.

  args = [lat, long, length / 2000, heading];
  const { lat: latS, long: longS } = getPointAtDistance(...args);

  args = [lat, long, length / 2000, heading + 180];
  const { lat: latE, long: longE } = getPointAtDistance(...args);

  // Runway start/end coordinates
  const start = (runway.start = [latS, longS]);
  const end = (runway.end = [latE, longE]);

  // Runway start/end altitudes
  start[2] = altitude;
  const run = length * 3.28084;
  const rise = tan(radians(slopeTrue)) * run;
  end[2] = altitude + rise;

  // Do we need to swap these? The runway heading indicates
  // the heading for approaches, so the heading from start
  // to end should be the opposite heading.
  const lineHeading = getHeadingFromTo(...start, ...end);
  const diff = getCompassDiff(lineHeading, heading);
  if (abs(diff) < 90) {
    runway.start = end;
    runway.end = start;
  }

  // Runway bbox
  args = [latS, longS, width / 2000, heading + 90];
  const { lat: lat1, long: long1 } = getPointAtDistance(...args);
  args = [latS, longS, width / 2000, heading - 90];
  const { lat: lat2, long: long2 } = getPointAtDistance(...args);
  args = [latE, longE, width / 2000, heading - 90];
  const { lat: lat3, long: long3 } = getPointAtDistance(...args);
  args = [latE, longE, width / 2000, heading + 90];
  const { lat: lat4, long: long4 } = getPointAtDistance(...args);
  runway.bbox = [
    [lat1, long1],
    [lat2, long2],
    [lat3, long3],
    [lat4, long4],
  ];
}

function getPointAtDistance(lat1, long1, d, heading, R = 6371) {
  `
    lat: initial latitude, in degrees
    lon: initial longitude, in degrees
    d: target distance from initial in kilometers
    heading: (true) heading in degrees
    R: optional radius of sphere, defaults to mean radius of earth

    Returns new lat/lon coordinate {d}km from initial, in degrees
  `;

  lat1 = radians(lat1);
  long1 = radians(long1);
  const a = radians(heading);
  const lat2 = asin(sin(lat1) * cos(d / R) + cos(lat1) * sin(d / R) * cos(a));
  const dx = cos(d / R) - sin(lat1) * sin(lat2);
  const dy = sin(a) * sin(d / R) * cos(lat1);
  const long2 = long1 + atan2(dy, dx);
  return { lat: degrees(lat2), long: degrees(long2) };
}

export function getHeadingFromTo(lat1, long1, lat2, long2, declination = 0) {
  lat1 = radians(parseFloat(lat1));
  long1 = radians(parseFloat(long1));
  lat2 = radians(parseFloat(lat2));
  long2 = radians(parseFloat(long2));
  const dLon = long2 - long1;
  const x = cos(lat1) * sin(lat2) - sin(lat1) * cos(lat2) * cos(dLon);
  const y = cos(lat2) * sin(dLon);
  return (degrees(atan2(y, x)) - declination + 360) % 360;
}

function getCompassDiff(current, target, direction = 1) {
  const diff = current > 180 ? current - 360 : current;
  target = target - diff;
  const result = target < 180 ? target : target - 360;
  if (direction > 0) return result;
  return target < 180 ? 360 - target : target - 360;
}
