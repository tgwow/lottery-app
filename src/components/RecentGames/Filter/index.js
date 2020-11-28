import React from 'react';
import styled from 'styled-components';

import Headings from '../../UI/Headings';
import FilterOptions from './FilterOptions';

const Wrapper = styled.nav`
	display: flex;
	align-items: center;
`;

const Filter = () => {
	return (
		<Wrapper>
			<Headings type="p" size="1.6" noMargin>
				Filters
			</Headings>
			<FilterOptions />
		</Wrapper>
	);
};

export default Filter;
