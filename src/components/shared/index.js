import styled, { css } from 'styled-components';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';
import { COLOR_MAP } from '../../utils/colors';

export const StyledArrowRight = styled(VscArrowRight)`
	margin-left: 1.5rem;
`;

export const StyledArrowLeft = styled(VscArrowLeft)`
	margin-left: 1.5rem;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 120rem;
	margin: 0 auto;
	height: 100%;
	flex: 1;

	@media screen and (max-width: 1199px) {
		padding: 0 2rem;
	}
`;

export const setColor = css`
	${({ bgColor }) =>
		bgColor &&
		`
		background-color: ${COLOR_MAP[bgColor]};`}
	${({ color }) =>
		`color: ${COLOR_MAP[color] ? COLOR_MAP[color] : 'var(--color-grayLight)'}
	`}
`;
