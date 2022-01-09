import React from 'react';
import { Device, useAPI } from './useAPI';

export interface DevicesContextData {
	devices: Record<number, Device>;
	updateDevices(): Promise<void>;
}

export const DevicesContext = React.createContext<DevicesContextData>({
	devices: {},
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	async updateDevices() {},
});

export function useDevices(): readonly [Record<number, Device> | undefined, () => Promise<void>] {
	const [devices, setDevices] = React.useState<Record<number, Device>>();
	async function updateDevices(): Promise<void> {
		// TODO add BL
	}

	return [devices, updateDevices] as const;
}
