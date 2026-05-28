import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/login",
    },
    // callbacks: {
    //     authorized({ token, req }) {
    //         const { pathname } = req.nextUrl;
    //         if (pathname.startsWith("/plataforma/auditoria")) {
    //             return token?.roleId === "ADMIN";
    //         }
    //         return !!token;
    //     },
    // },
});

export const config = {
    matcher: ["/plataforma/:path*"],
};
