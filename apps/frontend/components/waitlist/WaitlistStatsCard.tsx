"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, AlertCircle, Loader2 } from "lucide-react";
import { useWaitlistStats } from "@/hooks/useWaitlistStats";

export function WaitlistStatsCard() {
  const { stats, isLoading, error } = useWaitlistStats();

  if (error) {
    return (
      <Card className="border-red-200 bg-red-50/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <CardTitle className="text-sm font-medium text-red-900">
              Estatísticas Indisponíveis
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <CardDescription className="text-red-700">
            Não foi possível carregar as informações da fila no momento
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card className="border-orange-200 bg-orange-50/50">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 text-orange-600 animate-spin" />
            <CardTitle className="text-sm font-medium text-orange-900">
              Carregando Estatísticas
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <Skeleton className="h-6 w-16 bg-orange-200" />
            <Skeleton className="h-4 w-32 bg-orange-200" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-orange-200 bg-orange-50/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-orange-600" />
          <CardTitle className="text-sm font-medium text-orange-900">
            Pessoas na Fila
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-1">
          <div className="text-2xl font-bold text-orange-800">
            {stats?.qntFila || 0}
          </div>
          <CardDescription className="text-orange-700">
            {stats?.qntFila === 1
              ? "pessoa aguardando atendimento"
              : "pessoas aguardando atendimento"}
            {stats?.ultimaAtualizacao && (
              <span className="block text-xs text-orange-600 mt-1">
                Última atualização:{" "}
                {new Date(stats.ultimaAtualizacao).toLocaleString()}
              </span>
            )}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
