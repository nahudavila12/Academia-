"use client"

import { useState } from "react"
import { Users, Plus, Search, Calendar, MessageSquare, BookOpen, ArrowRight, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StudyGroup {
  id: string
  name: string
  description: string
  category: string
  members: {
    count: number
    max: number
    avatars: string[]
  }
  course: string
  meetingSchedule: string
  nextMeeting: string
  isJoined: boolean
  progress?: number
}

export default function StudyGroups() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const [groups, setGroups] = useState<StudyGroup[]>([
    {
      id: "1",
      name: "Técnicas Avanzadas de Maquillaje",
      description: "Grupo de estudio para practicar técnicas avanzadas de maquillaje profesional",
      category: "maquillaje",
      members: {
        count: 8,
        max: 10,
        avatars: [
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
        ],
      },
      course: "Maquillaje Profesional Avanzado",
      meetingSchedule: "Martes y Jueves, 18:00 - 19:30",
      nextMeeting: "Mañana, 18:00",
      isJoined: true,
      progress: 65,
    },
    {
      id: "2",
      name: "Colorimetría y Asesoría de Imagen",
      description: "Exploramos juntas los conceptos de colorimetría y su aplicación en la asesoría de imagen",
      category: "estilismo",
      members: {
        count: 12,
        max: 15,
        avatars: [
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
        ],
      },
      course: "Estilismo y Asesoría de Imagen",
      meetingSchedule: "Lunes y Miércoles, 19:00 - 20:30",
      nextMeeting: "En 3 días, 19:00",
      isJoined: false,
    },
    {
      id: "3",
      name: "Nail Art Creativo",
      description: "Compartimos técnicas y diseños creativos para nail art profesional",
      category: "nail-art",
      members: {
        count: 6,
        max: 8,
        avatars: [
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
        ],
      },
      course: "Nail Art Profesional",
      meetingSchedule: "Viernes, 17:00 - 19:00",
      nextMeeting: "En 2 días, 17:00",
      isJoined: false,
    },
    {
      id: "4",
      name: "Skincare Avanzado",
      description: "Analizamos ingredientes y formulaciones para tratamientos de skincare profesional",
      category: "skincare",
      members: {
        count: 10,
        max: 12,
        avatars: [
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
          "/placeholder.svg?height=32&width=32",
        ],
      },
      course: "Skincare Avanzado",
      meetingSchedule: "Sábados, 10:00 - 12:00",
      nextMeeting: "En 4 días, 10:00",
      isJoined: true,
      progress: 40,
    },
  ])

  const handleJoinGroup = (groupId: string) => {
    setGroups(
      groups.map((group) => {
        if (group.id === groupId) {
          return {
            ...group,
            isJoined: true,
            members: {
              ...group.members,
              count: group.members.count + 1,
            },
            progress: 0,
          }
        }
        return group
      }),
    )
  }

  const handleLeaveGroup = (groupId: string) => {
    setGroups(
      groups.map((group) => {
        if (group.id === groupId) {
          return {
            ...group,
            isJoined: false,
            members: {
              ...group.members,
              count: group.members.count - 1,
            },
            progress: undefined,
          }
        }
        return group
      }),
    )
  }

  const filteredGroups = groups.filter((group) => {
    const matchesSearch =
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || group.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const myGroups = groups.filter((group) => group.isJoined)

  const categories = [
    { value: "all", label: "Todas las categorías" },
    { value: "maquillaje", label: "Maquillaje" },
    { value: "estilismo", label: "Estilismo" },
    { value: "nail-art", label: "Nail Art" },
    { value: "skincare", label: "Skincare" },
    { value: "peluquería", label: "Peluquería" },
  ]

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-[#8E3A59]" />
            <CardTitle className="text-xl text-[#8E3A59]">Grupos de Estudio</CardTitle>
          </div>
          <CardDescription>Únete a grupos de estudio para aprender y practicar con otras estudiantes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar grupos de estudio..."
                className="w-full rounded-full border-[#F3D9E2] bg-white pl-8 focus-visible:ring-[#8E3A59]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                <Filter className="mr-1 h-4 w-4" />
                Filtros
              </Button>

              <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                <Plus className="mr-1 h-4 w-4" />
                Crear grupo
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4 grid w-full grid-cols-3 bg-[#F3D9E2]/30">
              <TabsTrigger value="all">Todos los grupos</TabsTrigger>
              <TabsTrigger value="my-groups">Mis grupos</TabsTrigger>
              <TabsTrigger value="recommended">Recomendados</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="mb-4 flex justify-between">
                <h3 className="font-medium">Mostrando {filteredGroups.length} grupos</h3>
              </div>

              <div className="space-y-4">
                {filteredGroups.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[#F3D9E2] p-8 text-center">
                    <Users className="mx-auto mb-2 h-10 w-10 text-gray-300" />
                    <h3 className="mb-1 text-lg font-medium">No se encontraron grupos</h3>
                    <p className="text-sm text-gray-500">
                      Intenta con otros términos de búsqueda o crea un nuevo grupo
                    </p>
                  </div>
                ) : (
                  filteredGroups.map((group) => (
                    <Card key={group.id} className="border-[#F3D9E2] hover:border-[#8E3A59]/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium">{group.name}</h3>
                              <Badge className="bg-[#8E3A59]">
                                {categories.find((c) => c.value === group.category)?.label || group.category}
                              </Badge>
                            </div>

                            <p className="text-sm text-gray-600">{group.description}</p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                <span>{group.course}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{group.meetingSchedule}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {group.members.avatars.map((avatar, index) => (
                                  <Avatar key={index} className="h-6 w-6 border-2 border-white">
                                    <AvatarImage src={avatar || "/placeholder.svg"} alt={`Member ${index + 1}`} />
                                    <AvatarFallback>M{index + 1}</AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">
                                {group.members.count} / {group.members.max} miembros
                              </span>
                            </div>

                            {group.isJoined && group.progress !== undefined && (
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span>Progreso del grupo</span>
                                  <span>{group.progress}%</span>
                                </div>
                                <Progress
                                  value={group.progress}
                                  className="h-1.5 bg-[#F3D9E2]"
                          
                                />
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="border-[#8E3A59] text-[#8E3A59]">
                              Próxima reunión: {group.nextMeeting}
                            </Badge>

                            {group.isJoined ? (
                              <div className="flex flex-col gap-2">
                                <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                                  <MessageSquare className="mr-1 h-4 w-4" />
                                  Chat del grupo
                                </Button>
                                <Button
                                  variant="outline"
                                  className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]"
                                  onClick={() => handleLeaveGroup(group.id)}
                                >
                                  Abandonar grupo
                                </Button>
                              </div>
                            ) : (
                              <Button
                                className="bg-[#8E3A59] hover:bg-[#7A3049]"
                                onClick={() => handleJoinGroup(group.id)}
                                disabled={group.members.count >= group.members.max}
                              >
                                {group.members.count >= group.members.max ? "Grupo lleno" : "Unirse al grupo"}
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>

            <TabsContent value="my-groups" className="mt-0">
              {myGroups.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#F3D9E2] p-8 text-center">
                  <Users className="mx-auto mb-2 h-10 w-10 text-gray-300" />
                  <h3 className="mb-1 text-lg font-medium">No te has unido a ningún grupo</h3>
                  <p className="mb-4 text-sm text-gray-500">
                    Únete a grupos de estudio para aprender y practicar con otras estudiantes
                  </p>
                  <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                    <ArrowRight className="mr-1 h-4 w-4" />
                    Explorar grupos
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {myGroups.map((group) => (
                    <Card key={group.id} className="border-[#F3D9E2] hover:border-[#8E3A59]/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-medium">{group.name}</h3>
                              <Badge className="bg-[#8E3A59]">
                                {categories.find((c) => c.value === group.category)?.label || group.category}
                              </Badge>
                            </div>

                            <p className="text-sm text-gray-600">{group.description}</p>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                <span>{group.course}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{group.meetingSchedule}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                {group.members.avatars.map((avatar, index) => (
                                  <Avatar key={index} className="h-6 w-6 border-2 border-white">
                                    <AvatarImage src={avatar || "/placeholder.svg"} alt={`Member ${index + 1}`} />
                                    <AvatarFallback>M{index + 1}</AvatarFallback>
                                  </Avatar>
                                ))}
                              </div>
                              <span className="text-sm text-gray-500">
                                {group.members.count} / {group.members.max} miembros
                              </span>
                            </div>

                            {group.progress !== undefined && (
                              <div className="space-y-1">
                                <div className="flex items-center justify-between text-xs">
                                  <span>Progreso del grupo</span>
                                  <span>{group.progress}%</span>
                                </div>
                                <Progress
                                  value={group.progress}
                                  className="h-1.5 bg-[#F3D9E2]"
                               
                                />
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col items-end gap-3">
                            <Badge variant="outline" className="border-[#8E3A59] text-[#8E3A59]">
                              Próxima reunión: {group.nextMeeting}
                            </Badge>

                            <div className="flex flex-col gap-2">
                              <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                                <MessageSquare className="mr-1 h-4 w-4" />
                                Chat del grupo
                              </Button>
                              <Button
                                variant="outline"
                                className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]"
                                onClick={() => handleLeaveGroup(group.id)}
                              >
                                Abandonar grupo
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="recommended" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2] p-6 text-center">
                <p className="text-gray-500">
                  Basado en tus cursos y actividades, te recomendamos estos grupos de estudio
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t border-[#F3D9E2] bg-[#F3D9E2]/5 px-6 py-4">
          <div className="flex w-full items-center justify-between">
            <h4 className="font-medium">Beneficios de los grupos de estudio</h4>
          </div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
            <li>Aprende y practica con otras estudiantes con intereses similares</li>
            <li>Resuelve dudas y comparte conocimientos en un entorno colaborativo</li>
            <li>Mantén la motivación y constancia en tus estudios</li>
            <li>Amplía tu red de contactos profesionales en el sector de la belleza</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  )
}
