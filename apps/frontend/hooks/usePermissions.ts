import { useSession } from 'next-auth/react'

export const usePermissions = () => {
  const { data: session } = useSession()
  
  const hasPermission = (maxRoleId: number) => {
    if (!session?.user?.roleId) return false
    return session.user.roleId <= maxRoleId
  }

  const canAccessUsers = () => hasPermission(2) // Admin ou Secretário
  const canCreateUsers = () => hasPermission(2) // Admin ou Secretário
  const canSeeAudit = () => hasPermission(1)    // Admin

  const getRoleLabel = (roleId: number) => {
    const roles = {
      1: 'Administrador',
      2: 'Secretário', 
      3: 'Supervisor',
      4: 'Estagiário'
    }
    return roles[roleId as keyof typeof roles] || 'Desconhecido'
  }

  return {
    hasPermission,
    canAccessUsers,
    canCreateUsers,
    canSeeAudit,
    getRoleLabel,
    userRole: session?.user?.roleId,
    isAdmin: hasPermission(1),
    isSecretary: hasPermission(2),
    isSupervisor: hasPermission(3)
  }
}
