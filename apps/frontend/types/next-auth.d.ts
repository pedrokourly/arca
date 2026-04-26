import type { DefaultSession } from 'next-auth';
import type { JWT as DefaultJWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface User {
        token: string;
        id: string;
        roleId: string;
        name: string;
        email: string;
    }
    interface Session {
        token: string;
        user: {
            id: string;
            roleId: string;
        } & DefaultSession['user'];
    }
}
declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        token: string;
        id: string;
        roleId: string;
    }
}