var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};
var utils = __toModule(require("@iobroker/adapter-core"));
class DigitalstromVdc extends utils.Adapter {
  constructor(options = {}) {
    super(__spreadProps(__spreadValues({}, options), {
      name: "digitalstrom-vdc"
    }));
    this.allDevices = [];
    this.on("ready", this.onReady.bind(this));
    this.on("stateChange", this.onStateChange.bind(this));
    this.on("message", this.onMessage.bind(this));
    this.on("unload", this.onUnload.bind(this));
    this.allDevices = [];
  }
  async onReady() {
    this.setState("info.connection", true, true);
    this.allDevices = await this.refreshDeviceList();
  }
  onUnload(callback) {
    try {
      callback();
    } catch (e) {
      callback();
    }
  }
  onStateChange(id, state) {
    if (state) {
      this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
    } else {
      this.log.info(`state ${id} deleted`);
    }
  }
  async refreshDeviceList() {
    return await this.getObjectViewAsync("digitalstrom-vdc", "listDevices", {
      startkey: "digitalstrom-vdc." + this.instance + ".",
      endkey: "digitalstrom-vdc." + this.instance + ".\u9999"
    }).then((doc) => {
      if (doc && doc.rows) {
        const aD = [];
        for (let i = 0; i < doc.rows.length; i++) {
          const id = doc.rows[i].id;
          const obj = doc.rows[i].value;
          if (obj && Object.keys(obj).length > 0) {
            this.log.debug("Found " + id + ": " + JSON.stringify(obj));
            if (obj.deviceObj.dsConfig) {
              aD.push(obj.deviceObj);
            }
          }
        }
        if (!doc.rows.length)
          console.log("No objects found.");
        this.log.debug("AD: " + JSON.stringify(aD));
        return aD;
      } else {
        console.log("No objects found: ");
        return [];
      }
    });
  }
  async onMessage(obj) {
    const respond = (response) => {
      if (obj.callback)
        this.sendTo(obj.from, obj.command, response, obj.callback);
    };
    const responses = {
      ACK: {error: null},
      OK: {error: null, result: "ok"},
      ERROR_UNKNOWN_COMMAND: {error: "Unknown command!"},
      MISSING_PARAMETER: (paramName) => {
        return {error: 'missing parameter "' + paramName + '"!'};
      },
      COMMAND_ACTIVE: {error: "command already active"},
      RESULT: (result) => ({error: null, result}),
      ERROR: (error) => ({error})
    };
    this.log.debug(`received onMessage ${JSON.stringify(obj)}`);
    if (typeof obj === "object") {
      switch (obj.command) {
        case "addNewDevice": {
          this.log.debug("Add devices command received " + JSON.stringify(obj));
          try {
            const deviceObj = obj.message;
            this.log.debug(JSON.stringify(deviceObj));
            this.setObjectNotExistsAsync(`DS-Devices.configuredDevices.${deviceObj.id}`, {
              type: "state",
              common: {
                name: deviceObj.name,
                type: "boolean",
                role: "indicator",
                read: true,
                write: true
              },
              native: {
                deviceObj
              }
            });
            await this.setStateAsync(`DS-Devices.configuredDevices.${deviceObj.id}`, true);
            this.allDevices = await this.refreshDeviceList();
            return respond(responses.OK);
          } catch (err) {
            console.error("Error while parsing object", err);
            return respond(responses.ERROR(err));
          }
        }
        case "VanishDevice": {
          this.log.info(`sendVanishDevice command receveid for device ${obj.message}`);
        }
        case "ListDevices": {
          return respond(responses.RESULT(this.allDevices));
        }
      }
    }
  }
}
if (require.main !== module) {
  module.exports = (options) => new DigitalstromVdc(options);
} else {
  (() => new DigitalstromVdc())();
}
//# sourceMappingURL=main.js.map
