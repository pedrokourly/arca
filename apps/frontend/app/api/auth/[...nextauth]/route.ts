import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seu@email.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333'}/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          if (!res.ok) {
            console.error("Falha na autenticação com a API");
            return null;
          }
          const user = await res.json();
          
          if (user && user.token) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              accessToken: user.token, 
            };
          }

          return null; 
        } catch (error) {
          console.error("Erro na chamada de authorize: ", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.accessToken = token.accessToken as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
})

export { handler as GET, handler as POST }
