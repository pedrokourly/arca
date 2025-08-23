# NextAuth Implementation Guide

Este documento explica como o NextAuth foi implementado na aplicação e como usá-lo.

## Estrutura de Arquivos

```
apps/frontend/
├── auth/
│   ├── auth.ts                 # Configuração principal do NextAuth
│   └── next-auth.d.ts         # Tipos TypeScript para o NextAuth
├── app/
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts           # Rotas da API do NextAuth
│   ├── login/
│   │   └── page.tsx           # Página de login
│   ├── layout.tsx             # Layout principal com SessionProvider
│   └── page.tsx               # Página inicial protegida
├── components/
│   ├── login-form.tsx         # Formulário de login
│   ├── users-list.tsx         # Exemplo de componente autenticado
│   └── ui/loading.tsx         # Componentes de loading
├── hooks/
│   └── useAuth.ts             # Hook personalizado para autenticação
├── lib/
│   └── api.ts                 # Cliente Axios configurado com interceptors
├── middleware.ts              # Middleware para proteção de rotas
└── .env.local                 # Variáveis de ambiente
```

## Variáveis de Ambiente

Certifique-se de que o arquivo `.env.local` contém:

```env
NEXTAUTH_SECRET=HnBawm5PIqJoOSJxtD2fUceCoblNuPCyQL4ynBKOuEU=
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3333
```

## Como Usar

### 1. Verificar Status de Autenticação

```tsx
import { useAuth } from '@/hooks/useAuth'

function MyComponent() {
  const { user, isLoading, isAuthenticated, signOut } = useAuth()

  if (isLoading) return <div>Carregando...</div>
  if (!isAuthenticated) return <div>Faça login</div>

  return (
    <div>
      <p>Bem-vindo, {user?.name}!</p>
      <button onClick={signOut}>Sair</button>
    </div>
  )
}
```

### 2. Fazer Chamadas Autenticadas para a API

```tsx
import api from '@/lib/api'

// O token será automaticamente incluído nas requisições
const fetchData = async () => {
  try {
    const response = await api.get('/protected-endpoint')
    return response.data
  } catch (error) {
    console.error('Erro:', error)
  }
}
```

### 3. Proteger Páginas Server-Side

```tsx
import { auth } from '@/auth/auth'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const session = await auth()
  
  if (!session) {
    redirect('/login')
  }

  return <div>Conteúdo protegido</div>
}
```

### 4. Proteger Rotas da API

```tsx
import { auth } from '@/auth/auth'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const session = await auth()
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ data: 'Protected data' })
}
```

## Funcionalidades Implementadas

### ✅ Autenticação com Credentials
- Login com email e senha
- Integração com API backend (NestJS)
- Validação de credenciais

### ✅ Gerenciamento de Sessão
- Sessão baseada em JWT
- Token de acesso incluído na sessão
- Expiração automática (24 horas)

### ✅ Proteção de Rotas
- Middleware para proteção automática
- Redirecionamento para login
- Proteção de rotas da API

### ✅ Interface de Usuário
- Formulário de login responsivo
- Estados de loading e erro
- Feedback visual para o usuário

### ✅ Interceptors HTTP
- Token automático nas requisições
- Tratamento de erros 401
- Redirecionamento automático em caso de token expirado

### ✅ TypeScript
- Tipos personalizados para sessão
- Intellisense completo
- Type safety em toda a aplicação

## Fluxo de Autenticação

1. **Login**: Usuário insere credenciais no formulário
2. **Validação**: NextAuth chama a API backend para validar
3. **Token**: API retorna token JWT se credenciais válidas
4. **Sessão**: NextAuth cria sessão com token e dados do usuário
5. **Redirecionamento**: Usuário é redirecionado para página principal
6. **Requisições**: Todas as chamadas à API incluem automaticamente o token

## Middleware de Proteção

O middleware protege automaticamente todas as rotas exceto:
- `/login`
- `/api/auth/*` (rotas do NextAuth)
- Arquivos estáticos

## Customização

Para adicionar novos providers ou modificar a configuração:

1. Edite `auth/auth.ts`
2. Atualize os tipos em `auth/next-auth.d.ts` se necessário
3. Modifique o middleware se precisar de novas regras de rota

## Troubleshooting

### Erro "NEXTAUTH_SECRET is not defined"
- Verifique se `.env.local` existe e contém `NEXTAUTH_SECRET`

### Token não está sendo enviado
- Verifique se `useAuth` está sendo usado em componente cliente
- Confirme que `SessionProvider` está no layout principal

### Redirecionamento infinito
- Verifique as configurações do middleware
- Confirme que a rota de login está nas rotas públicas

## Segurança

- ✅ Secret key segura gerada com OpenSSL
- ✅ Tokens JWT com expiração
- ✅ Proteção CSRF automática
- ✅ Validação server-side
- ✅ Headers seguros nas requisições
