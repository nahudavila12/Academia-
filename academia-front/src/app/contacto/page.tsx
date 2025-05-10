"use client"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Video, Users } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"
import "leaflet/dist/leaflet.css"

const Map = dynamic(() => import("@/components/MapContact"), { ssr: false })

// Datos simulados
const locations = [
  {
    id: 1,
    name: "Sede Central - Madrid",
    address: "Calle Gran Vía 123, 28013 Madrid",
    phone: "+34 91 234 56 78",
    email: "madrid@academiadebelleza.com",
    hours: "Lunes a Viernes: 9:00 - 20:00, Sábados: 10:00 - 14:00",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Campus Barcelona",
    address: "Avinguda Diagonal 456, 08006 Barcelona",
    phone: "+34 93 345 67 89",
    email: "barcelona@academiadebelleza.com",
    hours: "Lunes a Viernes: 9:00 - 20:00, Sábados: 10:00 - 14:00",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Campus Valencia",
    address: "Calle Colón 78, 46004 Valencia",
    phone: "+34 96 456 78 90",
    email: "valencia@academiadebelleza.com",
    hours: "Lunes a Viernes: 9:00 - 20:00, Sábados: 10:00 - 14:00",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const faqItems = [
  {
    question: "¿Cómo puedo inscribirme en un curso?",
    answer:
      "Puedes inscribirte a través de nuestra plataforma online seleccionando el curso de tu interés y siguiendo el proceso de matrícula, o visitando cualquiera de nuestras sedes para recibir asistencia personal.",
  },
  {
    question: "¿Ofrecen financiación para los cursos?",
    answer:
      "Sí, ofrecemos varias opciones de financiación y planes de pago adaptados a diferentes necesidades. Puedes consultar las condiciones específicas en la página de cada curso o contactar con nuestro equipo de admisiones.",
  },
  {
    question: "¿Cuánto tiempo tardan en responder a las consultas?",
    answer:
      "Nuestro equipo de atención responde a todas las consultas en un plazo máximo de 24 horas laborables. Para consultas urgentes, recomendamos contactar por teléfono.",
  },
  {
    question: "¿Ofrecen cursos online?",
    answer:
      "Sí, disponemos de una amplia oferta de cursos en formato online, así como opciones híbridas que combinan formación presencial y a distancia.",
  },
  {
    question: "¿Los cursos incluyen materiales?",
    answer:
      "La mayoría de nuestros cursos incluyen un kit básico de materiales necesarios para la formación. Los detalles específicos se encuentran en la descripción de cada programa.",
  },
  {
    question: "¿Ofrecen certificaciones internacionales?",
    answer:
      "Sí, muchos de nuestros programas tienen reconocimiento y certificación internacional, lo que permite a nuestros graduados trabajar en diferentes países.",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Estamos aquí para ayudarte</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Contacta con nosotros para resolver tus dudas, solicitar información o comenzar tu formación en belleza
            profesional.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <Card className="w-full max-w-xs text-center">
              <CardContent className="pt-6">
                <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-medium mb-2">Llámanos</h3>
                <p className="text-gray-600">+34 91 234 56 78</p>
              </CardContent>
            </Card>

            <Card className="w-full max-w-xs text-center">
              <CardContent className="pt-6">
                <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-medium mb-2">Escríbenos</h3>
                <p className="text-gray-600">info@academiadebelleza.com</p>
              </CardContent>
            </Card>

            <Card className="w-full max-w-xs text-center">
              <CardContent className="pt-6">
                <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-medium mb-2">Chat en vivo</h3>
                <p className="text-gray-600">Disponible de 9:00 a 20:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo lo antes posible. Estamos aquí
                para ayudarte con cualquier consulta que tengas.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">Nombre</Label>
                    <Input id="first-name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Apellidos</Label>
                    <Input id="last-name" placeholder="Tus apellidos" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="+34 XXX XXX XXX" />
                </div>

                <div className="space-y-2">
                  <Label>Estoy interesado/a en</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="courses">Información sobre cursos</SelectItem>
                      <SelectItem value="workshops">Información sobre talleres</SelectItem>
                      <SelectItem value="enrollment">Proceso de matrícula</SelectItem>
                      <SelectItem value="pricing">Precios y financiación</SelectItem>
                      <SelectItem value="other">Otros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="¿En qué podemos ayudarte?" rows={5} />
                </div>

                <div className="space-y-2">
                  <Label>¿Cómo prefieres que te contactemos?</Label>
                  <RadioGroup defaultValue="email" className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="contact-email" />
                      <Label htmlFor="contact-email">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="contact-phone" />
                      <Label htmlFor="contact-phone">Teléfono</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                      <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </div>

            <div>
              <Tabs defaultValue="locations" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="locations">Ubicaciones</TabsTrigger>
                  <TabsTrigger value="faq">Preguntas frecuentes</TabsTrigger>
                </TabsList>
                <TabsContent value="locations" className="space-y-8 mt-6">
                  {locations.map((location) => (
                    <Card key={location.id}>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={location.image || "/placeholder.svg"}
                              alt={location.name}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-3">{location.name}</h3>
                            <div className="space-y-3">
                              <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                                <span>{location.address}</span>
                              </div>
                              <div className="flex items-start">
                                <Phone className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                                <span>{location.phone}</span>
                              </div>
                              <div className="flex items-start">
                                <Mail className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                                <span>{location.email}</span>
                              </div>
                              <div className="flex items-start">
                                <Clock className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                                <span>{location.hours}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="faq" className="mt-6">
                  <div className="space-y-4">
                    {faqItems.map((faq, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-600">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-[16/9] md:aspect-auto md:h-96">
            <Map />
          </div>
        </div>
      </section>

      {/* Alternate Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Otras formas de contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Video className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cita virtual</h3>
                <p className="text-gray-600 mb-6">
                  Agenda una videollamada con nuestro equipo de asesores para recibir información personalizada.
                </p>
                <Button variant="outline" className="w-full">
                  Reservar cita
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visita guiada</h3>
                <p className="text-gray-600 mb-6">
                  Conoce nuestras instalaciones en una visita guiada por los distintos espacios y aulas.
                </p>
                <Button variant="outline" className="w-full">
                  Solicitar visita
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">WhatsApp Business</h3>
                <p className="text-gray-600 mb-6">
                  Contáctanos a través de WhatsApp para una comunicación rápida y eficiente.
                </p>
                <Button variant="outline" className="w-full">
                  Iniciar chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Suscríbete a nuestro boletín</h2>
          <p className="text-gray-700 mb-8">
            Recibe las últimas novedades, cursos y promociones especiales directamente en tu email
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <Input placeholder="Tu email" className="h-12 bg-white" />
            <Button className="h-12 bg-pink-600 hover:bg-pink-700 flex-shrink-0">Suscribirse</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
