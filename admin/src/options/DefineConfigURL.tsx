import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { Config } from '../lib/Config';

export default function DefineConfigURL() {
	const [name, setName] = React.useState('');
	const handleChange = (event) => {
		setName(event.target.value);
		console.log(event.target.value);
		Config.configUrl = event.target.value;
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
			<TextField id="outlined-name" label="http://localhost:8081" value={name} onChange={handleChange} />
		</Box>
	);
}
