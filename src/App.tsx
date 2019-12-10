import React from 'react';
import styles from './styles/App.module.scss'; 
import {Fabric, Stack, Text, Link, FontWeights, FontSizes} from 'office-ui-fabric-react';
import {TryOut} from './components/TryOut'
import {AppHeader} from './components/AppHeader';

import logo from './logo.png';

const boldStyle = {
	root: {fontWeight: FontWeights.semibold}
};

export const App: React.FunctionComponent = () => {
	return (
		<Fabric>
		<AppHeader></AppHeader>
			<main className={styles.test}></main>
		<Stack
			horizontalAlign="start"
			verticalAlign="start"
			verticalFill
			styles={{
				root: {
					textAlign: 'left',
					margin: '0 auto',
					padding: '0 48px',
					background: '#94E5FF'
				}
			}}
			gap={15}
		>
			<img src={logo} alt="logo" />
			<Text variant="mega" as="h1">
				Make you podcast seen and heard.
      		</Text>
			
			<TryOut></TryOut>
			
			<Text variant="large">
				Audio isn't native to social web. Video is. Create shareable video clips with kinetic captions out of podcast that works even when muted.
			</Text>
			<Text variant="large">
				Share the video view Delicut’s EpiCentre URL to route user to their favorite podact app and measure vital metrics along the way.
			</Text>
 
			<Text variant="large" styles={boldStyle}>Essential Links</Text>
			<Stack horizontal gap={15} horizontalAlign="center">
				<Link href="https://developer.microsoft.com/en-us/fabric">Docs</Link>
				<Link href="https://stackoverflow.com/questions/tagged/office-ui-fabric">Stack Overflow</Link>
				<Link href="https://github.com/officeDev/office-ui-fabric-react/">Github</Link>
				<Link href="https://twitter.com/officeuifabric">Twitter</Link>
			</Stack>
			<Text variant="large" styles={boldStyle}>
				Design System
      </Text>
			<Stack horizontal gap={15} horizontalAlign="center">
				<Link href="https://developer.microsoft.com/en-us/fabric#/styles/icons">Icons</Link>
				<Link href="https://developer.microsoft.com/en-us/fabric#/styles/typography">Typography</Link>
				<Link href="https://developer.microsoft.com/en-us/fabric#/styles/themegenerator">Theme</Link>
			</Stack>
		</Stack>
		</Fabric>
	);
};
