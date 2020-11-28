import React from 'react';
import styled from 'styled-components';

const StyledBoard = styled.div`
	width: 100%;
	margin-top: 2rem;
`;

const Board = ({ children }) => {
	return <StyledBoard>{children}</StyledBoard>;
};
export default Board;
