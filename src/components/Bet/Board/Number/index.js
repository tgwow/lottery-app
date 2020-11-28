import React from 'react';
import styled from 'styled-components';
import { setColor } from '../../../shared';

const StyledNumber = styled.div`
	${setColor};
	display: inline-flex;
	justify-content: center;
	align-items: center;
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
		background-color: var(--color-green);
	}
	.active {
		background-color: var(--color-green);
	}
`;

const Number = (props) => {
	return <StyledNumber {...props} />;
};

export default Number;
