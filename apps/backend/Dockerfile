# ==================================================================
# Estágio 1: Builder (Construção)
# ==================================================================
FROM node:22-slim AS builder

WORKDIR /app

# ==================================================================
# MUDANÇA AQUI:
# NÃO copiamos o 'package-lock.json'.
# ==================================================================
COPY package.json ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/

# 'npm install' (sem lockfile) vai gerar um plano
# de instalação novo e CORRETO para Linux.
RUN npm install

# Copia todo o resto do código-fonte
COPY . .

# Gera o cliente Prisma
RUN npx prisma generate --schema=./apps/backend/prisma/schema.prisma

# Executa o build apenas para o backend
RUN npm run -w backend build

# ==================================================================
# Estágio 2: Production (Produção)
# ==================================================================
FROM node:22-slim

WORKDIR /app

# ==================================================================
# MUDANÇA AQUI:
# NÃO copiamos o 'package-lock.json'
# ==================================================================
COPY package.json ./
COPY apps/backend/package.json ./apps/backend/

# 'npm install --production' (sem lockfile) vai instalar
# apenas as dependências de produção corretas para Linux.
RUN npm install --production

# Copia os artefatos construídos (dist) do estágio 'builder'
COPY --from=builder /app/apps/backend/dist ./dist

# Copia o schema do Prisma (necessário para rodar migrações)
COPY --from=builder /app/apps/backend/prisma ./prisma

# Copia o cliente Prisma gerado do builder
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Instala o OpenSSL para corrigir o aviso do Prisma
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Expõe a porta 3333
EXPOSE 3333

# Comando para iniciar a aplicação em produção
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./prisma/schema.prisma && node dist/src/main"]