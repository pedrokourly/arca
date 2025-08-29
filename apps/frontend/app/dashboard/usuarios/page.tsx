"use client";

import { UsersTable } from "@/components/users/tableUsers";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UsuariosPage() {
  const router = useRouter();

  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Usuários
              </h1>
              <p className="text-gray-600">
                Gerencie os usuários do sistema ARCA
              </p>
            </div>
            <Button
              onClick={() => router.push('/dashboard/usuarios/criar')}
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
