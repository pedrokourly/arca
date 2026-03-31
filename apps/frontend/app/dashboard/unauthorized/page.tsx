"use client";

import { Button } from "@/components/ui/button";
import { ShieldX } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <ShieldX className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">
            Acesso Negado
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Você não tem permissão para acessar esta página.
          </p>
          <div className="mt-6 space-y-3">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="w-full"
            >
              Voltar
            </Button>
            <Button
              onClick={() => router.push("/dashboard")}
              className="w-full"
            >
              Ir para Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
