"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info, Clock, Smile, Mic, ImageIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState(0)
  const [conversations, setConversations] = useState(initialConversations)
  const [newMessage, setNewMessage] = useState("")
  const [currentFilter, setCurrentFilter] = useState("all")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Filtrar conversaciones según la pestaña seleccionada
  const filteredConversations = conversations.filter((conv) => {
    if (currentFilter === "all") return true
    return conv.role === currentFilter
  })

  // Enviar un nuevo mensaje
  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const updatedConversations = [...conversations]
    const currentConv = updatedConversations[activeConversation]

    // Añadir el nuevo mensaje a la conversación activa
    currentConv.messages = [
      ...(currentConv.messages || []),
      {
        sender: "me",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: false,
      },
    ]

    // Actualizar la última mensaje en la lista de conversaciones
    currentConv.lastMessage = newMessage
    currentConv.time = "Ahora"

    setConversations(updatedConversations)
    setNewMessage("")

    // Simular respuesta después de 1-3 segundos
    setTimeout(
      () => {
        const responseMessages = [
          "¡Gracias por tu mensaje! Te responderé pronto.",
          "Entiendo, ¿necesitas más información sobre eso?",
          "Claro, podemos revisar eso en la próxima clase.",
          "¿Te gustaría programar una tutoría para resolver esa duda?",
          "Voy a compartir algunos recursos adicionales que te pueden ayudar.",
        ]

        const randomResponse = responseMessages[Math.floor(Math.random() * responseMessages.length)]

        const updatedWithResponse = [...updatedConversations]
        updatedWithResponse[activeConversation].messages = [
          ...(updatedWithResponse[activeConversation].messages || []),
          {
            sender: "other",
            text: randomResponse,
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
            read: true,
          },
        ]

        updatedWithResponse[activeConversation].lastMessage = randomResponse
        setConversations(updatedWithResponse)
      },
      1000 + Math.random() * 2000,
    )
  }

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversations[activeConversation]?.messages])

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar de contactos */}
        <div className="w-full max-w-xs border-r border-[#F3D9E2] bg-white flex-shrink-0 flex flex-col">
          <div className="flex h-14 items-center justify-between border-b border-[#F3D9E2] px-4 flex-shrink-0">
            <h2 className="text-lg font-semibold text-[#8E3A59]">Mensajes</h2>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
              <MoreVertical className="h-5 w-5" />
              <span className="sr-only">Opciones</span>
            </Button>
          </div>
          <div className="p-3 flex-shrink-0">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input placeholder="Buscar conversaciones..." className="pl-9 focus-visible:ring-[#8E3A59]" />
            </div>
          </div>
          <Tabs defaultValue="all" className="px-3 flex-shrink-0" onValueChange={setCurrentFilter}>
            <TabsList className="grid w-full grid-cols-3 bg-[#F3D9E2]/30">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="instructor"
                className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white"
              >
                Instructores
              </TabsTrigger>
              <TabsTrigger value="student" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Estudiantes
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <ScrollArea className="flex-1">
            <div className="divide-y divide-[#F3D9E2]">
              {filteredConversations.map((conversation, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-3 p-3 transition-colors hover:bg-[#F3D9E2]/20 ${
                    index === activeConversation ? "bg-[#F3D9E2]/30" : ""
                  }`}
                  onClick={() => setActiveConversation(index)}
                >
                  <div className="relative">
                    <Image
                      src={conversation.avatar || "/placeholder.svg?height=40&width=40"}
                      width={40}
                      height={40}
                      alt={conversation.name}
                      className="rounded-full"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                    )}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <h3 className="truncate font-medium">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="truncate text-sm text-gray-500">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && <Badge className="ml-auto bg-[#8E3A59]">{conversation.unread}</Badge>}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Área de chat */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Cabecera del chat */}
          <div className="flex h-14 items-center justify-between border-b border-[#F3D9E2] bg-white px-4 flex-shrink-0">
            <div className="flex items-center gap-3">
              <Image
                src={conversations[activeConversation]?.avatar || "/placeholder.svg?height=36&width=36"}
                width={36}
                height={36}
                alt={conversations[activeConversation]?.name || "Usuario"}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">{conversations[activeConversation]?.name}</h3>
                <p className="text-xs text-green-500">
                  {conversations[activeConversation]?.online ? "En línea" : "Desconectado"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <Phone className="h-5 w-5" />
                      <span className="sr-only">Llamada</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Llamada de voz</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <Video className="h-5 w-5" />
                      <span className="sr-only">Videollamada</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Videollamada</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <Info className="h-5 w-5" />
                      <span className="sr-only">Información</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Información de contacto</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          {/* Mensajes */}
          <ScrollArea className="flex-1 bg-[#F9F5F6] p-4">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge variant="outline" className="bg-white text-xs text-gray-500">
                  Hoy
                </Badge>
              </div>

              {conversations[activeConversation]?.messages?.map((message, index) => (
                <div key={index} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  {message.sender !== "me" && (
                    <Image
                      src={conversations[activeConversation]?.avatar || "/placeholder.svg?height=32&width=32"}
                      width={32}
                      height={32}
                      alt={conversations[activeConversation]?.name || "Usuario"}
                      className="mr-2 h-8 w-8 self-end rounded-full"
                    />
                  )}
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "me" ? "bg-[#8E3A59] text-white" : "bg-white text-gray-800"
                    }`}
                  >
                    <p>{message.text}</p>
                    <div
                      className={`mt-1 flex items-center justify-end gap-1 text-xs ${
                        message.sender === "me" ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      <Clock className="h-3 w-3" />
                      <span>{message.time}</span>
                      {message.sender === "me" && message.read && (
                        <svg className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Entrada de mensaje */}
          <div className="border-t border-[#F3D9E2] bg-white p-3 flex-shrink-0">
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <Paperclip className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Adjuntar archivo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <ImageIcon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Enviar imagen</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <Smile className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Emojis</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Input
                placeholder="Escribe un mensaje..."
                className="focus-visible:ring-[#8E3A59]"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage()
                  }
                }}
              />

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                      <Mic className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mensaje de voz</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Button size="icon" className="bg-[#8E3A59] hover:bg-[#7A3049] text-white" onClick={handleSendMessage}>
                <Send className="h-5 w-5" />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Datos iniciales
const initialConversations = [
  {
    name: "Laura Martínez",
    avatar: "/images/perfil.jpg?height=40&width=40",
    lastMessage: "¿Tienes alguna duda sobre la clase de hoy?",
    time: "10:30",
    unread: 2,
    online: true,
    role: "instructor",
    messages: [
      {
        sender: "other",
        text: "Hola Sofía, ¿cómo estás? ¿Tienes alguna duda sobre la clase de hoy?",
        time: "10:15",
        read: true,
      },
      {
        sender: "me",
        text: "¡Hola Laura! Todo bien, gracias. Sí, tengo una duda sobre la técnica de difuminado que explicaste.",
        time: "10:18",
        read: true,
      },
      {
        sender: "other",
        text: "Claro, dime exactamente qué parte no te quedó clara y te puedo ayudar.",
        time: "10:20",
        read: true,
      },
      {
        sender: "me",
        text: "Cuando explicaste cómo aplicar la sombra en el párpado móvil, ¿es mejor usar un pincel fluffy o uno más compacto?",
        time: "10:22",
        read: true,
      },
      {
        sender: "other",
        text: "Buena pregunta. Para el difuminado inicial es mejor usar un pincel fluffy, te da más control sobre la intensidad. Luego puedes usar uno más compacto para definir mejor las zonas específicas.",
        time: "10:25",
        read: true,
      },
      {
        sender: "other",
        text: "¿Te gustaría que hagamos una sesión práctica extra esta semana para repasar esa técnica?",
        time: "10:26",
        read: true,
      },
      {
        sender: "me",
        text: "¡Eso sería genial! Me vendría muy bien practicar más esa técnica.",
        time: "10:28",
        read: true,
      },
      {
        sender: "other",
        text: "Perfecto, podemos hacerlo el jueves a las 17:00. Te enviaré un recordatorio con los materiales que necesitarás.",
        time: "10:30",
        read: false,
      },
    ],
  },
  {
    name: "Ana Rodríguez",
    avatar: "/images/perfil.jpg?height=40&width=40",
    lastMessage: "Gracias por compartir tus apuntes!",
    time: "Ayer",
    unread: 0,
    online: false,
    role: "student",
    messages: [
      {
        sender: "other",
        text: "Hola Sofía, gracias por compartir tus apuntes de la clase de ayer.",
        time: "Ayer 15:30",
        read: true,
      },
      {
        sender: "me",
        text: "¡De nada Ana! Espero que te sean útiles. Si tienes alguna duda, me avisas.",
        time: "Ayer 16:05",
        read: true,
      },
      {
        sender: "other",
        text: "Perfecto, gracias. ¿Vas a asistir al taller del próximo sábado?",
        time: "Ayer 16:10",
        read: true,
      },
      {
        sender: "me",
        text: "Sí, ya me inscribí. ¿Tú también vas?",
        time: "Ayer 16:15",
        read: true,
      },
      {
        sender: "other",
        text: "¡Genial! Sí, también voy a ir. Podemos practicar juntas lo que aprendamos.",
        time: "Ayer 16:20",
        read: true,
      },
    ],
  },
  {
    name: "Carolina Gómez",
    avatar: "/images/perfil.jpg?height=40&width=40",
    lastMessage: "La próxima clase será sobre técnicas avanzadas",
    time: "Ayer",
    unread: 0,
    online: true,
    role: "instructor",
    messages: [
      {
        sender: "other",
        text: "Hola Sofía, quería informarte que la próxima clase será sobre técnicas avanzadas de maquillaje para eventos.",
        time: "Ayer 14:20",
        read: true,
      },
      {
        sender: "me",
        text: "¡Genial! Estoy muy interesada en ese tema. ¿Necesitamos traer algún material específico?",
        time: "Ayer 14:35",
        read: true,
      },
      {
        sender: "other",
        text: "Sí, necesitarás tu kit completo de brochas y las paletas de sombras que usamos en la clase anterior. También sería bueno que traigas una base de larga duración si tienes.",
        time: "Ayer 14:40",
        read: true,
      },
      {
        sender: "me",
        text: "Perfecto, lo tendré todo listo. ¡Gracias por avisar!",
        time: "Ayer 14:45",
        read: true,
      },
    ],
  },
  {
    name: "María López",
    avatar: "/images/perfil.jpg?height=40&width=40",
    lastMessage: "¿Podemos practicar juntas para el examen?",
    time: "Lun",
    unread: 0,
    online: false,
    role: "student",
    messages: [
      {
        sender: "other",
        text: "Hola Sofía, estoy un poco nerviosa por el examen práctico. ¿Podríamos quedar para practicar juntas?",
        time: "Lun 11:20",
        read: true,
      },
      {
        sender: "me",
        text: "¡Claro María! A mí también me vendría bien repasar. ¿Qué te parece el miércoles por la tarde?",
        time: "Lun 11:45",
        read: true,
      },
      {
        sender: "other",
        text: "Miércoles me viene perfecto. ¿A las 16:00 en la cafetería del campus?",
        time: "Lun 12:00",
        read: true,
      },
      {
        sender: "me",
        text: "Genial, ahí nos vemos. Llevaré mis apuntes y productos para practicar.",
        time: "Lun 12:10",
        read: true,
      },
    ],
  },
  {
    name: "Sofía Pérez",
    avatar: "/images/perfil.jpg?height=40&width=40",
    lastMessage: "¿Viste el nuevo tutorial que compartió la profesora?",
    time: "Dom",
    unread: 0,
    online: true,
    role: "student",
    messages: [
      {
        sender: "other",
        text: "¡Hola! ¿Viste el nuevo tutorial que compartió la profesora Laura en el grupo?",
        time: "Dom 18:30",
        read: true,
      },
      {
        sender: "me",
        text: "¡Sí! Está genial, ya lo guardé para practicar este fin de semana.",
        time: "Dom 18:45",
        read: true,
      },
      {
        sender: "other",
        text: "¿Te gustaría que practiquemos juntas? Podríamos hacer videollamada.",
        time: "Dom 19:00",
        read: true,
      },
      {
        sender: "me",
        text: "¡Me encantaría! ¿Qué tal el sábado por la mañana?",
        time: "Dom 19:15",
        read: true,
      },
      {
        sender: "other",
        text: "Perfecto, te escribo el sábado para coordinar la hora exacta.",
        time: "Dom 19:20",
        read: true,
      },
    ],
  },
]
