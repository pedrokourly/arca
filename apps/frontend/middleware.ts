// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const pathname = req.nextUrl.pathname;

    // Define as permissões mínimas para cada rota (menor número = maior privilégio)
    const routePermissions: Record<string, number> = {
      "/dashboard/usuarios": 2, // Secretário (2) ou superior (Admin = 1)
      "/dashboard/usuarios/criar": 2, // Secretário ou superior
      "/dashboard/usuarios/permissoes": 1, // Apenas Admin
    };

    // Verifica se a rota tem restrições
    for (const [route, maxRoleId] of Object.entries(routePermissions)) {
      if (pathname.startsWith(route)) {
        const userRoleId = token?.roleId as number;

        if (!userRoleId || userRoleId > maxRoleId) {
          // Redireciona para página de acesso negado
          return NextResponse.redirect(
            new URL("/dashboard/unauthorized", req.url),
          );
        }
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
