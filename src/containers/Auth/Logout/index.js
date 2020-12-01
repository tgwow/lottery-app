import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth.context';

const Logout = () => {
	const { signOut } = useContext(AuthContext);
	useEffect(() => {
		signOut();
	}, []);
	return <Redirect to="/" />;
};

export default Logout;
