import Image from "next/image"
import { Star, Clock, Award, Users, Heart, Sparkles, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import TestimonialCarousel from "@/components/testimonios"
import FAQSection from "@/components/faq-section"


export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFCFA]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#8E3A59]">
                    Descubrí tu mejor versión
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Aprendé a transformar vidas, empezando por la tuya. Cursos profesionales de estilismo, maquillaje y
                    empoderamiento femenino.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                    Comenzá hoy
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#8E3A59]/10">
                    Ver cursos
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/profesional.jpg?height=400&width=500"
                    width={500}
                    height={400}
                    alt="Mujer profesional en un entorno estético"
                    className="h-full w-full object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8E3A59]/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#F3D9E2] px-3 py-1 text-sm font-medium text-[#8E3A59]">
                  Cursos Destacados
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8E3A59]">
                  Transformá tu pasión en profesión
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubrí nuestros cursos diseñados para potenciar tu talento y convertirte en una profesional del
                  estilismo y la belleza.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg border-[#F3D9E2] bg-white">
                  <div className="relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      width={400}
                      height={225}
                      alt={course.title}
                      className="aspect-video object-cover"
                    />
                    <div className="absolute bottom-2 right-2 rounded-full bg-white px-2 py-1 text-xs font-medium text-[#8E3A59]">
                      {course.category}
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-[#8E3A59]">{course.title}</h3>
                      <p className="text-sm text-gray-500">Por {course.instructor}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < course.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"
                            }`}
                          />
                        ))}
                      <span className="ml-1 text-sm text-gray-500">({course.reviews})</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">{course.level}</div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button
                      className="w-full bg-white text-[#8E3A59] border border-[#8E3A59] hover:bg-[#8E3A59] hover:text-white transition-colors"
                      variant="outline"
                    >
                      Ver detalles
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button variant="outline" size="lg" className="border-[#8E3A59] text-[#8E3A59] hover:bg-[#8E3A59]/10">
                Ver todos los cursos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-[#FFF5F8]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8E3A59]">
                  ¿Por qué elegirnos?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubrí los beneficios que nos diferencian y hacen de nuestra academia la mejor opción para tu
                  desarrollo profesional.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3D9E2]">
                  <Sparkles className="h-8 w-8 text-[#8E3A59]" />
                </div>
                <h3 className="text-xl font-bold text-[#8E3A59]">Clases prácticas</h3>
                <p className="text-gray-600">
                  Aprende con ejercicios prácticos y proyectos reales que potenciarán tus habilidades.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3D9E2]">
                  <Award className="h-8 w-8 text-[#8E3A59]" />
                </div>
                <h3 className="text-xl font-bold text-[#8E3A59]">Certificación profesional</h3>
                <p className="text-gray-600">
                  Obtén certificados reconocidos que validarán tus conocimientos en el mercado laboral.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3D9E2]">
                  <Users className="h-8 w-8 text-[#8E3A59]" />
                </div>
                <h3 className="text-xl font-bold text-[#8E3A59]">Comunidad exclusiva</h3>
                <p className="text-gray-600">
                  Forma parte de una comunidad de mujeres que comparten tus mismos intereses y pasiones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3D9E2]">
                  <Heart className="h-8 w-8 text-[#8E3A59]" />
                </div>
                <h3 className="text-xl font-bold text-[#8E3A59]">Mentorías personalizadas</h3>
                <p className="text-gray-600">
                  Recibe asesoramiento personalizado de expertas que te guiarán en tu camino profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#F3D9E2] px-3 py-1 text-sm font-medium text-[#8E3A59]">
                  Testimonios
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8E3A59]">
                  Historias de transformación
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las experiencias de mujeres que han transformado sus vidas a través de nuestros cursos.
                </p>
              </div>
            </div>
            <div className="mt-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* Empowerment Block */}
        <section className="py-16 md:py-24 bg-[#8E3A59] text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Viví de lo que te apasiona
                  </h2>
                  <p className="max-w-[600px] text-white/80 md:text-xl">
                    Es momento de dar el primer paso hacia tu independencia profesional y convertirte en la mejor
                    versión de ti misma.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-[#8E3A59] hover:bg-gray-100">
                    Inscribirme ahora
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/images/mujer-empoderada.jpg?height=300&width=400"
                    width={400}
                    height={300}
                    alt="Mujer empoderada"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8E3A59]/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-[#F3D9E2] px-3 py-1 text-sm font-medium text-[#8E3A59]">
                  Talleres Exclusivos
                </div>
                <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8E3A59]">
                  Experiencias prácticas y enriquecedoras
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Participa en nuestros talleres exclusivos y aprende directamente de las mejores profesionales del
                  sector.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workshops.map((workshop, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg border-[#F3D9E2] bg-white">
                  <div className="relative">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      width={400}
                      height={225}
                      alt={workshop.title}
                      className="aspect-video object-cover"
                    />
                    <div className="absolute top-2 left-2 rounded-full bg-[#8E3A59] px-3 py-1 text-xs font-medium text-white">
                      {workshop.date}
                    </div>
                  </div>
                  <CardHeader className="p-4">
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-[#8E3A59]">{workshop.title}</h3>
                      <p className="text-sm text-gray-500">Con {workshop.instructor}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600">{workshop.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span>{workshop.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white">Reservar plaza</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      

      {/* FAQ Section */}
      
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

const courses = [
  {
    title: "Maquillaje Profesional",
    instructor: "Gisela Echavarría",
    duration: "8 semanas",
    level: "Principiante a Avanzado",
    rating: 5,
    reviews: 128,
    image: "/images/maquillaje.jpg?height=225&width=400",
    category: "Maquillaje",
  },
  {
    title: "Estilismo y Asesoría de Imagen",
    instructor: "Gisela Echavarría",
    duration: "10 semanas",
    level: "Intermedio",
    rating: 4,
    reviews: 95,
    image: "/images/estilismo.jpg?height=225&width=400",
    category: "Estilismo",
  },
  {
    title: "Skincare Avanzado",
    instructor: "Gisela Echavarría",
    duration: "6 semanas",
    level: "Todos los niveles",
    rating: 5,
    reviews: 112,
    image: "/images/skincare.jpg?height=225&width=400",
    category: "Cuidado Personal",
  },
  {
    title: "Nail Art y Manicura Profesional",
    instructor: "Gisela Echavarría",
    duration: "7 semanas",
    level: "Principiante a Intermedio",
    rating: 4,
    reviews: 87,
    image: "/images/unas.jpg?height=225&width=400",
    category: "Nails",
  },
]

const workshops = [
  {
    title: "Masterclass de Maquillaje para Eventos",
    instructor: "Gisela Echavarría",
    date: "15 Mayo",
    duration: "3 horas",
    description: "Aprende técnicas avanzadas de maquillaje para eventos especiales y sesiones fotográficas.",
    image: "/images/ejecutivo.webp?height=225&width=400",
  },
  {
    title: "Taller de Automaquillaje",
    instructor: "Gisela Echavarría",
    date: "22 Mayo",
    duration: "4 horas",
    description: "Descubre cómo realzar tu belleza natural con técnicas sencillas de automaquillaje diario.",
    image: "/images/automaquillaje.jpg?height=225&width=400",
  },
  {
    title: "Workshop de Color y Estilo Personal",
    instructor: "Gisela Echavarría",
    date: "29 Mayo",
    duration: "5 horas",
    description: "Identifica tu paleta de colores y el estilo que mejor se adapta a tu personalidad y físico.",
    image: "/images/color.jpg?height=225&width=400",
  },
]
