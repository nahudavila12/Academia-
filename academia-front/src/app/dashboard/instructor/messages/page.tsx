import Image from "next/image"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function InstructorMessagesPage() {
  return (
    <div className="h-[calc(100vh-7rem)] overflow-hidden">
      <div className="flex h-full">
        {/* Sidebar de contactos */}
        <div className="w-full max-w-xs border-r border-[#F3D9E2] bg-white md:block">
          <div className="flex h-14 items-center justify-between border-b border-[#F3D9E2] px-4">
            <h2 className="text-lg font-semibold text-[#8E3A59]">Mensajes</h2>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
              <MoreVertical className="h-5 w-5" />
              <span className="sr-only">Opciones</span>
            </Button>
          </div>
          <div className="p-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
              <Input placeholder="Buscar conversaciones..." className="pl-9 focus-visible:ring-[#8E3A59]" />
            </div>
          </div>
          <Tabs defaultValue="all" className="px-3">
            <TabsList className="grid w-full grid-cols-3 bg-[#F3D9E2]/30">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Todos
              </TabsTrigger>
              <TabsTrigger value="students" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Estudiantes
              </TabsTrigger>
              <TabsTrigger
                value="instructors"
                className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white"
              >
                Instructores
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <ScrollArea className="h-[calc(100%-8rem)]">
            <div className="divide-y divide-[#F3D9E2]">
              {conversations.map((conversation, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-3 p-3 transition-colors hover:bg-[#F3D9E2]/20 ${
                    index === 0 ? "bg-[#F3D9E2]/30" : ""
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={conversation.avatar || "/placeholder.svg"}
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
        <div className="flex flex-1 flex-col">
          {/* Cabecera del chat */}
          <div className="flex h-14 items-center justify-between border-b border-[#F3D9E2] bg-white px-4">
            <div className="flex items-center gap-3">
              <Image
                src={conversations[0].avatar || "/placeholder.svg"}
                width={36}
                height={36}
                alt={conversations[0].name}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">{conversations[0].name}</h3>
                <p className="text-xs text-green-500">{conversations[0].online ? "En línea" : "Desconectado"}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Llamada</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                <Video className="h-5 w-5" />
                <span className="sr-only">Videollamada</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                <Info className="h-5 w-5" />
                <span className="sr-only">Información</span>
              </Button>
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

              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                  {message.sender !== "me" && (
                    <Image
                      src={conversations[0].avatar || "/placeholder.svg"}
                      width={32}
                      height={32}
                      alt={conversations[0].name}
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
            </div>
          </ScrollArea>

          {/* Entrada de mensaje */}
          <div className="border-t border-[#F3D9E2] bg-white p-3">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                <Paperclip className="h-5 w-5" />
                <span className="sr-only">Adjuntar</span>
              </Button>
              <Input placeholder="Escribe un mensaje..." className="focus-visible:ring-[#8E3A59]" />
              <Button size="icon" className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
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

const conversations = [
  {
    name: "María López",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Tengo una duda sobre el último ejercicio",
    time: "10:30",
    unread: 2,
    online: true,
    role: "student",
  },
  {
    name: "Ana Rodríguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Podemos reprogramar la tutoría?",
    time: "Ayer",
    unread: 0,
    online: false,
    role: "student",
  },
  {
    name: "Carolina Gómez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Viste los nuevos materiales que compartí?",
    time: "Ayer",
    unread: 0,
    online: true,
    role: "instructor",
  },
  {
    name: "Sofía Pérez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Gracias por la clase de hoy",
    time: "Lun",
    unread: 0,
    online: false,
    role: "student",
  },
  {
    name: "Laura Gómez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Podemos coordinar para la próxima masterclass?",
    time: "Dom",
    unread: 0,
    online: true,
    role: "instructor",
  },
]

const messages = [
  {
    sender: "other",
    text: "Hola profesora, tengo una duda sobre el último ejercicio de maquillaje que nos asignó",
    time: "10:15",
    read: true,
  },
  {
    sender: "me",
    text: "Hola María, claro. Dime qué parte no entiendes y te puedo ayudar.",
    time: "10:18",
    read: true,
  },
  {
    sender: "other",
    text: "En la técnica de difuminado, ¿es mejor usar un pincel fluffy o uno más compacto para el párpado móvil?",
    time: "10:20",
    read: true,
  },
  {
    sender: "me",
    text: "Buena pregunta. Para el difuminado inicial es mejor usar un pincel fluffy, te da más control sobre la intensidad. Luego puedes usar uno más compacto para definir mejor las zonas específicas.",
    time: "10:22",
    read: true,
  },
  {
    sender: "other",
    text: "¡Gracias! Eso aclara mi duda. ¿Habrá alguna clase práctica donde podamos ver esta técnica en detalle?",
    time: "10:25",
    read: true,
  },
  {
    sender: "me",
    text: "Sí, de hecho estoy planeando una clase práctica para este jueves a las 17:00 donde veremos diferentes técnicas de difuminado. ¿Te parece bien ese horario?",
    time: "10:26",
    read: true,
  },
  {
    sender: "other",
    text: "¡Perfecto! Ahí estaré. Gracias por tu ayuda.",
    time: "10:28",
    read: true,
  },
  {
    sender: "me",
    text: "Excelente. Prepararé algunos ejemplos específicos para aclarar todas las dudas. Nos vemos el jueves.",
    time: "10:30",
    read: false,
  },
]
