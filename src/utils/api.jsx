// src/utils/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // change if backend is deployed elsewhere
});

export default API;
