import Link from "next/link"
import { Calendar, MapPin, Clock, Users, ChevronRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Datos simulados para los talleres
const upcomingWorkshops = [
  {
    id: 1,
    title: "Masterclass de Técnicas de Contorno",
    instructor: "María González",
    image: "/placeholder.svg?height=400&width=600",
    date: "15 de mayo, 2025",
    time: "10:00 - 14:00",
    location: "Centro de Belleza Creativa, Madrid",
    price: 89.99,
    spots: 15,
    spotsLeft: 3,
    category: "Maquillaje",
  },
  {
    id: 2,
    title: "Workshop de Trenzas Creativas",
    instructor: "Carlos Martínez",
    image: "/placeholder.svg?height=400&width=600",
    date: "22 de mayo, 2025",
    time: "16:00 - 19:00",
    location: "Academia de Peluquería Moderna, Barcelona",
    price: 69.99,
    spots: 20,
    spotsLeft: 8,
    category: "Peinado",
  },
  {
    id: 3,
    title: "Taller de Decoración de Uñas 3D",
    instructor: "Laura Sánchez",
    image: "/placeholder.svg?height=400&width=600",
    date: "30 de mayo, 2025",
    time: "15:00 - 18:00",
    location: "Estudio de Belleza Inovador, Valencia",
    price: 79.99,
    spots: 12,
    spotsLeft: 2,
    category: "Uñas",
  },
  {
    id: 4,
    title: "Masterclass de Maquillaje Editorial",
    instructor: "Ana Gómez",
    image: "/placeholder.svg?height=400&width=600",
    date: "5 de junio, 2025",
    time: "11:00 - 16:00",
    location: "Centro de Moda y Estilo, Sevilla",
    price: 129.99,
    spots: 10,
    spotsLeft: 4,
    category: "Maquillaje",
  },
]

const workshopCategories = ["Todos", "Maquillaje", "Peinado", "Uñas", "Estética", "Tratamientos", "Cosmetología"]

const instructors = [
  {
    id: 1,
    name: "María González",
    specialty: "Maquillaje Profesional",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Maquilladora profesional con más de 10 años de experiencia en moda y televisión",
  },
  {
    id: 2,
    name: "Carlos Martínez",
    specialty: "Colorimetría y Peinado",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista en tendencias de coloración y técnicas de peinado de vanguardia",
  },
  {
    id: 3,
    name: "Laura Sánchez",
    specialty: "Nail Art Avanzado",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Artista de uñas reconocida internacionalmente, ganadora de múltiples premios",
  },
]

const benefits = [
  "Aprende directamente de los mejores profesionales del sector",
  "Práctica intensiva en grupos reducidos",
  "Materiales de alta calidad incluidos",
  "Certificado oficial al finalizar",
  "Networking con otros profesionales",
  "Soporte post-taller para resolver dudas",
]

export default function WorkshopsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-100 to-pink-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-pink-600">Experiencia práctica intensiva</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Talleres presenciales con los mejores profesionales
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Domina técnicas avanzadas en sesiones prácticas y lleva tus habilidades al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Ver próximos talleres
            </Button>
            <Button variant="outline" size="lg">
              Solicitar taller privado
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Workshop */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Masterclass de Maquillaje Profesional"
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <Badge className="mb-4 bg-pink-600">Destacado</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Masterclass Intensivo de Maquillaje para Editorial
              </h2>
              <p className="text-gray-600 mb-6">
                Un taller exclusivo de 2 días donde aprenderás las técnicas más avanzadas de maquillaje editorial de la
                mano de Ana López, maquilladora con experiencia en las principales revistas de moda internacionales.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-pink-600 mr-3" />
                  <span>18-19 de mayo, 2025</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-pink-600 mr-3" />
                  <span>10:00 - 17:00 (ambos días)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-pink-600 mr-3" />
                  <span>Estudio Creativo de Moda, Madrid</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-pink-600 mr-3" />
                  <span>Plazas limitadas: 8/12 disponibles</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div className="text-2xl font-bold">€249.99</div>
                <Badge variant="outline" className="text-amber-600 border-amber-300 bg-amber-50">
                  Early bird: -15% (Termina en 5 días)
                </Badge>
              </div>

              <Button className="w-full bg-pink-600 hover:bg-pink-700" size="lg">
                Reservar plaza
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Workshops */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Próximos talleres</h2>
              <p className="text-gray-600 mt-2">Asegura tu plaza en nuestros talleres más solicitados</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {workshopCategories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-pink-600 hover:bg-pink-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingWorkshops.map((workshop) => (
              <Card
                key={workshop.id}
                className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/2] relative overflow-hidden">
                  <img
                    src={workshop.image || "/placeholder.svg"}
                    alt={workshop.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-pink-600">{workshop.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{workshop.title}</CardTitle>
                  <CardDescription>Impartido por {workshop.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>
                      {workshop.spotsLeft === 1
                        ? "¡Última plaza disponible!"
                        : `${workshop.spotsLeft} plazas disponibles de ${workshop.spots}`}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="font-bold text-lg">€{workshop.price}</div>
                  <Button className="bg-pink-600 hover:bg-pink-700">Reservar</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/talleres/calendario"
              className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center"
            >
              Ver calendario completo
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Aprende con los mejores profesionales</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="text-center">
                <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                  <img
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
                <p className="text-pink-600 mb-2">{instructor.specialty}</p>
                <p className="text-gray-600">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Por qué elegir nuestros talleres?</h2>
              <p className="text-gray-700 mb-8">
                Nuestros talleres presenciales ofrecen una experiencia de aprendizaje única, práctica y personalizada
                que te permitirá dominar técnicas avanzadas en tiempo récord.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=600&width=800" alt="Taller en acción" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Request Custom Workshop */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Necesitas un taller personalizado?</h2>
          <p className="text-gray-600 mb-8">
            Organizamos talleres privados para empresas, equipos y grupos. Personaliza el contenido según tus
            necesidades específicas.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
            Solicitar información
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
