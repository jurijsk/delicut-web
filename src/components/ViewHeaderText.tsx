import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';


const StyledH1 = styled.h1`
	font-size: 64px;
`;
export const ViewHeaderText: React.FunctionComponent = () => {
	const {t} = useTranslation();
	return <StyledH1>
		{t('Make you podcast seen and lietened')}
	</StyledH1>
}