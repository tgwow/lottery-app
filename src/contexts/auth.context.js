import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext({
	isAuth: null,
	error: null,
	isLoading: false,
	sign: () => {},
	signOut: () => {},
	resetPassword: () => {},
	setErrorNull: () => {},
});

// eslint-disable-next-line react/display-name
const AuthProvider = React.memo(({ children }) => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) handleSignOut();
		else {
			const expirationTime = localStorage.getItem('expiresIn');
			const expirationTimeInSeconds = new Date(+expirationTime).getTime();
			const currentTimeInSeconds = new Date().getTime();

			if (expirationTimeInSeconds < currentTimeInSeconds) handleSignOut();
			else {
				checkoutTime((expirationTimeInSeconds - currentTimeInSeconds) / 1000);
				setUser({ token });
			}
		}
	}, []);

	const checkoutTime = (expirenIn) => {
		setTimeout(() => {
			handleSignOut();
		}, expirenIn * 1000);
	};

	const setErrorNull = () => {
		setError(null);
	};

	const handleResetPassword = async (email) => {
		setLoading(true);
		const locale = navigator.languages[0] || navigator.language;
		const resetData = {
			email,
			requestType: 'PASSWORD_RESET',
		};
		const url =
			'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAPjPyA-V4oXnuPb3zUpVkIudHeMg3oNBQ';
		try {
			await axios.post(url, resetData, {
				headers: {
					'X-Firebase-Locale': locale,
				},
			});
			setLoading(false);
		} catch (err) {
			const error = err.response.data.error.message;
			setError(error);
			setLoading(false);
		}
	};

	const handleSignOut = () => {
		setUser(null);
		localStorage.clear();
	};

	const handleAuth = async (email, password, isSignup = false) => {
		setLoading(true);
		try {
			const userData = {
				email,
				password,
				returnSecureToken: true,
			};
			let url =
				'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAPjPyA-V4oXnuPb3zUpVkIudHeMg3oNBQ';
			if (isSignup) {
				url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAPjPyA-V4oXnuPb3zUpVkIudHeMg3oNBQ';
			}
			const {
				data: { idToken, expiresIn },
			} = await axios.post(url, userData, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const expirationTime = (new Date().getTime() + expiresIn * 1000).toString();
			localStorage.setItem('token', idToken);
			localStorage.setItem('expiresIn', expirationTime);

			checkoutTime(expiresIn);
			setUser({ token: idToken });
			setLoading(false);
		} catch (err) {
			const errorMessage = err.response.data.error.message;
			setError(errorMessage);
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isAuth: !!user,
				isLoading: loading,
				error: error,
				sign: handleAuth,
				signOut: handleSignOut,
				resetPassword: handleResetPassword,
				setErrorNull: setErrorNull,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
});

export default AuthProvider;
