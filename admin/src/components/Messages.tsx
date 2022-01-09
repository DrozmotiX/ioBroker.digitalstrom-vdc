import React from 'react';
import { useI18n } from 'iobroker-react/hooks';
import { Alert } from '@mui/material';

type Severity = 'error' | 'success' | 'info' | 'warning' | undefined;

export const Message: React.FC<{ severity: Severity }> = ({ children, severity }) => {
	return (
		<Alert sx={{ marginTop: 1 }} severity={severity}>
			{children}
		</Alert>
	);
};

export const NotRunning: React.FC = () => {
	const { translate: _ } = useI18n();
	return <Message severity="error">{_('adapter not ready')}</Message>;
};
