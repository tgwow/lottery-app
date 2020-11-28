import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
	font-size: 5rem;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
	height: 100%;
	display: flex;
	align-items: center;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 100%;
		height: 8px;
		background: var(--color-green);
		border-radius: 4px;
	}
`;

const Logo = () => {
	return <LogoWrapper>TGL</LogoWrapper>;
};

export default Logo;
