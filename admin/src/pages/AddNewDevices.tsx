import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { useAdapter, useDialogs } from 'iobroker-react';
import { NotRunning } from '../components/Messages';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { clearConfig } from '../lib/Config';
import { SelectDeviceType } from '../options/DeviceTypeOptions';

import { useIoBrokerTheme } from 'iobroker-react/hooks';
import Box from '@mui/material/Box';
import { dsDevice } from '../types/dsDevice';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

export const AddNewDevices: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [themeName] = useIoBrokerTheme();

	/*
	const Color = (): { titel: string } => {
		switch (themeName) {
			case 'dark':
				return { titel: '#3b3b3b66' };
			case 'blue':
				return { titel: '#3e464a61' };
			case 'light':
				return { titel: '#b7b7b7' };
			case 'colored':
				return { titel: '#b7b7b7' };
		}

	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		clearConfig();
	};

 */

	const api = useAPI();
	// following line is used for selectID which will be deleted from this view
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { showSelectId } = useDialogs();

	return (
		<div>
			<SelectDeviceType />
			<br />
			<br />
			<hr />
			<h3>
				This is not part of the UI. More or less a store of buttons to allow the rest of the UI to be tested
			</h3>
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
			<br />
			<br />
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
		</div>
	);
};
