"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { usePermissions } from "@/hooks/usePermissions";
import { apiService } from "@/utils/apiHandler";
import { z } from "zod";

// Schema de validação Zod
const createUserSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .trim(),
  email: z
    .string()
    .min(1, "Email é obrigatório")
    .email("Email deve ter um formato válido")
    .max(100, "Email deve ter no máximo 100 caracteres")
    .trim(),
  senha: z
    .string()
    .min(8, "Senha deve ter no mínimo 8 caracteres")
    .max(255, "Senha deve ter no máximo 255 caracteres"),
  roleId: z
    .number()
    .min(1, "Função é obrigatória")
    .int("Função deve ser um número inteiro")
});

interface CreateUserData {
  nome: string;
  email: string;
  senha: string;
  roleId: number;
}

type CreateUserFormErrors = {
  [K in keyof CreateUserData]?: string;
};

interface ReactivationOption {
  show: boolean;
  userId?: string;
  userName?: string;
  message?: string;
}

export default function CreateUserForm() {
  const router = useRouter();
  const { data: session } = useSession();
  const { canCreateUsers } = usePermissions();

  // Estados do formulário
  const [formData, setFormData] = useState<CreateUserData>({
    nome: "",
    email: "",
    senha: "",
    roleId: 4 // Estagiário por padrão (número)
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<CreateUserFormErrors>({});
  const [reactivationOption, setReactivationOption] = useState<ReactivationOption>({
    show: false
  });

  // Mapear roles baseado no nível de acesso do usuário logado
  const getAvailableRoles = () => {
    const userRoleId = session?.user?.roleId;
    const roles = [
      { value: 1, label: "Coordenador/Admin", disabled: userRoleId !== 1 },
      { value: 2, label: "Secretário", disabled: userRoleId === undefined || userRoleId > 2 },
      { value: 3, label: "Supervisor", disabled: userRoleId === undefined || userRoleId > 2 },
      { value: 4, label: "Estagiário", disabled: false }
    ];
    
    // Filtrar apenas roles que o usuário pode criar
    return roles.filter(role => !role.disabled);
  };

  const handleInputChange = (field: keyof CreateUserData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: field === 'roleId' ? Number(value) : value
    }));
    
    // Limpa o erro do campo quando o usuário começa a digitar
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    try {
      // Garantir que roleId seja um número
      const dataToValidate = {
        ...formData,
        roleId: Number(formData.roleId)
      };
      
      createUserSchema.parse(dataToValidate);
      setFormErrors({});
      
      // Atualizar formData com roleId como número
      setFormData(dataToValidate);
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: CreateUserFormErrors = {};
        error.issues.forEach((issue) => {
          const field = issue.path[0] as keyof CreateUserData;
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
      const newUser = await apiService.createUser(formData, session!.token);
      
      toast.success("Usuário criado com sucesso!");
      router.push("/dashboard/usuarios");
      
    } catch (error: any) {
      console.error("Erro ao criar usuário:", error);
      
      // Verifica se é um conflito (usuário desativado)
      if (error?.status === 409) {
        setReactivationOption({
          show: true,
          userId: error.userId,
          userName: error.userName || "usuário desconhecido",
          message: error.message || "Usuário desativado encontrado"
        });
      } else {
        toast.error(error instanceof Error ? error.message : "Erro ao criar usuário");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleReactivateUser = async () => {
    if (!reactivationOption.userId) {
      toast.error("ID do usuário não encontrado para reativação");
      return;
    }

    setIsLoading(true);
    
    try {
      // Usa o ID retornado diretamente pelo backend
      await apiService.reactivateUser(reactivationOption.userId, session!.token);
      
      toast.success(`Usuário ${reactivationOption.userName} reativado com sucesso!`);
      router.push("/dashboard/usuarios");
      
    } catch (error: any) {
      console.error("Erro ao reativar usuário:", error);
      toast.error(error instanceof Error ? error.message : "Erro ao reativar usuário");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelReactivation = () => {
    setReactivationOption({ show: false });
  };

  // Se não tem permissão, não renderiza o formulário
  if (!session || !canCreateUsers()) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-center text-muted-foreground">
            Você não tem permissão para criar usuários.
          </p>
        </CardContent>
      </Card>
    );
  }

  const availableRoles = getAvailableRoles();

  return (
    <>
      {/* Formulário de Reativação */}
      {reactivationOption.show ? (
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800">Usuário Desativado Encontrado</CardTitle>
            <CardDescription className="text-orange-700">
              {reactivationOption.message}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-orange-100 rounded-lg">
                <h4 className="font-medium text-orange-800 mb-2">O que você gostaria de fazer?</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• <strong>Reativar:</strong> O usuário {reactivationOption.userName} voltará a ter acesso ao sistema</li>
                  <li>• <strong>Cancelar:</strong> Voltar ao formulário de criação para escolher outro email</li>
                </ul>
              </div>

              <div className="flex justify-end space-x-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancelReactivation}
                  disabled={isLoading}
                >
                  Cancelar
                </Button>
                <Button
                  type="button"
                  onClick={handleReactivateUser}
                  disabled={isLoading}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Reativando...
                    </>
                  ) : (
                    `Reativar ${reactivationOption.userName}`
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        /* Formulário Principal */
        <Card>
          <CardHeader>
            <CardTitle>Informações do Usuário</CardTitle>
            <CardDescription>
              Preencha os dados do novo usuário. Todos os campos são obrigatórios.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados pessoais */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">
                    Nome Completo <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="nome"
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    placeholder="Digite o nome completo"
                    maxLength={50}
                    disabled={isLoading}
                    required
                    className={formErrors.nome ? "border-destructive" : ""}
                  />
                  {formErrors.nome && (
                    <p className="text-xs text-destructive">{formErrors.nome}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Máximo 50 caracteres
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="usuario@exemplo.com"
                    maxLength={100}
                    disabled={isLoading}
                    required
                    className={formErrors.email ? "border-destructive" : ""}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-destructive">{formErrors.email}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Máximo 100 caracteres
                  </p>
                </div>
              </div>

              {/* Função e Senha */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="roleId">
                    Função <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.roleId?.toString()}
                    onValueChange={(value) => handleInputChange("roleId", parseInt(value))}
                    disabled={isLoading}
                  >
                    <SelectTrigger className={formErrors.roleId ? "border-destructive" : ""}>
                      <SelectValue placeholder="Selecione uma função" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableRoles.map((role) => (
                        <SelectItem key={role.value} value={role.value.toString()}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {formErrors.roleId && (
                    <p className="text-xs text-destructive">{formErrors.roleId}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Você só pode criar usuários com nível igual ou inferior ao seu
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="senha">
                    Senha Temporária <span className="text-destructive">*</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="senha"
                      type={showPassword ? "text" : "password"}
                      value={formData.senha}
                      onChange={(e) => handleInputChange("senha", e.target.value)}
                      placeholder="Digite uma senha temporária"
                      minLength={8}
                      maxLength={255}
                      disabled={isLoading}
                      required
                      className={formErrors.senha ? "border-destructive" : ""}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {formErrors.senha && (
                    <p className="text-xs text-destructive">{formErrors.senha}</p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Mínimo 8 caracteres. O usuário deverá alterar no primeiro acesso.
                  </p>
                </div>
              </div>

              {/* Informações importantes */}
              <div className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium mb-2">Informações Importantes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• O usuário receberá as credenciais por email (quando implementado)</li>
                  <li>• A senha deverá ser alterada no primeiro acesso</li>
                  <li>• O usuário será criado com status ativo por padrão</li>
                  <li>• Apenas usuários com permissão adequada podem criar outros usuários</li>
                </ul>
              </div>

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
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Criando...
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4" />
                      Criar Usuário
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
}
