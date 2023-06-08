/**
 * This extension adds the following special (non-simconnect) variables:
 *
 * - NEARBY_AIRPORTS, for a list of all airports in the "local reality bubble".
 * - ALL_AIRPORTS, for a list of all airports in the game.
 * - AIRPORT:index, for getting a specific airport's information, where `index` is the four character ICAO code.
 *
 * This extension adds the following special (non-simconnect) events:
 *
 * - AIRPORTS_IN_RANGE, triggered when new airports are added to the "local reality bubble".
 * - AIRPORTS_OUT_OF_RANGE, triggered when airports are removed from the "local reality bubble".
 */

const SPECIAL_VARS = [`NEARBY AIRPORTS`, `ALL AIRPORTS`, `AIRPORT`];

export const SystemEvents = {
  AIRPORTS_IN_RANGE: {
    name: `Airports in range`,
    desc: `Use this event with the on() function to get notified about airports coming into range of our airplane (by being loaded into the sim's "reality bubble").`,
  },
  AIRPORTS_OUT_OF_RANGE: {
    name: `Airports out of range`,
    desc: `Use this event with the on() function to get notified about airports dropping out of range of our airplane (by being loaded into the sim's "reality bubble").`,
  },
};

const RUNWAY_SURFACES = [
  `concrete`,
  `grass`,
  `water fsx`,
  `grass bumpy`,
  `asphalt`,
  `short grass`,
  `long grass`,
  `hard turf`,
  `snow`,
  `ice`,
  `urban`,
  `forest`,
  `dirt`,
  `coral`,
  `gravel`,
  `oil treated`,
  `steel mats`,
  `bituminus`,
  `brick`,
  `macadam`,
  `planks`,
  `sand`,
  `shale`,
  `tarmac`,
  `wright flyer track`,
  `ocean`,
  `water`,
  `pond`,
  `lake`,
  `river`,
  `waste water`,
  `paint`,
];

RUNWAY_SURFACES[254] = `unknown`;

const RUNWAY_NUMBER = [
  `none`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `10`,
  `11`,
  `12`,
  `13`,
  `14`,
  `15`,
  `16`,
  `17`,
  `18`,
  `19`,
  `20`,
  `21`,
  `22`,
  `23`,
  `24`,
  `25`,
  `26`,
  `27`,
  `28`,
  `29`,
  `30`,
  `31`,
  `32`,
  `33`,
  `34`,
  `35`,
  `36`,
  `north`,
  `northeast`,
  `east`,
  `southeast`,
  `south`,
  `southwest`,
  `west`,
  `northwest`,
  `last`,
];

const RUNWAY_DESIGNATOR = [
  `none`,
  `left`,
  `right`,
  `center`,
  `water`,
  `a`,
  `b`,
  `last`,
];

const ILS_TYPES = {
  0: `none`,
  65: `airport`,
  86: `VOR`,
  78: `NDB`,
  87: `waypoint`,
};

const SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT = 0;
const SIMCONNECT_FACILITY_AIRPORT = 1000;

const AIRPORT_TYPE = SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT;

function addAirportHandling(api) {
  const { handle } = api;

  const TYPE = SIMCONNECT_FACILITY_LIST_TYPE_AIRPORT;
  const IN_RANGE = api.nextId();
  const OUT_OF_RANGE = api.nextId();

  handle.subscribeToFacilitiesEx1(TYPE, IN_RANGE, OUT_OF_RANGE);

  handle.on("airportList", (data) => {
    const { requestID: id } = data;

    // work around the node-simconnect typo, if it still exists
    if (data.aiports) {
      data.airports ??= data.aiports;
      delete data.aiports;
    }

    // Are there in/out of range airports?
    api.eventListeners[id]?.handlers.forEach((handle) => handle(data.airports));
  });
}

