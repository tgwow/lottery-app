import React from 'react';
import styled from 'styled-components';

export const InputWrapper = styled.div`
	width: 100%;
	// margin-bottom: 20px;
	position: relative;
`;

export const StyledInput = styled.input`
	width: 100%;
	padding: 2.5rem;
	border: none;
	border-radius: 14px 14px 0 0;
	border-bottom: 2px solid var(--color-borderLight);
	color: var(--color-grayLight);
	font-size: 2rem;

	::placeholder,
	::-webkit-input-placeholder {
		font-size: 1.8rem;
		font-weight: 700;
		font-style: italic;
		color: var(--color-grayLight);
	}
`;

export const Error = styled.div`
	visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
	transform: ${({ show }) => (show ? 'translateY(5.5rem)' : 'translateY(2.5rem)')};
	opacity: ${({ show }) => (show ? '1' : '0')};
	color: orangered;
	font-size: 1.3rem;
	position: absolute;
	top: 0;
	bottom: 0;
	padding: 0 2.5rem;
	transition: all 0.2s;
`;
const Input = ({ field, form: { touched, errors }, ...props }) => {
	return (
		<>
			<InputWrapper>
				<StyledInput {...field} {...props} show={touched[field.name] && errors[field.name]} />
				<Error show={touched[field.name] && errors[field.name]}>{errors[field.name]}</Error>
			</InputWrapper>
		</>
	);
};
export default Input;
