import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import from iobroker-react docu page => https://github.com/AlCalzone/iobroker-react
import { SettingsApp } from 'iobroker-react/app';
import type { Translations } from 'iobroker-react/i18n';
import { useIoBrokerTheme } from 'iobroker-react/hooks';
// import from @iobroker/adapter-react
import { ErrorBoundary } from 'react-error-boundary';
import { IoBrokerApp } from 'iobroker-react/app';

// UI elements are imported from Material-UI
import { useSettings, useI18n } from 'iobroker-react/hooks';
import { Tab, Tabs } from '@mui/material';

// Components are imported here
import { TabPanel } from './components/TabPanel';
import { AddNewDevices } from './pages/AddNewDevices';
import { ListDevices } from './pages/ListDevices';
import { useDevices } from './lib/useDevices';

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

function ErrorFallback({ error, resetErrorBoundary }: any) {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.stack}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
}

const Root: React.FC = () => {
	// const [themeName, setTheme] = useIoBrokerTheme();
	const [value, setValue] = React.useState(0);
	const { translate: _ } = useI18n();

	const handleTabChange = (
		// eslint-disable-next-line @typescript-eslint/ban-types
		event: React.ChangeEvent<{}>,
		newValue: number,
	) => {
		setValue(newValue);
	};

	const [devices, updateDevices] = useDevices();

	return (
		<div>
			<Tabs value={value} onChange={handleTabChange}>
				<Tab label={_('tabListDevices')} />
				<Tab label={_('tabAddNewDevices')} />
			</Tabs>

			<TabPanel value={value} index={0}>
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<ListDevices devices={devices} />
				</ErrorBoundary>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<AddNewDevices devices={devices} />
				</ErrorBoundary>
			</TabPanel>
		</div>
	);
};

ReactDOM.render(
	<IoBrokerApp name={'digitalstrom-vdc'} translations={translations}>
		<Root />
	</IoBrokerApp>,
	document.getElementById('root'),
);
