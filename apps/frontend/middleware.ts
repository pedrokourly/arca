// middleware.ts
export { default } from "next-auth/middleware"

// Aplica a proteção do NextAuth a estas rotas
export const config = { matcher: ["/waitlist/:path*"] }