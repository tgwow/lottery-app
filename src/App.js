import React from 'react';

import Layout from './hoc/Layout/Layout';
import Signin from './containers/Auth/Signin';

const App = () => {
	let content = (
		<Layout>
			<Signin />
		</Layout>
	);
	return content;
};

export default App;
