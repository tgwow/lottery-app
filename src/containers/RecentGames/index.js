import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';

import Headings from '../../components/UI/Headings';
import StyledLink from '../../components/UI/StyledLink';
import { StyledArrowRight } from '../../components/shared';
import Spinner from '../../components/UI/Spinner';
import Game from '../../components/Game';
import FilterOptions from '../../components/FilterOptions';

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

const RecentGames = () => {
	const dispatch = useDispatch();
	const fetchTypes = useCallback(() => dispatch({ type: 'types/FETCH_TYPES_SAGA' }), [dispatch]);
	const selectedType = useSelector((state) => state.filter.selectedType);
	const [bets, setBets] = useState([]);

	useEffect(() => {
		fetchTypes();
	}, [fetchTypes]);

	useEffect(() => {
		async function fetchBets() {
			const userId = localStorage.getItem('userId');
			try {
				const { data } = await api.get(process.env.REACT_APP_API_URL + `/bets/${userId}`);
				setBets(data);
			} catch (err) {
				console.log(err.response.data);
			}
		}
		fetchBets();
	}, []);

	useEffect(() => {
		console.log('rendering')
	}, [])

	// useEffect(() => {}, [games]);
	let content = <Spinner />;
	if (bets.length > 0) {
		// return Object.keys(game)
		// 	.map((bets) => {
		// 		return game[bets];
		// 	})
		// 	.reduce((acc, curr) => {
		// 		return acc.concat(curr);
		// 	}, [])
		// .filter((item) => {
		// 		return selectedType.includes(item.type);
		// 	})
		// 		.map((bet) => {
		// 			return (
		//
		// 			);
		// 		});
		content = bets
			.filter((bet) => {
				return selectedType.includes(bet.type.name);
			})
			.map((bet) => {
				return (
					<Game key={bet.id} numbers={bet.numbers} date={bet.due_date} type={bet.type.name} price={bet.type.price} />
				);
			})
			.reverse();
	} else if (bets.length === 0) {
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

export default RecentGames;
