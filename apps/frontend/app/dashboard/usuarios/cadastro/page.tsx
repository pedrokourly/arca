"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UserPlus } from "lucide-react";
import { usePermissions } from "@/hooks/usePermissions";
import CreateUserForm from "@/components/users/CreateUserForm";

export default function CriarUsuarioPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { canCreateUsers } = usePermissions();

  const isLoading = status === "loading";
  const hasPermission = canCreateUsers();

  useEffect(() => {
    if (isLoading) return;
    

    if (!session) {
      router.push("/login");
      return;
    }

    if (!hasPermission) {
      router.push("/dashboard/unauthorized");
    }

  }, [isLoading, session, hasPermission, router]);


  if (isLoading || !session || !hasPermission) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Se chegou até aqui, o usuário está autenticado e tem permissão.
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Criar Usuário
              </h1>
              <p className="text-muted-foreground">
                Adicione um novo usuário ao sistema ARCA
              </p>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <CreateUserForm />
      </div>
    </div>
  );
}