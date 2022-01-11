import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { NotRunning, NoDevices } from '../components/Messages';
import { useAdapter, useDialogs } from 'iobroker-react';

import { Button } from '@mui/material';
import { dsDevice } from '../types/dsDevice';
// import { useSelect } from '../hooks/useSelect';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export const ListDevices: React.FC<DevicesProps> = (props) => {
	const { alive: adapterRunning, connected: driverReady } = useAdapter();
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { showSelectId } = useDialogs();

	const api = useAPI();

	// if (!adapterRunning || !driverReady) return <NotRunning />;
	// if (!props.devices) return <NoDevices />;
	return (
		<div id="ListDevices">
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
			<br />
			<br />
			SelectIDs: {JSON.stringify(selectIdValue)}
			<br />
			<br />
			<Button
				onClick={async () => {
					{
						console.log('click to open Add Mock Device');
						console.log(JSON.stringify(await api.listDevices()));
						const testDevice: dsDevice = {
							name: 'test',
							watchStateID: { button_0: 'test' },
							id: '12345',
							dsConfig: {
								dSUID: '1234556',
								primaryGroup: 8,
								name: 'testDevice',
								modelFeatures: {
									highlevel: true,
								},
								displayId: '',
								model: 'ioBroker',
								modelUID: 'UUID',
								modelVersion: '0.0.1',
								vendorName: 'KYUKA',
							},
						};
						console.log(JSON.stringify(await api.createDevice(testDevice)));
						console.log(JSON.stringify(await api.listDevices()));
					}
				}}
				variant="outlined"
			>
				Add Mock Device
			</Button>
		</div>
	);
};
