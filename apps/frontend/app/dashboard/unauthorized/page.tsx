"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.314 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
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
              onClick={() => router.push('/dashboard')}
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
