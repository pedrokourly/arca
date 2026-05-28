import { ClockIcon, UsersIcon } from "lucide-react";

import FormWaitlist from "@/components/forms/form-waitlist";
import { apiService } from "@/lib/api";

const InscreverPage = async () => {
  const stats = await apiService.waitlist.stats();

  const ultimaAtualizacao = stats.ultimaAtualizacao
    ? new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(stats.ultimaAtualizacao))
    : null;

  return (
    <div className="flex flex-col justify-center items-center gap-6 w-full lg:px-32 xl:px-64 2xl:px-128">
      <div className="w-full rounded-xl border border-primary/20 bg-primary/5 p-5 flex flex-col gap-4">
        <div>
          <h1 className="text-lg font-semibold text-foreground">
            Inscrição na Lista de Espera
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Atendimento gratuito realizado por estagiários supervisionados da
            Facmais/Unimais. Após o cadastro, você receberá um código único para
            acompanhar sua posição na fila.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-background rounded-lg border px-3 py-2">
            <UsersIcon className="size-4 text-primary shrink-0" />
            <div>
              <p className="text-xl font-bold text-foreground leading-none">
                {stats.qntFila}
              </p>
              <p className="text-xs text-muted-foreground">
                {stats.qntFila === 1 ? "pessoa aguardando" : "pessoas aguardando"}
              </p>
            </div>
          </div>

          {ultimaAtualizacao && (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ClockIcon className="size-3.5 shrink-0" />
              <span>Atualizado em {ultimaAtualizacao}</span>
            </div>
          )}
        </div>
      </div>

      <FormWaitlist />
    </div>
  );
};

export default InscreverPage;
