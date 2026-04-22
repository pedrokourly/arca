"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    ArrowLeft,
    FileText,
    Loader2,
    Calendar,
    User,
    Users,
    CheckCircle2,
    Send,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { apiService } from "@/utils/apiHandler";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/toastErrorHandler";

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
        conteudo: any;
        dataEmissao: string;
    }>;
}

interface ApprovalFormData {
    recebeuAlta: boolean;
    finalidade: string;
    encaminhado: boolean;
    instituicaoEncaminhada: string;
    motivoEncaminhamento: string;
}

export default function ApprovePsicoterapiaPage() {
    const params = useParams();
    const router = useRouter();
    const { data: session } = useSession();
    const sessionId = params.id as string;

    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState<
        "aprovar" | "alta" | "encaminhar" | "ambos"
    >("aprovar");
    const [formData, setFormData] = useState<ApprovalFormData>({
        recebeuAlta: false,
        finalidade: "",
        encaminhado: false,
        instituicaoEncaminhada: "",
        motivoEncaminhamento: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (session?.token && sessionId) {
            fetchSessionData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [session, sessionId]);

    useEffect(() => {
        // Atualiza os valores dos checkboxes baseado na aba ativa
        if (activeTab === "aprovar") {
            setFormData((prev) => ({
                ...prev,
                recebeuAlta: false,
                encaminhado: false,
            }));
        } else if (activeTab === "alta") {
            setFormData((prev) => ({
                ...prev,
                recebeuAlta: true,
                encaminhado: false,
            }));
        } else if (activeTab === "encaminhar") {
            setFormData((prev) => ({
                ...prev,
                recebeuAlta: false,
                encaminhado: true,
            }));
        } else if (activeTab === "ambos") {
            setFormData((prev) => ({
                ...prev,
                recebeuAlta: true,
                encaminhado: true,
            }));
        }
    }, [activeTab]);

    const fetchSessionData = async () => {
        if (!session?.token) return;

        try {
            setLoading(true);
            const data = await apiService.getSessions(session.token);
            const foundSession = data.find(
                (s: SessionData) => s.id_Atendimento === sessionId,
            );

            if (!foundSession) {
                toast.error("Sessão não encontrada.");
                router.push("/dashboard/relatorios");
                return;
            }

            // Verifica se existe um prontuário de psicoterapia pendente (id_Tipo = 2, id_Status = 1)
            const psicoterapiaProntuario = foundSession.Prontuario?.find(
                (p: any) => p.id_Tipo === 2 && p.id_Status === 1,
            );

            if (!psicoterapiaProntuario) {
                toast.error(
                    "Relatório de psicoterapia não encontrado ou já foi aprovado",
                    {
                        description:
                            "Não há relatório pendente de aprovação para esta sessão.",
                    },
                );
                router.push("/dashboard/relatorios");
                return;
            }

            setSessionData(foundSession);
        } catch (error) {
            console.error("Erro ao buscar dados da sessão:", error);
            const { title, description } = getErrorMessage(error);
            toast.error(title, { description });
        } finally {
            setLoading(false);
        }
    };

    const validateForm = (): boolean => {
        const newErrors: { [key: string]: string } = {};

        // Se for apenas aprovar, não precisa de validação
        if (activeTab === "aprovar") {
            setErrors({});
            return true;
        }

        if (activeTab === "alta" || activeTab === "ambos") {
            if (!formData.finalidade.trim()) {
                newErrors.finalidade = "A finalidade é obrigatória para dar alta.";
            } else if (formData.finalidade.trim().length < 20) {
                newErrors.finalidade =
                    "A finalidade deve conter pelo menos 20 caracteres.";
            }
        }

        if (activeTab === "encaminhar" || activeTab === "ambos") {
            if (!formData.instituicaoEncaminhada.trim()) {
                newErrors.instituicaoEncaminhada =
                    "A instituição é obrigatória para encaminhamento.";
            }
            if (!formData.motivoEncaminhamento.trim()) {
                newErrors.motivoEncaminhamento =
                    "O motivo é obrigatório para encaminhamento.";
            } else if (formData.motivoEncaminhamento.trim().length < 20) {
                newErrors.motivoEncaminhamento =
                    "O motivo deve conter pelo menos 20 caracteres.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Por favor, corrija os erros no formulário.");
            return;
        }

        if (!session?.token || !sessionData) {
            toast.error("Sessão não autenticada.");
            return;
        }

        const psicoterapiaProntuario = sessionData.Prontuario?.find(
            (p: any) => p.id_Tipo === 2 && p.id_Status === 1,
        );

        if (!psicoterapiaProntuario) {
            toast.error("Prontuário não encontrado.");
            return;
        }

        try {
            setSubmitting(true);

            const payload: any = {
                recebeuAlta: formData.recebeuAlta,
                encaminhado: formData.encaminhado,
            };

            if (formData.recebeuAlta) {
                payload.finalidade = formData.finalidade.trim();
            }

            if (formData.encaminhado) {
                payload.instituicaoEncaminhada = formData.instituicaoEncaminhada.trim();
                payload.motivoEncaminhamento = formData.motivoEncaminhamento.trim();
            }

            const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/medical-record/psicoterapia/${psicoterapiaProntuario.id_Registro}/approve`;

            const response = await fetch(endpoint, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session.token}`,
                },
                body: JSON.stringify(payload),
            });

            const responseText = await response.text();

            if (!response.ok) {
                let errorData;
                try {
                    errorData = JSON.parse(responseText);
                } catch {
                    errorData = { message: responseText || `Erro ${response.status}` };
                }
                throw new Error(errorData.message || "Erro ao aprovar relatório");
            }

            // Tenta parsear como JSON, se falhar usa como texto
            let result;
            try {
                result = JSON.parse(responseText);
            } catch {
                result = responseText;
            }

            // Mensagem de sucesso baseada na ação
            let successMessage = "Relatório aprovado com sucesso!";
            if (activeTab === "alta") {
                successMessage = "Relatório aprovado e alta concedida com sucesso!";
            } else if (activeTab === "encaminhar") {
                successMessage =
                    "Relatório aprovado e paciente encaminhado com sucesso!";
            } else if (activeTab === "ambos") {
                successMessage =
                    "Relatório aprovado, alta concedida e paciente encaminhado com sucesso!";
            }

            toast.success(successMessage);

            // Redireciona de volta para a página de relatórios
            router.push("/dashboard/relatorios");
        } catch (error: any) {
            console.error("Erro ao aprovar relatório:", error);
            const { title, description } = getErrorMessage(error);
            toast.error(title, { description });
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">
                        Carregando dados da sessão...
                    </p>
                </div>
            </div>
        );
    }

    if (!sessionData) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle>Sessão não encontrada</CardTitle>
                        <CardDescription>
                            A sessão solicitada não foi encontrada.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button
                            onClick={() => router.push("/dashboard/relatorios")}
                            variant="outline"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Voltar para Relatórios
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const psicoterapiaProntuario = sessionData.Prontuario?.find(
        (p: any) => p.id_Tipo === 2 && p.id_Status === 1,
    );

    return (
        <div className="container mx-auto py-6 max-w-4xl">
            <div className="mb-6">
                <Button
                    onClick={() => router.push("/dashboard/relatorios")}
                    variant="ghost"
                    size="sm"
                    className="mb-4"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Voltar para Relatórios
                </Button>

                <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h1 className="text-3xl font-bold">Aprovação de Psicoterapia</h1>
                </div>
                <p className="text-muted-foreground">
                    Revise o relatório e decida o encaminhamento do paciente
                </p>
            </div>

            {/* Informações da Sessão */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-lg">Informações da Sessão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Paciente */}
                    <div>
                        <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Paciente
                        </Label>
                        <div className="mt-1">
                            <p className="font-medium">
                                {sessionData.ListaEspera.nomeSocial ||
                                    sessionData.ListaEspera.nomeRegistro}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {sessionData.ListaEspera.telefonePessoal}
                            </p>
                        </div>
                    </div>

                    <Separator />

                    {/* Data e Horário */}
                    <div>
                        <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Data e Horário
                        </Label>
                        <div className="mt-1 flex items-center gap-2">
                            <p className="font-medium">
                                {format(
                                    new Date(sessionData.dataHoraInicio),
                                    "dd 'de' MMMM 'de' yyyy",
                                    {
                                        locale: ptBR,
                                    },
                                )}
                            </p>
                            <Badge variant="outline">
                                {format(new Date(sessionData.dataHoraInicio), "HH:mm")} -{" "}
                                {format(new Date(sessionData.dataHoraFim), "HH:mm")}
                            </Badge>
                        </div>
                    </div>

                    <Separator />

                    {/* Profissionais */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                                <User className="h-4 w-4" />
                                Estagiário
                            </Label>
                            <p className="mt-1 font-medium">
                                {sessionData.estagiarioExecutor.nome}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {sessionData.estagiarioExecutor.email}
                            </p>
                        </div>

                        <div>
                            <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                Supervisor
                            </Label>
                            <p className="mt-1 font-medium">
                                {sessionData.supervisorExecutor.nome}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {sessionData.supervisorExecutor.email}
                            </p>
                        </div>
                    </div>

                    {/* Observações */}
                    {sessionData.observacoes && (
                        <>
                            <Separator />
                            <div>
                                <Label className="text-sm font-semibold text-muted-foreground">
                                    Observações da Sessão
                                </Label>
                                <p className="mt-1 text-sm whitespace-pre-wrap">
                                    {sessionData.observacoes}
                                </p>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            {/* Relatório do Estagiário */}
            {psicoterapiaProntuario && (
                <Card className="mb-6">
                    <CardHeader>
                        <CardTitle className="text-lg">Relatório de Evolução</CardTitle>
                        <CardDescription>
                            Relatório preenchido pelo estagiário em{" "}
                            {format(
                                new Date(psicoterapiaProntuario.dataEmissao),
                                "dd/MM/yyyy 'às' HH:mm",
                                {
                                    locale: ptBR,
                                },
                            )}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label className="text-sm font-semibold text-muted-foreground">
                                Presença do Paciente
                            </Label>
                            <p className="mt-1">
                                <Badge
                                    variant={
                                        psicoterapiaProntuario.conteudo.presente
                                            ? "default"
                                            : "destructive"
                                    }
                                >
                                    {psicoterapiaProntuario.conteudo.presente
                                        ? "Presente"
                                        : "Ausente"}
                                </Badge>
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <Label className="text-sm font-semibold text-muted-foreground">
                                Relatório da Sessão
                            </Label>
                            <div className="mt-2 p-4 bg-muted rounded-md">
                                <p className="text-sm whitespace-pre-wrap">
                                    {psicoterapiaProntuario.conteudo.relatorioDaSessao}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Formulário de Decisão */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Decisão do Supervisor</CardTitle>
                    <CardDescription>
                        Escolha a ação apropriada para o encaminhamento do paciente
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs
                        value={activeTab}
                        onValueChange={(v) => setActiveTab(v as any)}
                        className="w-full"
                    >
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="aprovar">
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Apenas Aprovar
                            </TabsTrigger>
                            <TabsTrigger value="alta">
                                <CheckCircle2 className="h-4 w-4 mr-2" />
                                Dar Alta
                            </TabsTrigger>
                            <TabsTrigger value="encaminhar">
                                <Send className="h-4 w-4 mr-2" />
                                Encaminhar
                            </TabsTrigger>
                            <TabsTrigger value="ambos">
                                <FileText className="h-4 w-4 mr-2" />
                                Alta + Encaminhamento
                            </TabsTrigger>
                        </TabsList>

                        <form onSubmit={handleSubmit} className="mt-6">
                            {/* Tab de Apenas Aprovar */}
                            <TabsContent value="aprovar" className="space-y-4">
                                <div className="bg-green-50 p-4 rounded-md">
                                    <p className="text-sm text-green-900">
                                        <strong>Aprovar:</strong> O relatório será aprovado sem dar
                                        alta ou encaminhar o paciente. O paciente continuará em
                                        psicoterapia e poderá ter novas sessões agendadas.
                                    </p>
                                </div>
                            </TabsContent>

                            {/* Tab de Alta */}
                            <TabsContent value="alta" className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="finalidade">
                                        Finalidade da Alta{" "}
                                        <span className="text-destructive">*</span>
                                    </Label>
                                    <Textarea
                                        id="finalidade"
                                        placeholder="Descreva os motivos e objetivos alcançados que justificam a alta do paciente..."
                                        value={formData.finalidade}
                                        onChange={(e) =>
                                            setFormData({ ...formData, finalidade: e.target.value })
                                        }
                                        className={`min-h-[150px] ${errors.finalidade ? "border-destructive" : ""}`}
                                    />
                                    {errors.finalidade && (
                                        <p className="text-sm text-destructive">
                                            {errors.finalidade}
                                        </p>
                                    )}
                                    <p className="text-sm text-muted-foreground">
                                        Caracteres: {formData.finalidade.length} (mínimo 20)
                                    </p>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-md">
                                    <p className="text-sm text-blue-900">
                                        <strong>Alta:</strong> O paciente receberá alta e seu status
                                        será atualizado para "Recebeu Alta". Um relatório de alta
                                        será gerado.
                                    </p>
                                </div>
                            </TabsContent>

                            {/* Tab de Encaminhamento */}
                            <TabsContent value="encaminhar" className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="instituicaoEncaminhada">
                                        Instituição de Encaminhamento{" "}
                                        <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="instituicaoEncaminhada"
                                        placeholder="Ex: Hospital Municipal, Clínica Particular..."
                                        value={formData.instituicaoEncaminhada}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                instituicaoEncaminhada: e.target.value,
                                            })
                                        }
                                        className={
                                            errors.instituicaoEncaminhada ? "border-destructive" : ""
                                        }
                                    />
                                    {errors.instituicaoEncaminhada && (
                                        <p className="text-sm text-destructive">
                                            {errors.instituicaoEncaminhada}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="motivoEncaminhamento">
                                        Motivo do Encaminhamento{" "}
                                        <span className="text-destructive">*</span>
                                    </Label>
                                    <Textarea
                                        id="motivoEncaminhamento"
                                        placeholder="Descreva os motivos pelos quais o paciente está sendo encaminhado para outra instituição..."
                                        value={formData.motivoEncaminhamento}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                motivoEncaminhamento: e.target.value,
                                            })
                                        }
                                        className={`min-h-[150px] ${errors.motivoEncaminhamento ? "border-destructive" : ""
                                            }`}
                                    />
                                    {errors.motivoEncaminhamento && (
                                        <p className="text-sm text-destructive">
                                            {errors.motivoEncaminhamento}
                                        </p>
                                    )}
                                    <p className="text-sm text-muted-foreground">
                                        Caracteres: {formData.motivoEncaminhamento.length} (mínimo
                                        20)
                                    </p>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-md">
                                    <p className="text-sm text-orange-900">
                                        <strong>Encaminhamento:</strong> O paciente será encaminhado
                                        para outra instituição. Um relatório de encaminhamento será
                                        gerado.
                                    </p>
                                </div>
                            </TabsContent>

                            {/* Tab de Ambos */}
                            <TabsContent value="ambos" className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="finalidade-ambos">
                                        Finalidade da Alta{" "}
                                        <span className="text-destructive">*</span>
                                    </Label>
                                    <Textarea
                                        id="finalidade-ambos"
                                        placeholder="Descreva os motivos e objetivos alcançados que justificam a alta do paciente..."
                                        value={formData.finalidade}
                                        onChange={(e) =>
                                            setFormData({ ...formData, finalidade: e.target.value })
                                        }
                                        className={`min-h-[120px] ${errors.finalidade ? "border-destructive" : ""}`}
                                    />
                                    {errors.finalidade && (
                                        <p className="text-sm text-destructive">
                                            {errors.finalidade}
                                        </p>
                                    )}
                                    <p className="text-sm text-muted-foreground">
                                        Caracteres: {formData.finalidade.length} (mínimo 20)
                                    </p>
                                </div>

                                <Separator />

                                <div className="space-y-2">
                                    <Label htmlFor="instituicaoEncaminhada-ambos">
                                        Instituição de Encaminhamento{" "}
                                        <span className="text-destructive">*</span>
                                    </Label>
                                    <Input
                                        id="instituicaoEncaminhada-ambos"
                                        placeholder="Ex: Hospital Municipal, Clínica Particular..."
                                        value={formData.instituicaoEncaminhada}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                instituicaoEncaminhada: e.target.value,
                                            })
                                        }
                                        className={
                                            errors.instituicaoEncaminhada ? "border-destructive" : ""
                                        }
                                    />
                                    {errors.instituicaoEncaminhada && (
                                        <p className="text-sm text-destructive">
                                            {errors.instituicaoEncaminhada}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="motivoEncaminhamento-ambos">
                                        Motivo do Encaminhamento{" "}
                                        <span className="text-destructive">*</span>
                                    </Label>
                                    <Textarea
                                        id="motivoEncaminhamento-ambos"
                                        placeholder="Descreva os motivos pelos quais o paciente está sendo encaminhado..."
                                        value={formData.motivoEncaminhamento}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                motivoEncaminhamento: e.target.value,
                                            })
                                        }
                                        className={`min-h-[120px] ${errors.motivoEncaminhamento ? "border-destructive" : ""
                                            }`}
                                    />
                                    {errors.motivoEncaminhamento && (
                                        <p className="text-sm text-destructive">
                                            {errors.motivoEncaminhamento}
                                        </p>
                                    )}
                                    <p className="text-sm text-muted-foreground">
                                        Caracteres: {formData.motivoEncaminhamento.length} (mínimo
                                        20)
                                    </p>
                                </div>

                                <div className="bg-green-50 p-4 rounded-md">
                                    <p className="text-sm text-green-900">
                                        <strong>Alta + Encaminhamento:</strong> O paciente receberá
                                        alta e será encaminhado para outra instituição. Ambos os
                                        relatórios serão gerados.
                                    </p>
                                </div>
                            </TabsContent>

                            {/* Botões de Ação */}
                            <div className="flex gap-4 pt-6">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push("/dashboard/relatorios")}
                                    disabled={submitting}
                                >
                                    Cancelar
                                </Button>
                                <Button type="submit" disabled={submitting}>
                                    {submitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Processando...
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 className="mr-2 h-4 w-4" />
                                            {activeTab === "aprovar" && "Aprovar Relatório"}
                                            {activeTab === "alta" && "Aprovar e Dar Alta"}
                                            {activeTab === "encaminhar" && "Aprovar e Encaminhar"}
                                            {activeTab === "ambos" &&
                                                "Aprovar, Dar Alta e Encaminhar"}
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Tabs>
                </CardContent>
            </Card>

            {/* Informação Adicional */}
            <Card className="mt-6 border-yellow-200">
                <CardContent className="pt-6">
                    <div className="flex gap-3">
                        <div className="rounded-full bg-yellow-100 p-2 h-fit">
                            <FileText className="h-5 w-5 text-yellow-700" />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1 text-yellow-900">Atenção</h4>
                            <p className="text-sm text-yellow-800">
                                Esta ação é irreversível. Após a aprovação, o relatório será
                                marcado como aprovado e os documentos pertinentes (alta e/ou
                                encaminhamento) serão gerados. O status do paciente na lista de
                                espera será atualizado conforme a decisão tomada.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
