import Image from "next/image"
import Link from "next/link"
import { Search, ChevronRight, Book, MessageSquare, FileText, HelpCircle, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is BeautyAcademy?",
    answer:
      "BeautyAcademy is an online platform that offers courses and resources for beauty professionals and enthusiasts.",
  },
  {
    question: "How do I enroll in a course?",
    answer: "You can enroll in a course by creating an account and selecting the course you want to join.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards, debit cards, and PayPal.",
  },
]

const guides = [
  {
    title: "Getting Started",
    description: "Learn the basics of using BeautyAcademy.",
    icon: <Book className="h-6 w-6 text-[#8E3A59]" />,
    topics: ["Account setup", "Navigating the dashboard", "Finding courses"],
  },
  {
    title: "Course Enrollment",
    description: "A guide to enrolling in and managing your courses.",
    icon: <FileText className="h-6 w-6 text-[#8E3A59]" />,
    topics: ["Browsing courses", "Payment options", "Course access"],
  },
  {
    title: "Troubleshooting",
    description: "Common issues and how to resolve them.",
    icon: <HelpCircle className="h-6 w-6 text-[#8E3A59]" />,
    topics: ["Login problems", "Video playback", "Contacting support"],
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#FFFCFA]">
      <header className="sticky top-0 z-50 w-full border-b border-[#F3D9E2] bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-full"
            />
            <span className="font-serif text-xl font-bold text-[#8E3A59]">BeautyAcademy</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
              Inicio
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-[#8E3A59]">
              Dashboard
            </Link>
            <Link href="/help" className="text-sm font-medium text-[#8E3A59]">
              Ayuda
            </Link>
          </nav>
        </div>
      </header>

      <main className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8E3A59]">
            Centro de Ayuda y Soporte
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-600 md:text-xl">
            Encuentra respuestas a tus preguntas y obtén el soporte que necesitas para aprovechar al máximo tu
            experiencia.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
            <Input
              placeholder="Buscar en el centro de ayuda..."
              className="h-12 pl-10 border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
            />
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="mx-auto max-w-2xl bg-[#F3D9E2]/30">
              <TabsTrigger value="faq" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Preguntas frecuentes
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Guías
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
                Contacto
              </TabsTrigger>
            </TabsList>

            {/* Preguntas frecuentes */}
            <TabsContent value="faq" className="mt-8">
              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#F3D9E2]">
                      <AccordionTrigger className="text-left font-medium text-gray-700 hover:text-[#8E3A59]">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            {/* Guías */}
            <TabsContent value="guides" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {guides.map((guide, index) => (
                  <Card key={index} className="border-[#F3D9E2]">
                    <CardHeader className="pb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3D9E2]">
                        {guide.icon}
                      </div>
                      <CardTitle className="mt-4 text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <ul className="space-y-2 text-sm">
                        {guide.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-[#8E3A59]" />
                            <Link href="#" className="text-gray-600 hover:text-[#8E3A59] hover:underline">
                              {topic}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
                        Ver todas las guías
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Contacto */}
            <TabsContent value="contact" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-[#F3D9E2]">
                  <CardHeader>
                    <CardTitle>Formulario de contacto</CardTitle>
                    <CardDescription>Envíanos un mensaje y te responderemos lo antes posible.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input
                        id="subject"
                        placeholder="Asunto de tu mensaje"
                        className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[120px] w-full rounded-md border border-[#F3D9E2] p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8E3A59]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white">Enviar mensaje</Button>
                  </CardFooter>
                </Card>

                <div className="space-y-6">
                  <Card className="border-[#F3D9E2]">
                    <CardHeader>
                      <CardTitle>Información de contacto</CardTitle>
                      <CardDescription>Otras formas de ponerte en contacto con nosotros.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D9E2]">
                          <Mail className="h-5 w-5 text-[#8E3A59]" />
                        </div>
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <p className="text-sm text-gray-600">soporte@beautyacademy.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D9E2]">
                          <Phone className="h-5 w-5 text-[#8E3A59]" />
                        </div>
                        <div>
                          <h3 className="font-medium">Teléfono</h3>
                          <p className="text-sm text-gray-600">+34 900 123 456</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3D9E2]">
                          <MessageSquare className="h-5 w-5 text-[#8E3A59]" />
                        </div>
                        <div>
                          <h3 className="font-medium">Chat en vivo</h3>
                          <p className="text-sm text-gray-600">Disponible de lunes a viernes, 9:00 - 18:00</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#F3D9E2]">
                    <CardHeader>
                      <CardTitle>Horario de atención</CardTitle>
                      <CardDescription>
                        Nuestro equipo de soporte está disponible en los siguientes horarios.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Lunes a Viernes</span>
                          <span>9:00 - 18:00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Sábados</span>
                          <span>10:00 - 14:00</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Domingos y festivos</span>
                          <span>Cerrado</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
