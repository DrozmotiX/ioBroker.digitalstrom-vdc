import React from 'react';
import { Device, useAPI } from '../lib/useAPI';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export const AddNewDevices: React.FC<DevicesProps> = (props) => {
	return <div id="AddNewDevices">AddNewDevice</div>;
};
