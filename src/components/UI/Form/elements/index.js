import styled from 'styled-components';
import { Form } from 'formik';

export const FormWrapper = styled.div`
	width: 100%;
	max-width: 35rem;
	text-align: center;
`;

export const StyledForm = styled(Form)`
	// padding-bottom: 2.5rem;
	border: 1px solid var(--color-border);
	border-radius: 14px;
	box-shadow: 0px 3px 25px var(--color-shadow);
	background-color: var(--color-white);
	margin-bottom: 2rem;
`;
