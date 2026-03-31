"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  SearchIcon,
  UserIcon,
  CalendarIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";

// Mapeamento dos status
const STATUS_MAP = {
  1: { label: "Em Espera", variant: "secondary" as const, isActive: true },
  2: { label: "Em Atendimento", variant: "default" as const, isActive: false },
  3: { label: "Recebeu Alta", variant: "outline" as const, isActive: false },
  4: { label: "Desistente", variant: "destructive" as const, isActive: false },
  5: { label: "Desativado", variant: "destructive" as const, isActive: false },
};

// Função para obter descrição detalhada do status
const getStatusDescription = (status: number) => {
  switch (status) {
    case 2:
      return "Você está sendo atendido";
    case 3:
      return "Você recebeu alta do atendimento";
    case 4:
      return "Você desistiu da lista de espera";
    case 5:
      return "Sua inscrição foi desativada";
    default:
      return "Sua inscrição não está ativa na lista";
  }
};

const consultaSchema = z.object({
  idLista: z
    .string()
    .min(1, { message: "ID da lista é obrigatório." })
    .uuid({ message: "ID deve ser um UUID válido." }),
});

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
  posicaoNaLista: number;
  situacao: string;
}

export function PositionCheck() {
  const [isLoading, setIsLoading] = useState(false);
  const [waitlistData, setWaitlistData] = useState<WaitlistEntry | null>(null);

  const form = useForm<z.infer<typeof consultaSchema>>({
    resolver: zodResolver(consultaSchema),
    defaultValues: {
      idLista: "",
    },
  });

  async function onSubmit(values: z.infer<typeof consultaSchema>) {
    setIsLoading(true);
    setWaitlistData(null);

    try {
      const result = await apiRequest(
        `${API_ENDPOINTS.waitlist}/${values.idLista}`,
        {
          method: "GET",
        },
      );

      setWaitlistData(result);
      toast.success("Dados encontrados!", {
        description:
          "Informações da sua posição na lista de espera foram carregadas.",
      });
    } catch (error) {
      console.error("Erro ao consultar posição:", error);

      const { title, description } = getErrorMessage(error);

      toast.error(title, {
        description: description,
        duration: 6000,
      });

      setWaitlistData(null);
    } finally {
      setIsLoading(false);
    }
  }

  const resetConsulta = () => {
    setWaitlistData(null);
    form.reset();
  };

  return (
    <div className="space-y-8">
      {/* Card de Consulta */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            Consultar Posição na Lista de Espera
          </CardTitle>
          <CardDescription>
            Digite seu ID da lista de espera para verificar sua posição atual e
            status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="idLista"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID da Lista de Espera</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 123e4567-e89b-12d3-a456-426614174000"
                        className="font-mono"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Informe o ID que você recebeu quando se inscreveu na lista
                      de espera.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 md:flex-none md:min-w-48"
                >
                  {isLoading ? "Consultando..." : "Consultar Posição"}
                </Button>
                {waitlistData && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={resetConsulta}
                  >
                    Nova Consulta
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Resultados da consulta */}
      {waitlistData && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              Suas Informações na Lista de Espera
            </CardTitle>
            <CardDescription>
              Dados da sua inscrição e posição atual na fila de atendimento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Status e Posição - Destaque */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <UserIcon className="h-5 w-5 text-primary" />
                    Posição na Lista
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {waitlistData.id_Status === 1 ? (
                    <>
                      <div className="text-4xl font-bold text-primary mb-2">
                        #{waitlistData.posicaoNaLista}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Posição atual na fila de espera
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-muted-foreground mb-2">
                        -
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Não está na fila de espera
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card
                className={`border-opacity-20 ${
                  STATUS_MAP[waitlistData.id_Status as keyof typeof STATUS_MAP]
                    ?.isActive
                    ? "border-green-500 bg-green-50/50"
                    : "border-red-500 bg-red-50/50"
                }`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <SearchIcon
                      className={`h-5 w-5 ${
                        STATUS_MAP[
                          waitlistData.id_Status as keyof typeof STATUS_MAP
                        ]?.isActive
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    />
                    Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant={
                      STATUS_MAP[
                        waitlistData.id_Status as keyof typeof STATUS_MAP
                      ]?.variant || "secondary"
                    }
                    className="text-sm mb-2"
                  >
                    {STATUS_MAP[
                      waitlistData.id_Status as keyof typeof STATUS_MAP
                    ]?.label || `Status ${waitlistData.id_Status}`}
                  </Badge>
                  <p
                    className={`text-sm ${
                      STATUS_MAP[
                        waitlistData.id_Status as keyof typeof STATUS_MAP
                      ]?.isActive
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {STATUS_MAP[
                      waitlistData.id_Status as keyof typeof STATUS_MAP
                    ]?.isActive
                      ? "Sua inscrição está ativa na lista"
                      : getStatusDescription(waitlistData.id_Status)}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Informações Pessoais */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <UserIcon className="h-5 w-5 text-primary" />
                Dados Pessoais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">
                      Nome Completo
                    </span>
                    <p className="font-medium">{waitlistData.nomeRegistro}</p>
                  </div>
                  {waitlistData.nomeSocial && (
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium text-muted-foreground">
                        Nome Social
                      </span>
                      <p className="font-medium">{waitlistData.nomeSocial}</p>
                    </div>
                  )}
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">
                      CPF
                    </span>
                    <p className="font-medium font-mono">
                      {waitlistData.CPF.replace(
                        /(\d{3})(\d{3})(\d{3})(\d{2})/,
                        "$1.$2.$3-$4",
                      )}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      Data de Nascimento
                    </span>
                    <p className="font-medium">
                      {format(
                        new Date(waitlistData.dataNascimento),
                        "dd/MM/yyyy",
                        { locale: ptBR },
                      )}
                    </p>
                  </div>
                  <div className="p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                      <PhoneIcon className="h-4 w-4" />
                      Telefone
                    </span>
                    <p className="font-medium">
                      {waitlistData.telefonePessoal}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Endereço */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-primary" />
                Endereço
              </h3>
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <p className="font-medium">
                  {waitlistData.enderecoRua}, {waitlistData.enderecoNumero}
                </p>
                <p className="text-muted-foreground">
                  {waitlistData.enderecoBairro}
                </p>
                <p className="text-muted-foreground">
                  {waitlistData.enderecoCidade} - {waitlistData.enderecoEstado}
                </p>
                <p className="text-sm font-mono bg-background px-2 py-1 rounded border inline-block">
                  CEP: {waitlistData.enderecoCEP}
                </p>
              </div>
            </div>

            <Separator />

            {/* Data de Inscrição e Informações importantes */}
            <div className="space-y-4">
              <div className="p-3 bg-muted/50 rounded-lg">
                <span className="text-sm font-medium text-muted-foreground">
                  Data de Inscrição
                </span>
                <p className="font-medium">
                  {format(
                    new Date(waitlistData.createdAt),
                    "dd/MM/yyyy 'às' HH:mm",
                    { locale: ptBR },
                  )}
                </p>
              </div>

              <Alert
                className={
                  STATUS_MAP[waitlistData.id_Status as keyof typeof STATUS_MAP]
                    ?.isActive
                    ? "border-blue-200 bg-blue-50"
                    : "border-red-200 bg-red-50"
                }
              >
                <UserIcon className="h-4 w-4" />
                <AlertTitle>Informações Importantes</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                    <li>
                      Guarde seu ID da lista de espera para consultas futuras
                    </li>
                    <li>Entraremos em contato quando chegar sua vez</li>
                    <li>Mantenha seus dados de contato sempre atualizados</li>
                    {!STATUS_MAP[
                      waitlistData.id_Status as keyof typeof STATUS_MAP
                    ]?.isActive && (
                      <li className="text-red-700 font-medium">
                        {getStatusDescription(waitlistData.id_Status)} - entre
                        em contato conosco para mais informações
                      </li>
                    )}
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
