import Image from "next/image"
import { Search, Filter, Mail, MoreHorizontal, Download, ArrowUpDown } from "lucide-react"

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

export default function InstructorStudentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Estudiantes</h1>
          <p className="text-gray-500">Gestiona y haz seguimiento de tus estudiantes</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
            <Mail className="mr-2 h-4 w-4" />
            Mensaje masivo
          </Button>
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            <Download className="mr-2 h-4 w-4" />
            Exportar datos
          </Button>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar estudiantes..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Select defaultValue="all-courses">
          <SelectTrigger className="w-[200px] border-[#F3D9E2] focus:ring-[#8E3A59]">
            <SelectValue placeholder="Filtrar por curso" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-courses">Todos los cursos</SelectItem>
            <SelectItem value="makeup">Maquillaje Profesional</SelectItem>
            <SelectItem value="styling">Estilismo y Asesoría</SelectItem>
            <SelectItem value="skincare">Skincare Avanzado</SelectItem>
            <SelectItem value="nails">Nail Art Profesional</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Más filtros
        </Button>
      </div>

      {/* Estadísticas de estudiantes */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total de estudiantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-green-600">+12 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Tasa de finalización</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-green-600">+5% vs. mes anterior</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Promedio de calificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.7/10</div>
            <p className="text-xs text-green-600">+0.3 vs. mes anterior</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Estudiantes activos hoy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-gray-500">33% del total</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de estudiantes */}
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle>Lista de estudiantes</CardTitle>
          <CardDescription>Un total de 128 estudiantes registrados en tus cursos.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Estudiante
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Curso
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Progreso
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Última actividad
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Calificación
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10">
                        <Image
                          src={student.avatar || "/placeholder.svg"}
                          alt={student.name}
                          fill
                          className="rounded-full object-cover"
                        />
                        {student.online && (
                          <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        student.course === "Maquillaje Profesional"
                          ? "bg-[#8E3A59]/10 text-[#8E3A59]"
                          : student.course === "Estilismo y Asesoría"
                            ? "bg-amber-100 text-amber-800"
                            : student.course === "Skincare Avanzado"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                      }
                    >
                      {student.course}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex w-full max-w-xs items-center gap-2">
                      <Progress
                        value={student.progress}
                        className="h-2 bg-[#F3D9E2]"
                        indicatorClassName="bg-[#8E3A59]"
                      />
                      <span className="text-xs font-medium">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">{student.lastActivity}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{student.grade}/10</span>
                      <Badge
                        variant="outline"
                        className={
                          student.grade >= 9
                            ? "border-green-500 text-green-600"
                            : student.grade >= 7
                              ? "border-amber-500 text-amber-600"
                              : "border-red-500 text-red-600"
                        }
                      >
                        {student.grade >= 9 ? "Excelente" : student.grade >= 7 ? "Bueno" : "Necesita mejorar"}
                      </Badge>
                    </div>
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
                        <DropdownMenuItem>Ver perfil</DropdownMenuItem>
                        <DropdownMenuItem>Enviar mensaje</DropdownMenuItem>
                        <DropdownMenuItem>Ver calificaciones</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Reportar problema</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

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
                          className={`h-4 w-4 ${i < student.progress / 20 ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"}`}
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
    </div>
  )
}

const students = [
  {
    id: 1,
    name: "María López",
    email: "maria.lopez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Maquillaje Profesional",
    progress: 85,
    lastActivity: "Hoy, 10:30",
    grade: 9.5,
    online: true,
  },
  {
    id: 2,
    name: "Ana Rodríguez",
    email: "ana.rodriguez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Estilismo y Asesoría",
    progress: 72,
    lastActivity: "Ayer, 15:45",
    grade: 8.7,
    online: false,
  },
  {
    id: 3,
    name: "Laura Gómez",
    email: "laura.gomez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Nail Art Profesional",
    progress: 95,
    lastActivity: "Hoy, 09:15",
    grade: 9.8,
    online: true,
  },
  {
    id: 4,
    name: "Carmen Martínez",
    email: "carmen.martinez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Skincare Avanzado",
    progress: 68,
    lastActivity: "Hace 2 días",
    grade: 7.5,
    online: false,
  },
  {
    id: 5,
    name: "Sofía Pérez",
    email: "sofia.perez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Maquillaje Profesional",
    progress: 45,
    lastActivity: "Hoy, 11:20",
    grade: 6.8,
    online: true,
  },
]

const topStudents = [
  {
    name: "María López",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Maquillaje Profesional",
    progress: 85,
    completedLessons: 17,
    totalLessons: 20,
    online: true,
  },
  {
    name: "Laura Gómez",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Nail Art Profesional",
    progress: 95,
    completedLessons: 19,
    totalLessons: 20,
    online: true,
  },
  {
    name: "Ana Rodríguez",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Estilismo y Asesoría",
    progress: 72,
    completedLessons: 14,
    totalLessons: 20,
    online: false,
  },
  {
    name: "Carmen Martínez",
    avatar: "/placeholder.svg?height=64&width=64",
    course: "Skincare Avanzado",
    progress: 68,
    completedLessons: 13,
    totalLessons: 20,
    online: false,
  },
]
