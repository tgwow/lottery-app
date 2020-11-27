import React from 'react';
import styled from 'styled-components';

import FiOption from './FilterOption';

const FiOptions = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	margin-left: 2rem;
`;

const FilterOptions = () => {
	return (
		<FiOptions>
			<FiOption active label="Lotofácil" type="lotofacil" />
			<FiOption label="Mega-Sena" type="megasena" />
			<FiOption label="Lotomania" type="lotomania" />
		</FiOptions>
	);
};

export default FilterOptions;
