import Image from "next/image"
import {
  Users,
  BookOpen,
  DollarSign,
  BarChart,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Calendar,
  Settings,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Panel de Administración</h1>
          <p className="text-gray-500">Gestión y análisis de la plataforma</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            Generar reportes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Estadísticas generales */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total de usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-[#8E3A59]" />
                <div>
                  <div className="text-2xl font-bold">1,248</div>
                </div>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span className="text-xs font-medium">+12%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">128 nuevos este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Cursos activos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BookOpen className="h-8 w-8 text-[#8E3A59]" />
                <div>
                  <div className="text-2xl font-bold">24</div>
                </div>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span className="text-xs font-medium">+4%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">3 nuevos este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Ingresos mensuales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <DollarSign className="h-8 w-8 text-[#8E3A59]" />
                <div>
                  <div className="text-2xl font-bold">$42,580</div>
                </div>
              </div>
              <div className="flex items-center text-green-600">
                <TrendingUp className="mr-1 h-4 w-4" />
                <span className="text-xs font-medium">+8%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">vs. $39,425 el mes pasado</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Tasa de finalización</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <BarChart className="h-8 w-8 text-[#8E3A59]" />
                <div>
                  <div className="text-2xl font-bold">72%</div>
                </div>
              </div>
              <div className="flex items-center text-red-600">
                <TrendingDown className="mr-1 h-4 w-4" />
                <span className="text-xs font-medium">-3%</span>
              </div>
            </div>
            <p className="mt-1 text-xs text-gray-500">vs. 75% el mes pasado</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos y análisis */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Ingresos por categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {revenueByCategory.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color }} />
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className="font-medium">${category.revenue.toLocaleString()}</span>
                  </div>
                  <Progress
                    value={category.percentage}
                    className="h-2 bg-[#F3D9E2]"
                  />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{category.percentage}% del total</span>
                    <span className={category.change > 0 ? "text-green-600" : "text-red-600"}>
                      {category.change > 0 ? "+" : ""}
                      {category.change}% vs. mes anterior
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Usuarios por tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {usersByType.map((type, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full" style={{ backgroundColor: type.color }} />
                      <span className="font-medium">{type.name}</span>
                    </div>
                    <span className="font-medium">{type.count.toLocaleString()}</span>
                  </div>
                  <Progress
                    value={type.percentage}
                    className="h-2 bg-[#F3D9E2]"
                  />
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{type.percentage}% del total</span>
                    <span className={type.change > 0 ? "text-green-600" : "text-red-600"}>
                      {type.change > 0 ? "+" : ""}
                      {type.change}% vs. mes anterior
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cursos más populares */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Cursos más populares</h2>
        <div className="overflow-hidden rounded-lg border border-[#F3D9E2]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F3D9E2]/30">
                  <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">Curso</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Instructor
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Estudiantes
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">Ingresos</th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Valoración
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F3D9E2]">
                {popularCourses.map((course, index) => (
                  <tr key={index} className="bg-white hover:bg-[#F3D9E2]/10">
                    <td className="whitespace-nowrap px-4 py-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{course.title}</p>
                          <p className="text-xs text-gray-500">{course.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">{course.instructor}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">{course.students}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">${course.revenue.toLocaleString()}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">
                      <div className="flex items-center">
                        <span className="mr-1 font-medium">{course.rating}</span>
                        <svg
                          className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]"
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
                        <span className="ml-1 text-xs text-gray-500">({course.reviews})</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">
                      <Badge
                        className={
                          course.status === "Activo"
                            ? "bg-green-100 text-green-800"
                            : course.status === "Pendiente"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }
                      >
                        {course.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Actividades recientes y próximos eventos */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Actividades recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#F3D9E2]">
                    {activity.icon}
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span>{activity.user}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
              Ver todas las actividades
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardHeader>
            <CardTitle className="text-lg text-[#8E3A59]">Próximos eventos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="rounded-lg border border-[#F3D9E2] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-medium">{event.title}</h4>
                    <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4 text-[#8E3A59]" />
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{event.participants} participantes</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    >
                      Detalles
                    </Button>
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
      </div>

      {/* Configuración rápida */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Configuración rápida</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {quickSettings.map((setting, index) => (
            <Card key={index} className="border-[#F3D9E2]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                    {setting.icon}
                  </div>
                  <h3 className="font-medium">{setting.title}</h3>
                  <p className="mb-3 text-sm text-gray-500">{setting.description}</p>
                  <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const revenueByCategory = [
  {
    name: "Maquillaje",
    revenue: 18500,
    percentage: 43,
    change: 5,
    color: "#8E3A59",
  },
  {
    name: "Estilismo",
    revenue: 12800,
    percentage: 30,
    change: 8,
    color: "#D4AF37",
  },
  {
    name: "Skincare",
    revenue: 6500,
    percentage: 15,
    change: -3,
    color: "#5D8CAE",
  },
  {
    name: "Nail Art",
    revenue: 4780,
    percentage: 12,
    change: 12,
    color: "#6B8E23",
  },
]

const usersByType = [
  {
    name: "Estudiantes",
    count: 980,
    percentage: 78,
    change: 12,
    color: "#8E3A59",
  },
  {
    name: "Instructores",
    count: 45,
    percentage: 4,
    change: 5,
    color: "#D4AF37",
  },
  {
    name: "Administradores",
    count: 8,
    percentage: 1,
    change: 0,
    color: "#5D8CAE",
  },
  {
    name: "Usuarios inactivos",
    count: 215,
    percentage: 17,
    change: -8,
    color: "#6B8E23",
  },
]

const popularCourses = [
  {
    title: "Maquillaje Profesional Avanzado",
    category: "Maquillaje",
    instructor: "Laura Martínez",
    students: 145,
    revenue: 14500,
    rating: 4.8,
    reviews: 98,
    status: "Activo",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Estilismo y Asesoría de Imagen",
    category: "Estilismo",
    instructor: "Carolina Gómez",
    students: 128,
    revenue: 12800,
    rating: 4.6,
    reviews: 85,
    status: "Activo",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Skincare Avanzado",
    category: "Skincare",
    instructor: "Ana Rodríguez",
    students: 112,
    revenue: 11200,
    rating: 4.9,
    reviews: 76,
    status: "Activo",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Nail Art y Manicura Profesional",
    category: "Nails",
    instructor: "Sofía López",
    students: 95,
    revenue: 9500,
    rating: 4.7,
    reviews: 62,
    status: "Activo",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "Colorimetría Personal",
    category: "Estilismo",
    instructor: "María Fernández",
    students: 78,
    revenue: 7800,
    rating: 4.5,
    reviews: 45,
    status: "Pendiente",
    image: "/placeholder.svg?height=40&width=40",
  },
]

const recentActivities = [
  {
    icon: <Users className="h-5 w-5 text-[#8E3A59]" />,
    title: "15 nuevos usuarios registrados",
    time: "Hace 30 minutos",
    user: "Sistema",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-[#8E3A59]" />,
    title: "Nuevo curso publicado: Colorimetría Personal",
    time: "Hace 2 horas",
    user: "María Fernández",
  },
  {
    icon: <DollarSign className="h-5 w-5 text-[#8E3A59]" />,
    title: "Pago procesado: $1,250",
    time: "Hace 3 horas",
    user: "Sistema",
  },
  {
    icon: <Settings className="h-5 w-5 text-[#8E3A59]" />,
    title: "Configuración de plataforma actualizada",
    time: "Hace 5 horas",
    user: "Admin",
  },
]

const upcomingEvents = [
  {
    title: "Masterclass de Maquillaje",
    type: "Clase en vivo",
    date: "Hoy",
    time: "18:00 - 20:00",
    participants: 45,
  },
  {
    title: "Lanzamiento de curso: Automaquillaje",
    type: "Lanzamiento",
    date: "Mañana",
    time: "10:00",
    participants: 120,
  },
  {
    title: "Reunión de instructores",
    type: "Reunión",
    date: "Viernes",
    time: "12:00 - 13:30",
    participants: 12,
  },
  {
    title: "Webinar: Tendencias de belleza 2023",
    type: "Webinar",
    date: "Próximo lunes",
    time: "19:00 - 20:30",
    participants: 85,
  },
]

const quickSettings = [
  {
    icon: <Users className="h-6 w-6 text-[#8E3A59]" />,
    title: "Usuarios",
    description: "Gestionar permisos y roles",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#8E3A59]" />,
    title: "Cursos",
    description: "Aprobar y publicar cursos",
  },
  {
    icon: <DollarSign className="h-6 w-6 text-[#8E3A59]" />,
    title: "Pagos",
    description: "Configurar métodos de pago",
  },
  {
    icon: <Settings className="h-6 w-6 text-[#8E3A59]" />,
    title: "Sistema",
    description: "Configuración general",
  },
]
