FROM node:22-alpine AS base

# Instalar dependências do sistema
RUN apk add --no-cache libc6-compat openssl

WORKDIR /app

# Etapa de dependências
FROM base AS deps
COPY package*.json ./
COPY turbo.json ./
COPY apps/backend/package*.json ./apps/backend/
COPY apps/generated ./apps/generated

RUN npm ci

# Etapa de build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/backend/node_modules ./apps/backend/node_modules
COPY . .

# Gerar Prisma Client
WORKDIR /app/apps/backend
RUN npx prisma generate

# Build da aplicação
WORKDIR /app
RUN npx turbo run build --filter=backend

# Etapa de produção
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nestjs

# Copiar arquivos necessários
COPY --from=builder --chown=nestjs:nodejs /app/apps/backend/dist ./dist
COPY --from=builder --chown=nestjs:nodejs /app/apps/backend/package*.json ./
COPY --from=builder --chown=nestjs:nodejs /app/apps/generated ./apps/generated
COPY --from=builder --chown=nestjs:nodejs /app/apps/backend/prisma ./prisma

# Instalar apenas dependências de produção
RUN npm install --omit=dev && npm cache clean --force

# Gerar Prisma Client novamente em produção
RUN npx prisma generate

USER nestjs

EXPOSE 3333

CMD ["node", "dist/main.js"]