// Directives
'use client';

// Import Libs
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Import Components
import FormLogin from '@/components/forms/form-login';

// Import Icons
import { Brain, ArrowLeft } from 'lucide-react';

const Login = () => {
    // Router
    const router = useRouter();

    return (
        <>
            <div className="bg-(--color-light) flex w-full min-h-screen">
                <div className="flex-2 flex flex-col justify-between items-center p-4!">
                    <div className="flex justify-between items-center w-full">
                        <Link href="/" className="flex items-center gap-2">
                            <Brain size={36} color="#000000" />
                            <h1 className="font-bold text-(--color-dark) text-[18px]">ARCA</h1>
                        </Link>

                        <div onClick={() => router.push('/')} className="bg-(--color-light) text-(--color-dark) p-2! border border-solid border-(--color-mlight)/75 rounded-xl">
                            <ArrowLeft color="#000000" className="cursor-pointer" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-6 w-full">
                        <div className="flex flex-col items-center gap-2">
                            <h2 className="font-semibold text-(--color-dark) text-[18px]">Acesso Interno</h2>
                            <p className="text-(--color-mdark) text-[14px]">Insira suas credenciais para acessar a plataforma</p>
                        </div>

                        <FormLogin />
                    </div>

                    <div className="w-[calc(100%-80px)] border-t border-solid border-(--color-mlight)/75 pt-4!">
                        <p className="text-(--color-mdark) text-[14px] text-center">Não tem uma conta? Entre em contato com um administrador <Link href="mailto:contato@wizecode.com.br" className="font-bold">aqui</Link>.</p>
                    </div>
                </div>

                <div className="bg-(--color-mlight) flex-1 hidden flex-col lg:flex">
                    {/* Imagem da Fac+ */}
                </div>
            </div>
        </>
    );
};

export default Login;