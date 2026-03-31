import { PublicNavbar } from "@/components/public-navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Users,
  Clock,
  Shield,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Bem-vindo ao <span className="text-primary">ARCA</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Clínica-escola de Psicologia comprometida com o cuidado e
              bem-estar da comunidade
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <Button
                asChild
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                <Link href="/lista-espera/cadastro">
                  Entrar na Lista de Espera
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
              >
                <Link href="/lista-espera/consulta">Consultar Posição</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos atendimento psicológico de qualidade com foco no
              desenvolvimento humano
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">
                  Atendimento Humanizado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-700 text-center">
                  Cuidado personalizado e acolhimento em todas as etapas do
                  processo terapêutico
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-900">
                  Equipe Qualificada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 text-center">
                  Profissionais e estudantes supervisionados, garantindo
                  qualidade no atendimento
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-900">
                  Acessibilidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-700 text-center">
                  Atendimento gratuito ou com valores acessíveis para toda a
                  comunidade
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo simples e transparente para iniciar seu acompanhamento
              psicológico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cadastro</h3>
              <p className="text-muted-foreground">
                Preencha o formulário de inscrição na lista de espera
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Aguarde</h3>
              <p className="text-muted-foreground">
                Acompanhe sua posição na lista através do seu ID
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contato</h3>
              <p className="text-muted-foreground">
                Nossa equipe entrará em contato para agendar
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Atendimento</h3>
              <p className="text-muted-foreground">
                Inicie seu acompanhamento psicológico
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Entre em Contato
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Telefone</h3>
              <p className="text-muted-foreground">(11) 1234-5678</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">E-mail</h3>
              <p className="text-muted-foreground">contato@arca.edu.br</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1">Localização</h3>
              <p className="text-muted-foreground">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 ARCA - Clínica-escola de Psicologia. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
