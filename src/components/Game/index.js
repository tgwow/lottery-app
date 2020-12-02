import React from 'react';
import Headings from '../UI/Headings';
import styled from 'styled-components';

import { setColor } from '../shared';

const Wrapper = styled.article`
	padding-left: 1.5rem;
	position: relative;
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

const Game = ({ numbers, date, price, label, type, onClick }) => {
	return (
		<>
			<Wrapper bgColor={type} onClick={onClick}>
				<Headings size="1.8" weight="600" margin="0 0 8px 0" color="grayLight">
					{numbers}
				</Headings>
				<Headings size="1.4" margin="0 0 5px 0" noItalic>
					{date} - ({price})
				</Headings>
				<Headings color={type} type="p" size="1.6" weight="600">
					{label}
				</Headings>
			</Wrapper>
		</>
	);
};

export default Game;
