import * as React from 'react';
import { Config } from '../../lib/Config';
import { useDialogs } from 'iobroker-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export default function ButtonSelectID() {
    const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
    const { showSelectId } = useDialogs();

    useEffect(() => {
        Config.ButtonSelectID = selectIdValue;
    });

    const askUser = React.useCallback(async () => {
        const selected = await showSelectId({
            title: 'Select an ID',
        });
        setSelectIdValue(selected);
    }, [showSelectId]);

    console.log(Config.ButtonSelectID);

    return (
        <Button onClick={askUser} variant="outlined">
            SelectID
        </Button>
    );
}
