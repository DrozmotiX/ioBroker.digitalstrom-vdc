import * as React from 'react';
import { Config } from '../../lib/Config';
import { useDialogs } from 'iobroker-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function ColorModeSelectID() {
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { showSelectId } = useDialogs();

	useEffect(() => {
		Config.ColorModeSelectID = selectIdValue;
	});

	console.log(Config.ColorModeSelectID);

	return (
		<Button
			onClick={() => {
				{
					console.log('click to open selectID');
					console.log('showSelectId', showSelectId);
					showSelectId(
						'test',
						() => {
							console.log('onClose');
						},
						setSelectIdValue,
						selectIdValue,
					);
				}
			}}
			variant="outlined"
		>
			SelectID
		</Button>
	);
}
