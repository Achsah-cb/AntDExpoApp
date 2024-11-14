import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dating2-theta.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
