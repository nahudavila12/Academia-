import Image from "next/image"
import { Search, Filter, Clock, Star, BookOpen, CheckCircle, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function StudentCoursesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Mis cursos</h1>
          <p className="text-gray-500">Gestiona y continúa con tu aprendizaje</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            Explorar más cursos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar en mis cursos..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Filtrar
        </Button>
      </div>

      {/* Pestañas de cursos */}
      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList className="bg-[#F3D9E2]/30">
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            En progreso
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Completados
          </TabsTrigger>
          <TabsTrigger value="saved" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Guardados
          </TabsTrigger>
        </TabsList>

        {/* Cursos en progreso */}
        <TabsContent value="in-progress" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden border-[#F3D9E2]">
                <div className="relative aspect-video">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white text-[#8E3A59]">{course.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                  <CardDescription>Por {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="text-gray-500">Progreso: {course.progress}%</span>
                    <span className="font-medium text-[#8E3A59]">
                      {course.completedLessons}/{course.totalLessons} lecciones
                    </span>
                  </div>
                  <Progress value={course.progress} className="h-2 bg-[#F3D9E2]" 
                  />
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Última actividad: {course.lastActivity}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white">Continuar</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Cursos completados */}
        <TabsContent value="completed" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden border-[#F3D9E2]">
                <div className="relative aspect-video">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white text-[#8E3A59]">{course.category}</Badge>
                  </div>
                  <div className="absolute right-3 top-3">
                    <Badge className="bg-green-500 text-white">Completado</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                  <CardDescription>Por {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < course.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"}`}
                        />
                      ))}
                    <span className="ml-1 text-sm text-gray-500">Tu valoración</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Completado el {course.completionDate}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                    Ver certificado
                  </Button>
                  <Button className="flex-1 bg-[#8E3A59] hover:bg-[#7A3049] text-white">Repasar</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Cursos guardados */}
        <TabsContent value="saved" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {savedCourses.map((course, index) => (
              <Card key={index} className="overflow-hidden border-[#F3D9E2]">
                <div className="relative aspect-video">
                  <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-white text-[#8E3A59]">{course.category}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-1 text-lg">{course.title}</CardTitle>
                  <CardDescription>Por {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4 text-gray-500" />
                      <span>{course.lessons} lecciones</span>
                    </div>
                    <span className="text-gray-500">•</span>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < course.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"}`}
                        />
                      ))}
                    <span className="ml-1 text-sm text-gray-500">({course.reviews})</span>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                    Ver detalles
                  </Button>
                  <Button className="flex-1 bg-[#8E3A59] hover:bg-[#7A3049] text-white">Inscribirme</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const inProgressCourses = [
  {
    title: "Maquillaje Profesional Avanzado",
    instructor: "Laura Martínez",
    image: "/images/maquillajepro.jpg?height=180&width=320",
    progress: 65,
    completedLessons: 13,
    totalLessons: 20,
    lastActivity: "Ayer",
    category: "Maquillaje",
  },
  {
    title: "Estilismo y Asesoría de Imagen",
    instructor: "Carolina Gómez",
    image: "/images/estilismo.jpg?height=180&width=320",
    progress: 30,
    completedLessons: 6,
    totalLessons: 20,
    lastActivity: "Hace 3 días",
    category: "Estilismo",
  },
  {
    title: "Técnicas de Nail Art",
    instructor: "Sofía López",
    image: "/images/nails.jpg?height=180&width=320",
    progress: 45,
    completedLessons: 9,
    totalLessons: 20,
    lastActivity: "Hoy",
    category: "Nails",
  },
]

const completedCourses = [
  {
    title: "Skincare Básico",
    instructor: "Ana Rodríguez",
    image: "/images/skincare.jpg?height=180&width=320",
    rating: 5,
    completionDate: "15/04/2023",
    category: "Skincare",
  },
]

const savedCourses = [
  {
    title: "Colorimetría Personal",
    instructor: "María Fernández",
    image: "/images/color.jpg?height=180&width=320",
    lessons: 15,
    duration: "8 semanas",
    rating: 4.8,
    reviews: 45,
    category: "Estilismo",
  },
  {
    title: "Maquillaje Editorial",
    instructor: "Laura Martínez",
    image: "/images/maquillaje.jpg?height=180&width=320",
    lessons: 18,
    duration: "10 semanas",
    rating: 4.9,
    reviews: 38,
    category: "Maquillaje",
  },
]
