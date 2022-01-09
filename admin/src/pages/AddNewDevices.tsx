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

	if (!adapterRunning || !driverReady) return <NotRunning />;

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
		</div>
	);
};
