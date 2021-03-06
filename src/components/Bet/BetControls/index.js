import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import BetControl from './BetControl';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 3.5rem 0.5rem 5rem 0.5rem;
`;

const StyledCartIcon = styled(AiOutlineShoppingCart)`
	margin-right: 3rem;
	font-size: 3rem;
`;

const Left = styled.div`
	display: flex;

	&:first-child > button {
		margin-right: 2rem;
	}
`;
const BetControls = ({ clear, complete, add }) => {
	return (
		<Wrapper>
			<Left>
				<BetControl color="greenDark" onClick={(range, max) => complete(range, max)}>
					Complete Game
				</BetControl>
				<BetControl color="greenDark" onClick={clear}>
					Clear Game
				</BetControl>
			</Left>
			<BetControl bgColor="greenDark" color="white" onClick={add}>
				<StyledCartIcon />
				Add to cart
			</BetControl>
		</Wrapper>
	);
};
export default BetControls;
