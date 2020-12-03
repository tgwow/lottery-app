import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://the-greatest-lottery-app.firebaseio.com/',
});

export default instance;
