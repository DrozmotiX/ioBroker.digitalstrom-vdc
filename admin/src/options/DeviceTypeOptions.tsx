import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';
import React, { useState } from 'react';
import { Config } from '../lib/Config';
import { SelectColorClassOptions } from './ColorClassOption';
import DefineConfigURL from './DefineConfigURL';
import DefineName from './DefineName';
import DefineResolution from './DefineResolution';
import { useAPI } from '../lib/useAPI';
import { dsDevice } from '../types/dsDevice';
import { SelectID } from '../components/SelectID';
import { handleSelectId } from '../lib/handleSelectID';
import { Lamp } from '../device/Lamp';

//const deviceTypeOptions: { value: string; title: string }[] = [
const deviceTypeOptions = [
    {
        label: 'Select Device type',
        title: 'selectDevice',
        disabled: true,
    },
    {
        label: 'lamp',
        title: 'deviceTypeOptionsLamp',
    },
    {
        label: 'rgbLamp',
        title: 'deviceTypeOptionsRGBLamp',
    },
    {
        label: 'sensor',
        title: 'deviceTypeOptionsSensor',
    },
    {
        label: 'presenceSensor',
        title: 'deviceTypeOptionsMotionDetection',
    },
    {
        label: 'smokeAlarm',
        title: 'deviceTypeOptionsSmokeAlarm',
    },
    {
        label: 'button',
        title: 'deviceTypeOptionsButton',
    },
    {
        label: 'doorbell',
        title: 'deviceTypeOptionsDoorbell',
    },
    {
        label: 'multiSensor',
        title: 'deviceTypeOptionsMultiSensor',
    },
    {
        label: 'awayButton',
        title: 'deviceTypeOptionsAwayButton',
    },
];

export const SelectDeviceType = (): JSX.Element => {
    const { translate: _ } = useI18n();
    const [devicetype, sethandleDeviceType] = useState('selectDevice');

    const handleDeviceType = (event: SelectChangeEvent) => {
        console.log(Config);

        sethandleDeviceType(event.target.value);
        console.log(event.target.value);
        Config.deviceType = event.target.value;
    };

    const api = useAPI();

    const deviceTypeSelect = () => {
        const menuItem: JSX.Element[] = [];
        for (const key in deviceTypeOptions) {
            menuItem.push(
                <MenuItem
                    disabled={deviceTypeOptions[key].disabled}
                    key={key + deviceTypeOptions[key].label}
                    value={deviceTypeOptions[key].title}
                >{`${_(deviceTypeOptions[key].label)}`}</MenuItem>,
            );
        }
        return menuItem;
    };

    return (
        <React.Fragment>
            <React.Fragment>
                <Grid
                    container
                    spacing={1}
                    sx={{
                        marginTop: '10px',
                        paddingBottom: '15px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                    }}
                >
                    <Box sx={{ minWidth: 120, maxWidth: 300, width: '250px' }}>
                        <FormControl>
                            <InputLabel id="DeviceType-select-label">{_('Select Device type')}</InputLabel>
                            <Select
                                labelId="DeviceType-select-label"
                                id="DeviceType"
                                value={devicetype}
                                label="select device Type"
                                onChange={handleDeviceType}
                                sx={{ width: 250 }}
                            >
                                {deviceTypeSelect()}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </React.Fragment>
            {devicetype === 'deviceTypeOptionsLamp' ? <Lamp api={api} /> : null}

            {devicetype === 'deviceTypeOptionsRGBLamp' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <React.Fragment>
                            <DefineName />
                            <DefineConfigURL />
                        </React.Fragment>
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <SelectID
                            title={'OnOffSelectID'}
                            type={'lamp'}
                            buttonTitle={'onOffSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                        <SelectID
                            title={'DimmerSelectID'}
                            type={'dimmer'}
                            buttonTitle={'dimmerSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <SelectID
                            title={'ColorModeSelectID'}
                            type={'colorMode'}
                            buttonTitle={'colorModeSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                        <SelectID
                            title={'ColorTempSelectID'}
                            type={'colorTemp'}
                            buttonTitle={'colorTempSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <SelectID
                            title={'HueSelectID'}
                            type={'hue'}
                            buttonTitle={'hueSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                        <SelectID
                            title={'SaturationSelectID'}
                            type={'saturation'}
                            buttonTitle={'saturationSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                        <SelectID
                            title={'RGBSelectID'}
                            type={'rgbLamp'}
                            buttonTitle={'rgbSelectID'}
                            onSelect={(selectId, type) => handleSelectId(selectId, type)}
                        />
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <Button
                            onClick={async () => {
                                {
                                    console.log('click to open Add Mock Device');
                                    console.log(JSON.stringify(await api.listDevices()));
                                    const testDevice: dsDevice = {
                                        name: Config.name,
                                        watchStateID: { button_0: 'test2' },
                                        id: '1234567',
                                        dsConfig: {
                                            dSUID: '123455678',
                                            primaryGroup: 1,
                                            name: Config.name,
                                            modelFeatures: {
                                                highlevel: true,
                                            },
                                            displayId: '',
                                            model: 'ioBroker',
                                            modelUID: 'UUID',
                                            modelVersion: '0.0.1',
                                            vendorName: 'KOS',
                                        },
                                    };
                                    console.log(JSON.stringify(await api.createDevice(testDevice)));
                                    console.log(JSON.stringify(await api.listDevices()));
                                }
                            }}
                            variant="outlined"
                        >
                            Add New Device
                        </Button>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsSensor' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <React.Fragment>
                            <DefineName />
                            <DefineConfigURL />
                            <SelectColorClassOptions />
                        </React.Fragment>
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <DefineResolution />
                        <h1>test1</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsMotionDetection' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <React.Fragment>
                            <DefineName />
                            <DefineConfigURL />
                        </React.Fragment>
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <h1>test1</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsSmokeAlarm' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <React.Fragment>
                            <DefineName />
                            <DefineConfigURL />
                        </React.Fragment>
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <h1>test1</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsButton' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <React.Fragment>
                            <DefineName />
                            <DefineConfigURL />
                        </React.Fragment>
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <h1>test1</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsDoorbell' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <React.Fragment>
                            <DefineName />
                            <DefineConfigURL />
                        </React.Fragment>
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <h1>test1</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsMultiSensor' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <DefineName />
                        <DefineConfigURL />
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <h1>test2</h1>
                        <h1>test2</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
            {devicetype === 'deviceTypeOptionsAwayButton' ? (
                <React.Fragment>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <DefineName />
                        <DefineConfigURL />
                    </Grid>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            marginTop: '10px',
                            paddingBottom: '15px',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                        }}
                    >
                        <h1>test2</h1>
                        <h1>test2</h1>
                    </Grid>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    );
};
