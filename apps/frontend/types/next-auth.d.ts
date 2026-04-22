// types/next-auth.d.ts

import "next-auth";
import "next-auth/jwt";

// Tipando os tokens que o backend retorna
interface BackendTokens {
    accessToken: string;
    refreshToken?: string; // O backend atual não retorna refresh token
}

// Módulo para estender o tipo JWT (o token usado internamente pelo NextAuth)
declare module "next-auth/jwt" {
    interface JWT {
        id: string; // UUID do usuário (id_User)
        roleId: number; // ID numérico da role (roleId como SmallInt)
        token: string; // Access token retornado pelo backend
    }
}

// Módulo para estender os tipos User e Session
declare module "next-auth" {
    /**
     * O tipo User é o que é retornado pela sua função `authorize`.
     * Ele é passado para o callback `jwt` no primeiro login.
     */
    interface User {
        id: string; // UUID do usuário (corresponde ao campo id do backend)
        name: string; // Nome do usuário (corresponde ao campo name do backend)
        email: string; // Email do usuário
        roleId: number; // ID numérico da role (corresponde ao campo access no JWT do backend)
        token: string; // Access token retornado pelo backend
    }

    /**
     * O tipo Session é o que é retornado pelo hook `useSession` ou pela função `getServerSession`.
     */
    interface Session {
        user: {
            id: string; // UUID do usuário
            roleId: number; // ID numérico da role
        } & DefaultSession["user"]; // Mantém os campos padrão (name, email, image)

        token: string; // Access token retornado pelo backend
    }
}
