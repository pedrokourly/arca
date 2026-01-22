FROM node:20-slim AS base

# Instalar OpenSSL e certificados
RUN apt-get update -y && apt-get install -y openssl ca-certificates

WORKDIR /app

# --- Etapa de Dependências ---
FROM base AS deps
COPY package*.json ./
COPY turbo.json ./
COPY apps/frontend/package*.json ./apps/frontend/
COPY apps/generated ./apps/generated

# 1. Remove o lockfile do Windows para evitar conflitos
# 2. Roda o npm install limpo
# 3. 🔥 FIX CRÍTICO: Força a instalação do binário Linux do LightningCSS
RUN rm -f package-lock.json && \
    npm install && \
    npm install lightningcss-linux-x64-gnu --no-save

# --- Etapa de Build ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variáveis de ambiente
ARG NEXT_PUBLIC_API_URL
ARG NEXTAUTH_URL
ARG NEXTAUTH_SECRET

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXTAUTH_URL=$NEXTAUTH_URL
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET

# Aumenta memória para o build não travar
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build do frontend
RUN npx turbo run build --filter=frontend

# --- Etapa de Produção ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copiar arquivos do build
COPY --from=builder --chown=nextjs:nodejs /app/apps/frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/frontend/public ./apps/frontend/public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/frontend/server.js"]