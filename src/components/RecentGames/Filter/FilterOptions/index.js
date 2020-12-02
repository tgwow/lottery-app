import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setType } from '../../../../store/actions/filter';
import FiOption from './FilterOption';

const FiOptions = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	margin-left: ${({ noMargin }) => (noMargin ? '' : '2rem')};
`;

const FilterOptions = ({ noMargin, types, setType, selectedType }) => {
	let options;
	if (types.length > 0) {
		options = types.map((t) => (
			<FiOption active={t.type === selectedType} key={t.type} label={t.type} onClick={() => setType(t.type)} />
		));
	}
	return <FiOptions noMargin={noMargin}>{options}</FiOptions>;
};

const mapStateToProps = ({ type, filter }) => ({
	types: type.types,
	selectedType: filter.selectedType,
});

export default connect(mapStateToProps, { setType })(FilterOptions);
