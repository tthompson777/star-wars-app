import axios from 'axios';

const API_URL = 'https://akabab.github.io/starwars-api/api/';

const api = axios.create({
  baseURL: `${API_URL}`
});

export default api;