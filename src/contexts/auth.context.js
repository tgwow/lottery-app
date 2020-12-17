import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = React.createContext({
	isAuth: '',
	error: null,
	isLoading: false,
	handleAuth: () => {},
	handleSignOut: () => {},
	handleResetPassword: () => {},
	handleNewPassword: () => {},
});

// eslint-disable-next-line react/display-name
const AuthProvider = React.memo(({ children }) => {
	const [token, setToken] = useState('');
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	useEffect(() => {
		const token = localStorage.getItem('token');
		const expirationTime = localStorage.getItem('expirationTime');

		if (!token) handleSignOut();

		const expirationTimeInMS = new Date(+expirationTime).getTime();
		const currentTimeInMS = new Date().getTime();

		if (expirationTimeInMS < currentTimeInMS) {
			handleSignOut();
		} else {
			checkoutTime(expirationTimeInMS - currentTimeInMS);
			api.defaults.headers['Authorization'] = `Bearer ${token}`;
			setToken(token);
		}
	}, []);

	const checkoutTime = (expiresIn) => {
		setTimeout(() => {
			handleSignOut();
		}, expiresIn);
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
		setToken('');
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
				data: { token, expiresIn, userId },
			} = await api.post(url, userData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			// soma o tempo atual com o tempoo q leva para expirar o token e retorna uma data de expiração no futuro
			const expirationTime = String(new Date().getTime() + +expiresIn);
			localStorage.setItem('expirationTime', expirationTime);
			localStorage.setItem('token', token);
			localStorage.setItem('userId', userId);
			api.defaults.headers['Authorization'] = `Bearer ${token}`;

			setToken(token);
			setLoading(false);
			checkoutTime(expiresIn);
		} catch ({ response: { data } }) {
			let errorMessage = Array.isArray(data) ? data[0].message : data.error.message;
			setError(errorMessage);
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isAuth: !!token,
				isLoading: loading,
				error: error,
				handleAuth,
				handleSignOut,
				handleResetPassword,
				handleNewPassword,
				setErrorNull,
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
