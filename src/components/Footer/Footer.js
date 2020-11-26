import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
	height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--color-gray);
	font-size: 1.5rem;
	text-align: center;
	border-top: 2px solid var(--color-border);
`;

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Wrapper>
			<p>Copyright {year} - Luby Software</p>
		</Wrapper>
	);
};

export default Footer;
