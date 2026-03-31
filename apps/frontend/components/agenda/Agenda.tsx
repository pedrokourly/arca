"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import Evento from "./Evento";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar as CalendarIcon,
  Plus,
  Filter,
  Users,
  UserCheck,
} from "lucide-react";
import EventoDetalhes from "./EventoDetalhes";
import { usePermissions } from "@/hooks/usePermissions";
import api from "@/lib/api";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./agenda.css";

// Configuração do localizador para português brasileiro
const locales = {
  "pt-BR": ptBR,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Tipos para os dados que vem da API
interface AtendimentoAPI {
  id_Atendimento: string;
  dataHoraInicio: string;
  dataHoraFim: string;
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
}

// Tipos para usuários (estagiários e supervisores)
interface Usuario {
  id_User: string;
  nome: string;
  email: string;
  roleId: number;
  role?: {
    id_Role: number;
    role: string;
    descricao: string;
  };
}

// Tipos para filtros
interface FiltrosAgenda {
  supervisorId?: string;
  estagiarioId?: string;
}

// Tipos para os eventos da agenda
export interface EventoAgenda {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: {
    tipo: "atendimento" | "consulta" | "avaliacao";
    status: "agendado" | "em_andamento" | "concluido" | "cancelado";
    paciente: string;
    estagiario: string;
    supervisor: string;
    observacoes?: string;
  };
}

// Mensagens em português para o calendário
const messages = {
  allDay: "Dia todo",
  previous: "Anterior",
  next: "Próximo",
  today: "Hoje",
  month: "Mês",
  week: "Semana",
  day: "Dia",
  agenda: "Agenda",
  date: "Data",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "Não há eventos neste período.",
  showMore: (total: number) => `+ Ver mais (${total})`,
};

const AgendaGeral = () => {
  const { data: session, status } = useSession();
  const { isAdmin, isSecretary, canAccessUsers } = usePermissions();
  const [eventos, setEventos] = useState<EventoAgenda[]>([]);
  const [todosEventos, setTodosEventos] = useState<EventoAgenda[]>([]); // Para manter todos os eventos antes da filtragem
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [view, setView] = useState<(typeof Views)[keyof typeof Views]>(
    Views.WEEK,
  );
  const [date, setDate] = useState(new Date());
  const [eventoSelecionado, setEventoSelecionado] =
    useState<EventoAgenda | null>(null);
  const [modalDetalhesAberto, setModalDetalhesAberto] = useState(false);

  // Estados para filtros (apenas para admin/secretário)
  const [estagiarios, setEstagiarios] = useState<Usuario[]>([]);
  const [supervisores, setSupervisores] = useState<Usuario[]>([]);
  const [filtros, setFiltros] = useState<FiltrosAgenda>({
    supervisorId: undefined,
    estagiarioId: undefined,
  });
  const [loadingFiltros, setLoadingFiltros] = useState(false);

  // Função para buscar usuários para filtros (apenas admin/secretário)
  const buscarUsuarios = async () => {
    if (!canAccessUsers()) return;

    try {
      setLoadingFiltros(true);
      const response = await api.get<Usuario[]>("/users");
      const usuarios = response.data;

      // Verificar se a resposta é válida
      if (!usuarios || !Array.isArray(usuarios)) {
        console.warn("Resposta da API de usuários inválida:", usuarios);
        return;
      }

      // Separar estagiários (roleId 4) e supervisores (roleId 3)
      const estagiariosList = usuarios.filter(
        (user) => user && user.roleId === 4,
      );
      const supervisoresList = usuarios.filter(
        (user) => user && user.roleId === 3,
      );

      setEstagiarios(estagiariosList);
      setSupervisores(supervisoresList);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoadingFiltros(false);
    }
  };

  // Função para aplicar filtros
  const aplicarFiltros = () => {
    let eventosFiltrados = [...todosEventos];

    // Filtrar por supervisor
    if (filtros.supervisorId) {
      const supervisorSelecionado = supervisores.find(
        (s) => s.id_User === filtros.supervisorId,
      );
      if (supervisorSelecionado) {
        eventosFiltrados = eventosFiltrados.filter(
          (evento) => evento.resource.supervisor === supervisorSelecionado.nome,
        );
      }
    }

    // Filtrar por estagiário
    if (filtros.estagiarioId) {
      const estagiarioSelecionado = estagiarios.find(
        (e) => e.id_User === filtros.estagiarioId,
      );
      if (estagiarioSelecionado) {
        eventosFiltrados = eventosFiltrados.filter(
          (evento) => evento.resource.estagiario === estagiarioSelecionado.nome,
        );
      }
    }

    setEventos(eventosFiltrados);
  };

  // Função para limpar filtros
  const limparFiltros = () => {
    setFiltros({
      supervisorId: undefined,
      estagiarioId: undefined,
    });
    // Restaurar todos os eventos
    setEventos(todosEventos);
  };

  // Função para buscar eventos da API
  const buscarEventos = async () => {
    try {
      setLoading(true);
      setError(null);

      // Chamada real para a API de sessões/atendimentos
      // O backend já filtra baseado no papel do usuário
      const response = await api.get<AtendimentoAPI[]>("/session");
      const atendimentos = response.data;

      // Verificar se a resposta é um array
      if (!Array.isArray(atendimentos)) {
        throw new Error("Formato de dados inválido recebido da API");
      }

      // Mapear os atendimentos para o formato do calendário
      const eventosFormatados: EventoAgenda[] = atendimentos.map(
        (atendimento) => ({
          id: atendimento.id_Atendimento,
          title: `${atendimento.ListaEspera.nomeRegistro} - ${atendimento.estagiarioExecutor.nome}`,
          start: new Date(atendimento.dataHoraInicio),
          end: new Date(atendimento.dataHoraFim),
          resource: {
            tipo: "atendimento", // Pode ser expandido para diferentes tipos baseado em lógica de negócio
            status: mapearStatus(atendimento.status.id_Status),
            paciente: atendimento.ListaEspera.nomeRegistro,
            estagiario: atendimento.estagiarioExecutor.nome,
            supervisor: atendimento.supervisorExecutor.nome,
            observacoes: atendimento.observacoes,
          },
        }),
      );

      setEventos(eventosFormatados);
      setTodosEventos(eventosFormatados); // Manter cópia de todos os eventos
    } catch (error: any) {
      console.error("Erro detalhado ao buscar eventos:", error);

      // Tratamento específico por tipo de erro
      if (error.response) {
        // Erro de resposta do servidor
        const status = error.response.status;
        const message =
          error.response.data?.message || error.response.statusText;

        switch (status) {
          case 401:
            setError("Sessão expirada. Faça login novamente.");
            break;
          case 403:
            setError("Você não tem permissão para visualizar a agenda.");
            break;
          case 404:
            setError(
              "Endpoint da agenda não encontrado. Verifique a configuração da API.",
            );
            break;
          case 500:
            setError(
              "Erro interno do servidor. Tente novamente em alguns minutos.",
            );
            break;
          default:
            setError(`Erro do servidor (${status}): ${message}`);
        }
      } else if (error.request) {
        // Erro de rede
        setError(
          "Erro de conexão. Verifique sua internet e se o servidor está funcionando.",
        );
      } else {
        // Outros erros
        setError(error.message || "Erro inesperado ao carregar agendamentos.");
      }

      setEventos([]);
    } finally {
      setLoading(false);
    }
  };

  // Função auxiliar para mapear o status numérico para string
  const mapearStatus = (
    statusId: number,
  ): "agendado" | "em_andamento" | "concluido" | "cancelado" => {
    switch (statusId) {
      case 1:
        return "agendado";
      case 2:
        return "em_andamento";
      case 3:
        return "concluido";
      case 4:
        return "cancelado";
      default:
        return "agendado";
    }
  };

  // Funções auxiliares para calcular estatísticas por período
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isThisWeek = (date: Date): boolean => {
    const today = new Date();
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay()); // Domingo da semana atual
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // Sábado da semana atual
    endOfWeek.setHours(23, 59, 59, 999);

    return date >= startOfWeek && date <= endOfWeek;
  };

  // Calcular estatísticas baseadas nos eventos
  const calcularEstatisticas = () => {
    const eventosHoje = eventos.filter((e) => isToday(e.start));
    const eventosSemana = eventos.filter((e) => isThisWeek(e.start));

    return {
      hoje: {
        agendados: eventosHoje.filter((e) => e.resource.status === "agendado")
          .length,
        emAndamento: eventosHoje.filter(
          (e) => e.resource.status === "em_andamento",
        ).length,
        concluidos: eventosHoje.filter((e) => e.resource.status === "concluido")
          .length,
        total: eventosHoje.length,
      },
      semana: {
        total: eventosSemana.length,
      },
    };
  };

  const estatisticas = calcularEstatisticas();

  useEffect(() => {
    // Só carrega os dados quando a sessão estiver carregada
    if (status === "authenticated") {
      buscarEventos();
      // Buscar usuários para filtros apenas se for admin ou secretário
      if (canAccessUsers()) {
        buscarUsuarios();
      }
    } else if (status === "unauthenticated") {
      setError("Usuário não autenticado. Faça login para ver a agenda.");
      setLoading(false);
    }
    // Se status === 'loading', mantém o loading ativo
  }, [status]);

  // Função para definir estilos dos eventos baseado no status
  const eventStyleGetter = (event: EventoAgenda) => {
    let backgroundColor = "#3174ad";

    switch (event.resource.status) {
      case "agendado":
        backgroundColor = "#3b82f6"; // blue-500
        break;
      case "em_andamento":
        backgroundColor = "#f59e0b"; // amber-500
        break;
      case "concluido":
        backgroundColor = "#10b981"; // emerald-500
        break;
      case "cancelado":
        backgroundColor = "#ef4444"; // red-500
        break;
    }

    return {
      style: {
        backgroundColor,
        borderRadius: "8px",
        opacity: 0.8,
        color: "white",
        border: "0px",
        display: "block",
      },
    };
  };

  const handleSelectEvent = (event: EventoAgenda) => {
    setEventoSelecionado(event);
    setModalDetalhesAberto(true);
  };

  const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
    // Aqui você pode abrir um modal para criar novo evento
    // Por exemplo: setModalNovoEventoAberto(true); setNovoEventoData({ start, end });
  };

  const handleNovoAgendamento = () => {
    // TODO: Implementar modal de criação ou navegar para página de criação
    // Por exemplo: router.push('/agenda/novo');
  };

  return (
    <div className="space-y-6">
      {/* Filtros - apenas para admin e secretário */}
      {canAccessUsers() && (
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-4">Filtros</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Supervisor
              </label>
              <Select
                value={filtros.supervisorId ? filtros.supervisorId : "todos"}
                onValueChange={(value) =>
                  setFiltros((prev) => ({
                    ...prev,
                    supervisorId: value === "todos" ? undefined : value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todos os supervisores" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os supervisores</SelectItem>
                  {supervisores
                    .filter((supervisor) => supervisor && supervisor.id_User)
                    .map((supervisor) => (
                      <SelectItem
                        key={supervisor.id_User}
                        value={supervisor.id_User}
                      >
                        {supervisor.nome}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por Estagiário
              </label>
              <Select
                value={filtros.estagiarioId ? filtros.estagiarioId : "todos"}
                onValueChange={(value) =>
                  setFiltros((prev) => ({
                    ...prev,
                    estagiarioId: value === "todos" ? undefined : value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todos os estagiários" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos os estagiários</SelectItem>
                  {estagiarios
                    .filter((estagiario) => estagiario && estagiario.id_User)
                    .map((estagiario) => (
                      <SelectItem
                        key={estagiario.id_User}
                        value={estagiario.id_User}
                      >
                        {estagiario.nome}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              onClick={aplicarFiltros}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Aplicar Filtros
            </Button>
            <Button onClick={limparFiltros} variant="outline">
              Limpar Filtros
            </Button>
          </div>
        </div>
      )}

      {/* Estatísticas Rápidas - apenas para admin e secretário */}
      {canAccessUsers() && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Agendados
                </p>
                <p className="text-2xl font-bold">
                  {estatisticas.hoje.agendados}
                </p>
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                Hoje
              </Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Em Andamento
                </p>
                <p className="text-2xl font-bold">
                  {estatisticas.hoje.emAndamento}
                </p>
              </div>
              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                Ativo
              </Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Concluídos
                </p>
                <p className="text-2xl font-bold">
                  {estatisticas.hoje.concluidos}
                </p>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                Hoje
              </Badge>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total
                </p>
                <p className="text-2xl font-bold">
                  {estatisticas.semana.total}
                </p>
              </div>
              <Badge variant="outline">Esta semana</Badge>
            </div>
          </Card>
        </div>
      )}

      {/* Calendário Principal */}
      <Card className="p-6">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Carregando agenda...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-center max-w-md">
              <div className="text-red-500 mb-4">
                <CalendarIcon className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button onClick={buscarEventos} variant="outline">
                Tentar Novamente
              </Button>
            </div>
          </div>
        ) : eventos.length === 0 ? (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">
                Nenhum agendamento encontrado
              </p>
              {/* Botão de criar agendamento - apenas para admin e secretário */}
              {canAccessUsers() && (
                <Button onClick={handleNovoAgendamento}>
                  <Plus className="h-4 w-4 mr-2" />
                  Criar Primeiro Agendamento
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div style={{ height: "600px" }}>
            <Calendar
              localizer={localizer}
              events={eventos}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "100%" }}
              views={["month", "week", "day", "agenda"]}
              view={view}
              onView={setView}
              date={date}
              onNavigate={setDate}
              messages={messages}
              culture="pt-BR"
              components={{
                event: Evento,
              }}
              eventPropGetter={eventStyleGetter}
              onSelectEvent={handleSelectEvent}
              onSelectSlot={handleSelectSlot}
              selectable
              popup
              step={30}
              timeslots={2}
              min={
                new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  7,
                  0,
                  0,
                )
              } // 7:00 AM
              max={
                new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  19,
                  0,
                  0,
                )
              } // 7:00 PM
            />
          </div>
        )}
      </Card>

      {/* Modal de Detalhes do Evento */}
      <EventoDetalhes
        evento={eventoSelecionado}
        open={modalDetalhesAberto}
        onOpenChange={setModalDetalhesAberto}
      />
    </div>
  );
};

export default AgendaGeral;
