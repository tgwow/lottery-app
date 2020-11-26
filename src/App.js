import React, { lazy, Suspense } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ResetPassword from './containers/Auth/ResetPassword';

const Signin = lazy(() => import('./containers/Auth/Signin'));
const Siginup = lazy(() => import('./containers/Auth/Signup'));

const App = () => {
	let content = (
		<Switch>
			<Route path="/sign" render={(props) => <Signin {...props} />} />
			<Route path="/signup" render={(props) => <Siginup {...props} />} />
			<Route path="/reset-password" render={(props) => <ResetPassword {...props} />} />
			<Redirect to="/sign" />
		</Switch>
	);
	return (
		<Layout>
			<Suspense fallback={<div>loading...</div>}>{content}</Suspense>
		</Layout>
	);
};

export default App;
