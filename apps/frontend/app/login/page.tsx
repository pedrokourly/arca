"use client";

import { GalleryVerticalEnd, CornerDownLeft } from "lucide-react";
import { LoginForm } from "@/components/login-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
      router.refresh();
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <div className="text-lg">Redirecionando...</div>
      </div>
    );
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Arca
          </a>
          <Button asChild variant="outline">
            <Link href="/">
              <CornerDownLeft className="size-4" />
              Voltar ao Início
            </Link>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
