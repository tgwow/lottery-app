import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
	font-size: 2.4rem;
	font-weight: bold;
	text-transform: capitalize;
	color: inherit;
	display: flex;
	align-items: center;
	transition: all 0.15s;

	&:not(:last-child) {
		margin-right: 5rem;
	}

	& svg {
		margin-left: 1.5rem;
		font-size: 3rem;
	}

	&:hover {
		color: var(--color-green);
	}

	&.active {
		color: var(--color-green);
	}
`;

const NavigationItem = ({ link, children }) => {
	return (
		<StyledLink exact activeClassName="active" to={link}>
			{children}
		</StyledLink>
	);
};

export default NavigationItem;
