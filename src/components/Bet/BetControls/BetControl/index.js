import React from 'react';
import styled from 'styled-components';
import { baseStyle } from '../../../UI/Form/CustomLink';
import { setColor } from '../../../shared';

const BetButton = styled.button`
	color: ${({ color }) => color && color};
	background-color: transparent;
	${baseStyle};
	${setColor};
	border: 2px solid var(--color-greenDark);
	font-style: normal;
	font-size: 1.6rem;
	padding: 1rem 2.5rem;
	border-radius: 10px;
	font-weight: 600;
`;

const BetControl = ({ children, ...rest }) => {
	return <BetButton {...rest}>{children}</BetButton>;
};
export default BetControl;
