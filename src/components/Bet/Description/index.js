import React from 'react';

import Headings from '../../../components/UI/Headings';
import FilterOptions from '../../RecentGames/Filter';

const Description = ({ type, desc }) => {
	return (
		<>
			<Headings type="h2" uppercase margin="0 0 3rem 0" size="2.6" weight="300">
				<strong>New bet </strong>
				for {type}
			</Headings>
			<Headings type="p" margin="0 0 1.5rem 0" size="1.8" weight="600" color="grayLight">
				Choose a game
			</Headings>
			<FilterOptions noMargin />
			<Headings type="h3" size="1.6" margin="2rem 0 0 0" weight="600" color="grayLight">
				Fill your bet
			</Headings>
			<Headings type="p" size="1.6" color="grayLight">
				{desc}
			</Headings>
		</>
	);
};

export default Description;
