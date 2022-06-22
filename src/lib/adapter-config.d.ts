// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
	namespace ioBroker {
		interface AdapterConfig {
			vdcName: string;
			vdcPort: number;
			vdcDebug: boolean;
			dsDevices: Array<any>;
			vdcDSUID: string;
			vdcConfigURL: string;
            vdcRunning: boolean;
		}
	}
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};
