import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, BookOpen, Video, Award, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Bienvenida, Sofía</h1>
          <p className="text-gray-500">Continúa tu aprendizaje donde lo dejaste</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            Explorar cursos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Progreso general */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Cursos activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3 de 4</div>
            <p className="text-xs text-gray-500">75% de tus cursos en progreso</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Próxima clase</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-[#8E3A59]" />
            <div>
              <div className="font-medium">Maquillaje para eventos</div>
              <p className="text-xs text-gray-500">Hoy, 18:00 - 20:00</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Certificados</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-4">
            <Award className="h-8 w-8 text-[#8E3A59]" />
            <div>
              <div className="font-medium">1 Certificado obtenido</div>
              <p className="text-xs text-gray-500">Skincare Básico</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cursos en progreso */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#8E3A59]">Continúa aprendiendo</h2>
          <Link href="/dashboard/student/courses" className="text-sm font-medium text-[#8E3A59] hover:underline">
            Ver todos mis cursos
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
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
                <Progress value={course.progress} className="h-2 bg-[#F3D9E2] [&>div]:bg-[#8E3A59]" />
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
      </div>

      {/* Próximas actividades y anuncios */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Próximas actividades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3D9E2]">
                    {activity.type === "class" && <Video className="h-5 w-5 text-[#8E3A59]" />}
                    {activity.type === "assignment" && <FileIcon className="h-5 w-5 text-[#8E3A59]" />}
                    {activity.type === "exam" && <BookOpen className="h-5 w-5 text-[#8E3A59]" />}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{activity.date}</span>
                      <span>•</span>
                      <span>{activity.course}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
              Ver calendario completo
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Anuncios y novedades</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <div key={index} className="rounded-lg border border-[#F3D9E2] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">{announcement.title}</h4>
                    <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
                      {announcement.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{announcement.content}</p>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{announcement.date}</span>
                    <span>{announcement.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
              Ver todos los anuncios
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Materiales recomendados */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Materiales recomendados</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {materials.map((material, index) => (
            <Card key={index} className="overflow-hidden border-[#F3D9E2]">
              <div className="relative aspect-[4/3]">
                {material.type === "video" ? (
                  <iframe
                    src={(material.src ?? "").replace("shorts/", "embed/").split("?")[0]}
                    title={material.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <Image src={material.image || "/placeholder.svg"} alt={material.title} fill className="object-cover" />
                )}
              </div>
              <CardContent className="p-3">
                <h3 className="line-clamp-1 font-medium">{material.title}</h3>
                <p className="text-xs text-gray-500">{material.course}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const FileIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const courses = [
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

const activities = [
  {
    type: "class",
    title: "Clase en vivo: Técnicas de maquillaje para eventos",
    date: "Hoy, 18:00 - 20:00",
    course: "Maquillaje Profesional",
  },
  {
    type: "assignment",
    title: "Entrega de proyecto: Análisis de colorimetría",
    date: "Mañana, 23:59",
    course: "Estilismo y Asesoría",
  },
  {
    type: "exam",
    title: "Evaluación: Técnicas de nail art",
    date: "Viernes, 15:00",
    course: "Nail Art Profesional",
  },
  {
    type: "class",
    title: "Taller práctico: Automaquillaje natural",
    date: "Sábado, 10:00 - 13:00",
    course: "Maquillaje Profesional",
  },
]

const announcements = [
  {
    title: "Masterclass exclusiva con María Fernández",
    content: "No te pierdas la masterclass exclusiva con la maquilladora de celebridades María Fernández este viernes.",
    date: "Hace 2 horas",
    author: "Coordinación Académica",
    type: "Evento",
  },
  {
    title: "Nuevos materiales disponibles",
    content: "Hemos añadido nuevos tutoriales y recursos para el curso de Estilismo y Asesoría de Imagen.",
    date: "Ayer",
    author: "Carolina Gómez",
    type: "Curso",
  },
  {
    title: "Cambio de horario: Clase de técnicas avanzadas",
    content: "La clase del jueves se traslada a las 19:00 debido a problemas técnicos.",
    date: "Hace 2 días",
    author: "Laura Martínez",
    type: "Aviso",
  },
]

const materials = [
  {
    title: "Tutorial: Base perfecta para piel grasa",
    src: "https://youtube.com/shorts/8VuWuCoxVeA?si=2YJPUt85lkgI1M9-?height=150&width=200",
    type: "video",
    course: "Maquillaje Profesional",
  },
  {
    title: "Guía de colorimetría personal",
    image: "/images/color.jpg?height=150&width=200",
    type: "pdf",
    course: "Estilismo y Asesoría de Imagen",
  },
  {
    title: "Técnicas de degradado para uñas",
    src: "https://youtube.com/shorts/ZIkDbAiREdg?si=XM2clNOXmyLyAZuE?height=150&width=200",
    type: "video",
    course: "Nail Art Profesional",
  },
  {
    title: "Plantillas de diseño para maquillaje",
    image: "/images/maquillaje.jpg?height=150&width=200",
    type: "pdf",
    course: "Maquillaje Profesional",
  },
]