import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import React, { useState } from 'react';

//const deviceTypeOptions: { value: string; title: string }[] = [
const sensorFunctionOptions = [
	{
		label: 'Select Sensor Function Option',
		title: 'selectsensorfunction',
		disabled: true,
	},
	{
		label: '0',
		title: 'sensorFunctionAppMode',
	},
	{
		label: '1',
		title: 'sensorFunctionPresence',
	},
	{
		label: '4',
		title: 'sensorFunctionTwilight',
	},
	{
		label: '5',
		title: 'sensorFunctionMotionDetector',
	},
	{
		label: '7',
		title: 'sensorFunctionSmokeDetector',
	},
	{
		label: '8',
		title: 'sensorFunctionWindMonitor',
	},
	{
		label: '9',
		title: 'sensorFunctionRainMonitor',
	},
	{
		label: '10',
		title: 'sensorFunctionSunRadiation',
	},
	{
		label: '11',
		title: 'sensorFunctionThermostat',
	},
	{
		label: '12',
		title: 'sensorFunctionBatteryLow',
	},
	{
		label: '13',
		title: 'sensorFunctionWindowContact',
	},
	{
		label: '14',
		title: 'sensorFunctionDoorContact',
	},
	{
		label: '15',
		title: 'sensorFunctionWindowHandle',
	},
	{
		label: '16',
		title: 'sensorFunctionGarageDoor',
	},
	{
		label: '17',
		title: 'sensorFunctionSunProtection',
	},
	{
		label: '18',
		title: 'sensorFunctionFrostDetection',
	},
	{
		label: '19',
		title: 'sensorFunctionHeatingEnabled',
	},
	{
		label: '20',
		title: 'sensorFunctionHeatingChangeOver',
	},
	{
		label: '21',
		title: 'sensorFunctionInitializationStatus',
	},
	{
		label: '22',
		title: 'sensorFunctionMalfunction',
	},
	{
		label: '23',
		title: 'sensorFunctionService',
	},
];

export const SelectSensorFunction = (): JSX.Element => {
	const { translate: _ } = useI18n();
	const [sensorOptions, setOutputLightOptions] = useState('selectsensorfunction');

	const handleChangeLightOptions = (event: SelectChangeEvent) => {
		setOutputLightOptions(event.target.value);
		console.log(event.target.value);
	};

	const SensorFunctionSelect = () => {
		const menuItem: JSX.Element[] = [];
		for (const key in sensorFunctionOptions) {
			menuItem.push(
				<MenuItem
					disabled={sensorFunctionOptions[key].disabled}
					key={key + sensorFunctionOptions[key].title}
					value={sensorFunctionOptions[key].label}
				>{`${_(sensorFunctionOptions[key].title)}`}</MenuItem>,
			);
		}
		return menuItem;
	};

	return (
		<React.Fragment>
			<React.Fragment>
				<Box sx={{ minWidth: 120, maxWidth: 300, width: '250px' }}>
					<FormControl>
						<InputLabel id="SensorFunction-select-label">{_('select Sensor Function Option')}</InputLabel>
						<Select
							labelId="SensorFunction-select-label"
							id="SensorFunction"
							value={sensorOptions}
							label="select Sensor Function"
							onChange={handleChangeLightOptions}
							sx={{ width: 250 }}
						>
							{SensorFunctionSelect()}
						</Select>
					</FormControl>
				</Box>
			</React.Fragment>
		</React.Fragment>
	);
};
