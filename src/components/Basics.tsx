import styled, {css} from 'styled-components';
import {appPadding, mediaQueries, contentWidth, contentSizes} from '../styles/constants';

/** Flex container */
export const SectionContent = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0px auto;
	width: ${contentSizes.contentMax};

	${mediaQueries.screenXXL} {
		width: ${contentSizes.contentXXL};
	}		
	${mediaQueries.screenXL} {
		width: ${contentSizes.contentXL};
	}
	${mediaQueries.screenL} {
		width: ${contentSizes.contentL};
	}
	${mediaQueries.screenM} {
		width: 100%;
		padding: 30px;
	}
	${mediaQueries.screenS} {
		width: 100%;
		padding: 0px 30px;
	}
	${mediaQueries.screenXXS} {
		padding: 0px 12px;
	}
`;

export const FlexContainerBase = css`
	display: flex;
`;


