import React from 'react';
import DialogSelectID from '@iobroker/adapter-react/Dialogs/SelectID';
import { CreateCSSProperties, withStyles } from '@mui/styles';

interface SelectIDProps {
	dialogName: string;
	themeType: string;
	socket: any;
	onChange: (value: any) => void;
}

interface SelectIDState {
	showSelectId: boolean;
}

const styles = (): Record<string, CreateCSSProperties> => ({});

class SelectID extends React.Component<SelectIDProps, SelectIDState> {
	private selectIdValue: string | string[] | undefined;
	constructor(props) {
		super(props);
		this.state = {
			showSelectId: true,
		};
		this.selectIdValue = undefined;
		console.log('constructor');
	}
	render() {
		// const [showSelectId, setShowSelectId] = React.useState<boolean>(false);
		// const [selectIdValue, setSelectIdValue] = React.useState<string | string[] | undefined>();

		console.log(this.state.showSelectId);
		if (this.state.showSelectId) {
			return (
				<div>
					<div>Gugus!!!</div>
					<DialogSelectID
						key="tableSelect"
						imagePrefix="../.."
						dialogName={this.props.dialogName}
						themeType={this.props.themeType}
						socket={this.props.socket}
						statesOnly={true}
						selected={this.selectIdValue}
						onClose={() => this.props.onChange(undefined)}
						onOk={(selected: string | string[] | undefined) => {
							this.setState({ showSelectId: false });
							this.props.onChange(selected);
							this.selectIdValue = selected;
							console.log(selected);
						}}
					/>
				</div>
			);
		} else {
			return <div>not showing!</div>;
		}
	}
}

export default withStyles(styles)(SelectID);

/** Hook to display selectID dialog  */
/* export function useSelectID(dialogName: string, themeType: string, connection: any): SelectID {
	const props: SelectIDProps = {
		dialogName,
		themeType,
		socket: connection,
	};
	const selectId = React.useMemo(() => new SelectID(props), [props]);
	return selectId;
} */
