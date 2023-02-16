// see https://docs.flightsimulator.com/html/Programming_Tools/SimVars/Camera_Variables.htm

import { dataType, SETTABLE } from "./simvar-utils.js";

const CAMERAS = {
  "CAMERA GAMEPLAY PITCH YAW:index": {
    desc: `Returns either the pitch (index 0) or the yaw (index 1) of the current gameplay camera.`,
    units: `Radians`,
    ...dataType(`Float64`),
  },
  "CAMERA REQUEST ACTION": {
    desc: `This can be used to have the currently active camera perform a predefined action. Currently only 1 action is supported, but more may be added over time.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CAMERA STATE": {
    desc: `This can be used to get or set the camera "state", which will be one of the listed enum values.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CAMERA SUBSTATE": {
    desc: `This variable can be used to get or set the camera "sub-state". The options here are generally only required when working with the in-sim panel UI. Note that the "locked" and "unlocked" state will be changed automatically if the following SimVars have their values changed: COCKPIT_CAMERA_HEADLOOK, CHASE_CAMERA_HEADLOOK.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CAMERA VIEW TYPE AND INDEX:index": {
    desc: `With this you can get or set both the type of view for the current camera, as well as the option index, which will be between 0 and the maximum index value (as retrieved using the CAMERA VIEW TYPE AND INDEX MAX SimVar). Supplying an index of 0 to the SimVar will get/set the type (from the selection of enum values listed), and using an index of 1 will get/set the option index, which is an integer value.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CAMERA VIEW TYPE AND INDEX MAX:index": {
    desc: `This variable can get the number of option indices related to a specific camera view type. The index value supplied to the SimVar should be one of the camera view type Enum values (see CAMERA VIEW TYPE AND INDEX), and the SimVar will return the number of options available for that camera type (counting from 1, so - for example - if the camera view type is "Quickview" and has 8 quickview settings, then CAMERA VIEW TYPE AND INDEX MAX:4 will return 8). Note that this value can be set after a flight has started, but it will have no effect since the number of camera options is initilaised once only and not updated (and the simulation may overwrite the value again even after setting it).`,
    units: `Number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "GAMEPLAY CAMERA FOCUS": {
    desc: `This gets/sets the focus for the camera zoom, which can be either manual, or auto. The setting affects both the Cockpit and the External (Chase) cameras.`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "IS CAMERA RAY INTERSECT WITH NODE": {
    desc: `This SimVar is used to check for a collision along a ray from the center of the user FOV and a model node. The available nodes that can be checked using this SimVar must be previously defined in the [CAMERA_RAY_NODE_COLLISION] of the camera.cfg file. The SimVar requires a node index value between 1 and 10, corresponding to the node defined in the CFG file, and the SimVar will return 1 (TRUE) if there is a collision along the camera ray or 0 (FALSE) otherwise. You may also supply an index of 0 to perform a collision check for all defined nodes, in which case the SimVar will return 1 (TRUE) if there is a collision between the ray and any of the defined nodes. Supplying an index outside of the range of 1 to 10, or supplying an index for which no node has been defined, will return 0 (FALSE).`,
    units: `Bool`,
    ...dataType(`Int32`),
  },
};

const CHASE_CAMERAS = {
  "CHASE CAMERA HEADLOOK": {
    desc: `This is used to get/set the look state of the chase (external) camera. Note that this value will also affect the CAMERA_SUBSTATE value, when the CAMERA_STATE is set to 3 (External/Chase).`,
    units: `enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CHASE CAMERA MOMENTUM": {
    desc: `Sets/gets the momentum modifier of the chase (external) camera, which is controls how fast/slow the camera will stop moving when no longer being moved by the user. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "CHASE CAMERA SPEED": {
    desc: `Sets/gets the translation speed modifier of the chase (external) camara, as a percentage. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "CHASE CAMERA ZOOM": {
    desc: `Sets/gets the zoom/FOV modifier for the chase (external) camera. Note that when setting this value, it will affect the camera regardless of whether the GAMEPLAY_CAMERA_FOCUS is set to manual or automatic. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "CHASE CAMERA ZOOM SPEED": {
    desc: `Sets/gets the speed modifier for when the zoom/FOV chase (external) camera changes zoom/FOV levels. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const COCKPIT_CAMERAS = {
  "CAMERA ACTION COCKPIT VIEW RESET": {
    desc: `This can be used to reset the cockpit camera when the CAMERA_STATE is set to 2 (Cockpit). Essentially the same as the user pressing the default reset keys CTRL + Space.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "CAMERA ACTION COCKPIT VIEW SAVE:index": {
    desc: `This can be used to save a cockpit camera when the CAMERA_STATE is set to 2 (Cockpit). The index value given is the save "slot" that will be used, from 0 to 9. Essentially this is the same as the user pressing the default save keys CTRL + Alt + 0-9.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "COCKPIT CAMERA HEADLOOK": {
    desc: `This is used to get/set the look state of the cockpit camera. Note that this value will also affect the CAMERA_SUBSTATE value, when the CAMERA_STATE is set to 2 (Cockpit).`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "COCKPIT CAMERA HEIGHT": {
    desc: `This can be used to get/set the cockpit camera height modifier expressed as a percentage. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "COCKPIT CAMERA INSTRUMENT AUTOSELECT": {
    desc: `This can be used to get or set the autoselect option for the cockpit camera when viewing the instruments (ie: the CAMERA_SUBSTATE is 5). When enabled the camera will move automatically if the player mouse reaches the edge of the screen and there are instrument panels available on that side.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "COCKPIT CAMERA MOMENTUM": {
    desc: `Sets/gets the momentum modifier of the cockpit camera, which is controls how fast/slow the camera will stop moving when no longer being moved by the user. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "COCKPIT CAMERA SPEED": {
    desc: `Sets/gets the translation speed modifier of the cockpit camara, as a percentage. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "COCKPIT CAMERA UPPER POSITION": {
    desc: `Sets/gets the current "upper position" cockpit camera toggle. When 1 (TRUE), the camera is is in the upper position, and when 0 (FALSE) it is in the default position.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "COCKPIT CAMERA ZOOM": {
    desc: `Sets/gets the zoom/FOV modifier for the cockpit camera. Note that when setting this value, it will affect the camera regardless of whether the GAMEPLAY_CAMERA_FOCUS is set to manual or automatic. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "COCKPIT CAMERA ZOOM SPEED": {
    desc: `Sets/gets the speed modifier for when the zoom/FOV cockpit camera changes zoom/FOV levels. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const DRONE_CAMERAS = {
  "DRONE CAMERA FOCUS": {
    desc: `Sets/gets the focus modifier for the drone camera. Default is 50%, and a lower value will set the drone focus to things in the foreground and a higher level will set the drone focus to things in the background. Note that this is only taken into account when the DRONE_CAMERA_FOCUS_MODE is set to 3 (manual).`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "DRONE CAMERA FOCUS MODE": {
    desc: `Sets/gets the current drone focus mode. When set to 3 (manual), the focus position will be based on the DRONE_CAMERA_FOCUS value.`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "DRONE CAMERA FOLLOW": {
    desc: `Sets/gets the whether the drone camera is in follow mode or not.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "DRONE CAMERA FOV": {
    desc: `Sets/gets the zoom/FOV modifier for the drone camera. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "DRONE CAMERA LOCKED": {
    desc: `Sets/gets the whether the drone camera is locked or not.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "DRONE CAMERA SPEED ROTATION": {
    desc: `Sets/gets the rotation speed modifier of the drone camara, as a percentage. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
  "DRONE CAMERA SPEED TRAVELLING": {
    desc: `Sets/gets the translation speed modifier of the drone camara, as a percentage. Default is 50%.`,
    units: `percent`,
    ...dataType(`Float64`, SETTABLE),
  },
};

const SMART_CAMERAS = {
  "SMART CAMERA ACTIVE": {
    desc: `Sets/gets the whether the smart camera is active or not.`,
    units: `bool`,
    ...dataType(`Int32`, SETTABLE),
  },
  "SMART CAMERA INFO:index": {
    desc: `Gets information on the smartcam system. The index sets what kind of information will be returned (or set).`,
    units: `Number`,
    ...dataType(`Int32`, SETTABLE),
  },
  "SMART CAMERA LIST:index": {
    desc: `Retrieves the type of target for the indexed position in the smartcam list, counting from 0 (so index 0 is the first target in the list).`,
    units: `Enum`,
    ...dataType(`Int32`, SETTABLE),
  },
  "SMART CAMERA LIST DESCRIPTION:index": {
    desc: `This returns a localized string that represents the smartcam target specified by the given index. Indices count from 0 so index 0 is the first target in the list. 	String`,
    units: null,
    ...dataType(`StringV`),
  },
};

export const CameraVariables = {
  ...CAMERAS,
  ...CHASE_CAMERAS,
  ...COCKPIT_CAMERAS,
  ...DRONE_CAMERAS,
  ...SMART_CAMERAS,
};
