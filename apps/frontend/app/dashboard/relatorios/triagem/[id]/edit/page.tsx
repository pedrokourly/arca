"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, FileText, Loader2, Calendar, User, Users, AlertCircle } from "lucide-react";
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

interface TriagemFormData {
  relatorioDaSessao: string;
  presente: boolean;
}

export default function EditTriagemReportPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const sessionId = params.id as string;

  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState<TriagemFormData>({
    relatorioDaSessao: "",
    presente: true,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [prontuarioId, setProntuarioId] = useState<string | null>(null);

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

      // Verifica se já existe um prontuário de triagem
      const triagemProntuario = foundSession.Prontuario?.find((p: any) => p.id_Tipo === 1);
      
      if (!triagemProntuario) {
        toast.error("Relatório de triagem não encontrado", {
          description: "O estagiário precisa criar o relatório primeiro antes de editá-lo.",
        });
        router.push("/dashboard/relatorios");
        return;
      }

      // Preenche o formulário com os dados existentes
      setFormData({
        relatorioDaSessao: triagemProntuario.conteudo.relatorioDaSessao || "",
        presente: triagemProntuario.conteudo.presente ?? true,
      });
      setProntuarioId(triagemProntuario.id_Registro);

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

    if (!formData.relatorioDaSessao.trim()) {
      newErrors.relatorioDaSessao = "O relatório da sessão é obrigatório.";
    } else if (formData.relatorioDaSessao.trim().length < 50) {
      newErrors.relatorioDaSessao = "O relatório deve conter pelo menos 50 caracteres.";
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

    if (!session?.token || !prontuarioId) {
      toast.error("Sessão não autenticada ou prontuário não encontrado.");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        relatorioDaSessao: formData.relatorioDaSessao.trim(),
        presente: formData.presente,
      };

      await apiService.updateMedicalRecordTriagem(prontuarioId, payload, session.token);

      toast.success("Relatório de triagem atualizado com sucesso!");

      // Redireciona de volta para a página de relatórios
      router.push("/dashboard/relatorios");
    } catch (error: any) {
      console.error("Erro ao atualizar relatório:", error);
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
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Editar Relatório de Triagem</h1>
        </div>
        <p className="text-muted-foreground">
          Atualize as informações do relatório de triagem
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

          {/* Data de Emissão do Relatório */}
          {triagemProntuario && (
            <>
              <Separator />
              <div>
                <Label className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Relatório Criado em
                </Label>
                <p className="mt-1 font-medium">
                  {format(new Date(triagemProntuario.dataEmissao), "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
                    locale: ptBR,
                  })}
                </p>
              </div>
            </>
          )}

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

      {/* Formulário de Triagem */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Relatório de Triagem</CardTitle>
          <CardDescription>
            Edite os dados referentes à sessão de triagem
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Presença */}
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox
                id="presente"
                checked={formData.presente}
                onCheckedChange={(checked: boolean) =>
                  setFormData({ ...formData, presente: checked })
                }
              />
              <div className="space-y-1 leading-none">
                <Label
                  htmlFor="presente"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Paciente presente na sessão
                </Label>
                <p className="text-sm text-muted-foreground">
                  Marque esta caixa se o paciente compareceu à sessão agendada
                </p>
              </div>
            </div>

            {/* Relatório da Sessão */}
            <div className="space-y-2">
              <Label htmlFor="relatorioDaSessao">
                Relatório da Sessão <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="relatorioDaSessao"
                placeholder="Descreva detalhadamente o que ocorreu durante a sessão de triagem, incluindo observações sobre o paciente, temas abordados, avaliação inicial e recomendações..."
                value={formData.relatorioDaSessao}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData({ ...formData, relatorioDaSessao: e.target.value })
                }
                className={`min-h-[300px] ${errors.relatorioDaSessao ? "border-destructive" : ""}`}
              />
              {errors.relatorioDaSessao && (
                <p className="text-sm text-destructive">{errors.relatorioDaSessao}</p>
              )}
              <p className="text-sm text-muted-foreground">
                Caracteres: {formData.relatorioDaSessao.length} (mínimo 50)
              </p>
            </div>

            {/* Botões de Ação */}
            <div className="flex gap-4 pt-4">
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
                    Atualizando...
                  </>
                ) : (
                  <>
                    <FileText className="mr-2 h-4 w-4" />
                    Atualizar Relatório
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Informações sobre o próximo passo */}
      <Card className="mt-6 border-primary/50">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <div className="rounded-full bg-primary/10 p-2 h-fit">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Próximo Passo</h4>
              <p className="text-sm text-muted-foreground">
                Após atualizar o relatório, ele continuará disponível para aprovação pelo supervisor.
                O supervisor poderá então decidir o encaminhamento adequado para o paciente.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
