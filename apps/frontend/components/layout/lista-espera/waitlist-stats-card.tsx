import { UsersIcon } from "lucide-react";
import { apiService } from "@/lib/api";

const WaitlistStatsCard = async () => {
  const stats = await apiService.waitlist.stats();

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-muted/40 px-4 py-3 text-sm">
      <UsersIcon className="size-4 shrink-0 text-muted-foreground" />
      <div className="flex flex-col gap-0.5">
        <p className="text-muted-foreground">
          Atualmente há{" "}
          <span className="font-semibold text-foreground">{stats.qntFila}</span>{" "}
          {stats.qntFila === 1 ? "pessoa aguardando" : "pessoas aguardando"} na
          lista de espera.
        </p>
        {stats.ultimaAtualizacao && (
          <p className="text-xs text-muted-foreground/70">
            Última atualização:{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(stats.ultimaAtualizacao))}
          </p>
        )}
      </div>
    </div>
  );
};

export default WaitlistStatsCard;
