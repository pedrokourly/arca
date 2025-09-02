import { PublicNavbar } from "@/components/public-navbar"
import { PositionCheck } from "@/components/waitlist/positionCheck";
import { WaitlistStatsCard } from "@/components/waitlist/WaitlistStatsCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Clock, Shield, Users } from "lucide-react";

export default function ConsultaListaEspera() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      
      <div className="container mx-auto px-4 pt-24 pb-6 max-w-5xl">
        {/* Header da página */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Search className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Consulta de Posição na Lista de Espera
              </h1>
              <p className="text-muted-foreground text-lg">
                Verifique sua posição atual e status na lista de espera do ARCA
              </p>
            </div>
          </div>

          {/* Cards informativos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <WaitlistStatsCard />
            
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-sm font-medium text-blue-900">
                    Consulta Rápida
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-blue-700">
                  Use seu ID para verificar sua posição atual na fila
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-sm font-medium text-green-900">
                    Informações Seguras
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-green-700">
                  Consulte seus dados de forma segura e confidencial
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <CardTitle className="text-sm font-medium text-purple-900">
                    Status Atualizado
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-purple-700">
                  Informações sempre atualizadas sobre sua situação
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Componente de consulta */}
        <PositionCheck />
      </div>
    </div>
  );
}