import { UsersTable } from "@/components/users/tableUsers"

export default function UsersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Usuários</h1>
      <UsersTable />
    </div>
  )
}