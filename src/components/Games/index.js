import React from 'react';

import Game from './Game';
import styled from 'styled-components';

const Wrapper = styled.main`
	margin-top: 3rem;
`;

const Games = () => {
	return (
		<Wrapper>
			<Game
				numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15"
				date="30/11/2020"
				price="2,50"
				type="lotofacil"
				label="Lotofacil"
			/>
			<Game
				numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15"
				date="30/11/2020"
				price="2,50"
				type="megasena"
				label="Mega-Sena"
			/>
			<Game
				numbers="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15"
				date="30/11/2020"
				price="2,50"
				type="lotomania"
				label="Lotomania"
			/>
		</Wrapper>
	);
};

export default Games;
