import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	font-size: 1.6rem;
	font-weight: bold;
	outline: none;
	padding: 1rem 3rem;
	border-radius: 30px;
	background-color: ${({ active, color }) => (active ? color : 'var(--color-white)')};
	color: ${({ active, color }) => (!active ? color : 'var(--color-white)')};
	border: 2px solid ${({ color }) => color};
	transition: all 0.1s;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	&:hover {
		transform: translateY(-2px);
	}
	&:active {
		transform: translateY(2px);
	}
`;

const GameButton = ({ children, ...props }) => {
	return <Button {...props}>{children}</Button>;
};

export default GameButton;
