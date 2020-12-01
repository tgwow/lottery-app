import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchTypesSaga } from '../../store/actions/types';

import Description from '../../components/Bet/Description';
import Cart from '../../components/Bet/Cart';
import BetControls from '../../components/Bet/BetControls';
import Board from '../../components/Bet/Board';
// import Number from '../../components/Bet/Board/Number';

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
const Bet = React.memo((props) => {
	useEffect(() => {
		props.fetchTypesSaga();
	}, [fetchTypesSaga]);
	console.log(props);
	return (
		<>
			<Wrapper>
				<Left>
					<Description />
					<Board>123</Board>
					<BetControls />
				</Left>
				<Right>
					<Cart />
				</Right>
			</Wrapper>
		</>
	);
});

const mapStateToProps = ({ type }) => ({
	types: type.types,
});

export default connect(mapStateToProps, { fetchTypesSaga })(Bet);
