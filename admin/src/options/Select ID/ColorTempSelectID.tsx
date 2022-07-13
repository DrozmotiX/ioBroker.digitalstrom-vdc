import * as React from 'react';
import { Config } from '../../lib/Config';
import { useDialogs } from 'iobroker-react';
import { Button, Box } from '@mui/material';
import { useI18n } from 'iobroker-react/hooks';

export default function ColorTempSelectID() {
    const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();
    const { translate: _ } = useI18n();
    const { showSelectId } = useDialogs();
    const writeBackSelectId = (selectId) => {
        setSelectIdValue(selectId);
        Config.ColorTempSelectID = selectId;
    };

    console.log(Config.ColorTempSelectID);

    return (
        <Box component="span" sx={{ p: 2, border: '1px dashed grey', textAlign: 'center' }}>
            <Button
                onClick={() => {
                    {
                        console.log('click to open selectID');
                        console.log('showSelectId', showSelectId);
                        // showSelectId(
                        //     'test',
                        //     () => {
                        //         console.log('onClose');
                        //     },
                        //     writeBackSelectId,
                        //     selectIdValue,
                        // );
                    }
                }}
                variant="outlined"
            >
                {_('colorTempSelectID')}
            </Button>
            <br />
            <br />
            {_('selectedColorTempDP')}
            <br />
            <br />
            {JSON.stringify(selectIdValue)}
        </Box>
    );
}
