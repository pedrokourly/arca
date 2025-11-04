"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Clock, CheckCircle, Calendar, ArrowUpNarrowWide } from "lucide-react";
import { toast } from "sonner";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";

interface WaitlistItem {
  id_Lista: string;
  nomeRegistro: string;
  nomeSocial?: string;
  CPF: string;
  dataNascimento: string;
  telefonePessoal: string;
  contatoEmergencia: string;
  enderecoRua: string;
  enderecoNumero: string;
  enderecoBairro: string;
  enderecoCidade: string;
  enderecoEstado: string;
  enderecoCEP: string;
  createdAt: string;
  id_Status: number;
  id_Genero: number;
  id_Etnia: number;
  id_Escolaridade: number;
}

// Mapeamento dos status da lista de espera
const STATUS_MAP = {
  2: { 
    label: 'Em Triagem', 
    variant: 'default' as const, 
    color: 'bg-blue-100 text-blue-800',
    icon: Clock,
    description: 'Paciente em processo de triagem'
  },
  3: { 
    label: 'Triagem concluida', 
    variant: 'default' as const, 
    color: 'bg-yellow-100 text-yellow-800',
    icon: CheckCircle,
    description: 'Paciente com triagem concluida, esperando encaminhamento ou início da psicoterapia'
  },
  4: { 
    label: 'Em Psicoterapia', 
    variant: 'default' as const, 
    color: 'bg-purple-100 text-purple-800',
    icon: Calendar,
    description: 'Paciente em processo de psicoterapia'
  }
};

export default function FluxoAtendimento() {
  const { data: session } = useSession();
  const [waitlistData, setWaitlistData] = useState<WaitlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("2");

  // Função para buscar dados da lista de espera
  const fetchWaitlistData = async () => {
    try {
      setLoading(true);
      
      if (!session?.token) {
        throw new Error("Token de autenticação não encontrado");
      }

      const data = await apiRequest(API_ENDPOINTS.waitlist, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.token}`,
        },
      });
      
      // Filtrar apenas pacientes nos status 2, 3 e 4 (fluxo de atendimento)
      const filteredData = data.filter((item: WaitlistItem) => 
        [2, 3, 4].includes(item.id_Status)
      );
      
      setWaitlistData(filteredData);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.token) {
      fetchWaitlistData();
    }
  }, [session]);

  // Filtrar dados por status
  const getPatientsByStatus = (status: number) => {
    return waitlistData.filter(item => item.id_Status === status);
  };

  // Contar pacientes por status
  const getStatusCounts = () => {
    return {
      2: getPatientsByStatus(2).length, // Em Triagem
      3: getPatientsByStatus(3).length, // Triagem Aprovada
      4: getPatientsByStatus(4).length, // Em Psicoterapia
    };
  };

  const statusCounts = getStatusCounts();

  // Componente para renderizar card de paciente
  const PatientCard = ({ patient }: { patient: WaitlistItem }) => {
    const statusInfo = STATUS_MAP[patient.id_Status as keyof typeof STATUS_MAP];
    const Icon = statusInfo.icon;

    return (
      <Card className="mb-4 hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <CardTitle className="text-lg">{patient.nomeRegistro}</CardTitle>
              {patient.nomeSocial && (
                <Badge variant="outline" className="text-xs">
                  {patient.nomeSocial}
                </Badge>
              )}
            </div>
            <Badge className={statusInfo.color}>
              <Icon className="w-3 h-3 mr-1" />
              {statusInfo.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">CPF:</span> {patient.CPF}
            </div>
            <div>
              <span className="font-medium">Telefone:</span> {patient.telefonePessoal}
            </div>
            <div>
              <span className="font-medium">Data de Nascimento:</span>{" "}
              {new Date(patient.dataNascimento).toLocaleDateString("pt-BR")}
            </div>
            <div>
              <span className="font-medium">Data de Inscrição:</span>{" "}
              {new Date(patient.createdAt).toLocaleDateString("pt-BR")}
            </div>
            <div>
              <span className="font-medium">Endereço:</span>{" "}
              {`${patient.enderecoRua}, ${patient.enderecoNumero} - ${patient.enderecoBairro}, ${patient.enderecoCidade}/${patient.enderecoEstado}`}
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
          <p className="mt-4 text-gray-600">Carregando fluxo de atendimento...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <ArrowUpNarrowWide className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Fluxo de atendimentos
            </h1>
            <p className="text-muted-foreground text-lg">
              Confira o status dos pacientes em triagem e psicoterapia
            </p>
          </div>
        </div>

      {/* Cards de resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {Object.entries(STATUS_MAP).map(([status, info]) => {
          const count = statusCounts[Number(status) as keyof typeof statusCounts];
          const Icon = info.icon;
          
          return (
            <Card key={status} className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setActiveTab(status)}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {info.label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{count}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs para visualizar pacientes por status */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {Object.entries(STATUS_MAP).map(([status, info]) => {
            const count = statusCounts[Number(status) as keyof typeof statusCounts];
            return (
              <TabsTrigger key={status} value={status} className="flex items-center gap-2">
                <info.icon className="w-4 h-4" />
                {info.label} ({count})
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.entries(STATUS_MAP).map(([status, info]) => {
          const patients = getPatientsByStatus(Number(status));
          
          return (
            <TabsContent key={status} value={status} className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <info.icon className="w-5 h-5" />
                    {info.label}
                  </CardTitle>
                  <CardDescription>
                    {info.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {patients.length === 0 ? (
                    <div className="text-center py-8">
                      <info.icon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Nenhum paciente encontrado neste status
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {patients.map((patient) => (
                        <PatientCard key={patient.id_Lista} patient={patient} />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}