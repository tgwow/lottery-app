import React from 'react';
import styled from 'styled-components';
import Logo from '../../UI/Logo';
import NavigationItems from './Navigation/NavigationItems';
import { Container } from '../../shared';

const FixedWrapper = styled.header`
	//position: fixed;
	//top: 0;
	//left: 0;
	//padding: 2rem;
	width: 100%;
	height: 8vh;
	border-bottom: 2px solid var(--color-border);
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Header = () => {
	return (
		<FixedWrapper>
			<Container>
				<Wrapper>
					<Logo />
					<NavigationItems />
				</Wrapper>
			</Container>
		</FixedWrapper>
	);
};

export default Header;
