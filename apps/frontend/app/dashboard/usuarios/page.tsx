"use client";

import { UsersTable } from "@/components/users/tableUsers";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function UsuariosPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Proteção client-side adicional
  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    // Verifica se tem permissão (roleId 1 ou 2)
    const userRoleId = session.user?.roleId;
    if (!userRoleId || userRoleId > 2) {
      router.push("/dashboard/unauthorized");
      return;
    }
  }, [session, status, router]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Se não tem permissão, não renderiza
  if (!session?.user?.roleId || session.user.roleId > 2) {
    return null;
  }

  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Usuários
                </h1>
                <p className="text-gray-600">
                  Gerencie os usuários do sistema ARCA
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push("/dashboard/usuarios/cadastro")}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Adicionar Usuário
            </Button>
          </div>
        </div>
        <UsersTable />
      </div>
    </div>
  );
}
