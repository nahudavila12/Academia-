import Image from "next/image"
import { Download, Share, Award, Calendar, CheckCircle, Search, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function CertificatesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Mis certificados</h1>
          <p className="text-gray-500">Gestiona tus logros y certificaciones</p>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar certificados..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Filtrar
        </Button>
      </div>

      {/* Pestañas de certificados */}
      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="bg-[#F3D9E2]/30">
          <TabsTrigger value="completed" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Completados
          </TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            En progreso
          </TabsTrigger>
        </TabsList>

        {/* Certificados completados */}
        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedCertificates.map((certificate, index) => (
              <Card key={index} className="overflow-hidden border-[#F3D9E2]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white text-[#8E3A59]">{certificate.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1 text-lg">{certificate.title}</CardTitle>
                  <p className="text-sm text-gray-500">Instructor: {certificate.instructor}</p>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Completado: {certificate.completionDate}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <Award className="h-4 w-4 text-[#D4AF37]" />
                    <span>ID: {certificate.id}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    leftIcon={<Download className="mr-2 h-4 w-4" />}
                  >
                    Descargar
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    leftIcon={<Share className="mr-2 h-4 w-4" />}
                  >
                    Compartir
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Certificados en progreso */}
        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inProgressCertificates.map((certificate, index) => (
              <Card key={index} className="overflow-hidden border-[#F3D9E2]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white text-[#8E3A59]">{certificate.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1 text-lg">{certificate.title}</CardTitle>
                  <p className="text-sm text-gray-500">Instructor: {certificate.instructor}</p>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progreso: {certificate.progress}%</span>
                    <span className="font-medium text-[#8E3A59]">
                      {certificate.completedModules}/{certificate.totalModules} módulos
                    </span>
                  </div>
                  <Progress
                    value={certificate.progress}
                    className="h-2 bg-[#F3D9E2]"
                    indicatorClassName="bg-[#8E3A59]"
                  />
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Último módulo completado: {certificate.lastCompletedModule}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white">Continuar curso</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Certificados destacados */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Certificados destacados</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredCertificates.map((certificate, index) => (
            <Card key={index} className="overflow-hidden border-[#F3D9E2]">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 w-full md:h-auto md:w-1/3">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 font-serif text-xl font-bold text-[#8E3A59]">{certificate.title}</h3>
                  <p className="text-sm text-gray-600">{certificate.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                    <Award className="h-4 w-4 text-[#D4AF37]" />
                    <span>Certificación {certificate.level}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>Completado: {certificate.completionDate}</span>
                  </div>
                  <div className="mt-auto flex gap-2 pt-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                      leftIcon={<Download className="mr-2 h-4 w-4" />}
                    >
                      Descargar
                    </Button>
                    <Button className="flex-1 bg-[#8E3A59] hover:bg-[#7A3049] text-white">Ver detalles</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Próximas certificaciones */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Próximas certificaciones</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingCertificates.map((certificate, index) => (
            <Card key={index} className="border-[#F3D9E2]">
              <CardHeader className="pb-2">
                <Badge className="mb-2 w-fit bg-[#F3D9E2] text-[#8E3A59]">{certificate.category}</Badge>
                <CardTitle className="line-clamp-2 text-base">{certificate.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500">Instructor: {certificate.instructor}</p>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span>Disponible: {certificate.availableDate}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const completedCertificates = [
  {
    title: "Certificado en Skincare Básico",
    instructor: "Ana Rodríguez",
    image: "/placeholder.svg?height=300&width=400",
    category: "Skincare",
    completionDate: "15/04/2023",
    id: "CERT-SKN-2023-001",
  },
]

const inProgressCertificates = [
  {
    title: "Certificado en Maquillaje Profesional",
    instructor: "Laura Martínez",
    image: "/placeholder.svg?height=300&width=400",
    category: "Maquillaje",
    progress: 65,
    completedModules: 13,
    totalModules: 20,
    lastCompletedModule: "Técnicas de difuminado",
  },
  {
    title: "Certificado en Estilismo y Asesoría de Imagen",
    instructor: "Carolina Gómez",
    image: "/placeholder.svg?height=300&width=400",
    category: "Estilismo",
    progress: 30,
    completedModules: 6,
    totalModules: 20,
    lastCompletedModule: "Análisis de colorimetría",
  },
  {
    title: "Certificado en Nail Art Profesional",
    instructor: "Sofía López",
    image: "/placeholder.svg?height=300&width=400",
    category: "Nails",
    progress: 45,
    completedModules: 9,
    totalModules: 20,
    lastCompletedModule: "Técnicas de degradado",
  },
]

const featuredCertificates = [
  {
    title: "Certificado en Skincare Básico",
    description:
      "Esta certificación acredita conocimientos en rutinas de cuidado facial, identificación de tipos de piel y aplicación de productos específicos para cada necesidad.",
    image: "/placeholder.svg?height=200&width=300",
    level: "Profesional",
    completionDate: "15/04/2023",
  },
]

const upcomingCertificates = [
  {
    title: "Certificado en Maquillaje Editorial",
    instructor: "Laura Martínez",
    category: "Maquillaje",
    availableDate: "Próximamente",
  },
  {
    title: "Certificado en Colorimetría Avanzada",
    instructor: "Carolina Gómez",
    category: "Estilismo",
    availableDate: "Junio 2023",
  },
  {
    title: "Certificado en Tratamientos Faciales",
    instructor: "Ana Rodríguez",
    category: "Skincare",
    availableDate: "Julio 2023",
  },
  {
    title: "Certificado en Diseño de Uñas 3D",
    instructor: "Sofía López",
    category: "Nails",
    availableDate: "Agosto 2023",
  },
]
