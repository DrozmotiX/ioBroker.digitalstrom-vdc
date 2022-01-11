import React, { useEffect } from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { NotRunning, NoDevices } from '../components/Messages';
import { useAdapter, useDialogs } from 'iobroker-react';
import moment from 'moment';

import {
	Button,
	Chip,
	Collapse,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { dsDevice } from '../types/dsDevice';
import IconButton from '@mui/material/IconButton';
import Box from '@material-ui/core/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LightIcon from '@mui/icons-material/Light';
import { useI18n } from 'iobroker-react/hooks';
// import { useSelect } from '../hooks/useSelect';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

function Row(props: any) {
	const { row } = props;
	const { showModal } = useDialogs();
	const api = useAPI();
	const [devices, setDevices] = React.useState<string[]>([]);
	const [open, setOpen] = React.useState(false);
	const { translate: _ } = useI18n();

	console.log('ROW', row);

	const removeDevice = async (row) => {
		await api.removeDevice(row);
		const devs = await api.listDevices();
		setDevices(devs);
	};

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					<Chip icon={<LightIcon />} label={row.common.name} variant="outlined" />
				</TableCell>
				<TableCell align="right">{moment(row.ts).format('DD.MM.YYYY')}</TableCell>
				<TableCell align="right">{row.native.deviceObj.dsConfig.dSUID}</TableCell>
				<TableCell align="right">
					<Button
						onClick={async () => {
							{
								console.log('click to remove', row);
								const result = await showModal(
									_('remove device?'),
									`${_('are you sure you want to remove')} «${row.common.name}»?`,
								);
								if (!result) return;
								useEffect(() => {
									if (!devices || devices.length === 0) {
										console.log('refreshing devices');
										removeDevice(row);
									}
								}, []);
							}
						}}
						variant="outlined"
					>
						{_('listDevices-removeButton')}
					</Button>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								{_('listDevices-watchStateHeader')}
							</Typography>
							<pre>
								<code>{JSON.stringify(row.native.deviceObj.dsConfig, null, 2)}</code>
							</pre>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export const ListDevices: React.FC = () => {
	// init
	const [devices, setDevices] = React.useState<string[]>([]);
	const api = useAPI();
	const { translate: _ } = useI18n();

	// functions
	const refreshDevices = async () => {
		const devices = await api.listDevices();
		console.log('effectHook', devices);
		setDevices(devices);
	};

	// load device array
	useEffect(() => {
		// if (!devices || devices.length === 0) {
		console.log('refreshing devices');
		refreshDevices();
		// }
	}, []);

	// following line is used for selectID which will be deleted from this view
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { showSelectId } = useDialogs();

	if (!devices || devices.length === 0) return <NoDevices />;
	return (
		<div id="ListDevices">
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
			<br />
			<br />
			<TableContainer component={Paper} elevation={2}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>
								<p style={{ textTransform: 'uppercase' }}>{_('listDevices-deviceNameTitle')}</p>
							</TableCell>
							<TableCell align="right">
								<p style={{ textTransform: 'uppercase' }}>{_('listDevices-CreationDateTitle')}</p>
							</TableCell>
							<TableCell align="right">
								<p style={{ textTransform: 'uppercase' }}>{_('listDevices-dSUIDTitle')}</p>
							</TableCell>
							<TableCell align="right">
								<p style={{ textTransform: 'uppercase' }}>{_('listDevices-removeTitle')}</p>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{devices.map((row: any) => (
							<Row key={row.common.name} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
