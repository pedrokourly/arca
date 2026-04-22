"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
    FileText,
    ClipboardCheck,
    Edit,
    CheckCircle2,
    Calendar,
    User,
    Users,
    Clock,
} from "lucide-react";
import { toast } from "sonner";
import { apiService } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface SessionData {
    id_Atendimento: string;
    dataHoraInicio: string;
    dataHoraFim: string;
    id_Status: number;
    id_Tipo_Atendimento: number;
    observacoes?: string;
    ListaEspera: {
        id_Lista: string;
        nomeRegistro: string;
        nomeSocial?: string;
        telefonePessoal: string;
    };
    estagiarioExecutor: {
        id_User: string;
        nome: string;
        email: string;
    };
    supervisorExecutor: {
        id_User: string;
        nome: string;
        email: string;
    };
    status: {
        id_Status: number;
        nome: string;
    };
    Prontuario?: Array<{
        id_Registro: string;
        id_Status: number;
        id_Tipo: number;
        dataEmissao: string;
    }>;
}

type TabType =
    | "triagem-pendente"
    | "triagem-aprovacao"
    | "psicoterapia-pendente"
    | "psicoterapia-aprovacao";

export default function RelatoriosPage() {
    const { data: session } = useSession();
    const router = useRouter();
    const [sessions, setSessions] = useState<SessionData[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<TabType>("triagem-pendente");
    const [userRole, setUserRole] = useState<number | null>(null);

    useEffect(() => {
        if (session?.user) {
            // @ts-ignore
            setUserRole(session.user.roleId);
        }
    }, [session]);

    const fetchSessions = async () => {
        try {
            setLoading(true);

            if (!session?.token) {
                throw new Error("Token de autenticação não encontrado");
            }

            const data = await apiService.getSessions(session.token);

            setSessions(data);
        } catch (error) {
            console.error("Erro ao carregar sessões:", error);
            const { title, description } = getErrorMessage(error);
            toast.error(title, { description });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (session?.token) {
            fetchSessions();
        }
    }, [session]);

    // Adicionar listener para refetch quando a página receber foco
    useEffect(() => {
        const handleFocus = () => {
            if (session?.token) {
                fetchSessions();
            }
        };

        window.addEventListener("focus", handleFocus);
        return () => window.removeEventListener("focus", handleFocus);
    }, [session]);

    // Filtrar sessões de triagem que precisam de relatório (status 1 = agendada, sem prontuário)
    const getTriagemPendente = () => {
        return sessions.filter(
            (s) =>
                s.id_Tipo_Atendimento === 1 && // Triagem
                s.id_Status === 1 && // Agendada
                (!s.Prontuario || s.Prontuario.length === 0), // Sem prontuário
        );
    };

    // Filtrar relatórios de triagem que precisam ser aprovados (status 1 = prontuário pendente)
    const getTriagemAprovacao = () => {
        return sessions.filter(
            (s) =>
                s.id_Tipo_Atendimento === 1 && // Triagem
                s.Prontuario &&
                s.Prontuario.some((p) => p.id_Status === 1 && p.id_Tipo === 1), // Prontuário de triagem pendente
        );
    };

    // Filtrar sessões de psicoterapia que precisam de relatório
    const getPsicoterapiaPendente = () => {
        return sessions.filter(
            (s) =>
                s.id_Tipo_Atendimento === 2 && // Psicoterapia
                s.id_Status === 1 && // Agendada
                (!s.Prontuario || !s.Prontuario.some((p) => p.id_Tipo === 2)), // Sem prontuário de psicoterapia
        );
    };

    // Filtrar relatórios de psicoterapia que precisam ser aprovados
    const getPsicoterapiaAprovacao = () => {
        return sessions.filter(
            (s) =>
                s.id_Tipo_Atendimento === 2 && // Psicoterapia
                s.Prontuario &&
                s.Prontuario.some((p) => p.id_Status === 1 && p.id_Tipo === 2), // Prontuário de psicoterapia pendente
        );
    };

    const counts = {
        triagemPendente: getTriagemPendente().length,
        triagemAprovacao: getTriagemAprovacao().length,
        psicoterapiaPendente: getPsicoterapiaPendente().length,
        psicoterapiaAprovacao: getPsicoterapiaAprovacao().length,
    };

    const SessionCard = ({
        session,
        showApprovalActions = false,
    }: {
        session: SessionData;
        showApprovalActions?: boolean;
    }) => {
        const isEstagiario = userRole === 4;
        const isSupervisor = userRole === 3;
        const hasProntuario = session.Prontuario && session.Prontuario.length > 0;
        const prontuarioPendente = session.Prontuario?.find(
            (p) => p.id_Status === 1,
        );

        // Determina o tipo de relatório baseado no tipo de atendimento
        const reportType =
            session.id_Tipo_Atendimento === 1 ? "triagem" : "psicoterapia";

        return (
            <Card className="mb-4 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <CardTitle className="text-lg">
                                {session.ListaEspera.nomeRegistro}
                            </CardTitle>
                            {session.ListaEspera.nomeSocial && (
                                <Badge variant="outline" className="text-xs">
                                    {session.ListaEspera.nomeSocial}
                                </Badge>
                            )}
                        </div>
                        <Badge variant={hasProntuario ? "default" : "secondary"}>
                            {session.id_Tipo_Atendimento === 1 ? "Triagem" : "Psicoterapia"}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                                <span className="font-medium">Data/Hora:</span>
                                <p className="text-muted-foreground">
                                    {format(
                                        new Date(session.dataHoraInicio),
                                        "dd/MM/yyyy 'às' HH:mm",
                                        { locale: ptBR },
                                    )}
                                </p>
                            </div>
                            <div>
                                <span className="font-medium">Telefone:</span>
                                <p className="text-muted-foreground">
                                    {session.ListaEspera.telefonePessoal}
                                </p>
                            </div>
                            <div>
                                <span className="font-medium">Estagiário:</span>
                                <p className="text-muted-foreground">
                                    {session.estagiarioExecutor.nome}
                                </p>
                            </div>
                            <div>
                                <span className="font-medium">Supervisor:</span>
                                <p className="text-muted-foreground">
                                    {session.supervisorExecutor.nome}
                                </p>
                            </div>
                        </div>

                        {session.observacoes && (
                            <div className="text-sm">
                                <span className="font-medium">Observações:</span>
                                <p className="text-muted-foreground mt-1">
                                    {session.observacoes}
                                </p>
                            </div>
                        )}

                        <div className="flex gap-2 pt-2">
                            {/* Na aba de aprovação, mostrar ações específicas */}
                            {showApprovalActions ? (
                                <>
                                    {/* Estagiário pode editar relatório pendente */}
                                    {isEstagiario && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1"
                                            onClick={() =>
                                                router.push(
                                                    `/dashboard/relatorios/${reportType}/${session.id_Atendimento}/edit`,
                                                )
                                            }
                                        >
                                            Editar Relatório
                                        </Button>
                                    )}

                                    {/* Supervisor pode editar ou aprovar */}
                                    {isSupervisor && (
                                        <>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1"
                                                onClick={() =>
                                                    router.push(
                                                        `/dashboard/relatorios/${reportType}/${session.id_Atendimento}/edit`,
                                                    )
                                                }
                                            >
                                                Editar Relatório
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="default"
                                                className="flex-1"
                                                onClick={() =>
                                                    router.push(
                                                        `/dashboard/relatorios/${reportType}/aprovar/${session.id_Atendimento}`,
                                                    )
                                                }
                                            >
                                                Prosseguir para Aprovação
                                            </Button>
                                        </>
                                    )}

                                    {/* Admin/Secretário podem ver ambas ações */}
                                    {userRole && userRole <= 2 && (
                                        <>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1"
                                                onClick={() =>
                                                    router.push(
                                                        `/dashboard/relatorios/${reportType}/${session.id_Atendimento}/edit`,
                                                    )
                                                }
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="default"
                                                className="flex-1"
                                                onClick={() =>
                                                    router.push(
                                                        `/dashboard/relatorios/${reportType}/aprovar/${session.id_Atendimento}`,
                                                    )
                                                }
                                            >
                                                Prosseguir para Aprovação
                                            </Button>
                                        </>
                                    )}
                                </>
                            ) : (
                                <>
                                    {/* Na aba de pendentes, mostrar botão de preencher/editar */}
                                    {isEstagiario && !prontuarioPendente && (
                                        <Button
                                            size="sm"
                                            className="flex-1"
                                            onClick={() =>
                                                router.push(
                                                    `/dashboard/relatorios/${reportType}/${session.id_Atendimento}${hasProntuario ? "/edit" : ""}`,
                                                )
                                            }
                                        >
                                            {hasProntuario
                                                ? "Editar Relatório"
                                                : "Preencher Relatório"}
                                        </Button>
                                    )}

                                    {/* Estagiário vê que relatório está aguardando aprovação */}
                                    {isEstagiario && prontuarioPendente && (
                                        <div className="flex-1 text-sm text-center py-2 bg-yellow-50 rounded-md">
                                            <Clock className="h-4 w-4 inline mr-2" />
                                            Aguardando aprovação do supervisor
                                        </div>
                                    )}

                                    {/* Supervisor pode aprovar se há prontuário pendente */}
                                    {isSupervisor && prontuarioPendente && (
                                        <Button
                                            size="sm"
                                            variant="default"
                                            className="flex-1"
                                            onClick={() =>
                                                router.push(
                                                    `/dashboard/relatorios/${reportType}/aprovar/${session.id_Atendimento}`,
                                                )
                                            }
                                        >
                                            Prosseguir para Aprovação
                                        </Button>
                                    )}

                                    {/* Admin/Secretário podem aprovar se há prontuário pendente */}
                                    {userRole && userRole <= 2 && prontuarioPendente && (
                                        <Button
                                            size="sm"
                                            variant="default"
                                            className="flex-1"
                                            onClick={() =>
                                                router.push(
                                                    `/dashboard/relatorios/${reportType}/aprovar/${session.id_Atendimento}`,
                                                )
                                            }
                                        >
                                            Prosseguir para Aprovação
                                        </Button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Carregando relatórios...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Gestão de Relatórios
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {userRole === 4 &&
                            "Preencha e edite os relatórios das suas sessões"}
                        {userRole === 3 &&
                            "Revise e aprove os relatórios das sessões supervisionadas"}
                        {userRole &&
                            userRole <= 2 &&
                            "Gerencie todos os relatórios do sistema"}
                    </p>
                </div>
            </div>

            {/* Cards de resumo */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActiveTab("triagem-pendente")}
                >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Triagem Pendente
                        </CardTitle>
                        <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{counts.triagemPendente}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Sessões sem relatório
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActiveTab("triagem-aprovacao")}
                >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Triagem - Aprovação
                        </CardTitle>
                        <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{counts.triagemAprovacao}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Aguardando aprovação
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActiveTab("psicoterapia-pendente")}
                >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Psicoterapia Pendente
                        </CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {counts.psicoterapiaPendente}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Sessões sem relatório
                        </p>
                    </CardContent>
                </Card>

                <Card
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setActiveTab("psicoterapia-aprovacao")}
                >
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Psicoterapia - Aprovação
                        </CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {counts.psicoterapiaAprovacao}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Aguardando aprovação
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs para visualizar sessões por categoria */}
            <Tabs
                value={activeTab}
                onValueChange={(v) => setActiveTab(v as TabType)}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger
                        value="triagem-pendente"
                        className="flex items-center gap-2"
                    >
                        <FileText className="w-4 h-4" />
                        Triagem ({counts.triagemPendente})
                    </TabsTrigger>
                    <TabsTrigger
                        value="triagem-aprovacao"
                        className="flex items-center gap-2"
                    >
                        <ClipboardCheck className="w-4 h-4" />
                        Aprovação ({counts.triagemAprovacao})
                    </TabsTrigger>
                    <TabsTrigger
                        value="psicoterapia-pendente"
                        className="flex items-center gap-2"
                    >
                        <Calendar className="w-4 h-4" />
                        Psicoterapia ({counts.psicoterapiaPendente})
                    </TabsTrigger>
                    <TabsTrigger
                        value="psicoterapia-aprovacao"
                        className="flex items-center gap-2"
                    >
                        <CheckCircle2 className="w-4 h-4" />
                        Aprovação ({counts.psicoterapiaAprovacao})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="triagem-pendente" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                Sessões de Triagem Pendentes de Relatório
                            </CardTitle>
                            <CardDescription>
                                Sessões agendadas que precisam ter o relatório de triagem
                                preenchido
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {getTriagemPendente().length === 0 ? (
                                <div className="text-center py-8">
                                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">
                                        Nenhuma sessão de triagem pendente de relatório
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {getTriagemPendente().map((session) => (
                                        <SessionCard
                                            key={session.id_Atendimento}
                                            session={session}
                                        />
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="triagem-aprovacao" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ClipboardCheck className="w-5 h-5" />
                                Relatórios de Triagem Aguardando Aprovação
                            </CardTitle>
                            <CardDescription>
                                Relatórios preenchidos que precisam ser revisados e aprovados
                                pelo supervisor
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {getTriagemAprovacao().length === 0 ? (
                                <div className="text-center py-8">
                                    <ClipboardCheck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">
                                        Nenhum relatório de triagem aguardando aprovação
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {getTriagemAprovacao().map((session) => (
                                        <SessionCard
                                            key={session.id_Atendimento}
                                            session={session}
                                            showApprovalActions={true}
                                        />
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="psicoterapia-pendente" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Sessões de Psicoterapia Pendentes de Relatório
                            </CardTitle>
                            <CardDescription>
                                Sessões agendadas que precisam ter o relatório de evolução
                                preenchido
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {getPsicoterapiaPendente().length === 0 ? (
                                <div className="text-center py-8">
                                    <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">
                                        Nenhuma sessão de psicoterapia pendente de relatório
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {getPsicoterapiaPendente().map((session) => (
                                        <SessionCard
                                            key={session.id_Atendimento}
                                            session={session}
                                        />
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="psicoterapia-aprovacao" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                Relatórios de Psicoterapia Aguardando Aprovação
                            </CardTitle>
                            <CardDescription>
                                Relatórios de evolução que precisam ser revisados e aprovados
                                pelo supervisor
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {getPsicoterapiaAprovacao().length === 0 ? (
                                <div className="text-center py-8">
                                    <CheckCircle2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                    <p className="text-muted-foreground">
                                        Nenhum relatório de psicoterapia aguardando aprovação
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {getPsicoterapiaAprovacao().map((session) => (
                                        <SessionCard
                                            key={session.id_Atendimento}
                                            session={session}
                                            showApprovalActions={true}
                                        />
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
