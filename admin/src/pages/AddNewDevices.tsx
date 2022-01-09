import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { useAdapter } from 'iobroker-react';
import { NotRunning } from '../components/Messages';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export const AddNewDevices: React.FC<DevicesProps> = (props) => {
	const { alive: adapterRunning, connected: driverReady } = useAdapter();

	if (!adapterRunning || !driverReady) return <NotRunning />;
	return <div id="AddNewDevices">AddNewDevice</div>;
};
