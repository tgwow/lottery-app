import React from 'react';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-oldschool-dark';

const options = {
	position: positions.TOP_CENTER,
	timeout: 11222000,
	offset: '30px',
	transition: transitions.SCALE,
};

const AlertMessage = ({ children }) => (
	<AlertProvider template={AlertTemplate} {...options}>
		{children}
	</AlertProvider>
);

export default AlertMessage;
