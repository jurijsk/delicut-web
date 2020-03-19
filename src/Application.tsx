import React from 'react';
import AppStyles from './styles/Application.module.scss';

import {initFabricUITheme} from './styles';
initFabricUITheme();

import {Fabric, Stack, Text, Link, FontWeights, FontSizes} from 'office-ui-fabric-react';
import {TryOut} from './components/TryOut'
import {AppHeader} from './components/AppHeader';
import {ViewHeaderText} from './components/ViewHeaderText';
import {Translation} from 'react-i18next';
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import logo from './logo.png';
import {Inner} from './components/Basics';

const StyledMain = styled.main`
	width: 100%;
    position: relative;
    overflow-x: hidden;
	margin: 0px 0px 0px 0px;
	padding: 148px 0 64px 0;
	background: #94E5FF;
`;

export const Application: React.FunctionComponent = () => {
	return (
		<Translation>{(t) =>
			<Fabric>
				<Helmet>
					<title>{t("Delicut - Make your podcast seen and listened")}</title>
					<meta name="description" content={t("Delicut allows talk-audio producers to create short engaging video cuts using audio and transcription which work even when muted")} />
					
					{/* Global site tag (gtag.js) - Google Analytics  */}
					<script async src='https://www.googletagmanager.com/gtag/js?id=UA-149833499-1'></script>
					<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'UA-149833499-1');
					`}
					</script>
				</Helmet>
				<AppHeader></AppHeader>
				<StyledMain>
					<Inner className={AppStyles.scssTest}>
						<Stack
							horizontalAlign="start"
							verticalAlign="start"
							verticalFill
							styles={{
								root: {
									textAlign: 'left'
								}
							}}
							gap={15}
						>
							{/* <img src={logo} alt="logo" /> */}
							<ViewHeaderText />
							<Stack gap={15}>
								<TryOut></TryOut>
							</Stack>
							<Text variant="medium">
								{t("Audio isn't native to social web. Video is. Create shareable video clips with kinetic captions out of podcast that works even when muted.")}
							</Text>
							<Text variant="medium">
								{t("Share the video view Delicut’s EpiCentre URL to route user to their favorite podcast app and measure vital metrics along the way.")}
							</Text>
						</Stack>
					</Inner>
				</StyledMain>
			</Fabric>
		}</Translation>
	);
};
