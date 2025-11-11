"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  FileText, 
  User, 
  Calendar, 
  Phone, 
  CheckCircle2,
  Clock,
  Send,
  Download,
  Loader2
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/toastErrorHandler";

interface ProntuarioData {
  id_Registro: string;
  conteudo: {presente?: boolean; relatorioDaSessao?: string; finalidade?: string; instituicaoEncaminhada?: string; motivoEncaminhamento?: string};
  dataEmissao: string;
  id_Status: number;
  id_Tipo: number;
  ultimaAtualizacao: string;
  status: { nome: string };
  TipoProntuario: { nome: string };
}

interface AtendimentoData {
  dataHoraInicio: string;
  supervisorExecutor: {
    nome: string;
    CRP: string;
  };
  estagiarioExecutor: {
    nome: string;
  };
  Prontuario: ProntuarioData[];
}

interface PatientData {
  id_Lista: string;
  nomeRegistro: string;
  nomeSocial?: string;
  CPF: string;
  telefonePessoal: string;
  dataNascimento: string;
  id_Status: number;
  Status: { nome: string };
  Atendimento: AtendimentoData[];
}

const STATUS_MAP = {
  1: { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
  2: { label: 'Aprovado', color: 'bg-green-100 text-green-800' }
};

const TIPO_PRONTUARIO_MAP = {
  1: { label: 'Triagem', color: 'bg-blue-100 text-blue-800', icon: Clock },
  2: { label: 'Psicoterapia', color: 'bg-purple-100 text-purple-800', icon: User },
  3: { label: 'Alta', color: 'bg-green-100 text-green-800', icon: CheckCircle2 },
  4: { label: 'Encaminhamento', color: 'bg-orange-100 text-orange-800', icon: Send }
};

export default function PatientDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const patientId = params.id as string;

  const [patientData, setPatientData] = useState<PatientData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPatientData = useCallback(async () => {
    try {
      setLoading(true);
      const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/medical-record/prontuarios/${patientId}`;
      
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar dados do paciente");
      }

      const data = await response.json();
      setPatientData(data);
    } catch (error) {
      console.error("Erro ao buscar dados do paciente:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    } finally {
      setLoading(false);
    }
  }, [session?.token, patientId]);

  useEffect(() => {
    if (session?.token && patientId) {
      fetchPatientData();
    }
  }, [session?.token, patientId, fetchPatientData]);

  const getProntuariosByType = (tipo: number) => {
    if (!patientData) return [];
    
    const prontuarios: ProntuarioData[] = [];
    patientData.Atendimento.forEach(atendimento => {
      atendimento.Prontuario.forEach(prontuario => {
        if (prontuario.id_Tipo === tipo) {
          prontuarios.push(prontuario);
        }
      });
    });
    
    return prontuarios;
  };

  const downloadPDF = async (id: string, tipo: number) => {
    try {
      let endpoint = "";
      let filename = "";
      
      // Normalizar o nome do paciente para o nome do arquivo (remover espaços e caracteres especiais)
      const normalizedName = patientData?.nomeRegistro
        .toLowerCase()
        .replace(/\s+/g, '_')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') || 'paciente';
      
      if (tipo === 3) {
        endpoint = `${process.env.NEXT_PUBLIC_API_URL}/medical-record/prontuarios/alta/pdf/${id}`;
        filename = `relatorio_alta_${normalizedName}.pdf`;
      } else if (tipo === 4) {
        endpoint = `${process.env.NEXT_PUBLIC_API_URL}/medical-record/prontuarios/encaminhamento/pdf/${id}`;
        filename = `relatorio_encaminhamento_${normalizedName}.pdf`;
      } else {
        endpoint = `${process.env.NEXT_PUBLIC_API_URL}/medical-record/prontuarios/pdf/${id}`;
        filename = `prontuario_${normalizedName}.pdf`;
      }

      console.log("Baixando PDF:", { endpoint, id, tipo });

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro ao baixar PDF:", response.status, errorText);
        throw new Error(`Erro ao baixar PDF: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast.success("PDF baixado com sucesso!");
    } catch (error) {
      console.error("Erro ao baixar PDF:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">Carregando dados do paciente...</p>
        </div>
      </div>
    );
  }

  if (!patientData) {
    return (
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="w-12 h-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Paciente não encontrado</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => router.push("/dashboard/pacientes")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Pacientes
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalTriagens = getProntuariosByType(1).length;
  const totalPsicoterapias = getProntuariosByType(2).length;
  const totalAltas = getProntuariosByType(3).length;
  const totalEncaminhamentos = getProntuariosByType(4).length;

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/dashboard/pacientes")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Pacientes
        </Button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {patientData.nomeRegistro}
            </h1>
            {patientData.nomeSocial && (
              <p className="text-muted-foreground">
                Nome Social: {patientData.nomeSocial}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Informações do Paciente */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Status Atual
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline" className="text-base">
              {patientData.Status.nome}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Data de Nascimento
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium">
              {format(new Date(patientData.dataNascimento), "dd/MM/yyyy", { locale: ptBR })}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Telefone
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium">{patientData.telefonePessoal}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              CPF
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base font-medium">{patientData.CPF}</p>
          </CardContent>
        </Card>
      </div>

      {/* Botões de Download de PDFs */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Exportar Documentos</CardTitle>
          <CardDescription>
            Baixe os relatórios e documentos do prontuário
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => downloadPDF(patientId, 0)}
              disabled={patientData.Atendimento.length === 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Exportar Prontuário Completo
            </Button>

            {totalAltas > 0 && (
              <Button
                variant="outline"
                onClick={() => downloadPDF(patientId, 3)}
              >
                <Download className="h-4 w-4 mr-2" />
                Exportar Relatório de Alta
              </Button>
            )}

            {totalEncaminhamentos > 0 && (
              <div className="flex gap-2 flex-wrap">
                {getProntuariosByType(4).map((encaminhamento, idx) => (
                  <Button
                    key={encaminhamento.id_Registro}
                    variant="outline"
                    onClick={() => downloadPDF(encaminhamento.id_Registro, 4)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Exportar Encaminhamento
                    {totalEncaminhamentos > 1 && ` #${idx + 1}`}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Estatísticas de Prontuários */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600" />
              Triagens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalTriagens}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4 text-purple-600" />
              Psicoterapias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalPsicoterapias}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              Altas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalAltas}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Send className="h-4 w-4 text-orange-600" />
              Encaminhamentos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalEncaminhamentos}</p>
          </CardContent>
        </Card>
      </div>

      {/* Prontuários */}
      <Card>
        <CardHeader>
          <CardTitle>Prontuário Médico</CardTitle>
          <CardDescription>
            Histórico completo de atendimentos e documentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">
                Todos ({patientData.Atendimento.reduce((acc, atd) => acc + atd.Prontuario.length, 0)})
              </TabsTrigger>
              <TabsTrigger value="triagem">Triagens ({totalTriagens})</TabsTrigger>
              <TabsTrigger value="psicoterapia">Psicoterapias ({totalPsicoterapias})</TabsTrigger>
              <TabsTrigger value="alta">Altas ({totalAltas})</TabsTrigger>
              <TabsTrigger value="encaminhamento">Encaminhamentos ({totalEncaminhamentos})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4 mt-4">
              {patientData.Atendimento.map((atendimento, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          Atendimento - {format(new Date(atendimento.dataHoraInicio), "dd/MM/yyyy", { locale: ptBR })}
                        </CardTitle>
                        <CardDescription>
                          Supervisor: {atendimento.supervisorExecutor.nome} (CRP: {atendimento.supervisorExecutor.CRP})
                          <br />
                          Estagiário: {atendimento.estagiarioExecutor.nome}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {atendimento.Prontuario.map((prontuario) => {
                      const tipoInfo = TIPO_PRONTUARIO_MAP[prontuario.id_Tipo as keyof typeof TIPO_PRONTUARIO_MAP];
                      const statusInfo = STATUS_MAP[prontuario.id_Status as keyof typeof STATUS_MAP];
                      const Icon = tipoInfo?.icon || FileText;

                      return (
                        <div key={prontuario.id_Registro} className="border rounded-lg p-4">
                          <div className="flex items-start gap-2 mb-3">
                            <Icon className="h-5 w-5 mt-0.5" />
                            <div>
                              <Badge className={tipoInfo?.color}>
                                {tipoInfo?.label || prontuario.TipoProntuario.nome}
                              </Badge>
                              <Badge className={`ml-2 ${statusInfo?.color}`}>
                                {statusInfo?.label || prontuario.status.nome}
                              </Badge>
                            </div>
                          </div>
                          
                          <Separator className="my-3" />
                          
                          <div className="space-y-2 text-sm">
                            <p className="text-muted-foreground">
                              Data de Emissão: {format(new Date(prontuario.dataEmissao), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                            </p>
                            
                            {/* Conteúdo específico por tipo */}
                            {prontuario.id_Tipo === 1 || prontuario.id_Tipo === 2 ? (
                              <div className="mt-3">
                                <p className="font-medium mb-1">Relatório da Sessão:</p>
                                <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                                  {prontuario.conteudo.relatorioDaSessao}
                                </div>
                                <p className="mt-2">
                                  <span className="font-medium">Presença:</span>{" "}
                                  <Badge variant={prontuario.conteudo.presente ? "default" : "destructive"}>
                                    {prontuario.conteudo.presente ? "Presente" : "Ausente"}
                                  </Badge>
                                </p>
                              </div>
                            ) : prontuario.id_Tipo === 3 ? (
                              <div className="mt-3">
                                <p className="font-medium mb-1">Finalidade da Alta:</p>
                                <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                                  {prontuario.conteudo.finalidade}
                                </div>
                              </div>
                            ) : prontuario.id_Tipo === 4 ? (
                              <div className="mt-3 space-y-2">
                                <div>
                                  <p className="font-medium">Instituição:</p>
                                  <p className="text-muted-foreground">{prontuario.conteudo.instituicaoEncaminhada}</p>
                                </div>
                                <div>
                                  <p className="font-medium mb-1">Motivo do Encaminhamento:</p>
                                  <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                                    {prontuario.conteudo.motivoEncaminhamento}
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              ))}
              
              {patientData.Atendimento.length === 0 && (
                <div className="text-center py-12">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Nenhum registro encontrado</p>
                </div>
              )}
            </TabsContent>

            {/* Filtros por tipo */}
            {[1, 2, 3, 4].map((tipo) => {
              const tabValue = tipo === 1 ? 'triagem' : tipo === 2 ? 'psicoterapia' : tipo === 3 ? 'alta' : 'encaminhamento';
              const prontuarios = getProntuariosByType(tipo);
              
              return (
                <TabsContent key={tipo} value={tabValue} className="space-y-4 mt-4">
                  {prontuarios.length > 0 ? (
                    prontuarios.map((prontuario) => {
                      const tipoInfo = TIPO_PRONTUARIO_MAP[prontuario.id_Tipo as keyof typeof TIPO_PRONTUARIO_MAP];
                      const statusInfo = STATUS_MAP[prontuario.id_Status as keyof typeof STATUS_MAP];
                      const Icon = tipoInfo?.icon || FileText;

                      return (
                        <Card key={prontuario.id_Registro}>
                          <CardContent className="pt-6">
                            <div className="flex items-start gap-2 mb-3">
                              <Icon className="h-5 w-5 mt-0.5" />
                              <div>
                                <Badge className={tipoInfo?.color}>
                                  {tipoInfo?.label || prontuario.TipoProntuario.nome}
                                </Badge>
                                <Badge className={`ml-2 ${statusInfo?.color}`}>
                                  {statusInfo?.label || prontuario.status.nome}
                                </Badge>
                              </div>
                            </div>
                            
                            <Separator className="my-3" />
                            
                            <div className="space-y-2 text-sm">
                              <p className="text-muted-foreground">
                                Data de Emissão: {format(new Date(prontuario.dataEmissao), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                              </p>
                              
                              {/* Conteúdo específico por tipo */}
                              {(prontuario.id_Tipo === 1 || prontuario.id_Tipo === 2) && (
                                <div className="mt-3">
                                  <p className="font-medium mb-1">Relatório da Sessão:</p>
                                  <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                                    {prontuario.conteudo.relatorioDaSessao}
                                  </div>
                                  <p className="mt-2">
                                    <span className="font-medium">Presença:</span>{" "}
                                    <Badge variant={prontuario.conteudo.presente ? "default" : "destructive"}>
                                      {prontuario.conteudo.presente ? "Presente" : "Ausente"}
                                    </Badge>
                                  </p>
                                </div>
                              )}
                              {prontuario.id_Tipo === 3 && (
                                <div className="mt-3">
                                  <p className="font-medium mb-1">Finalidade da Alta:</p>
                                  <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                                    {prontuario.conteudo.finalidade}
                                  </div>
                                </div>
                              )}
                              {prontuario.id_Tipo === 4 && (
                                <div className="mt-3 space-y-2">
                                  <div>
                                    <p className="font-medium">Instituição:</p>
                                    <p className="text-muted-foreground">{prontuario.conteudo.instituicaoEncaminhada}</p>
                                  </div>
                                  <div>
                                    <p className="font-medium mb-1">Motivo do Encaminhamento:</p>
                                    <div className="bg-muted p-3 rounded-md whitespace-pre-wrap">
                                      {prontuario.conteudo.motivoEncaminhamento}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })
                  ) : (
                    <div className="text-center py-12">
                      <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Nenhum registro deste tipo encontrado</p>
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
