import axios from 'axios';

const api = axios.create({
  baseURL: '/foods',
});

export default api;
