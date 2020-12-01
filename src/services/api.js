import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-json-server.typicode.com/tgwow/lottery-app-fake-api/',
});

export default instance;
