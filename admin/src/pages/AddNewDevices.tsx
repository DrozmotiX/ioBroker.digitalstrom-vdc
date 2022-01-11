import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { useAdapter } from 'iobroker-react';
import { NotRunning } from '../components/Messages';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { clearConfig } from '../lib/Config';
import { SelectDeviceType } from '../options/DeviceTypeOptions';
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

	const BootstrapDialog = styled(Dialog)(({ theme }) => ({
		'& .MuiDialogContent-root': {
			padding: theme.spacing(2),
		},
		'& .MuiDialogActions-root': {
			padding: theme.spacing(1),
		},
	}));

	const BootstrapDialogTitle = (props: DialogTitleProps) => {
		const { children, onClose, ...other } = props;

		return (
			<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
				{children}
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
		);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		clearConfig();
	};

	const api = useAPI();

	return (
		<div>
			<Button variant="outlined" onClick={handleClickOpen}>
				Add new Device
			</Button>
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					Add Device
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<SelectDeviceType />
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Save changes
					</Button>
				</DialogActions>
			</BootstrapDialog>

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
		</div>
	);
};
