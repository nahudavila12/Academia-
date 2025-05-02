import { CalendarIcon, ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  // En un componente real, esto sería un estado
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Calendario</h1>
          <p className="text-gray-500">Gestiona tus clases, eventos y entregas</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
              <SelectValue placeholder="Vista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Día</SelectItem>
              <SelectItem value="week">Semana</SelectItem>
              <SelectItem value="month">Mes</SelectItem>
              <SelectItem value="agenda">Agenda</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            <Plus className="mr-2 h-4 w-4" />
            Añadir evento
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Calendario principal */}
        <Card className="border-[#F3D9E2]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Mes anterior</span>
              </Button>
              <h2 className="text-xl font-bold text-[#8E3A59]">
                {new Date(currentYear, currentMonth).toLocaleString("es", { month: "long", year: "numeric" })}
              </h2>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                <ChevronRight className="h-5 w-5" />
                <span className="sr-only">Mes siguiente</span>
              </Button>
            </div>
            <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]/50">
              <CalendarIcon className="mr-2 h-4 w-4" />
              Hoy
            </Button>
          </CardHeader>
          <CardContent>
            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-1 text-center">
              {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => (
                <div key={day} className="py-2 text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Días del mes */}
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays(currentYear, currentMonth).map((day, index) => (
                <div
                  key={index}
                  className={`relative min-h-[100px] rounded-md border border-[#F3D9E2] p-1 ${
                    day.isCurrentMonth ? "bg-white" : "bg-gray-50"
                  } ${day.isToday ? "ring-2 ring-[#8E3A59]/20" : ""}`}
                >
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-sm ${
                      day.isToday
                        ? "bg-[#8E3A59] font-bold text-white"
                        : day.isCurrentMonth
                          ? "font-medium text-gray-700"
                          : "text-gray-400"
                    }`}
                  >
                    {day.date}
                  </div>
                  <div className="mt-1 space-y-1">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`truncate rounded px-1 py-0.5 text-xs text-white ${
                          event.type === "class"
                            ? "bg-[#8E3A59]"
                            : event.type === "assignment"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }`}
                      >
                        {event.title}
                      </div>
                    ))}
                    {day.events.length > 2 && (
                      <div className="text-center text-xs text-gray-500">+{day.events.length - 2} más</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Eventos próximos */}
        <div className="space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle className="text-lg text-[#8E3A59]">Próximos eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="rounded-lg border border-[#F3D9E2] p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <Badge
                        className={
                          event.type === "class"
                            ? "bg-[#8E3A59]"
                            : event.type === "assignment"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                        }
                      >
                        {event.typeLabel}
                      </Badge>
                      <span className="text-xs font-medium text-gray-500">{event.date}</span>
                    </div>
                    <h3 className="font-medium">{event.title}</h3>
                    <div className="mt-2 space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-gray-500" />
                        <span>{event.time}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-gray-500" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5 text-gray-500" />
                          <span>{event.participants}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle className="text-lg text-[#8E3A59]">Recordatorios</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {reminders.map((reminder, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg border border-[#F3D9E2] p-3">
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                        reminder.priority === "high"
                          ? "bg-red-100 text-red-600"
                          : reminder.priority === "medium"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-green-100 text-green-600"
                      }`}
                    >
                      {reminder.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{reminder.title}</h4>
                      <p className="text-xs text-gray-500">{reminder.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Función para generar los días del calendario
interface CalendarDay {
  date: number
  isCurrentMonth: boolean
  isToday: boolean
  events: Event[]
}

interface Event {
  date: Date
  title: string
  type: string
}

function generateCalendarDays(year: number, month: number): CalendarDay[] {
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()

  // Ajustar para que la semana comience en lunes (0 = lunes, 6 = domingo)
  const firstDayOfWeek = (firstDay.getDay() + 6) % 7

  const today = new Date()
  const isToday = (date: Date): boolean =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()

  const days: CalendarDay[] = []

  // Días del mes anterior
  const prevMonth = new Date(year, month, 0)
  const daysInPrevMonth = prevMonth.getDate()

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      isCurrentMonth: false,
      isToday: false,
      events: [],
    })
  }

  // Días del mes actual
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i)
    days.push({
      date: i,
      isCurrentMonth: true,
      isToday: isToday(date),
      events: getEventsForDate(date),
    })
  }

  // Días del mes siguiente
  const remainingDays = 42 - days.length // 6 semanas * 7 días = 42
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: i,
      isCurrentMonth: false,
      isToday: false,
      events: [],
    })
  }

  return days
}

// Función para obtener eventos para una fecha específica
interface Event {
  date: Date
  title: string
  type: string
}

function getEventsForDate(date: Date): Event[] {
  // Simulación de eventos
  const events: Event[] = [
    {
      date: new Date(date.getFullYear(), date.getMonth(), 15),
      title: "Clase de maquillaje",
      type: "class",
    },
    {
      date: new Date(date.getFullYear(), date.getMonth(), 18),
      title: "Entrega proyecto",
      type: "assignment",
    },
    {
      date: new Date(date.getFullYear(), date.getMonth(), 20),
      title: "Taller práctico",
      type: "workshop",
    },
    {
      date: new Date(date.getFullYear(), date.getMonth(), 22),
      title: "Examen teórico",
      type: "exam",
    },
    {
      date: new Date(date.getFullYear(), date.getMonth(), 25),
      title: "Masterclass",
      type: "class",
    },
    {
      date: new Date(date.getFullYear(), date.getMonth(), 28),
      title: "Reunión de grupo",
      type: "meeting",
    },
  ]

  return events.filter(
    (event) =>
      event.date.getDate() === date.getDate() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getFullYear() === date.getFullYear(),
  )
}

const upcomingEvents = [
  {
    title: "Clase en vivo: Técnicas de maquillaje para eventos",
    type: "class",
    typeLabel: "Clase",
    date: "Hoy",
    time: "18:00 - 20:00",
    location: "Aula Virtual 3",
    participants: "45 estudiantes",
  },
  {
    title: "Entrega de proyecto: Análisis de colorimetría",
    type: "assignment",
    typeLabel: "Entrega",
    date: "Mañana",
    time: "23:59",
    location: null,
    participants: null,
  },
  {
    title: "Evaluación: Técnicas de nail art",
    type: "exam",
    typeLabel: "Examen",
    date: "Viernes, 15 Mayo",
    time: "15:00 - 16:30",
    location: "Aula Virtual 1",
    participants: "28 estudiantes",
  },
  {
    title: "Taller práctico: Automaquillaje natural",
    type: "workshop",
    typeLabel: "Taller",
    date: "Sábado, 16 Mayo",
    time: "10:00 - 13:00",
    location: "Aula Virtual 2",
    participants: "32 estudiantes",
  },
]

const reminders = [
  {
    title: "Preparar materiales para la clase de maquillaje",
    date: "Hoy, 16:00",
    priority: "high",
    icon: <CalendarIcon className="h-5 w-5" />,
  },
  {
    title: "Revisar feedback del último proyecto",
    date: "Mañana, 10:00",
    priority: "medium",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Confirmar asistencia al taller del sábado",
    date: "Jueves, 12:00",
    priority: "low",
    icon: <Users className="h-5 w-5" />,
  },
]
