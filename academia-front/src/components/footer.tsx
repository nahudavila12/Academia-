import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#F3D9E2] text-gray-600">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-4">
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
            <p className="text-sm">Transformando vidas a través de la belleza y el empoderamiento femenino.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#8E3A59]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8E3A59]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8E3A59]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8E3A59]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#8E3A59]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#8E3A59]">Cursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Maquillaje
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Estilismo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Nail Art
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Empoderamiento
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#8E3A59]">Recursos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Tutoriales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Guías
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-[#8E3A59]">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Prensa
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#8E3A59]">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/auth/login-instructor" className="hover:text-[#8E3A59]">
                  Acceso instructores
                </Link>
              </li>
              <li>
                <Link href="/auth/login-admin" className="hover:text-[#8E3A59]">
                  Acceso administradores
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="mb-4 text-lg font-bold text-[#8E3A59]">Suscríbete</h3>
            <p className="mb-4 text-sm">Recibe las últimas novedades y ofertas especiales en tu correo.</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                />
                <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Suscribirse</span>
                </Button>
              </div>
              <p className="text-xs">
                Al suscribirte, aceptas nuestra{" "}
                <Link href="#" className="underline hover:text-[#8E3A59]">
                  Política de Privacidad
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#F3D9E2] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs">&copy; {new Date().getFullYear()} BeautyAcademy. Todos los derechos reservados.</p>
            <div className="flex gap-4 text-xs">
              <Link href="#" className="hover:text-[#8E3A59]">
                Términos de servicio
              </Link>
              <Link href="#" className="hover:text-[#8E3A59]">
                Política de privacidad
              </Link>
              <Link href="#" className="hover:text-[#8E3A59]">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
