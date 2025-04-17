import { Check, Users, Award, BookOpen, Sparkles, Quote } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Datos simulados
const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "50,000+", label: "Estudiantes formados" },
  { value: "95%", label: "Tasa de empleabilidad" },
  { value: "300+", label: "Cursos y talleres" },
]

const values = [
  {
    icon: Sparkles,
    title: "Excelencia",
    description:
      "Buscamos la excelencia en todo lo que hacemos, desde la calidad de nuestros cursos hasta el servicio al estudiante.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description: "Creemos en el poder de una comunidad unida para crecer juntos y apoyarnos mutuamente.",
  },
  {
    icon: BookOpen,
    title: "Innovación",
    description:
      "Nos adaptamos constantemente a las nuevas tendencias y tecnologías para ofrecer una formación de vanguardia.",
  },
  {
    icon: Award,
    title: "Profesionalidad",
    description:
      "Mantenemos los más altos estándares éticos y profesionales en nuestra enseñanza y prácticas comerciales.",
  },
]

const teamMembers = [
  {
    name: "Elena Rodríguez",
    role: "Fundadora y Directora",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Con más de 15 años de experiencia en la industria de la belleza, Elena fundó la academia con la visión de transformar la educación en el sector.",
  },
  {
    name: "Carlos Martínez",
    role: "Director Académico",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Experto en pedagogía y con una extensa carrera como formador, Carlos diseña planes de estudio innovadores y efectivos.",
  },
  {
    name: "Laura Sánchez",
    role: "Directora de Innovación",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Especialista en tendencias y nuevas tecnologías aplicadas a la belleza, Laura lidera los proyectos de investigación y desarrollo.",
  },
  {
    name: "Miguel Torres",
    role: "Director de Relaciones Profesionales",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Con una amplia red de contactos en la industria, Miguel conecta a nuestros estudiantes con las mejores oportunidades laborales.",
  },
]

const historyMilestones = [
  {
    year: 2015,
    title: "Fundación",
    description: "Nuestra academia abre sus puertas con solo 3 cursos y 50 estudiantes en un pequeño local.",
  },
  {
    year: 2017,
    title: "Primera expansión",
    description: "Nos trasladamos a instalaciones más amplias y ampliamos nuestra oferta a 15 cursos especializados.",
  },
  {
    year: 2019,
    title: "Lanzamiento online",
    description: "Creamos nuestra plataforma de formación online para llegar a estudiantes de todo el país.",
  },
  {
    year: 2020,
    title: "Certificación internacional",
    description:
      "Conseguimos certificación internacional para nuestros programas, permitiendo a nuestros estudiantes trabajar globalmente.",
  },
  {
    year: 2022,
    title: "Centro de innovación",
    description: "Inauguramos nuestro centro de investigación e innovación en técnicas de belleza.",
  },
  {
    year: 2024,
    title: "Actualidad",
    description:
      "Consolidados como líderes del sector con presencia internacional y más de 50,000 estudiantes formados.",
  },
]

const testimonials = [
  {
    quote:
      "Lo que más valoro de esta academia es su enfoque práctico y cómo mantienen sus programas actualizados con las últimas tendencias del sector.",
    author: "María González",
    role: "Graduada 2020, ahora propietaria de su propio salón",
  },
  {
    quote:
      "El nivel de los instructores es excepcional. Son profesionales activos que comparten conocimientos actuales y relevantes para el mercado real.",
    author: "Javier López",
    role: "Graduado 2021, maquillador para producciones de TV",
  },
  {
    quote:
      "La comunidad que han creado es increíble. Años después de graduarme, sigo conectada y aprendiendo de otros profesionales.",
    author: "Ana Martínez",
    role: "Graduada 2019, especialista en colorimetría",
  },
]

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Transformando la educación en belleza</h1>
            <p className="text-xl text-gray-700 mb-8">
              Somos una academia comprometida con la excelencia y la innovación en la formación de profesionales del
              sector de la belleza.
            </p>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Conoce nuestros programas
            </Button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="/placeholder.svg?height=600&width=800" alt="Nuestro equipo" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="/placeholder.svg?height=600&width=800" alt="Nuestra misión" className="w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra misión y visión</h2>
              <p className="text-gray-600 mb-6">
                Nuestra misión es transformar la educación en el sector de la belleza, proporcionando una formación
                integral que combina habilidades técnicas, conocimientos teóricos y desarrollo profesional.
              </p>
              <p className="text-gray-600 mb-6">
                Aspiramos a ser reconocidos globalmente como la institución educativa líder en formación de
                profesionales de la belleza, destacando por la innovación, la calidad y el impacto positivo en la
                industria.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Formación integral y práctica</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Instructores activos en la industria</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Actualización constante de contenidos</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Conexión directa con oportunidades laborales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estos son los principios que guían nuestras decisiones y acciones cada día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro equipo directivo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Profesionales con amplia experiencia en la industria y pasión por la educación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-pink-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra historia</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Un viaje de crecimiento y evolución constante</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-pink-200"></div>

            <div className="space-y-12">
              {historyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} md:justify-between`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 !== 0 && "md:order-2"}`}>
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="font-bold text-pink-600 text-2xl mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-pink-600 w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lo que dicen nuestros graduados</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Testimonios de profesionales que han transformado su carrera con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white/70 backdrop-blur">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-pink-200 mb-4" />
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Reconocimientos y certificaciones</h2>
              <p className="text-gray-600 mb-6">
                Nuestros programas y metodología cuentan con el respaldo de las principales organizaciones del sector,
                garantizando la calidad y validez de nuestra formación.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Certificación internacional en formación profesional</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Premio a la innovación educativa 2023</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Reconocimiento a la calidad académica</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-pink-600 mr-3 mt-0.5" />
                  <span>Miembros de la Asociación Internacional de Escuelas de Belleza</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-100 p-6 rounded-lg flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=120&width=200&text=Certificación${i}`}
                    alt={`Certificación ${i}`}
                    className="max-h-24"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Quieres formar parte de nuestra historia?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Descubre cómo nuestros programas pueden impulsar tu carrera profesional en el sector de la belleza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
              Ver programas formativos
            </Button>
            <Button variant="outline" size="lg">
              Solicitar información
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
