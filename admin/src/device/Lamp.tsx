/**
 * Created by alex-issi on 13.07.22
 */
import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { SelectID } from '../components/SelectID';
import { handleSelectId } from '../lib/handleSelectID';
import { API } from '../lib/useAPI';
import { clearConfig, Config } from '../lib/Config';
import { genDSUID } from '../lib/genDSUID';
import { dsDevice } from '../types/dsDevice';

export interface LampProps {
    api: API;
}

export const Lamp: React.FC<LampProps> = ({ api }): JSX.Element => {
    const [name, setName] = React.useState('');
    const [configURL, setConfigURL] = React.useState('http://localhost:8081');

    const handleNameChange = (event) => {
        setName(event.target.value);
        Config.name = event.target.value;
    };
    const handleConfigURLChange = (event) => {
        setConfigURL(event.target.value);
        Config.configUrl = event.target.value;
    };

    const handleClear = () => {
        setName('');
        setConfigURL('http://localhost:8081');
        clearConfig();
    };

    const handleCreateDevice = (): dsDevice => {
        return {
            name: Config.name,
            watchStateID: { light: Config.OnOffSelectID },
            id: `${genDSUID(5)}_${genDSUID(5)}`,
            dsConfig: {
                dSUID: genDSUID(32),
                primaryGroup: 1,
                name: Config.name,
                configURL: Config.configUrl,
                modelFeatures: {
                    blink: true,
                    dontcare: true,
                    identification: true,
                    outmode: true,
                    outvalue8: true,
                    transt: true,
                },
                displayId: '',
                model: 'ioBroker',
                modelUID: genDSUID(32),
                modelVersion: '0.0.1',
                vendorName: 'KYUKA',
                channelDescriptions: [
                    {
                        brightness: {
                            channelType: 1,
                            dsIndex: 0,
                            max: 100,
                            min: 0,
                            name: 'brightness',
                            resolution: 0.39215686274509803,
                            siunit: 'percent',
                            symbol: '%',
                        },
                    },
                ],
                outputDescription: [
                    {
                        objName: 'light',
                        dsIndex: 0,
                        maxPower: -1,
                        function: 1,
                        outputUsage: 0,
                        type: 'output',
                        variableRamp: false,
                    },
                ],
                outputSettings: [
                    {
                        objName: 'light',
                        dimTimeDown: 15,
                        dimTimeDownAlt1: 162,
                        dimTimeDownAlt2: 104,
                        dimTimeUp: 15,
                        dimTimeUpAlt1: 162,
                        dimTimeUpAlt2: 104,
                        minBrightness: 0.39215686274509803,
                        onThreshold: 50,
                        pushChanges: false,
                        mode: 2,
                        groups: [1],
                    },
                ],
            },
        };
    };

    return (
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
                    <Box
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
                        <Box
                            component="form"
                            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-name" label="Name" value={name} onChange={handleNameChange} />
                            <TextField
                                id="outlined-Url"
                                label="Config URL"
                                placeholder={'http://localhost:8081'}
                                value={configURL}
                                onChange={handleConfigURLChange}
                            />
                        </Box>
                    </Box>
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
                        // const dummyDevice: any = null;
                        const dummyDevice = handleCreateDevice();
                        await api.createDevice(dummyDevice);
                        console.log(Config);
                        handleClear();
                        console.log(Config);
                    }}
                    variant="outlined"
                >
                    Add New Device
                </Button>
            </Grid>
        </React.Fragment>
    );
};
