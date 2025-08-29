import { PositionCheck } from "@/components/waitlist/positionCheck";

export default function ConsultaListaEspera() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
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
