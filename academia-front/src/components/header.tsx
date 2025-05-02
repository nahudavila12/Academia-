"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F3D9E2] bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png?height=40&width=40" width={40} height={40} alt="Logo" className="rounded-full" />
          <span className="font-serif text-xl font-bold text-[#8E3A59]">Gisela Echavarria</span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="text-[#8E3A59]"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>

            {isMenuOpen && (
              <div className="absolute left-0 top-16 z-50 w-full bg-white p-4 shadow-md">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/cursos"
                    className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cursos
                  </Link>
                  <Link
                    href="/talleres"
                    className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Talleres
                  </Link>
                  <Link
                    href="/comunidad"
                    className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Comunidad
                  </Link>
                  <Link
                    href="/nosotros"
                    className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contacto
                  </Link>
                  <Button className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white">Inscribirme</Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
                Inicio
              </Link>
              <Link href="/cursos" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
                Cursos
              </Link>
              <Link href="/talleres" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
                Talleres
              </Link>
              <Link href="/comunidad" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
                Comunidad
              </Link>
              <Link href="/nosotros" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
                Contacto
              </Link>
            </nav>
            <Link
  href="/auth/login"
  className="bg-[#8E3A59] hover:bg-[#7A3049] text-white px-4 py-2 rounded-md"
>
  Iniciar Sesión
</Link>
</div>
        )}
      </div>
    </header>
  )
}
