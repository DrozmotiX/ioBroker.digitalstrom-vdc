import * as React from 'react';
import { Config } from '../../lib/Config';
import { useDialogs } from 'iobroker-react';
import { Button, Box } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';

export default function SaturationSelectID() {
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { translate: _ } = useI18n();
	const { showSelectId } = useDialogs();
	const writeBackSelectId = (selectId) => {
		setSelectIdValue(selectId);
		Config.SaturationSelectID = selectId;
	};

	console.log(Config.SaturationSelectID);

	return (
		<Box component="span" sx={{ p: 2, border: '1px dashed grey', textAlign: 'center' }}>
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
							writeBackSelectId,
							selectIdValue,
						);
					}
				}}
				variant="outlined"
			>
				{_('saturationSelectID')}
			</Button>
			<br />
			<br />
			{_('selectedSaturationDP')}
			<br />
			<br />
			{JSON.stringify(selectIdValue)}
		</Box>
	);
}
