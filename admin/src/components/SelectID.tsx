/**
 * Created by alex-issi on 12.07.22
 */
import { useI18n } from 'iobroker-react/hooks';
import * as React from 'react';
import { useDialogs } from 'iobroker-react';
import { Box, Button, TextField } from '@mui/material';
import { SelectType } from '../types/selectType';

export interface SelectIDProps {
    title: string;
    type: SelectType;
    buttonTitle: string;
    onSelect: (selectId: string | undefined, type: SelectType) => void;
}

export const SelectID: React.FC<SelectIDProps> = ({ title, type, buttonTitle, onSelect }): JSX.Element => {
    const [selectIdValue, setSelectIdValue] = React.useState<string | undefined>();
    const { translate: _ } = useI18n();
    const { showSelectId } = useDialogs();

    const askUser = React.useCallback(async () => {
        const selected = await showSelectId({
            title: _(`${title}`),
        });
        if (onSelect) {
            onSelect(selected, type);
        }
        setSelectIdValue(selected);
    }, [showSelectId]);

    return (
        <Box
            component="span"
            sx={{
                p: 2,
                border: '1px dashed grey',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '100%',
                width: '300px',
            }}
        >
            <Button onClick={askUser} variant="outlined">
                {_(`${buttonTitle}`)}
            </Button>
            <TextField
                label="Selected ID"
                value={selectIdValue ? selectIdValue : ''}
                fullWidth
                size="small"
                sx={{
                    marginTop: '10px',
                }}
                inputProps={{
                    readOnly: true,
                }}
            />
        </Box>
    );
};
