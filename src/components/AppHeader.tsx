import React from 'react';
import styled  from 'styled-components';

import {Inner} from './Basics';

import {useTranslation} from 'react-i18next';
import  {ReactComponent as Logo} from './logo.svg';


const height = 48;
const StyledHeader = styled.header`
	height: ${height}px;
	line-height: ${height}px;
	width: 100%;
	background: transparent;
	position: absolute;
	top: 0;
	z-index: 10;
`;

const FlexInner = styled(Inner)`
	display:flex;
	justify-content:flex-start;
	-webkit-box-pack: start;
`;

const LogoLink = styled.a`
	height: ${height}px;
	display: block;
	cursor: pointer;
	text-decoration: none;
	color: #000;
	padding: 6px 0;
	filter: grayscale(100%);
	&:hover {
		filter:none;
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
				 <Logo height={36} /> 
			</LogoLink>
		</FlexInner>
	</StyledHeader>
}

