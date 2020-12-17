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
import { AuthContext } from '../../../contexts/auth.context';
import { MessageError } from '../../../components/shared';
import Spinner from '../../../components/UI/Spinner';

export const StyledArrowRight = styled(VscArrowRight)`
	margin-left: 1.5rem;
`;

const ResetSchema = Yup.object({
	email: Yup.string().email('Invalid email address.').required('This field is required.'),
});

const ResetPassword = () => {
	const { handleResetPassword, error, setErrorNull, isLoading } = useContext(AuthContext);
	return (
		<Formik
			initialValues={{
				email: '',
			}}
			validationSchema={ResetSchema}
			onSubmit={async (values) => {
				await handleResetPassword(values);
			}}
		>
			{({ isSubmitting, isValid }) => (
				<FormWrapper>
					<Heading weight={600} color="gray" margin="0px 0px 2rem 0" type="h2" size="3.3" italic>
						Reset Password
					</Heading>
					<StyledForm>
						<Field name="email" type="email" placeholder="Email" component={Input} />
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
								Send link
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

export default ResetPassword;
