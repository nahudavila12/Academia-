"use client"

import { useState, useEffect } from "react"
import { Bell, X, Check, Calendar, MessageSquare, BookOpen, Award, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: string
  title: string
  message: string
  type: "message" | "course" | "event" | "certificate" | "system"
  read: boolean
  date: Date
}

export default function NotificationPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [unreadCount, setUnreadCount] = useState(0)

  // Generar notificaciones de ejemplo al cargar el componente
  useEffect(() => {
    const exampleNotifications: Notification[] = [
      {
        id: "1",
        title: "Nuevo mensaje",
        message: "Laura Martínez te ha enviado un mensaje sobre el curso de maquillaje.",
        type: "message",
        read: false,
        date: new Date(Date.now() - 1000 * 60 * 5), // 5 minutos atrás
      },
      {
        id: "2",
        title: "Recordatorio de clase",
        message: "Tu clase de 'Técnicas avanzadas de colorimetría' comienza en 30 minutos.",
        type: "event",
        read: false,
        date: new Date(Date.now() - 1000 * 60 * 30), // 30 minutos atrás
      },
      {
        id: "3",
        title: "Nuevo curso disponible",
        message: "Se ha añadido un nuevo curso: 'Maquillaje para eventos especiales'.",
        type: "course",
        read: false,
        date: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 horas atrás
      },
      {
        id: "4",
        title: "Certificado disponible",
        message: "Tu certificado del curso 'Fundamentos de maquillaje' está disponible para descargar.",
        type: "certificate",
        read: true,
        date: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 día atrás
      },
      {
        id: "5",
        title: "Actualización del sistema",
        message: "Hemos actualizado nuestra plataforma con nuevas funcionalidades.",
        type: "system",
        read: true,
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 días atrás
      },
      {
        id: "6",
        title: "Promoción especial",
        message: "¡50% de descuento en todos los cursos de uñas hasta el fin de semana!",
        type: "system",
        read: true,
        date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 días atrás
      },
    ]

    setNotifications(exampleNotifications)
    updateUnreadCount(exampleNotifications)

    // Simular nueva notificación después de 10 segundos
    const timer = setTimeout(() => {
      const newNotification: Notification = {
        id: Date.now().toString(),
        title: "¡Oferta por tiempo limitado!",
        message: "20% de descuento en el curso 'Extensiones de pestañas' por las próximas 24 horas.",
        type: "course",
        read: false,
        date: new Date(),
      }

      const updatedNotifications = [newNotification, ...exampleNotifications]
      setNotifications(updatedNotifications)
      updateUnreadCount(updatedNotifications)

      // Mostrar notificación emergente
      showToast(newNotification)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  const updateUnreadCount = (notifs: Notification[]) => {
    setUnreadCount(notifs.filter((n) => !n.read).length)
  }

  const togglePanel = () => {
    setIsOpen(!isOpen)
  }

  const markAsRead = (id: string) => {
    const updatedNotifications = notifications.map((notification) =>
      notification.id === id ? { ...notification, read: true } : notification,
    )
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({ ...notification, read: true }))
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const deleteNotification = (id: string) => {
    const updatedNotifications = notifications.filter((notification) => notification.id !== id)
    setNotifications(updatedNotifications)
    updateUnreadCount(updatedNotifications)
  }

  const showToast = (notification: Notification) => {
    // Crear elemento de notificación emergente
    const toast = document.createElement("div")
    toast.className =
      "fixed top-4 right-4 z-50 flex items-start gap-3 rounded-lg bg-white p-4 shadow-lg border border-[#F3D9E2] max-w-sm animate-in fade-in slide-in-from-top-5"

    // Icono según tipo
    let iconHtml = ""
    switch (notification.type) {
      case "message":
        iconHtml =
          '<div class="rounded-full bg-blue-100 p-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-blue-600"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>'
        break
      case "course":
        iconHtml =
          '<div class="rounded-full bg-purple-100 p-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-purple-600"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg></div>'
        break
      default:
        iconHtml =
          '<div class="rounded-full bg-pink-100 p-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-pink-600"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></div>'
    }

    toast.innerHTML = `
      ${iconHtml}
      <div class="flex-1">
        <h4 class="font-medium text-sm text-gray-900">${notification.title}</h4>
        <p class="text-xs text-gray-500">${notification.message}</p>
      </div>
      <button class="text-gray-400 hover:text-gray-500">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    `

    document.body.appendChild(toast)

    // Eliminar después de 5 segundos
    setTimeout(() => {
      toast.classList.add("animate-out", "fade-out", "slide-out-to-right-5")
      setTimeout(() => {
        document.body.removeChild(toast)
      }, 300)
    }, 5000)

    // Añadir evento para cerrar al hacer clic
    const closeButton = toast.querySelector("button")
    closeButton?.addEventListener("click", () => {
      document.body.removeChild(toast)
    })
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="h-5 w-5 text-blue-500" />
      case "event":
        return <Calendar className="h-5 w-5 text-green-500" />
      case "course":
        return <BookOpen className="h-5 w-5 text-purple-500" />
      case "certificate":
        return <Award className="h-5 w-5 text-amber-500" />
      default:
        return <Info className="h-5 w-5 text-gray-500" />
    }
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.round(diffMs / 60000)
    const diffHours = Math.round(diffMs / 3600000)
    const diffDays = Math.round(diffMs / 86400000)

    if (diffMins < 60) {
      return `Hace ${diffMins} ${diffMins === 1 ? "minuto" : "minutos"}`
    } else if (diffHours < 24) {
      return `Hace ${diffHours} ${diffHours === 1 ? "hora" : "horas"}`
    } else if (diffDays < 7) {
      return `Hace ${diffDays} ${diffDays === 1 ? "día" : "días"}`
    } else {
      return date.toLocaleDateString()
    }
  }

  // Filtrar notificaciones según la pestaña activa
  const filteredNotifications = notifications.filter((notification) => {
    if (activeTab === "all") return true
    if (activeTab === "unread") return !notification.read
    return notification.type === activeTab
  })

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={togglePanel} className="relative text-gray-500 hover:text-[#8E3A59]">
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#8E3A59] text-[10px] font-bold text-white">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
        <span className="sr-only">Notificaciones</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 mt-2 w-80 rounded-lg border border-[#F3D9E2] bg-white shadow-lg md:w-96"
          >
            <div className="flex items-center justify-between border-b border-[#F3D9E2] p-4">
              <h3 className="text-lg font-semibold text-[#8E3A59]">Notificaciones</h3>
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs text-[#8E3A59] hover:text-[#7A3049]"
                >
                  Marcar todas como leídas
                </Button>
              )}
            </div>

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="border-b border-[#F3D9E2] px-4">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all" className="text-xs">
                    Todas
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="text-xs">
                    No leídas
                    {unreadCount > 0 && (
                      <Badge className="ml-1 bg-[#8E3A59] px-1 py-0 text-[10px]">{unreadCount}</Badge>
                    )}
                  </TabsTrigger>
                  <TabsTrigger value="message" className="text-xs">
                    Mensajes
                  </TabsTrigger>
                  <TabsTrigger value="course" className="text-xs">
                    Cursos
                  </TabsTrigger>
                  <TabsTrigger value="event" className="text-xs">
                    Eventos
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <ScrollArea className="h-[300px]">
                  {filteredNotifications.length > 0 ? (
                    <div className="divide-y divide-[#F3D9E2]">
                      {filteredNotifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`relative flex gap-3 p-4 transition-colors hover:bg-[#F3D9E2]/10 ${
                            !notification.read ? "bg-[#F3D9E2]/20" : ""
                          }`}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D9E2]">
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h4 className="font-medium">{notification.title}</h4>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-500">{formatDate(notification.date)}</span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => deleteNotification(notification.id)}
                                  className="h-6 w-6 text-gray-400 hover:text-gray-600"
                                >
                                  <X className="h-3 w-3" />
                                  <span className="sr-only">Eliminar</span>
                                </Button>
                              </div>
                            </div>
                            <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
                            {!notification.read && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => markAsRead(notification.id)}
                                className="mt-2 h-7 text-xs text-[#8E3A59] hover:text-[#7A3049]"
                              >
                                <Check className="mr-1 h-3 w-3" />
                                Marcar como leída
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <div className="rounded-full bg-[#F3D9E2] p-3">
                        <Bell className="h-6 w-6 text-[#8E3A59]" />
                      </div>
                      <h4 className="mt-4 font-medium">No hay notificaciones</h4>
                      <p className="mt-1 text-sm text-gray-500">
                        {activeTab === "all"
                          ? "No tienes notificaciones en este momento."
                          : activeTab === "unread"
                            ? "No tienes notificaciones sin leer."
                            : `No tienes notificaciones de ${
                                activeTab === "message" ? "mensajes" : activeTab === "course" ? "cursos" : "eventos"
                              }.`}
                      </p>
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
