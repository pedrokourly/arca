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

# Copia os templates do PDF para o diretório src/pdf/templates
# (o código usa process.cwd() + 'src/pdf/templates')
COPY apps/backend/src/pdf/templates ./src/pdf/templates

# Copia o cliente Prisma gerado do builder
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Instala o OpenSSL e dependências necessárias para o Puppeteer/Chrome
RUN apt-get update && apt-get install -y \
    openssl \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libatspi2.0-0 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libx11-6 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Define variável de ambiente para o Puppeteer usar o Chromium instalado
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Expõe a porta 3333
EXPOSE 3333

# Comando para iniciar a aplicação em produção
CMD ["sh", "-c", "npx prisma migrate deploy --schema=./prisma/schema.prisma && node dist/src/main"]