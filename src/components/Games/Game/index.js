import React from 'react';
import Headings from '../../UI/Headings';
import styled from 'styled-components';

import { COLORS } from '../../../utils/colors';

const Wrapper = styled.article`
	padding-left: 1.5rem;
	position: relative;

	&:not(:last-child) {
		margin-bottom: 2.5rem;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 6px;
		height: 100%;
		background-color: ${({ color }) => color};
		border-radius: 100px;
	}
`;

const Game = ({ numbers, date, price, label, type }) => {
	return (
		<>
			<Wrapper color={COLORS[type]}>
				<Headings size="1.8" bold margin="0 0 8px 0" color="#868686">
					{numbers}
				</Headings>
				<Headings size="1.4" margin="0 0 5px 0" noItalic>
					{date} - ({price})
				</Headings>
				<Headings color={COLORS[type]} type="p" size="1.6" bold noMargin>
					{label}
				</Headings>
			</Wrapper>
		</>
	);
};

export default Game;
