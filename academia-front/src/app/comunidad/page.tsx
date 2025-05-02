import Link from "next/link"
import {
  MessageSquare,
  Users,
  Calendar,
  Trophy,
  Star,
  ArrowRight,
  Heart,
  MessagesSquare,
  ImageIcon,
  UserPlus,
  Clock,
  MapPin,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Datos
const communityMembers = [
  {
    id: 1,
    name: "Laura García",
    role: "Maquilladora Profesional",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Experto",
    contributions: 87,
    joined: "Hace 2 años",
  },
  {
    id: 2,
    name: "Miguel Torres",
    role: "Estilista",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Avanzado",
    contributions: 54,
    joined: "Hace 1 año",
  },
  {
    id: 3,
    name: "Carmen Pérez",
    role: "Esteticista",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Intermedio",
    contributions: 32,
    joined: "Hace 8 meses",
  },
  {
    id: 4,
    name: "Antonio Ruiz",
    role: "Nail Artist",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Experto",
    contributions: 76,
    joined: "Hace 1 año",
  },
  {
    id: 5,
    name: "Sofía Martínez",
    role: "Especialista en Maquillaje",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Avanzado",
    contributions: 41,
    joined: "Hace 6 meses",
  },
  {
    id: 6,
    name: "Pablo Sánchez",
    role: "Peluquero",
    avatar: "/placeholder.svg?height=100&width=100",
    level: "Intermedio",
    contributions: 23,
    joined: "Hace 3 meses",
  },
]

const discussions = [
  {
    id: 1,
    title: "Mejores marcas de maquillaje para pieles sensibles",
    author: "Laura García",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "Hace 2 días",
    comments: 24,
    likes: 47,
    category: "Maquillaje",
    preview:
      "He estado buscando nuevas marcas que sean buenas para pieles sensibles y quería compartir algunas recomendaciones...",
  },
  {
    id: 2,
    title: "¿Cómo mantener un color de cabello vibrante por más tiempo?",
    author: "Miguel Torres",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "Hace 5 días",
    comments: 18,
    likes: 32,
    category: "Peinado",
    preview:
      "Últimamente he tenido problemas para mantener el color en el cabello de mis clientes, especialmente con los tonos rojos...",
  },
  {
    id: 3,
    title: "Técnicas avanzadas de nail art: Degradados perfectos",
    author: "Antonio Ruiz",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    date: "Hace 1 semana",
    comments: 36,
    likes: 61,
    category: "Uñas",
    preview: "Quería compartir algunas técnicas que he desarrollado para crear degradados impecables...",
  },
]

const events = [
  {
    id: 1,
    title: "Encuentro de Profesionales del Maquillaje",
    date: "15 de junio, 2025",
    time: "18:00 - 21:00",
    location: "Espacio Creativo Gisela Echavarria Hub, Madrid",
    attendees: 45,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Networking: Nuevas Tendencias en Cosmetología",
    date: "22 de junio, 2025",
    time: "19:00 - 22:00",
    location: "Centro de Innovación Estética Gisela Echavarria, Barcelona",
    attendees: 32,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Charla: El futuro de la industria de la belleza",
    date: "8 de julio, 2025",
    time: "17:00 - 19:00",
    location: "Academia de Belleza Profesional Gisela Echavarria, Valencia",
    attendees: 28,
    image: "/placeholder.svg?height=200&width=400",
  },
]

const achievements = [
  {
    title: "Top Contributor",
    description: "Reconocimiento a los miembros más activos de nuestra comunidad",
    icon: Trophy,
    winners: ["Laura García", "Antonio Ruiz", "Elena Martínez"],
  },
  {
    title: "Mentor Destacado",
    description: "Miembros que han ayudado a otros profesionales a crecer",
    icon: Star,
    winners: ["Miguel Torres", "Sofía Martínez", "Carlos Vega"],
  },
  {
    title: "Innovación Creativa",
    description: "Reconocimiento a las ideas más originales compartidas",
    icon: ImageIcon,
    winners: ["Carmen Pérez", "Pablo Sánchez", "Ana López"],
  },
]

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-pink-600">Crece junto a profesionales</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Únete a nuestra comunidad de profesionales de belleza
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Conecta, aprende y comparte con otros profesionales del sector. Juntos crecemos más rápido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Unirse a la comunidad
            </Button>
            <Button variant="outline" size="lg">
              Explorar foros
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">5,000+</div>
              <div className="text-gray-600">Miembros activos</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">12,000+</div>
              <div className="text-gray-600">Conversaciones</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <div className="text-gray-600">Eventos realizados</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Qué encontrarás en nuestra comunidad?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Un espacio diseñado para profesionales de la belleza donde podrás crecer, inspirarte y conectar con otros
              expertos del sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <MessageSquare className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Foros de discusión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Participa en conversaciones sobre técnicas, productos, tendencias y comparte tus conocimientos con la
                  comunidad.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/comunidad/foros" className="text-pink-600 hover:text-pink-700 flex items-center">
                  Ver foros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Eventos y networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Asiste a eventos exclusivos, tanto online como presenciales, para conectar con otros profesionales del
                  sector.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/comunidad/eventos" className="text-pink-600 hover:text-pink-700 flex items-center">
                  Ver eventos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Colaboraciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Encuentra a otros profesionales para colaborar en proyectos creativos, sesiones de fotos o eventos
                  especiales.
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/comunidad/colaboraciones" className="text-pink-600 hover:text-pink-700 flex items-center">
                  Buscar colaboradores
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Discussions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Conversaciones recientes</h2>
              <p className="text-gray-600 mt-2">Únete a las discusiones más activas de nuestra comunidad</p>
            </div>
            <Link href="/comunidad/foros" className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
              Ver todos los temas
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={discussion.authorAvatar || "/placeholder.svg"} alt={discussion.author} />
                        <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <Link
                          href={`/comunidad/foros/${discussion.id}`}
                          className="text-xl font-medium text-gray-900 hover:text-pink-600 mb-1 block"
                        >
                          {discussion.title}
                        </Link>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <span>{discussion.author}</span>
                          <span className="mx-2">•</span>
                          <span>{discussion.date}</span>
                          <Badge className="ml-3 bg-pink-100 text-pink-800 hover:bg-pink-200">
                            {discussion.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{discussion.preview}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 space-x-6">
                    <div className="flex items-center text-gray-500">
                      <MessagesSquare className="h-4 w-4 mr-1" />
                      <span>{discussion.comments} comentarios</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{discussion.likes} me gusta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Miembros destacados</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conoce a algunos de los profesionales que comparten su conocimiento y experiencia en nuestra comunidad
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {communityMembers.map((member) => (
              <div key={member.id} className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-3">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="font-medium text-gray-900">{member.name}</h4>
                <p className="text-sm text-pink-600 mb-1">{member.role}</p>
                <Badge variant="outline" className="text-xs">
                  {member.level}
                </Badge>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-pink-600 hover:bg-pink-700">
              <UserPlus className="mr-2 h-4 w-4" />
              Ver todos los miembros
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Próximos eventos</h2>
              <p className="text-gray-600 mt-2">Encuentros y actividades para conectar con otros profesionales</p>
            </div>
            <Link href="/comunidad/eventos" className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
              Ver calendario completo
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} asistentes</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">Inscribirse</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reconocimientos de la comunidad</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Celebramos y destacamos las contribuciones más valiosas de nuestros miembros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-2">
                    <achievement.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <CardTitle>{achievement.title}</CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievement.winners.map((winner, i) => (
                      <li key={i} className="font-medium">
                        {winner}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Listo para formar parte de nuestra comunidad?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Únete a miles de profesionales de la belleza que comparten conocimientos, experiencias y oportunidades cada
            día
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            Crear una cuenta gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
