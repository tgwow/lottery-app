import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Headings from '../../UI/Headings';
import Game from '../../Game';
import { StyledLink } from '../../UI/StyledLink';
import { StyledArrowRight } from '../../shared';

import { formatMoney } from '../../../utils/formatNumber';

const Wrapper = styled.aside`
	border-radius: 15px;
	border: 1px solid var(--color-borderLight);
	background-color: var(--color-white);
	margin-bottom: 2rem;
`;

const CartBody = styled.div`
	padding: 3rem 2rem;
	border-bottom: 1px solid var(--color-borderLight);
`;

const Games = styled.main`
	margin-top: 3rem;
`;

const CartFooter = styled.div`
	background-color: var(--color-cart);
	border-bottom-right-radius: 14px;
	border-bottom-left-radius: 14px;
	padding: 3rem 1rem;
	text-align: center;
`;

export const CartPrice = styled.p`
	font-weight: 300;
	font-size: 3rem;
	text-transform: uppercase;
	font-style: normal;
	margin-top: 2rem;

	& strong {
		font-style: italic;
	}
`;

// eslint-disable-next-line react/display-name
const Cart = React.memo(({ games, price, remove, save }) => {
	const { loading } = useSelector((state) => state.games);

	let content = (
		<Headings type="p" size="2.0">
			Make a bet and start compete for great prizes.
		</Headings>
	);
	if (games.length > 0)
		content = games.map((game, i) => (
			<Game
				clicked={() => remove(game.id)}
				key={game.numbers + i}
				numbers={game.numbers}
				label={game.type}
				date={game.date}
				type={game.type}
				price={game.price}
				purchasing
			/>
		));

	return (
		<Wrapper>
			<CartBody>
				<Headings type="h2" color="gray" size="2.6" weight="600" uppercase>
					Cart
				</Headings>
				<Games>{content}</Games>
				<CartPrice>
					<strong>Cart&nbsp;&nbsp;</strong>
					Total: {formatMoney(price)}
				</CartPrice>
			</CartBody>
			<CartFooter>
				<StyledLink
					disabled={loading}
					as="button"
					size="3.3"
					weight="600"
					color="greenDark"
					margin="0 auto"
					onClick={save}
				>
					{loading ? (
						'Loading...'
					) : (
						<>
							Save
							<StyledArrowRight />
						</>
					)}
				</StyledLink>
			</CartFooter>
		</Wrapper>
	);
});

export default Cart;
