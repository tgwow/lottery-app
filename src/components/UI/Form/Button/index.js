import React from 'react';
import styled from 'styled-components';

import { baseStyle } from '../CustomLink/index';

export const StyledButton = styled.button`
	${baseStyle}
	display: flex;
	align-items: center;
	font-size: 2.2rem;
	background: transparent;
	outline: none;
	border: none;
	font-weight: ${({ bold }) => (bold ? '700' : '300')};
	font-size: ${({ size }) => (size ? size : '1')}rem;
	margin: ${({ noMargin }) => (noMargin ? '0' : '3rem 0')};
`;

const Button = ({ link, children, color, bold, size }) => {
	return (
		<StyledButton to={link} color={color} bold={bold} size={size}>
			{children}
		</StyledButton>
	);
};
export default Button;
