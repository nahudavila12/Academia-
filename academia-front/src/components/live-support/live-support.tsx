"use client"

import { useState, useRef, useEffect } from "react"
import {
  X,
  Send,
  Paperclip,
  Maximize2,
  Minimize2,
  MessageCircle,
  Clock,
  Smile,
  ImageIcon,
  Phone,
  Video,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface Message {
  id: string
  content: string
  sender: "user" | "support"
  timestamp: Date
  read: boolean
}

interface SupportAgent {
  id: string
  name: string
  role: string
  avatar: string
  status: "online" | "busy" | "offline"
  lastActive?: string
}

export default function LiveSupport() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [isChatStarted, setIsChatStarted] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<SupportAgent | null>(null)
  const [waitingInQueue, setWaitingInQueue] = useState(false)
  const [queuePosition, setQueuePosition] = useState(0)
  const [estimatedWaitTime, setEstimatedWaitTime] = useState(0)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const supportAgents: SupportAgent[] = [
    {
      id: "1",
      name: "Carlos Mendoza",
      role: "Soporte Técnico",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "online",
    },
    {
      id: "2",
      name: "Lucía Fernández",
      role: "Asesora de Cursos",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "busy",
    },
    {
      id: "3",
      name: "Miguel Ángel Torres",
      role: "Soporte de Facturación",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "offline",
      lastActive: "Hace 35 min",
    },
  ]

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const startChat = (agent: SupportAgent) => {
    setSelectedAgent(agent)

    if (agent.status === "online") {
      setIsChatStarted(true)
      // Mensaje de bienvenida del agente
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: `Hola, soy ${agent.name}, ${agent.role}. ¿En qué puedo ayudarte hoy?`,
        sender: "support",
        timestamp: new Date(),
        read: true,
      }
      setMessages([welcomeMessage])
    } else if (agent.status === "busy") {
      // Simular cola de espera
      setWaitingInQueue(true)
      setQueuePosition(Math.floor(Math.random() * 5) + 1) // Entre 1 y 5 personas
      setEstimatedWaitTime(Math.floor(Math.random() * 10) + 5) // Entre 5 y 15 minutos

      // Simular que el agente se libera después de un tiempo
      const waitTime = Math.floor(Math.random() * 15000) + 10000 // Entre 10 y 25 segundos
      const timer = setInterval(() => {
        setQueuePosition((prev) => {
          if (prev <= 1) {
            clearInterval(timer)
            setWaitingInQueue(false)
            setIsChatStarted(true)

            // Mensaje de bienvenida del agente
            const welcomeMessage: Message = {
              id: Date.now().toString(),
              content: `Hola, soy ${agent.name}, ${agent.role}. Disculpa la espera. ¿En qué puedo ayudarte hoy?`,
              sender: "support",
              timestamp: new Date(),
              read: true,
            }
            setMessages([welcomeMessage])
            return 0
          }
          return prev - 1
        })

        setEstimatedWaitTime((prev) => Math.max(1, prev - 2))
      }, waitTime / 5)

      return () => clearInterval(timer)
    }
  }

  const handleSendMessage = () => {
    if (!message.trim() || !isChatStarted) return

    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
      read: false,
    }
    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Simular que el agente está escribiendo
    setIsTyping(true)

    // Simular respuesta del agente después de un tiempo aleatorio
    setTimeout(
      () => {
        setIsTyping(false)

        // Marcar el mensaje del usuario como leído
        setMessages((prev) => prev.map((msg) => (msg.id === userMessage.id ? { ...msg, read: true } : msg)))

        // Generar respuesta del agente
        const supportResponse = generateSupportResponse(message)
        const supportMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: supportResponse,
          sender: "support",
          timestamp: new Date(),
          read: true,
        }
        setMessages((prev) => [...prev, supportMessage])
      },
      1500 + Math.random() * 3000,
    ) // Entre 1.5 y 4.5 segundos
  }

  const generateSupportResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase()

    if (
      lowerCaseMessage.includes("hola") ||
      lowerCaseMessage.includes("buenos días") ||
      lowerCaseMessage.includes("buenas tardes")
    ) {
      return `Hola, ¿en qué puedo ayudarte hoy? Estoy aquí para resolver cualquier duda sobre nuestros cursos, pagos o plataforma.`
    } else if (
      lowerCaseMessage.includes("pago") ||
      lowerCaseMessage.includes("factura") ||
      lowerCaseMessage.includes("cobro")
    ) {
      return `Para temas de pagos y facturación, puedo ayudarte directamente. ¿Podrías proporcionarme el número de orden o el nombre del curso específico para revisar tu caso?`
    } else if (lowerCaseMessage.includes("curso") || lowerCaseMessage.includes("clase")) {
      return `Tenemos una amplia variedad de cursos disponibles. ¿Buscas alguna especialidad en particular como maquillaje, peluquería, uñas o estética? Puedo recomendarte los más populares o los que mejor se adapten a tus necesidades.`
    } else if (
      lowerCaseMessage.includes("problema") ||
      lowerCaseMessage.includes("error") ||
      lowerCaseMessage.includes("no puedo")
    ) {
      return `Lamento que estés experimentando problemas. Para poder ayudarte mejor, ¿podrías describir con más detalle qué error estás viendo? Si es posible, también me ayudaría saber qué dispositivo y navegador estás utilizando.`
    } else if (lowerCaseMessage.includes("gracias")) {
      return `¡De nada! Ha sido un placer ayudarte. Si tienes más preguntas en el futuro, no dudes en contactarnos nuevamente. ¡Te deseo mucho éxito en tu formación!`
    } else if (
      lowerCaseMessage.includes("precio") ||
      lowerCaseMessage.includes("costo") ||
      lowerCaseMessage.includes("valor")
    ) {
      return `Los precios de nuestros cursos varían según el nivel y la especialidad. Actualmente tenemos promociones especiales con hasta 30% de descuento en varios cursos. ¿Hay algún curso específico por el que estés interesado/a?`
    } else if (lowerCaseMessage.includes("certificado") || lowerCaseMessage.includes("diploma")) {
      return `Todos nuestros cursos incluyen certificados digitales al completarlos. Estos certificados están avalados por asociaciones profesionales del sector de la belleza y pueden descargarse directamente desde tu perfil una vez completado el curso.`
    } else if (lowerCaseMessage.includes("material") || lowerCaseMessage.includes("kit")) {
      return `Dependiendo del curso, ofrecemos diferentes materiales de estudio. Los cursos avanzados incluyen kits profesionales que enviamos a tu domicilio. ¿Te interesa algún curso en particular para que pueda darte información específica sobre sus materiales?`
    } else {
      return `Gracias por tu mensaje. Para poder ayudarte mejor, ¿podrías proporcionarme más detalles sobre tu consulta? Estoy aquí para asistirte con cualquier duda sobre nuestros cursos, la plataforma o procesos de pago.`
    }
  }

  const endChat = () => {
    setIsChatStarted(false)
    setSelectedAgent(null)
    setMessages([])
    setWaitingInQueue(false)
  }

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#8E3A59] p-0 shadow-lg hover:bg-[#7A3049]"
          style={{ bottom: "5rem" }} // Posicionado encima del chatbot
        >
          <MessageCircle className="h-6 w-6 text-white" />
          <span className="sr-only">Soporte en vivo</span>
        </Button>
      )}

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 z-50 w-80 overflow-hidden rounded-lg bg-white shadow-xl md:w-96"
            style={{ height: isMinimized ? "60px" : "450px" }}
          >
            {/* Cabecera del chat */}
            <div className="flex h-[60px] items-center justify-between bg-[#8E3A59] px-4 text-white">
              <div className="flex items-center gap-2">
                {selectedAgent ? (
                  <>
                    <Avatar className="h-8 w-8 border-2 border-white">
                      <AvatarImage src={selectedAgent.avatar || "/placeholder.svg"} alt={selectedAgent.name} />
                      <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">
                        {selectedAgent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-sm font-medium">{selectedAgent.name}</h3>
                      <p className="text-xs text-white/70">{selectedAgent.role}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <MessageCircle className="h-5 w-5" />
                    <h3 className="text-sm font-medium">Soporte en vivo</h3>
                  </>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMinimize}
                  className="h-8 w-8 text-white hover:bg-[#7A3049]"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                  <span className="sr-only">{isMinimized ? "Expandir" : "Minimizar"}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleChat}
                  className="h-8 w-8 text-white hover:bg-[#7A3049]"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Cerrar</span>
                </Button>
              </div>
            </div>

            {/* Contenido del chat (solo visible cuando no está minimizado) */}
            {!isMinimized && (
              <>
                {!selectedAgent ? (
                  // Selección de agente
                  <div className="flex h-[390px] flex-col p-4">
                    <h3 className="mb-4 text-center text-lg font-medium text-[#8E3A59]">
                      Selecciona un agente de soporte
                    </h3>
                    <div className="space-y-3">
                      {supportAgents.map((agent) => (
                        <div
                          key={agent.id}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#F3D9E2] p-3 transition-colors hover:bg-[#F3D9E2]/20"
                          onClick={() => startChat(agent)}
                        >
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={agent.avatar || "/placeholder.svg"} alt={agent.name} />
                            <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium">{agent.name}</h4>
                              <span
                                className={`flex h-2 w-2 rounded-full ${
                                  agent.status === "online"
                                    ? "bg-green-500"
                                    : agent.status === "busy"
                                      ? "bg-amber-500"
                                      : "bg-gray-400"
                                }`}
                              />
                            </div>
                            <p className="text-sm text-gray-600">{agent.role}</p>
                            <p className="text-xs text-gray-500">
                              {agent.status === "online"
                                ? "Disponible ahora"
                                : agent.status === "busy"
                                  ? "Ocupado (en cola)"
                                  : `Desconectado - ${agent.lastActive}`}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="mt-auto text-center text-xs text-gray-500">
                      Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 a 18:00 hrs.
                    </p>
                  </div>
                ) : waitingInQueue ? (
                  // Pantalla de espera en cola
                  <div className="flex h-[390px] flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-amber-100 p-4">
                      <Clock className="h-8 w-8 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-medium text-[#8E3A59]">Estás en la cola de espera</h3>
                    <p className="mt-2 text-gray-600">
                      {queuePosition === 1
                        ? "Eres el siguiente en la cola"
                        : `Hay ${queuePosition} ${queuePosition === 1 ? "persona" : "personas"} delante de ti`}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Tiempo estimado de espera: {estimatedWaitTime} {estimatedWaitTime === 1 ? "minuto" : "minutos"}
                    </p>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full bg-amber-500 transition-all duration-1000"
                        style={{ width: `${Math.max(5, 100 - queuePosition * 20)}%` }}
                      />
                    </div>
                    <Button
                      variant="outline"
                      onClick={endChat}
                      className="mt-6 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]"
                    >
                      Cancelar y volver
                    </Button>
                  </div>
                ) : (
                  // Chat activo
                  <>
                    {/* Área de mensajes */}
                    <ScrollArea className="h-[330px] p-4">
                      <div className="space-y-4">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            {msg.sender === "support" && (
                              <Avatar className="mr-2 h-8 w-8">
                                <AvatarImage
                                  src={selectedAgent.avatar || "/placeholder.svg"}
                                  alt={selectedAgent.name}
                                />
                                <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">
                                  {selectedAgent.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                msg.sender === "user" ? "bg-[#8E3A59] text-white" : "bg-[#F3D9E2] text-gray-800"
                              }`}
                            >
                              <p className="text-sm">{msg.content}</p>
                              <div
                                className={`mt-1 flex items-center justify-end gap-1 text-xs ${
                                  msg.sender === "user" ? "text-white/70" : "text-gray-500"
                                }`}
                              >
                                <Clock className="h-3 w-3" />
                                <span>
                                  {msg.timestamp.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                                {msg.sender === "user" && msg.read && (
                                  <svg
                                    className="h-3 w-3 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                  </svg>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                        {isTyping && (
                          <div className="flex justify-start">
                            <Avatar className="mr-2 h-8 w-8">
                              <AvatarImage src={selectedAgent.avatar || "/placeholder.svg"} alt={selectedAgent.name} />
                              <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">
                                {selectedAgent.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="max-w-[80%] rounded-lg bg-[#F3D9E2] p-3 text-gray-800">
                              <div className="flex space-x-1">
                                <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
                                <div
                                  className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                                  style={{ animationDelay: "0.2s" }}
                                ></div>
                                <div
                                  className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
                                  style={{ animationDelay: "0.4s" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>

                    {/* Opciones de comunicación */}
                    <div className="flex justify-center space-x-2 border-t border-b border-[#F3D9E2] py-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                              <Phone className="h-5 w-5" />
                              <span className="sr-only">Llamada de voz</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Iniciar llamada de voz</p>
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
                            <p>Iniciar videollamada</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    {/* Área de entrada de mensaje */}
                    <div className="flex items-center gap-2 p-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                              <Paperclip className="h-5 w-5" />
                              <span className="sr-only">Adjuntar</span>
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
                              <span className="sr-only">Enviar imagen</span>
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
                              <span className="sr-only">Emojis</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Insertar emoji</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSendMessage()
                          }
                        }}
                        placeholder="Escribe tu mensaje..."
                        className="flex-1 focus-visible:ring-[#8E3A59]"
                      />

                      <Button
                        onClick={handleSendMessage}
                        size="icon"
                        className="bg-[#8E3A59] text-white hover:bg-[#7A3049]"
                      >
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Enviar</span>
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
