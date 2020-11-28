import React from 'react';
import styled from 'styled-components';
import Heading from '../Headings';

const Wrapper = styled.div`
	font-style: italic;
	font-weight: bold;
	text-align: center;
	line-height: 1.1;
`;

const For = styled.div`
	background-color: var(--color-green);
	color: var(--color-white);
	display: inline-block;
	padding: 1rem 6rem;
	border-radius: 2.5rem;
	font-size: 2.2rem;
	margin-bottom: 2rem;
	text-transform: lowercase;
`;

const Lottery = styled.div`
	display: block;
	text-transform: uppercase;
`;

const Hero = () => {
	return (
		<Wrapper>
			<Heading type="h1" size="6.6" bold italic>
				The
				<br />
				Greatest
				<br />
				App
				<br />
				<For>for</For>
				<Lottery>lottery</Lottery>
			</Heading>
		</Wrapper>
	);
};

export default Hero;
