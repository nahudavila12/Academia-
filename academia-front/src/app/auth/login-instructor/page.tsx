"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function InstructorLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de login
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard/instructor")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCFA]">
      <div className="container flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-full max-w-[1000px] gap-6 rounded-xl border border-[#F3D9E2] bg-white p-6 shadow-sm md:grid-cols-2 lg:p-10">
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Logo"
                  className="rounded-full"
                />
                <span className="font-serif text-xl font-bold text-[#8E3A59]">BeautyAcademy</span>
              </Link>
              <h1 className="mt-8 font-serif text-2xl font-bold text-[#8E3A59] md:text-3xl">Portal de Instructores</h1>
              <p className="mt-2 text-gray-600">
                Accede a tu panel de instructor para gestionar tus cursos y estudiantes.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link href="/auth/reset-password" className="text-xs text-[#8E3A59] hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-10 w-10 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">
                  Recordarme
                </Label>
              </div>
              <Button type="submit" className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white" disabled={loading}>
                {loading ? "Iniciando sesión..." : "Acceder como instructor"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              ¿Quieres ser instructor?{" "}
              <Link href="/auth/register" className="font-medium text-[#8E3A59] hover:underline">
                Regístrate aquí
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                fill
                alt="Instructor enseñando técnicas de belleza"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8E3A59]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <blockquote className="space-y-2">
                  <p className="text-lg font-medium italic">
                    "Enseñar en BeautyAcademy me ha permitido compartir mi pasión con estudiantes de todo el mundo y
                    crear una comunidad vibrante de profesionales."
                  </p>
                  <footer className="text-sm">— Carlos Mendoza, Instructor Senior</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
