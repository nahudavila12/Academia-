"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, ShieldAlert } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AdminLoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simulación de login
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard/admin")
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
              <h1 className="mt-8 font-serif text-2xl font-bold text-[#8E3A59] md:text-3xl">Panel de Administración</h1>
              <p className="mt-2 text-gray-600">Acceso restringido para administradores de la plataforma.</p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-4">
                <ShieldAlert className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email administrativo</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@beautyacademy.com"
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
                  <Link href="/auth/reset-password?type=admin" className="text-xs text-[#8E3A59] hover:underline">
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
                {loading ? "Verificando credenciales..." : "Acceder como administrador"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm">
              <Link href="/auth/login" className="font-medium text-[#8E3A59] hover:underline">
                Volver al inicio de sesión normal
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#8E3A59]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                <ShieldAlert className="h-16 w-16 mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-center">Área Restringida</h2>
                <p className="text-center max-w-xs">
                  Este portal es exclusivo para administradores autorizados de BeautyAcademy. El acceso no autorizado
                  está prohibido y puede resultar en acciones legales.
                </p>
                <div className="mt-8 p-4 border border-white/30 rounded-lg bg-white/10 w-full max-w-xs">
                  <h3 className="font-bold mb-2">Soporte técnico</h3>
                  <p className="text-sm">
                    Si necesitas ayuda con tu cuenta de administrador, contacta al equipo de soporte:
                  </p>
                  <p className="text-sm mt-2">soporte@beautyacademy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
