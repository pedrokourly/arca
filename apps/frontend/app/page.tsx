"use client"

// 1. Importe o useSession e signOut do next-auth/react
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation" // Opcional, para redirecionamento
import { useEffect } from "react" // Opcional, para redirecionamento

export default function Home() {
  // 2. Substitua seu hook antigo pelo useSession
  const { data: session, status } = useSession()
  const router = useRouter() // Opcional

  // O status 'loading' é o equivalente ao seu 'isLoading'
  if (status === "loading") {
    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex items-center justify-center">
          <div className="text-lg">Carregando...</div>
        </div>
      </div>
    )
  }

  // O status 'unauthenticated' é o equivalente ao seu '!isAuthenticated'
  // O ideal é que o middleware já redirecione o usuário antes de chegar aqui.
  // Este bloco serve como uma segunda camada de proteção no cliente.
  if (status === "unauthenticated") {
    // Redireciona para a página de login do lado do cliente
    useEffect(() => {
      router.push('/login');
    }, [router]);

    return (
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <div className="flex items-center justify-center">
          <div className="text-lg">Você não está autenticado. Redirecionando...</div>
        </div>
      </div>
    );
  }

  // Se o status for 'authenticated', redirecionamos usando useEffect
  useEffect(() => {
    router.push('/usuarios');
  }, [router]);

  return null;
}

// {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-8 row-start-2 items-center">
//         <h1 className="text-3xl font-bold">Bem-vindo ao Sistema!</h1>
        
//         <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
//           <h2 className="text-xl font-semibold mb-4">Informações do Usuário</h2>
//           <div className="space-y-2">
//             {/* 3. Acesse os dados do usuário através de session.user */}
//             <p><strong>Nome:</strong> {session?.user?.name}</p>
//             <p><strong>Email:</strong> {session?.user?.email}</p>
//             {/* O ID pode precisar ser adicionado via callbacks, como no exemplo anterior */}
//             <p><strong>ID:</strong> {(session?.user as any)?.id}</p>
//           </div>
//         </div>

//         {/* 4. Use a função signOut importada para fazer logout */}
//         <Button onClick={() => signOut()} variant="outline">
//           Sair
//         </Button>
//       </main>
//     </div> */}