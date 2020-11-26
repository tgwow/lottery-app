import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 90vh;
`;

const Layout = ({ children }) => {
	const isAuth = false;

	let content = (
		<>
			<Wrapper>
				<Hero />
				{children}
			</Wrapper>
			<Footer />
		</>
	);
	if (isAuth)
		content = (
			<>
				<header>logo, account, logout</header>
				<main>content</main>
			</>
		);

	return content;
};

export default Layout;
