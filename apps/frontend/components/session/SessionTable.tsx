"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Edit, Trash2, Eye, Search, Filter, X, Calendar, Clock, User, UserCheck, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";

interface SessionEntry {
  id_Atendimento: string;
  dataHoraInicio: string;
  dataHoraFim: string;
  id_Lista: string;
  id_Estagiario_Executor: string;
  id_Supervisor_Executor: string;
  id_Status: number;
  observacoes?: string;
  ListaEspera?: {
    id_Lista: string;
    nomeRegistro: string;
    nomeSocial?: string;
    telefonePessoal: string;
  };
  estagiarioExecutor?: {
    id_User: string;
    nome: string;
    email: string;
  };
  supervisorExecutor?: {
    id_User: string;
    nome: string;
    email: string;
  };
  status?: {
    id_Status: number;
    nome: string;
  };
}

// Mapeamento dos status de atendimento
const STATUS_MAP = {
  1: { label: 'Agendado', variant: 'secondary' as const, color: 'bg-blue-100 text-blue-800' },
  2: { label: 'Em Andamento', variant: 'default' as const, color: 'bg-green-100 text-green-800' },
  3: { label: 'Concluído', variant: 'outline' as const, color: 'bg-gray-100 text-gray-800' },
  4: { label: 'Faltou', variant: 'destructive' as const, color: 'bg-orange-100 text-orange-800' },
  5: { label: 'Cancelado', variant: 'destructive' as const, color: 'bg-red-100 text-red-800' }
};

