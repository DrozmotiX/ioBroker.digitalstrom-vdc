import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Config } from '../lib/Config';
import { useI18n } from 'iobroker-react/hooks';

export default function DefineName() {
	const [name, setName] = React.useState('');
	const { translate: _ } = useI18n();
	const handleChange = (event) => {
		setName(event.target.value);
		console.log(event.target.value);
		Config.name = event.target.value;
	};

	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<TextField id="outlined-name" label={_('defineName')} value={name} onChange={handleChange} />
		</Box>
	);
}
