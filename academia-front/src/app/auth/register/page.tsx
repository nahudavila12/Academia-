"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Lock, Mail, User, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "student",
    howDidYouHear: "",
    agreeTerms: false,
  })
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulación de registro
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const passwordsMatch = formData.password === formData.confirmPassword

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCFA]">
      <div className="container flex flex-1 items-center justify-center py-12">
        <div className="mx-auto grid w-full max-w-[1000px] gap-6 rounded-xl border border-[#F3D9E2] bg-white p-6 shadow-sm md:grid-cols-2 lg:p-10">
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png?height=40&width=40"
                  width={40}
                  height={40}
                  alt="Logo"
                  className="rounded-full"
                />
                <span className="font-serif text-xl font-bold text-[#8E3A59]">BeautyAcademy</span>
              </Link>
              <h1 className="mt-8 font-serif text-2xl font-bold text-[#8E3A59] md:text-3xl">
                {step === 1 ? "Crea tu cuenta" : "Completa tu perfil"}
              </h1>
              <p className="mt-2 text-gray-600">
                {step === 1
                  ? "Únete a nuestra comunidad y comienza tu viaje de aprendizaje."
                  : "Solo unos detalles más para personalizar tu experiencia."}
              </p>
            </div>

            {step === 1 ? (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="María"
                        className="pl-10"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="González"
                        className="pl-10"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={8}
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
                  <p className="text-xs text-gray-500">La contraseña debe tener al menos 8 caracteres</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className={`pl-10 ${!passwordsMatch && formData.confirmPassword ? "border-red-500" : ""}`}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-10 w-10 text-gray-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">
                        {showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      </span>
                    </Button>
                  </div>
                  {!passwordsMatch && formData.confirmPassword && (
                    <p className="text-xs text-red-500">Las contraseñas no coinciden</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white"
                  disabled={!passwordsMatch || !formData.password}
                >
                  Continuar
                </Button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label>Tipo de cuenta</Label>
                  <RadioGroup
                    defaultValue="student"
                    className="flex flex-col space-y-2"
                    value={formData.accountType}
                    onValueChange={(value) => handleSelectChange("accountType", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student" />
                      <Label htmlFor="student" className="cursor-pointer">
                        Estudiante
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="instructor" id="instructor" />
                      <Label htmlFor="instructor" className="cursor-pointer">
                        Instructor (requiere aprobación)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="howDidYouHear">¿Cómo nos conociste?</Label>
                  <Select
                    value={formData.howDidYouHear}
                    onValueChange={(value) => handleSelectChange("howDidYouHear", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="social">Redes sociales</SelectItem>
                      <SelectItem value="friend">Recomendación de un amigo</SelectItem>
                      <SelectItem value="search">Buscador</SelectItem>
                      <SelectItem value="ad">Publicidad</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="terms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-tight">
                    Acepto los{" "}
                    <Link href="/terms" className="text-[#8E3A59] hover:underline">
                      Términos y Condiciones
                    </Link>{" "}
                    y la{" "}
                    <Link href="/privacy" className="text-[#8E3A59] hover:underline">
                      Política de Privacidad
                    </Link>
                  </Label>
                </div>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 border-[#F3D9E2]"
                    onClick={() => setStep(1)}
                  >
                    Atrás
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-[#8E3A59] hover:bg-[#7A3049] text-white"
                    disabled={loading || !formData.agreeTerms}
                  >
                    {loading ? "Registrando..." : "Completar registro"}
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6 text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/auth/login" className="font-medium text-[#8E3A59] hover:underline">
                Inicia sesión
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/images/login.jpg?height=600&width=500"
                fill
                alt="Estudiante aprendiendo técnicas de belleza"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8E3A59]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Beneficios de unirte</h3>
                  <ul className="space-y-2">
                    {[
                      "Acceso a cursos exclusivos",
                      "Certificados reconocidos en la industria",
                      "Comunidad de profesionales",
                      "Recursos descargables",
                      "Tutorías personalizadas",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#F3D9E2] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
