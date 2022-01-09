import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import from iobroker-react docu page => https://github.com/AlCalzone/iobroker-react
import { SettingsApp } from 'iobroker-react/app';
import type { Translations } from 'iobroker-react/i18n';
import { useIoBrokerTheme } from 'iobroker-react/hooks';
// import from @iobroker/adapter-react
import theme from '@iobroker/adapter-react/Theme';
import Utils from '@iobroker/adapter-react/Components/Utils';
// UI elements are imported from Material-UI
import { ThemeProvider } from '@mui/material/styles';
import { useSettings, useI18n } from 'iobroker-react/hooks';
import { Checkbox, FormControlLabel, TextField, Tooltip, Grid, Button, Box, Alert, AlertTitle } from '@mui/material/';
import I18n from '@iobroker/adapter-react/i18n';
import { Avatar } from '@mui/material';

// Components are imported here

const themeName = Utils.getThemeName();

const SettingsPageContent: React.FC = React.memo(() => {
	// settings is the current settings object, including the changes made in the UI
	// originalSettings is the original settings object, as it was loaded from ioBroker
	// setSettings is used to update the current settings object
	const { settings, originalSettings, setSettings } = useSettings<ioBroker.AdapterConfig>();

	const { translate: _ } = useI18n();

	// Updates the settings when the checkbox changes. The changes are not saved yet.
	const handleChange = <T extends keyof ioBroker.AdapterConfig>(option: T, value: ioBroker.AdapterConfig[T]) => {
		setSettings((s) => ({
			...s,
			[option]: value,
		}));
	};

	// local functions
	const genDSUID = () => {
		const genRanHex = (size) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
		// const instanceName = `${this.props.adapterName}.${this.props.instance}`;
		/*this.props.socket.sendTo(instanceName, "genSDUID", "blah").then((response) => {
        console.log(response);
    });*/
		handleChange('vdcDSUID', genRanHex(34).toUpperCase());
	};

	const showNoDSUID = () => {
		if (settings.vdcDSUID && settings.vdcDSUID.length > 0) return null;
		return (
			<Alert sx={{ marginTop: 1 }} severity="warning">
				<AlertTitle>{_('noDSUIDTitle')}</AlertTitle>
				{_('noDSUIDText')}
			</Alert>
		);
	};

	return (
		<div>
			<Grid container sx={{ marginTop: 4 }}>
				<Grid item xs={1}>
					<Avatar alt="Digitalstrom VDC" src="digitalstrom-vdc.png" />
				</Grid>
				<Grid item xs={11}>
					<h3>
						<strong>{_('pageTitle')}</strong>
					</h3>
				</Grid>
			</Grid>

			{showNoDSUID()}
			<Box sx={{ marginTop: 1, p: 2, border: '1px grey' }}>
				<Grid container sx={{ marginTop: 4 }}>
					<Grid item xs={12} sm={6}>
						<Tooltip title={_('vdcNameTooltip')} arrow>
							<TextField
								label={_('vdcName')}
								color="success"
								sx={{ width: '100%', textAlignLast: 'left' }}
								value={settings.vdcName}
								placeholder="placeholder"
								onChange={(event) => {
									handleChange('vdcName', event.target.value);
								}}
							/>
						</Tooltip>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Tooltip title={_('vdcConfigURLTooltip')} arrow>
							<TextField
								fullWidth
								label={_('vdcConfigURL')}
								color="success"
								sx={{ width: '100%', textAlignLast: 'left' }}
								value={settings.vdcConfigURL}
								placeholder="http://iobroker:8081"
								onChange={(event) => {
									handleChange('vdcConfigURL', event.target.value);
								}}
							/>
						</Tooltip>
					</Grid>
				</Grid>
				<Grid container sx={{ marginTop: 4 }}>
					<Grid item xs={12} sm={6}>
						<Tooltip title={_('vdcPortTooltip')} arrow>
							<TextField
								label={_('vdcPort')}
								color="success"
								sx={{ width: '100%', textAlignLast: 'left' }}
								value={settings.vdcPort}
								placeholder="placeholder"
								onChange={(event) => {
									handleChange('vdcPort', parseInt(event.target.value));
								}}
							/>
						</Tooltip>
					</Grid>
					<Grid container xs={12} sm={6}>
						<Grid item xs={8}>
							<Tooltip title={_('vdcDSUIDTooltip')} arrow>
								<TextField
									label={_('vdcDSUID')}
									color="success"
									sx={{ width: '100%', textAlignLast: 'left' }}
									value={settings.vdcDSUID}
									placeholder="placeholder"
									onChange={(event) => {
										handleChange('vdcDSUID', event.target.value);
									}}
								/>
							</Tooltip>
						</Grid>
						<Grid item xs={4}>
							<Button
								onClick={() => {
									genDSUID();
								}}
								variant="outlined"
							>
								{_('generateVDCDSUID')}
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
});

const migrateSettings = (settings: ioBroker.AdapterConfig) => {
	// Here's an example for editing settings after they are loaded from the backend
	// In this case, option1 will be set to true by default
	if (settings.vdcName === undefined) {
		settings.vdcName = 'ioBroker Controller';
		settings.vdcPort = 40000;
		settings.vdcDebug = false;
	}
};

// Load your translations
const translations: Translations = {
	en: require('./i18n/en.json'),
	de: require('./i18n/de.json'),
	ru: require('./i18n/ru.json'),
	pt: require('./i18n/pt.json'),
	nl: require('./i18n/nl.json'),
	fr: require('./i18n/fr.json'),
	it: require('./i18n/it.json'),
	es: require('./i18n/es.json'),
	pl: require('./i18n/pl.json'),
	'zh-cn': require('./i18n/zh-cn.json'),
};

const Root: React.FC = () => {
	// const [themeName, setTheme] = useIoBrokerTheme();

	return (
		<ThemeProvider theme={theme(themeName)}>
			<SettingsApp name="digitalstrom-vdc" afterLoad={migrateSettings} translations={translations}>
				<SettingsPageContent />
			</SettingsApp>
		</ThemeProvider>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));
