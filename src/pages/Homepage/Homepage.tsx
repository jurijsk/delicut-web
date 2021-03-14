import React from 'react';

//ui
import {SectionContent, FlexContainerBase} from '../../components/Basics';
import {TryOut} from '../../components/TryOut'
import {Stack, Text} from '@fluentui/react';

//i18n
import {withTranslation, WithTranslation} from 'react-i18next';
import {TFunction, WithT} from 'i18next';

//style
import styled, {css, keyframes, ThemedStyledFunction} from 'styled-components';
import {MotionDurations, MotionTimings, FontSizes} from '@uifabric/fluent-theme';
import {appPadding, mediaQueries} from '../../styles/constants';

//media
import HeroImageSrc from '../../static/hero-image.png';

import {ReactComponent as Steps} from '../../static/how-it-works.svg';

import NumbersImageSrc from '../../static/numbers-image.png';
import {ReactComponent as AnalyticsImage} from '../../static/analytics.svg';
import EpicentreImageSrc from '../../static/epicentre.png';




const ColumnStyles = css`
	padding: ${appPadding.small};
	${mediaQueries.maxMobile} {
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
	${mediaQueries.maxLarge} {
		flex: 0 0 50%;
	}
	${ColumnStyles}
`;

const verticalShift = function verticalShift(shift = 20) {
	return keyframes`
		from {
			opacity: 0;
			transform: translate3d(0, ${shift}px, 0);
			}
		to {
			opacity: 1;
			transform: translate3d(0, 0, 0);
		}
	`;
}

const SectionStyles = styled.section<{shift?: number}>`
	display: flex;
	justify-content: center;
	animation: ${MotionDurations.duration3} ${MotionTimings.decelerate} 0s 1 ${props => verticalShift(props.shift)};
	padding: 90px 0;
	${mediaQueries.screenS} {
		padding: 60px 0 20px;
	}
`;

const SectionHeading = styled.h3`
	width: 100%;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 20px;
	color: #6e3800;
	padding-bottom: 40px;
`;

const HeroSection = styled(SectionStyles)`
	background-color: #94E5FF;
	padding: 132px 0;
	${mediaQueries.screenS} {
		padding: 80px 0 30px;
	}
`;

const StyledMain = styled.main`
	width: 100%;
    position: relative;
    overflow-x: hidden;
	margin: 0;
`;

const HeroTextContent = styled.div`
	width: 50%;
	flex: 0 0 auto;
	${mediaQueries.smallDesktop} {
		width: 60%;
	}
		${mediaQueries.screenXS} {
		width: 100%;
	}
`;

const HeroTitle = styled.h2`
	font-size: ${FontSizes.size68};
	font-weight: 600;
	color: #3d2450;
	line-height: 1.1;
	margin: 0;
	${mediaQueries.smallDesktop} {
		font-size: ${FontSizes.size42};
	}
	${mediaQueries.screenXXS} {
		font-size: 32px;
	}
`;

const HeroDescription = styled.div`
	width: 100%;
	margin: 60px 0px 30px;
	& > * {
		margin-bottom: 15px;
		font-weight: 600;
		font-size: 18px;
	}
	&:first-child {
		margin-bottom: 0px;
	}

	${mediaQueries.smallDesktop} {
		margin: 40px 0px 20px;
		& > * {
			font-weight: normal;
		}
	}
`;

const TextContent = styled.div`
	width: 460px;
	padding-bottom: 30px;
	${mediaQueries.smallDesktop} {
		width: 60%;
	}
		${mediaQueries.screenXS} {
		width: 100%;
	}
	& > * {
		margin-bottom: 15px;
		font-size: 18px;
	}
	&:first-child {
		margin-bottom: 0px;
	}
`;

const HeroContent = styled(SectionContent)`
	${FlexContainerBase}
`;
const MediaBlock = styled.div`
	text-align: center;
    position: relative;
	flex: 1 1 auto;
	width: 50%;
	${mediaQueries.smallDesktop} {
		width: 40%;
	}
`;

const MadiaImage = styled.img`
`;




const HowSection = styled(SectionStyles)`
	background-color: #F9E8FF;
`;
const HowBlock = styled.div`
	text-align: center;
    position: relative;
	flex: 1 1 auto;
	${mediaQueries.smallDesktop} {
		width: 40%;
	}
`;

const HowImage = styled(Steps)`
	width: 70%;
`;

const AnalyticsImageStyled = styled(AnalyticsImage)`
	width: 70%;
`;


