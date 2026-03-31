import axios from "axios";
import { getSession } from "next-auth/react";

// Crie uma instância do Axios com a URL base da sua API NestJS
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333", // Sua URL da API
});

// Interceptor para adicionar o token de autenticação nas requisições
api.interceptors.request.use(
  async (config) => {
    try {
      // Pega a sessão do NextAuth
      const session = await getSession();

      // Se a sessão e o token existirem, anexa ele no header Authorization
      if (session?.token) {
        config.headers.Authorization = `Bearer ${session.token}`;
      } else if (session?.user?.accessToken) {
        // Fallback para o caso antigo
        config.headers.Authorization = `Bearer ${session.user.accessToken}`;
      }
    } catch (error) {
      console.error("Erro ao obter sessão:", error);
    }

    return config;
  },
  (error) => {
    console.error("Erro no interceptor de requisição:", error);
    return Promise.reject(error);
  },
);

// Interceptor para tratar respostas e erros de autenticação
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Só redireciona para login em casos específicos de autenticação
    if (error.response?.status === 401) {
      const errorMessage = error.response.data?.message?.toLowerCase() || "";

      // Só redireciona se realmente for problema de autenticação
      const shouldRedirect =
        errorMessage.includes("token") ||
        errorMessage.includes("expired") ||
        errorMessage.includes("unauthorized") ||
        errorMessage.includes("invalid") ||
        !errorMessage; // Se não há mensagem específica, pode ser problema de auth

      if (shouldRedirect) {
        if (typeof window !== "undefined") {
          console.warn(
            "Token inválido ou expirado, redirecionando para login...",
          );
          window.location.href = "/login";
        }
      }
    }

    // Sempre rejeita o erro para que o componente possa tratá-lo
    return Promise.reject(error);
  },
);

export default api;
