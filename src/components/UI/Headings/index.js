import React from 'react';
import styled, { css } from 'styled-components';

const baseStyle = css`
	color: ${({ color }) => (color ? color : 'var(--color-gray)')};
	font-weight: ${({ bold }) => (bold ? '700' : '300')};
	font-size: ${({ size }) => (size ? size : '1')}rem;
	font-style: ${({ noItalic }) => noItalic && 'normal'};
	//letter-spacing: -1px;
	margin: ${({ margin }) => (margin ? margin : '0')};
	//margin-bottom: ${({ noMargin }) => (noMargin ? '0rem' : '2.5rem')};
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
