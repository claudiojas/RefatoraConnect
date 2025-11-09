import axios from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001', // Usa variável de ambiente ou fallback local
  withCredentials: true,
});
