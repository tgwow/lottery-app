import React, { useEffect, useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = React.createContext({
	isAuth: '',
	user: {},
	error: null,
	isLoading: false,
	sign: () => {},
	signOut: () => {},
	resetPassword: () => {},
	setErrorNull: () => {},
});

const INITIAL_STATE = {
	token: '',
	userId: '',
};

const userReducer = (state, action) => {
	switch (action.type) {
		case 'SET':
			return {
				token: action.token,
			};
		case 'CLEAR':
			return {
				token: '',
				userId: '',
			};
		default:
			return state;
	}
};

// eslint-disable-next-line react/display-name
const AuthProvider = React.memo(({ children }) => {
	const [user, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) handleSignOut();
		else {
			api.defaults.headers['Authorization'] = `Bearer ${token}`;
			dispatch({ type: 'SET', token });
		}
	}, []);

	const checkoutTime = (expiresIn) => {
		setTimeout(() => {
			handleSignOut();
		}, expiresIn * 1000);
	};

	const setErrorNull = () => {
		setError(null);
	};

	const handleResetPassword = async ({ email }) => {
		setLoading(true);
		const url = `/forgot_password`;
		try {
			await api.post(url, { email, redirect_url: 'http://localhost:3000/new-password' });
			setLoading(false);
			history.push('/reset-password-success');
		} catch ({ response: { data } }) {
			setLoading(false);
			let errorMessage = Array.isArray(data) ? data[0].message : data.error.message;
			setError(errorMessage);
		}
	};

	const handleNewPassword = async ({ password, password_confirmation }) => {
		setLoading(true);
		const token = new URLSearchParams(document.location.search.substring(1)).get('token');

		try {
			await api.put(`/forgot_password?token=${token}`, {
				password,
				password_confirmation,
				token,
			});
			setLoading(false);
			history.push('/new-password-success');
		} catch ({ response: { data } }) {
			let errorMessage = Array.isArray(data) ? data[0].message : data.error.message;
			setError(errorMessage);
			setLoading(false);
		}
	};

	const handleSignOut = () => {
		dispatch({ type: 'CLEAR' });
		localStorage.clear();
	};

	const handleAuth = async ({ email, password, name }, isSignup = false) => {
		setLoading(true);
		const userData = {
			email,
			password,
		};
		let url = `/sessions`;
		if (isSignup) {
			userData.name = name;
			url = `/users`;
		}
		try {
			const {
				data: { token },
			} = await api.post(url, userData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			localStorage.setItem('token', token);
			api.defaults.headers['Authorization'] = `Bearer ${token}`;
			dispatch({ type: 'SET', token });
			setLoading(false);

			checkoutTime(21600);
		} catch ({ response: { data } }) {
			let errorMessage = Array.isArray(data) ? data[0].message : data.error.message;
			setError(errorMessage);
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isAuth: !!user.token,
				user: user,
				isLoading: loading,
				error: error,
				sign: handleAuth,
				signOut: handleSignOut,
				resetPassword: handleResetPassword,
				handleNewPassword,
				setErrorNull: setErrorNull,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
});

export default AuthProvider;

// const expirationTime = localStorage.getItem('expiresIn');
// const expirationTimeInSeconds = new Date(+expirationTime).getTime();
// const currentTimeInSeconds = new Date().getTime();
//
// if (expirationTimeInSeconds < currentTimeInSeconds) handleSignOut();
// else {
// 	checkoutTime((expirationTimeInSeconds - currentTimeInSeconds) / 1000);

// const expirationTime = (new Date().getTime() + expiresIn * 1000).toString();
// localStorage.setItem('userId', localId);
// localStorage.setItem('expiresIn', expirationTime);
//
