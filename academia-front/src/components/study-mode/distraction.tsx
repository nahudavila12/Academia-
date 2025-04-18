"use client"

import { useState } from "react"
import { Shield, ShieldAlert, ShieldCheck, Plus, X, Clock, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface BlockedSite {
  id: string
  url: string
  category: string
}

interface BlockingSession {
  id: string
  startTime: string
  endTime: string
  duration: number
  active: boolean
}

export default function DistractionBlocker() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [newSite, setNewSite] = useState("")
  const [newCategory, setNewCategory] = useState("redes-sociales")
  const [blockingSessions, setBlockingSessions] = useState<BlockingSession[]>([
    {
      id: "1",
      startTime: "10:00",
      endTime: "12:00",
      duration: 120,
      active: false,
    },
    {
      id: "2",
      startTime: "15:00",
      endTime: "17:00",
      duration: 120,
      active: false,
    },
  ])
  const [blockedSites, setBlockedSites] = useState<BlockedSite[]>([
    { id: "1", url: "facebook.com", category: "redes-sociales" },
    { id: "2", url: "instagram.com", category: "redes-sociales" },
    { id: "3", url: "twitter.com", category: "redes-sociales" },
    { id: "4", url: "youtube.com", category: "entretenimiento" },
    { id: "5", url: "netflix.com", category: "entretenimiento" },
    { id: "6", url: "reddit.com", category: "foros" },
  ])
  const [activeSession, setActiveSession] = useState<BlockingSession | null>(null)
  const [sessionTimeLeft, setSessionTimeLeft] = useState<number | null>(null)
  const [isAddSessionOpen, setIsAddSessionOpen] = useState(false)
  const [newSessionStart, setNewSessionStart] = useState("09:00")
  const [newSessionEnd, setNewSessionEnd] = useState("11:00")

  const handleAddSite = () => {
    if (newSite.trim() === "") return

    const newId = (blockedSites.length + 1).toString()
    setBlockedSites([...blockedSites, { id: newId, url: newSite, category: newCategory }])
    setNewSite("")
  }

  const handleRemoveSite = (id: string) => {
    setBlockedSites(blockedSites.filter((site) => site.id !== id))
  }

  const handleAddSession = () => {
    // Calculate duration in minutes
    const [startHours, startMinutes] = newSessionStart.split(":").map(Number)
    const [endHours, endMinutes] = newSessionEnd.split(":").map(Number)

    const startTotalMinutes = startHours * 60 + startMinutes
    const endTotalMinutes = endHours * 60 + endMinutes

    let duration = endTotalMinutes - startTotalMinutes
    if (duration < 0) {
      duration += 24 * 60 // Add a day if end time is on the next day
    }

    const newId = (blockingSessions.length + 1).toString()
    setBlockingSessions([
      ...blockingSessions,
      {
        id: newId,
        startTime: newSessionStart,
        endTime: newSessionEnd,
        duration,
        active: false,
      },
    ])

    setIsAddSessionOpen(false)
  }

  const handleRemoveSession = (id: string) => {
    setBlockingSessions(blockingSessions.filter((session) => session.id !== id))
  }

  const handleStartSession = (session: BlockingSession) => {
    // In a real app, this would activate the actual blocking mechanism
    setActiveSession({ ...session, active: true })
    setSessionTimeLeft(session.duration)

    // Update the sessions list to mark this one as active
    setBlockingSessions(blockingSessions.map((s) => (s.id === session.id ? { ...s, active: true } : s)))

    setIsEnabled(true)
  }

  const handleStopSession = () => {
    if (!activeSession) return

    // Update the sessions list to mark this one as inactive
    setBlockingSessions(blockingSessions.map((s) => (s.id === activeSession.id ? { ...s, active: false } : s)))

    setActiveSession(null)
    setSessionTimeLeft(null)
    setIsEnabled(false)
  }

  const formatTimeLeft = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return `${hours}h ${mins}m`
  }

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className={`h-6 w-6 ${isEnabled ? "text-[#8E3A59]" : "text-gray-400"}`} />
              <CardTitle className="text-xl text-[#8E3A59]">Bloqueador de Distracciones</CardTitle>
            </div>
            <Switch
              checked={isEnabled}
              onCheckedChange={setIsEnabled}
              className="data-[state=checked]:bg-[#8E3A59]"
              disabled={!!activeSession}
            />
          </div>
          <CardDescription>Bloquea sitios web distractores durante tus sesiones de estudio</CardDescription>
        </CardHeader>
        <CardContent>
          {activeSession ? (
            <Card className="mb-6 border-[#8E3A59]/20 bg-[#F3D9E2]/10">
              <CardContent className="p-4">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <ShieldCheck className="h-12 w-12 text-[#8E3A59]" />
                  <div>
                    <h3 className="text-lg font-medium text-[#8E3A59]">Modo de concentración activo</h3>
                    <p className="text-sm text-gray-500">
                      Bloqueando distracciones desde {activeSession.startTime} hasta {activeSession.endTime}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#8E3A59]" />
                    <span className="text-lg font-medium text-[#8E3A59]">
                      {sessionTimeLeft !== null ? formatTimeLeft(sessionTimeLeft) : ""}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    onClick={handleStopSession}
                  >
                    Finalizar sesión
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="mb-6 flex flex-col items-center space-y-4 rounded-lg border border-dashed border-[#8E3A59]/30 bg-[#F3D9E2]/5 p-6 text-center">
              <ShieldAlert className="h-12 w-12 text-gray-400" />
              <div>
                <h3 className="text-lg font-medium text-gray-700">Bloqueador inactivo</h3>
                <p className="text-sm text-gray-500">
                  Activa el bloqueador o inicia una sesión programada para comenzar a bloquear distracciones
                </p>
              </div>
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049]" onClick={() => setIsEnabled(true)}>
                Activar ahora
              </Button>
            </div>
          )}

          <Tabs defaultValue="sites">
            <TabsList className="mb-4 grid w-full grid-cols-2 bg-[#F3D9E2]/30">
              <TabsTrigger value="sites">Sitios bloqueados</TabsTrigger>
              <TabsTrigger value="sessions">Sesiones programadas</TabsTrigger>
            </TabsList>

            <TabsContent value="sites" className="mt-0 space-y-4">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Añadir sitio web (ej: facebook.com)"
                  value={newSite}
                  onChange={(e) => setNewSite(e.target.value)}
                  className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="rounded-md border border-[#F3D9E2] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8E3A59]"
                >
                  <option value="redes-sociales">Redes Sociales</option>
                  <option value="entretenimiento">Entretenimiento</option>
                  <option value="noticias">Noticias</option>
                  <option value="compras">Compras</option>
                  <option value="foros">Foros</option>
                  <option value="otros">Otros</option>
                </select>
                <Button onClick={handleAddSite} className="bg-[#8E3A59] hover:bg-[#7A3049]">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <div className="rounded-lg border border-[#F3D9E2]">
                <div className="p-4">
                  <h3 className="mb-2 font-medium">Sitios bloqueados</h3>
                  {blockedSites.length === 0 ? (
                    <p className="text-sm text-gray-500">No hay sitios bloqueados</p>
                  ) : (
                    <div className="space-y-2">
                      {blockedSites.map((site) => (
                        <div
                          key={site.id}
                          className="flex items-center justify-between rounded-md border border-[#F3D9E2] bg-white p-2"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{site.url}</span>
                            <Badge variant="outline" className="border-[#8E3A59] text-xs text-[#8E3A59]">
                              {site.category}
                            </Badge>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveSite(site.id)}
                            className="h-8 w-8 p-0 text-gray-500 hover:bg-[#F3D9E2]/20 hover:text-[#8E3A59]"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sessions" className="mt-0 space-y-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Sesiones programadas</h3>
                <Dialog open={isAddSessionOpen} onOpenChange={setIsAddSessionOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                      <Plus className="mr-1 h-4 w-4" />
                      Nueva sesión
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Añadir sesión programada</DialogTitle>
                      <DialogDescription>
                        Programa un horario para bloquear automáticamente las distracciones
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Hora de inicio</label>
                          <Input
                            type="time"
                            value={newSessionStart}
                            onChange={(e) => setNewSessionStart(e.target.value)}
                            className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Hora de fin</label>
                          <Input
                            type="time"
                            value={newSessionEnd}
                            onChange={(e) => setNewSessionEnd(e.target.value)}
                            className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                          />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsAddSessionOpen(false)}>
                        Cancelar
                      </Button>
                      <Button onClick={handleAddSession} className="bg-[#8E3A59] hover:bg-[#7A3049]">
                        Guardar
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              {blockingSessions.length === 0 ? (
                <div className="rounded-lg border border-dashed border-[#F3D9E2] p-6 text-center">
                  <p className="text-sm text-gray-500">No hay sesiones programadas</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {blockingSessions.map((session) => (
                    <div
                      key={session.id}
                      className={`rounded-lg border ${
                        session.active ? "border-[#8E3A59] bg-[#F3D9E2]/10" : "border-[#F3D9E2]"
                      } p-4`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <Clock className={`h-5 w-5 ${session.active ? "text-[#8E3A59]" : "text-gray-500"}`} />
                            <span className="font-medium">
                              {session.startTime} - {session.endTime}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">Duración: {formatTimeLeft(session.duration)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {session.active ? (
                            <Badge className="bg-[#8E3A59]">Activa</Badge>
                          ) : (
                            <Button
                              size="sm"
                              onClick={() => handleStartSession(session)}
                              className="bg-[#8E3A59] hover:bg-[#7A3049]"
                            >
                              Iniciar
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveSession(session.id)}
                            className="h-8 w-8 p-0 text-gray-500 hover:bg-[#F3D9E2]/20 hover:text-[#8E3A59]"
                            disabled={session.active}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="rounded-lg border border-[#F3D9E2] bg-[#F3D9E2]/10 p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <div>
                    <h4 className="font-medium">Nota importante</h4>
                    <p className="text-sm text-gray-600">
                      Las sesiones programadas se activarán automáticamente a la hora indicada solo cuando el bloqueador
                      esté habilitado.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t border-[#F3D9E2] bg-[#F3D9E2]/5 px-6 py-4">
          <h4 className="mb-1 font-medium">Consejos para mantenerte enfocada</h4>
          <ul className="ml-5 list-disc text-sm text-gray-600">
            <li>Programa sesiones de estudio de 2-3 horas para maximizar la concentración</li>
            <li>Toma descansos cortos de 5-10 minutos entre sesiones</li>
            <li>Combina el bloqueador con el temporizador Pomodoro para mejores resultados</li>
            <li>Añade todos los sitios que sueles visitar cuando te distraes</li>
          </ul>
        </CardFooter>
      </Card>
    </div>
  )
}
