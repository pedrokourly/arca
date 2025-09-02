import { usePermissions } from '@/hooks/usePermissions'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredMaxRole?: number
  fallbackPath?: string
  showMessage?: boolean
}

export function ProtectedRoute({ 
  children, 
  requiredMaxRole, 
  fallbackPath = '/dashboard',
  showMessage = true 
}: ProtectedRouteProps) {
  const { hasPermission, userRole } = usePermissions()
  const router = useRouter()

  useEffect(() => {
    if (requiredMaxRole && !hasPermission(requiredMaxRole)) {
      router.push(fallbackPath)
    }
  }, [requiredMaxRole, hasPermission, router, fallbackPath])

  if (requiredMaxRole && !hasPermission(requiredMaxRole)) {
    if (showMessage) {
      return (
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Acesso Negado
          </h2>
          <p className="text-gray-600">
            Você não tem permissão para acessar esta página.
            Nível necessário: {requiredMaxRole}, seu nível: {userRole}
          </p>
        </div>
      )
    }
    return null
  }

  return <>{children}</>
}
