import React, { useEffect, useState, useContext, useReducer } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { AuthContext } from '../../contexts/auth.context';

import { formatCurrentDate } from '../../utils/formatDate';
import { formatMoney } from '../../utils/formatNumber';

import Description from '../../components/Bet/Description';
import Cart from '../../components/Bet/Cart';
import BetControls from '../../components/Bet/BetControls';
import Board from '../../components/Bet/Board';
import Spinner from '../../components/UI/Spinner';
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

const INITIAL_STATE = {
	games: [],
	totalPrice: 0,
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'cart/SET':
			return {
				games: action.games,
				totalPrice: action.totalPrice,
			};
		case 'cart/CLEAR':
			return {
				games: [],
				totalPrice: 0,
			};
		default:
			return state;
	}
};

// eslint-disable-next-line react/display-name
const Bet = React.memo(() => {
	const dispatch = useDispatch();
	const { selectedType } = useSelector((state) => state.filter);
	const { types } = useSelector((state) => state.types);

	const { user } = useContext(AuthContext);

	const [selectedNumbers, setSelectedNumbers] = useState([]);
	const [betType, setBetType] = useState(null);

	// DONE: Transform this two state in a reducer
	const [cart, cartDispatch] = useReducer(cartReducer, INITIAL_STATE);

	const alert = useAlert();

	useEffect(() => {
		dispatch({ type: 'filter/CLEAR_TYPE', optionType: 'Lotofácil' });
	}, []);

	useEffect(() => {
		handleClearGame();
		let type = types.filter((t) => t.type === selectedType[0])[0];
		setBetType(type);
	}, [selectedType, types]);

	const handleSaveGame = () => {
		if (cart.totalPrice < 5) {
			alert.show(`You must spend at least ${formatMoney(betType['min-cart-value'])}`);
			return;
		}
		dispatch({ type: 'games/SAVE_GAMES_SAGA', games: cart.games });
		cartDispatch({ type: 'cart/CLEAR' });
	};

	const handleRemoveBet = (id) => {
		const index = cart.games.findIndex((game) => game.id === id);
		const updatedPrice = cart.totalPrice - cart.games[index].price;
		const updatedGames = cart.games.filter((g) => g.id !== id);
		cartDispatch({ type: 'cart/SET', games: updatedGames, totalPrice: updatedPrice });
	};

	const handleAddBet = () => {
		if (selectedNumbers.length < betType['max-number']) {
			alert.show(`Please, select more ${betType['max-number'] - selectedNumbers.length} numbers`);
			return;
		}

		const bet = {
			id: new Date().getSeconds() + Math.random(),
			userId: user.userId,
			numbers: selectedNumbers.sort((a, b) => a - b).toString(),
			date: formatCurrentDate(),
			price: betType.price,
			type: betType.type,
		};
		cartDispatch({ type: 'cart/SET', games: cart.games.concat(bet), totalPrice: cart.totalPrice + bet.price });
		handleClearGame();
	};

	const handleCompleteGame = (range, max) => {
		setSelectedNumbers(generateRandomNumbers(selectedNumbers, range, max));
	};

	const handleClearGame = () => {
		setSelectedNumbers([]);
	};

	const handleClickedNumber = (e, max) => {
		const value = parseInt(e.target.innerHTML);
		const number = selectedNumbers.indexOf(value);
		let updatedNumbers = [...selectedNumbers];

		if (updatedNumbers.length >= max) {
			if (updatedNumbers.includes(value)) updatedNumbers = removeValueFromArray(updatedNumbers, value);
			else alert.show(`You can select up to ${max} numbers.`);
		} else {
			if (number === -1) updatedNumbers.push(value);
			else updatedNumbers = updatedNumbers = removeValueFromArray(updatedNumbers, value);
		}

		setSelectedNumbers(updatedNumbers);
	};

	const removeValueFromArray = (arr, value) => {
		return arr.filter((item) => item !== value);
	};

	const generateRandomNumbers = (arr, range, max) => {
		const numbers = [...arr];
		while (numbers.length < max) {
			let number = generateRandomNumber(range);
			while (numbers.includes(number)) number = generateRandomNumber(range);
			numbers.push(number);
		}
		return numbers;
	};

	const generateRandomNumber = (range) => {
		return Math.round(Math.random() * range + 1);
	};

	let content = <Spinner />;
	if (betType) {
		let numbers = [...Array(betType.range)].map((_, index) => (
			<Number
				active={selectedNumbers.includes(index + 1)}
				key={index + 1}
				bgHover={betType.color}
				onClick={(e) => handleClickedNumber(e, betType['max-number'])}
			>
				{index + 1}
			</Number>
		));
		content = (
			<>
				<Description type={betType.type} desc={betType.description} />
				<Board>{numbers}</Board>
			</>
		);
	}
	return (
		<>
			<Wrapper>
				<Left>
					{content}
					<BetControls
						clear={handleClearGame}
						complete={() => handleCompleteGame(betType.range, betType['max-number'])}
						add={handleAddBet}
					/>
				</Left>
				<Right>
					<Cart games={cart.games} price={cart.totalPrice} remove={handleRemoveBet} save={handleSaveGame} />
				</Right>
			</Wrapper>
		</>
	);
});

export default Bet;
