import React from 'react';
import styled from 'styled-components';

import Games from '../../components/Games';
import Filter from './Filter';
import Headings from '../../components/UI/Headings';
import StyledLink from '../../components/UI/StyledLink';
import { Container } from '../../components/Header';
import { StyledArrowRight } from '../../components/shared';

const Header = styled.header`
	margin-top: 7rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 80rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const RecentGames = () => {
	return (
		<Container>
			<Header>
				<Wrapper>
					<Headings type="h2" size="2.6" bold uppercase noMargin>
						Recent Games
					</Headings>
					<Filter />
				</Wrapper>
				<StyledLink bold size="2.6" color="green" noMargin>
					New Bet
					<StyledArrowRight />
				</StyledLink>
			</Header>
			<Games />
		</Container>
	);
};

export default RecentGames;
