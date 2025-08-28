"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SearchIcon, UserIcon, CalendarIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { API_ENDPOINTS, apiRequest } from "@/utils/apiHandler";
import { getErrorMessage } from "@/utils/toastErrorHandler";

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
  isActive: boolean;
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
      const result = await apiRequest(`${API_ENDPOINTS.waitlist}/${values.idLista}`, {
        method: "GET",
      });

      setWaitlistData(result);
      toast.success("Dados encontrados!", {
        description: "Informações da sua posição na lista de espera foram carregadas.",
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SearchIcon className="h-5 w-5" />
            Consultar Posição na Lista de Espera
          </CardTitle>
          <CardDescription>
            Digite seu ID da lista de espera para verificar sua posição atual e status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="idLista"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ID da Lista de Espera</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: 123e4567-e89b-12d3-a456-426614174000"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Informe o ID que você recebeu quando se inscreveu na lista de espera.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading} className="flex-1">
                  {isLoading ? "Consultando..." : "Consultar Posição"}
                </Button>
                {waitlistData && (
                  <Button type="button" variant="outline" onClick={resetConsulta}>
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
              <UserIcon className="h-5 w-5" />
              Informações da Lista de Espera
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status e Posição */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Posição na Lista</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary">
                    #{waitlistData.posicaoNaLista}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Posição atual na fila de espera
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge 
                    variant={waitlistData.isActive ? "default" : "secondary"}
                    className="text-sm"
                  >
                    {waitlistData.situacao}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    {waitlistData.isActive 
                      ? "Sua inscrição está ativa na lista" 
                      : "Sua inscrição foi desativada"
                    }
                  </p>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Informações Pessoais */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                Dados Pessoais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Nome:</span> {waitlistData.nomeRegistro}
                </div>
                {waitlistData.nomeSocial && (
                  <div>
                    <span className="font-medium">Nome Social:</span> {waitlistData.nomeSocial}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  <span className="font-medium">Data de Nascimento:</span> 
                  {format(new Date(waitlistData.dataNascimento), "dd/MM/yyyy", { locale: ptBR })}
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4" />
                  <span className="font-medium">Telefone:</span> {waitlistData.telefonePessoal}
                </div>
              </div>
            </div>

            <Separator />

            {/* Endereço */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                Endereço
              </h3>
              <div className="text-sm space-y-1">
                <div>{waitlistData.enderecoRua}, {waitlistData.enderecoNumero}</div>
                <div>{waitlistData.enderecoBairro}</div>
                <div>{waitlistData.enderecoCidade} - {waitlistData.enderecoEstado}</div>
                <div>CEP: {waitlistData.enderecoCEP}</div>
              </div>
            </div>

            <Separator />

            {/* Data de Inscrição */}
            <div>
              <span className="font-medium text-sm">Data de Inscrição:</span>
              <span className="text-sm ml-2">
                {format(new Date(waitlistData.createdAt), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}
              </span>
            </div>

            {/* Informações importantes */}
            <Alert>
              <UserIcon className="h-4 w-4" />
              <AlertTitle>Informações Importantes</AlertTitle>
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Guarde seu ID da lista de espera para consultas futuras</li>
                  <li>Entraremos em contato quando chegar sua vez</li>
                  <li>Mantenha seus dados de contato sempre atualizados</li>
                  {!waitlistData.isActive && (
                    <li className="text-destructive">
                      Sua inscrição está inativa - entre em contato conosco para mais informações
                    </li>
                  )}
                </ul>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
