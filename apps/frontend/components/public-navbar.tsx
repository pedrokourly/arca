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
          <SheetContent side="right" className="w-80 p-6">
            <div className="flex flex-col gap-8 mt-6">
              <div className="flex flex-col gap-1">
                <Link 
                  href="/lista-espera/cadastro" 
                  className="text-base font-medium hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Lista de Espera
                </Link>
                <Link 
                  href="/lista-espera/consulta" 
                  className="text-base font-medium hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent"
                  onClick={() => setIsOpen(false)}
                >
                  Consultar Posição
                </Link>
              </div>
              
              <div className="flex flex-col gap-3 pt-6 border-t">
                {status === "authenticated" ? (
                  <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/dashboard">
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                  </Button>
                ) : (
                  <Button asChild variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/login">
                      <User className="w-4 h-4" />
                      Acessar Plataforma
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
