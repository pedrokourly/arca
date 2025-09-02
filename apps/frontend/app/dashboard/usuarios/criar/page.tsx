"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { usePermissions } from "@/hooks/usePermissions";
import { apiService } from "@/utils/apiHandler";

interface CreateUserData {
  nome: string;
  email: string;
  senha: string;
  roleId: number;
}

export default function CriarUsuarioPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { canCreateUsers } = usePermissions();

  // Estados do formulário
  const [formData, setFormData] = useState<CreateUserData>({
    nome: "",
    email: "",
    senha: "",
    roleId: 4 // Estagiário por padrão
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Proteção client-side
  useEffect(() => {
    if (status === "loading") return;
    
    if (!session) {
      router.push("/login");
      return;
    }

    // Verifica se tem permissão para criar usuários
    if (!canCreateUsers()) {
      router.push("/dashboard/unauthorized");
      return;
    }
  }, [session, status, router, canCreateUsers]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Se não tem permissão, não renderiza
  if (!session || !canCreateUsers()) {
    return null;
  }

  // Mapear roles baseado no nível de acesso do usuário logado
  const getAvailableRoles = () => {
    const userRoleId = session.user?.roleId;
    const roles = [
      { value: 1, label: "Coordenador/Admin", disabled: userRoleId !== 1 },
      { value: 2, label: "Secretário", disabled: userRoleId > 2 },
      { value: 3, label: "Supervisor", disabled: userRoleId > 2 },
      { value: 4, label: "Estagiário", disabled: false }
    ];
    
    // Filtrar apenas roles que o usuário pode criar
    return roles.filter(role => !role.disabled);
  };

  const handleInputChange = (field: keyof CreateUserData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nome.trim()) {
      toast.error("Nome é obrigatório");
      return false;
    }
    
    if (formData.nome.length > 50) {
      toast.error("Nome deve ter no máximo 50 caracteres");
      return false;
    }

    if (!formData.email.trim()) {
      toast.error("Email é obrigatório");
      return false;
    }

    if (formData.email.length > 100) {
      toast.error("Email deve ter no máximo 100 caracteres");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Email deve ter um formato válido");
      return false;
    }

    if (!formData.senha.trim()) {
      toast.error("Senha é obrigatória");
      return false;
    }

    if (formData.senha.length < 8) {
      toast.error("Senha deve ter no mínimo 8 caracteres");
      return false;
    }

    if (!formData.roleId) {
      toast.error("Função é obrigatória");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const newUser = await apiService.createUser(formData, session.token);
      console.log(JSON.stringify(formData));
      
      toast.success("Usuário criado com sucesso!");
      router.push("/dashboard/usuarios");
      
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      toast.error(error instanceof Error ? error.message : "Erro ao criar usuário");
    } finally {
      setIsLoading(false);
    }
  };

  const availableRoles = getAvailableRoles();

  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <UserPlus className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Criar Usuário
              </h1>
              <p className="text-muted-foreground">
                Adicione um novo usuário ao sistema ARCA
              </p>
            </div>
          </div>
        </div>

        {/* Formulário */}
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
                  />
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
                  />
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
                    <SelectTrigger>
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
      </div>
    </div>
  );
}
