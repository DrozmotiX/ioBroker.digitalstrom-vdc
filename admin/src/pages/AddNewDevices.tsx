import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { useAdapter } from 'iobroker-react';
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

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}

export const AddNewDevices: React.FC<DevicesProps> = ({ devices }) => {
	const [open, setOpen] = React.useState(false);
	const { alive: adapterRunning, connected: driverReady } = useAdapter();
	const [themeName] = useIoBrokerTheme();

	if (!adapterRunning || !driverReady) return <NotRunning />;
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
	return (
		<div>
			<SelectDeviceType />
			{/* <Button variant="outlined" onClick={handleClickOpen}>
				Add new Device
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle
					sx={{
						bgcolor: Color().titel,
						textAlignLast: 'center',
						fontSize: '1.4rem',
					}}
				>
					Add Device
				</DialogTitle>
				<DialogContent dividers>
					<SelectDeviceType />
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Save changes
					</Button>
					<Button autoFocus onClick={handleClose}>
						Close
					</Button>
				</DialogActions>
			</Dialog> */}
		</div>
	);
};
