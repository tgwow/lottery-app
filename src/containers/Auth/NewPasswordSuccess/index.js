import React from 'react';
import styled from 'styled-components';
import Heading from '../../../components/UI/Headings';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	&,
	&:link {
		color: var(--color-gray);
		text-decoration: underline;
		text-decoration-color: var(--color-green);
	}
	&:active {
		color: var(--color-green);
	}
`;
const NewPasswordSuccess = () => {
	return (
		<div>
			<Heading weight={600} color="gray" margin="0px 0px 1rem 0" type="h2" size="3" italic>
				Senha alterada!
			</Heading>
			<Heading size="1.6">
				Utilize sua nova senha para <StyledLink to="/sign">fazer login.</StyledLink>
			</Heading>
		</div>
	);
};

export default NewPasswordSuccess;
