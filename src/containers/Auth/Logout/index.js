import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../../../contexts/auth.context';

const Logout = () => {
	const { handleSignOut } = useContext(AuthContext);
	useEffect(() => {
		handleSignOut();
	}, []);
	return <Redirect to="/" />;
};

export default Logout;
