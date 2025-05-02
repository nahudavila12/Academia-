"use client"

import { useState } from "react"
import { Trophy, Medal, ArrowUp, ArrowDown, Minus, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface LeaderboardUser {
  id: string
  name: string
  avatar: string
  points: number
  level: number
  rank: number
  change: number
  badges: number
  course: string
}

export default function Leaderboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([
    {
      id: "1",
      name: "María López",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 3250,
      level: 8,
      rank: 1,
      change: 0,
      badges: 15,
      course: "Maquillaje Profesional",
    },
    {
      id: "2",
      name: "Ana Rodríguez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 3120,
      level: 7,
      rank: 2,
      change: 1,
      badges: 14,
      course: "Estilismo y Asesoría",
    },
    {
      id: "3",
      name: "Laura Gómez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2980,
      level: 7,
      rank: 3,
      change: -1,
      badges: 13,
      course: "Nail Art Profesional",
    },
    {
      id: "4",
      name: "Carmen Martínez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2850,
      level: 7,
      rank: 4,
      change: 0,
      badges: 12,
      course: "Skincare Avanzado",
    },
    {
      id: "5",
      name: "Sofía Martínez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2720,
      level: 6,
      rank: 5,
      change: 2,
      badges: 11,
      course: "Maquillaje Profesional",
    },
    {
      id: "6",
      name: "Elena Sánchez",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2650,
      level: 6,
      rank: 6,
      change: -1,
      badges: 10,
      course: "Estilismo y Asesoría",
    },
    {
      id: "7",
      name: "Patricia Díaz",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2580,
      level: 6,
      rank: 7,
      change: 1,
      badges: 10,
      course: "Nail Art Profesional",
    },
    {
      id: "8",
      name: "Lucía Torres",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2510,
      level: 6,
      rank: 8,
      change: -2,
      badges: 9,
      course: "Skincare Avanzado",
    },
    {
      id: "9",
      name: "Marta Ruiz",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2450,
      level: 5,
      rank: 9,
      change: 0,
      badges: 9,
      course: "Maquillaje Profesional",
    },
    {
      id: "10",
      name: "Claudia Fernández",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2380,
      level: 5,
      rank: 10,
      change: 3,
      badges: 8,
      course: "Estilismo y Asesoría",
    },
    {
      id: "11",
      name: "Natalia Vega",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2320,
      level: 5,
      rank: 11,
      change: -1,
      badges: 8,
      course: "Nail Art Profesional",
    },
    {
      id: "12",
      name: "Beatriz Moreno",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 2250,
      level: 5,
      rank: 12,
      change: 0,
      badges: 7,
      course: "Skincare Avanzado",
    },
  ])

  const filteredUsers = leaderboardData.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const currentUser = leaderboardData.find((user) => user.name === "Sofía Martínez")

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-[#D4AF37]" />
    if (rank === 2) return <Medal className="h-5 w-5 text-[#C0C0C0]" />
    if (rank === 3) return <Medal className="h-5 w-5 text-[#CD7F32]" />
    return <span className="flex h-5 w-5 items-center justify-center font-medium">{rank}</span>
  }

  const getChangeIcon = (change: number) => {
    if (change > 0) return <ArrowUp className="h-4 w-4 text-green-500" />
    if (change < 0) return <ArrowDown className="h-4 w-4 text-red-500" />
    return <Minus className="h-4 w-4 text-gray-400" />
  }

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle className="text-xl text-[#8E3A59]">Tabla de Clasificación</CardTitle>
          <CardDescription>Compite con otras estudiantes y alcanza la cima</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar estudiante..."
                className="w-full rounded-full border-[#F3D9E2] bg-white pl-8 focus-visible:ring-[#8E3A59]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                Esta semana
              </Button>
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">Este mes</Button>
              <Button variant="outline" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                Todos los tiempos
              </Button>
            </div>
          </div>

          <Tabs defaultValue="global">
            <TabsList className="mb-4 grid w-full grid-cols-3 bg-[#F3D9E2]/30">
              <TabsTrigger value="global">Global</TabsTrigger>
              <TabsTrigger value="course">Por curso</TabsTrigger>
              <TabsTrigger value="friends">Mis amigas</TabsTrigger>
            </TabsList>

            <TabsContent value="global" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2]">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#F3D9E2]/30">
                        <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Posición
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Estudiante
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Nivel
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Puntos
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Insignias
                        </th>
                        <th className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-gray-700">
                          Curso
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F3D9E2]">
                      {filteredUsers.map((user) => (
                        <tr
                          key={user.id}
                          className={`${
                            user.name === "Sofía Martínez" ? "bg-[#F3D9E2]/20" : "bg-white"
                          } hover:bg-[#F3D9E2]/10`}
                        >
                          <td className="whitespace-nowrap px-4 py-3 text-sm">
                            <div className="flex items-center gap-1">
                              {getRankIcon(user.rank)}
                              <div className="flex items-center gap-0.5 text-xs text-gray-500">
                                {getChangeIcon(user.change)}
                                {user.change !== 0 && <span>{Math.abs(user.change)}</span>}
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm">
                            <Badge className="bg-[#8E3A59]">Nivel {user.level}</Badge>
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm font-medium">{user.points}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm">{user.badges}</td>
                          <td className="whitespace-nowrap px-4 py-3 text-sm">{user.course}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="course" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2] p-6 text-center">
                <p className="text-gray-500">Selecciona un curso para ver su clasificación específica</p>
              </div>
            </TabsContent>

            <TabsContent value="friends" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2] p-6 text-center">
                <p className="text-gray-500">Conecta con otras estudiantes para ver su clasificación</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {currentUser && (
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#8E3A59]">Tu posición actual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{currentUser.name}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Badge className="bg-[#8E3A59]">Nivel {currentUser.level}</Badge>
                    <span>{currentUser.points} puntos</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-[#8E3A59]">#{currentUser.rank}</span>
                  <div className="flex items-center gap-0.5 text-sm">
                    {getChangeIcon(currentUser.change)}
                    {currentUser.change !== 0 && <span>{Math.abs(currentUser.change)}</span>}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {currentUser.rank === 1
                    ? "¡Felicidades! Estás en la cima"
                    : `A ${leaderboardData[currentUser.rank - 2].points - currentUser.points} puntos del puesto #${
                        currentUser.rank - 1
                      }`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
