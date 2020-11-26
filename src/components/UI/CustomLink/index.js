import React from 'react';
// import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const BUTTONS_COLORS = {
	gray: 'var(--color-gray)',
	green: 'var(--color-green)',
	violet: 'var(--color-violet)',
};

export const baseStyle = css`
	color: ${({ color }) => (BUTTONS_COLORS[color] ? BUTTONS_COLORS[color] : 'var(--color-grayLight)')};
	cursor: pointer;
	transition: all 0.2s;
	// display: flex;
	align-items: center;
	justify-content: center;
	// display: inline-block;
	width: 100%;

	&:hover {
		transform: translateY(-2px);
		text-shadow: 0 1px 2px var(--color-shadow);
	}
	&:active {
		transform: translateY(2px);
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
	}
`;

export const StyledLink = styled.div`
	${baseStyle}
	font-size: 1.7rem;
	text-align: right;
	justify-content: ${({ reset }) => (reset ? 'flex-end' : 'flex-start')};
	margin: 2.5rem 0;
	padding-right: 2.5rem;
`;

const CustomLink = ({ link, children, reset, color }) => {
	return (
		<StyledLink reset={reset} to={link} color={color}>
			{children}
		</StyledLink>
	);
};
export default CustomLink;
