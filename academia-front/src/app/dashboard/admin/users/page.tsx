import Image from "next/image"
import { Search, Filter, MoreHorizontal, UserPlus, Download, ArrowUpDown, CheckCircle, XCircle } from "lucide-react"

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

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Usuarios</h1>
          <p className="text-gray-500">Gestiona los usuarios de la plataforma</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            <UserPlus className="mr-2 h-4 w-4" />
            Añadir usuario
          </Button>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar usuarios..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
            <SelectValue placeholder="Filtrar por rol" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los roles</SelectItem>
            <SelectItem value="student">Estudiantes</SelectItem>
            <SelectItem value="instructor">Instructores</SelectItem>
            <SelectItem value="admin">Administradores</SelectItem>
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
            <SelectItem value="pending">Pendientes</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Más filtros
        </Button>
      </div>

      {/* Estadísticas de usuarios */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total de usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,248</div>
            <p className="text-xs text-green-600">+128 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Estudiantes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">980</div>
            <p className="text-xs text-green-600">+112 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Instructores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-green-600">+3 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Tasa de actividad</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-green-600">+5% vs. mes anterior</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabla de usuarios */}
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle>Lista de usuarios</CardTitle>
          <CardDescription>Un total de 1,248 usuarios registrados en la plataforma.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[250px]">
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Usuario
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Rol
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Estado
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Fecha de registro
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead>
                  <Button variant="ghost" className="flex items-center gap-1 p-0 font-medium hover:bg-transparent">
                    Último acceso
                    <ArrowUpDown className="h-3 w-3" />
                  </Button>
                </TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10">
                        <Image
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          fill
                          className="rounded-full object-cover"
                        />
                        {user.online && (
                          <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-800"
                          : user.role === "instructor"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }
                    >
                      {user.role === "admin"
                        ? "Administrador"
                        : user.role === "instructor"
                          ? "Instructor"
                          : "Estudiante"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {user.status === "active" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : user.status === "inactive" ? (
                        <XCircle className="h-4 w-4 text-red-500" />
                      ) : (
                        <div className="h-4 w-4 rounded-full bg-amber-500" />
                      )}
                      <span>
                        {user.status === "active" ? "Activo" : user.status === "inactive" ? "Inactivo" : "Pendiente"}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{user.registrationDate}</TableCell>
                  <TableCell>{user.lastAccess}</TableCell>
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
                        <DropdownMenuItem>Editar usuario</DropdownMenuItem>
                        <DropdownMenuItem>Cambiar rol</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {user.status === "active" ? (
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
    </div>
  )
}

const users = [
  {
    id: 1,
    name: "María López",
    email: "maria.lopez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "student",
    status: "active",
    registrationDate: "15/01/2023",
    lastAccess: "Hoy, 10:30",
    online: true,
  },
  {
    id: 2,
    name: "Laura Martínez",
    email: "laura.martinez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "instructor",
    status: "active",
    registrationDate: "10/11/2022",
    lastAccess: "Hoy, 09:15",
    online: true,
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "admin",
    status: "active",
    registrationDate: "05/10/2022",
    lastAccess: "Ayer, 18:45",
    online: false,
  },
  {
    id: 4,
    name: "Ana Gómez",
    email: "ana.gomez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "student",
    status: "inactive",
    registrationDate: "20/03/2023",
    lastAccess: "Hace 2 semanas",
    online: false,
  },
  {
    id: 5,
    name: "Javier Pérez",
    email: "javier.perez@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "student",
    status: "pending",
    registrationDate: "01/05/2023",
    lastAccess: "Nunca",
    online: false,
  },
]
