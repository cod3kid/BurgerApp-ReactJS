import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-mania.firebaseio.com/'
});

export default instance;