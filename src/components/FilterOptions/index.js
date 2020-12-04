import React from 'react';
import styled from 'styled-components';
import { connect, useSelector, useDispatch } from 'react-redux';

import FiOption from '../FilterOptions/FilterOption';

const FiOptions = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	margin-left: ${({ noMargin }) => (noMargin ? '' : '2rem')};
`;

const FilterOptions = ({ noMargin, behavior }) => {
	const dispatch = useDispatch();
	const { selectedType } = useSelector((state) => state.filter);
	const { types } = useSelector((state) => state.types);

	let options;
	console.log(selectedType);
	console.log(types);

	const handleSetType = (optionType) => {
		if (behavior === 'all') {
			selectedType.includes(optionType)
				? dispatch({ type: 'filter/REMOVE_TYPE', optionType })
				: dispatch({ type: 'filter/ADD_TYPE', optionType });
		} else if (behavior === 'single') {
			dispatch({ type: 'filter/CLEAR_TYPE', optionType });
		}
	};

	if (types.length > 0) {
		options = types.map((t) => (
			<FiOption
				active={selectedType.includes(t.type)}
				key={t.type}
				label={t.type}
				onClick={() => handleSetType(t.type)}
			/>
		));
	}

	return <FiOptions noMargin={noMargin}>{options}</FiOptions>;
};

const mapStateToProps = ({ types, filter }) => ({
	types: types.types,
	selectedType: filter.selectedType,
});

export default connect(mapStateToProps)(FilterOptions);
