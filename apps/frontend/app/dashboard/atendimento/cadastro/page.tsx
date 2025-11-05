import CreateSessionForm from "@/components/session/CreateSessionForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Shield, UserCheck } from "lucide-react";

export default function CreateSessionPage() {
  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      {/* Header da página */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Agendar Nova Sessão
            </h1>
            <p className="text-muted-foreground text-lg">
              Agende triagens ou sessões de psicoterapia conforme o status do paciente
            </p>
          </div>
        </div>

        {/* Cards informativos atualizados */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-sm font-medium text-blue-900">
                  Triagem
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-blue-700">
                Primeira avaliação para pacientes em espera
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-600" />
                <CardTitle className="text-sm font-medium text-purple-900">
                  Psicoterapia
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-purple-700">
                Sessões de acompanhamento para pacientes aprovados na triagem
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <CardTitle className="text-sm font-medium text-green-900">
                  Validação Automática
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-green-700">
                Sistema verifica status do paciente e tipo de atendimento permitido
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-orange-600" />
                <CardTitle className="text-sm font-medium text-orange-900">
                  Fluxo Controlado
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-orange-700">
                Triagem → Aprovação → Psicoterapia seguindo protocolo clínico
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Formulário */}
      <CreateSessionForm />
    </div>
  );
}
