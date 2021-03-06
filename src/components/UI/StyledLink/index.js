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
	font-size: ${({ size }) => (size ? size : '1.6')}rem;
	margin: ${({ margin }) => (margin ? margin : '0rem')};
`;

const CustomLink = ({ link, children, ...rest }) => {
	return (
		<StyledLink to={link} {...rest}>
			{children}
		</StyledLink>
	);
};
export default CustomLink;
