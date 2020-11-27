import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import { VscArrowRight } from 'react-icons/vsc';

const Nav = styled.nav`
	height: 100%;
	width: 100%;
`;

const Ul = styled.ul`
	list-style: none;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 8rem;
`;

const WrapperLeft = styled.div``;
const WrapperRight = styled.div`
	display: flex;
`;

const NavigationItems = () => {
	return (
		<Nav>
			<Ul>
				<WrapperLeft>
					<NavigationItem link="/">Home</NavigationItem>
				</WrapperLeft>
				<WrapperRight>
					<NavigationItem link="/account">Account</NavigationItem>
					<NavigationItem link="/logout">
						Logout <VscArrowRight />
					</NavigationItem>
				</WrapperRight>
			</Ul>
		</Nav>
	);
};

export default NavigationItems;
