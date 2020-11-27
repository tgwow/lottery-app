import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationItems from './Navigation/NavigationItems';

export const Container = styled.div`
	width: 100%;
	max-width: 120rem;
	margin: 0 auto;
	height: 100%;
`;

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
