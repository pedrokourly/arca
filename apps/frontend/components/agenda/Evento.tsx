import { Clock, User, UserCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventoProps {
    event: {
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
    };
}

const Evento = ({ event }: EventoProps) => {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "agendado":
                return "bg-blue-100 text-blue-800";
            case "em_andamento":
                return "bg-amber-100 text-amber-800";
            case "concluido":
                return "bg-green-100 text-green-800";
            case "cancelado":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <div className="p-2 h-full">
            <div className="flex flex-col h-full text-xs">
                {/* Horário */}
                <div className="flex items-center mb-1">
                    <Clock className="h-3 w-3 mr-1 opacity-75" />
                    <span className="font-medium">
                        {formatTime(event.start)} - {formatTime(event.end)}
                    </span>
                </div>

                {/* Paciente */}
                <div className="flex items-center mb-1">
                    <User className="h-3 w-3 mr-1 opacity-75" />
                    <span className="font-semibold truncate">
                        {event.resource.paciente}
                    </span>
                </div>

                {/* Estagiário */}
                <div className="flex items-center mb-1">
                    <UserCheck className="h-3 w-3 mr-1 opacity-75" />
                    <span className="truncate">{event.resource.estagiario}</span>
                </div>

                {/* Status Badge */}
                <div className="mt-auto">
                    <Badge
                        variant="secondary"
                        className={`text-xs ${getStatusColor(event.resource.status)}`}
                    >
                        {event.resource.status.replace("_", " ").toUpperCase()}
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export default Evento;
