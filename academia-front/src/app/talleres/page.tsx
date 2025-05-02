import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users } from "lucide-react"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Talleres | Plataforma Educativa de Belleza",
  description:
    "Participa en nuestros talleres prácticos e intensivos de belleza, impartidos por expertos de la industria.",
}

export default function TalleresPage() {
  // Datos de ejemplo para los talleres
  const talleres = [
    {
      id: 1,
      titulo: "Técnicas Avanzadas de Maquillaje Social",
      descripcion: "Taller intensivo de un día donde aprenderás las últimas técnicas de maquillaje para eventos sociales",
      imagen: "/placeholder.svg?height=250&width=400",
      fecha: "15 de Junio, 2025",
      hora: "10:00 AM - 5:00 PM",
      ubicacion: "Centro de Belleza Profesional, Madrid",
      precio: 149.99,
      plazas: 15,
      plazasDisponibles: 5,
      instructor: "Lucía Fernández",
      modalidad: "Presencial",
      nivel: "Intermedio"
    },
    {
      id: 2,
      titulo: "Masterclass de Colorimetría Personalizada",
      descripcion: "Aprende a seleccionar los colores perfectos para cada cliente según su tono de piel y características",
      imagen: "/placeholder.svg?height=250&width=400",
      fecha: "22 de Junio, 2025",
      hora: "11:00 AM - 4:00 PM",
      ubicacion: "Online (Zoom)",
      precio: 99.99,
      plazas: 30,
      plazasDisponibles: 12,
      instructor: "Roberto Sánchez",
      modalidad: "Online",
      nivel: "Avanzado"
    },
    {
      id: 3,
      titulo: "Técnicas de Nail Art 3D",
      descripcion: "Taller práctico donde aprenderás a crear diseños tridimensionales en uñas",
      imagen: "/placeholder.svg?height=250&width=400",
      fecha: "5 de Julio, 2025",
      hora: "9:00 AM - 2:00 PM",
      ubicacion: "Academia de Belleza Elite, Barcelona",
      precio: 129.99,
      plazas: 12,
      plazasDisponibles: 3,
      instructor: "Marina López",
      modalidad: "Presencial",
      nivel: "Intermedio"
    },
    {
      id: 4,
      titulo: "Peinados de Vanguardia para Editorial",
      descripcion: "Descubre las técnicas más innovadoras para crear peinados de impacto para sesiones editoriales",
      imagen: "/placeholder.svg?height=250&width=400",
      fecha: "12 de Julio, 2025",
      hora: "10:00 AM - 6:00 PM",
      ubicacion: "Estudio Creativo, Valencia",
      precio: 179.99,
      plazas: 10,
      plazasDisponibles: 4,
      instructor: "Carlos Martínez",
      modalidad: "Presencial",
      nivel: "Avanzado"
    },
    {
      id: 5,
      titulo: "Maquillaje para Pieles Maduras",
      descripcion: "Aprende técnicas específicas para realzar la belleza natural en pieles maduras",
      imagen: "/placeholder.svg?height=250&width=400",
      fecha: "18 de Julio, 2025",
      hora: "4:00 PM - 8:00 PM",
      ubicacion: "Online (Zoom)",
      precio: 89.99,
      plazas: 25,
      plazasDisponibles: 15,
      instructor: "Elena Gómez",
      modalidad: "Online",
      nivel: "Todos los niveles"
    },
    {
      id: 6,
      titulo: "Workshop de Cejas Perfectas",
      descripcion: "Taller intensivo sobre diseño, perfilado y tinte de cejas para un resultado profesional",
      imagen: "/placeholder.svg?height=250&width=400",
      fecha: "25 de Julio, 2025",
      hora: "9:00 AM - 1:00 PM",
      ubicacion: "Centro de Formación Gisela Echavarria Pro, Sevilla",
      precio: 109.99,
      plazas: 15,
      plazasDisponibles: 7,
      instructor: "Ana Rodríguez",
      modalidad: "Presencial",
      nivel: "Principiante"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Talleres Prácticos e Intensivos</h1>
              <p className="text-lg text-gray-700 mb-8">
                Aprende directamente de los mejores profesionales en sesiones prácticas y dinámicas
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Ver Calendario Completo
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Talleres Online
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Filtros */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full">Todos los talleres</Button>
              <Button variant="outline" className="rounded-full">Presenciales</Button>
              <Button variant="outline" className="rounded-full">Online</Button>
              <Button variant="outline" className="rounded-full">Maquillaje</Button>
              <Button variant="outline" className="rounded-full">Cabello</Button>
              <Button variant="outline" className="rounded-full">Uñas</Button>
              <Button variant="outline" className="rounded-full">Próximos 30 días</Button>
            </div>
          </div>
        </section>

        {/* Talleres Destacados */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Próximos Talleres</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {talleres.map((taller) => (
                <Card key={taller.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={taller.imagen || "/placeholder.svg"} 
                      alt={taller.titulo} 
                      className="w-full h-52 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className={`${taller.modalidad === 'Online' ? 'bg-green-600' : 'bg-purple-600'}`}>
                        {taller.modalidad}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-pink-600">{taller.nivel}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{taller.titulo}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Impartido por {taller.instructor}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">{taller.descripcion}</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <Calendar className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                        <span>{taller.fecha}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                        <span>{taller.hora}</span>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                        <span>{taller.ubicacion}</span>
                      </div>
                      <div className="flex items-start">
                        <Users className="h-5 w-5 mr-3 text-gray-500 flex-shrink-0" />
                        <span>
                          {taller.plazasDisponibles} plazas disponibles de {taller.plazas}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center border-t pt-4">
                    <div className="font-bold text-lg">${taller.precio}</div>
                    <Button className={`${taller.plazasDisponibles <= 3 ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}>
                      {taller.plazasDisponibles <= 3 ? '¡Últimas plazas!' : 'Reservar Plaza'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                Ver Todos los Talleres
              </Button>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir nuestros talleres?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  titulo: "Aprendizaje Práctico",
                  descripcion: "Nuestros talleres están diseñados para maximizar la práctica. Aprenderás haciendo, no solo observando.",
                  icono: "🔍"
                },
                {
                  titulo: "Grupos Reducidos",
                  descripcion: "Trabajamos con grupos pequeños para garantizar atención personalizada y resolver todas tus dudas.",
                  icono: "👥"
                },
                {
                  titulo: "Profesionales en Activo",
                  descripcion: "Todos nuestros instructores son profesionales que trabajan activamente en la industria.",
                  icono: "🌟"
                },
                {
                  titulo: "Materiales Incluidos",
                  descripcion: "No te preocupes por traer nada. Proporcionamos todos los materiales necesarios para el taller.",
                  icono: "🧰"
                },
                {
                  titulo: "Certificado de Participación",
                  descripcion: "Recibirás un certificado oficial que acredita tu participación en el taller.",
                  icono: "📜"
                },
                {
                  titulo: "Networking Profesional",
                  descripcion: "Conecta con otros profesionales y expande tu red de contactos en la industria.",
                  icono: "🤝"
                }
              ].map((beneficio, i) => (
                <Card key={i} className="text-center hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{beneficio.icono}</div>
                    <h3 className="text-xl font-semibold mb-3">{beneficio.titulo}</h3>
                    <p className="text-gray-700">{beneficio.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Experiencias de Participantes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  nombre: "Laura Martínez",
                  taller: "Técnicas Avanzadas de Maquillaje Social",
                  testimonio: "Una experiencia increíble. En solo un día aprendí técnicas que habría tardado meses en descubrir por mi cuenta. La instructora fue muy clara y paciente con todos.",
                  imagen: "/placeholder.svg?height=80&width=80"
                },
                {
                  nombre: "Miguel Sánchez",
                  taller: "Masterclass de Colorimetría",
                  testimonio: "A pesar de ser online, la interacción fue excelente. Pude resolver todas mis dudas y el material complementario es muy completo. Totalmente recomendable.",
                  imagen: "/placeholder.svg?height=80&width=80"
                },
                {
                  nombre: "Carmen Rodríguez",
                  taller: "Técnicas de Nail Art 3D",
                  testimonio: "El taller superó mis expectativas. Aprendí muchísimo y ahora puedo ofrecer diseños innovadores a mis clientes.",
                  imagen: "/placeholder.svg?height=80&width=80"
                },
                {
                  nombre: "Javier Pérez",
                  taller: "Peinados de Vanguardia para Editorial",
                  testimonio: "Un taller muy completo y práctico. El instructor compartió muchos trucos y consejos que me han ayudado a mejorar mi técnica. ¡Muy recomendable!",
                  imagen: "/placeholder.svg?height=80&width=80"
                }
              ].map((testimonio, i) => (
                <Card key={i} className="p-4">
                  <div className="flex items-center mb-4">
                    <img src={testimonio.imagen} alt={testimonio.nombre} className="rounded-full w-16 h-16 mr-4" />
                    <div>
                      <h3 className="font-semibold">{testimonio.nombre}</h3>
                      <p className="text-gray-500 text-sm">{testimonio.taller}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonio.testimonio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */ }
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                {
                  pregunta: "¿Qué materiales necesito llevar al taller?",
                  respuesta: "Todos los materiales necesarios para el taller serán proporcionados por nosotros. Solo necesitas traer tus ganas de aprender."
                },
                {
                  pregunta: "¿Puedo cancelar mi inscripción?",
                  respuesta: "Sí, puedes cancelar tu inscripción hasta 48 horas antes del inicio del taller para recibir un reembolso completo."
                },
                {
                  pregunta: "¿Recibiré un certificado al finalizar el taller?",
                  respuesta: "Sí, al finalizar el taller recibirás un certificado de participación que acredita tu formación."
                },
                {
                  pregunta: "¿Los talleres son solo para profesionales?",
                  respuesta: "No, nuestros talleres están abiertos a todos los niveles. Desde principiantes hasta profesionales que buscan actualizar sus conocimientos."
                }
              ].map((faq, i) => (
                <Card key={i} className="p-4">
                  <h3 className="font-semibold">{faq.pregunta}</h3>
                  <p className="text-gray-700">{faq.respuesta}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-white border-t">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500"> 2025 Gisela Echavarria.</p>
          </div>
        </footer>   
      </main>
    </div>
  )
}
              
