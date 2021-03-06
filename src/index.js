import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

// styles
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyles from './utils/global';

// authContext
import AuthProvider from './contexts/auth.context';

// store
import store from './store';

// alertMessage
import AlertMessage from './components/UI/AlertMessage';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Router>
					<AuthProvider>
						<GlobalStyles />
						<AlertMessage>
							<App />
						</AlertMessage>
					</AuthProvider>
				</Router>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
