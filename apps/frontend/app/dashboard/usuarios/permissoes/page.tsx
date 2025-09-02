"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PermissoesPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Proteção client-side - apenas admins (roleId 1)
  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/login");
      return;
    }

    // Verifica se tem permissão (apenas roleId 1 - Admin)
    const userRoleId = session.user?.roleId;
    if (!userRoleId || userRoleId > 1) {
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
  if (!session?.user?.roleId || session.user.roleId > 1) {
    return null;
  }
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Permissões de Usuário
          </h1>
          <p className="text-gray-600">
            Gerencie as permissões e níveis de acesso dos usuários
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Funções/Grupos */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Funções do Sistema</h2>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">Administrador</h3>
                  <span className="text-sm text-gray-500">Acesso Total</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Acesso completo ao sistema, incluindo configurações e gerenciamento de usuários
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Todos os módulos</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">Secretário</h3>
                  <span className="text-sm text-gray-500">Acesso Clínico</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Acesso aos módulos clínicos e gestão de pacientes
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Lista de Espera</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Pacientes</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">Consultas</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">Supervisor</h3>
                  <span className="text-sm text-gray-500">Acesso Supervisão</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Acesso para supervisão e acompanhamento de estagiários
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Supervisão</span>
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">Relatórios</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900">Estagiário</h3>
                  <span className="text-sm text-gray-500">Acesso Limitado</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Acesso básico para atividades de estágio supervisionado
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">Consultas Básicas</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Usuários e suas permissões */}
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Usuários Ativos</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-medium">JS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">João Silva</p>
                    <p className="text-sm text-gray-500">joao@arca.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Administrador
                  </span>
                  <button className="block text-sm text-blue-600 hover:text-blue-800 mt-1">
                    Editar Permissões
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-800 font-medium">MS</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Maria Santos</p>
                    <p className="text-sm text-gray-500">maria@arca.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    Secretária
                  </span>
                  <button className="block text-sm text-blue-600 hover:text-blue-800 mt-1">
                    Editar Permissões
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-medium">AP</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Ana Paula</p>
                    <p className="text-sm text-gray-500">ana@arca.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Estagiário
                  </span>
                  <button className="block text-sm text-blue-600 hover:text-blue-800 mt-1">
                    Editar Permissões
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
                Gerenciar Permissões Avançadas
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
