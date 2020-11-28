import React from 'react';
import styled, { css } from 'styled-components';
import { setColor } from '../../shared';

const baseStyle = css`
	${setColor};
	font-weight: ${({ weight }) => (weight ? weight : '400')};
	font-size: ${({ size }) => (size ? size : '1')}rem;
	font-style: ${({ noItalic }) => noItalic && 'normal'};
	margin: ${({ margin }) => (margin ? margin : '0')};
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