const EpiCentreSection = styled(SectionStyles)`
	background-color: #50E3C2;
`;

const AnalyticsSection = styled(SectionStyles)`
	background-color: #fff;
`;

const NumbersSection = styled(SectionStyles)`
	background: linear-gradient(140deg, #94E5FF 5%, rgba(221, 148, 255, 0.4) 80%);
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
		const stackTokens = {
			childrenGap: 15
		}
		return (
			<StyledMain>
				<HeroSection shift={48}>
					<SectionContent>
						<HeroTextContent>
							<HeroTitle>{this.t('Make you podcast seen and listened')}</HeroTitle>
							<HeroDescription>
								<Text as="p" block>
									{this.t("Audio isn't native to social web. Video is. Create shareable video clips with kinetic captions out of podcast that works even when muted.")}
								</Text>
								<Text as="p" block>
									{this.t("Share the video view Delicut’s EpiCentre URL to route user to their favorite podcast app and measure vital metrics along the way.")}
								</Text>
							</HeroDescription>
							<Stack tokens={stackTokens}>
								<TryOut id="try-out-top" />
							</Stack>
						</HeroTextContent>
						<MediaBlock>
							<MadiaImage src={HeroImageSrc}></MadiaImage>
						</MediaBlock>
					</SectionContent>
				</HeroSection>
				<HowSection>
					<SectionContent>
						<SectionHeading>{this.t("How it works")}</SectionHeading>
						<TextContent>
							<Text as="p" block>
								{this.t("Delicut simplifies and streamlines the prosses of reaching bigger audience to few simple steps")}
							</Text>
							<Text as="ol" block>
								<li>{this.t("Upload your audio file")}</li>
								<li>{this.t("select the moments you want to animate")}</li>
								<li>{this.t("apply your branding and format")}</li>
								<li>{this.t("Download or share your cuts right away or schedule a social post for later!")}</li>
							</Text>
							<Text as="p" block>
								{this.t("Delicut transcribes the audio to enable kinetic captioning which makes your audio readable and engaging even when muted.")}
							</Text>
						</TextContent>
						<MediaBlock>
							<HowImage/>
						</MediaBlock>
					</SectionContent>
				</HowSection>
				<EpiCentreSection>
					<SectionContent>
						<SectionHeading>{this.t("Epicentre")}</SectionHeading>
						<TextContent>
							<Text as="p" block>
								{this.t("The Delicut Epicentre is a branded, stand-alone webpage for your content.")}
							</Text>
							<Text as="p" block>
								{this.t("Here, listeners can play all of your cuts, listen to an entire episode, subscribe and create their own cuts and share them on social media.")}
							</Text>
						</TextContent>
						<MediaBlock>
							<MadiaImage src={EpicentreImageSrc}></MadiaImage>
						</MediaBlock>
					</SectionContent>
				</EpiCentreSection>

				<AnalyticsSection>
					<SectionContent>
						<SectionHeading>{this.t("Listener journey and analytics")}</SectionHeading>
						<TextContent>
							<Text as="p" block>
								{this.t("Epicentre opens access to in-depth engagement metrics allowing you to understand listeners journey from discovery to subscription.")}
							</Text>
							<Text as="p" block>
								{this.t("You will get access to much needed metrics to understand your listeners: page views, number of plays, completed plays, play drop offs, shares, click through rates to podcast apps and more.")}
							</Text>
						</TextContent>
						<MediaBlock>
							<AnalyticsImageStyled/>
						</MediaBlock>
					</SectionContent>
				</AnalyticsSection>

				<NumbersSection>
					<SectionContent>
						<SectionHeading>{this.t("Numbers and Facts")}</SectionHeading>
						<TextContent>
							<Text as="ul" block>
								<li>{this.t("People are visual creatures")}</li>
								<li>{this.t("Tweets with video get 10 times more engagement")}</li>
								<li>{this.t("85% of video on social media is viewed with audio muted")}</li>
								<li>{this.t("Short sneak peaks of content get better engagement")}</li>
								<li>{this.t("Captions and kinetic typography makes engaging when muted")}</li>
								<li>{this.t("People are more likely to trust user-generated content and engage with it")}</li>
							</Text>
						</TextContent>
						<MediaBlock>
							<MadiaImage src={NumbersImageSrc}></MadiaImage>
							<br />
							<br />
							<TryOut id="try-out-bottom" />
						</MediaBlock>
					</SectionContent>
				</NumbersSection>
				<SectionStyles>
					<a href="https://twitter.com/ykovzel">[tw]</a>
				</SectionStyles>
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