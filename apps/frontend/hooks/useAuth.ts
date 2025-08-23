"use client"

import { useSession, signOut as nextAuthSignOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const signOut = async () => {
    await nextAuthSignOut({ redirect: false })
    router.push("/login")
    router.refresh()
  }

  return {
    user: session?.user,
    accessToken: session?.user?.accessToken,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
    signOut,
  }
}
