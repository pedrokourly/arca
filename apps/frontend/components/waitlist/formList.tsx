"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, InfoIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";

const formSchema = z.object({
  nomeRegistro: z
    .string()
    .min(1, {
      message: "Nome de registro deve ter entre 1 e 150 caracteres.",
    })
    .max(150, {
      message: "Nome de registro deve ter entre 1 e 150 caracteres.",
    }),
  nomeSocial: z
    .string()
    .min(1, {
      message: "Nome social deve ter entre 1 e 100 caracteres.",
    })
    .max(100, {
      message: "Nome social deve ter entre 1 e 100 caracteres.",
    })
    .optional(),
  dataNascimento: z.date({
    message: "Data de nascimento é obrigatória.",
  }),
  telefonePessoal: z
    .string()
    .min(1, {
      message: "Telefone pessoal deve ter entre 1 e 20 caracteres.",
    })
    .max(20, {
      message: "Telefone pessoal deve ter entre 1 e 20 caracteres.",
    }),
  contatoEmergencia: z
    .string()
    .min(1, {
      message: "Contato de emergência deve ter entre 1 e 20 caracteres.",
    })
    .max(20, {
      message: "Contato de emergência deve ter entre 1 e 20 caracteres.",
    }),
  enderecoRua: z
    .string()
    .min(1, {
      message: "Endereço (rua) deve ter entre 1 e 255 caracteres.",
    })
    .max(255, {
      message: "Endereço (rua) deve ter entre 1 e 255 caracteres.",
    }),
  enderecoNumero: z
    .string()
    .min(1, {
      message: "Número do endereço deve ter entre 1 e 10 caracteres.",
    })
    .max(10, {
      message: "Número do endereço deve ter entre 1 e 10 caracteres.",
    }),
  enderecoBairro: z
    .string()
    .min(1, {
      message: "Bairro deve ter entre 1 e 100 caracteres.",
    })
    .max(100, {
      message: "Bairro deve ter entre 1 e 100 caracteres.",
    }),
  enderecoCidade: z
    .string()
    .min(1, {
      message: "Cidade deve ter entre 1 e 100 caracteres.",
    })
    .max(100, {
      message: "Cidade deve ter entre 1 e 100 caracteres.",
    }),
  enderecoEstado: z.string().length(2, {
    message: "Estado deve ter exatamente 2 caracteres.",
  }),
  enderecoCEP: z.string().regex(/^\d{8}$/, {
    message: "CEP deve conter exatamente 8 dígitos.",
  }),
  id_Genero: z
    .number({
      message: "Gênero é obrigatório.",
    })
    .min(1, {
      message: "Gênero deve ser selecionado.",
    }),
  id_CorPele: z
    .number({
      message: "Cor de pele é obrigatória.",
    })
    .min(1, {
      message: "Cor de pele deve ser selecionada.",
    }),
  id_Escolaridade: z
    .number({
      message: "Escolaridade é obrigatória.",
    })
    .min(1, {
      message: "Escolaridade deve ser selecionada.",
    }),
});

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistId, setWaitlistId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nomeRegistro: "",
      nomeSocial: "",
      telefonePessoal: "",
      contatoEmergencia: "",
      enderecoRua: "",
      enderecoNumero: "",
      enderecoBairro: "",
      enderecoCidade: "",
      enderecoEstado: "",
      enderecoCEP: "",
      id_Genero: undefined,
      id_CorPele: undefined,
      id_Escolaridade: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      // Formatar dados para envio
      const payload = {
        nomeRegistro: values.nomeRegistro,
        nomeSocial: values.nomeSocial || undefined,
        dataNascimento: values.dataNascimento.toISOString().split("T")[0], // Formato YYYY-MM-DD
        telefonePessoal: values.telefonePessoal,
        contatoEmergencia: values.contatoEmergencia,
        enderecoRua: values.enderecoRua,
        enderecoNumero: values.enderecoNumero,
        enderecoBairro: values.enderecoBairro,
        enderecoCidade: values.enderecoCidade,
        enderecoEstado: values.enderecoEstado.toUpperCase(),
        enderecoCEP: values.enderecoCEP,
        id_Genero: values.id_Genero,
        id_CorPele: values.id_CorPele,
        id_Escolaridade: values.id_Escolaridade,
      };

      const result = await apiRequest(API_ENDPOINTS.waitlist, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      // Capturar o ID da lista de espera retornado pela API
      const { id_Lista } = result;
      setWaitlistId(id_Lista);

      // Sucesso - mostrar toast e resetar formulário
      toast.success("Inscrição realizada com sucesso!", {
        description:
          "Você foi adicionado à lista de espera. Entraremos em contato em breve.",
      });

      form.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      const { title, description } = getErrorMessage(error);

      toast.error(title, {
        description: description,
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Seção: Informações Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                Informações Pessoais
              </CardTitle>
              <CardDescription>
                Dados pessoais básicos para identificação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="nomeRegistro"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome de Registro *</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome completo" {...field} />
                      </FormControl>
                      <FormDescription>
                        Seu nome completo conforme documento oficial.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nomeSocial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Social</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Digite seu nome social (opcional)"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Nome pelo qual você prefere ser chamado(a).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="dataNascimento"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Data de Nascimento *</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "dd/MM/yyyy", { locale: ptBR })
                              ) : (
                                <span>Selecione a data de nascimento</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            captionLayout="dropdown"
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>Sua data de nascimento.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="telefonePessoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone Pessoal *</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" {...field} />
                        </FormControl>
                        <FormDescription>Seu telefone para contato.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contatoEmergencia"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contato de Emergência *</FormLabel>
                        <FormControl>
                          <Input placeholder="(11) 99999-9999" {...field} />
                        </FormControl>
                        <FormDescription>
                          Telefone de contato de emergência.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção: Endereço */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                Endereço
              </CardTitle>
              <CardDescription>
                Informações de localização e residência
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                  <FormField
                    control={form.control}
                    name="enderecoRua"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Endereço (Rua) *</FormLabel>
                        <FormControl>
                          <Input placeholder="Digite o nome da rua" {...field} />
                        </FormControl>
                        <FormDescription>
                          Nome da rua, avenida ou logradouro.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="enderecoNumero"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número *</FormLabel>
                      <FormControl>
                        <Input placeholder="123" {...field} />
                      </FormControl>
                      <FormDescription>Número do endereço.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="enderecoBairro"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bairro *</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o bairro" {...field} />
                      </FormControl>
                      <FormDescription>Nome do bairro.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enderecoCidade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade *</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite a cidade" {...field} />
                      </FormControl>
                      <FormDescription>Nome da cidade.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="enderecoEstado"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estado *</FormLabel>
                        <FormControl>
                          <Input placeholder="SP" maxLength={2} {...field} />
                        </FormControl>
                        <FormDescription>Sigla do estado.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="enderecoCEP"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="12345678"
                            maxLength={8}
                            {...field}
                            onChange={(e) => {
                              // Remove tudo que não é número
                              const value = e.target.value.replace(/\D/g, "");
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          CEP (apenas números).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seção: Informações Complementares */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                Informações Complementares
              </CardTitle>
              <CardDescription>
                Dados sociodemográficos para melhor atendimento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="id_Genero"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gênero *</FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value ? parseInt(value) : undefined)
                        }
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um gênero" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Masculino</SelectItem>
                          <SelectItem value="2">Feminino</SelectItem>
                          <SelectItem value="3">Não-binário</SelectItem>
                          <SelectItem value="4">Prefiro não informar</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Seu gênero (obrigatório).</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="id_CorPele"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cor de Pele *</FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value ? parseInt(value) : undefined)
                        }
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma cor de pele" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Branca</SelectItem>
                          <SelectItem value="2">Preta</SelectItem>
                          <SelectItem value="3">Parda</SelectItem>
                          <SelectItem value="4">Amarela</SelectItem>
                          <SelectItem value="5">Indígena</SelectItem>
                          <SelectItem value="6">Prefiro não informar</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Sua cor de pele (obrigatório).</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="id_Escolaridade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Escolaridade *</FormLabel>
                      <Select
                        onValueChange={(value) =>
                          field.onChange(value ? parseInt(value) : undefined)
                        }
                        value={field.value?.toString()}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione uma escolaridade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">
                            Ensino Fundamental Incompleto
                          </SelectItem>
                          <SelectItem value="2">Ensino Fundamental Completo</SelectItem>
                          <SelectItem value="3">Ensino Médio Incompleto</SelectItem>
                          <SelectItem value="4">Ensino Médio Completo</SelectItem>
                          <SelectItem value="5">Ensino Superior Incompleto</SelectItem>
                          <SelectItem value="6">Ensino Superior Completo</SelectItem>
                          <SelectItem value="7">Pós-graduação</SelectItem>
                          <SelectItem value="8">Mestrado</SelectItem>
                          <SelectItem value="9">Doutorado</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Sua escolaridade (obrigatório).</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Botão de Submit */}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isLoading}
              size="lg"
              className="w-full md:w-auto md:min-w-48"
            >
              {isLoading ? "Enviando..." : "Enviar Inscrição"}
            </Button>
          </div>
        </form>
      </Form>

      {/* Alert com ID da lista de espera */}
      {waitlistId && (
        <Alert className="border-green-200 bg-green-50 text-green-900">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Inscrição realizada com sucesso!</AlertTitle>
          <AlertDescription>
            <div className="space-y-3">
              <p>
                <strong>Seu ID da lista de espera é:</strong>{" "}
                <code className="bg-green-100 border border-green-200 px-3 py-1 rounded text-sm font-mono font-semibold">
                  {waitlistId}
                </code>
              </p>
              <p className="text-sm">
                <strong>IMPORTANTE:</strong> Guarde este número! Você pode utilizá-lo no futuro para verificar 
                sua posição na lista de espera e acompanhar o status da sua inscrição.
              </p>
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
