import React from 'react';
import Headings from '../UI/Headings';
import styled from 'styled-components';
import { VscTrash } from 'react-icons/vsc';

import { setColor } from '../shared';
import { formatMoney } from '../../utils/formatNumber';

const Wrapper = styled.article`
	padding-left: 1.5rem;
	position: relative;
	margin-left: ${({ purchasing }) => purchasing && '3rem'};
	&:not(:last-child) {
		margin-bottom: 2.5rem;
	}
	&::before {
		${setColor};
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 6px;
		height: 100%;
		border-radius: 100px;
	}
`;

const StyledMoney = styled.span`
	color: var(--color-gray);
	font-style: normal;
	font-size: 1.6rem;
	font-weight: 400;
	margin-left: 1rem;
`;

const StyledTrash = styled(VscTrash)`
	color: #888888;
	font-size: 3.2rem;
	cursor: pointer;
	position: absolute;
	top: 50%;
	left: -35px;
	transform: translateY(-50%);
`;
const Game = ({ numbers, date, price, type, onClick, purchasing, clicked }) => {
	const info = !purchasing && (
		<Headings size="1.6" margin="0 0 5px 0" noItalic>
			{date} - ({formatMoney(price)})
		</Headings>
	);
	return (
		<>
			<Wrapper bgColor={type} onClick={onClick} purchasing={purchasing}>
				<Headings size="2" weight="600" margin="0 0 8px 0" color="grayLight">
					{numbers}
				</Headings>
				{info}
				<Headings color={type} type="p" size="1.8" weight="600">
					{type} <StyledMoney> {purchasing && formatMoney(price)} </StyledMoney>
				</Headings>
				{purchasing && <StyledTrash onClick={() => clicked()} />}
			</Wrapper>
		</>
	);
};

export default Game;
