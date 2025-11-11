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
import { Edit, Trash2, Search, Filter, X } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ConditionalRender } from "@/components/auth/ConditionalRender";
import { apiService } from "@/utils/apiHandler";
import { UpdateUserData } from "@/types/api";

interface User {
  id_User: string;
  nome: string;
  email: string;
  roleId: number; // Mudança: number ao invés de string para coincidir com o backend
  CRP?: string; // Adicionado campo CRP
  role?: {
    id_Role: string;
    role: string;
    descricao: string;
  };
}

export function UsersTable() {
  const { data: session, status } = useSession();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados para filtros e pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "1" | "2" | "3" | "4">("all");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  // Estados para deleção de usuário
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  
  // Estados para edição de usuário
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const [editFormData, setEditFormData] = useState({
    nome: "",
    email: "",
    crp: ""
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Função para abrir dialog de edição
  const handleEditClick = (user: User) => {
    setUserToEdit(user);
    setEditFormData({
      nome: user.nome,
      email: user.email,
      crp: user.CRP || ""
    });
    setEditDialogOpen(true);
  };

  // Função para atualizar usuário
  const handleUpdateUser = async () => {
    if (!userToEdit) return;

    setIsUpdating(true);
    try {
      // Preparar dados para envio - nome, email e CRP se for supervisor
      const updateData: UpdateUserData = {
        nome: editFormData.nome,
        email: editFormData.email,
      };

      // Adicionar CRP apenas se for supervisor (roleId 3)
      if (userToEdit.roleId === 3) {
        updateData.crp = editFormData.crp;
      }

      const updatedUser = await apiService.updateUser(userToEdit.id_User, updateData, session?.token || '');
      
      // Atualiza a lista local
      setUsers(users.map(user => 
        user.id_User === userToEdit.id_User ? updatedUser : user
      ));
      
      toast.success("Usuário atualizado com sucesso!");
      
      // Fecha o dialog
      setEditDialogOpen(false);
      setUserToEdit(null);
      setEditFormData({ nome: "", email: "", crp: "" });
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      toast.error("Erro ao atualizar usuário. Tente novamente.");
    } finally {
      setIsUpdating(false);
    }
  };

  // Função para editar usuário
  const handleEdit = (userId: string) => {
    const user = filteredUsers.find(u => u.id_User === userId);
    if (user) {
      handleEditClick(user);
    }
  };

  // Função para abrir dialog de exclusão
  const handleDeleteClick = (user: User) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  // Função para excluir usuário
  const handleDelete = async () => {
    if (!userToDelete) return;
    console.log("Excluir usuário:", userToDelete);
    try {
      await apiService.deleteUser(userToDelete.id_User, session?.token || '');

      setUsers(users.filter(user => user.id_User !== userToDelete.id_User));
      toast.success("Usuário excluído com sucesso!");
      
      setDeleteDialogOpen(false);
      setUserToDelete(null);
    } catch (err) {
      console.error("Erro ao excluir usuário:", err);
      toast.error("Erro ao excluir usuário. Tente novamente.");
    }
  };

  // Função para mapear roleId para nome do papel
  const getRoleName = (roleId: string | number) => {
    const roleMap = {
      1: "Coordenador/Admin",
      2: "Secretário",
      3: "Supervisor", 
      4: "Estagiário"
    };
    // Converte para number se for string
    const numericRoleId = typeof roleId === 'string' ? parseInt(roleId) : roleId;
    return roleMap[numericRoleId as keyof typeof roleMap] || `Role ${roleId}`;
  };

  // Função para determinar quais usuários o usuário atual pode ver
  const getAccessibleUsers = () => {
    const currentUserRole = session?.user?.roleId || 4; // Default para Estagiário se não definido
    
    // Remove o usuário logado da lista
    let accessibleUsers = users.filter(user => user.id_User !== session?.user?.id);

    // Aplica filtro baseado no nível de acesso
    switch (currentUserRole) {
      case 1: // Coordenador/Admin - pode ver todos
        break;
      case 2: // Secretário - pode ver Supervisores e Estagiários
        accessibleUsers = accessibleUsers.filter(user => user.roleId > 2);
        break;
      case 3: // Supervisor - pode ver apenas Estagiários  
        accessibleUsers = accessibleUsers.filter(user => user.roleId > 3);
        break;
      case 4: // Estagiário - pode ver apenas outros Estagiários
        accessibleUsers = accessibleUsers.filter(user => user.roleId === 4);
        break;
      default:
        // Se role não reconhecido, só pode ver estagiários
        accessibleUsers = accessibleUsers.filter(user => user.roleId === 4);
    }
    
    return accessibleUsers;
  };

  // Função para filtrar usuários
  const filterUsers = () => {
    // Pega apenas os usuários que o usuário atual pode ver
    let filtered = getAccessibleUsers();

    // Filtro por role
    if (roleFilter !== "all") {
      filtered = filtered.filter(user => user.roleId === parseInt(roleFilter));
    }

    // Filtro por pesquisa
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(user =>
        user.nome.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        (user.role?.role && user.role.role.toLowerCase().includes(term))
      );
    }

    setFilteredUsers(filtered);
  };

  // Função para limpar filtros
  const clearFilters = () => {
    setSearchTerm("");
    setRoleFilter("all");
  };

  useEffect(() => {
    const fetchUsers = async () => {
      if (!session || !session.token) {
        setError("Sessão ou token não disponível");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await apiService.getUsers(session.token);
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    // 2. Verifique se a sessão foi carregada E existe (status === 'authenticated')
    // ANTES de chamar a função de fetch.
    if (status === "authenticated") {
      fetchUsers();
    }

    // 1. Adicione 'session' e 'status' ao array de dependências.
    // O useEffect agora será re-executado quando o status da sessão mudar.
  }, [session, status]);

  // useEffect para aplicar filtros quando dados ou filtros mudam
  useEffect(() => {
    filterUsers();
  }, [users, searchTerm, roleFilter, session?.user?.id]);

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

  // Skeleton para carregamento dos usuários
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
              <TableHead>Email</TableHead>
              <TableHead>Tipo de usuário</TableHead>
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
                  <Skeleton className="h-4 w-48" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center gap-2">
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-8 w-8 rounded" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Skeleton className="h-10 w-20 mt-4" />
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
              placeholder="Pesquisar por nome, email ou tipo de usuário..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Select value={roleFilter} onValueChange={(value: "all" | "1" | "2" | "3" | "4") => setRoleFilter(value)}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filtrar por tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              {session?.user?.roleId === 1 && (
                <SelectItem value="1">Coordenador/Admin</SelectItem>
              )}
              {(session?.user?.roleId === 1 || session?.user?.roleId === 2) && (
                <SelectItem value="2">Secretário</SelectItem>
              )}
              {(session?.user?.roleId === 1 || session?.user?.roleId === 2 || session?.user?.roleId === 3) && (
                <SelectItem value="3">Supervisor</SelectItem>
              )}
              <SelectItem value="4">Estagiário</SelectItem>
            </SelectContent>
          </Select>
          
          {(searchTerm || roleFilter !== "all") && (
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
          Total: <span className="font-medium text-foreground">{getAccessibleUsers().length}</span>
        </span>
        {session?.user?.roleId === 1 && (
          <span>
            Coordenadores: <span className="font-medium text-blue-600">{getAccessibleUsers().filter(u => u.roleId === 1).length}</span>
          </span>
        )}
        {(session?.user?.roleId === 1 || session?.user?.roleId === 2) && (
          <span>
            Secretários: <span className="font-medium text-green-600">{getAccessibleUsers().filter(u => u.roleId === 2).length}</span>
          </span>
        )}
        {(session?.user?.roleId === 1 || session?.user?.roleId === 2 || session?.user?.roleId === 3) && (
          <span>
            Supervisores: <span className="font-medium text-yellow-600">{getAccessibleUsers().filter(u => u.roleId === 3).length}</span>
          </span>
        )}
        <span>
          Estagiários: <span className="font-medium text-purple-600">{getAccessibleUsers().filter(u => u.roleId === 4).length}</span>
        </span>
        {filteredUsers.length !== getAccessibleUsers().length && (
          <span>
            Exibindo: <span className="font-medium text-orange-600">{filteredUsers.length}</span>
          </span>
        )}
      </div>

      <Table>
        <TableCaption>
          Lista de usuários do sistema 
          {filteredUsers.length !== getAccessibleUsers().length 
            ? `(${filteredUsers.length} de ${getAccessibleUsers().length} usuários)`
            : `(${getAccessibleUsers().length} usuários acessíveis)`
          }
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Tipo de usuário</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                {getAccessibleUsers().length === 0 
                  ? "Nenhum usuário acessível encontrado no sistema."
                  : "Nenhum usuário encontrado com os filtros aplicados."
                }
              </TableCell>
            </TableRow>
          ) : (
            filteredUsers.map((user) => (
            <TableRow key={user.id_User}>
              <TableCell className="font-medium">{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="justify">{user.role?.role || getRoleName(user.roleId)}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <ConditionalRender requiredMaxRole={2}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(user.id_User)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </ConditionalRender>
                  <ConditionalRender requiredMaxRole={1}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteClick(user)}
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </ConditionalRender>
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
              Tem certeza que deseja excluir o usuário <strong>{userToDelete?.nome}</strong>?
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

      {/* Dialog de edição de usuário */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Editar usuário</DialogTitle>
            <DialogDescription>
              Faça as alterações necessárias nos dados do usuário.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nome" className="text-right">
                Nome
              </Label>
              <Input
                id="nome"
                value={editFormData.nome}
                onChange={(e) => setEditFormData({ ...editFormData, nome: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={editFormData.email}
                onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                className="col-span-3"
              />
            </div>
            {/* Campo CRP - Apenas para Supervisores */}
            {userToEdit && userToEdit.roleId === 3 && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="crp" className="text-right">
                  CRP
                </Label>
                <Input
                  id="crp"
                  type="text"
                  placeholder="Ex: 06/12345"
                  maxLength={9}
                  value={editFormData.crp}
                  onChange={(e) => setEditFormData({ ...editFormData, crp: e.target.value })}
                  className="col-span-3"
                />
              </div>
            )}
            {/* Mostrar o tipo como informação somente leitura para todos */}
            {userToEdit && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">
                  Tipo
                </Label>
                <div className="col-span-3 px-3 py-2 text-sm bg-gray-50 rounded-md">
                  {userToEdit.role?.role || getRoleName(userToEdit.roleId)}
                </div>
              </div>
            )}
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
              onClick={handleUpdateUser}
              disabled={isUpdating || !editFormData.nome || !editFormData.email}
            >
              {isUpdating ? "Salvando..." : "Salvar alterações"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