// Add support for three new airport-related variables
export function airportGetHandler(api, propName) {
  const { handle } = api;

  propName = propName.replaceAll(` `, `_`);

  if (propName === `NEARBY_AIRPORTS`) {
    return new Promise((resolve) => {
      const airports = [];
      const getID = api.nextId();
      const handler = (data) => {
        if (data.requestID === getID) {
          airports.push(...(data.airports ?? data.aiports));
          // was this the last entry in the set?
          if (data.entryNumber === data.outOf - 1) {
            handle.off("airportList", handler);
            api.releaseId(getID);
            resolve({ [propName]: airports });
          }
        }
      };
      handle.on("airportList", handler);
      // Use the Ex1 version for "only in local bubble"
      handle.requestFacilitiesListEx1(AIRPORT_TYPE, getID);
    });
  }

  if (propName === `ALL_AIRPORTS`) {
    return new Promise((resolve) => {
      const airports = [];
      const getID = api.nextId();
      const handler = (data) => {
        if (data.requestID === getID) {
          airports.push(...(data.airports ?? data.aiports));
          // was this the last entry in the set?
          if (data.entryNumber === data.outOf - 1) {
            handle.off("airportList", handler);
            api.releaseId(getID);
            resolve({ [propName]: airports });
          }
        }
      };
      handle.on("airportList", handler);
      // Use the regular (non-Ex1) version to get "all"
      handle.requestFacilitiesList(AIRPORT_TYPE, getID);
    });
  }

  if (propName.startsWith(`AIRPORT:`)) {
    return new Promise((resolve) => {
      const AIRPORT_ICAO = propName.substring(propName.indexOf(`:`) + 1);
      const getID = api.nextId();

      const FA = SIMCONNECT_FACILITY_AIRPORT;

      // Airport
      handle.addToFacilityDefinition(FA, "OPEN AIRPORT"); // Open

      [
        `LATITUDE`,
        `LONGITUDE`,
        `ALTITUDE`,
        `MAGVAR`,
        `NAME`,
        `NAME64`,
        `REGION`,
        `N_RUNWAYS`,
      ].forEach((thing) => handle.addToFacilityDefinition(FA, thing));

      // Runway
      handle.addToFacilityDefinition(FA, "OPEN RUNWAY"); // "start of data" marker

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
      ].forEach((thing) => handle.addToFacilityDefinition(FA, thing));

      [
        `PRIMARY_NUMBER`,
        `PRIMARY_DESIGNATOR`,
        `PRIMARY_ILS_TYPE`,
        `PRIMARY_ILS_ICAO`,
        `PRIMARY_ILS_REGION`,
      ].forEach((thing) => handle.addToFacilityDefinition(FA, thing));

      [
        `SECONDARY_NUMBER`,
        `SECONDARY_DESIGNATOR`,
        `SECONDARY_ILS_TYPE`,
        `SECONDARY_ILS_ICAO`,
        `SECONDARY_ILS_REGION`,
      ].forEach((thing) => handle.addToFacilityDefinition(FA, thing));

      handle.addToFacilityDefinition(FA, "CLOSE RUNWAY"); // "end of data" marker

      const airportData = { runways: [] };

      const handler = ({ data, type }) => {
        // airport
        if (type === 0) {
          const latitude = data.readFloat64();
          const longitude = data.readFloat64();
          const altitude = data.readFloat64();
          const declination = data.readFloat32();
          const name = data.readString32();
          const name64 = data.readString64();
          const ICAO = AIRPORT_ICAO;
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

        // runway
        if (type === 1) {
          const latitude = data.readFloat64();
          const longitude = data.readFloat64();
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
                  ICAO: primary_ils_icao,
                  region: primary_ils_region,
                },
              },
              {
                designation: secondary_designator,
                marking: secondary_number,
                ILS: {
                  type: secondary_ils_type,
                  ICAO: secondary_ils_icao,
                  region: secondary_ils_region,
                },
              },
            ],
          });
        }
      };

      handle.on("facilityData", handler);

      const checkDone = ({ userRequestId: id }) => {
        if (id === getID) {
          api.releaseId(getID);
          handle.off("facilityDataEnd", checkDone);
          handle.off("facilityData", handler);
          resolve(airportData);
        }
      };

      handle.on("facilityDataEnd", checkDone);

      handle.requestFacilityData(
        SIMCONNECT_FACILITY_AIRPORT,
        getID,
        AIRPORT_ICAO
      );
    });
  }
}

// Used in getSpecial to check whether to forward a variable
airportGetHandler.supports = (name) => {
  const pos = name.indexOf(`:`);
  if (pos !== -1) name = name.substring(0, pos);
  return SPECIAL_VARS.includes(name);
};
