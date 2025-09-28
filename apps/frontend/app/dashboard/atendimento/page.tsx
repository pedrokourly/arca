"use client";

import { Button } from "@/components/ui/button";
import { Plus, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import SessionTable from "@/components/session/SessionTable";

export default function AtendimentosPage() {
  const router = useRouter();

  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Sessões de Atendimento
                </h1>
                <p className="text-gray-600">
                  Gerencie e visualize todas as sessões de atendimento do ARCA
                </p>
              </div>
            </div>
            <Button
              onClick={() => router.push('/dashboard/atendimento/cadastro')}
              className="flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Agendar Sessão
            </Button>
          </div>
        </div>
        <SessionTable />
      </div>
    </div>
  );
}
