import React from 'react';

//ui
import {Inner} from '../../components/Basics';
import {TryOut} from '../../components/TryOut'
import {Stack, Text} from '@fluentui/react';

//i18n
import {withTranslation, WithTranslation} from 'react-i18next';
import {TFunction, WithT} from 'i18next';

//style
import styled, {css, keyframes} from 'styled-components';
import HomepageStyles from './Homepage.module.scss';
import {MotionDurations, MotionTimings, FontSizes} from '@uifabric/fluent-theme';
import {appPadding, mediaQuery} from '../../styles/constants';

//media
import HeroImageSrc from '../../static/hero-image.png';

const ColumnStyles = css`
	padding: ${appPadding.small};
	${mediaQuery.maxMobile} {
		margin-top: ${appPadding.medium};
		flex: 1 0 100%;
		&:first-child {
			margin-top: 0;
		}
	}
`;

const OneHalf = styled.div`
	flex: 0 0 50%;
	${ColumnStyles}
`;

const OneFourth = styled.div`
	flex: 0 0 25%;
	${mediaQuery.maxLarge} {
		flex: 0 0 50%;
	}
	${ColumnStyles}
`;

const SectionAnimation = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, 48px, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;
const SectionStyles  = styled.section`
	display: flex;
	justify-content: center;
	animation: ${MotionDurations.duration3} ${MotionTimings.decelerate} 0s 1 ${SectionAnimation};
`;

const HeroSection = styled(SectionStyles)`
        padding-top: 132px;
		padding-bottom: 132px;
		background-color: #94E5FF;
`;

const HeroTitle = styled.h2`
	font-size: ${FontSizes.size68};
	font-weight: 600;
	color: #3d2450;
	line-height: 1.1;
	margin: 0;
`;

const StyledMain = styled.main`
	width: 100%;
    position: relative;
    overflow-x: hidden;
	margin: 0px 0px 0px 0px;
`;

const HeroTextContent = styled.div`
	width: 50%;
	flex: 0 0 auto;
`;

const HeroDescription = styled.div`
	width: 100%;
	margin: 60px 0px 30px;
	& p {
		margin-bottom: 15px;
		font-weight: 600;
	}
`;

const HeroMedia = styled.div`
	text-align: center;
    position: relative;
	flex: 1 1 auto;
`;

const HeroImage = styled.img`
	width: 400px;
`;

class HomepageBase extends React.Component<WithTranslation> {
	private t: TFunction;
	constructor(props: WithTranslation) {
		super(props);
		this.t = props.t;

		this.state = {
			isMountedOffset: false,
		};
	}

	public componentDidMount(): void {
		this.setState({isMountedOffset: true});
	}

	render() {

		return (
			<StyledMain>
				<HeroSection>
					<Inner>
						<HeroTextContent>
							<HeroTitle>{this.t('Make you podcast seen and listened')}</HeroTitle>
							<HeroDescription>
								<Text variant="medium" as="p" block>
									{this.t("Audio isn't native to social web. Video is. Create shareable video clips with kinetic captions out of podcast that works even when muted.")}
								</Text>
								<Text variant="medium" as="p" block>
									{this.t("Share the video view Delicut’s EpiCentre URL to route user to their favorite podcast app and measure vital metrics along the way.")}
								</Text>
							</HeroDescription>
							<Stack gap={15}>
								<TryOut />
							</Stack>
						</HeroTextContent>
						<HeroMedia>
							<HeroImage src={HeroImageSrc}></HeroImage>					
						</HeroMedia>
					</Inner>
				</HeroSection>
			</StyledMain>
		);
	}
}
const StyledHomepageBase = styled(HomepageBase)`
	background-color: #black;
`;

/*Ths is needed to introduce t function for ttanslations.
Similar way to do that with non-function React component is described here:
https://linguinecode.com/post/react-i18next-withtranslation-typescript
*/
/** Homepage class */
export const Homepage = withTranslation()(StyledHomepageBase);