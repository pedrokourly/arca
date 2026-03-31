"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Badge,
  Calendar,
  CalendarIcon,
  Clock,
  User,
  UserCheck,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { usePermissions } from "@/hooks/usePermissions";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";
import { z } from "zod";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

// Schema de validação Zod
const createSessionSchema = z
  .object({
    dataHoraInicio: z.date({
      message: "Data e hora de início são obrigatórias",
    }),
    dataHoraFim: z.date({ message: "Data e hora de fim são obrigatórias" }),
    id_Lista: z
      .string()
      .uuid("ID da lista deve ser um UUID válido")
      .min(1, "Paciente é obrigatório"),
    id_Tipo_Atendimento: z
      .number()
      .min(1, "Tipo de atendimento é obrigatório")
      .max(2, "Tipo de atendimento inválido"),
    id_Estagiario_Executor: z
      .string()
      .uuid("ID do estagiário deve ser um UUID válido")
      .min(1, "Estagiário é obrigatório"),
    id_Supervisor_Executor: z
      .string()
      .uuid("ID do supervisor deve ser um UUID válido")
      .min(1, "Supervisor é obrigatório"),
    observacoes: z
      .string()
      .max(1000, "Observações devem ter no máximo 1000 caracteres")
      .optional(),
  })
  .refine(
    (data) => {
      return data.dataHoraInicio < data.dataHoraFim;
    },
    {
      message: "Data e hora de início devem ser anteriores ao fim",
      path: ["dataHoraFim"],
    },
  );

interface CreateSessionData {
  dataHoraInicio: Date | null;
  dataHoraFim: Date | null;
  id_Lista: string;
  id_Tipo_Atendimento: number;
  id_Estagiario_Executor: string;
  id_Supervisor_Executor: string;
  observacoes: string;
}

interface WaitlistEntry {
  id_Lista: string;
  nomeRegistro: string;
  nomeSocial?: string;
  telefonePessoal: string;
  id_Status: number;
}

interface User {
  id_User: string;
  nome: string;
  email: string;
  roleId: number;
  isActive: boolean;
}

type CreateSessionFormErrors = {
  [K in keyof CreateSessionData]?: string;
};

// Mapeamento dos tipos de atendimento
const TIPO_ATENDIMENTO_MAP = {
  1: {
    label: "Triagem",
    variant: "default" as const,
    color: "bg-blue-100 text-blue-800",
  },
  2: {
    label: "Psicoterapia",
    variant: "secondary" as const,
    color: "bg-purple-100 text-purple-800",
  },
};

// Mapeamento dos status da lista de espera
const STATUS_MAP_WAITLIST = {
  1: { label: "Em Espera", variant: "secondary" as const },
  2: { label: "Em Triagem", variant: "default" as const },
  3: { label: "Triagem Aprovada", variant: "default" as const },
  4: { label: "Em Psicoterapia", variant: "default" as const },
  5: { label: "Recebeu Alta", variant: "outline" as const },
  6: { label: "Encaminhado", variant: "outline" as const },
  7: { label: "Desativado", variant: "destructive" as const },
};

