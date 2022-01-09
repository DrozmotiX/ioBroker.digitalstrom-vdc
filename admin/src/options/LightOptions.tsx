import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import React, { useState } from 'react';

//const deviceTypeOptions: { value: string; title: string }[] = [
const outputLightOptions = [
	{
		label: 'Select Light Option',
		title: 'selectlight',
		disabled: true,
	},
	{
		label: 'basic',
		title: 'outputLightBasic',
	},
	{
		label: 'colorlight',
		title: 'outputLightColorlight',
	},
	{
		label: 'ctlight',
		title: 'outputLightCTLight',
	},
];

export const SelectLightOptions = (): JSX.Element => {
	const { translate: _ } = useI18n();
	const [lightOptions, setOutputLightOptions] = useState('selectlight');

	const handleChangeLightOptions = (event: SelectChangeEvent) => {
		setOutputLightOptions(event.target.value);
		console.log(event.target.value);
	};

	const LightOptionsSelect = () => {
		const menuItem: JSX.Element[] = [];
		for (const key in outputLightOptions) {
			menuItem.push(
				<MenuItem
					disabled={outputLightOptions[key].disabled}
					key={key + outputLightOptions[key].label}
					value={outputLightOptions[key].title}
				>{`${_(outputLightOptions[key].label)}`}</MenuItem>,
			);
		}
		return menuItem;
	};

	return (
		<React.Fragment>
			<React.Fragment>
				<Box sx={{ minWidth: 120, maxWidth: 300, width: '250px' }}>
					<FormControl>
						<InputLabel id="LightOptions-select-label">{_('select Light Option')}</InputLabel>
						<Select
							labelId="LightOptions-select-label"
							id="LightOptions"
							value={lightOptions}
							label="select Light Option"
							onChange={handleChangeLightOptions}
							sx={{ width: 250 }}
						>
							{LightOptionsSelect()}
						</Select>
					</FormControl>
				</Box>
			</React.Fragment>
		</React.Fragment>
	);
};
