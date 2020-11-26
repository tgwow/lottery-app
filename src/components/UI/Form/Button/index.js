import React from 'react';
import styled from 'styled-components';

export const StyledButton = styled.button`
	width: 100%;
	padding: 5px;
`;

const Button = ({ disabled, children, ...rest }) => {
	return (
		<StyledButton disabled={disabled} {...rest}>
			{children}
		</StyledButton>
	);
};
export default Button;