export default function CreateSessionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: session } = useSession();
  const { canCreateUsers } = usePermissions(); // Usando a mesma lógica de permissão

  // Estados do formulário
  const [formData, setFormData] = useState<CreateSessionData>({
    dataHoraInicio: null,
    dataHoraFim: null,
    id_Lista: "",
    id_Tipo_Atendimento: 1, // Default para triagem
    id_Estagiario_Executor: "",
    id_Supervisor_Executor: "",
    observacoes: "",
  });

  // Estados para dados das APIs
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [estagiarios, setEstagiarios] = useState<User[]>([]);
  const [supervisores, setSupervisores] = useState<User[]>([]);

  // Estados de controle
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [formErrors, setFormErrors] = useState<CreateSessionFormErrors>({});

  // Estados para calendário
  const [startCalendarOpen, setStartCalendarOpen] = useState(false);
  const [endCalendarOpen, setEndCalendarOpen] = useState(false);

  // Carregar dados necessários
  useEffect(() => {
    const loadData = async () => {
      if (!session?.token) return;

      setIsLoadingData(true);
      try {
        // Carregar lista de espera (filtrada por status baseado no tipo de atendimento)
        const waitlistPromise = apiRequest(API_ENDPOINTS.waitlist, {
          headers: { Authorization: `Bearer ${session.token}` },
        });

        // Carregar usuários
        const usersPromise = apiRequest(API_ENDPOINTS.users, {
          headers: { Authorization: `Bearer ${session.token}` },
        });

        const [waitlistData, usersData] = await Promise.all([
          waitlistPromise,
          usersPromise,
        ]);

        // Definir lista completa de espera para filtrar posteriormente baseado no tipo
        setWaitlistEntries(waitlistData);

        // Separar usuários por função
        setEstagiarios(usersData.filter((user: User) => user.roleId === 4)); // Estagiários
        setSupervisores(usersData.filter((user: User) => user.roleId === 3)); // Supervisores
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        const { title, description } = getErrorMessage(error);
        toast.error(title, { description });
      } finally {
        setIsLoadingData(false);
      }
    };

    loadData();
  }, [session]);

  // Pré-selecionar paciente se vier da URL
  useEffect(() => {
    const patientId = searchParams.get("patientId");
    if (patientId && waitlistEntries.length > 0) {
      // Encontrar o paciente na lista
      const patient = waitlistEntries.find(
        (entry) => entry.id_Lista === patientId,
      );

      if (patient) {
        // Determinar o tipo de atendimento baseado no status do paciente
        let tipoAtendimento = 1; // Default: Triagem

        if (patient.id_Status === 3 || patient.id_Status === 4) {
          // Status 3 (Triagem Aprovada) ou 4 (Em Psicoterapia) = Psicoterapia
          tipoAtendimento = 2;
        } else if (patient.id_Status === 1) {
          // Status 1 (Em Espera) = Triagem
          tipoAtendimento = 1;
        }

        // Atualizar formulário com o paciente selecionado
        setFormData((prev) => ({
          ...prev,
          id_Lista: patientId,
          id_Tipo_Atendimento: tipoAtendimento,
        }));

        toast.success("Paciente selecionado", {
          description: `${patient.nomeRegistro} foi pré-selecionado para agendamento.`,
        });
      }
    }
  }, [searchParams, waitlistEntries]);

  // Filtrar pacientes baseado no tipo de atendimento selecionado
  const getFilteredWaitlist = () => {
    if (!waitlistEntries) return [];

    if (formData.id_Tipo_Atendimento === 1) {
      // Triagem: apenas pacientes "Em Espera" (status 1)
      return waitlistEntries.filter((entry) => entry.id_Status === 1);
    } else if (formData.id_Tipo_Atendimento === 2) {
      // Psicoterapia: pacientes com "Triagem aprovada" (status 3) ou "Em Psicoterapia" (status 4)
      return waitlistEntries.filter(
        (entry) => entry.id_Status === 3 || entry.id_Status === 4,
      );
    }

    return [];
  };

  const handleInputChange = (field: keyof CreateSessionData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Limpa o erro do campo quando o usuário faz alterações
    if (formErrors[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }

    // Se mudou o tipo de atendimento, limpar seleção de paciente
    if (field === "id_Tipo_Atendimento") {
      setFormData((prev) => ({
        ...prev,
        id_Lista: "", // Reset paciente quando muda o tipo
        [field]: value,
      }));
      return;
    }

    // Se mudou a data/hora de início, ajustar automaticamente o fim para 1 hora depois
    if (field === "dataHoraInicio" && value) {
      const endTime = new Date(value);
      endTime.setHours(endTime.getHours() + 1);
      setFormData((prev) => ({
        ...prev,
        dataHoraInicio: value,
        dataHoraFim: endTime,
      }));
    }
  };

  const formatDateTime = (date: Date | null) => {
    if (!date) return "";
    return format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });
  };

  const validateForm = (): boolean => {
    try {
      // Preparar dados para validação
      const dataToValidate = {
        ...formData,
        dataHoraInicio: formData.dataHoraInicio!,
        dataHoraFim: formData.dataHoraFim!,
      };

      createSessionSchema.parse(dataToValidate);
      setFormErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: CreateSessionFormErrors = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof CreateSessionData;
          errors[field] = issue.message;
        });
        setFormErrors(errors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const sessionData = {
        dataHoraInicio: formData.dataHoraInicio!.toISOString(),
        dataHoraFim: formData.dataHoraFim!.toISOString(),
        id_Lista: formData.id_Lista,
        id_Tipo_Atendimento: formData.id_Tipo_Atendimento,
        id_Estagiario_Executor: formData.id_Estagiario_Executor,
        id_Supervisor_Executor: formData.id_Supervisor_Executor,
        observacoes: formData.observacoes || undefined,
      };

      await apiRequest(API_ENDPOINTS.sessions, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session!.token}`,
        },
        body: JSON.stringify(sessionData),
      });

      toast.success("Sessão agendada com sucesso!", {
        description: `${TIPO_ATENDIMENTO_MAP[formData.id_Tipo_Atendimento as keyof typeof TIPO_ATENDIMENTO_MAP]?.label} agendada para ${format(formData.dataHoraInicio!, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}`,
      });

      router.push("/dashboard/atendimento"); // Ajustar para a rota correta
    } catch (error: any) {
      console.error("Erro ao criar sessão:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    } finally {
      setIsLoading(false);
    }
  };

  // Componente para mostrar informações sobre duração
  const getDuration = () => {
    if (!formData.dataHoraInicio || !formData.dataHoraFim) return null;

    const diffInMinutes = Math.round(
      (formData.dataHoraFim.getTime() - formData.dataHoraInicio.getTime()) /
        (1000 * 60),
    );

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutos`;
    } else {
      const hours = Math.floor(diffInMinutes / 60);
      const minutes = diffInMinutes % 60;
      return minutes > 0 ? `${hours}h ${minutes}min` : `${hours}h`;
    }
  };

  // Se não tem permissão, não renderiza o formulário
  if (!session || !canCreateUsers()) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Você não tem permissão para agendar sessões. Contate um secretário
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isLoadingData) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <span className="ml-3">Carregando dados...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agendar Nova Sessão</CardTitle>
        <CardDescription>
          Preencha os dados para agendar uma nova sessão de atendimento. Todos
          os campos marcados com * são obrigatórios.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Seleção do Tipo de Atendimento */}
          <div className="space-y-2">
            <Label
              htmlFor="id_Tipo_Atendimento"
              className="flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Tipo de Atendimento <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.id_Tipo_Atendimento.toString()}
              onValueChange={(value) =>
                handleInputChange("id_Tipo_Atendimento", parseInt(value))
              }
              disabled={isLoading}
            >
              <SelectTrigger
                className={
                  formErrors.id_Tipo_Atendimento ? "border-destructive" : ""
                }
              >
                <SelectValue placeholder="Selecione o tipo de atendimento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Triagem</SelectItem>
                <SelectItem value="2">Psicoterapia</SelectItem>
              </SelectContent>
            </Select>
            {formErrors.id_Tipo_Atendimento && (
              <p className="text-xs text-destructive">
                {formErrors.id_Tipo_Atendimento}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.id_Tipo_Atendimento === 1
                ? "Triagem: primeira avaliação para pacientes em espera"
                : "Psicoterapia: sessões de acompanhamento para pacientes com triagem aprovada"}
            </p>
          </div>

          {/* Seleção do Paciente */}
          <div className="space-y-2">
            <Label htmlFor="id_Lista" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Paciente <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.id_Lista}
              onValueChange={(value) => handleInputChange("id_Lista", value)}
              disabled={isLoading}
            >
              <SelectTrigger
                className={formErrors.id_Lista ? "border-destructive" : ""}
              >
                <SelectValue placeholder="Selecione um paciente" />
              </SelectTrigger>
              <SelectContent>
                {getFilteredWaitlist().length === 0 ? (
                  <SelectItem value="no-patients" disabled>
                    {formData.id_Tipo_Atendimento === 1
                      ? "Nenhum paciente em espera disponível para triagem"
                      : "Nenhum paciente com triagem aprovada disponível para psicoterapia"}
                  </SelectItem>
                ) : (
                  getFilteredWaitlist().map((patient) => (
                    <SelectItem key={patient.id_Lista} value={patient.id_Lista}>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                          <span>{patient.nomeRegistro}</span>
                          {patient.nomeSocial && (
                            <span className="text-xs text-muted-foreground">
                              ({patient.nomeSocial})
                            </span>
                          )}
                        </div>
                        <Badge className="text-xs">
                          {
                            STATUS_MAP_WAITLIST[
                              patient.id_Status as keyof typeof STATUS_MAP_WAITLIST
                            ]?.label
                          }
                        </Badge>
                      </div>
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
            {formErrors.id_Lista && (
              <p className="text-xs text-destructive">{formErrors.id_Lista}</p>
            )}
            <p className="text-xs text-muted-foreground">
              {formData.id_Tipo_Atendimento === 1
                ? "Apenas pacientes em espera são exibidos para triagem"
                : "Apenas pacientes com triagem aprovada ou em psicoterapia são exibidos"}
            </p>
          </div>

          {/* Data e Hora */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data e Hora de Início */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Data e Hora de Início{" "}
                <span className="text-destructive">*</span>
              </Label>
              <div className="flex gap-2">
                <Popover
                  open={startCalendarOpen}
                  onOpenChange={setStartCalendarOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[180px] justify-start text-left font-normal",
                        !formData.dataHoraInicio && "text-muted-foreground",
                        formErrors.dataHoraInicio && "border-destructive",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.dataHoraInicio
                        ? format(formData.dataHoraInicio, "dd/MM/yyyy", {
                            locale: ptBR,
                          })
                        : "Selecione a data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={formData.dataHoraInicio || undefined}
                      onSelect={(date) => {
                        if (date) {
                          const currentTime =
                            formData.dataHoraInicio || new Date();
                          const newDate = new Date(date);
                          newDate.setHours(
                            currentTime.getHours(),
                            currentTime.getMinutes(),
                          );
                          handleInputChange("dataHoraInicio", newDate);
                        }
                        setStartCalendarOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  type="time"
                  value={
                    formData.dataHoraInicio
                      ? format(formData.dataHoraInicio, "HH:mm")
                      : ""
                  }
                  onChange={(e) => {
                    if (e.target.value && formData.dataHoraInicio) {
                      const [hours, minutes] = e.target.value
                        .split(":")
                        .map(Number);
                      const newDate = new Date(formData.dataHoraInicio);
                      newDate.setHours(hours, minutes);
                      handleInputChange("dataHoraInicio", newDate);
                    }
                  }}
                  className={cn(
                    "w-32",
                    formErrors.dataHoraInicio && "border-destructive",
                  )}
                  disabled={isLoading}
                />
              </div>
              {formErrors.dataHoraInicio && (
                <p className="text-xs text-destructive">
                  {formErrors.dataHoraInicio}
                </p>
              )}
            </div>

            {/* Data e Hora de Fim */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Data e Hora de Fim <span className="text-destructive">*</span>
              </Label>
              <div className="flex gap-2">
                <Popover
                  open={endCalendarOpen}
                  onOpenChange={setEndCalendarOpen}
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[180px] justify-start text-left font-normal",
                        !formData.dataHoraFim && "text-muted-foreground",
                        formErrors.dataHoraFim && "border-destructive",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.dataHoraFim
                        ? format(formData.dataHoraFim, "dd/MM/yyyy", {
                            locale: ptBR,
                          })
                        : "Selecione a data"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <CalendarComponent
                      mode="single"
                      selected={formData.dataHoraFim || undefined}
                      onSelect={(date) => {
                        if (date) {
                          const currentTime =
                            formData.dataHoraFim || new Date();
                          const newDate = new Date(date);
                          newDate.setHours(
                            currentTime.getHours(),
                            currentTime.getMinutes(),
                          );
                          handleInputChange("dataHoraFim", newDate);
                        }
                        setEndCalendarOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  type="time"
                  value={
                    formData.dataHoraFim
                      ? format(formData.dataHoraFim, "HH:mm")
                      : ""
                  }
                  onChange={(e) => {
                    if (e.target.value && formData.dataHoraFim) {
                      const [hours, minutes] = e.target.value
                        .split(":")
                        .map(Number);
                      const newDate = new Date(formData.dataHoraFim);
                      newDate.setHours(hours, minutes);
                      handleInputChange("dataHoraFim", newDate);
                    }
                  }}
                  className={cn(
                    "w-32",
                    formErrors.dataHoraFim && "border-destructive",
                  )}
                  disabled={isLoading}
                />
              </div>
              {formErrors.dataHoraFim && (
                <p className="text-xs text-destructive">
                  {formErrors.dataHoraFim}
                </p>
              )}
              {getDuration() && (
                <p className="text-xs text-muted-foreground">
                  Duração: {getDuration()}
                </p>
              )}
            </div>
          </div>

          {/* Profissionais */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Estagiário */}
            <div className="space-y-2">
              <Label
                htmlFor="id_Estagiario_Executor"
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                Estagiário <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.id_Estagiario_Executor}
                onValueChange={(value) =>
                  handleInputChange("id_Estagiario_Executor", value)
                }
                disabled={isLoading}
              >
                <SelectTrigger
                  className={
                    formErrors.id_Estagiario_Executor
                      ? "border-destructive"
                      : ""
                  }
                >
                  <SelectValue placeholder="Selecione um estagiário" />
                </SelectTrigger>
                <SelectContent>
                  {estagiarios.length === 0 ? (
                    <SelectItem value="no-estagiarios" disabled>
                      Nenhum estagiário disponível
                    </SelectItem>
                  ) : (
                    estagiarios.map((estagiario) => (
                      <SelectItem
                        key={estagiario.id_User}
                        value={estagiario.id_User}
                      >
                        <div className="flex flex-col">
                          <span>{estagiario.nome}</span>
                          <span className="text-xs text-muted-foreground">
                            {estagiario.email}
                          </span>
                        </div>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {formErrors.id_Estagiario_Executor && (
                <p className="text-xs text-destructive">
                  {formErrors.id_Estagiario_Executor}
                </p>
              )}
            </div>

            {/* Supervisor */}
            <div className="space-y-2">
              <Label
                htmlFor="id_Supervisor_Executor"
                className="flex items-center gap-2"
              >
                <UserCheck className="h-4 w-4" />
                Supervisor <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.id_Supervisor_Executor}
                onValueChange={(value) =>
                  handleInputChange("id_Supervisor_Executor", value)
                }
                disabled={isLoading}
              >
                <SelectTrigger
                  className={
                    formErrors.id_Supervisor_Executor
                      ? "border-destructive"
                      : ""
                  }
                >
                  <SelectValue placeholder="Selecione um supervisor" />
                </SelectTrigger>
                <SelectContent>
                  {supervisores.length === 0 ? (
                    <SelectItem value="no-supervisores" disabled>
                      Nenhum supervisor disponível
                    </SelectItem>
                  ) : (
                    supervisores.map((supervisor) => (
                      <SelectItem
                        key={supervisor.id_User}
                        value={supervisor.id_User}
                      >
                        <div className="flex flex-col">
                          <span>{supervisor.nome}</span>
                          <span className="text-xs text-muted-foreground">
                            {supervisor.email}
                          </span>
                        </div>
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              {formErrors.id_Supervisor_Executor && (
                <p className="text-xs text-destructive">
                  {formErrors.id_Supervisor_Executor}
                </p>
              )}
            </div>
          </div>

          {/* Observações */}
          <div className="space-y-2">
            <Label htmlFor="observacoes">Observações</Label>
            <Input
              id="observacoes"
              value={formData.observacoes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("observacoes", e.target.value)
              }
              placeholder="Observações sobre a sessão (opcional)"
              maxLength={1000}
              disabled={isLoading}
              className={formErrors.observacoes ? "border-destructive" : ""}
            />
            {formErrors.observacoes && (
              <p className="text-xs text-destructive">
                {formErrors.observacoes}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Máximo 1000 caracteres ({formData.observacoes.length}/1000)
            </p>
          </div>

          {/* Resumo da Sessão */}
          {formData.dataHoraInicio && formData.dataHoraFim && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Resumo da Sessão:</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>
                  • <strong>Data:</strong>{" "}
                  {format(formData.dataHoraInicio, "dd/MM/yyyy", {
                    locale: ptBR,
                  })}
                </p>
                <p>
                  • <strong>Horário:</strong>{" "}
                  {format(formData.dataHoraInicio, "HH:mm", { locale: ptBR })}{" "}
                  às {format(formData.dataHoraFim, "HH:mm", { locale: ptBR })}
                </p>
                <p>
                  • <strong>Duração:</strong> {getDuration()}
                </p>
                {formData.id_Lista && (
                  <p>
                    • <strong>Paciente:</strong>{" "}
                    {getFilteredWaitlist().find(
                      (p) => p.id_Lista === formData.id_Lista,
                    )?.nomeRegistro || "Selecionado"}
                  </p>
                )}
                {formData.id_Tipo_Atendimento && (
                  <p>
                    • <strong>Tipo:</strong>{" "}
                    {
                      TIPO_ATENDIMENTO_MAP[
                        formData.id_Tipo_Atendimento as keyof typeof TIPO_ATENDIMENTO_MAP
                      ]?.label
                    }
                  </p>
                )}
                {formData.id_Estagiario_Executor && (
                  <p>
                    • <strong>Estagiário:</strong>{" "}
                    {estagiarios.find(
                      (e) => e.id_User === formData.id_Estagiario_Executor,
                    )?.nome || "Selecionado"}
                  </p>
                )}
                {formData.id_Supervisor_Executor && (
                  <p>
                    • <strong>Supervisor:</strong>{" "}
                    {supervisores.find(
                      (s) => s.id_User === formData.id_Supervisor_Executor,
                    )?.nome || "Selecionado"}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Botões de ação */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              disabled={
                isLoading ||
                getFilteredWaitlist().length === 0 ||
                estagiarios.length === 0 ||
                supervisores.length === 0
              }
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Agendando...
                </>
              ) : (
                <>
                  <Calendar className="h-4 w-4" />
                  Agendar Sessão
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
