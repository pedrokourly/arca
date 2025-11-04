"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Loader2, 
  Calendar, 
  User, 
  Users, 
  FileText,
  UserPlus,
  UserCheck,
  Send
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { apiService, apiRequest, API_ENDPOINTS } from "@/utils/apiHandler";
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
    dataEmissao: string;
    conteudo: {
      relatorioDaSessao: string;
      presente: boolean;
    };
  }>;
}

type DecisaoType = "psicoterapia" | "encaminhar" | "alta";

export default function AprovarTriagemPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const sessionId = params.id as string;

  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [decisao, setDecisao] = useState<DecisaoType>("psicoterapia");
  
  // Dados para encaminhamento
  const [instituicaoEncaminhada, setInstituicaoEncaminhada] = useState("");
  const [motivoEncaminhamento, setMotivoEncaminhamento] = useState("");
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (session?.token && sessionId) {
      fetchSessionData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, sessionId]);

  const fetchSessionData = async () => {
    if (!session?.token) return;

    try {
      setLoading(true);
      const data = await apiService.getSessions(session.token);
      const foundSession = data.find((s: SessionData) => s.id_Atendimento === sessionId);

      if (!foundSession) {
        toast.error("Sessão não encontrada.");
        router.push("/dashboard/relatorios");
        return;
      }

      // Verifica se existe um prontuário de triagem pendente
      const triagemProntuario = foundSession.Prontuario?.find((p: any) => p.id_Tipo === 1 && p.id_Status === 1);
      if (!triagemProntuario) {
        toast.error("Não há relatório de triagem pendente de aprovação para esta sessão.");
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

    if (decisao === "encaminhar") {
      if (!instituicaoEncaminhada.trim()) {
        newErrors.instituicaoEncaminhada = "O nome da instituição é obrigatório.";
      }
      if (!motivoEncaminhamento.trim()) {
        newErrors.motivoEncaminhamento = "O motivo do encaminhamento é obrigatório.";
      } else if (motivoEncaminhamento.trim().length < 20) {
        newErrors.motivoEncaminhamento = "O motivo deve conter pelo menos 20 caracteres.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Por favor, corrija os erros no formulário.");
      return;
    }

    if (!session?.token) {
      toast.error("Sessão não autenticada.");
      return;
    }

    if (!sessionData?.Prontuario) {
      toast.error("Prontuário não encontrado.");
      return;
    }

    const triagemProntuario = sessionData.Prontuario.find(p => p.id_Tipo === 1 && p.id_Status === 1);
    if (!triagemProntuario) {
      toast.error("Prontuário de triagem não encontrado.");
      return;
    }

    try {
      setSubmitting(true);

      let payload;
      
      if (decisao === "encaminhar") {
        // Encaminhar para outra instituição
        payload = {
          encaminhado: true,
          instituicaoEncaminhada: instituicaoEncaminhada.trim(),
          motivoEncaminhamento: motivoEncaminhamento.trim(),
        };
      } else {
        // Aprovar para psicoterapia (não encaminha)
        payload = {
          encaminhado: false,
        };
      }

      const response = await fetch(`${API_ENDPOINTS.medicalRecord}/triagem/${triagemProntuario.id_Registro}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${session.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = errorText;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || errorText;
        } catch {
          // Se não for JSON, usa o texto direto
        }
        throw new Error(errorMessage);
      }

      // Tenta parsear como JSON, mas se falhar, aceita como texto
      let result;
      const responseText = await response.text();
      try {
        result = JSON.parse(responseText);
      } catch {
        // Se não for JSON, é uma mensagem de sucesso em texto
        result = responseText;
      }

      if (decisao === "encaminhar") {
        toast.success("Paciente encaminhado com sucesso!");
      } else {
        toast.success("Triagem aprovada! O paciente está apto para psicoterapia.");
      }

      // Redireciona de volta para a página de relatórios
      router.push("/dashboard/relatorios");
    } catch (error: any) {
      console.error("Erro ao aprovar triagem:", error);
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
          <p className="text-sm text-muted-foreground">Carregando dados da sessão...</p>
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
            <CardDescription>A sessão solicitada não foi encontrada.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push("/dashboard/relatorios")} variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para Relatórios
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const triagemProntuario = sessionData.Prontuario?.find(p => p.id_Tipo === 1);

  return (
    <div className="container mx-auto py-6 max-w-5xl">
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
          <h1 className="text-3xl font-bold">Aprovar Relatório de Triagem</h1>
        </div>
        <p className="text-muted-foreground">
          Revise o relatório e decida o encaminhamento adequado para o paciente
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
                {sessionData.ListaEspera.nomeSocial || sessionData.ListaEspera.nomeRegistro}
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
                {format(new Date(sessionData.dataHoraInicio), "dd 'de' MMMM 'de' yyyy", {
                  locale: ptBR,
                })}
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
              <p className="mt-1 font-medium">{sessionData.estagiarioExecutor.nome}</p>
              <p className="text-sm text-muted-foreground">{sessionData.estagiarioExecutor.email}</p>
            </div>

            <div>
              <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                <Users className="h-4 w-4" />
                Supervisor
              </Label>
              <p className="mt-1 font-medium">{sessionData.supervisorExecutor.nome}</p>
              <p className="text-sm text-muted-foreground">{sessionData.supervisorExecutor.email}</p>
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
                <p className="mt-1 text-sm whitespace-pre-wrap">{sessionData.observacoes}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Relatório de Triagem */}
      {triagemProntuario && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Relatório de Triagem
            </CardTitle>
            <CardDescription>
              Preenchido em {format(new Date(triagemProntuario.dataEmissao), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Presença */}
            <div>
              <Label className="text-sm font-semibold">Presença do Paciente</Label>
              <div className="mt-1">
                <Badge variant={triagemProntuario.conteudo.presente ? "default" : "destructive"}>
                  {triagemProntuario.conteudo.presente ? "Presente" : "Ausente"}
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Relatório */}
            <div>
              <Label className="text-sm font-semibold">Relatório da Sessão</Label>
              <div className="mt-2 p-4 bg-muted rounded-md">
                <p className="text-sm whitespace-pre-wrap">
                  {triagemProntuario.conteudo.relatorioDaSessao}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Decisão de Encaminhamento */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Decisão de Encaminhamento</CardTitle>
          <CardDescription>
            Escolha o próximo passo para o paciente após a triagem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={decisao} onValueChange={(v) => setDecisao(v as DecisaoType)}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="psicoterapia" className="flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                Aprovar para Psicoterapia
              </TabsTrigger>
              <TabsTrigger value="encaminhar" className="flex items-center gap-2">
                <Send className="h-4 w-4" />
                Encaminhar
              </TabsTrigger>
            </TabsList>

            <TabsContent value="psicoterapia" className="mt-6">
              <div className="space-y-4">
                <div className="rounded-lg border border-primary/50 bg-primary/5 p-4">
                  <div className="flex gap-3">
                    <UserCheck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Aprovar para Psicoterapia</h4>
                      <p className="text-sm text-muted-foreground">
                        O paciente será marcado como apto para iniciar o processo de psicoterapia.
                        O status será alterado para <strong>"Triagem Aprovada"</strong> e será possível
                        agendar sessões de psicoterapia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/dashboard/relatorios")}
                    disabled={submitting}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={submitting}
                    className="flex-1"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Aprovando...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Aprovar para Psicoterapia
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="encaminhar" className="mt-6">
              <div className="space-y-6">
                <div className="rounded-lg border border-orange-500/50 bg-orange-500/5 p-4">
                  <div className="flex gap-3">
                    <Send className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold mb-1">Encaminhar para Outra Instituição</h4>
                      <p className="text-sm text-muted-foreground">
                        O paciente será encaminhado para atendimento em outra instituição.
                        O status será alterado para <strong>"Encaminhado"</strong> e não será possível
                        agendar novas sessões.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instituição */}
                <div className="space-y-2">
                  <Label htmlFor="instituicaoEncaminhada">
                    Instituição de Destino <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="instituicaoEncaminhada"
                    placeholder="Nome da instituição para onde o paciente será encaminhado"
                    value={instituicaoEncaminhada}
                    onChange={(e) => setInstituicaoEncaminhada(e.target.value)}
                    className={errors.instituicaoEncaminhada ? "border-destructive" : ""}
                  />
                  {errors.instituicaoEncaminhada && (
                    <p className="text-sm text-destructive">{errors.instituicaoEncaminhada}</p>
                  )}
                </div>

                {/* Motivo */}
                <div className="space-y-2">
                  <Label htmlFor="motivoEncaminhamento">
                    Motivo do Encaminhamento <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="motivoEncaminhamento"
                    placeholder="Descreva o motivo pelo qual o paciente está sendo encaminhado para outra instituição..."
                    value={motivoEncaminhamento}
                    onChange={(e) => setMotivoEncaminhamento(e.target.value)}
                    className={`min-h-[150px] ${errors.motivoEncaminhamento ? "border-destructive" : ""}`}
                  />
                  {errors.motivoEncaminhamento && (
                    <p className="text-sm text-destructive">{errors.motivoEncaminhamento}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    Caracteres: {motivoEncaminhamento.length} (mínimo 20)
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/dashboard/relatorios")}
                    disabled={submitting}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={submitting}
                    variant="destructive"
                    className="flex-1"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Encaminhando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Encaminhar Paciente
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
