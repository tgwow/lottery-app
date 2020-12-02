import styled, { css } from 'styled-components';
import { VscArrowRight } from 'react-icons/vsc';
import { COLOR_MAP } from '../../utils/colors';

export const StyledArrowRight = styled(VscArrowRight)`
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

export const MessageError = styled.span`
	visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
	opacity: ${({ show }) => (show ? '1' : '0')};
	margin-top: 5px;
	color: orangered;
	font-size: 1.4rem;
`;

export const showMessageError = (errorMessage) => {
	const errors = {
		EMAIL_EXISTS: 'This mail already is in use',
		TOO_MANY_ATTEMPTS_TRY_LATER: 'To many attempts, try later',
		EMAIL_NOT_FOUND: 'We not found this email in your database',
		INVALID_PASSWORD: 'Invalid password',
		INVALID_EMAIL: 'Invalid email',
		MISSING_PASSWORD: 'Please, insert your password',
	};
	return errors[errorMessage] || 'Something was wrong!';
};

export const setColor = css`
	${({ bgColor }) => bgColor && `background-color: ${COLOR_MAP[bgColor]};`}

	${({ color }) =>
		`color: ${COLOR_MAP[color] ? COLOR_MAP[color] : 'var(--color-grayLight)'}
	`}
`;
