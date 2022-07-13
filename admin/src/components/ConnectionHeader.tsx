/**
 * Created by alex-issi on 13.07.22
 */
import React from 'react';
import { useI18n } from 'iobroker-react/hooks';
import { useAdapter } from 'iobroker-react';
import { Button, Stack } from '@mui/material';
import { HighlightOff, RestartAlt, TaskAlt } from '@mui/icons-material';

export const ConnectionHeader: React.FC = (): JSX.Element => {
    const { alive: adapterRunning, connected: driverReady } = useAdapter();
    const { translate: _ } = useI18n();

    if (!adapterRunning || !driverReady)
        return (
            <Stack spacing={2} direction="row" justifyContent="center">
                {/*<Button*/}
                {/*    variant="outlined"*/}
                {/*    color="primary"*/}
                {/*    endIcon={<RestartAlt />}*/}
                {/*    sx={{*/}
                {/*        borderRadius: '15px',*/}
                {/*        // pointerEvents: 'none',*/}
                {/*    }}*/}
                {/*>*/}
                {/*    {_('restart vdc')}*/}
                {/*</Button>*/}
                <Button
                    variant="contained"
                    color="warning"
                    endIcon={<HighlightOff />}
                    sx={{
                        borderRadius: '15px',
                        pointerEvents: 'none',
                    }}
                >
                    {_('adapter running')}
                </Button>
            </Stack>
        );

    return (
        <Stack spacing={2} justifyContent="center" direction="row">
            {/*<Button*/}
            {/*    variant="outlined"*/}
            {/*    color="primary"*/}
            {/*    endIcon={<RestartAlt />}*/}
            {/*    sx={{*/}
            {/*        borderRadius: '15px',*/}
            {/*        // pointerEvents: 'none',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    {_('restart vdc')}*/}
            {/*</Button>*/}
            <Button
                variant="outlined"
                color="success"
                endIcon={<TaskAlt />}
                sx={{
                    borderRadius: '15px',
                    pointerEvents: 'none',
                }}
            >
                {_('adapter running')}
            </Button>
        </Stack>
    );
};
