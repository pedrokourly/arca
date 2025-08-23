"use client"

import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { user, isLoading, isAuthenticated, signOut } = useAuth()

  if (isLoading) {
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex items-center justify-center">
          <div className="text-lg">Carregando...</div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex items-center justify-center">
          <div className="text-lg">Redirecionando para login...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Sistema!</h1>
        
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
          <h2 className="text-xl font-semibold mb-4">Informações do Usuário</h2>
          <div className="space-y-2">
            <p><strong>Nome:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>ID:</strong> {user?.id}</p>
          </div>
        </div>

        <Button onClick={signOut} variant="outline">
          Sair
        </Button>
      </main>
    </div>
  )
}
