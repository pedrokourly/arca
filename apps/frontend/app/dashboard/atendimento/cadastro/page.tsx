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
              Agende uma sessão de atendimento psicológico para pacientes em atendimento
            </p>
          </div>
        </div>

        {/* Cards informativos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-sm font-medium text-blue-900">
                  Agendamento Flexível
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-blue-700">
                Escolha data, horário e duração conforme disponibilidade
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
                Sistema verifica conflitos de horário e disponibilidade
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-600" />
                <CardTitle className="text-sm font-medium text-purple-900">
                  Supervisão
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <CardDescription className="text-purple-700">
                Toda sessão conta com acompanhamento de supervisor qualificado
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
