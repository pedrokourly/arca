import { ComponentType } from 'react'
import { ProtectedRoute } from './ProtectedRoute'

export function withRoleProtection<P extends object>(
  Component: ComponentType<P>,
  requiredMaxRole: number
) {
  return function ProtectedComponent(props: P) {
    return (
      <ProtectedRoute requiredMaxRole={requiredMaxRole}>
        <Component {...props} />
      </ProtectedRoute>
    )
  }
}

// Exemplos de uso:
// export default withRoleProtection(UsersPage, 2) // Admins e Secretários
// export default withRoleProtection(PermissionsPage, 1) // Apenas Admins
