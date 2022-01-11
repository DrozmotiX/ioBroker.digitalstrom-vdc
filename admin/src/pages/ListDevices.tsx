import React from 'react';
import { Device, useAPI } from '../lib/useAPI';
import { NotRunning, NoDevices } from '../components/Messages';
import { useAdapter, useDialogs } from 'iobroker-react';

import {
	Button,
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
// import { useSelect } from '../hooks/useSelect';

export interface DevicesProps {
	devices: Record<number, Device> | undefined;
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{row.name}
				</TableCell>
				<TableCell align="right">{row.calories}</TableCell>
				<TableCell align="right">{row.fat}</TableCell>
				<TableCell align="right">{row.carbs}</TableCell>
				<TableCell align="right">{row.protein}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								History
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Customer</TableCell>
										<TableCell align="right">Amount</TableCell>
										<TableCell align="right">Total price ($)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.history.map((historyRow) => (
										<TableRow key={historyRow.date}>
											<TableCell component="th" scope="row">
												{historyRow.date}
											</TableCell>
											<TableCell>{historyRow.customerId}</TableCell>
											<TableCell align="right">{historyRow.amount}</TableCell>
											<TableCell align="right">
												{Math.round(historyRow.amount * row.price * 100) / 100}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export const ListDevices: React.FC<DevicesProps> = async (props) => {
	const { alive: adapterRunning, connected: driverReady } = useAdapter();
	const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
	const { showSelectId } = useDialogs();

	const api = useAPI();

	const devices = await api.listDevices();

	// if (!adapterRunning || !driverReady) return <NotRunning />;
	if (!props.devices) return <NoDevices />;
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
			<TableContainer component={Paper}>
				<Table aria-label="collapsible table">
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{devices.map((row) => (
							<Row key={row.name} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
