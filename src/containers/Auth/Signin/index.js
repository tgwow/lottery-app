import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

// components
import Heading from '../../../components/UI/Headings';
import Input from '../../../components/UI/Form/Input';
import CustomLink from '../../../components/UI/Form/CustomLink';
import Button from '../../../components/UI/Form/Button';
import StyledLink from '../../../components/UI/StyledLink';

import { StyledArrowRight } from '../../../components/shared';
import { FormWrapper, StyledForm } from '../../../components/UI/Form/elements';

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
						<CustomLink link="reset-password">I forget my password</CustomLink>
						<Button color="green" disabled={!isValid || isSubmitting} type="submit" bold size="3.5">
							Log In
							<StyledArrowRight />
						</Button>
					</StyledForm>
					<StyledLink link="/signup" color="gray" type="submit" bold size="3.5">
						Sign Up
						<StyledArrowRight />
					</StyledLink>
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
