"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Home,
  BookOpen,
  Calendar,
  MessageSquare,
  FileText,
  Award,
  Settings,
  Users,
  BarChart,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

interface SidebarLink {
  href: string
  icon: React.ElementType
  label: string
  role: "all" | "student" | "instructor" | "admin"
}

interface DashboardSidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

export default function DashboardSidebar({ isOpen, toggleSidebar }: DashboardSidebarProps) {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [userRole, setUserRole] = useState<"student" | "instructor" | "admin">("student")
  const [sidebarOpen, setSidebarOpen] = useState(isOpen)

  // Simulación: cambiar entre roles para demostración
  const toggleRole = () => {
    if (userRole === "student") setUserRole("instructor")
    else if (userRole === "instructor") setUserRole("admin")
    else setUserRole("student")
  }

  useEffect(() => {
    setSidebarOpen(!isMobile)
  }, [isMobile])

  const links: SidebarLink[] = [
    { href: "/dashboard/student", icon: Home, label: "Inicio", role: "student" },
    { href: "/dashboard/student/courses", icon: BookOpen, label: "Mis cursos", role: "student" },
    { href: "/dashboard/student/calendar", icon: Calendar, label: "Calendario", role: "student" },
    { href: "/dashboard/student/messages", icon: MessageSquare, label: "Mensajes", role: "student" },
    { href: "/dashboard/student/materials", icon: FileText, label: "Materiales", role: "student" },
    { href: "/dashboard/student/certificates", icon: Award, label: "Certificados", role: "student" },

    { href: "/dashboard/instructor", icon: Home, label: "Inicio", role: "instructor" },
    { href: "/dashboard/instructor/courses", icon: BookOpen, label: "Mis cursos", role: "instructor" },
    { href: "/dashboard/instructor/students", icon: Users, label: "Estudiantes", role: "instructor" },
    { href: "/dashboard/instructor/content", icon: FileText, label: "Contenidos", role: "instructor" },
    { href: "/dashboard/instructor/calendar", icon: Calendar, label: "Calendario", role: "instructor" },
    { href: "/dashboard/instructor/messages", icon: MessageSquare, label: "Mensajes", role: "instructor" },

    { href: "/dashboard/admin", icon: Home, label: "Inicio", role: "admin" },
    { href: "/dashboard/admin/users", icon: Users, label: "Usuarios", role: "admin" },
    { href: "/dashboard/admin/courses", icon: BookOpen, label: "Cursos", role: "admin" },
    { href: "/dashboard/admin/analytics", icon: BarChart, label: "Analíticas", role: "admin" },
    { href: "/dashboard/admin/settings", icon: Settings, label: "Configuración", role: "admin" },
  ]

  const filteredLinks = links.filter((link) => link.role === userRole || link.role === "all")

  if (!sidebarOpen) {
    return (
      <div className="fixed inset-y-0 left-0 z-50 w-16 border-r border-[#F3D9E2] bg-white">
        <div className="flex h-16 items-center justify-center border-b border-[#F3D9E2]">
          <Link href="/">
            <Image
              src="/images/logo.png?height=40&width=40"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-full"
            />
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-2 p-2">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-md text-gray-500 hover:bg-[#F3D9E2] hover:text-[#8E3A59]",
                pathname === link.href && "bg-[#F3D9E2] text-[#8E3A59]",
              )}
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.label}</span>
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleRole}
            className="mt-auto text-gray-500 hover:bg-[#F3D9E2] hover:text-[#8E3A59]"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Cambiar rol (demo)</span>
          </Button>
        </nav>
      </div>
    )
  }

  return (
    <div className="fixed inset-y-0 left-0 z-50 w-64 border-r border-[#F3D9E2] bg-white">
      <div className="flex h-16 items-center justify-between border-b border-[#F3D9E2] px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png?height=40&width=40" width={40} height={40} alt="Logo" className="rounded-full" />
          <span className="font-serif text-xl font-bold text-[#8E3A59]">Gisela Echavarria</span>
        </Link>
      </div>
      <div className="flex flex-col gap-6 p-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/perfil.jpg?height=40&width=40"
            width={40}
            height={40}
            alt="Avatar"
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Sofía Martínez</p>
            <p className="text-xs text-gray-500 capitalize">{userRole}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-1">
          {filteredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-[#F3D9E2] hover:text-[#8E3A59]",
                pathname === link.href && "bg-[#F3D9E2] text-[#8E3A59]",
              )}
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-1">
          <Link
            href="/help"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-[#F3D9E2] hover:text-[#8E3A59]"
          >
            <HelpCircle className="h-4 w-4" />
            Ayuda y soporte
          </Link>
          <Button
            variant="ghost"
            onClick={toggleRole}
            className="flex items-center justify-start gap-3 px-3 py-2 text-sm text-gray-500 hover:bg-[#F3D9E2] hover:text-[#8E3A59]"
          >
            <Settings className="h-4 w-4" />
            Cambiar rol (demo)
          </Button>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-[#F3D9E2] hover:text-[#8E3A59]"
          >
            <LogOut className="h-4 w-4" />
            Cerrar sesión
          </Link>
        </div>
      </div>
    </div>
  )
}
