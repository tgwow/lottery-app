import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Headings from '../../components/UI/Headings';
import StyledLink from '../../components/UI/StyledLink';
import { StyledArrowRight } from '../../components/shared';
import Spinner from '../../components/UI/Spinner';
import Game from '../../components/Game';
import FilterOptions from '../../components/FilterOptions';
import { fetchTypesSaga } from '../../store/actions/types';

const Header = styled.header`
	margin-top: 7rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Wrapper = styled.div`
	width: 100%;
	max-width: 85rem;
	display: flex;
	align-items: center;
`;

const Filter = styled.nav`
	display: flex;
	align-items: center;
	margin-left: 4rem;
`;

const Games = styled.main`
	margin-top: 3rem;
`;

const RecentGames = ({ games, selectedType, fetchTypesSaga }) => {
	useEffect(() => {
		fetchTypesSaga();
	}, [fetchTypesSaga]);

	useEffect(() => {}, [games]);
	let content = <Spinner />;

	if (games.length > 0) {
		content = games.map((game) => {
			return Object.keys(game)
				.map((bets) => {
					return game[bets];
				})
				.reduce((acc, curr) => {
					return acc.concat(curr);
				}, [])
				.filter((item) => {
					return selectedType.includes(item.type);
				})
				.map((bet) => {
					return (
						<Game
							key={bet.id}
							numbers={bet.numbers}
							date={bet.date}
							type={bet.type}
							label={bet.type}
							price={bet.price}
						/>
					);
				});
		});
	} else if (games.length === 0) {
		content = (
			<Headings type="h2" size="1.8" weight="400">
				There are no games yet.
			</Headings>
		);
	}

	return (
		<>
			<Header>
				<Wrapper>
					<Headings type="h2" size="2.6" weight="600" uppercase color="gray">
						Recent Games
					</Headings>
					<Filter>
						<Headings type="p" size="1.6">
							Filters
						</Headings>
						<FilterOptions behavior="all" />
					</Filter>
				</Wrapper>
				<StyledLink link="/bet" weight="600" size="2.6" color="green">
					New Bet
					<StyledArrowRight />
				</StyledLink>
			</Header>
			<Games>{content}</Games>
		</>
	);
};

const mapStateToProps = ({ game, filter }) => ({
	games: game.games,
	error: game.error,
	loading: game.loading,
	selectedType: filter.selectedType,
});

export default connect(mapStateToProps, { fetchTypesSaga })(RecentGames);
