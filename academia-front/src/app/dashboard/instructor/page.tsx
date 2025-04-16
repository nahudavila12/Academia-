import Image from "next/image"
import { Users, BookOpen, MessageSquare, Calendar, BarChart, ArrowRight, Clock, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function InstructorDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Panel de Instructora</h1>
          <p className="text-gray-500">Gestiona tus cursos y estudiantes</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            Crear nuevo contenido
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Estadísticas generales */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Estudiantes activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Users className="h-8 w-8 text-[#8E3A59]" />
              <div>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-green-600">+12% este mes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Cursos activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <BookOpen className="h-8 w-8 text-[#8E3A59]" />
              <div>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-gray-500">3 publicados, 1 borrador</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Mensajes sin leer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-8 w-8 text-[#8E3A59]" />
              <div>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-gray-500">5 nuevos hoy</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Próxima clase</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <Calendar className="h-8 w-8 text-[#8E3A59]" />
              <div>
                <div className="font-medium">Hoy, 18:00</div>
                <p className="text-xs text-gray-500">Maquillaje para eventos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actividad reciente y rendimiento */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3D9E2]">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{activity.time}</span>
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
              Ver toda la actividad
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Rendimiento de cursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coursePerformance.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: course.color }} />
                      <span className="font-medium">{course.title}</span>
                    </div>
                    <span className="text-sm text-gray-500">{course.students} estudiantes</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress
                      value={course.completion}
                      className="h-2 flex-1 bg-[#F3D9E2]"
                      indicatorClassName={`bg-[${course.color}]`}
                    />
                    <span className="text-sm font-medium">{course.completion}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Tasa de finalización</span>
                    <span>
                      {course.rating} ★ ({course.reviews} reseñas)
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
              Ver análisis detallado
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Estudiantes destacados */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Estudiantes destacados</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topStudents.map((student, index) => (
            <Card key={index} className="border-[#F3D9E2]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <Image
                      src={student.avatar || "/placeholder.svg"}
                      alt={student.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    {student.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                    )}
                  </div>
                  <h3 className="font-medium">{student.name}</h3>
                  <p className="text-sm text-gray-500">{student.course}</p>
                  <div className="mt-2 flex items-center justify-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < student.progress ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {student.completedLessons}/{student.totalLessons} lecciones completadas
                  </p>
                  <div className="mt-3 flex w-full justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    >
                      Perfil
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    >
                      Mensaje
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tareas pendientes */}
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle className="text-lg text-[#8E3A59]">Tareas pendientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between rounded-lg border border-[#F3D9E2] p-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3D9E2]">
                    {task.icon}
                  </div>
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-gray-500">{task.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={task.priority === "Alta" ? "default" : "outline"}
                    className={
                      task.priority === "Alta"
                        ? "bg-red-100 text-red-800"
                        : task.priority === "Media"
                          ? "border-yellow-300 text-yellow-800"
                          : "border-green-300 text-green-800"
                    }
                  >
                    {task.priority}
                  </Badge>
                  <Button size="sm" className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                    Completar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
            Ver todas las tareas
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const recentActivity = [
  {
    icon: <CheckCircle className="h-5 w-5 text-[#8E3A59]" />,
    title: "María López completó el módulo 3",
    time: "Hace 30 minutos",
    course: "Maquillaje Profesional",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-[#8E3A59]" />,
    title: "Nuevo mensaje de Ana Rodríguez",
    time: "Hace 1 hora",
    course: "Estilismo y Asesoría",
  },
  {
    icon: <Users className="h-5 w-5 text-[#8E3A59]" />,
    title: "3 nuevas inscripciones",
    time: "Hace 3 horas",
    course: "Nail Art Profesional",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-[#8E3A59]" />,
    title: "Contenido nuevo publicado",
    time: "Hace 5 horas",
    course: "Maquillaje Profesional",
  },
]

const coursePerformance = [
  {
    title: "Maquillaje Profesional",
    students: 45,
    completion: 78,
    rating: 4.8,
    reviews: 32,
    color: "#8E3A59",
  },
  {
    title: "Estilismo y Asesoría",
    students: 38,
    completion: 65,
    rating: 4.6,
    reviews: 28,
    color: "#D4AF37",
  },
  {
    title: "Nail Art Profesional",
    students: 25,
    completion: 82,
    rating: 4.9,
    reviews: 18,
    color: "#5D8CAE",
  },
  {
    title: "Skincare Avanzado",
    students: 20,
    completion: 70,
    rating: 4.7,
    reviews: 15,
    color: "#6B8E23",
  },
]

const topStudents = [
  {
    name: "María López",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Maquillaje Profesional",
    progress: 5,
    completedLessons: 18,
    totalLessons: 20,
    online: true,
  },
  {
    name: "Ana Rodríguez",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Estilismo y Asesoría",
    progress: 4,
    completedLessons: 15,
    totalLessons: 20,
    online: false,
  },
  {
    name: "Laura Gómez",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Nail Art Profesional",
    progress: 5,
    completedLessons: 19,
    totalLessons: 20,
    online: true,
  },
  {
    name: "Carmen Martínez",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Skincare Avanzado",
    progress: 4,
    completedLessons: 16,
    totalLessons: 20,
    online: false,
  },
]

const pendingTasks = [
  {
    icon: <BookOpen className="h-5 w-5 text-[#8E3A59]" />,
    title: "Revisar proyectos finales",
    description: "10 proyectos pendientes de revisión",
    priority: "Alta",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-[#8E3A59]" />,
    title: "Responder mensajes",
    description: "8 mensajes sin responder",
    priority: "Media",
  },
  {
    icon: <Calendar className="h-5 w-5 text-[#8E3A59]" />,
    title: "Preparar clase en vivo",
    description: "Maquillaje para eventos - Jueves 18:00",
    priority: "Alta",
  },
  {
    icon: <BarChart className="h-5 w-5 text-[#8E3A59]" />,
    title: "Actualizar calificaciones",
    description: "Módulo 3 - Estilismo y Asesoría",
    priority: "Baja",
  },
]
