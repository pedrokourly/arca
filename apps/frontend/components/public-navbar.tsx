"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GalleryVerticalEnd, Menu, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useSession } from "next-auth/react"

export function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { status } = useSession()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <GalleryVerticalEnd className="w-5 h-5 text-primary-foreground" />
          </div>
          ARCA
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/lista-espera/cadastro" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Lista de Espera
          </Link>
          <Link 
            href="/lista-espera/consulta" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Consultar Posição
          </Link>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {status === "authenticated" ? (
            <Button asChild variant="outline">
              <Link href="/dashboard">
                <User className="w-4 h-4" />
                Dashboard
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="outline">
              <Link href="/login">
                <User className="w-4 h-4" />
                Acessar Plataforma
              </Link>
            </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              <Link 
                href="/lista-espera/cadastro" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Lista de Espera
              </Link>
              <Link 
                href="/lista-espera/consulta" 
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Consultar Posição
              </Link>
              
              <div className="flex flex-col gap-3 mt-6">
                {status === "authenticated" ? (
                  <Button asChild onClick={() => setIsOpen(false)}>
                    <Link href="/dashboard">
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Button asChild variant="outline" onClick={() => setIsOpen(false)}>
                      <Link href="/lista-espera/consulta">
                        Consultar Posição
                      </Link>
                    </Button>
                    <Button asChild onClick={() => setIsOpen(false)}>
                      <Link href="/lista-espera/cadastro">
                        Entrar na Lista
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
