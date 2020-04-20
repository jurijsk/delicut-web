import React from 'react';
import styled  from 'styled-components';

import {SectionContent} from './Basics';

import {useTranslation} from 'react-i18next';
import  {ReactComponent as Logo} from '../static/logo.svg';


const height = 42;
const StyledHeader = styled.header`
	height: ${height}px;
	line-height: ${height}px;
	width: 100%;
	background: transparent;
	position: absolute;
	top: 0;
	z-index: 10;
`;

const FlexInner = styled(SectionContent)`
	display:flex;
	justify-content:flex-start;
	-webkit-box-pack: start;
`;

const LogoLink = styled.a`
	height: ${height + 10}px;
	display: block;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	padding: 5px 0px;
	filter: brightness(0%) grayscale(100%);
	transition: background-color .5s ease-in, filter .5s ease-out;
	&:hover {
		filter: brightness(100%) grayscale(0%);
		background-color: #222;
	}
	&:visited{
		color: #000;
	}
`;

export const AppHeader: React.FunctionComponent = () => {
	const {t} = useTranslation();
	return <StyledHeader>
		<FlexInner>
			<LogoLink  href="/" title={t('Go to Delicut homepage')}>
				<Logo height={height} /> 
			</LogoLink>
		</FlexInner>
	</StyledHeader>
}