export default function SessionTable() {
  const { data: session, status } = useSession();

  const [sessionEntries, setSessionEntries] = useState<SessionEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para filtros e pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "1" | "2" | "3" | "4" | "5">("all");
  const [dateFilter, setDateFilter] = useState<"all" | "today" | "week" | "month">("all");
  const [filteredEntries, setFilteredEntries] = useState<SessionEntry[]>([]);

  // Estados para deleção de sessão
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [sessionToDelete, setSessionToDelete] = useState<SessionEntry | null>(null);
  
  // Estados para edição de sessão
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [sessionToEdit, setSessionToEdit] = useState<SessionEntry | null>(null);
  const [editFormData, setEditFormData] = useState({
    dataHoraInicio: "",
    dataHoraFim: "",
    observacoes: ""
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Estados para visualização detalhada
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [sessionToView, setSessionToView] = useState<SessionEntry | null>(null);

  // Estados para mudança de status
  const [statusDialogOpen, setStatusDialogOpen] = useState(false);
  const [sessionToUpdateStatus, setSessionToUpdateStatus] = useState<SessionEntry | null>(null);
  const [newStatus, setNewStatus] = useState<string>("");
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // Função para abrir dialog de edição
  const handleEditClick = (sessionEntry: SessionEntry) => {
    setSessionToEdit(sessionEntry);
    setEditFormData({
      dataHoraInicio: format(new Date(sessionEntry.dataHoraInicio), "yyyy-MM-dd'T'HH:mm"),
      dataHoraFim: format(new Date(sessionEntry.dataHoraFim), "yyyy-MM-dd'T'HH:mm"),
      observacoes: sessionEntry.observacoes || ""
    });
    setEditDialogOpen(true);
  };

  // Função para atualizar sessão
  const handleUpdateSession = async () => {
    if (!sessionToEdit) return;

    setIsUpdating(true);
    try {
      const updateData = {
        dataHoraInicio: new Date(editFormData.dataHoraInicio).toISOString(),
        dataHoraFim: new Date(editFormData.dataHoraFim).toISOString(),
        observacoes: editFormData.observacoes || undefined,
      };

      const updatedSession = await apiRequest(`${API_ENDPOINTS.sessions}/${sessionToEdit.id_Atendimento}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`,
        },
        body: JSON.stringify(updateData),
      });
      
      // Atualiza a lista local
      setSessionEntries(entries => 
        entries.map(entry => 
          entry.id_Atendimento === sessionToEdit.id_Atendimento ? { ...entry, ...updatedSession } : entry
        )
      );
      
      toast.success("Sessão atualizada com sucesso!");
      
      // Fecha o dialog
      setEditDialogOpen(false);
      setSessionToEdit(null);
      setEditFormData({
        dataHoraInicio: "",
        dataHoraFim: "",
        observacoes: ""
      });
    } catch (error) {
      console.error("Erro ao atualizar sessão:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    } finally {
      setIsUpdating(false);
    }
  };

  // Função para editar sessão
  const handleEdit = (sessionId: string) => {
    const sessionEntry = filteredEntries.find(e => e.id_Atendimento === sessionId);
    if (sessionEntry) {
      handleEditClick(sessionEntry);
    }
  };

  // Função para visualizar sessão
  const handleView = (sessionId: string) => {
    const sessionEntry = filteredEntries.find(e => e.id_Atendimento === sessionId);
    if (sessionEntry) {
      setSessionToView(sessionEntry);
      setViewDialogOpen(true);
    }
  };

  // Função para abrir dialog de mudança de status
  const handleStatusChangeClick = (sessionEntry: SessionEntry) => {
    setSessionToUpdateStatus(sessionEntry);
    setNewStatus(sessionEntry.id_Status.toString());
    setStatusDialogOpen(true);
  };

  // Função para atualizar status da sessão
  const handleUpdateStatus = async () => {
    if (!sessionToUpdateStatus || !newStatus) return;

    const statusId = parseInt(newStatus);
    if (statusId === sessionToUpdateStatus.id_Status) {
      toast.info("Status não foi alterado");
      setStatusDialogOpen(false);
      return;
    }

    setIsUpdatingStatus(true);
    try {
      await apiRequest(`${API_ENDPOINTS.sessions}/${sessionToUpdateStatus.id_Atendimento}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`,
        },
        body: JSON.stringify({ id_Status: statusId }),
      });
      
      // Atualiza a lista local
      setSessionEntries(entries => 
        entries.map(entry => 
          entry.id_Atendimento === sessionToUpdateStatus.id_Atendimento 
            ? { ...entry, id_Status: statusId } 
            : entry
        )
      );
      
      toast.success(`Status alterado para "${STATUS_MAP[statusId as keyof typeof STATUS_MAP]?.label}" com sucesso!`);
      
      // Fecha o dialog
      setStatusDialogOpen(false);
      setSessionToUpdateStatus(null);
      setNewStatus("");
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Função para abrir dialog de exclusão
  const handleDeleteClick = (sessionEntry: SessionEntry) => {
    setSessionToDelete(sessionEntry);
    setDeleteDialogOpen(true);
  };

  // Função para cancelar sessão
  const handleDelete = async () => {
    if (!sessionToDelete) return;
    
    try {
      await apiRequest(`${API_ENDPOINTS.sessions}/${sessionToDelete.id_Atendimento}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      });

      // Atualiza o status local para "Cancelado"
      setSessionEntries(entries => 
        entries.map(entry => 
          entry.id_Atendimento === sessionToDelete.id_Atendimento 
            ? { ...entry, id_Status: 5 } 
            : entry
        )
      );
      toast.success("Sessão cancelada com sucesso!");
      
      setDeleteDialogOpen(false);
      setSessionToDelete(null);
    } catch (error) {
      console.error("Erro ao cancelar sessão:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    }
  };

  // Função para calcular duração da sessão
  const calculateDuration = (start: string, end: string) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const diffInMinutes = Math.round((endTime.getTime() - startTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}min`;
    } else {
      const hours = Math.floor(diffInMinutes / 60);
      const minutes = diffInMinutes % 60;
      return minutes > 0 ? `${hours}h ${minutes}min` : `${hours}h`;
    }
  };

  // Função para filtrar sessões
  const filterSessions = () => {
    let filtered = sessionEntries;

    // Filtro por status
    if (statusFilter !== "all") {
      const statusId = parseInt(statusFilter);
      filtered = filtered.filter(entry => entry.id_Status === statusId);
    }

    // Filtro por data
    if (dateFilter !== "all") {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      filtered = filtered.filter(entry => {
        const sessionDate = new Date(entry.dataHoraInicio);
        
        switch (dateFilter) {
          case "today":
            return sessionDate >= today && sessionDate < new Date(today.getTime() + 24 * 60 * 60 * 1000);
          case "week":
            const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
            return sessionDate >= weekAgo;
          case "month":
            const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
            return sessionDate >= monthAgo;
          default:
            return true;
        }
      });
    }

    // Filtro por pesquisa
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(entry =>
        entry.ListaEspera?.nomeRegistro.toLowerCase().includes(term) ||
        (entry.ListaEspera?.nomeSocial && entry.ListaEspera.nomeSocial.toLowerCase().includes(term)) ||
        entry.estagiarioExecutor?.nome.toLowerCase().includes(term) ||
        entry.supervisorExecutor?.nome.toLowerCase().includes(term) ||
        (entry.observacoes && entry.observacoes.toLowerCase().includes(term))
      );
    }

    setFilteredEntries(filtered);
  };

  // Função para limpar filtros
  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setDateFilter("all");
  };

  useEffect(() => {
    const fetchSessions = async () => {
      if (!session || !session.token) {
        setError("Sessão ou token não disponível");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await apiRequest(API_ENDPOINTS.sessions, {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        });
        setSessionEntries(data);
      } catch (err) {
        console.error("Erro ao buscar sessões:", err);
        const { title, description } = getErrorMessage(err);
        setError(description);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchSessions();
    }
  }, [session, status]);

  // useEffect para aplicar filtros quando dados ou filtros mudam
  useEffect(() => {
    filterSessions();
  }, [sessionEntries, searchTerm, statusFilter, dateFilter]);

  // Skeleton para carregamento da sessão
  if (status === "loading") {
    return (
      <div className="w-full">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  // Skeleton para carregamento das sessões
  if (loading) {
    return (
      <div className="w-full">
        <Table>
          <TableCaption>
            <Skeleton className="h-4 w-64 mx-auto" />
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Paciente</TableHead>
              <TableHead>Data e Hora</TableHead>
              <TableHead>Duração</TableHead>
              <TableHead>Estagiário</TableHead>
              <TableHead>Supervisor</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-6 w-16 rounded-full" /></TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-8 w-8 rounded" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-red-600">Erro ao carregar sessões: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      {/* Barra de ações */}
      <div className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Pesquisar por paciente, estagiário, supervisor ou observações..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={statusFilter} onValueChange={(value: "all" | "1" | "2" | "3" | "4" | "5") => setStatusFilter(value)}>
            <SelectTrigger className="w-full sm:w-[160px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="1">Agendado</SelectItem>
              <SelectItem value="2">Em Andamento</SelectItem>
              <SelectItem value="3">Concluído</SelectItem>
              <SelectItem value="4">Faltou</SelectItem>
              <SelectItem value="5">Cancelado</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={dateFilter} onValueChange={(value: "all" | "today" | "week" | "month") => setDateFilter(value)}>
            <SelectTrigger className="w-full sm:w-[140px]">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Período" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Esta semana</SelectItem>
              <SelectItem value="month">Este mês</SelectItem>
            </SelectContent>
          </Select>
          
          {(searchTerm || statusFilter !== "all" || dateFilter !== "all") && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="shrink-0"
            >
              <X className="h-4 w-4 mr-2" />
              Limpar
            </Button>
          )}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
        <span>
          Total: <span className="font-medium text-foreground">{sessionEntries.length}</span>
        </span>
        <span>
          Agendado: <span className="font-medium text-blue-600">{sessionEntries.filter(e => e.id_Status === 1).length}</span>
        </span>
        <span>
          Em Andamento: <span className="font-medium text-green-600">{sessionEntries.filter(e => e.id_Status === 2).length}</span>
        </span>
        <span>
          Concluído: <span className="font-medium text-gray-600">{sessionEntries.filter(e => e.id_Status === 3).length}</span>
        </span>
        <span>
          Faltou: <span className="font-medium text-orange-600">{sessionEntries.filter(e => e.id_Status === 4).length}</span>
        </span>
        <span>
          Cancelado: <span className="font-medium text-red-600">{sessionEntries.filter(e => e.id_Status === 5).length}</span>
        </span>
        {filteredEntries.length !== sessionEntries.length && (
          <span>
            Exibindo: <span className="font-medium text-purple-600">{filteredEntries.length}</span>
          </span>
        )}
      </div>

      <Table>
        <TableCaption>
          Sessões de Atendimento 
          {filteredEntries.length !== sessionEntries.length 
            ? `(${filteredEntries.length} de ${sessionEntries.length} ${sessionEntries.length === 1 ? 'sessão' : 'sessões'})`
            : `(${sessionEntries.length} ${sessionEntries.length === 1 ? 'sessão' : 'sessões'})`
          }
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Paciente</TableHead>
            <TableHead>Data e Hora</TableHead>
            <TableHead>Duração</TableHead>
            <TableHead>Estagiário</TableHead>
            <TableHead>Supervisor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEntries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                {sessionEntries.length === 0 
                  ? "Nenhuma sessão encontrada."
                  : "Nenhuma sessão encontrada com os filtros aplicados."
                }
              </TableCell>
            </TableRow>
          ) : (
            filteredEntries.map((sessionEntry) => (
            <TableRow key={sessionEntry.id_Atendimento}>
              <TableCell className="font-medium">
                <div>
                  <p className="font-medium">{sessionEntry.ListaEspera?.nomeRegistro || "Paciente não encontrado"}</p>
                  {sessionEntry.ListaEspera?.nomeSocial && (
                    <p className="text-sm text-muted-foreground">({sessionEntry.ListaEspera.nomeSocial})</p>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-3 w-3" />
                    {format(new Date(sessionEntry.dataHoraInicio), "dd/MM/yyyy", { locale: ptBR })}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {format(new Date(sessionEntry.dataHoraInicio), "HH:mm", { locale: ptBR })} - {format(new Date(sessionEntry.dataHoraFim), "HH:mm", { locale: ptBR })}
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="text-sm font-medium">
                  {calculateDuration(sessionEntry.dataHoraInicio, sessionEntry.dataHoraFim)}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{sessionEntry.estagiarioExecutor?.nome || "Não informado"}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{sessionEntry.supervisorExecutor?.nome || "Não informado"}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant={STATUS_MAP[sessionEntry.id_Status as keyof typeof STATUS_MAP]?.variant || "secondary"}
                  className="text-xs"
                >
                  {STATUS_MAP[sessionEntry.id_Status as keyof typeof STATUS_MAP]?.label || `Status ${sessionEntry.id_Status}`}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleView(sessionEntry.id_Atendimento)}
                    className="h-8 w-8 p-0"
                    title="Visualizar detalhes"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  {sessionEntry.id_Status !== 5 && ( // Não pode editar sessão cancelada
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(sessionEntry.id_Atendimento)}
                      className="h-8 w-8 p-0"
                      title="Editar"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                  {(sessionEntry.id_Status === 1 || sessionEntry.id_Status === 2) && ( // Pode alterar status se agendado ou em andamento
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusChangeClick(sessionEntry)}
                      className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      title="Alterar Status"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  )}
                  {sessionEntry.id_Status === 1 && ( // Só pode cancelar sessão agendada
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteClick(sessionEntry)}
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                      title="Cancelar"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>

      {/* Dialog de confirmação de cancelamento */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar cancelamento</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja cancelar a sessão com <strong>{sessionToDelete?.ListaEspera?.nomeRegistro}</strong>?
              Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancelar
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleDelete}
            >
              Confirmar Cancelamento
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog de visualização detalhada */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Sessão</DialogTitle>
            <DialogDescription>
              Informações completas da sessão de atendimento
            </DialogDescription>
          </DialogHeader>
          {sessionToView && (
            <div className="space-y-6">
              {/* Informações da Sessão */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Informações da Sessão</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">ID da Sessão</Label>
                    <p className="font-mono text-xs break-all">{sessionToView.id_Atendimento}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Status</Label>
                    <div>
                      <Badge 
                        variant={STATUS_MAP[sessionToView.id_Status as keyof typeof STATUS_MAP]?.variant || "secondary"}
                        className="text-xs"
                      >
                        {STATUS_MAP[sessionToView.id_Status as keyof typeof STATUS_MAP]?.label || `Status ${sessionToView.id_Status}`}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Data</Label>
                    <p className="font-medium">
                      {format(new Date(sessionToView.dataHoraInicio), "dd/MM/yyyy", { locale: ptBR })}
                    </p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Horário</Label>
                    <p className="font-medium">
                      {format(new Date(sessionToView.dataHoraInicio), "HH:mm", { locale: ptBR })} - {format(new Date(sessionToView.dataHoraFim), "HH:mm", { locale: ptBR })}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <Label className="text-muted-foreground">Duração</Label>
                    <p className="font-medium">
                      {calculateDuration(sessionToView.dataHoraInicio, sessionToView.dataHoraFim)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Informações do Paciente */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Paciente</h4>
                <div className="text-sm">
                  <div>
                    <Label className="text-muted-foreground">Nome de Registro</Label>
                    <p className="font-medium">{sessionToView.ListaEspera?.nomeRegistro || "Não informado"}</p>
                  </div>
                  {sessionToView.ListaEspera?.nomeSocial && (
                    <div className="mt-2">
                      <Label className="text-muted-foreground">Nome Social</Label>
                      <p className="font-medium">{sessionToView.ListaEspera.nomeSocial}</p>
                    </div>
                  )}
                  {sessionToView.ListaEspera?.telefonePessoal && (
                    <div className="mt-2">
                      <Label className="text-muted-foreground">Telefone</Label>
                      <p className="font-medium">{sessionToView.ListaEspera.telefonePessoal}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Profissionais */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Profissionais</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">Estagiário</Label>
                    <p className="font-medium">{sessionToView.estagiarioExecutor?.nome || "Não informado"}</p>
                    {sessionToView.estagiarioExecutor?.email && (
                      <p className="text-xs text-muted-foreground">{sessionToView.estagiarioExecutor.email}</p>
                    )}
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Supervisor</Label>
                    <p className="font-medium">{sessionToView.supervisorExecutor?.nome || "Não informado"}</p>
                    {sessionToView.supervisorExecutor?.email && (
                      <p className="text-xs text-muted-foreground">{sessionToView.supervisorExecutor.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Observações */}
              {sessionToView.observacoes && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-primary">Observações</h4>
                  <div className="text-sm">
                    <p className="bg-muted/50 p-3 rounded-md">{sessionToView.observacoes}</p>
                  </div>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setViewDialogOpen(false)}
            >
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog de edição de sessão */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Editar Sessão</DialogTitle>
            <DialogDescription>
              Atualize as informações da sessão de atendimento.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="dataHoraInicio">Data e Hora de Início</Label>
                <Input
                  id="dataHoraInicio"
                  type="datetime-local"
                  value={editFormData.dataHoraInicio}
                  onChange={(e) => setEditFormData({ ...editFormData, dataHoraInicio: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="dataHoraFim">Data e Hora de Término</Label>
                <Input
                  id="dataHoraFim"
                  type="datetime-local"
                  value={editFormData.dataHoraFim}
                  onChange={(e) => setEditFormData({ ...editFormData, dataHoraFim: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="observacoes">Observações</Label>
                <Input
                  id="observacoes"
                  value={editFormData.observacoes}
                  onChange={(e) => setEditFormData({ ...editFormData, observacoes: e.target.value })}
                  placeholder="Observações sobre a sessão (opcional)"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setEditDialogOpen(false)}
              disabled={isUpdating}
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleUpdateSession}
              disabled={isUpdating || !editFormData.dataHoraInicio || !editFormData.dataHoraFim}
            >
              {isUpdating ? "Salvando..." : "Salvar Alterações"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog de mudança de status */}
      <Dialog open={statusDialogOpen} onOpenChange={setStatusDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Alterar Status da Sessão</DialogTitle>
            <DialogDescription>
              Selecione o novo status para a sessão com <strong>{sessionToUpdateStatus?.ListaEspera?.nomeRegistro}</strong>.
            </DialogDescription>
          </DialogHeader>
          {sessionToUpdateStatus && (
            <div className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Informações da Sessão:</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• <strong>Data:</strong> {format(new Date(sessionToUpdateStatus.dataHoraInicio), "dd/MM/yyyy", { locale: ptBR })}</p>
                  <p>• <strong>Horário:</strong> {format(new Date(sessionToUpdateStatus.dataHoraInicio), "HH:mm", { locale: ptBR })} às {format(new Date(sessionToUpdateStatus.dataHoraFim), "HH:mm", { locale: ptBR })}</p>
                  <p>• <strong>Status Atual:</strong> 
                    <Badge className="ml-2" variant={STATUS_MAP[sessionToUpdateStatus.id_Status as keyof typeof STATUS_MAP]?.variant || "secondary"}>
                      {STATUS_MAP[sessionToUpdateStatus.id_Status as keyof typeof STATUS_MAP]?.label || `Status ${sessionToUpdateStatus.id_Status}`}
                    </Badge>
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="newStatus">Novo Status</Label>
                <Select
                  value={newStatus}
                  onValueChange={setNewStatus}
                  disabled={isUpdatingStatus}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o novo status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">Em Andamento</SelectItem>
                    <SelectItem value="3">Concluído</SelectItem>
                    <SelectItem value="4">Faltou</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {newStatus && parseInt(newStatus) !== sessionToUpdateStatus.id_Status && (
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Alteração:</strong> {STATUS_MAP[sessionToUpdateStatus.id_Status as keyof typeof STATUS_MAP]?.label} → {STATUS_MAP[parseInt(newStatus) as keyof typeof STATUS_MAP]?.label}
                  </p>
                </div>
              )}
            </div>
          )}
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => {
                setStatusDialogOpen(false);
                setSessionToUpdateStatus(null);
                setNewStatus("");
              }}
              disabled={isUpdatingStatus}
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleUpdateStatus}
              disabled={isUpdatingStatus || !newStatus || parseInt(newStatus) === sessionToUpdateStatus?.id_Status}
            >
              {isUpdatingStatus ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Atualizando...
                </>
              ) : (
                "Alterar Status"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}