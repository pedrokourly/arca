"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const { data: session, status } = useSession();
    const router = useRouter();

    // Verifica se o usuário está autenticado
    useEffect(() => {
        if (status === "loading") return; // Aguarda carregar
        if (!session) {
            router.push("/login"); // Redireciona para login se não autenticado
        }
    }, [session, status, router]);

    // Mostra loading enquanto verifica a sessão
    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Se não está autenticado, não renderiza o dashboard
    if (!session) {
        return null;
    }

    // Função para gerar breadcrumbs baseado na URL
    const generateBreadcrumbs = () => {
        const segments = pathname.split("/").filter((segment) => segment !== "");
        const breadcrumbs = [];

        breadcrumbs.push({
            label: "Plataforma",
            href: "/dashboard",
            isLast: segments.length === 1,
        });

        // Mapeia os segmentos da URL para breadcrumbs legíveis
        const segmentLabels: { [key: string]: string } = {
            dashboard: "Dashboard",
            "lista-espera": "Lista de Espera",
            cadastro: "Cadastro",
            consulta: "Consulta",
            usuarios: "Usuários",
            criar: "Criar",
            permissoes: "Permissões",
        };

        for (let i = 1; i < segments.length; i++) {
            const segment = segments[i];
            const label =
                segmentLabels[segment] ||
                segment.charAt(0).toUpperCase() + segment.slice(1);
            const href = "/" + segments.slice(0, i + 1).join("/");
            const isLast = i === segments.length - 1;

            breadcrumbs.push({
                label,
                href,
                isLast,
            });
        }

        return breadcrumbs;
    };

    const breadcrumbs = generateBreadcrumbs();

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <div key={breadcrumb.href} className="flex items-center">
                                        {index > 0 && (
                                            <BreadcrumbSeparator className="hidden md:block" />
                                        )}
                                        <BreadcrumbItem className="hidden md:block">
                                            {breadcrumb.isLast ? (
                                                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={breadcrumb.href}>
                                                    {breadcrumb.label}
                                                </BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                    </div>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}
