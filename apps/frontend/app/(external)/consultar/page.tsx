import { UserIcon } from "lucide-react";

import FormConsulta from "@/components/forms/form-consulta";
import { apiService } from "@/lib/api";

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));

const ConsultarPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) => {
  const { id } = await searchParams;

  let resultado: Awaited<
    ReturnType<typeof apiService.waitlist.findPublicPosition>
  > | null = null;
  let erro: string | null = null;

  if (id) {
    try {
      resultado = await apiService.waitlist.findPublicPosition(id);
    } catch (error) {
      const is429 = error instanceof Error && (error as Error & { status?: number }).status === 429;
      erro = is429
        ? error.message
        : "Código não encontrado. Verifique se copiou corretamente e tente novamente.";
    }
  }

  const nome = resultado?.nomeSocial ?? resultado?.nomeRegistro;
  const ativo = resultado?.situacao === "Ativo";

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full lg:px-32 xl:px-64 2xl:px-128 py-32">
      <div className="w-full flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-foreground">
          Consultar posição
        </h1>
        <p className="text-sm text-muted-foreground">
          Use o código recebido no cadastro para verificar sua posição na lista
          de espera.
        </p>
      </div>

      <FormConsulta />

      {erro && (
        <div className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {erro}
        </div>
      )}

      {resultado && (
        <div className="w-full rounded-xl border border-primary/20 overflow-hidden">
          {/* Cabeçalho */}
          <div className="bg-primary/5 px-5 py-4 flex items-center gap-3">
            <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <UserIcon className="size-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{nome}</p>
              <p className="text-xs text-muted-foreground">
                Cadastrado em {formatDate(resultado.createdAt)}
              </p>
            </div>
            <span
              className={
                ativo
                  ? "text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 shrink-0"
                  : "text-xs font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground shrink-0"
              }
            >
              {ativo ? "ATIVO" : "INATIVO"}
            </span>
          </div>

          {/* Corpo */}
          <div className="px-5 py-8 text-center border-t border-primary/10">
            {ativo ? (
              <>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Sua posição na fila
                </p>
                <p className="text-6xl font-bold text-primary leading-none">
                  {resultado.posicaoNaLista}
                </p>
                {resultado.posicaoNaLista > 1 && (
                  <p className="text-sm text-muted-foreground mt-3">
                    {resultado.posicaoNaLista - 1}{" "}
                    {resultado.posicaoNaLista - 1 === 1
                      ? "pessoa à sua frente"
                      : "pessoas à sua frente"}
                  </p>
                )}
              </>
            ) : (
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Seu cadastro foi movido para a próxima etapa do atendimento.
                Entre em contato com a clínica para mais informações.
              </p>
            )}
          </div>

          {/* Rodapé */}
          {ativo && (
            <div className="px-5 py-3 bg-muted/40 border-t text-xs text-muted-foreground">
              A clínica entrará em contato quando chegar sua vez. Mantenha seu
              telefone atualizado.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConsultarPage;
