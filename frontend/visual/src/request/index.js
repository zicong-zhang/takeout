import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
  headers: {
    contentType: 'application/json'
  }
});

export default instance;
