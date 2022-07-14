/*
 * Created with @iobroker/create-adapter v2.0.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from '@iobroker/adapter-core';

// Load your modules here, e.g.:
// import * as fs from "fs";
import { libdsvdc } from 'libdsvdcts';
import { rgbhelper } from 'rgbhelper';

class DigitalstromVdc extends utils.Adapter {
    vdc: any;
    setOutputChannel: Array<any> = [];
    allDevices: any = [];

    public constructor(options: Partial<utils.AdapterOptions> = {}) {
        super({
            ...options,
            name: 'digitalstrom-vdc',
        });
        this.on('ready', this.onReady.bind(this));
        this.on('stateChange', this.onStateChange.bind(this));
        this.on('objectChange', this.onObjectChange.bind(this));
        this.on('message', this.onMessage.bind(this));
        this.on('unload', this.onUnload.bind(this));
        this.allDevices = [];
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    private async onReady(): Promise<void> {
        // Initialize your adapter here

        // The adapters config (in the instance object everything under the attribute "native") is accessible via
        // this.config:
        /* this.log.info("config option1: " + this.config.option1);
        this.log.info("config option2: " + this.config.option2);
        this.log.info("config option3: " + this.config.dsDevices);
        this.log.info("config option3: " + this.config.vdcName); */

        this.setState('info.connection', false, true);

        /*
        For every state in the system there has to be also an object of type state
        Here a simple template for a boolean variable named "testVariable"
        Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
        */
        await this.setObjectNotExistsAsync('DS-Devices.VDC.running', {
            type: 'state',
            common: {
                name: 'running',
                type: 'boolean',
                role: 'indicator',
                read: true,
                write: true,
            },
            native: {
                Name: 'running',
            },
        });

        /* this.allDevices = await this.getObjectListAsync(null).then((devices) => {
            this.log.debug(`OBJECT OBJECT OBJECT \n\n\n ${JSON.stringify(devices)}`);
            return devices;
        });*/

        this.allDevices = await this.refreshDeviceList();

        const dsDevices: Array<any> = [];
        this.allDevices.forEach((d: any) => {
            this.log.info(JSON.stringify(d.native.deviceObj.dsConfig));
            console.log(JSON.stringify(d.native.deviceObj.dsConfig));
            if (typeof d.native.deviceObj.watchStateID == 'object') {
                for (const [key, value] of Object.entries(d.native.deviceObj.watchStateID)) {
                    this.log.debug(`subscribing to ${key} / ${value}`);
                    this.subscribeForeignStates(value as string);
                }
            } else if (d.native.deviceObj.watchStateID && d.native.deviceObj.watchStateID.length > 0) {
                this.log.debug(`subscribing to ${d.native.deviceObj.watchStateID}`);
                this.subscribeForeignStates(d.native.deviceObj.watchStateID);
            }
            if (d.native.deviceObj.dsConfig) {
                this.log.debug(`Pushing ${JSON.stringify(d.native.deviceObj.dsConfig)} to devices`);
                dsDevices.push(d.native.deviceObj.dsConfig);
            }
        });

        // In order to get state updates, you need to subscribe to them. The following line adds a subscription for our variable we have created above.
        // this.subscribeStates("testVariable");
        // You can also add a subscription for multiple states. The following line watches all states starting with "lights."
        // this.subscribeStates("lights.*");
        // Or, if you really must, you can also watch all states. Don't do this if you don't need to. Otherwise this will cause a lot of unnecessary load on the system:
        // this.subscribeStates("*");

        /*
			setState examples
			you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
		*/
        // the variable testVariable is set to true as command (ack=false)
        // await this.setStateAsync("testVariable", true);

        // same thing, but the value is flagged "ack"
        // ack should be always set to true if the value is received from or acknowledged from the target system
        // await this.setStateAsync("testVariable", { val: true, ack: true });

        // same thing, but the state is deleted after 30s (getState will return null afterwards)
        // await this.setStateAsync("testVariable", { val: true, ack: true, expire: 30 });

        // examples for the checkPassword/checkGroup functions
        /* let result = await this.checkPasswordAsync("admin", "iobroker");
        this.log.info("check user admin pw iobroker: " + result);

        result = await this.checkGroupAsync("admin", "admin");
        this.log.info("check group user admin group admin: " + result);*/

        this.log.debug(`dsDevices: ${JSON.stringify(this.allDevices)}`);

        const vdc = new libdsvdc({ debug: this.config.vdcDebug });

        if (
            this.config.vdcName &&
            this.config.vdcName.length > 0 &&
            this.config.vdcDSUID &&
            this.config.vdcDSUID.length > 0 &&
            this.config.vdcPort
        ) {
            vdc.start(
                {
                    vdcName: this.config.vdcName,
                    vdcDSUID: this.config.vdcDSUID,
                    port: this.config.vdcPort,
                    configURL: this.config.vdcConfigURL,
                },
                dsDevices,
            );
        }

        this.vdc = vdc;

        vdc.on('messageReceived', (msg: JSON) => {
            this.log.debug(`MSG RECEIVED" ${JSON.stringify(msg)}`);
        });

        vdc.on('messageSent', (msg: JSON) => {
            this.log.debug(`MSG SENT" ${JSON.stringify(msg)}`);
        });

        vdc.on('VDSM_NOTIFICATION_SET_CONTROL_VALUE', (msg: any) => {
            this.log.info(`received control value ${JSON.stringify(msg)}`);
            if (msg && msg.name) {
                if (msg && msg.dSUID) {
                    msg.dSUID.forEach((id: string) => {
                        const affectedDevice = this.allDevices.find(
                            (d: any) => d.dsConfig.dSUID.toLowerCase() == id.toLowerCase(),
                        );
                        if (affectedDevice) {
                            // found the device -> it's an update for the device
                            if (affectedDevice.deviceType == 'rgbLamp') {
                                // it's an update for an rgb lamp
                                if (msg.channelId == 'x' || msg.channelId == 'y') {
                                    // we have an CIE situation here
                                } else {
                                    const affectedState = affectedDevice.watchStateID[msg.channelId];
                                    if (affectedState) {
                                        this.log.info(
                                            `Received an update for state ${affectedState} in device ${affectedDevice.name} with value ${msg.value}`,
                                        );
                                        this.setForeignStateAsync(affectedState, {
                                            val: msg.value,
                                            ack: false,
                                        }).then((error) => {
                                            this.log.info(`set ${affectedState} ${error}`);
                                        });
                                    }
                                }
                            }
                        } else if (msg.name === 'TemperatureOutside') {
                            this.setStateAsync('DS-Devices.outdoorValues.temperature', {
                                val: msg.value,
                                ack: true,
                            }).then((error) => {
                                this.log.info(`set temperature ${error}`);
                            });
                        } else if (msg.name === 'BrightnessOutside') {
                            this.setStateAsync('DS-Devices.outdoorValues.brightness', {
                                val: msg.value,
                                ack: true,
                            }).then((error) => {
                                this.log.info(`set brightness ${error}`);
                            });
                        }
                    });
                }
            }
        });

        vdc.on('VDSM_NOTIFICATION_SET_OUTPUT_CHANNEL_VALUE', (msg: any) => {
            this.log.info(`received OUTPUTCHANNELVALUE value ${JSON.stringify(msg)}`);

            if (msg && msg.dSUID) {
                msg.dSUID.forEach((id: string) => {
                    const affectedDevice = this.allDevices.find(
                        (d: any) => d.dsConfig.dSUID.toLowerCase() == id.toLowerCase(),
                    );
                    if (affectedDevice) {
                        // found the device -> it's an update for the device
                        if (affectedDevice.deviceType == 'rgbLamp') {
                            // it's an update for an rgb lamp
                            if (msg.channelId == 'x' || msg.channelId == 'y') {
                                // we have an CIE situation here
                            } else {
                                const affectedState = affectedDevice.watchStateID[msg.channelId];
                                if (affectedState) {
                                    this.log.info(
                                        `Received an update for state ${affectedState} in device ${affectedDevice.name} with value ${msg.value} and ${msg.applyNow}`,
                                    );
                                    this.setOutputChannel.push({
                                        name: msg.channelId,
                                        state: affectedState,
                                        value: msg.value,
                                    });
                                    if (msg.applyNow) {
                                        this.setOutputChannel.push({
                                            name: msg.channelId,
                                            state: affectedState,
                                            value: msg.value,
                                        });

                                        const sat = this.setOutputChannel.find((v) => v.name == 'saturation');
                                        const hue = this.setOutputChannel.find((v) => v.name == 'hue');
                                        const brightness = this.setOutputChannel.find((v) => v.name == 'brightness');
                                        const colortemp = this.setOutputChannel.find((v) => v.name == 'colortemp');

                                        if (sat && hue && brightness) {
                                            // all values exist -> let's perform some magic
                                            this.log.debug(
                                                `Hue: ${hue.value} Saturation: ${sat.value} Brightness: ${brightness.value}`,
                                            );
                                            const rgb = rgbhelper.hsvTOrgb(hue.value, sat.value, brightness.value);
                                            const rgbHex = rgbhelper.rgbTOhex(rgb);

                                            this.setForeignStateAsync(affectedDevice.watchStateID['rgb'], {
                                                val: rgbHex,
                                                ack: false,
                                            }).then((error) => {
                                                if (error) {
                                                    /* this.log.error(
                                                        `Error performing update of the RGB value (${rgb} / ${rgbHex}) on ${affectedDevice.name} `,
                                                    ); */
                                                } else {
                                                    this.log.info(
                                                        `Successful update of RGB to ${rgb} / ${rgbHex} on ${affectedDevice.name}`,
                                                    );
                                                }
                                            });

                                            this.setOutputChannel.forEach((c) => {
                                                this.setForeignStateAsync(c.state, {
                                                    val: c.value,
                                                    ack: false,
                                                }).then((error) => {
                                                    if (error) {
                                                        /* this.log.error(
                                                            `Error performing update of the ${c.name} value (${c.value}) on ${affectedDevice.name} - ${error} `,
                                                        ); */
                                                    } else {
                                                        this.log.info(
                                                            `Successful update of ${c.name} to ${c.value} on ${affectedDevice.name}`,
                                                        );
                                                    }
                                                });
                                            });

                                            this.setForeignStateAsync(affectedDevice.watchStateID.switchModeColor, {
                                                val: true,
                                                ack: false,
                                            }).then((error) => {
                                                if (error) {
                                                    /* this.log.error(
                                                        `Error performing update of the colorMode on ${affectedDevice.name} - ${error}`,
                                                    ); */
                                                } else {
                                                    this.log.info(
                                                        `Successful update of colorMode to false on ${affectedDevice.name}`,
                                                    );
                                                }
                                            });
                                        } else if (brightness) {
                                            // only brightness is set -> lets update it
                                            this.log.debug(`Brightness: ${brightness.value}`);

                                            // turn off / on depending on the brightness
                                            if (brightness.value == 0) {
                                                const affectedStateSwitch = affectedDevice.watchStateID['switch'];
                                                this.setOutputChannel.push({
                                                    name: 'switch',
                                                    state: affectedStateSwitch,
                                                    value: false,
                                                });
                                            } else {
                                                const affectedStateSwitch = affectedDevice.watchStateID['switch'];
                                                this.setOutputChannel.push({
                                                    name: 'switch',
                                                    state: affectedStateSwitch,
                                                    value: true,
                                                });
                                            }
                                            this.setOutputChannel.forEach((c) => {
                                                this.setForeignStateAsync(c.state, {
                                                    val: c.value,
                                                    ack: false,
                                                }).then((error) => {
                                                    if (error) {
                                                        /* this.log.error(
                                                            `Error performing update of the ${c.name} value (${c.value}) on ${affectedDevice.name} - ${error}`,
                                                        ); */
                                                    } else {
                                                        this.log.info(
                                                            `Successful update of ${c.name} to ${c.value} on ${affectedDevice.name}`,
                                                        );
                                                    }
                                                });
                                            });
                                        } else if (colortemp) {
                                            // only colortemp is set -> lets update it and switch color-mode
                                            this.log.debug(`Colortemp: ${colortemp.value}`);
                                            const kelvinValue = Math.floor(1000000 / colortemp.value);

                                            this.setForeignStateAsync(affectedDevice.watchStateID.colortemp, {
                                                val: kelvinValue,
                                                ack: false,
                                            }).then((error) => {
                                                if (error) {
                                                    /* this.log.error(
                                                        `Error performing update of the colortemp value (${kelvinValue}) on ${affectedDevice.name} - ${error}`,
                                                    ); */
                                                } else {
                                                    this.log.info(
                                                        `Successful update of colortemp to ${kelvinValue} on ${affectedDevice.name}`,
                                                    );
                                                }
                                            });

                                            this.setForeignStateAsync(affectedDevice.watchStateID.switchModeColor, {
                                                val: false,
                                                ack: false,
                                            }).then((error) => {
                                                if (error) {
                                                    /* this.log.error(
                                                        `Error performing update of the colorMode on ${affectedDevice.name} - ${error}`,
                                                    ); */
                                                } else {
                                                    this.log.info(
                                                        `Successful update of colorMode to false on ${affectedDevice.name}`,
                                                    );
                                                }
                                            });
                                        } else {
                                            this.log.error(
                                                `Could not set the color on ${
                                                    affectedDevice.name
                                                } because some values where missing inside the buffer ${JSON.stringify(
                                                    this.setOutputChannel,
                                                )}`,
                                            );
                                        }

                                        // reset buffer again
                                        this.setOutputChannel = [];
                                    }
                                }
                            }
                        }
                    }
                });
            }
        });

        vdc.on('VDSM_NOTIFICATION_SAVE_SCENE', (msg: any) => {
            this.log.info(`received save scene event ${JSON.stringify(msg)}`);
            if (msg && msg.dSUID) {
                msg.dSUID.forEach(async (id: string) => {
                    // this.log.debug(`searching for ${id} in ${JSON.stringify(this.config.dsDevices)}`);
                    const affectedDevice = this.allDevices.find(
                        (d: any) => d.dsConfig.dSUID.toLowerCase() == id.toLowerCase(),
                    );
                    if (affectedDevice) {
                        // found device -> storing current values into devicearray
                        if (affectedDevice.deviceType == 'rgbLamp') {
                            //  rgbLamp
                            let key: string;
                            let value: any;
                            const sceneVals: any = {};
                            // get the info on switchModeColor
                            const SMC: any = await this.getForeignStateAsync(
                                affectedDevice.watchStateID.switchModeColor,
                            );
                            for ([key, value] of Object.entries(affectedDevice.watchStateID)) {
                                const state: any = await this.getForeignStateAsync(value);
                                if (!affectedDevice.scenes) {
                                    affectedDevice.scenes = [];
                                }
                                /* if (!affectedDevice.scenes[msg.scene]) {
                                    affectedDevice.scenes[msg.scene] = {};
                                } */
                                // delete scene first
                                let dC = false;

                                switch (key) {
                                    case 'colorTemp':
                                        dC = SMC.val ? true : false;
                                        break;
                                    case 'hue':
                                        dC = SMC.val ? false : true;
                                        break;
                                    case 'saturation':
                                        dC = SMC.val ? false : true;
                                        break;
                                }
                                sceneVals[key] = { value: state.val, dontCare: dC }; // TODO understand and make it dynamic

                                /*this.log.debug(
                                    `Set scene ${msg.scene} on key ${key} to value ${state.val} ::: ${JSON.stringify(
                                        this.config.dsDevices,
                                    )}`,
                                );*/
                            }
                            affectedDevice.scenes = affectedDevice.scenes.filter((d: any) => d.sceneId != msg.scene);
                            affectedDevice.scenes.push({ sceneId: msg.scene, values: sceneVals });
                            this.log.debug(
                                `Set scene ${msg.scene} on ${affectedDevice.name} ::: ${JSON.stringify(
                                    this.allDevices,
                                )}`,
                            );
                            // make it persistent by storing it back to the device
                            await this.setObjectAsync(
                                `digitalstrom-vdc.0.DS-Devices.configuredDevices.${affectedDevice.id}`,
                                {
                                    type: 'state',
                                    common: {
                                        name: affectedDevice.name,
                                        type: 'boolean',
                                        role: 'indicator',
                                        read: true,
                                        write: true,
                                    },
                                    native: {
                                        deviceObj: affectedDevice,
                                    },
                                },
                            ).then(async (success) => {
                                this.log.debug(`Device created ${success}`);
                                this.allDevices = await this.refreshDeviceList();
                            });
                        } else if (affectedDevice.deviceType == 'lamp') {
                            // lamp -> store nothing since only power on / off is supported

                            let key: string;
                            let value: any;
                            const sceneVals: any = {};

                            for ([key, value] of Object.entries(affectedDevice.watchStateID)) {
                                const state: any = await this.getForeignStateAsync(value);
                                if (!affectedDevice.scenes) {
                                    affectedDevice.scenes = [];
                                }
                                /* if (!affectedDevice.scenes[msg.scene]) {
                                    affectedDevice.scenes[msg.scene] = {};
                                } */
                                // delete scene first
                                const dC = false;

                                sceneVals[key] = { value: state.val, dontCare: dC }; // TODO understand and make it dynamic

                                /*this.log.debug(
                                    `Set scene ${msg.scene} on key ${key} to value ${state.val} ::: ${JSON.stringify(
                                        this.config.dsDevices,
                                    )}`,
                                );*/
                            }

                            affectedDevice.scenes = affectedDevice.scenes.filter((d: any) => d.sceneId != msg.scene);
                            affectedDevice.scenes.push({ sceneId: msg.scene, values: sceneVals });
                            this.log.debug(
                                `Set scene ${msg.scene} on ${affectedDevice.name} ::: ${JSON.stringify(
                                    this.allDevices,
                                )}`,
                            );
                            // make it persistent by storing it back to the device
                            await this.setObjectAsync(
                                `digitalstrom-vdc.0.DS-Devices.configuredDevices.${affectedDevice.id}`,
                                {
                                    type: 'state',
                                    common: {
                                        name: affectedDevice.name,
                                        type: 'boolean',
                                        role: 'indicator',
                                        read: true,
                                        write: true,
                                    },
                                    native: {
                                        deviceObj: affectedDevice,
                                    },
                                },
                            ).then(async (success) => {
                                this.log.debug(`Device created ${success}`);
                                this.allDevices = await this.refreshDeviceList();
                            });
                        }
                    }
                });
            }
        });

        vdc.on('VDSM_NOTIFICATION_CALL_SCENE', (msg: any) => {
            this.log.info(`received call scene event ${JSON.stringify(msg)}`);
            // search if the dsUID is known
            if (msg && msg.dSUID) {
                msg.dSUID.forEach((id: string) => {
                    const affectedDevice = this.allDevices.find(
                        (d: any) => d.dsConfig.dSUID.toLowerCase() == id.toLowerCase(),
                    );
                    if (affectedDevice) {
                        // found a device
                        if (affectedDevice.deviceType == 'lamp') {
                            switch (msg.scene) {
                                case 5:
                                    // scene 14 called -> turn on in case of simple light
                                    this.setForeignState(affectedDevice.watchStateID.light, true, false);
                                    break;
                                case 14:
                                    // scene 14 called -> turn on in case of simple light
                                    this.setForeignState(affectedDevice.watchStateID.light, true, false);
                                    break;
                                case 13:
                                    // scene 13 called -> turn off in case of simple light
                                    this.setForeignState(affectedDevice.watchStateID.light, false);
                                    break;
                                case 69:
                                    // scene 69 sleep called -> turn off in case of simple light
                                    this.setForeignState(affectedDevice.watchStateID.light, false);
                                    break;
                                case 72:
                                    // scene 72 away called -> turn off in case of simple light
                                    this.setForeignState(affectedDevice.watchStateID.light, false);
                                    break;
                                case 0:
                                    // scene 0 called -> turn off in case of simple light
                                    this.setForeignState(affectedDevice.watchStateID.light, false);
                                    break;
                                default:
                                    const dScene = affectedDevice.scenes.find((s: any) => {
                                        return s.sceneId == msg.scene;
                                    });
                                    if (dScene) {
                                        // scene is defined... loop it and set all values
                                        let key: any;
                                        let value: any;
                                        this.log.debug(
                                            `looping the values inside scene ${msg.scene} -> ${JSON.stringify(dScene)}`,
                                        );
                                        for ([key, value] of Object.entries(dScene.values)) {
                                            this.log.debug(
                                                `performing update on state: ${key} ${JSON.stringify(
                                                    affectedDevice.watchStateID,
                                                )} with key ${key} value ${value.value}`,
                                            );
                                            // if (key == "switch") value.value = true; // set power state on
                                            this.log.debug(
                                                `setting ${value.value} of ${affectedDevice.name} to on ${affectedDevice.watchStateID[key]}`,
                                            );
                                            this.setForeignState(affectedDevice.watchStateID[key], value.value);
                                        }
                                    }
                                    break;
                            }
                        } else if (affectedDevice.deviceType == 'rgbLamp') {
                            this.log.debug(JSON.stringify(affectedDevice));
                            if (msg.scene == '13') {
                                // turn off power
                                this.setForeignState(affectedDevice.watchStateID.switch, false);
                            } else if (msg.scene == '0') {
                                // turn off power
                                this.setForeignState(affectedDevice.watchStateID.switch, false);
                            } else if (msg.scene == '72') {
                                // turn off power
                                this.setForeignState(affectedDevice.watchStateID.switch, false);
                            } else if (msg.scene == '69') {
                                // turn off power
                                this.setForeignState(affectedDevice.watchStateID.switch, false);
                            } else if (affectedDevice.scenes) {
                                const dScene = affectedDevice.scenes.find((s: any) => {
                                    return s.sceneId == msg.scene;
                                });
                                if (dScene) {
                                    // scene is defined... loop it and set all values
                                    let key: any;
                                    let value: any;
                                    this.log.debug(
                                        `looping the values inside scene ${msg.scene} -> ${JSON.stringify(dScene)}`,
                                    );
                                    for ([key, value] of Object.entries(dScene.values)) {
                                        this.log.debug(
                                            `performing update on state: ${key} ${JSON.stringify(
                                                affectedDevice.watchStateID,
                                            )} with key ${key} value ${value.value}`,
                                        );
                                        // if (key == "switch") value.value = true; // set power state on
                                        this.log.debug(
                                            `setting ${value.value} of ${affectedDevice.name} to on ${affectedDevice.watchStateID[key]}`,
                                        );
                                        this.setForeignState(affectedDevice.watchStateID[key], value.value);
                                    }
                                }
                            }
                        }
                    }
                });
            }
        });

        vdc.on('channelStatesRequest', async (msg: any) => {
            this.log.debug(`received request for status ${JSON.stringify(msg)}`);

            // search if the dsUID is known
            if (msg && msg.dSUID) {
                const affectedDevice = this.allDevices.find(
                    (d: any) => d.dsConfig.dSUID.toLowerCase() == msg.dSUID.toLowerCase(),
                );
                this.log.debug('FOUND DEVICE: ' + JSON.stringify(affectedDevice));
                if (affectedDevice && affectedDevice.deviceType == 'lamp') {
                    const state: any = await this.getForeignStateAsync(affectedDevice.watchStateID.light);
                    // const state: any = await getFState(affectedDevice.watchStateID);
                    this.log.info('msg value from state: ' + JSON.stringify(state));
                    msg.value = state.val ? 100 : 0;
                    this.log.info('msg value from state: ' + msg.value);
                    vdc.sendState(msg.value, msg.messageId);
                } else if (affectedDevice && affectedDevice.deviceType == 'rgbLamp') {
                    msg.names.forEach(async (e: any) => {
                        this.log.debug(`searching state on ${affectedDevice.name} for state ${e}`);
                        let affectedState = affectedDevice.watchStateID[e];
                        if (affectedState) {
                            // this does not match rgb, since that is split in x & y
                            this.log.debug(
                                `Received request for status for device  ${affectedDevice.name} and state ${affectedState}`,
                            );
                            const state: any = await this.getForeignStateAsync(affectedState);
                            this.log.debug('msg value from state: ' + JSON.stringify(state));
                            const subElement = {
                                name: e,
                                elements: [{ name: 'value', value: { vDouble: state.val } }],
                            };
                            vdc.sendComplexState(msg.messageId, subElement);
                        } else if (e == 'x' || e == 'y') {
                            // special handling for x & y
                            // get rgbstate
                            affectedState = affectedDevice.watchStateID['rgb'];
                            if (affectedState) {
                                this.log.debug(`getting rgb value from ${affectedState}`);
                                const state: any = await this.getForeignStateAsync(affectedState);
                                this.log.debug(`got a state for rgb: ${JSON.stringify(state)}`);
                                if (state) {
                                    if (state.val.indexOf('#') == 0) {
                                        state.val = state.val.substring(1);
                                    } else {
                                        // TODO yeelight adapter has a bug and stores the rgb value in dec instead of hex -> we need to convert it to hex first
                                        state.val = parseInt(state.val).toString(16);
                                    }
                                    const rgb = rgbhelper.hexToRgb(state.val);
                                    this.log.debug(
                                        `did some math and got me some rgb from ${state.val} to ${JSON.stringify(rgb)}`,
                                    );
                                    if (rgb) {
                                        const cie = rgbhelper.rgb_to_cie(rgb.r, rgb.g, rgb.b);
                                        this.log.debug(
                                            `did some more math and found me some CIE values from ${JSON.stringify(
                                                rgb,
                                            )} to ${cie}`,
                                        );
                                        let subElement = {};
                                        switch (e) {
                                            case 'x':
                                                subElement = {
                                                    name: 'x',
                                                    elements: [{ name: 'value', value: { vDouble: cie[0] } }],
                                                };
                                                vdc.sendComplexState(msg.messageId, subElement);
                                                break;
                                            case 'y':
                                                subElement = {
                                                    name: 'y',
                                                    elements: [{ name: 'value', value: { vDouble: cie[1] } }],
                                                };
                                                vdc.sendComplexState(msg.messageId, subElement);
                                                break;
                                        }
                                    }
                                }
                            }
                        } else {
                            this.log.error(`The device ${affectedDevice.name} has no watchState for ${e}`);
                        }
                    });
                } else if (affectedDevice && affectedDevice.deviceType == 'multiSensor') {
                    const elements: Array<any> = [];
                    for (const [key, value] of Object.entries(affectedDevice.watchStateID)) {
                        const subState = await this.getForeignStateAsync(value as string);
                        if (subState) {
                            elements.push({
                                name: key as string,
                                elements: [
                                    { name: 'age', value: { vDouble: 1 } },
                                    { name: 'error', value: { vUint64: '0' } },
                                    { name: 'value', value: { vDouble: subState.val } },
                                ],
                            });
                        }
                    }
                    this.log.debug('Sending complex state ' + JSON.stringify(elements));
                    vdc.sendComplexState(msg.messageId, elements);
                } else if (affectedDevice && affectedDevice.deviceType == 'sensor') {
                    const elements: Array<any> = [];
                    for (const [key, value] of Object.entries(affectedDevice.watchStateID)) {
                        const subState = await this.getForeignStateAsync(value as string);
                        if (subState) {
                            elements.push({
                                name: key as string,
                                elements: [
                                    { name: 'age', value: { vDouble: 1 } },
                                    { name: 'error', value: { vUint64: '0' } },
                                    { name: 'value', value: { vDouble: subState.val } },
                                ],
                            });
                        }
                    }
                    vdc.sendComplexState(msg.messageId, elements);
                } else if (affectedDevice && affectedDevice.deviceType == 'presenceSensor') {
                    const elements: Array<any> = [];
                    for (const [key, value] of Object.entries(affectedDevice.watchStateID)) {
                        const subState = await this.getForeignStateAsync(value as string);
                        if (subState) {
                            elements.push({
                                name: key as string,
                                elements: [
                                    { name: 'age', value: { vDouble: 1 } },
                                    { name: 'error', value: { vUint64: '0' } },
                                    { name: 'value', value: { vBool: subState.val } },
                                ],
                            });
                        }
                    }
                    vdc.sendComplexState(msg.messageId, elements);
                } else {
                    // send generic response
                    vdc.sendState(msg.value, msg.messageId);
                }
            }
        });

        vdc.on('binaryInputStateRequest', async (msg: any) => {
            this.log.info(`received request for binaryInputStateRequest ${JSON.stringify(msg)}`);

            // search if the dsUID is known
            if (msg && msg.dSUID) {
                const affectedDevice = this.allDevices.find(
                    (d: any) => d.dsConfig.dSUID.toLowerCase() == msg.dSUID.toLowerCase(),
                );
                this.log.debug(`found device ${JSON.stringify(affectedDevice)}`);
                if (affectedDevice && affectedDevice.deviceType == 'presenceSensor') {
                    // const state: any = await this.getForeignStateAsync(affectedDevice.watchStateID);
                    // const state: any = await getFState(affectedDevice.watchStateID);
                    // this.log.info("msg value from state: " + JSON.stringify(state));
                    // msg.value = state.val ? 1 : 0;
                    // this.log.info("msg value from state: " + msg.value);
                    const inputStates: Array<any> = [];
                    affectedDevice.dsConfig.binaryInputDescriptions.forEach((i: any) => {
                        inputStates.push({
                            name: i.objName,
                            age: 1,
                            value: null,
                        });
                    });
                    vdc.sendBinaryInputState(inputStates, msg.messageId);
                } else if (affectedDevice && affectedDevice.deviceType == 'smokeAlarm') {
                    // const state: any = await this.getForeignStateAsync(affectedDevice.watchStateID);
                    // const state: any = await getFState(affectedDevice.watchStateID);
                    // this.log.info("msg value from state: " + JSON.stringify(state));
                    // msg.value = state.val ? 1 : 0;
                    // this.log.info("msg value from state: " + msg.value);
                    const inputStates: Array<any> = [];
                    affectedDevice.dsConfig.binaryInputDescriptions.forEach((i: any) => {
                        inputStates.push({
                            name: i.objName,
                            age: 1,
                            value: null,
                        });
                    });
                    try {
                        vdc.sendBinaryInputState(inputStates, msg.messageId);
                    } catch (e: any) {
                        this.log.error(JSON.stringify(e));
                    }
                }
            }
        });

        vdc.on('sensorStatesRequest', async (msg: any) => {
            // this.log.info(`received request for binaryInputStateRequest ${JSON.stringify(msg)}`);

            // search if the dsUID is known
            if (msg && msg.dSUID) {
                const affectedDevice = this.allDevices.find(
                    (d: any) => d.dsConfig.dSUID.toLowerCase() == msg.dSUID.toLowerCase(),
                );
                if (affectedDevice && affectedDevice.deviceType == 'sensor') {
                    if (typeof affectedDevice.watchStateID == 'object') {
                        // multiple sensors are defined
                        const sensorStates: Array<any> = [];
                        for (const [key, value] of Object.entries(affectedDevice.watchStateID)) {
                            const state: any = await this.getForeignStateAsync(value as string);
                            // const state: any = await getFState(affectedDevice.watchStateID);
                            this.log.info('msg value from state: ' + JSON.stringify(state));

                            if (
                                affectedDevice.modifiers &&
                                typeof affectedDevice.modifiers == 'object' &&
                                key &&
                                affectedDevice.modifiers[key as string]
                            ) {
                                state.val = (state.val as number) * parseFloat(affectedDevice.modifiers[key as string]);
                            }

                            sensorStates.push({
                                name: key as string,
                                age: 5,
                                value: state.val,
                            });
                        }
                        vdc.sendSensorStatesRequest(sensorStates, msg.messageId);
                    } else {
                        // only one sensor is defined
                        const state: any = await this.getForeignStateAsync(affectedDevice.watchStateID);
                        // const state: any = await getFState(affectedDevice.watchStateID);
                        this.log.info('msg value from state: ' + JSON.stringify(state));
                        const sensorStates: Array<any> = [];
                        affectedDevice.dsConfig.sensorDescriptions.forEach((i: any) => {
                            if (
                                affectedDevice.modifiers &&
                                typeof affectedDevice.modifiers == 'object' &&
                                i.objName &&
                                affectedDevice.modifiers[i.objName as string]
                            ) {
                                state.val =
                                    (state.val as number) * parseFloat(affectedDevice.modifiers[i.objName as string]);
                            }

                            sensorStates.push({
                                name: i.objName,
                                age: 5,
                                value: state.val,
                            });
                        });
                        vdc.sendSensorStatesRequest(sensorStates, msg.messageId);
                    }
                    // msg.value = state.val ? 1 : 0;
                    // this.log.info("msg value from state: " + msg.value);
                    // vdc.sendSensorStatesRequest('sensor_0', 15, 0.000686, msg.messageId);
                } else if (affectedDevice && affectedDevice.deviceType == 'multiSensor') {
                    // multiple sensors are defined
                    const sensorStates: Array<any> = [];
                    for (const [key, value] of Object.entries(affectedDevice.watchStateID)) {
                        const state: any = await this.getForeignStateAsync(value as string);
                        // const state: any = await getFState(affectedDevice.watchStateID);
                        this.log.info('msg value from state: ' + JSON.stringify(state));

                        if (
                            affectedDevice.modifiers &&
                            typeof affectedDevice.modifiers == 'object' &&
                            key &&
                            affectedDevice.modifiers[key as string]
                        ) {
                            state.val = (state.val as number) * parseFloat(affectedDevice.modifiers[key as string]);
                        }

                        sensorStates.push({
                            name: key as string,
                            age: 1,
                            value: state.val,
                        });
                    }
                    vdc.sendSensorStatesRequest(sensorStates, msg.messageId);
                }
            }
        });

        vdc.on('vdcRunningState', () => {
            this.setStateAsync('DS-Devices.VDC.running', { val: true, ack: true });
            this.log.info(`VDC <${this.config.vdcName}> is running on port ${this.config.vdcPort}`);
        });

        vdc.on('deviceZoneChange', (msg: any) => {
            this.log.info(`deviceZoneChange event received with the following information ${JSON.stringify(msg)}`);
        });

        vdc.on('updateDeviceValues', async (msg: any) => {
            this.log.info(`deviceUpdate received with the following information ${JSON.stringify(msg)}`);
            const affectedDevice = this.allDevices.find(
                (d: any) => d.dsConfig.dSUID.toLowerCase() == msg.dSUID.toLowerCase(),
            );
            if (affectedDevice) {
                affectedDevice.dsConfig = msg;
                await this.setObjectAsync(`digitalstrom-vdc.0.DS-Devices.configuredDevices.${affectedDevice.id}`, {
                    type: 'state',
                    common: {
                        name: affectedDevice.name,
                        type: 'boolean',
                        role: 'indicator',
                        read: true,
                        write: true,
                    },
                    native: {
                        deviceObj: affectedDevice,
                    },
                }).then(async (success) => {
                    this.log.debug(`Device created ${success}`);
                    this.allDevices = await this.refreshDeviceList();
                });
            }
        });
        this.setState('info.connection', true, true); // TODO check right place?
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     */
    private onUnload(callback: () => void): void {
        try {
            // Here you must clear all timeouts or intervals that may still be active
            // clearTimeout(timeout1);
            // clearTimeout(timeout2);
            // ...
            // clearInterval(interval1);

            // TODO end all connections and such here!!

            callback();
        } catch (e) {
            callback();
        }
    }

    // If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
    // You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
    // /**
    //  * Is called if a subscribed object changes
    //  */
    // private onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
    // 	if (obj) {
    // 		// The object was changed
    // 		this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
    // 	} else {
    // 		// The object was deleted
    // 		this.log.info(`object ${id} deleted`);
    // 	}
    // }

    /**
     * private function used to fill the alldevices array
     * @private
     */
    private async refreshDeviceList(): Promise<any> {
        interface GetObjectViewItem {
            /** The ID of this object */
            id: string;
            /** A copy of the object from the DB */
            value: ioBroker.Object | null;
        }
        return await this.getObjectViewAsync('digitalstrom-vdc', 'listDevicesFullObj', {
            startkey: 'digitalstrom-vdc.' + this.instance + '.',
            endkey: 'digitalstrom-vdc.' + this.instance + '.\u9999',
        }).then((doc: { rows: GetObjectViewItem[] }) => {
            if (doc && doc.rows) {
                const aD: any = [];
                for (let i = 0; i < doc.rows.length; i++) {
                    const id = doc.rows[i].id;
                    const obj: any = doc.rows[i].value;
                    if (obj && Object.keys(obj).length > 0) {
                        if (
                            obj.deviceObj &&
                            typeof obj.deviceObj == 'object' &&
                            Object.keys(obj.deviceObj).length > 0
                        ) {
                            // TODO check old code: if (obj.deviceObj.dsConfig) {
                            this.log.debug('Found ' + id + ': ' + JSON.stringify(obj.deviceObj));
                            aD.push(obj.deviceObj);
                        }
                    }
                }
                if (!doc.rows.length) console.log('No objects found.');
                this.log.debug('AD: ' + JSON.stringify(aD));
                return aD;
            } else {
                console.log('No objects found: ');
                return [];
            }
        });
    }

    // If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
    // You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
    // /**
    //  * Is called if a subscribed object changes
    //  */
    private onObjectChange(id: string, obj: ioBroker.Object | null | undefined): void {
        if (obj) {
            // The object was changed
            this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
        } else {
            // The object was deleted
            this.log.info(`object ${id} deleted`);
        }
    }

    private async replyMultiSensor(affectedDevice: any): Promise<void> {
        const elements: Array<any> = [];
        for (const [key, value] of Object.entries(affectedDevice.watchStateID)) {
            const subState = await this.getForeignStateAsync(value as string);
            if (subState) {
                elements.push({
                    name: key as string,
                    elements: [
                        { name: 'age', value: { vDouble: 10 } },
                        { name: 'error', value: { vUint64: '0' } },
                        { name: 'value', value: { vDouble: subState.val } },
                    ],
                });
            }
        }
        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
            {
                name: 'sensorStates',
                elements: elements,
            },
        ]);
    }

    /**
     * Is called if a subscribed state changes
     */
    private onStateChange(id: string, state: ioBroker.State | null | undefined): void {
        try {
            if (state) {
                // The state was changed
                this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);

                // inform vdc
                const affectedDevice = this.allDevices.find(
                    (d: any) => d.watchStateID == id || Object.values(d.watchStateID).indexOf(id) > -1,
                );
                if (affectedDevice && typeof affectedDevice.watchStateID == 'object') {
                    const updateName = Object.keys(affectedDevice.watchStateID).find(
                        (key) => affectedDevice.watchStateID[key] === id,
                    );
                    if (affectedDevice.deviceType == 'multiSensor') {
                        // this.replyMultiSensor(affectedDevice);
                        if (
                            affectedDevice.modifiers &&
                            typeof affectedDevice.modifiers == 'object' &&
                            updateName &&
                            affectedDevice.modifiers[updateName]
                        ) {
                            state.val = (state.val as number) * parseFloat(affectedDevice.modifiers[updateName]);
                        }
                        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                            {
                                name: 'sensorStates',
                                elements: [
                                    {
                                        name: updateName,
                                        elements: [
                                            { name: 'age', value: null },
                                            { name: 'error', value: { vUint64: '0' } },
                                            { name: 'value', value: { vDouble: state.val } },
                                        ],
                                    },
                                ],
                            },
                        ]);
                    } else if (affectedDevice.deviceType == 'sensor') {
                        if (
                            affectedDevice.modifiers &&
                            typeof affectedDevice.modifiers == 'object' &&
                            updateName &&
                            affectedDevice.modifiers[updateName]
                        ) {
                            state.val = (state.val as number) * parseFloat(affectedDevice.modifiers[updateName]);
                        }
                        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                            {
                                name: 'sensorStates',
                                elements: [
                                    {
                                        name: updateName,
                                        elements: [
                                            { name: 'age', value: { vDouble: 0.1 } },
                                            { name: 'error', value: { vUint64: '0' } },
                                            { name: 'value', value: { vDouble: state.val } },
                                        ],
                                    },
                                ],
                            },
                        ]);
                    } else if (affectedDevice.deviceType == 'presenceSensor') {
                        const newState = state.val ? 1 : 0;
                        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                            {
                                name: 'binaryInputStates',
                                elements: [
                                    {
                                        name: updateName,
                                        elements: [
                                            { name: 'age', value: { vDouble: 1 } },
                                            { name: 'error', value: { vUint64: '0' } },
                                            { name: 'value', value: { vBool: newState } },
                                        ],
                                    },
                                ],
                            },
                        ]);
                    } else if (affectedDevice.deviceType == 'smokeAlarm') {
                        const newState = state.val ? 1 : 0;
                        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                            {
                                name: 'binaryInputStates',
                                elements: [
                                    {
                                        name: updateName,
                                        elements: [
                                            { name: 'age', value: { vDouble: 1 } },
                                            { name: 'error', value: { vUint64: '0' } },
                                            { name: 'value', value: { vBool: newState } },
                                        ],
                                    },
                                ],
                            },
                        ]);
                    } else if (affectedDevice.deviceType == 'button') {
                        // const newState = state.val ? 1 : 0;
                        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                            {
                                name: 'buttonInputStates',
                                elements: [
                                    {
                                        name: updateName,
                                        elements: [
                                            { name: 'age', value: { vDouble: 1 } },
                                            { name: 'clickType', value: { vUint64: 0 } },
                                            { name: 'error', value: { vUint64: '0' } },
                                            { name: 'value', value: { vBool: 0 } },
                                        ],
                                    },
                                ],
                            },
                        ]);
                    } else if (affectedDevice.deviceType == 'awayButton') {
                        // const newState = state.val ? 1 : 0;
                        this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                            {
                                name: 'buttonInputStates',
                                elements: [
                                    {
                                        name: updateName,
                                        elements: [
                                            { name: 'age', value: { vDouble: 1 } },
                                            { name: 'clickType', value: { vUint64: 4 } },
                                            { name: 'error', value: { vUint64: '0' } },
                                            { name: 'value', value: { vBool: 0 } },
                                        ],
                                    },
                                ],
                            },
                        ]);
                        setTimeout(() => {
                            this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                                {
                                    name: 'buttonInputStates',
                                    elements: [
                                        {
                                            name: updateName,
                                            elements: [
                                                { name: 'age', value: { vDouble: 1 } },
                                                { name: 'clickType', value: { vUint64: 6 } },
                                                { name: 'error', value: { vUint64: '0' } },
                                                { name: 'value', value: { vBool: 0 } },
                                            ],
                                        },
                                    ],
                                },
                            ]);
                        }, 3.5 * 1000);
                    } else if (affectedDevice.deviceType == 'doorbell') {
                        // const newState = state.val ? 1 : 0;
                        if (state.val) {
                            // send event only if val is true
                            this.vdc.sendUpdate(affectedDevice.dsConfig.dSUID, [
                                {
                                    name: 'buttonInputStates',
                                    elements: [
                                        {
                                            name: updateName,
                                            elements: [
                                                { name: 'age', value: { vDouble: 1 } },
                                                { name: 'clickType', value: { vUint64: 0 } },
                                                { name: 'error', value: { vUint64: '0' } },
                                                { name: 'value', value: { vBool: 0 } },
                                            ],
                                        },
                                    ],
                                },
                            ]);
                        }
                    }
                }
            } else {
                // The state was deleted
                this.log.info(`state ${id} deleted`);
            }
        } catch (error) {
            let message = error;
            if (error instanceof Error && error.stack != null) message = error.stack;
            this.log.error(`[onStateChange] ${message}`)
        }
    }

    // If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
    // /**
    //  * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
    //  * Using this method requires "common.messagebox" property to be set to true in io-package.json
    //  */
    private async onMessage(obj: ioBroker.Message): Promise<void> {
        const respond = (response: any): void => {
            if (obj.callback) this.sendTo(obj.from, obj.command, response, obj.callback);
        };
        // some predefined responses so we only have to define them once
        const responses = {
            ACK: { error: null },
            OK: { error: null, result: 'ok' },
            ERROR_UNKNOWN_COMMAND: { error: 'Unknown command!' },
            MISSING_PARAMETER: (paramName: string) => {
                return { error: 'missing parameter "' + paramName + '"!' };
            },
            COMMAND_ACTIVE: { error: 'command already active' },
            RESULT: (result: unknown) => ({ error: null, result }),
            ERROR: (error: string) => ({ error }),
        };
        this.log.debug(`received onMessage ${JSON.stringify(obj)}`);
        if (typeof obj === 'object') {
            switch (obj.command) {
                case 'addNewDevice': {
                    this.log.debug('Add devices command received ' + JSON.stringify(obj));
                    try {
                        const deviceObj = obj.message as any;
                        this.log.debug(JSON.stringify(deviceObj));
                        this.setObjectNotExistsAsync(`DS-Devices.configuredDevices.${deviceObj.id}`, {
                            type: 'state',
                            common: {
                                name: deviceObj.name,
                                type: 'boolean',
                                role: 'indicator',
                                read: true,
                                write: true,
                            },
                            native: {
                                deviceObj,
                            },
                        });
                        await this.setStateAsync(`DS-Devices.configuredDevices.${deviceObj.id}`, true);
                        this.allDevices = await this.refreshDeviceList();
                        return respond(responses.OK);
                        //
                    } catch (err: any) {
                        console.error('Error while parsing object', err);
                        return respond(responses.ERROR(err));
                    }
                }
                case 'VanishDevice': {
                    this.log.info(`sendVanishDevice command receveid for device ${obj.message}`);
                    break;
                }
                case 'ListDevices': {
                    this.allDevices = await this.refreshDeviceList();
                    this.log.debug(`allDevices sendToListDevices - ${JSON.stringify(this.allDevices)}`);
                    return respond(responses.RESULT(this.allDevices));
                }
                case 'RemoveDevice': {
                    this.log.debug(`Remove device for ${JSON.stringify(obj.message)} received`);
                    const deviceObj = obj.message as any;
                    this.log.debug(`removing ${deviceObj._id}`);
                    await this.delObject(deviceObj._id as string);
                    this.log.debug(`Device ${JSON.stringify(obj.message)} successfully removed`);
                    // if (deviceObj.dSUID) this.vdc.sendVanish(deviceObj.dSUID as string);
                    this.allDevices = await this.refreshDeviceList();
                    return respond(responses.OK);
                }
            }
            // 		if (obj.command === 'send') {
            // 			// e.g. send email or pushover or whatever
            // 			this.log.info('send command');
            // 			// Send response in callback if required
            // 			if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
            // 		}
            /* TODO check old stuff from other brancch!

			            if (obj.command === "send") {
                // e.g. send email or pushover or whatever
                this.log.info("send command");

                // Send response in callback if required
                if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
            }
            if (obj.command === "genSDUID") {
                this.log.info("genSDUID command receveid");
                if (obj.callback) this.sendTo(obj.from, obj.command, "Message received", obj.callback);
            }

            if (obj.command === "getRunning") {
                // this.log.info("getRunning command received");
                this.getState("DS-Devices.VDC.running", (error, state) => {
                    //this.log.info(JSON.stringify(state));
                    // this.log.info(JSON.stringify(obj));
                    if (obj.callback) this.sendTo(obj.from, obj.command, { state }, obj.callback);
                });
            }

            if (obj.command === "sendVanishDevice") {
                this.log.info(`sendVanishDevice command receveid for device ${obj.message}`);
            }

            if (obj.command === "sendListDevices") {
                this.log.info(`sendListDevices command receveid`);
                /* this.getStates("DS-Devices.configuredDevices.*", (error, devices) => {
                    this.log.debug(`the following devices are configured on the system ${JSON.stringify(devices)}`);
                    if (obj.callback) this.sendTo(obj.from, obj.command, { devices }, obj.callback);
                }); */
            /*
			if (obj.callback) this.sendTo(obj.from, obj.command, this.allDevices, obj.callback);
		}

		if (obj.command === "sendRemoveDevice") {
			this.log.debug(`Remove device for ${JSON.stringify(obj.message)} received`);
			const deviceObj = obj.message as any;
			this.delObject(`DS-Devices.configuredDevices.${deviceObj.id as string}`, async (error: any) => {
				this.log.debug(`Device ${JSON.stringify(obj.message)} successfully with message ${error} removed`);
				this.log.debug(JSON.stringify(deviceObj));
				if (obj.callback) this.sendTo(obj.from, obj.command, {}, obj.callback);

				if (deviceObj.dSUID) this.vdc.sendVanish(deviceObj.dSUID as string);
				this.allDevices = await this.refreshDeviceList();
			});
		}

		if (obj.command === "sendAddDevice") {
			this.log.debug("Add devices command received " + JSON.stringify(obj));
			try {
				const deviceObj = obj.message as any;
				this.log.debug(JSON.stringify(deviceObj));
				this.setObjectNotExistsAsync(`DS-Devices.configuredDevices.${deviceObj.id}`, {
					type: "state",
					common: {
						name: deviceObj.name,
						type: "boolean",
						role: "indicator",
						read: true,
						write: true,
					},
					native: {
						deviceObj,
					},
				}).then(async (success) => {
					this.log.debug(`Device created ${success}`);
					await this.setStateAsync(`DS-Devices.configuredDevices.${deviceObj.id}`, true);
					if (obj.callback) this.sendTo(obj.from, obj.command, { deviceObj }, obj.callback);
					this.allDevices = await this.refreshDeviceList();
				});
			} catch (err) {
				console.error("Error while parsing object", err);
			}
		}
			 */
        }
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    module.exports = (options: Partial<utils.AdapterOptions> | undefined) => new DigitalstromVdc(options);
} else {
    // otherwise start the instance directly
    (() => new DigitalstromVdc())();
}
