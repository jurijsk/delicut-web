import * as React from 'react';
import {Callout, Link, getTheme, FontWeights, mergeStyleSets, getId, PrimaryButton} from '@fluentui/react';

export interface ICalloutBasicExampleState {
	isCalloutVisible?: boolean;
}

// Themed styles for the example.
const theme = getTheme();
const styles = mergeStyleSets({
	buttonArea: {
		verticalAlign: 'top',
		display: 'inline-block',
		textAlign: 'center',
		minWidth: 130,
		height: 32
	},
	callout: {
		maxWidth: 400
	},
	header: {
		padding: '18px 24px 12px'
	},
	title: [
		theme.fonts.xLarge,
		{
			margin: 0,
			color: theme.palette.neutralPrimary,
			fontWeight: FontWeights.semilight
		}
	],
	inner: {
		height: '100%',
		padding: '0 24px 20px'
	},
	actions: {
		position: 'relative',
		marginTop: 20,
		width: '100%',
		whiteSpace: 'nowrap'
	},
	subtext: [
		theme.fonts.small,
		{
			margin: 0,
			color: theme.palette.neutralPrimary,
			fontWeight: FontWeights.semilight
		}
	],
	link: [
		theme.fonts.medium,
		{
			color: theme.palette.neutralPrimary
		}
	]
});

// Example code
export class TryOut extends React.Component<{}, ICalloutBasicExampleState> {
	public state: ICalloutBasicExampleState = {
		isCalloutVisible: false
	};

	private _menuButtonElement = React.createRef<HTMLDivElement>();
	// Use getId() to ensure that the callout label and description IDs are unique on the page.
	// (It's also okay to use plain strings without getId() and manually ensure their uniqueness.)
	private _labelId: string = getId('callout-label');
	private _descriptionId: string = getId('callout-description');

	public render(): JSX.Element {
		const {isCalloutVisible} = this.state;

		return (
			<>
				<div> { /* keep it to prevent jumping on Callout open then component lives in <Stack */}
					<div className={styles.buttonArea} ref={this._menuButtonElement}>
						<PrimaryButton
							text="Try now for free"
							ariaLabel="Try Delicut for free with 2 episodes"
							onClick={this._onShowCalloutClicked} />
					</div>
					{this.state.isCalloutVisible && (
						<Callout
							className={styles.callout}
							ariaLabelledBy={this._labelId}
							ariaDescribedBy={this._descriptionId}
							role="alertdialog"
							gapSpace={5}
							target={this._menuButtonElement.current}
							onDismiss={this._onCalloutDismiss}
							setInitialFocus={true}
						>
							<div className={styles.header}>
								<p className={styles.title} id={this._labelId}>
									Contact us to get a teste of the Delucut video and early access.
							</p>
							</div>
							<div className={styles.inner}>
								<p className={styles.subtext} id={this._descriptionId}>
									Emails a link to your episode, timemark and transcription of the cut you would like us to animate.
								<br />
								Do not hesitate to contact us for any other inquiries as well.
								</p>
								<div className={styles.actions}>
									<Link className={styles.link} href="mailto:jurijs@delicut.eu" target="_blank">
										Drop us a line
									</Link>
								</div>
							</div>
						</Callout>
					)}
				</div>
			</>
		);
	}

	private _onShowCalloutClicked = (): void => {
		this.setState({
			isCalloutVisible: !this.state.isCalloutVisible
		});
	};

	private _onCalloutDismiss = (): void => {
		this.setState({
			isCalloutVisible: false
		});
	};
}
