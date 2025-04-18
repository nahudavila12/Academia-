"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send, Paperclip, Maximize2, Minimize2, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "¡Hola! Soy Bella, tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Mostrar el chatbot después de 3 segundos en la primera visita
  useEffect(() => {
    const hasSeenChatbot = localStorage.getItem("hasSeenChatbot")
    if (!hasSeenChatbot) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        localStorage.setItem("hasSeenChatbot", "true")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Añadir mensaje del usuario
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setMessage("")

    // Simular que el bot está escribiendo
    setIsTyping(true)

    // Generar respuesta del bot basada en palabras clave
    setTimeout(
      () => {
        setIsTyping(false)
        const botResponse = generateBotResponse(message)
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      },
      1000 + Math.random() * 2000,
    ) // Tiempo aleatorio entre 1-3 segundos
  }

  const generateBotResponse = (userMessage: string) => {
    const lowerCaseMessage = userMessage.toLowerCase()

    // Respuestas basadas en palabras clave
    if (lowerCaseMessage.includes("curso") || lowerCaseMessage.includes("cursos")) {
      return "Tenemos una amplia variedad de cursos de belleza. ¿Te interesa maquillaje, peluquería, uñas o estética? Puedes explorarlos en la sección de Cursos o puedo recomendarte algunos según tus intereses."
    } else if (
      lowerCaseMessage.includes("precio") ||
      lowerCaseMessage.includes("costo") ||
      lowerCaseMessage.includes("valor")
    ) {
      return "Los precios de nuestros cursos varían según el nivel y la especialidad. Tenemos opciones desde $29.99 para cursos básicos hasta $299.99 para certificaciones profesionales. ¿Hay alguna especialidad que te interese conocer su precio específico?"
    } else if (lowerCaseMessage.includes("certificado") || lowerCaseMessage.includes("certificación")) {
      return "Todos nuestros cursos incluyen certificados digitales al completarlos. Nuestras certificaciones profesionales están avaladas por asociaciones de belleza reconocidas internacionalmente."
    } else if (lowerCaseMessage.includes("pago") || lowerCaseMessage.includes("pagar")) {
      return "Aceptamos múltiples métodos de pago: tarjetas de crédito/débito, PayPal, transferencia bancaria y planes de financiamiento. ¿Necesitas ayuda con algún método de pago específico?"
    } else if (lowerCaseMessage.includes("instructor") || lowerCaseMessage.includes("profesor")) {
      return "Nuestros instructores son profesionales con años de experiencia en la industria de la belleza. Cada uno es experto en su especialidad y cuenta con certificaciones internacionales. Puedes conocer más sobre ellos en la sección 'Instructores'."
    } else if (
      lowerCaseMessage.includes("hola") ||
      lowerCaseMessage.includes("buenos días") ||
      lowerCaseMessage.includes("buenas tardes")
    ) {
      return "¡Hola! Encantada de saludarte. Soy Bella, tu asistente virtual. ¿En qué puedo ayudarte hoy?"
    } else if (lowerCaseMessage.includes("gracias")) {
      return "¡De nada! Estoy aquí para ayudarte. Si tienes más preguntas, no dudes en consultarme."
    } else if (lowerCaseMessage.includes("material") || lowerCaseMessage.includes("recursos")) {
      return "Todos nuestros cursos incluyen materiales digitales descargables, videos HD, ejercicios prácticos y acceso a nuestra comunidad. Algunos cursos avanzados incluyen kits de práctica que enviamos a tu domicilio."
    } else if (lowerCaseMessage.includes("duración") || lowerCaseMessage.includes("tiempo")) {
      return "La duración de nuestros cursos varía desde 4 semanas para los básicos hasta 6 meses para las certificaciones profesionales. Todos los cursos son a tu propio ritmo, así que puedes avanzar según tu disponibilidad de tiempo."
    } else if (lowerCaseMessage.includes("ayuda") || lowerCaseMessage.includes("soporte")) {
      return "Nuestro equipo de soporte está disponible de lunes a viernes de 9:00 a 18:00 hrs. Puedes contactarnos por chat en vivo, correo electrónico o programar una llamada. ¿En qué podemos ayudarte específicamente?"
    } else {
      return "Gracias por tu mensaje. ¿Puedes darme más detalles para poder ayudarte mejor? Puedo informarte sobre cursos, precios, certificaciones, métodos de pago o materiales de estudio."
    }
  }

  return (
    <>
      {/* Botón flotante para abrir el chat */}
      {!isOpen && (
        <Button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#8E3A59] p-0 shadow-lg hover:bg-[#7A3049]"
        >
          <MessageSquare className="h-6 w-6 text-white" />
          <span className="sr-only">Abrir chat</span>
        </Button>
      )}

      {/* Ventana de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 z-50 w-80 overflow-hidden rounded-lg bg-white shadow-xl md:w-96"
            style={{ height: isMinimized ? "60px" : "400px" }}
          >
            {/* Cabecera del chat */}
            <div className="flex h-[60px] items-center justify-between bg-[#8E3A59] px-4 text-white">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8 border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bella" />
                  <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">BA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Bella - Asistente Virtual</h3>
                  <p className="text-xs text-white/70">En línea</p>
                </div>
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
                {/* Área de mensajes */}
                <ScrollArea className="h-[280px] p-4">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                        {msg.sender === "bot" && (
                          <Avatar className="mr-2 h-8 w-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bella" />
                            <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">BA</AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            msg.sender === "user" ? "bg-[#8E3A59] text-white" : "bg-[#F3D9E2] text-gray-800"
                          }`}
                        >
                          <p className="text-sm">{msg.content}</p>
                          <p className="mt-1 text-right text-xs opacity-70">
                            {msg.timestamp.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <Avatar className="mr-2 h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Bella" />
                          <AvatarFallback className="bg-[#F3D9E2] text-[#8E3A59]">BA</AvatarFallback>
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

                {/* Área de entrada de mensaje */}
                <div className="flex items-center gap-2 border-t border-gray-200 p-3">
                  <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#8E3A59]">
                    <Paperclip className="h-5 w-5" />
                    <span className="sr-only">Adjuntar</span>
                  </Button>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
