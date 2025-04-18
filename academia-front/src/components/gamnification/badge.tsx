"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BadgeItem {
  id: string
  name: string
  description: string
  image: string
  category: "cursos" | "participación" | "habilidades" | "especial"
  unlocked: boolean
  progress?: number
  total?: number
  date?: string
}

export default function BadgesSystem() {
  const [badges, setBadges] = useState<BadgeItem[]>([
    {
      id: "1",
      name: "Primera Lección",
      description: "Completaste tu primera lección",
      image: "/placeholder.svg?height=80&width=80",
      category: "cursos",
      unlocked: true,
      date: "15/03/2023",
    },
    {
      id: "2",
      name: "Estudiante Dedicada",
      description: "Completaste 10 lecciones",
      image: "/placeholder.svg?height=80&width=80",
      category: "cursos",
      unlocked: true,
      date: "22/03/2023",
    },
    {
      id: "3",
      name: "Experta en Maquillaje",
      description: "Completaste el curso de Maquillaje Profesional",
      image: "/placeholder.svg?height=80&width=80",
      category: "cursos",
      unlocked: true,
      date: "10/04/2023",
    },
    {
      id: "4",
      name: "Racha de 7 días",
      description: "Accediste a la plataforma durante 7 días consecutivos",
      image: "/placeholder.svg?height=80&width=80",
      category: "participación",
      unlocked: true,
      date: "05/04/2023",
    },
    {
      id: "5",
      name: "Colaboradora",
      description: "Participaste en 5 discusiones del foro",
      image: "/placeholder.svg?height=80&width=80",
      category: "participación",
      unlocked: true,
      date: "12/04/2023",
    },
    {
      id: "6",
      name: "Networker",
      description: "Conectaste con 10 estudiantes",
      image: "/placeholder.svg?height=80&width=80",
      category: "participación",
      unlocked: false,
      progress: 7,
      total: 10,
    },
    {
      id: "7",
      name: "Colorista",
      description: "Dominaste las técnicas de colorimetría",
      image: "/placeholder.svg?height=80&width=80",
      category: "habilidades",
      unlocked: true,
      date: "18/04/2023",
    },
    {
      id: "8",
      name: "Estilista Creativa",
      description: "Creaste 3 looks originales en tus proyectos",
      image: "/placeholder.svg?height=80&width=80",
      category: "habilidades",
      unlocked: true,
      date: "25/04/2023",
    },
    {
      id: "9",
      name: "Maestra del Nail Art",
      description: "Dominaste 5 técnicas avanzadas de nail art",
      image: "/placeholder.svg?height=80&width=80",
      category: "habilidades",
      unlocked: false,
      progress: 3,
      total: 5,
    },
    {
      id: "10",
      name: "Embajadora Beauty",
      description: "Invitaste a 3 amigas a unirse a la plataforma",
      image: "/placeholder.svg?height=80&width=80",
      category: "especial",
      unlocked: false,
      progress: 1,
      total: 3,
    },
    {
      id: "11",
      name: "Primera en la Clase",
      description: "Obtuviste la mejor calificación en un curso",
      image: "/placeholder.svg?height=80&width=80",
      category: "especial",
      unlocked: true,
      date: "02/05/2023",
    },
    {
      id: "12",
      name: "Madrugadora",
      description: "Completaste 5 lecciones antes de las 8 AM",
      image: "/placeholder.svg?height=80&width=80",
      category: "especial",
      unlocked: false,
      progress: 3,
      total: 5,
    },
  ])

  const unlockedBadges = badges.filter((badge) => badge.unlocked)
  const lockedBadges = badges.filter((badge) => !badge.unlocked)

  const filterBadgesByCategory = (category: string) => {
    if (category === "todas") return badges
    return badges.filter((badge) => badge.category === category)
  }

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle className="text-xl text-[#8E3A59]">Mis Insignias</CardTitle>
          <CardDescription>
            Has desbloqueado {unlockedBadges.length} de {badges.length} insignias disponibles
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="todas">
            <TabsList className="mb-4 grid w-full grid-cols-5 bg-[#F3D9E2]/30">
              <TabsTrigger value="todas">Todas</TabsTrigger>
              <TabsTrigger value="cursos">Cursos</TabsTrigger>
              <TabsTrigger value="participación">Participación</TabsTrigger>
              <TabsTrigger value="habilidades">Habilidades</TabsTrigger>
              <TabsTrigger value="especial">Especiales</TabsTrigger>
            </TabsList>

            <TabsContent value="todas" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {badges.map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cursos" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filterBadgesByCategory("cursos").map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="participación" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filterBadgesByCategory("participación").map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="habilidades" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filterBadgesByCategory("habilidades").map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="especial" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filterBadgesByCategory("especial").map((badge) => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

function BadgeCard({ badge }: { badge: BadgeItem }) {
  return (
    <Card className={`border-[#F3D9E2] ${!badge.unlocked ? "opacity-60" : ""}`}>
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-3">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full ${
                badge.unlocked ? "bg-[#F3D9E2]" : "bg-gray-200"
              }`}
            >
              <img
                src={badge.image || "/placeholder.svg"}
                alt={badge.name}
                className={`h-16 w-16 rounded-full object-cover ${!badge.unlocked ? "grayscale" : ""}`}
              />
            </div>
            {badge.unlocked && (
              <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#8E3A59] text-white">
                ✓
              </div>
            )}
          </div>
          <h3 className="font-medium">{badge.name}</h3>
          <p className="mb-2 text-sm text-gray-500">{badge.description}</p>
          {badge.unlocked ? (
            <Badge className="bg-[#8E3A59]">Desbloqueada: {badge.date}</Badge>
          ) : (
            <Badge variant="outline" className="border-[#8E3A59] text-[#8E3A59]">
              Progreso: {badge.progress}/{badge.total}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
