"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Bell, MessageSquare, Search, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useMobile } from "@/hooks/use-mobile"

interface DashboardHeaderProps {
  toggleSidebar: () => void
}

export default function DashboardHeader({ toggleSidebar }: DashboardHeaderProps) {
  const isMobile = useMobile()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#F3D9E2] bg-white px-4 md:px-6">
      {isMobile && (
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-2 md:hidden">
          <Menu className="h-5 w-5 text-[#8E3A59]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      )}

      <div className="flex flex-1 items-center gap-4 md:gap-6">
        <div className="relative hidden w-full max-w-md md:flex">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Buscar cursos, materiales, instructores..."
            className="w-full rounded-full border-[#F3D9E2] bg-white pl-8 focus-visible:ring-[#8E3A59]"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notificaciones</span>
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#8E3A59]"></span>
        </Button>

        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
          <MessageSquare className="h-5 w-5" />
          <span className="sr-only">Mensajes</span>
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[#8E3A59]"></span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Image
                src="/images/perfil.jpg?height=32&width=32"
                width={32}
                height={32}
                className="rounded-full"
                alt="Avatar"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Sofía Martínez</p>
                <p className="text-xs leading-none text-gray-500">sofia.martinez@example.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/profile" className="w-full">
                Mi perfil
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard/settings" className="w-full">
                Configuración
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/" className="w-full">
                Cerrar sesión
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
