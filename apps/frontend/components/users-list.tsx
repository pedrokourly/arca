"use client"

import { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/useAuth'
import api from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/ui/loading'

interface User {
  id: string
  name: string
  email: string
  role: string
}

export function UsersList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { isAuthenticated } = useAuth()

  const fetchUsers = async () => {
    if (!isAuthenticated) return

    setLoading(true)
    setError(null)
    
    try {
      const response = await api.get('/users')
      setUsers(response.data)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erro ao carregar usuários')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <div>Você precisa estar logado para ver esta página.</div>
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Lista de Usuários</h2>
        <Button onClick={fetchUsers} disabled={loading}>
          {loading ? <Loader /> : 'Atualizar'}
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid gap-4">
          {users.map((user) => (
            <div key={user.id} className="bg-white shadow rounded-lg p-4 border">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Função: {user.role}</p>
            </div>
          ))}
          {users.length === 0 && !loading && (
            <p className="text-center text-gray-500">Nenhum usuário encontrado.</p>
          )}
        </div>
      )}
    </div>
  )
}
