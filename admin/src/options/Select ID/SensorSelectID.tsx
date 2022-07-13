import * as React from 'react';
import { Config } from '../../lib/Config';
import { useDialogs } from 'iobroker-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function SensorSelectID() {
    const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
    const { showSelectId } = useDialogs();

    useEffect(() => {
        Config.SensorSelectID = selectIdValue;
    });

    console.log(Config.SensorSelectID);
    const askUser = React.useCallback(async () => {
        const selected = await showSelectId({
            title: 'Select an ID',
        });
        setSelectIdValue(selected);
    }, [showSelectId]);
    return (
        <Button onClick={askUser} variant="outlined">
            SelectID
        </Button>
    );
}
