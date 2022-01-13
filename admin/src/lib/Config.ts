interface Config {
	light: boolean;
	configUrl: string;
	name: string;
	deviceType: string;
	color: number;
	watchStateID: any;
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
	OnOffSelectID: any;
	ColorModeSelectID: any;
	ColorTempSelectID: any;
	DimmerSelectID: any;
	HueSelectID: any;
	SaturationSelectID: any;
	RGBSelectID: any;
	SensorSelectID: any;
	ButtonSelectID: any;
}

export const InitialConfig = {
	deviceConfig: {
		light: false,
		addDeviceDeviceType: '',
		configUrl: 'http://localhost:8081',
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
		OnOffSelectID: '',
		ColorModeSelectID: '',
		ColorTempSelectID: '',
		DimmerSelectID: '',
		HueSelectID: '',
		SaturationSelectID: '',
		RGBSelectID: '',
		SensorSelectID: '',
		ButtonSelectID: '',
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
	OnOffSelectID: '',
	ColorModeSelectID: '',
	ColorTempSelectID: '',
	DimmerSelectID: '',
	HueSelectID: '',
	SaturationSelectID: '',
	RGBSelectID: '',
	SensorSelectID: '',
	ButtonSelectID: '',
};

/* lamp: {
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
 	onfirmMsg: boolean;
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
	OnOffSelectID: '',
	ColorModeSelectID: '',
	} */

export const clearConfig = (): void => {
	Config = InitialConfig.deviceConfig;
};
