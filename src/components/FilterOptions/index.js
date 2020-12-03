import React from 'react';
import styled from 'styled-components';
import * as filterActions from '../../store/actions/filter';
import { connect } from 'react-redux';

import FiOption from '../FilterOptions/FilterOption';

const FiOptions = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	margin-left: ${({ noMargin }) => (noMargin ? '' : '2rem')};
`;

const FilterOptions = ({ noMargin, types, selectedType, behavior, removeType, addType, clearType }) => {
	let options;

	const handleSetType = (optionType) => {
		if (behavior === 'all') {
			selectedType.includes(optionType) ? removeType(optionType) : addType(optionType);
		} else if (behavior === 'single') {
			clearType(optionType);
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

const mapStateToProps = ({ type, filter }) => ({
	types: type.types,
	selectedType: filter.selectedType,
});

export default connect(mapStateToProps, { ...filterActions })(FilterOptions);
