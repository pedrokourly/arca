/*
 * DEPRECADO: Este AuthContext não é mais necessário.
 * A aplicação agora usa NextAuth para gerenciamento de autenticação.
 * 
 * Para autenticação, use:
 * - Hook: import { useAuth } from '@/hooks/useAuth'
 * - Server: import { auth } from '@/auth/auth'
 * 
 * Este arquivo é mantido apenas para referência histórica.
 */

"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import api from "@/lib/api";

// Definindo a interface para o contexto
interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
}

// Criando o contexto com um valor padrão
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Criando o Provedor (Provider) do contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Ao carregar a aplicação, verifica se já existe um token no localStorage
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (email: string, pass: string) => {
    try {
      const response = await api.post("/auth/login", {
        email: email,
        password: pass,
      });

      if (Array.isArray(response.data) && response.data.length > 0) {
        // 2. Pegamos o primeiro (e único) objeto do array
        const userData = response.data[0];

        // 3. Extraímos o 'token' de dentro desse objeto
        const { token } = userData;

        if (!token) {
          throw new Error("Token não encontrado na resposta da API");
        }

        // O resto continua igual
        localStorage.setItem("authToken", token);
        setToken(token);
      } else {
        throw new Error("Resposta da API inválida.");

      }
    } catch (error) {
      console.error("Falha no login:", error);
      // Aqui você pode adicionar lógica para mostrar um erro ao usuário
      throw new Error("Credenciais inválidas");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
