import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { setColor } from '../../../shared';
export const baseStyle = css`
	${setColor};
	cursor: pointer;
	transition: all 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	border: none;

	&:hover {
		transform: translateY(-2px);
		text-shadow: 0 1px 2px var(--color-shadow);
	}
	&:active {
		transform: translateY(2px);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const StyledLink = styled(Link)`
	${baseStyle}
	font-size: 1.7rem;
	text-align: right;
	justify-content: flex-end;
	margin: 2.5rem 0;
	padding-right: 2.5rem;
`;

const CustomLink = ({ link, children, color, clicked }) => {
	return (
		<StyledLink to={link} color={color} onClick={clicked}>
			{children}
		</StyledLink>
	);
};
export default CustomLink;
