import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/UI/Hero/Hero';
import Footer from '../../components/Layout/Footer/Footer';
import Header from '../../components/Layout/Header';
import { Container } from '../../components/shared';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 90vh;
`;

const Layout = ({ children }) => {
	const isAuth = false;

	let content = (
		<Wrapper>
			<Hero />
			{children}
		</Wrapper>
	);
	if (!isAuth)
		content = (
			<>
				<Header />
				<Container>{children}</Container>
			</>
		);

	return (
		<>
			{content}
			<Footer />
		</>
	);
};

export default Layout;
