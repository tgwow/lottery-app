import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { VscArrowRight, VscArrowLeft } from 'react-icons/vsc';

// components
import Heading from '../../../components/UI/Headings';
import Input from '../../../components/UI/Form/Input';
import Button from '../../../components/UI/Form/Button';
import StyledLink from '../../../components/UI/StyledLink';

import { FormWrapper, StyledForm } from '../../../components/UI/Form/elements';

export const StyledArrowRight = styled(VscArrowRight)`
	margin-left: 1.5rem;
`;

const SignupSchema = Yup.object({
	name: Yup.string().min(3, 'Your name must have at least 3 chars').required('This field is required.'),
	email: Yup.string().email('Invalid email address.').required('This field is required.'),
	password: Yup.string().min(6, 'Must have at least 6 characters.').required('This field is required.'),
});

const Siginup = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}
			validationSchema={SignupSchema}
			onSubmit={async (values) => {
				// await login(values);
				alert(JSON.stringify(values, null, 2));
				// setSubmitting(false);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading bold type="h2" size="3.3" italic>
						Registration
					</Heading>
					<StyledForm>
						<Field name="name" type="text" placeholder="Name" component={Input} />
						<Field name="email" type="email" placeholder="Email" component={Input} />
						<Field name="password" type="password" placeholder="Password" component={Input} />
						<Button color="green" disabled={!isValid || isSubmitting} type="submit" bold size="3.5">
							Register
							<StyledArrowRight />
						</Button>
					</StyledForm>
					<StyledLink link="/sign" color="gray" type="submit" bold size="3.5">
						<VscArrowLeft />
						Back
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

export default Siginup;
