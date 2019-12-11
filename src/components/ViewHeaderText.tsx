import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-size: 64px;
`;
export const ViewHeaderText: React.FunctionComponent = () => {
	return <StyledH1>
		Make you podcast seen and heard.
	</StyledH1>
}