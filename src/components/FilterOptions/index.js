import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import FiOption from '../FilterOptions/FilterOption';
import Spinner from '../UI/Spinner';
import Headings from '../UI/Headings';

const FiOptions = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	margin-left: ${({ noMargin }) => (noMargin ? '' : '2rem')};
`;

const FilterOptions = ({ noMargin, behavior }) => {
	const dispatch = useDispatch();
	const { selectedType } = useSelector((state) => state.filter);
	const { types } = useSelector((state) => state.type);

	let options;

	const handleSetType = (optionType) => {
		if (behavior === 'all') {
			selectedType.includes(optionType)
				? dispatch({ type: 'filter/REMOVE_TYPE', optionType })
				: dispatch({ type: 'filter/ADD_TYPE', optionType });
		} else if (behavior === 'single') {
			dispatch({ type: 'filter/CLEAR_TYPE', optionType });
		}
	};
	options = <Spinner />;
	if (types.length > 0) {
		options = types.map((t) => (
			<FiOption
				active={selectedType.includes(t.name)}
				key={t.name}
				label={t.name}
				onClick={() => handleSetType(t.name)}
			/>
		));
	}
	if (types.length === 0) options = <Headings size="2.2">Sorry. No filter available :(</Headings>;

	return <FiOptions noMargin={noMargin}>{options}</FiOptions>;
};

export default FilterOptions;
