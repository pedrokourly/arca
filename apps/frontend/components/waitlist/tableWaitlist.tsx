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
import { Edit, Trash2, Eye, Search, Filter, X } from "lucide-react";
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

interface WaitlistEntry {
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

// Mapeamento dos status
const STATUS_MAP = {
  1: { label: 'Em Espera', variant: 'secondary' as const },
  2: { label: 'Em Atendimento', variant: 'default' as const },
  3: { label: 'Recebeu Alta', variant: 'outline' as const },
  4: { label: 'Desistente', variant: 'destructive' as const },
  5: { label: 'Desativado', variant: 'destructive' as const }
};

export function WaitlistTable() {
  const { data: session, status } = useSession();

  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para filtros e pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "1" | "2" | "3" | "4" | "5">("all");
  const [filteredEntries, setFilteredEntries] = useState<WaitlistEntry[]>([]);

  // Estados para deleção de entrada da lista
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [entryToDelete, setEntryToDelete] = useState<WaitlistEntry | null>(null);
  
  // Estados para edição de entrada da lista
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [entryToEdit, setEntryToEdit] = useState<WaitlistEntry | null>(null);
  const [editFormData, setEditFormData] = useState({
    nomeRegistro: "",
    nomeSocial: "",
    CPF: "",
    telefonePessoal: "",
    contatoEmergencia: "",
    enderecoRua: "",
    enderecoNumero: "",
    enderecoBairro: "",
    enderecoCidade: "",
    enderecoEstado: "",
    enderecoCEP: ""
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Estados para visualização detalhada
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [entryToView, setEntryToView] = useState<WaitlistEntry | null>(null);

  // Função para abrir dialog de edição
  const handleEditClick = (entry: WaitlistEntry) => {
    setEntryToEdit(entry);
    setEditFormData({
      nomeRegistro: entry.nomeRegistro,
      nomeSocial: entry.nomeSocial || "",
      CPF: entry.CPF,
      telefonePessoal: entry.telefonePessoal,
      contatoEmergencia: entry.contatoEmergencia,
      enderecoRua: entry.enderecoRua,
      enderecoNumero: entry.enderecoNumero,
      enderecoBairro: entry.enderecoBairro,
      enderecoCidade: entry.enderecoCidade,
      enderecoEstado: entry.enderecoEstado,
      enderecoCEP: entry.enderecoCEP
    });
    setEditDialogOpen(true);
  };

  // Função para atualizar entrada da lista de espera
  const handleUpdateEntry = async () => {
    if (!entryToEdit) return;

    setIsUpdating(true);
    try {
      // Preparar dados para envio
      const updateData = {
        nomeRegistro: editFormData.nomeRegistro,
        nomeSocial: editFormData.nomeSocial || undefined,
        CPF: editFormData.CPF,
        telefonePessoal: editFormData.telefonePessoal,
        contatoEmergencia: editFormData.contatoEmergencia,
        enderecoRua: editFormData.enderecoRua,
        enderecoNumero: editFormData.enderecoNumero,
        enderecoBairro: editFormData.enderecoBairro,
        enderecoCidade: editFormData.enderecoCidade,
        enderecoEstado: editFormData.enderecoEstado.toUpperCase(),
        enderecoCEP: editFormData.enderecoCEP,
      };

      const updatedEntry = await apiRequest(`${API_ENDPOINTS.waitlist}/${entryToEdit.id_Lista}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`,
        },
        body: JSON.stringify(updateData),
      });
      
      // Atualiza a lista local
      setWaitlistEntries(entries => 
        entries.map(entry => 
          entry.id_Lista === entryToEdit.id_Lista ? updatedEntry : entry
        )
      );
      
      toast.success("Entrada da lista de espera atualizada com sucesso!");
      
      // Fecha o dialog
      setEditDialogOpen(false);
      setEntryToEdit(null);
      setEditFormData({
        nomeRegistro: "",
        nomeSocial: "",
        CPF: "",
        telefonePessoal: "",
        contatoEmergencia: "",
        enderecoRua: "",
        enderecoNumero: "",
        enderecoBairro: "",
        enderecoCidade: "",
        enderecoEstado: "",
        enderecoCEP: ""
      });
    } catch (error) {
      console.error("Erro ao atualizar entrada da lista de espera:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    } finally {
      setIsUpdating(false);
    }
  };

  // Função para editar entrada
  const handleEdit = (entryId: string) => {
    const entry = filteredEntries.find(e => e.id_Lista === entryId);
    if (entry) {
      handleEditClick(entry);
    }
  };

  // Função para visualizar entrada
  const handleView = (entryId: string) => {
    const entry = filteredEntries.find(e => e.id_Lista === entryId);
    if (entry) {
      setEntryToView(entry);
      setViewDialogOpen(true);
    }
  };

  // Função para abrir dialog de exclusão
  const handleDeleteClick = (entry: WaitlistEntry) => {
    setEntryToDelete(entry);
    setDeleteDialogOpen(true);
  };

  // Função para excluir entrada da lista de espera
  const handleDelete = async () => {
    if (!entryToDelete) return;
    
    try {
      await apiRequest(`${API_ENDPOINTS.waitlist}/${entryToDelete.id_Lista}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      });

      setWaitlistEntries(entries => 
        entries.filter(entry => entry.id_Lista !== entryToDelete.id_Lista)
      );
      toast.success("Entrada da lista de espera excluída com sucesso!");
      
      setDeleteDialogOpen(false);
      setEntryToDelete(null);
    } catch (error) {
      console.error("Erro ao excluir entrada da lista de espera:", error);
      const { title, description } = getErrorMessage(error);
      toast.error(title, { description });
    }
  };

  // Função para formatar endereço completo
  const formatAddress = (entry: WaitlistEntry) => {
    return `${entry.enderecoRua}, ${entry.enderecoNumero} - ${entry.enderecoBairro}, ${entry.enderecoCidade}/${entry.enderecoEstado}`;
  };

  // Função para filtrar entradas
  const filterEntries = () => {
    let filtered = waitlistEntries;

    // Filtro por status
    if (statusFilter !== "all") {
      const statusId = parseInt(statusFilter);
      filtered = filtered.filter(entry => entry.id_Status === statusId);
    }

    // Filtro por pesquisa
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(entry =>
        entry.nomeRegistro.toLowerCase().includes(term) ||
        (entry.nomeSocial && entry.nomeSocial.toLowerCase().includes(term)) ||
        entry.telefonePessoal.includes(term) ||
        entry.enderecoCidade.toLowerCase().includes(term) ||
        entry.enderecoBairro.toLowerCase().includes(term)
      );
    }

    setFilteredEntries(filtered);
  };

  // Função para limpar filtros
  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
  };

  useEffect(() => {
    const fetchWaitlistEntries = async () => {
      if (!session || !session.token) {
        setError("Sessão ou token não disponível");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await apiRequest(API_ENDPOINTS.waitlist, {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        });
        setWaitlistEntries(data);
      } catch (err) {
        console.error("Erro ao buscar lista de espera:", err);
        const { title, description } = getErrorMessage(err);
        setError(description);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchWaitlistEntries();
    }
  }, [session, status]);

  // useEffect para aplicar filtros quando dados ou filtros mudam
  useEffect(() => {
    filterEntries();
  }, [waitlistEntries, searchTerm, statusFilter]);

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

  // Skeleton para carregamento das entradas
  if (loading) {
    return (
      <div className="w-full">
        <Table>
          <TableCaption>
            <Skeleton className="h-4 w-64 mx-auto" />
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Data de Nascimento</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data de Inscrição</TableHead>
              <TableHead className="text-center">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-28" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-6 w-16 rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-20" />
                </TableCell>
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
        <p className="text-red-600">Erro ao carregar lista de espera: {error}</p>
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
              placeholder="Pesquisar por nome, telefone ou cidade..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={statusFilter} onValueChange={(value: "all" | "1" | "2" | "3" | "4" | "5") => setStatusFilter(value)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="1">Em Espera</SelectItem>
              <SelectItem value="2">Em Atendimento</SelectItem>
              <SelectItem value="3">Recebeu Alta</SelectItem>
              <SelectItem value="4">Desistente</SelectItem>
              <SelectItem value="5">Desativado</SelectItem>
            </SelectContent>
          </Select>
          
          {(searchTerm || statusFilter !== "all") && (
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
          Total: <span className="font-medium text-foreground">{waitlistEntries.length}</span>
        </span>
        <span>
          Em Espera: <span className="font-medium text-blue-600">{waitlistEntries.filter(e => e.id_Status === 1).length}</span>
        </span>
        <span>
          Em Atendimento: <span className="font-medium text-green-600">{waitlistEntries.filter(e => e.id_Status === 2).length}</span>
        </span>
        <span>
          Recebeu Alta: <span className="font-medium text-gray-600">{waitlistEntries.filter(e => e.id_Status === 3).length}</span>
        </span>
        <span>
          Desistente: <span className="font-medium text-orange-600">{waitlistEntries.filter(e => e.id_Status === 4).length}</span>
        </span>
        <span>
          Desativado: <span className="font-medium text-red-600">{waitlistEntries.filter(e => e.id_Status === 5).length}</span>
        </span>
        {filteredEntries.length !== waitlistEntries.length && (
          <span>
            Exibindo: <span className="font-medium text-purple-600">{filteredEntries.length}</span>
          </span>
        )}
      </div>

      <Table>
        <TableCaption>
          Lista de espera do ARCA 
          {filteredEntries.length !== waitlistEntries.length 
            ? `(${filteredEntries.length} de ${waitlistEntries.length} ${waitlistEntries.length === 1 ? 'pessoa' : 'pessoas'})`
            : `(${waitlistEntries.length} ${waitlistEntries.length === 1 ? 'pessoa' : 'pessoas'})`
          }
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Data de Nascimento</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data de Inscrição</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEntries.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                {waitlistEntries.length === 0 
                  ? "Nenhuma entrada na lista de espera encontrada."
                  : "Nenhuma entrada encontrada com os filtros aplicados."
                }
              </TableCell>
            </TableRow>
          ) : (
            filteredEntries.map((entry) => (
            <TableRow key={entry.id_Lista}>
              <TableCell className="font-medium">
                <div>
                  <p className="font-medium">{entry.nomeRegistro}</p>
                  {entry.nomeSocial && (
                    <p className="text-sm text-muted-foreground">({entry.nomeSocial})</p>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {format(new Date(entry.dataNascimento), "dd/MM/yyyy", { locale: ptBR })}
              </TableCell>
              <TableCell>{entry.telefonePessoal}</TableCell>
              <TableCell>
                <Badge 
                  variant={STATUS_MAP[entry.id_Status as keyof typeof STATUS_MAP]?.variant || "secondary"}
                  className="text-xs"
                >
                  {STATUS_MAP[entry.id_Status as keyof typeof STATUS_MAP]?.label || `Status ${entry.id_Status}`}
                </Badge>
              </TableCell>
              <TableCell>
                {format(new Date(entry.createdAt), "dd/MM/yyyy", { locale: ptBR })}
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleView(entry.id_Lista)}
                    className="h-8 w-8 p-0"
                    title="Visualizar detalhes"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(entry.id_Lista)}
                    className="h-8 w-8 p-0"
                    title="Editar"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClick(entry)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    title="Excluir"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>

      {/* Dialog de confirmação de exclusão */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir a entrada de <strong>{entryToDelete?.nomeRegistro}</strong> da lista de espera?
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
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog de visualização detalhada */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Detalhes da Inscrição</DialogTitle>
            <DialogDescription>
              Informações completas da entrada na lista de espera
            </DialogDescription>
          </DialogHeader>
          {entryToView && (
            <div className="space-y-6">
              {/* Informações Pessoais */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Informações Pessoais</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">Nome de Registro</Label>
                    <p className="font-medium">{entryToView.nomeRegistro}</p>
                  </div>
                  {entryToView.nomeSocial && (
                    <div>
                      <Label className="text-muted-foreground">Nome Social</Label>
                      <p className="font-medium">{entryToView.nomeSocial}</p>
                    </div>
                  )}
                  <div>
                    <Label className="text-muted-foreground">CPF</Label>
                    <p className="font-medium font-mono">
                      {entryToView.CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
                    </p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Data de Nascimento</Label>
                    <p className="font-medium">
                      {format(new Date(entryToView.dataNascimento), "dd/MM/yyyy", { locale: ptBR })}
                    </p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Status</Label>
                    <Badge 
                      variant={STATUS_MAP[entryToView.id_Status as keyof typeof STATUS_MAP]?.variant || "secondary"}
                      className="text-xs"
                    >
                      {STATUS_MAP[entryToView.id_Status as keyof typeof STATUS_MAP]?.label || `Status ${entryToView.id_Status}`}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Contatos */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Contatos</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">Telefone Pessoal</Label>
                    <p className="font-medium">{entryToView.telefonePessoal}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Contato de Emergência</Label>
                    <p className="font-medium">{entryToView.contatoEmergencia}</p>
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Endereço</h4>
                <div className="text-sm">
                  <Label className="text-muted-foreground">Endereço Completo</Label>
                  <p className="font-medium">{formatAddress(entryToView)}</p>
                  <p className="text-muted-foreground">CEP: {entryToView.enderecoCEP}</p>
                </div>
              </div>

              {/* Informações de Sistema */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-primary">Informações do Sistema</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Label className="text-muted-foreground">ID da Lista</Label>
                    <p className="font-mono text-xs break-all">{entryToView.id_Lista}</p>
                  </div>
                  <div>
                    <Label className="text-muted-foreground">Data de Inscrição</Label>
                    <p className="font-medium">
                      {format(new Date(entryToView.createdAt), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
                    </p>
                  </div>
                </div>
              </div>
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

      {/* Dialog de edição de entrada */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar entrada da lista de espera</DialogTitle>
            <DialogDescription>
              Faça as alterações necessárias nos dados da pessoa.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Informações Pessoais */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-primary">Informações Pessoais</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nomeRegistro">Nome de Registro</Label>
                  <Input
                    id="nomeRegistro"
                    value={editFormData.nomeRegistro}
                    onChange={(e) => setEditFormData({ ...editFormData, nomeRegistro: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="nomeSocial">Nome Social</Label>
                  <Input
                    id="nomeSocial"
                    value={editFormData.nomeSocial}
                    onChange={(e) => setEditFormData({ ...editFormData, nomeSocial: e.target.value })}
                    placeholder="Opcional"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="CPF">CPF</Label>
                <Input
                  id="CPF"
                  value={editFormData.CPF}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    setEditFormData({ ...editFormData, CPF: value });
                  }}
                  maxLength={11}
                  placeholder="Digite apenas números"
                />
              </div>
            </div>

            {/* Contatos */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-primary">Contatos</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="telefonePessoal">Telefone Pessoal</Label>
                  <Input
                    id="telefonePessoal"
                    value={editFormData.telefonePessoal}
                    onChange={(e) => setEditFormData({ ...editFormData, telefonePessoal: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contatoEmergencia">Contato de Emergência</Label>
                  <Input
                    id="contatoEmergencia"
                    value={editFormData.contatoEmergencia}
                    onChange={(e) => setEditFormData({ ...editFormData, contatoEmergencia: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="space-y-4">
              <h4 className="font-semibold text-sm text-primary">Endereço</h4>
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                  <Label htmlFor="enderecoRua">Rua</Label>
                  <Input
                    id="enderecoRua"
                    value={editFormData.enderecoRua}
                    onChange={(e) => setEditFormData({ ...editFormData, enderecoRua: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="enderecoNumero">Número</Label>
                  <Input
                    id="enderecoNumero"
                    value={editFormData.enderecoNumero}
                    onChange={(e) => setEditFormData({ ...editFormData, enderecoNumero: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="enderecoBairro">Bairro</Label>
                  <Input
                    id="enderecoBairro"
                    value={editFormData.enderecoBairro}
                    onChange={(e) => setEditFormData({ ...editFormData, enderecoBairro: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="enderecoCidade">Cidade</Label>
                  <Input
                    id="enderecoCidade"
                    value={editFormData.enderecoCidade}
                    onChange={(e) => setEditFormData({ ...editFormData, enderecoCidade: e.target.value })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="enderecoEstado">Estado</Label>
                    <Input
                      id="enderecoEstado"
                      value={editFormData.enderecoEstado}
                      onChange={(e) => setEditFormData({ ...editFormData, enderecoEstado: e.target.value.toUpperCase() })}
                      maxLength={2}
                    />
                  </div>
                  <div>
                    <Label htmlFor="enderecoCEP">CEP</Label>
                    <Input
                      id="enderecoCEP"
                      value={editFormData.enderecoCEP}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setEditFormData({ ...editFormData, enderecoCEP: value });
                      }}
                      maxLength={8}
                    />
                  </div>
                </div>
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
              onClick={handleUpdateEntry}
              disabled={isUpdating || !editFormData.nomeRegistro || !editFormData.telefonePessoal}
            >
              {isUpdating ? "Salvando..." : "Salvar alterações"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}