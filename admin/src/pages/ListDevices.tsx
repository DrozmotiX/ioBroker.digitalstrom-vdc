import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { NotRunning, NoDevices } from '../components/Messages';
import { useAdapter } from 'iobroker-react';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export const ListDevices: React.FC<DevicesProps> = (props) => {
	const { alive: adapterRunning, connected: driverReady } = useAdapter();

	if (!adapterRunning || !driverReady) return <NotRunning />;
	if (!props.devices) return <NoDevices />;
	return <div id="ListDevices">ListDevices</div>;
};
