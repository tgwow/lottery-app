import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { baseStyle } from '../Form/CustomLink/index';

export const StyledLink = styled(Link)`
	${baseStyle}
	display: flex;
	align-items: center;
	font-size: 2.2rem;
	background: transparent;
	outline: none;
	border: none;
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	font-size: ${({ size }) => (size ? size : '1')}rem;
	margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '2.5')}rem;
`;

const CustomLink = ({ link, clicked, children, ...rest }) => {
	return (
		<StyledLink to={link} {...rest} onClick={clicked}>
			{children}
		</StyledLink>
	);
};
export default CustomLink;
