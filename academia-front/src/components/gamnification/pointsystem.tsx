"use client"

import { useState } from "react"
import { Trophy, Star, TrendingUp, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge as UIBadge } from "@/components/ui/badge"

export default function PointsSystem() {
  const [points, setPoints] = useState(1250)
  const [level, setLevel] = useState(4)
  const [nextLevelPoints, setNextLevelPoints] = useState(2000)
  const [recentPoints, setRecentPoints] = useState([
    { activity: "Completar lección: Técnicas de maquillaje", points: 25, date: "Hoy" },
    { activity: "Entregar proyecto: Análisis de colorimetría", points: 100, date: "Ayer" },
    { activity: "Participar en foro: Tendencias 2023", points: 15, date: "Hace 2 días" },
    { activity: "Asistir a clase en vivo", points: 50, date: "Hace 3 días" },
  ])

  const progress = Math.floor((points / nextLevelPoints) * 100)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row">
        <Card className="flex-1 border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#8E3A59]">Nivel y Puntos</CardTitle>
            <CardDescription>Tu progreso actual en la plataforma</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F3D9E2]">
                  <Trophy className="h-7 w-7 text-[#8E3A59]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Nivel actual</p>
                  <p className="text-2xl font-bold text-[#8E3A59]">{level}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Puntos totales</p>
                <p className="text-2xl font-bold text-[#8E3A59]">{points}</p>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progreso al nivel {level + 1}</span>
                <span>
                  {points}/{nextLevelPoints} puntos
                </span>
              </div>
              <Progress value={progress} className="h-2 bg-[#F3D9E2]">
                <div className="h-2 bg-[#8E3A59]" style={{ width: `${progress}%` }} />
              </Progress>
              <p className="text-xs text-gray-500">
                Necesitas {nextLevelPoints - points} puntos más para alcanzar el nivel {level + 1}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <UIBadge className="bg-[#8E3A59]">Estudiante Dedicada</UIBadge>
              <UIBadge className="bg-[#D4AF37]">Participante Activa</UIBadge>
              <UIBadge className="bg-[#5D8CAE]">Colaboradora</UIBadge>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1 border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-[#8E3A59]">Puntos recientes</CardTitle>
            <CardDescription>Actividades que te han otorgado puntos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPoints.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-[#F3D9E2] pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">{item.activity}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#8E3A59]">
                    <Star className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="font-medium">+{item.points}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                <TrendingUp className="h-6 w-6 text-[#8E3A59]" />
              </div>
              <h3 className="font-medium">Racha actual</h3>
              <p className="text-3xl font-bold text-[#8E3A59]">7 días</p>
              <p className="mb-3 text-sm text-gray-500">¡Sigue así para mantener tu racha!</p>
              <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                Ver calendario
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                <Award className="h-6 w-6 text-[#8E3A59]" />
              </div>
              <h3 className="font-medium">Insignias ganadas</h3>
              <p className="text-3xl font-bold text-[#8E3A59]">8 / 24</p>
              <p className="mb-3 text-sm text-gray-500">Has desbloqueado 8 insignias hasta ahora</p>
              <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                Ver insignias
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                <Trophy className="h-6 w-6 text-[#8E3A59]" />
              </div>
              <h3 className="font-medium">Posición en ranking</h3>
              <p className="text-3xl font-bold text-[#8E3A59]">#12</p>
              <p className="mb-3 text-sm text-gray-500">Entre los mejores 15 estudiantes</p>
              <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                Ver clasificación
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F3D9E2]">
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                <Star className="h-6 w-6 text-[#8E3A59]" />
              </div>
              <h3 className="font-medium">Puntos este mes</h3>
              <p className="text-3xl font-bold text-[#8E3A59]">450</p>
              <p className="mb-3 text-sm text-gray-500">+120 puntos vs. mes anterior</p>
              <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                Ver estadísticas
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
