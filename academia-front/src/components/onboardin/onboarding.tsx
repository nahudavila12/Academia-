"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

interface TourStep {
  target: string
  title: string
  content: string
  position: "top" | "right" | "bottom" | "left"
}

export default function GuidedTour() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [steps, setSteps] = useState<TourStep[]>([])
  const [completedTour, setCompletedTour] = useState(false)

  useEffect(() => {
    // Verificar si el usuario ya ha visto el tour
    const hasSeenTour = localStorage.getItem("hasCompletedTour")

    if (!hasSeenTour) {
      // Esperar a que el DOM esté completamente cargado
      setTimeout(() => {
        // Definir los pasos del tour según la página actual
        const currentPath = window.location.pathname

        if (currentPath.includes("/dashboard/student")) {
          setSteps(studentDashboardSteps)
        } else if (currentPath.includes("/dashboard/instructor")) {
          setSteps(instructorDashboardSteps)
        } else if (currentPath.includes("/dashboard/admin")) {
          setSteps(adminDashboardSteps)
        } else if (currentPath === "/") {
          setSteps(homepageSteps)
        }

        // Mostrar el tour si hay pasos definidos
        if (steps.length > 0) {
          setIsVisible(true)
        }
      }, 1000)
    }
  }, [])

  // Actualizar cuando cambian los pasos
  useEffect(() => {
    if (steps.length > 0) {
      setIsVisible(true)
    }
  }, [steps])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTour()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const skipTour = () => {
    setIsVisible(false)
    localStorage.setItem("hasCompletedTour", "true")
  }

  const completeTour = () => {
    setIsVisible(false)
    setCompletedTour(true)
    localStorage.setItem("hasCompletedTour", "true")

    // Mostrar mensaje de felicitación
    setTimeout(() => {
      setCompletedTour(false)
    }, 3000)
  }

  const getTargetPosition = (targetSelector: string) => {
    const targetElement = document.querySelector(targetSelector)
    if (!targetElement) return { top: 0, left: 0, width: 0, height: 0 }

    const rect = targetElement.getBoundingClientRect()
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height,
    }
  }

  const calculateTooltipPosition = (targetSelector: string, position: string) => {
    const targetPos = getTargetPosition(targetSelector)
    const tooltipWidth = 300
    const tooltipHeight = 150
    const margin = 15

    switch (position) {
      case "top":
        return {
          top: targetPos.top - tooltipHeight - margin,
          left: targetPos.left + targetPos.width / 2 - tooltipWidth / 2,
        }
      case "right":
        return {
          top: targetPos.top + targetPos.height / 2 - tooltipHeight / 2,
          left: targetPos.left + targetPos.width + margin,
        }
      case "bottom":
        return {
          top: targetPos.top + targetPos.height + margin,
          left: targetPos.left + targetPos.width / 2 - tooltipWidth / 2,
        }
      case "left":
        return {
          top: targetPos.top + targetPos.height / 2 - tooltipHeight / 2,
          left: targetPos.left - tooltipWidth - margin,
        }
      default:
        return {
          top: targetPos.top + targetPos.height + margin,
          left: targetPos.left,
        }
    }
  }

  if (!isVisible && !completedTour) return null

  const currentTarget = steps[currentStep]?.target
  const tooltipPosition = currentTarget
    ? calculateTooltipPosition(currentTarget, steps[currentStep]?.position)
    : { top: 0, left: 0 }

  return (
    <>
      <AnimatePresence>
        {isVisible && steps.length > 0 && (
          <>
            {/* Overlay semi-transparente */}
            <div className="fixed inset-0 z-50 bg-black/50" onClick={skipTour} />

            {/* Highlight del elemento objetivo */}
            <div
              className="absolute z-50 rounded-lg ring-4 ring-[#8E3A59] ring-offset-4"
              style={{
                top: getTargetPosition(currentTarget).top,
                left: getTargetPosition(currentTarget).left,
                width: getTargetPosition(currentTarget).width,
                height: getTargetPosition(currentTarget).height,
                pointerEvents: "none",
              }}
            />

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="fixed z-50 w-[300px] rounded-lg bg-white p-4 shadow-lg"
              style={{
                top: tooltipPosition.top,
                left: tooltipPosition.left,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#8E3A59]">{steps[currentStep]?.title}</h3>
                <Button variant="ghost" size="icon" onClick={skipTour} className="h-6 w-6 text-gray-400">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-sm text-gray-600">{steps[currentStep]?.content}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex space-x-1">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${index === currentStep ? "bg-[#8E3A59]" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
                <div className="flex space-x-2">
                  {currentStep > 0 && (
                    <Button variant="outline" size="sm" onClick={prevStep}>
                      Anterior
                    </Button>
                  )}
                  <Button size="sm" onClick={nextStep} className="bg-[#8E3A59] hover:bg-[#7A3049]">
                    {currentStep < steps.length - 1 ? (
                      <>
                        Siguiente
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </>
                    ) : (
                      "Finalizar"
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {completedTour && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-white p-4 shadow-lg"
          >
            <div className="rounded-full bg-green-100 p-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h4 className="font-medium">¡Tour completado!</h4>
              <p className="text-sm text-gray-500">Ya conoces las funciones principales de la plataforma.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Pasos del tour para diferentes secciones
const studentDashboardSteps: TourStep[] = [
  {
    target: ".dashboard-overview",
    title: "Panel principal",
    content: "Aquí puedes ver un resumen de tu progreso, cursos activos y próximas clases.",
    position: "bottom",
  },
  {
    target: ".sidebar-courses",
    title: "Mis cursos",
    content: "Accede a todos tus cursos inscritos y continúa tu aprendizaje desde donde lo dejaste.",
    position: "right",
  },
  {
    target: ".sidebar-calendar",
    title: "Calendario",
    content: "Consulta tu horario de clases, eventos y fechas importantes.",
    position: "right",
  },
  {
    target: ".sidebar-messages",
    title: "Mensajes",
    content: "Comunícate con tus instructores y compañeros de curso.",
    position: "right",
  },
  {
    target: ".notification-bell",
    title: "Notificaciones",
    content: "Mantente al día con alertas sobre nuevas clases, mensajes y actualizaciones.",
    position: "bottom",
  },
]

const instructorDashboardSteps: TourStep[] = [
  {
    target: ".dashboard-overview",
    title: "Panel principal",
    content: "Visualiza estadísticas de tus cursos, estudiantes activos y próximas clases.",
    position: "bottom",
  },
  {
    target: ".sidebar-students",
    title: "Estudiantes",
    content: "Gestiona tus estudiantes, revisa su progreso y calificaciones.",
    position: "right",
  },
  {
    target: ".sidebar-content",
    title: "Contenidos",
    content: "Crea y edita el material de tus cursos, sube recursos y evaluaciones.",
    position: "right",
  },
  {
    target: ".sidebar-calendar",
    title: "Calendario",
    content: "Organiza tus clases, tutorías y eventos especiales.",
    position: "right",
  },
  {
    target: ".notification-bell",
    title: "Notificaciones",
    content: "Recibe alertas sobre mensajes de estudiantes, entregas y más.",
    position: "bottom",
  },
]

const adminDashboardSteps: TourStep[] = [
  {
    target: ".dashboard-overview",
    title: "Panel principal",
    content: "Visualiza métricas clave de la plataforma, usuarios activos y ventas.",
    position: "bottom",
  },
  {
    target: ".sidebar-users",
    title: "Usuarios",
    content: "Gestiona estudiantes, instructores y personal administrativo.",
    position: "right",
  },
  {
    target: ".sidebar-courses",
    title: "Cursos",
    content: "Administra todos los cursos, categorías y certificaciones.",
    position: "right",
  },
  {
    target: ".sidebar-analytics",
    title: "Analíticas",
    content: "Accede a informes detallados sobre rendimiento, ventas y engagement.",
    position: "right",
  },
  {
    target: ".sidebar-settings",
    title: "Configuración",
    content: "Personaliza la plataforma, gestiona integraciones y ajustes generales.",
    position: "right",
  },
]

const homepageSteps: TourStep[] = [
  {
    target: ".navbar",
    title: "Navegación principal",
    content: "Explora nuestras diferentes secciones: cursos, talleres, comunidad y más.",
    position: "bottom",
  },
  {
    target: ".hero-section",
    title: "Descubre nuestros cursos",
    content: "Encuentra los mejores cursos de belleza impartidos por profesionales del sector.",
    position: "bottom",
  },
  {
    target: ".course-finder",
    title: "Buscador de cursos",
    content: "Utiliza nuestro buscador para encontrar el curso perfecto para ti.",
    position: "top",
  },
  {
    target: ".testimonials",
    title: "Testimonios",
    content: "Lee las experiencias de nuestros estudiantes y sus historias de éxito.",
    position: "left",
  },
  {
    target: ".cta-register",
    title: "¡Únete ahora!",
    content: "Regístrate para comenzar tu formación profesional en belleza.",
    position: "top",
  },
]
