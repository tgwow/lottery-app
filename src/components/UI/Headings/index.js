import React from 'react';
import styled, { css } from 'styled-components';

const baseStyle = css`
	color: ${({ color }) => (color === 'white' ? 'var(--color-white)' : 'var(--color-gray)')};
	font-weight: ${({ bold }) => (bold ? '700' : '300')};
	font-size: ${({ size }) => (size ? size : '1')}rem;
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	margin-top: 0;
	letter-spacing: 1px;
	margin-bottom: ${({ noMargin }) => (noMargin ? '0rem' : '2.5rem')};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'capitalize')};
`;

const Heading = styled.div`
	${baseStyle}
`;

const Headings = (props) => {
	return (
		<Heading as={props.type} {...props}>
			{props.children}
		</Heading>
	);
};

export default Headings;
