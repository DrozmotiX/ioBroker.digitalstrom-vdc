import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { NotRunning, NoDevices } from '../components/Messages';
import { useAdapter } from 'iobroker-react';
import { useConnection } from 'iobroker-react/hooks';
import SelectID from '../components/SelectID';
import { Button } from '@mui/material';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

const showSelectId = (dialogName: string, connection: any, setSelectIdValue: any, triggerSelectId) => {
	console.log('showSelectId', SelectID);
	if (!triggerSelectId) return;
	return (
		<SelectID
			dialogName={dialogName}
			themeType="dark"
			socket={connection}
			onChange={(value) => setSelectIdValue(value)}
		/>
	);
};

export const ListDevices: React.FC<DevicesProps> = (props) => {
	const { alive: adapterRunning, connected: driverReady } = useAdapter();
	const connection = useConnection();
	const [triggerSelectId, setTriggerSelectId] = React.useState<boolean>(false);
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();

	// if (!adapterRunning || !driverReady) return <NotRunning />;
	// if (!props.devices) return <NoDevices />;
	return (
		<div id="ListDevices">
			{showSelectId('test', connection, setSelectIdValue, triggerSelectId)};
			<Button
				onClick={() => {
					{
						console.log('click to open selectID');
						setTriggerSelectId(true);
					}
				}}
				variant="outlined"
			>
				SelectID
			</Button>
		</div>
	);
};
