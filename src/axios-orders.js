import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://exco-burger-app.firebaseio.com/'
});

export default instance;