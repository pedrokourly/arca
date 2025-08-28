import { UsersTable } from "@/components/users/tableUsers";

export default function UsuariosPage() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Usuários
          </h1>
          <p className="text-gray-600">
            Gerencie os usuários do sistema ARCA
          </p>
        </div>
        
        <UsersTable />
        
      </div>
    </div>
  );
}
