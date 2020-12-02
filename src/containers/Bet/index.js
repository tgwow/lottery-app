import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchTypesSaga } from '../../store/actions/types';

import Description from '../../components/Bet/Description';
import Cart from '../../components/Bet/Cart';
import BetControls from '../../components/Bet/BetControls';
import Board from '../../components/Bet/Board';
import Spinner from '../../components/UI/Spinner';
import Number from '../../components/Bet/Board/Number';
import { formatCurrentDate } from '../../utils/formatDate';

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

// eslint-disable-next-line react/display-name
const Bet = React.memo(({ fetchTypesSaga, types, selectedType }) => {
	const [selectedNumbers, setSelectedNumbers] = useState([]);
	const [betType, setBetType] = useState(null);
	const [games, setGames] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		fetchTypesSaga();
	}, [fetchTypesSaga]);

	useEffect(() => {
		handleClearGame();
		let type = types.filter((t) => t.type === selectedType)[0];
		setBetType(type);
	}, [selectedType, types]);

	const handleSaveGame = useCallback(() => {
		console.log('saving...');
	}, []);

	const handleRemoveBet = (id) => {
		const index = games.findIndex((game) => game.id === id);
		const updatedPrice = totalPrice - games[index].price;
		const updatedGames = games.filter((g) => g.id !== id);
		setGames(updatedGames);
		setTotalPrice(updatedPrice);
	};

	const handleAddBet = () => {
		if (selectedNumbers.length < betType['max-number']) {
			alert(`Please, select more ${betType['max-number'] - selectedNumbers.length} numbers`);
			return;
		}

		const game = {
			id: new Date().getSeconds() + Math.random(),
			numbers: selectedNumbers.sort().toString(),
			date: formatCurrentDate(),
			price: betType.price,
			type: betType.type,
		};

		setTotalPrice(totalPrice + game.price);
		setGames(games.concat(game));
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
			else alert(`You can select up to ${max} numbers.`);
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
					<Cart games={games} price={totalPrice} remove={handleRemoveBet} save={handleSaveGame} />
				</Right>
			</Wrapper>
		</>
	);
});

const mapStateToProps = ({ type, filter }) => ({
	types: type.types,
	selectedType: filter.selectedType,
});

export default connect(mapStateToProps, { fetchTypesSaga })(Bet);
