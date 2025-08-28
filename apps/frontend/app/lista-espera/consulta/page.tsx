import { PositionCheck } from "@/components/waitlist/positionCheck";

export default function ConsultaListaEspera() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Consulta de Posição na Lista de Espera
          </h1>
          <p className="text-gray-600">
            Verifique sua posição atual na lista de espera do ARCA
          </p>
        </div>
        
        <PositionCheck />
      </div>
    </div>
  );
}