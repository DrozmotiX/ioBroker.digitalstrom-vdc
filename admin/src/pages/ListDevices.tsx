import React from 'react';
import { Device, useAPI } from '../lib/useAPI';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export const ListDevices: React.FC<DevicesProps> = (props) => {
	return <div id="ListDevices">ListDevices</div>;
};
