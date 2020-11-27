import React from 'react';
import GameButton from '../../../../../components/UI/GameButton';
import styled from 'styled-components';
import { COLORS } from '../../../../../utils/colors';

const FiOption = styled.li`
	&:not(:last-child) {
		margin-right: 2rem;
	}
`;

const FilterOption = ({ type, label, ...props }) => {
	return (
		<>
			<FiOption>
				<GameButton {...props} color={COLORS[type]}>
					{label}
				</GameButton>
			</FiOption>
		</>
	);
};

export default FilterOption;
