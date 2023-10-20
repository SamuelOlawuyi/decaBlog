import axios from 'axios';

const myApi = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
});

myApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default myApi;
