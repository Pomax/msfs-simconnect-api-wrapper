// See https://docs.flightsimulator.com/html/Programming_Tools/SimConnect/API_Reference/Events_And_Data/SimConnect_SubscribeToSystemEvent.htm

export const SystemEvents = {
  "1_SEC": {
    name: `1sec`,
    desc: `Request a notification every second.`,
  },
  "4_SEC": {
    name: `4sec`,
    desc: `Request a notification every four seconds.`,
  },
  "6_HZ": {
    name: `6Hz`,
    desc: `Request notifications six times per second. This is the same rate that joystick movement events are transmitted.`,
  },
  AIRCRAFT_LOADED: {
    name: `AircraftLoaded`,
    desc: `Request a notification when the aircraft flight dynamics file is changed. These files have a .AIR extension. The filename is returned in a SIMCONNECT_RECV_EVENT_FILENAME structure.`,
  },
  CRASHED: {
    name: `Crashed`,
    desc: `Request a notification if the user aircraft crashes.`,
  },
  CRASH_RESET: {
    name: `CrashReset`,
    desc: `Request a notification when the crash cut-scene has completed.`,
  },
  CUSTOM_MISSION_ACTION_EXECUTED: {
    name: `CustomMissionActionExecuted`,
    desc: `Request a notification when a mission action has been executed. `,
  },
  FLIGHT_LOADED: {
    name: `FlightLoaded`,
    desc: `Request a notification when a flight is loaded. Note that when a flight is ended, a default flight is typically loaded, so these events will occur when flights and missions are started and finished. The filename of the flight loaded is returned in a SIMCONNECT_RECV_EVENT_FILENAME structure.`,
  },
  FLIGHT_SAVED: {
    name: `FlightSaved`,
    desc: `Request a notification when a flight is saved correctly. The filename of the flight saved is returned in a SIMCONNECT_RECV_EVENT_FILENAME structure.`,
  },
  FLIGHT_PLAN_ACTIVATED: {
    name: `FlightPlanActivated`,
    desc: `Request a notification when a new flight plan is activated. The filename of the activated flight plan is returned in a SIMCONNECT_RECV_EVENT_FILENAME structure.`,
  },
  FLIGHT_PLAN_DEACTIVATED: {
    name: `FlightPlanDeactivated`,
    desc: `Request a notification when the active flight plan is de-activated.`,
  },
  FRAME: {
    name: `Frame`,
    desc: `Request notifications every visual frame. Information is returned in a SIMCONNECT_RECV_EVENT structure.`,
  },
  OBJECT_ADDED: {
    name: `ObjectAdded`,
    desc: `Request a notification when an AI object is added to the simulation. Refer also to the SIMCONNECT_RECV_EVENT_OBJECT_ADDREMOVE structure.`,
  },
  OBJECT_REMOVED: {
    name: `ObjectRemoved`,
    desc: `Request a notification when an AI object is removed from the simulation. Refer also to the SIMCONNECT_RECV_EVENT_OBJECT_ADDREMOVE structure.`,
  },
  PAUSE: {
    name: `Pause`,
    desc: `Request notifications when the flight is paused or unpaused, and also immediately returns the current pause state (1 = paused or 0 = unpaused). The state is returned in the dwData parameter.`,
  },
  PAUSE_EX1: {
    name: `Pause_EX1`,
    desc: `Request notifications when the flight is paused or unpaused, and also immediately returns the current pause state with more detail than the regular Pause system event. The state is returned in the dwData parameter, see documentation.`,
  },
  PAUSED: {
    name: `Paused`,
    desc: `Request a notification when the flight is paused.`,
  },
  PAUSEFRAME: {
    name: `PauseFrame`,
    desc: `Request notifications for every visual frame that the simulation is paused. Information is returned in a SIMCONNECT_RECV_EVENT structure.`,
  },
  POSITION_CHANGED: {
    name: `PositionChanged`,
    desc: `Request a notification when the user changes the position of their aircraft through a dialog.`,
  },
  SIM: {
    name: `Sim`,
    desc: `Request notifications when the flight is running or not, and also immediately returns the current state (1 = running or 0 = not running). The state is returned in the dwData parameter.`,
  },
  SIM_START: {
    name: `SimStart`,
    desc: `The simulator is running. Typically the user is actively controlling the aircraft on the ground or in the air. However, in some cases additional pairs of SimStart/SimStop events are sent. For example, when a flight is reset the events that are sent are SimStop, SimStart, SimStop, SimStart. Also when a flight is started with the SHOW_OPENING_SCREEN value set to zero, then an additional SimStart/SimStop pair are sent before a second SimStart event is sent when the scenery is fully loaded. The opening screen provides the options to change aircraft, departure airport, and so on.`,
  },
  SIM_STOP: {
    name: `SimStop`,
    desc: `The simulator is not running. Typically the user is loading a flight, navigating the shell or in a dialog.`,
  },
  SOUND: {
    name: `Sound`,
    desc: `Requests a notification when the master sound switch is changed. This request will also return the current state of the master sound switch immediately. A flag is returned in the dwData parameter, 0 if the switch is off, SIMCONNECT_SOUND_SYSTEM_EVENT_DATA_MASTER (0x1) if the switch is on.`,
  },
  UNPAUSED: {
    name: `Unpaused`,
    desc: `Request a notification when the flight is un-paused.`,
  },
  VIEW: {
    name: `View`,
    desc: `Requests a notification when the user aircraft view is changed. This request will also return the current view immediately. A flag is returned in the dwData parameter, one of: SIMCONNECT_VIEW_SYSTEM_EVENT_DATA_COCKPIT_2D SIMCONNECT_VIEW_SYSTEM_EVENT_DATA_COCKPIT_VIRTUAL SIMCONNECT_VIEW_SYSTEM_EVENT_DATA_ORTHOGONAL (the map view).`,
  },
};
