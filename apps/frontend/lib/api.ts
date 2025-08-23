import axios from 'axios';
import { getSession } from 'next-auth/react';

// Crie uma instância do Axios com a URL base da sua API NestJS
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333', // Sua URL da API
});

// Interceptor para adicionar o token de autenticação nas requisições
api.interceptors.request.use(
  async (config) => {
    // 1. Pega a sessão do NextAuth
    const session = await getSession();

    // 2. Se a sessão e o token existirem, anexa ele no header Authorization
    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  },
  (error) => {
    // Em caso de erro na requisição, você pode tratar aqui
    return Promise.reject(error);
  }
);

// Interceptor para tratar respostas e erros de autenticação
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expirado ou inválido - redirecionar para login
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;