// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { apiService } from "@/utils/apiHandler";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await apiService.login({
          email: credentials?.email || '',
          password: credentials?.password || '',
        }, true); // true = usa URL interna do backend (server-side)
        
        if (user) {
          return {
            id: user.id, // UUID do usuário retornado pelo backend
            name: user.name, // Nome do usuário retornado pelo backend
            email: user.email, // Email do usuário retornado pelo backend
            roleId: user.roleId, // Role do usuário retornado pelo backend
            token: user.token,
          };
        }
        return null;
      },
    }),
  ],

  // 3. Callbacks para controlar o que vai para o token e a sessão
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.roleId = user.roleId
        token.token = user.token
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.roleId = token.roleId
      session.token = token.token
      return session
    }
  },

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
