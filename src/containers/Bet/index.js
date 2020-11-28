import React from 'react';
import styled from 'styled-components';

import Description from '../../components/Bet/Description';
import Cart from '../../components/Bet/Cart';
import BetControls from '../../components/Bet/BetControls';
import Board from '../../components/Bet/Board';
import Number from '../../components/Bet/Board/Number';

const Wrapper = styled.div`
	margin-top: 7rem;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 868px) {
		flex-flow: column;
	}
`;

const Left = styled.div`
	width: 100%;
	max-width: 70rem;
	display: flex;
	flex-flow: column;

	@media screen and (max-width: 868px) {
		max-width: 100%;
	}
`;

const Right = styled.div`
	width: 100%;
	max-width: 40rem;

	@media screen and (max-width: 868px) {
		max-width: 100%;
	}
`;

const Bet = () => {
	let numbers;
	numbers = [...Array(50)].map((_, i) => (
		<Number key={i + 1} bgColor="number" color="white">
			{i + 1}
		</Number>
	));

	return (
		<>
			<Wrapper>
				<Left>
					<Description type="mega-sena" />
					<Board>{numbers}</Board>
					<BetControls />
				</Left>
				<Right>
					<Cart />
				</Right>
			</Wrapper>
		</>
	);
};

export default Bet;
