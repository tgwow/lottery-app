import React from 'react';

import styled from 'styled-components';
import Games from '../../Games';
import Headings from '../../UI/Headings';
import { StyledLink } from '../../UI/StyledLink';
import { StyledArrowRight } from '../../shared';

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

const Cart = () => {
	return (
		<Wrapper>
			<CartBody>
				<Headings type="h2" color="gray" size="2.6" weight="600" uppercase>
					Cart
				</Headings>
				<Games />
				<CartPrice>
					<strong>Cart&nbsp;&nbsp;</strong>
					Total: R$7,00
				</CartPrice>
			</CartBody>
			<CartFooter>
				<StyledLink size="3.3" weight="600" color="greenDark" noMargin>
					Save
					<StyledArrowRight />
				</StyledLink>
			</CartFooter>
		</Wrapper>
	);
};
export default Cart;
