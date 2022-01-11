import React from 'react';
import type { Connection } from '@iobroker/socket-client';
import { useConnection, useGlobals } from 'iobroker-react/hooks';
import { v4 as uuidv4 } from 'uuid';
import { dsDevice } from '../types/dsDevice';

export interface Device {
	id: string;
	value: ioBroker.DeviceObject;
	status?: 'unknown' | 'alive' | 'asleep' | 'awake' | 'dead';
	ready?: boolean;
}

export type SendToResult<T = any> =
	| {
			error: string | Error;
			result?: undefined;
	  }
	| {
			error?: undefined;
			result: T;
	  };

export class API {
	public constructor(private readonly namespace: string, private readonly connection: Connection) {
		this.uuid = uuidv4();
	}
	private readonly uuid: string;
	// add API calls here
	public async listDevices(): Promise<string[]> {
		const { error, result } = await this.connection.sendTo<SendToResult<string[]>>(this.namespace, 'ListDevices');
		if (error) throw error;
		return result ?? [];
	}

	public async createDevice(device: dsDevice): Promise<string[]> {
		const { error, result } = await this.connection.sendTo<SendToResult<string[]>>(
			this.namespace,
			'addNewDevice',
			device,
		);
		if (error) throw error;
		return result ?? [];
	}
}

/** Hook to communicate with the adapter via sendTo calls */
export function useAPI(): API {
	const { namespace } = useGlobals();
	const connection = useConnection();
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const api = React.useMemo(() => new API(namespace, connection), [connection, namespace]);
	return api;
}
