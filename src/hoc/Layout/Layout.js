import React from 'react';
import styled from 'styled-components';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';

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
				{children}
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
