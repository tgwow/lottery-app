import React from 'react';
import styled from 'styled-components';

import Games from '../../components/Games';
import Filter from '../../components/RecentGames/Filter';
import Headings from '../../components/UI/Headings';
import StyledLink from '../../components/UI/StyledLink';
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
		<>
			<Header>
				<Wrapper>
					<Headings type="h2" size="2.6" weight="600" uppercase>
						Recent Games
					</Headings>
					<Filter />
				</Wrapper>
				<StyledLink link="/bet" weight="600" size="2.6" color="green">
					New Bet
					<StyledArrowRight />
				</StyledLink>
			</Header>
			<Games />
		</>
	);
};

export default RecentGames;
