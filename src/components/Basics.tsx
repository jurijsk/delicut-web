import styled from 'styled-components';

export const Inner = styled.div`
	width: 960px;
	display: flex;
	-webkit-box-pack: start;
	justify-content: flex-start;
	margin: 0px auto;

	@media (max-width: 1680px) {
		width: 1336px;
	}		@media (max-width: 1460px) {
		width: 1136px;
	}
		@media (max-width: 1280px) {
		width: 960px;
	}
	@media (max-width: 1024px) {
		width: 100%;
		padding: 0px 30px;
	}
	@media (max-width: 960px) {
		width: 100%;
		padding: 0px 30px;
	}
`;


