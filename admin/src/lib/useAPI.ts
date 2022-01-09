import React from 'react';
import { useConnection, useGlobals } from 'iobroker-react/hooks';
import { v4 as uuidv4 } from 'uuid';

export interface Device {
	id: string;
	value: ioBroker.DeviceObject;
	status?: 'unknown' | 'alive' | 'asleep' | 'awake' | 'dead';
	ready?: boolean;
}

export class API {
	public constructor(private readonly namespace: string, private readonly connection) {
		this.uuid = uuidv4();
	}
	private readonly uuid: string;
	// add API calls here
}

/** Hook to communicate with the adapter via sendTo calls */
export function useAPI(): API {
	const { namespace } = useGlobals();
	const connection = useConnection();
	const api = React.useMemo(() => new API(namespace, connection), [connection, namespace]);
	return api;
}
