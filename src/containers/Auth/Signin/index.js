import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Field, Form } from 'formik';
import { VscArrowRight } from 'react-icons/vsc';

// components
import Heading from '../../../components/UI/Headings';
import Input from '../../../components/UI/Form/Input';
import CustomLink from '../../../components/UI/CustomLink';
import CustomButton from '../../../components/UI/CustomButton';

export const FormWrapper = styled.div`
	width: 100%;
	max-width: 40rem;
	text-align: center;
`;

export const StyledForm = styled(Form)`
	padding-bottom: 1rem;
	border: 1px solid var(--color-border);
	border-radius: 14px;
	box-shadow: 0px 3px 25px var(--color-shadow);
	background-color: var(--color-white);
	margin-bottom: 2rem;
`;

export const StyledArrowRight = styled(VscArrowRight)`
	margin-left: 1.5rem;
`;

const SigninSchema = Yup.object({
	email: Yup.string().email('Invalid email address.').required('This field is required.'),
	password: Yup.string().min(6, 'Must have at least 6 characters.').required('This field is required.'),
});

const Signin = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={SigninSchema}
			onSubmit={async (values) => {
				// await login(values);
				alert(JSON.stringify(values, null, 2));
				// setSubmitting(false);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading bold type="h2" size="3.3" italic>
						Authentication
					</Heading>
					<StyledForm>
						<Field name="email" type="email" placeholder="Email" component={Input} />
						<Field name="password" type="password" placeholder="Password" component={Input} />
						<CustomLink reset>I forget my password</CustomLink>
						<CustomButton color="green" disabled={!isValid || isSubmitting} type="submit" bold size="3.5">
							Log In
							<StyledArrowRight />
						</CustomButton>
					</StyledForm>
					<CustomButton color="gray" type="submit" bold size="3.5">
						Sign Up <StyledArrowRight />
					</CustomButton>
					{/*<CustomLink link="/recover" color="white">*/}
					{/*	Forgot your password?*/}
					{/*</CustomLink>*/}
					{/*<MessageWrapper>*/}
					{/*	<Message error show={error}>*/}
					{/*		{error}*/}
					{/*	</Message>*/}
					{/*</MessageWrapper>*/}
				</FormWrapper>
			)}
		</Formik>
	);
};

export default Signin;
