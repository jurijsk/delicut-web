import React from 'react';
import {Inner} from '../../components/Basics';
import {TryOut} from '../../components/TryOut'
import styled from 'styled-components';
import {Stack, Text} from '@fluentui/react';
import {ViewHeaderText} from '../../components/ViewHeaderText';
import {withTranslation, WithTranslation} from 'react-i18next';
import {TFunction} from 'i18next';
import HomepageStyles from './Homepage.module.scss';

const StyledMain = styled.main`
	width: 100%;
    position: relative;
    overflow-x: hidden;
	margin: 0px 0px 0px 0px;
	padding: 148px 0 64px 0;
	background: #94E5FF;
`;
const HomepageBase: React.FunctionComponent<WithTranslation> = ({t}: {t: TFunction}) => {
	return (
		<>
			<StyledMain>
				<Inner>
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
							<TryOut />
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
		</>
	);
}

/*Ths is needed to introduce t function for ttanslations.
Similar way to do that with non-function React component is described here:
https://linguinecode.com/post/react-i18next-withtranslation-typescript
*/
/** Homepage class */
export const Homepage = withTranslation()(HomepageBase);