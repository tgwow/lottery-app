import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ResetPassword from './containers/Auth/ResetPassword';
import Spinner from './components/UI/Spinner';

const RecentGames = lazy(() => import('./containers/RecentGames'));
const Signin = lazy(() => import('./containers/Auth/Signin'));
const Signup = lazy(() => import('./containers/Auth/Signup'));

const Bet = lazy(() => import('./containers/Bet'));

const App = () => {
	const isAuth = true;

	let content = (
		<Switch>
			<Route path="/sign" render={(props) => <Signin {...props} />} />
			<Route path="/signup" render={(props) => <Signup {...props} />} />
			<Route path="/reset-password" render={(props) => <ResetPassword {...props} />} />
			<Redirect to="/sign" />
		</Switch>
	);

	if (isAuth)
		content = (
			<Switch>
				<Route path="/bet" exact render={(props) => <Bet {...props} />} />
				<Route path="/" exact render={(props) => <RecentGames {...props} />} />
				<Redirect to="/" />
			</Switch>
		);
	return (
		<Layout>
			<Suspense fallback={<Spinner />}>{content}</Suspense>
		</Layout>
	);
};

export default App;
