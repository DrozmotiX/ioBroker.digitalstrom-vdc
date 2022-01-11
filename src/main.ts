/*
 * Created with @iobroker/create-adapter v2.0.1
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
import * as utils from '@iobroker/adapter-core';

// Load your modules here, e.g.:
// import * as fs from "fs";

class DigitalstromVdc extends utils.Adapter {
	allDevices: any = [];

	public constructor(options: Partial<utils.AdapterOptions> = {}) {
		super({
			...options,
			name: 'digitalstrom-vdc',
		});
		this.on('ready', this.onReady.bind(this));
		this.on('stateChange', this.onStateChange.bind(this));
		// this.on('objectChange', this.onObjectChange.bind(this));
		this.on('message', this.onMessage.bind(this));
		this.on('unload', this.onUnload.bind(this));
		this.allDevices = [];
	}

	/**
	 * Is called when databases are connected and adapter received configuration.
	 */
	private async onReady(): Promise<void> {
		// Initialize your adapter here

		// Reset the connection indicator during startup
		this.setState('info.connection', true, true);
		this.allDevices = await this.refreshDeviceList();
		/*setTimeout(() => {
			this.setState('info.connection', true, true);
		}, 1 * 1000);*/
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
	 * Is called if a subscribed state changes
	 */
	private onStateChange(id: string, state: ioBroker.State | null | undefined): void {
		if (state) {
			// The state was changed
			this.log.info(`state ${id} changed: ${state.val} (ack = ${state.ack})`);
		} else {
			// The state was deleted
			this.log.info(`state ${id} deleted`);
		}
	}

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
		return await this.getObjectViewAsync('digitalstrom-vdc', 'listDevices', {
			startkey: 'digitalstrom-vdc.' + this.instance + '.',
			endkey: 'digitalstrom-vdc.' + this.instance + '.\u9999',
		}).then((doc: { rows: GetObjectViewItem[] }) => {
			if (doc && doc.rows) {
				const aD: any = [];
				for (let i = 0; i < doc.rows.length; i++) {
					const id = doc.rows[i].id;
					const obj: any = doc.rows[i].value;
					if (obj && Object.keys(obj).length > 0) {
						this.log.debug('Found ' + id + ': ' + JSON.stringify(obj));
						if (obj.deviceObj.dsConfig) {
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
				}
				case 'ListDevices': {
					return respond(responses.RESULT(this.allDevices));
				}
			}
			// 		if (obj.command === 'send') {
			// 			// e.g. send email or pushover or whatever
			// 			this.log.info('send command');
			// 			// Send response in callback if required
			// 			if (obj.callback) this.sendTo(obj.from, obj.command, 'Message received', obj.callback);
			// 		}
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
