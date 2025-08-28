"use client";

import { signOut, useSession } from "next-auth/react";
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
import { Edit, Trash2 } from "lucide-react";
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

interface User {
  id_User: string;
  nome: string;
  email: string;
  roleId: number; // Mudança: number ao invés de string para coincidir com o backend
  role?: {
    id_Role: string;
    role: string;
    descricao: string;
  };
}

export function UsersTable() {
  // Use também o 'status' para um controle de UI mais robusto
  const { data: session, status } = useSession();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // Pode ser renomeado para isFetchingUsers
  const [error, setError] = useState<string | null>(null);

  // Estados para deleção de usuário
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  
  // Estados para edição de usuário
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);
  const [editFormData, setEditFormData] = useState({
    nome: "",
    email: ""
  });
  const [isUpdating, setIsUpdating] = useState(false);

  // Função para abrir dialog de edição
  const handleEditClick = (user: User) => {
    setUserToEdit(user);
    setEditFormData({
      nome: user.nome,
      email: user.email
    });
    setEditDialogOpen(true);
  };

  // Função para atualizar usuário
  const handleUpdateUser = async () => {
    if (!userToEdit) return;

    setIsUpdating(true);
    try {
      // Preparar dados para envio - apenas nome e email
      const updateData = {
        nome: editFormData.nome,
        email: editFormData.email,
      };

      const response = await fetch(`http://localhost:3333/users/${userToEdit.id_User}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.token}`,
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Falha ao atualizar usuário");
      }

      const updatedUser = await response.json();
      
      // Atualiza a lista local
      setUsers(users.map(user => 
        user.id_User === userToEdit.id_User ? updatedUser : user
      ));
      
      toast.success("Usuário atualizado com sucesso!");
      
      // Fecha o dialog
      setEditDialogOpen(false);
      setUserToEdit(null);
      setEditFormData({ nome: "", email: "" });
    } catch (err) {
      console.error("Erro ao atualizar usuário:", err);
      toast.error("Erro ao atualizar usuário. Tente novamente.");
    } finally {
      setIsUpdating(false);
    }
  };

  // Função para editar usuário
  const handleEdit = (userId: string) => {
    const user = users.find(u => u.id_User === userId);
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
      const response = await fetch(`http://localhost:3333/users/${userToDelete.id_User}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Falha ao excluir usuário");
      }

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

  useEffect(() => {
    const fetchUsers = async () => {
      if (!session || !session.token) {
        setError("Sessão ou token não disponível");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch("http://localhost:3333/users", {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Falha ao buscar usuários");
        }

        const data = await response.json();
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

  // UI melhorada para lidar com o carregamento da sessão
  if (status === "loading") {
    return <div className="p-4">Carregando sessão...</div>;
  }

  if (loading) {
    return <div className="p-4">Buscando usuários...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Erro: {error}<Button onClick={() => signOut({ callbackUrl: '/login' })} variant="outline">
        Sair
      </Button></div>;
  }

  // Filtrar usuários para não mostrar o usuário atualmente logado
  const filteredUsers = users.filter(user => user.id_User !== session?.user?.id);

  return (
    <div className="w-full">
      <Table>
        <TableCaption>Lista de usuários do sistema (exceto você)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Tipo de usuário</TableHead>
            <TableHead className="text-center">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id_User}>
              <TableCell className="font-medium">{user.nome}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="justify">{user.role?.role || getRoleName(user.roleId)}</TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(user.id_User)}
                    className="h-8 w-8 p-0"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteClick(user)}
                    className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={() => signOut({ callbackUrl: '/login' })} variant="outline">
        Sair
      </Button>

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
