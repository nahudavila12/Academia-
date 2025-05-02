import Image from "next/image"
import { Search, Filter, Plus, MoreHorizontal, Download, ArrowUpDown, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function AdminCoursesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Cursos</h1>
          <p className="text-gray-500">Gestiona los cursos de la plataforma</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            <Plus className="mr-2 h-4 w-4" />
            Crear curso
          </Button>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar cursos..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
            <SelectValue placeholder="Filtrar por categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las categorías</SelectItem>
            <SelectItem value="makeup">Maquillaje</SelectItem>
            <SelectItem value="styling">Estilismo</SelectItem>
            <SelectItem value="skincare">Skincare</SelectItem>
            <SelectItem value="nails">Nails</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="active">
          <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="active">Activos</SelectItem>
            <SelectItem value="inactive">Inactivos</SelectItem>
            <SelectItem value="draft">Borradores</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Más filtros
        </Button>
      </div>

      {/* Estadísticas de cursos */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total de cursos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-green-600">+3 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Estudiantes inscritos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,845</div>
            <p className="text-xs text-green-600">+215 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Valoración promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5</div>
            <p className="text-xs text-green-600">+0.2 vs. mes anterior</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Tasa de finalización</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-red-600">-3% vs. mes anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de cursos */}
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle>Lista de cursos</CardTitle>
          <CardDescription>Un total de 24 cursos disponibles en la plataforma.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Curso
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Instructor
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Estudiantes
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Valoración
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Estado
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-20 flex-shrink-0 overflow-hidden rounded-md">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              course.category === "Maquillaje"
                                ? "bg-[#8E3A59]/10 text-[#8E3A59]"
                                : course.category === "Estilismo"
                                  ? "bg-amber-100 text-amber-800"
                                  : course.category === "Skincare"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                            }
                          >
                            {course.category}
                          </Badge>
                          <span className="text-xs text-gray-500">{course.duration}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="relative h-8 w-8">
                        <Image
                          src={course.instructorAvatar || "/placeholder.svg"}
                          alt={course.instructor}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span>{course.instructor}</span>
                    </div>
                  </TableCell>
                  <TableCell>{course.students}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{course.rating}</span>
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
                      <span className="text-xs text-gray-500">({course.reviews})</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        course.status === "active"
                          ? "bg-green-100 text-green-800"
                          : course.status === "inactive"
                            ? "bg-red-100 text-red-800"
                            : "bg-amber-100 text-amber-800"
                      }
                    >
                      {course.status === "active" ? "Activo" : course.status === "inactive" ? "Inactivo" : "Borrador"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Abrir menú</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Ver detalles
                        </DropdownMenuItem>
                        <DropdownMenuItem>Editar curso</DropdownMenuItem>
                        <DropdownMenuItem>Duplicar curso</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {course.status === "active" ? (
                          <DropdownMenuItem className="text-red-600">Desactivar</DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-600">Activar</DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Cursos populares */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Cursos más populares</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularCourses.map((course, index) => (
            <Card key={index} className="border-[#F3D9E2]">
              <div className="relative aspect-video">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="rounded-t-lg object-cover"
                />
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{course.rating}</span>
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
                    <span className="text-xs text-gray-500">({course.reviews} reseñas)</span>
                  </div>
                  <span className="text-sm text-gray-500">{course.students} estudiantes</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <Progress
                    value={course.completion}
                    className="h-2 flex-1 bg-[#F3D9E2]"
                  />
                  <span className="text-xs font-medium">{course.completion}%</span>
                </div>
                <p className="mt-2 text-xs text-gray-500">Tasa de finalización</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const courses = [
  {
    id: 1,
    title: "Maquillaje Profesional Avanzado",
    category: "Maquillaje",
    instructor: "Laura Martínez",
    instructorAvatar: "/placeholder.svg?height=32&width=32",
    students: 145,
    rating: 4.8,
    reviews: 98,
    status: "active",
    image: "/placeholder.svg?height=48&width=80",
    duration: "8 semanas",
  },
  {
    id: 2,
    title: "Estilismo y Asesoría de Imagen",
    category: "Estilismo",
    instructor: "Carolina Gómez",
    instructorAvatar: "/placeholder.svg?height=32&width=32",
    students: 128,
    rating: 4.6,
    reviews: 85,
    status: "active",
    image: "/placeholder.svg?height=48&width=80",
    duration: "10 semanas",
  },
  {
    id: 3,
    title: "Skincare Avanzado",
    category: "Skincare",
    instructor: "Ana Rodríguez",
    instructorAvatar: "/placeholder.svg?height=32&width=32",
    students: 112,
    rating: 4.9,
    reviews: 76,
    status: "active",
    image: "/placeholder.svg?height=48&width=80",
    duration: "6 semanas",
  },
  {
    id: 4,
    title: "Nail Art y Manicura Profesional",
    category: "Nails",
    instructor: "Sofía López",
    instructorAvatar: "/placeholder.svg?height=32&width=32",
    students: 95,
    rating: 4.7,
    reviews: 62,
    status: "active",
    image: "/placeholder.svg?height=48&width=80",
    duration: "7 semanas",
  },
  {
    id: 5,
    title: "Colorimetría Personal",
    category: "Estilismo",
    instructor: "María Fernández",
    instructorAvatar: "/placeholder.svg?height=32&width=32",
    students: 0,
    rating: 0,
    reviews: 0,
    status: "draft",
    image: "/placeholder.svg?height=48&width=80",
    duration: "5 semanas",
  },
]

const popularCourses = [
  {
    title: "Maquillaje Profesional Avanzado",
    category: "Maquillaje",
    instructor: "Laura Martínez",
    students: 145,
    rating: 4.8,
    reviews: 98,
    completion: 78,
    image: "/placeholder.svg?height=180&width=320",
  },
  {
    title: "Estilismo y Asesoría de Imagen",
    category: "Estilismo",
    instructor: "Carolina Gómez",
    students: 128,
    rating: 4.6,
    reviews: 85,
    completion: 65,
    image: "/placeholder.svg?height=180&width=320",
  },
  {
    title: "Skincare Avanzado",
    category: "Skincare",
    instructor: "Ana Rodríguez",
    students: 112,
    rating: 4.9,
    reviews: 76,
    completion: 82,
    image: "/placeholder.svg?height=180&width=320",
  },
]
