import React from 'react';
import GameButton from '../../../../UI/GameButton';
import styled from 'styled-components';
import { COLOR_MAP } from '../../../../../utils/colors';

const FiOption = styled.li`
	&:not(:last-child) {
		margin-right: 2rem;
	}
`;

const FilterOption = ({ label, ...props }) => {
	return (
		<>
			<FiOption>
				<GameButton {...props} color={COLOR_MAP[label]}>
					{label}
				</GameButton>
			</FiOption>
		</>
	);
};

export default FilterOption;
