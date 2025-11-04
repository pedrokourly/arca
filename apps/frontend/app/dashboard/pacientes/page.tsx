"use client";
import { PatientsTable } from "@/components/patients/tablePatients";
import { Button } from "@/components/ui/button";
import { Plus, Users } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PacientesPage() {
  const router = useRouter();

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
                  Pacientes
                </h1>
                <p className="text-gray-600">
                  Gerencie todos os pacientes do sistema ARCA
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push('/dashboard/lista-espera/cadastro')}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Adicionar Novo Paciente
            </Button>
          </div>
        </div>
        <PatientsTable />
      </div>
    </div>
  );
}
