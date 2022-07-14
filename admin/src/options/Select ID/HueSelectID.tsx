import * as React from 'react';
import { Config } from '../../lib/Config';
import { useDialogs } from 'iobroker-react';
import { Button } from '@mui/material';
/* import { useEffect } from 'react'; */
import { useI18n } from 'iobroker-react/hooks';
import Box from '@mui/material/Box';

export default function HueSelectID() {
    const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
    const { translate: _ } = useI18n();
    const { showSelectId } = useDialogs();
    const writeBackSelectId = (selectId: React.SetStateAction<string | string[] | undefined>) => {
        setSelectIdValue(selectId);
        Config.HueSelectID = selectId;
    };

    /* useEffect(() => {
		Config.HueSelectID = selectIdValue;
	}); */

    console.log(Config.HueSelectID);
    const askUser = React.useCallback(async () => {
        const selected = await showSelectId({
            title: 'Select an ID',
        });
        setSelectIdValue(selected);
    }, [showSelectId]);

    return (
        <Box component="span" sx={{ p: 2, border: '1px dashed grey', textAlign: 'center' }}>
            <Button onClick={askUser} variant="outlined">
                {_('hueSelectID')}
            </Button>
            <br />
            <br />
            {_('selectedHueDP')}
            <br />
            <br />
            {JSON.stringify(selectIdValue)}
        </Box>
    );
}
