import React, { useContext } from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

// components
import Heading from '../../../components/UI/Headings';
import Input from '../../../components/UI/Form/Input';
import CustomLink from '../../../components/UI/Form/CustomLink';
import Button from '../../../components/UI/Form/Button';
import StyledLink from '../../../components/UI/StyledLink';
import Spinner from '../../../components/UI/Spinner';

import { StyledArrowRight } from '../../../components/shared';
import { FormWrapper, StyledForm } from '../../../components/UI/Form/elements';
import { AuthContext } from '../../../contexts/auth.context';
import { MessageError, showMessageError } from '../../../components/shared';

const SigninSchema = Yup.object({
	email: Yup.string().email('Invalid email address.').required('This field is required.'),
	password: Yup.string().min(6, 'Must have at least 6 characters.').required('This field is required.'),
});

const Signin = () => {
	const { sign, error, resetPasswordStart, setErrorNull, isLoading } = useContext(AuthContext);
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={SigninSchema}
			onSubmit={async (values) => {
				const { email, password } = values;
				await sign(email, password);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading weight={600} color="gray" margin="0px 0px 2rem 0" type="h2" size="3.3" italic>
						Authentication
					</Heading>
					<StyledForm>
						<Field name="email" type="email" placeholder="Email" component={Input} />
						<Field name="password" type="password" placeholder="Password" component={Input} />
						<CustomLink link="reset-password" clicked={resetPasswordStart}>
							I forget my password
						</CustomLink>
						{error && <MessageError show={error}>{showMessageError(error)}</MessageError>}
						{isLoading ? (
							<Spinner />
						) : (
							<Button
								color="green"
								bgColor="transparent"
								disabled={!isValid || isSubmitting}
								type="submit"
								bold
								size="3.5"
							>
								Log In
								<StyledArrowRight />
							</Button>
						)}
					</StyledForm>
					<StyledLink link="/signup" onClick={setErrorNull} color="gray" type="submit" weight={600} size="3.5">
						Sign Up
						<StyledArrowRight />
					</StyledLink>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default Signin;
