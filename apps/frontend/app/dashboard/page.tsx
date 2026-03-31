"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePermissions } from "@/hooks/usePermissions";
import { Card } from "@/components/ui/card";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  ClipboardList,
  CalendarClock,
  ArrowUpNarrowWide,
  Sparkles,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function DashboardPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const { getRoleLabel, canAccessFluxoAtendimento } = usePermissions();

  const quickActions = [
    {
      title: "Agenda",
      description: "Visualize e gerencie seus atendimentos",
      icon: Calendar,
      color: "from-blue-500 to-cyan-500",
      hoverColor: "hover:shadow-blue-500/50",
      route: "/dashboard/agenda",
    },
    {
      title: "Lista de Espera",
      description: "Consulte e cadastre pacientes",
      icon: ClipboardList,
      color: "from-purple-500 to-pink-500",
      hoverColor: "hover:shadow-purple-500/50",
      route: "/dashboard/lista-espera",
    },
    {
      title: "Atendimentos",
      description: "Registre e consulte atendimentos",
      icon: CalendarClock,
      color: "from-emerald-500 to-teal-500",
      hoverColor: "hover:shadow-emerald-500/50",
      route: "/dashboard/atendimento",
    },
    {
      title: "Prontuários",
      description: "Acesse o histórico dos pacientes",
      icon: FileText,
      color: "from-orange-500 to-red-500",
      hoverColor: "hover:shadow-orange-500/50",
      route: "/dashboard/pacientes",
    },
    {
      title: "Relatórios",
      description: "Preencha relatórios de sessões",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      hoverColor: "hover:shadow-indigo-500/50",
      route: "/dashboard/relatorios",
    },
  ];

  // Adicionar fluxo de atendimento se tiver permissão
  if (canAccessFluxoAtendimento()) {
    quickActions.push({
      title: "Fluxo de Atendimento",
      description: "Acompanhe o pipeline de pacientes",
      icon: ArrowUpNarrowWide,
      color: "from-amber-500 to-yellow-500",
      hoverColor: "hover:shadow-amber-500/50",
      route: "/dashboard/fluxo-atendimento",
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl shadow-blue-500/30 mb-6">
            <LayoutDashboard className="w-10 h-10 text-white" />
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Olá, {session?.user?.name?.split(" ")[0]}! 👋
            </h1>
            <p className="text-xl text-gray-600">
              {format(new Date(), "EEEE, dd 'de' MMMM 'de' yyyy", {
                locale: ptBR,
              })}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                {getRoleLabel(session?.user?.roleId || 0)}
              </span>
            </div>
          </div>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Bem-vindo ao sistema ARCA. Escolha uma das opções abaixo para
            começar.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 ${action.hoverColor} hover:shadow-2xl border-0`}
                onClick={() => router.push(action.route)}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative p-8 space-y-4">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${action.color} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Text */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                      {action.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="flex items-center text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span>Acessar</span>
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-400">
            Sistema de Gestão Clínica ARCA © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
