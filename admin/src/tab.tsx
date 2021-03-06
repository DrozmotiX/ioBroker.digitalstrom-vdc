import React from 'react';
import ReactDOM from 'react-dom';
// import from iobroker-react docu page => https://github.com/AlCalzone/iobroker-react
import type { Translations } from 'iobroker-react/i18n';
// import from @iobroker/adapter-react
import { ErrorBoundary } from 'react-error-boundary';
import { IoBrokerApp } from 'iobroker-react/app';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@iobroker/adapter-react/Theme';
// UI elements are imported from Material-UI
import { useI18n, useIoBrokerTheme } from 'iobroker-react/hooks';
import { Tab, Tabs, Chip, ButtonGroup } from '@mui/material';
import { Done, HighlightOff, RestartAlt } from '@mui/icons-material';

// Components are imported here
import { TabPanel } from './components/TabPanel';
import { AddNewDevices } from './pages/AddNewDevices';
import { ListDevices } from './pages/ListDevices';

import { useAdapter } from 'iobroker-react';

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

const connectionState = () => {
    const { alive: adapterRunning, connected: driverReady } = useAdapter();
    const { translate: _ } = useI18n();

    if (!adapterRunning || !driverReady)
        return (
            <ButtonGroup
                style={{
                    position: 'absolute',
                    right: '30px',
                }}
                variant="text"
                aria-label="outlined primary button group"
            >
                <Chip label={_('restart vdc')} color="primary" deleteIcon={<RestartAlt />} onDelete={() => {}} />
                <Chip
                    label={_('adapter not running')}
                    color="warning"
                    deleteIcon={<HighlightOff />}
                    onDelete={() => {}}
                />
            </ButtonGroup>
        );

    return (
        <ButtonGroup
            style={{
                position: 'absolute',
                right: '30px',
            }}
            variant="text"
            aria-label="outlined primary button group"
        >
            <Chip label={_('restart vdc')} color="primary" deleteIcon={<RestartAlt />} onDelete={() => {}} />
            <Chip
                label={_('adapter running')}
                deleteIcon={<Done />}
                onDelete={() => {}}
                color="success"
                variant="outlined"
            />
        </ButtonGroup>
    );
};

const Root: React.FC = () => {
    const [value, setValue] = React.useState(0);
    const { translate: _ } = useI18n();
    const [themeName] = useIoBrokerTheme();

    const handleTabChange = (
        // eslint-disable-next-line @typescript-eslint/ban-types
        event: React.ChangeEvent<{}>,
        newValue: number,
    ) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={theme(themeName)}>
                <Tabs value={value} onChange={handleTabChange}>
                    <Tab label={_('tabListDevices')} />
                    <Tab label={_('tabAddNewDevices')} />
                    <Tab label={_('tabExperts')} />
                    {connectionState()}
                </Tabs>

                <TabPanel value={value} index={0}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <ListDevices />
                    </ErrorBoundary>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <AddNewDevices />
                    </ErrorBoundary>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ErrorBoundary FallbackComponent={ErrorFallback}>Experts</ErrorBoundary>
                </TabPanel>
            </ThemeProvider>
        </React.Fragment>
    );
};

ReactDOM.render(
    <IoBrokerApp name={'digitalstrom-vdc'} translations={translations}>
        <Root />
    </IoBrokerApp>,
    document.getElementById('root'),
);
