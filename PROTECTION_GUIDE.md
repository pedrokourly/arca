# Sistema de Proteção de Rotas - ARCA

## Estrutura de Roles

O sistema utiliza uma hierarquia numérica onde menor número = maior privilégio:

- **1 - Administrador**: Acesso total ao sistema
- **2 - Secretário**: Pode gerenciar usuários e acessar módulos clínicos
- **3 - Supervisor**: Acesso para supervisão e relatórios
- **4 - Estagiário**: Acesso limitado, apenas funcionalidades básicas

## Proteções Implementadas

### 1. Middleware (Proteção no Servidor)
- **Arquivo**: `middleware.ts`
- **Funcionalidade**: Intercepta requisições antes da página carregar
- **Rotas Protegidas**:
  - `/dashboard/usuarios` - Requer role ≤ 2 (Admin ou Secretário)
  - `/dashboard/usuarios/criar` - Requer role ≤ 2 (Admin ou Secretário)
  - `/dashboard/usuarios/permissoes` - Requer role ≤ 1 (Apenas Admin)

### 2. Hook de Permissões
- **Arquivo**: `hooks/usePermissions.ts`
- **Funcionalidades**:
  - `hasPermission(maxRoleId)` - Verifica se o usuário tem permissão
  - `canAccessUsers()` - Verifica acesso ao módulo de usuários
  - `canCreateUsers()` - Verifica permissão para criar usuários
  - `canManagePermissions()` - Verifica permissão para gerenciar roles

### 3. Componentes de Proteção

#### ConditionalRender
- **Arquivo**: `components/auth/ConditionalRender.tsx`
- **Uso**: Mostra/oculta elementos baseado em permissões
```tsx
<ConditionalRender requiredMaxRole={2}>
  <button>Apenas para Admin/Secretário</button>
</ConditionalRender>
```

#### ProtectedRoute
- **Arquivo**: `components/auth/ProtectedRoute.tsx`
- **Uso**: Protege rotas inteiras com redirecionamento

#### withRoleProtection (HOC)
- **Arquivo**: `components/auth/withRoleProtection.tsx`
- **Uso**: Wrapper para proteger componentes
```tsx
export default withRoleProtection(ComponentName, 1) // Apenas admins
```

### 4. Proteção Client-Side
Todas as páginas protegidas incluem verificação client-side adicional:
- Verificação de autenticação
- Verificação de role
- Redirecionamento automático para `/dashboard/unauthorized`
- Loading state durante verificação

### 5. UI Condicional

#### Sidebar
- Menu de "Usuários" só aparece para roles ≤ 2
- Sub-itens filtrados baseado em permissões específicas

#### Tabela de Usuários
- Botão "Editar" apenas para roles ≤ 2
- Botão "Excluir" apenas para role = 1 (Admin)

## Páginas Protegidas

### `/dashboard/usuarios` (Admin + Secretário)
- Lista de usuários
- Proteção: Middleware + Client-side

### `/dashboard/usuarios/criar` (Admin + Secretário)
- Criação de novos usuários
- Proteção: Middleware + Client-side

### `/dashboard/usuarios/permissoes` (Apenas Admin)
- Gestão de permissões
- Proteção: Middleware + Client-side

### `/dashboard/unauthorized`
- Página de acesso negado
- Botões para voltar ou ir ao dashboard

## Fluxo de Proteção

1. **Middleware**: Primeira verificação no servidor
2. **Client-side**: Verificação adicional no componente
3. **UI Elements**: Elementos condicionais baseados em role
4. **Backend**: Validação final nas APIs (já implementada)

## Como Adicionar Novas Proteções

### Nova Rota Protegida
1. Adicionar no `middleware.ts`:
```typescript
const routePermissions: Record<string, number> = {
  "/nova-rota": 2, // Role máximo permitido
}
```

2. Adicionar proteção client-side na página:
```tsx
useEffect(() => {
  const userRoleId = session.user?.roleId;
  if (!userRoleId || userRoleId > 2) {
    router.push("/dashboard/unauthorized");
  }
}, [session, router]);
```

### Novo Elemento Condicional
```tsx
<ConditionalRender requiredMaxRole={1}>
  <AdminOnlyComponent />
</ConditionalRender>
```

### Nova Função de Permissão
Adicionar no `usePermissions.ts`:
```typescript
const canDoSomething = () => hasPermission(requiredRole)
```

## Segurança

- **Defesa em Profundidade**: Múltiplas camadas de proteção
- **Princípio do Menor Privilégio**: Usuários só veem o que podem acessar
- **Validação Server-Side**: Backend sempre valida permissões
- **UX Friendly**: Redirecionamentos e mensagens claras

## Teste das Proteções

Para testar, faça login com usuários de diferentes roles e tente acessar:
- `/dashboard/usuarios` (permitido para roles 1 e 2)
- `/dashboard/usuarios/permissoes` (permitido apenas para role 1)
- Botões de edição/exclusão na tabela de usuários
