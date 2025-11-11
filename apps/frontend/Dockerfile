# ==================================================================
# Estágio 1: Builder (Construção)
# ==================================================================
FROM node:22-slim AS builder

WORKDIR /app

# ==================================================================
# MUDANÇA IMPORTANTE:
# NÃO copiamos mais o 'package-lock.json'.
# Copiamos apenas os 'package.json' para forçar o NPM a 
# resolver as dependências do zero no ambiente Linux.
# ==================================================================
COPY package.json ./
COPY apps/backend/package.json ./apps/backend/
COPY apps/frontend/package.json ./apps/frontend/
# (Se você tiver a pasta 'packages', copie-a também)
# COPY packages/nome-do-pacote/package.json ./packages/nome-do-pacote/

# Agora, 'npm install' (sem um lockfile) vai gerar um plano
# de instalação novo e CORRETO para Linux, baixando
# o '...linux-x64-gnu.node' que precisamos.
RUN npm install

# Copia todo o resto do código-fonte
COPY . .

# Executa o build apenas para o frontend
RUN npm run -w frontend build

# ==================================================================
# Estágio 2: Production (Produção)
# ==================================================================
FROM node:22-slim

WORKDIR /app

# ==================================================================
# MUDANÇA IMPORTANTE:
# Mesma lógica aqui. Copiamos apenas os 'package.json'.
# ==================================================================
COPY package.json ./
COPY apps/frontend/package.json ./apps/frontend/
# (Não precisamos do package.json do backend aqui)

# 'npm install --production' (sem lockfile) vai instalar
# apenas as dependências de produção corretas para Linux.
RUN npm install --production

# Precisamos mover para o diretório do app frontend
WORKDIR /app/apps/frontend

# Copia os artefatos construídos do Next.js do estágio 'builder'
COPY --from=builder /app/apps/frontend/.next ./.next
COPY --from=builder /app/apps/frontend/public ./public
COPY --from=builder /app/apps/frontend/package.json ./package.json
COPY --from=builder /app/apps/frontend/next.config.ts ./next.config.ts

# Expõe a porta 3000 (padrão do Next.js)
EXPOSE 3000

# Comando para iniciar a aplicação em produção
CMD ["npm", "run", "start"]