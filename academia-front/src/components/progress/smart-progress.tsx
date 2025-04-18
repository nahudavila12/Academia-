"use client"

import { useState } from "react"
import {
  BarChart,
  Calendar,
  Brain,
  Award,
  Clock,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  BarChart2,
  Video,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface CourseProgress {
  id: string
  name: string
  progress: number
  totalLessons: number
  completedLessons: number
  lastActivity: string
  estimatedCompletion: string
  category: string
}

interface StudyHabit {
  day: string
  hours: number
}

interface SkillProgress {
  skill: string
  level: number
  progress: number
}

export default function SmartProgressAssistant() {
  const [courses, setCourses] = useState<CourseProgress[]>([
    {
      id: "1",
      name: "Maquillaje Profesional",
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      lastActivity: "Hace 2 días",
      estimatedCompletion: "15 días",
      category: "maquillaje",
    },
    {
      id: "2",
      name: "Colorimetría Avanzada",
      progress: 40,
      totalLessons: 18,
      completedLessons: 7,
      lastActivity: "Hace 5 días",
      estimatedCompletion: "28 días",
      category: "colorimetría",
    },
    {
      id: "3",
      name: "Técnicas de Nail Art",
      progress: 85,
      totalLessons: 20,
      completedLessons: 17,
      lastActivity: "Ayer",
      estimatedCompletion: "7 días",
      category: "nail-art",
    },
    {
      id: "4",
      name: "Skincare Profesional",
      progress: 25,
      totalLessons: 16,
      completedLessons: 4,
      lastActivity: "Hace 1 semana",
      estimatedCompletion: "35 días",
      category: "skincare",
    },
  ])

  const [studyHabits, setStudyHabits] = useState<StudyHabit[]>([
    { day: "Lun", hours: 1.5 },
    { day: "Mar", hours: 2.0 },
    { day: "Mié", hours: 0.5 },
    { day: "Jue", hours: 1.0 },
    { day: "Vie", hours: 2.5 },
    { day: "Sáb", hours: 3.0 },
    { day: "Dom", hours: 1.0 },
  ])

  const [skills, setSkills] = useState<SkillProgress[]>([
    { skill: "Maquillaje de ojos", level: 4, progress: 80 },
    { skill: "Colorimetría", level: 3, progress: 60 },
    { skill: "Nail Art 3D", level: 4, progress: 85 },
    { skill: "Técnicas de contorno", level: 3, progress: 65 },
    { skill: "Skincare", level: 2, progress: 40 },
  ])

  const [recommendations, setRecommendations] = useState([
    {
      id: "1",
      title: "Completa el módulo de 'Técnicas de sombreado'",
      description: "Te ayudará a mejorar tus habilidades de maquillaje de ojos",
      type: "lesson",
      priority: "alta",
    },
    {
      id: "2",
      title: "Revisa los conceptos de colorimetría",
      description: "Notamos que tuviste dificultades en el último quiz",
      type: "review",
      priority: "media",
    },
    {
      id: "3",
      title: "Practica técnicas de nail art 3D",
      description: "Estás cerca de dominar esta habilidad",
      type: "practice",
      priority: "baja",
    },
  ])

  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      id: "1",
      title: "Clase en vivo: Tendencias de maquillaje 2023",
      date: "Mañana, 18:00",
      type: "live",
    },
    {
      id: "2",
      title: "Entrega de proyecto: Análisis de colorimetría",
      date: "En 3 días",
      type: "deadline",
    },
    {
      id: "3",
      title: "Webinar: Emprendimiento en belleza",
      date: "En 5 días, 19:30",
      type: "webinar",
    },
  ])

  const totalProgress = courses.reduce((acc, course) => acc + course.progress, 0) / courses.length
  const totalHoursThisWeek = studyHabits.reduce((acc, day) => acc + day.hours, 0)
  const averageHoursPerDay = totalHoursThisWeek / 7

  const getSkillLevelText = (level: number) => {
    switch (level) {
      case 1:
        return "Principiante"
      case 2:
        return "Básico"
      case 3:
        return "Intermedio"
      case 4:
        return "Avanzado"
      case 5:
        return "Experto"
      default:
        return "Principiante"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "alta":
        return "bg-red-500"
      case "media":
        return "bg-amber-500"
      case "baja":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "live":
        return <Video className="h-5 w-5 text-[#8E3A59]" />
      case "deadline":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "webinar":
        return <Users className="h-5 w-5 text-blue-500" />
      default:
        return <Calendar className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-[#8E3A59]" />
            <CardTitle className="text-xl text-[#8E3A59]">Asistente de Progreso Inteligente</CardTitle>
          </div>
          <CardDescription>
            Análisis personalizado de tu progreso y recomendaciones para mejorar tu aprendizaje
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <Card className="border-[#F3D9E2]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                    <BarChart className="h-6 w-6 text-[#8E3A59]" />
                  </div>
                  <h3 className="font-medium">Progreso general</h3>
                  <div className="mb-2 mt-1 text-3xl font-bold text-[#8E3A59]">{Math.round(totalProgress)}%</div>
                  <Progress
                    value={totalProgress}
                    className="mb-2 h-2 w-full bg-[#F3D9E2]"
                    style={{ backgroundColor: '#8E3A59' }}
                  />
                  <p className="text-sm text-gray-500">
                    {totalProgress < 25
                      ? "Estás comenzando tu viaje de aprendizaje"
                      : totalProgress < 50
                        ? "Vas por buen camino, sigue así"
                        : totalProgress < 75
                          ? "¡Excelente progreso! Ya dominas gran parte del contenido"
                          : "¡Casi has completado todos tus cursos!"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                    <Clock className="h-6 w-6 text-[#8E3A59]" />
                  </div>
                  <h3 className="font-medium">Tiempo de estudio</h3>
                  <div className="mb-2 mt-1 text-3xl font-bold text-[#8E3A59]">{totalHoursThisWeek.toFixed(1)}h</div>
                  <p className="mb-2 text-sm text-gray-500">Esta semana</p>
                  <div className="flex w-full justify-between text-xs">
                    {studyHabits.map((day, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="mb-1 w-5 bg-[#F3D9E2]" style={{ height: `${(day.hours / 3) * 50}px` }}></div>
                        <span>{day.day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                    <Award className="h-6 w-6 text-[#8E3A59]" />
                  </div>
                  <h3 className="font-medium">Habilidades destacadas</h3>
                  <div className="mb-2 mt-1 w-full space-y-3">
                    {skills.slice(0, 3).map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>{skill.skill}</span>
                          <span className="text-xs text-gray-500">
                            Nivel {skill.level} - {getSkillLevelText(skill.level)}
                          </span>
                        </div>
                        <Progress
                          value={skill.progress}
                          className="h-1.5 bg-[#F3D9E2]"
                        
                        />
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="mt-2 p-0 text-[#8E3A59]">
                    Ver todas las habilidades
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="courses">
            <TabsList className="mb-4 grid w-full grid-cols-4 bg-[#F3D9E2]/30">
              <TabsTrigger value="courses">Mis cursos</TabsTrigger>
              <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
              <TabsTrigger value="calendar">Calendario</TabsTrigger>
              <TabsTrigger value="insights">Estadísticas</TabsTrigger>
            </TabsList>

            <TabsContent value="courses" className="mt-0">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">Progreso de cursos</h3>
                <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
                  Ver todos los cursos
                </Button>
              </div>

              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="border-[#F3D9E2]">
                    <CardContent className="p-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium">{course.name}</h4>
                            <Badge className="bg-[#8E3A59]">{course.category}</Badge>
                          </div>
                          <p className="text-sm text-gray-500">
                            {course.completedLessons} de {course.totalLessons} lecciones completadas
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="text-sm font-medium">{course.progress}%</div>
                            <p className="text-xs text-gray-500">Última actividad: {course.lastActivity}</p>
                          </div>
                          <div className="relative h-10 w-10">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-medium">{course.progress}%</span>
                            </div>
                            <svg className="h-10 w-10" viewBox="0 0 36 36">
                              <circle cx="18" cy="18" r="16" fill="none" stroke="#F3D9E2" strokeWidth="2" />
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                stroke="#8E3A59"
                                strokeWidth="2"
                                strokeDasharray={`${course.progress} ${100 - course.progress}`}
                                strokeDashoffset="25"
                                transform="rotate(-90 18 18)"
                              />
                            </svg>
                          </div>
                          <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                            Continuar
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Progress
                          value={course.progress}
                          className="h-2 bg-[#F3D9E2]"
                       
                        />
                        <div className="mt-1 flex justify-between text-xs text-gray-500">
                          <span>Tiempo estimado para completar: {course.estimatedCompletion}</span>
                          <span>
                            {course.completedLessons}/{course.totalLessons} lecciones
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="mt-0">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">Recomendaciones personalizadas</h3>
                <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
                  Actualizar recomendaciones
                </Button>
              </div>

              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <Card key={rec.id} className="border-[#F3D9E2]">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D9E2]">
                          {rec.type === "lesson" ? (
                            <BookOpen className="h-5 w-5 text-[#8E3A59]" />
                          ) : rec.type === "review" ? (
                            <BarChart2 className="h-5 w-5 text-[#8E3A59]" />
                          ) : (
                            <CheckCircle2 className="h-5 w-5 text-[#8E3A59]" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{rec.title}</h4>
                            <Badge className={`${getPriorityColor(rec.priority)}`}>Prioridad {rec.priority}</Badge>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{rec.description}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                          Comenzar ahora
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="mt-0">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">Próximos eventos</h3>
                <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
                  Ver calendario completo
                </Button>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="border-[#F3D9E2]">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D9E2]">
                          {getEventIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">{event.title}</h4>
                            <Badge variant="outline" className="border-[#8E3A59] text-[#8E3A59]">
                              {event.date}
                            </Badge>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {event.type === "live"
                              ? "Clase en vivo con instructor"
                              : event.type === "deadline"
                                ? "Fecha límite de entrega"
                                : "Webinar con expertos del sector"}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        {event.type === "live" || event.type === "webinar" ? (
                          <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">Agendar recordatorio</Button>
                        ) : (
                          <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
                            Ver detalles
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="insights" className="mt-0">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-medium">Estadísticas de aprendizaje</h3>
                <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
                  Ver informe completo
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-[#F3D9E2]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#8E3A59]">Tiempo de estudio semanal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold text-[#8E3A59]">{totalHoursThisWeek.toFixed(1)}h</p>
                          <p className="text-xs text-gray-500">Total esta semana</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#8E3A59]">{averageHoursPerDay.toFixed(1)}h</p>
                          <p className="text-xs text-gray-500">Promedio diario</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-[#8E3A59]">
                            {Math.max(...studyHabits.map((day) => day.hours))}h
                          </p>
                          <p className="text-xs text-gray-500">Día más productivo</p>
                        </div>
                      </div>

                      <div className="h-40 w-full">
                        <div className="flex h-32 items-end justify-between">
                          {studyHabits.map((day, index) => (
                            <div key={index} className="flex w-8 flex-col items-center">
                              <div
                                className="w-6 rounded-t bg-[#F3D9E2]"
                                style={{ height: `${(day.hours / 3) * 100}%` }}
                              ></div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-gray-500">
                          {studyHabits.map((day, index) => (
                            <div key={index} className="w-8 text-center">
                              {day.day}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#F3D9E2]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-[#8E3A59]">Distribución de habilidades</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span>{skill.skill}</span>
                            <span className="text-xs text-gray-500">
                              Nivel {skill.level} - {getSkillLevelText(skill.level)}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Progress
                              value={skill.progress}
                              className="h-2 flex-1 bg-[#F3D9E2]"
                            
                            />
                            <span className="text-xs font-medium">{skill.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-[#F3D9E2] bg-[#F3D9E2]/5 px-6 py-4">
          <p className="text-sm text-gray-500">Última actualización: Hoy, 10:30 AM</p>
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">Ver plan de aprendizaje personalizado</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
