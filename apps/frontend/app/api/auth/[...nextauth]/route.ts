// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiService } from "@/utils/apiHandler";

const handler = NextAuth({
  // 1. Definição dos Provedores de Autenticação
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      // 2. A lógica de autorização
      async authorize(credentials, req) {
        // Esta função é chamada quando o usuário tenta fazer login.
        // 'credentials' contém o email e a senha enviados do formulário de login.

        // Chame a API do seu backend para autenticar
        const user = await apiService.login({
          email: credentials?.email || '',
          password: credentials?.password || '',
        });
        
        // Se a resposta da sua API for bem-sucedida e tiver os dados do usuário e o token...
        if (user) {
          // O objeto retornado aqui será salvo no token da sessão do NextAuth.
          // É CRUCIAL que você inclua o token do seu backend e as roles/permissões aqui.
          return {
            id: user.id, // UUID do usuário retornado pelo backend
            name: user.name, // Nome do usuário retornado pelo backend
            email: user.email, // Email do usuário retornado pelo backend
            roleId: user.roleId, // Role do usuário retornado pelo backend
            token: user.token,
          };
        }
        // Retorne null se as credenciais estiverem incorretas.
        return null;
      },
    }),
  ],

  // 3. Callbacks para controlar o que vai para o token e a sessão
  callbacks: {
    async jwt({ token, user }) {
      // First time JWT callback is run, user object is available
      if (user) {
        token.id = user.id
        token.roleId = user.roleId
        token.token = user.token
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client
      session.user.id = token.id
      session.user.roleId = token.roleId
      session.token = token.token
      return session
    }
  },

  // 4. Configuração da página de login
  pages: {
    signIn: "/login", // Redireciona o usuário para '/login' se não estiver autenticado
  },

  // 5. Estratégia de sessão
  session: {
    strategy: "jwt", // Usar JWT para gerenciar a sessão do lado do cliente
  },
});

export { handler as GET, handler as POST };
