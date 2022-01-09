interface Config {
	light: boolean;
	configUrl: string;
	name: string;
	deviceType: string;
	color: number;
	watchStateID: string;
	addDeviceDeviceType: string;
	basicButton: string;
	DeviceSensorColorClass: string;
	deviceSensorResolution: string;
	DeviceSensorState: string;
	DeviceSensorType: string;
	DeviceSensorUsage: string;
	DeviceSensorMax: string;
	DeviceSensorMin: string;
	DeviceSensorSIUnit: string;
	DeviceSensorSymbol: string;
	/* confirmMsg: boolean; */
	showCreateConfirmation: string;
	manualDeviceId: string;
	showSelectId: string;
	selectIdValue: string;
	basicDoorbell: string;
	DeviceRGBLampPowerSwitch: string;
	DeviceRGBLampColormode: string;
	DeviceRGBLampDimmer: string;
	DeviceRGBLampColortemp: string;
	DeviceRGBLampHue: string;
	DeviceRGBLampSaturation: string;
	DeviceRGBLampRGB: string;
	sensorList: string;
	unitValue: string;
	sensorMultiplier: string;
}

export const InitialConfig = {
	deviceConfig: {
		light: false,
		addDeviceDeviceType: '',
		configUrl: '',
		name: '',
		deviceType: '',
		color: 0,
		watchStateID: '',
		deviceSensorResolution: '',
		basicButton: '',
		DeviceSensorColorClass: '',
		DeviceSensorState: '',
		DeviceSensorType: '',
		DeviceSensorUsage: '',
		DeviceSensorMax: '',
		DeviceSensorMin: '',
		DeviceSensorSIUnit: '',
		DeviceSensorSymbol: '',
		/* confirmMsg: false, */
		showCreateConfirmation: '',
		manualDeviceId: '',
		showSelectId: '',
		selectIdValue: '',
		basicDoorbell: '',
		DeviceRGBLampPowerSwitch: '',
		DeviceRGBLampColormode: '',
		DeviceRGBLampDimmer: '',
		DeviceRGBLampColortemp: '',
		DeviceRGBLampHue: '',
		DeviceRGBLampSaturation: '',
		DeviceRGBLampRGB: '',
		sensorList: '',
		unitValue: '',
		sensorMultiplier: '',
	},
};

export let Config: Config = {
	light: false,
	configUrl: '',
	name: '',
	deviceType: '',
	color: 0,
	watchStateID: '',
	addDeviceDeviceType: '',
	basicButton: '',
	DeviceSensorColorClass: '',
	deviceSensorResolution: '',
	DeviceSensorState: '',
	DeviceSensorType: '',
	DeviceSensorUsage: '',
	DeviceSensorMax: '',
	DeviceSensorMin: '',
	DeviceSensorSIUnit: '',
	DeviceSensorSymbol: '',
	/* confirmMsg: boolean; */
	showCreateConfirmation: '',
	manualDeviceId: '',
	showSelectId: '',
	selectIdValue: '',
	basicDoorbell: '',
	DeviceRGBLampPowerSwitch: '',
	DeviceRGBLampColormode: '',
	DeviceRGBLampDimmer: '',
	DeviceRGBLampColortemp: '',
	DeviceRGBLampHue: '',
	DeviceRGBLampSaturation: '',
	DeviceRGBLampRGB: '',
	sensorList: '',
	unitValue: '',
	sensorMultiplier: '',
};

export const clearConfig = (): void => {
	Config = InitialConfig.deviceConfig;
};
