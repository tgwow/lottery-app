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
	margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '2.5')}rem;
`;

const CustomButton = ({ link, children, color, bold, size }) => {
	return (
		<StyledButton to={link} color={color} bold={bold} size={size}>
			{children}
		</StyledButton>
	);
};
export default CustomButton;
