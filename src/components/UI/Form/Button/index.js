import React from 'react';
import styled from 'styled-components';

import { baseStyle } from '../CustomLink/index';

export const StyledButton = styled.button`
	${baseStyle}
	width: 100%;
	font-weight: ${({ bold }) => (bold ? '700' : '300')};
	font-size: ${({ size }) => (size ? size : '1')}rem;
	margin: ${({ noMargin }) => (noMargin ? '0' : '3rem 0')};
`;

const Button = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};
export default Button;
