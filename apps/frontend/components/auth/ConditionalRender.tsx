import { usePermissions } from "@/hooks/usePermissions";

interface ConditionalRenderProps {
  requiredMaxRole?: number;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ConditionalRender({
  requiredMaxRole,
  children,
  fallback = null,
}: ConditionalRenderProps) {
  const { hasPermission } = usePermissions();

  if (requiredMaxRole && !hasPermission(requiredMaxRole)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
