import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import React, { useState } from 'react';
import { Config } from '../lib/Config';

//const deviceTypeOptions: { value: string; title: string }[] = [
const colorClassOptions = [
	{
		label: 'Select DS Color',
		title: 'selectcolor',
		disabled: true,
	},
	{
		label: '1',
		title: 'yellowColorClass',
	},
	{
		label: '2',
		title: 'greyColorClass',
	},
	{
		label: '3',
		title: 'blueColorClass',
	},
	{
		label: '4',
		title: 'cyanColorClass',
	},
	{
		label: '5',
		title: 'magentaColorClass',
	},
	{
		label: '6',
		title: 'redColorClass',
	},
	{
		label: '7',
		title: 'greenColorClass',
	},
	{
		label: '8',
		title: 'blackColorClass',
	},
	{
		label: '9',
		title: 'whiteColorClass',
	},
];

/* interface SelectColorClassOptions {
	onChange: (value: number) => void;
} */
/* export const SelectColorClaasOptions: React.FC<SelectColorClaasOptions> = ({ onChange }): JSX.Element => { */
export const SelectColorClassOptions = (): JSX.Element => {
	const { translate: _ } = useI18n();
	const [colorOptions, setColorGlassOptions] = useState('selectcolor');

	const handleColorClassOptions = (event: SelectChangeEvent) => {
		setColorGlassOptions(event.target.value);
		console.log(typeof event.target.value);
		/* onChange(JSON.parse(event.target.value)); */
		Config.color = JSON.parse(event.target.value);
	};

	const ColorClassSelect = () => {
		const menuItem: JSX.Element[] = [];
		for (const key in colorClassOptions) {
			menuItem.push(
				<MenuItem
					disabled={colorClassOptions[key].disabled}
					key={key + colorClassOptions[key].title}
					value={colorClassOptions[key].label}
				>{`${_(colorClassOptions[key].title)}`}</MenuItem>,
			);
		}
		return menuItem;
	};

	return (
		<React.Fragment>
			<React.Fragment>
				<Box sx={{ minWidth: 120, maxWidth: 300, width: '250px' }}>
					<FormControl>
						<InputLabel id="ColorClass-select-label">{_('select Color Class')}</InputLabel>
						<Select
							labelId="ColorClass-select-label"
							id="ColorClass"
							value={colorOptions}
							label="select Color Class"
							onChange={handleColorClassOptions}
							sx={{ width: 250 }}
						>
							{ColorClassSelect()}
						</Select>
					</FormControl>
				</Box>
			</React.Fragment>
		</React.Fragment>
	);
};
