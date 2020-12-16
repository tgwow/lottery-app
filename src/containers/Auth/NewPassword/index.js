import React, { useContext } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { VscArrowLeft, VscArrowRight } from 'react-icons/vsc';

// components
import Heading from '../../../components/UI/Headings';
import Input from '../../../components/UI/Form/Input';
import Button from '../../../components/UI/Form/Button';

import { FormWrapper, StyledForm } from '../../../components/UI/Form/elements';
import { AuthContext } from '../../../contexts/auth.context';
import { MessageError } from '../../../components/shared';
import Spinner from '../../../components/UI/Spinner';
import StyledLink from '../../../components/UI/StyledLink';

export const StyledArrowRight = styled(VscArrowRight)`
	margin-left: 1.5rem;
`;

const ResetSchema = Yup.object({
	password: Yup.string().required('This field is required.'),
	password_confirmation: Yup.string().required('This field is required.'),
});

const NewPassword = () => {
	const { handleNewPassword, error, isLoading, setErrorNull } = useContext(AuthContext);
	return (
		<Formik
			initialValues={{
				password: '',
				password_confirmation: '',
			}}
			validationSchema={ResetSchema}
			onSubmit={async (values) => {
				await handleNewPassword(values);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading weight={600} color="gray" margin="0px 0px 2rem 0" type="h2" size="3.3" italic>
						New Password
					</Heading>
					<StyledForm>
						<Field name="password" type="password" placeholder="Password" component={Input} />
						<Field name="password_confirmation" type="password" placeholder="Password Confirmation" component={Input} />
						{error && <MessageError show={!!error}>{error}</MessageError>}
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
								Submit
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
};

export default NewPassword;
