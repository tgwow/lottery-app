import React from 'react';
import styled from 'styled-components';
import { setColor } from '../../../shared';

const StyledNumber = styled.button`
	${setColor};
	//background-color: var(--color-number);
	background-color: ${({ active, bgHover }) => (active ? bgHover : 'var(--color-number)')};
	color: var(--color-white);
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: none;
	border-radius: 50%;
	width: 6rem;
	height: 6rem;
	font-weight: 600;
	text-align: center;
	font-size: 2rem;
	font-style: normal;
	margin: 5px;
	transition: all 0.1s;
	cursor: pointer;

	&:hover {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
		background-color: ${({ bgHover }) => bgHover};
		color: white;
	}
	&:active {
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.35);
		background-color: ${({ bgHover }) => bgHover};
		transform: translateY(1px);
		color: white;
	}
`;

const Number = (props) => {
	return <StyledNumber {...props} />;
};

export default Number;
