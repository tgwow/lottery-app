import React, { useContext } from 'react';
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
import { MessageError } from '../../../components/shared';
import { AuthContext } from '../../../contexts/auth.context';
import Spinner from '../../../components/UI/Spinner';

export const StyledArrowRight = styled(VscArrowRight)`
	margin-left: 1.5rem;
`;

const SignupSchema = Yup.object({
	name: Yup.string().min(3, 'Your name must have at least 3 chars').required('This field is required.'),
	email: Yup.string().email('Invalid email address.').required('This field is required.'),
	password: Yup.string().min(6, 'Must have at least 6 characters.').required('This field is required.'),
});

// eslint-disable-next-line react/display-name
const Signup = React.memo(() => {
	const { handleAuth, error, setErrorNull, isLoading } = useContext(AuthContext);
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}
			validationSchema={SignupSchema}
			onSubmit={async (values) => {
				await handleAuth(values, true);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading weight={600} color="gray" margin="0px 0px 2rem 0" type="h2" size="3.3" italic>
						Registration
					</Heading>
					<StyledForm>
						<Field autocomplete="off" name="name" type="text" placeholder="Name" component={Input} />
						<Field name="email" type="email" placeholder="Email" component={Input} />
						<Field name="password" type="password" placeholder="Password" component={Input} />
						{error && <MessageError show={error}>{error}</MessageError>}
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
								Register
								<StyledArrowRight />
							</Button>
						)}
					</StyledForm>
					<StyledLink link="/sign" onClick={setErrorNull} color="gray" type="submit" weight={600} size="3.5">
						<VscArrowLeft />
						Back
					</StyledLink>
				</FormWrapper>
			)}
		</Formik>
	);
});

export default Signup;
