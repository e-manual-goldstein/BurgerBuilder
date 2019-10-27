import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-84251.firebaseio.com/'
});

export default instance;