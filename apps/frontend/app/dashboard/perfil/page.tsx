"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, IdCard, Save, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { apiService } from "@/utils/apiHandler";
import { z } from "zod";

// Schema de validação
const updateProfileSchema = z.object({
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
        .max(255, "Senha deve ter no máximo 255 caracteres")
        .optional()
        .or(z.literal("")),
    crp: z
        .string()
        .regex(
            /^\d{2}\/\d{5,6}$/,
            "O CRP é inválido. O formato esperado é XX/XXXXX ou XX/XXXXXX (ex: 06/12345)",
        )
        .optional()
        .or(z.literal("")),
});

interface ProfileFormData {
    nome: string;
    email: string;
    senha: string;
    crp: string;
}

type ProfileFormErrors = {
    [K in keyof ProfileFormData]?: string;
};

export default function PerfilPage() {
    const { data: session, update } = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState<ProfileFormData>({
        nome: session?.user?.name || "",
        email: session?.user?.email || "",
        senha: "",
        crp: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formErrors, setFormErrors] = useState<ProfileFormErrors>({});

    const handleInputChange = (field: keyof ProfileFormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Limpa o erro do campo quando o usuário começa a digitar
        if (formErrors[field]) {
            setFormErrors((prev) => ({
                ...prev,
                [field]: undefined,
            }));
        }
    };

    const validateForm = (): boolean => {
        try {
            updateProfileSchema.parse(formData);
            setFormErrors({});

            // Validação customizada para CRP se for supervisor
            if (
                session?.user?.roleId === 3 &&
                formData.crp &&
                formData.crp.trim() !== ""
            ) {
                const crpRegex = /^\d{2}\/\d{5,6}$/;
                if (!crpRegex.test(formData.crp)) {
                    setFormErrors({
                        crp: "O CRP é inválido. O formato esperado é XX/XXXXX ou XX/XXXXXX (ex: 06/12345)",
                    });
                    return false;
                }
            }

            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const errors: ProfileFormErrors = {};
                error.issues.forEach((issue) => {
                    const field = issue.path[0] as keyof ProfileFormData;
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
            // Preparar dados para envio
            const updateData: any = {
                nome: formData.nome,
                email: formData.email,
            };

            // Adicionar senha apenas se foi preenchida
            if (formData.senha && formData.senha.trim() !== "") {
                updateData.senha = formData.senha;
            }

            // Adicionar CRP apenas se for supervisor E tiver valor
            if (
                session?.user?.roleId === 3 &&
                formData.crp &&
                formData.crp.trim() !== ""
            ) {
                updateData.crp = formData.crp;
            }

            const updatedUser = await apiService.updateUser(
                session!.user.id,
                updateData,
                session!.token,
            );

            // Atualizar a sessão com os novos dados
            await update({
                ...session,
                user: {
                    ...session?.user,
                    name: updatedUser.nome,
                    email: updatedUser.email,
                },
            });

            toast.success("Perfil atualizado com sucesso!");

            // Limpar senha do formulário
            setFormData((prev) => ({ ...prev, senha: "" }));
        } catch (error: any) {
            console.error("Erro ao atualizar perfil:", error);
            toast.error(
                error instanceof Error ? error.message : "Erro ao atualizar perfil",
            );
        } finally {
            setIsLoading(false);
        }
    };

    if (!session) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-muted-foreground">Carregando...</p>
            </div>
        );
    }

    const getRoleLabel = (roleId?: number) => {
        const roleMap = {
            1: "Coordenador/Admin",
            2: "Secretário",
            3: "Supervisor",
            4: "Estagiário",
        };
        return roleMap[roleId as keyof typeof roleMap] || "Desconhecido";
    };

    const isSupervisor = session.user.roleId === 3;

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Meu Perfil</h1>
                <p className="text-gray-600">
                    Gerencie suas informações pessoais e configurações de conta
                </p>
            </div>

            <div className="grid gap-6">
                {/* Informações da Conta */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5" />
                            Informações da Conta
                        </CardTitle>
                        <CardDescription>
                            Atualize seus dados pessoais. Certifique-se de usar um email
                            válido.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nome e Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="nome" className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Nome Completo
                                    </Label>
                                    <Input
                                        id="nome"
                                        type="text"
                                        value={formData.nome}
                                        onChange={(e) => handleInputChange("nome", e.target.value)}
                                        placeholder="Seu nome completo"
                                        maxLength={50}
                                        disabled={isLoading}
                                        required
                                        className={formErrors.nome ? "border-destructive" : ""}
                                    />
                                    {formErrors.nome && (
                                        <p className="text-xs text-destructive">
                                            {formErrors.nome}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="seu@email.com"
                                        maxLength={100}
                                        disabled={isLoading}
                                        required
                                        className={formErrors.email ? "border-destructive" : ""}
                                    />
                                    {formErrors.email && (
                                        <p className="text-xs text-destructive">
                                            {formErrors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Função (somente leitura) */}
                            <div className="space-y-2">
                                <Label>Função no Sistema</Label>
                                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                                    <IdCard className="h-4 w-4 text-muted-foreground" />
                                    <span className="font-medium">
                                        {getRoleLabel(session.user.roleId)}
                                    </span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Sua função não pode ser alterada. Entre em contato com um
                                    administrador.
                                </p>
                            </div>

                            <Separator />

                            {/* CRP - Apenas para Supervisores */}
                            {isSupervisor && (
                                <>
                                    <div className="space-y-2">
                                        <Label htmlFor="crp" className="flex items-center gap-2">
                                            <IdCard className="h-4 w-4" />
                                            CRP (Conselho Regional de Psicologia)
                                        </Label>
                                        <Input
                                            id="crp"
                                            type="text"
                                            value={formData.crp}
                                            onChange={(e) => handleInputChange("crp", e.target.value)}
                                            placeholder="Ex: 06/12345"
                                            maxLength={9}
                                            disabled={isLoading}
                                            className={formErrors.crp ? "border-destructive" : ""}
                                        />
                                        {formErrors.crp && (
                                            <p className="text-xs text-destructive">
                                                {formErrors.crp}
                                            </p>
                                        )}
                                        <p className="text-xs text-muted-foreground">
                                            Formato: XX/XXXXX ou XX/XXXXXX (ex: 06/12345)
                                        </p>
                                    </div>
                                    <Separator />
                                </>
                            )}

                            {/* Senha */}
                            <div className="space-y-2">
                                <Label htmlFor="senha" className="flex items-center gap-2">
                                    <Lock className="h-4 w-4" />
                                    Nova Senha (opcional)
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="senha"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.senha}
                                        onChange={(e) => handleInputChange("senha", e.target.value)}
                                        placeholder="Deixe em branco para manter a senha atual"
                                        minLength={8}
                                        maxLength={255}
                                        disabled={isLoading}
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
                                    Mínimo 8 caracteres. Deixe em branco para manter a senha
                                    atual.
                                </p>
                            </div>

                            {/* Informação de segurança */}
                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h4 className="font-medium text-blue-900 mb-2">
                                    🔒 Segurança da Conta
                                </h4>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Use uma senha forte com letras, números e símbolos</li>
                                    <li>• Não compartilhe suas credenciais com outras pessoas</li>
                                    <li>
                                        • Mantenha seu email atualizado para recuperação de senha
                                    </li>
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
                                            Salvando...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="h-4 w-4" />
                                            Salvar Alterações
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
