import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Clock,
  User,
  UserCheck,
  UserCog,
  Calendar as CalendarIcon,
  FileText,
} from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface EventoDetalhesProps {
  evento: {
    id: string;
    title: string;
    start: Date;
    end: Date;
    resource: {
      tipo: "atendimento" | "consulta" | "avaliacao";
      status: "agendado" | "em_andamento" | "concluido" | "cancelado";
      paciente: string;
      estagiario: string;
      supervisor: string;
      observacoes?: string;
    };
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventoDetalhes = ({
  evento,
  open,
  onOpenChange,
}: EventoDetalhesProps) => {
  if (!evento) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "agendado":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "em_andamento":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "concluido":
        return "bg-green-100 text-green-800 border-green-200";
      case "cancelado":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "atendimento":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "consulta":
        return "bg-indigo-100 text-indigo-800 border-indigo-200";
      case "avaliacao":
        return "bg-teal-100 text-teal-800 border-teal-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDateTime = (date: Date) => {
    return format(date, "EEEE, dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
      locale: ptBR,
    });
  };

  const formatDuration = (start: Date, end: Date) => {
    const diffMs = end.getTime() - start.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;

    if (hours > 0) {
      return `${hours}h${minutes > 0 ? ` ${minutes}min` : ""}`;
    }
    return `${minutes}min`;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            Detalhes do Evento
          </DialogTitle>
          <DialogDescription>
            Informações completas sobre o agendamento
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Status e Tipo */}
          <div className="flex gap-2">
            <Badge
              variant="outline"
              className={getStatusColor(evento.resource.status)}
            >
              {evento.resource.status.replace("_", " ").toUpperCase()}
            </Badge>
            <Badge
              variant="outline"
              className={getTipoColor(evento.resource.tipo)}
            >
              {evento.resource.tipo.toUpperCase()}
            </Badge>
          </div>

          {/* Data e Hora */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Data e Hora:</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">
              {formatDateTime(evento.start)}
            </p>
            <p className="text-xs text-muted-foreground pl-6">
              Duração: {formatDuration(evento.start, evento.end)}
            </p>
          </div>

          {/* Paciente */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Paciente:</span>
            </div>
            <p className="text-sm pl-6">{evento.resource.paciente}</p>
          </div>

          {/* Estagiário */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <UserCheck className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Estagiário:</span>
            </div>
            <p className="text-sm pl-6">{evento.resource.estagiario}</p>
          </div>

          {/* Supervisor */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <UserCog className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Supervisor:</span>
            </div>
            <p className="text-sm pl-6">{evento.resource.supervisor}</p>
          </div>

          {/* Observações */}
          {evento.resource.observacoes && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <FileText className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Observações:</span>
              </div>
              <p className="text-sm text-muted-foreground pl-6 bg-gray-50 p-2 rounded">
                {evento.resource.observacoes}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventoDetalhes;
