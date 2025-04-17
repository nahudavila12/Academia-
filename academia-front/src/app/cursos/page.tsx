import Link from "next/link"
import { Search, Filter, ChevronRight, Star, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Datos simulados para los cursos
const courseCategories = ["Maquillaje", "Peinado", "Uñas", "Estética", "Tratamientos", "Cosmetología"]

const featuredCourses = [
  {
    id: 1,
    title: "Maquillaje Profesional Avanzado",
    instructor: "Maria González",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    students: 1245,
    duration: "16 horas",
    level: "Avanzado",
    price: 129.99,
    category: "Maquillaje",
  },
  {
    id: 2,
    title: "Técnicas de Colorimetría",
    instructor: "Carlos Martínez",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    students: 983,
    duration: "12 horas",
    level: "Intermedio",
    price: 99.99,
    category: "Peinado",
  },
  {
    id: 3,
    title: "Nail Art Contemporáneo",
    instructor: "Laura Sánchez",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    students: 756,
    duration: "8 horas",
    level: "Todos los niveles",
    price: 79.99,
    category: "Uñas",
  },
  {
    id: 4,
    title: "Tratamientos Faciales Rejuvenecedores",
    instructor: "Ana Gómez",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    students: 1089,
    duration: "10 horas",
    level: "Intermedio",
    price: 119.99,
    category: "Estética",
  },
  {
    id: 5,
    title: "Fundamentos de Cosmetología",
    instructor: "Roberto Díaz",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    students: 1578,
    duration: "20 horas",
    level: "Principiante",
    price: 149.99,
    category: "Cosmetología",
  },
  {
    id: 6,
    title: "Peinados para Eventos Especiales",
    instructor: "Elena Pérez",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    students: 865,
    duration: "6 horas",
    level: "Intermedio",
    price: 69.99,
    category: "Peinado",
  },
]

const testimonials = [
  {
    name: "Sofía Rodríguez",
    image: "/placeholder.svg?height=100&width=100",
    course: "Maquillaje Profesional Avanzado",
    content:
      "Este curso transformó mi carrera profesional. Las técnicas que aprendí me permitieron trabajar en producciones de televisión.",
  },
  {
    name: "Miguel Torres",
    image: "/placeholder.svg?height=100&width=100",
    course: "Técnicas de Colorimetría",
    content: "Increíble la profundidad del contenido. Ahora puedo ofrecer servicios más especializados en mi salón.",
  },
  {
    name: "Carmen Jiménez",
    image: "/placeholder.svg?height=100&width=100",
    course: "Nail Art Contemporáneo",
    content:
      "Mis clientes están encantados con los nuevos diseños que puedo crear gracias a lo aprendido en este curso.",
  },
]

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubre nuestros cursos de belleza profesional
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Desarrolla tus habilidades y alcanza nuevas oportunidades profesionales con nuestra amplia selección de
            cursos.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Buscar cursos..." className="pl-10 h-12 w-full bg-white" />
            </div>
            <Button variant="default" size="lg" className="bg-pink-600 hover:bg-pink-700">
              Buscar
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explora por categoría</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {courseCategories.map((category, index) => (
              <Link
                href={`/cursos/categoria/${category.toLowerCase()}`}
                key={index}
                className="bg-gray-50 hover:bg-pink-50 transition-colors border border-gray-200 rounded-lg p-6 text-center"
              >
                <div className="font-medium text-gray-900">{category}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Cursos destacados</h2>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
              <Link href="/cursos/todos" className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
                Ver todos
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-pink-600">{course.category}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>Por {course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="flex items-center text-amber-500 mb-3">
                    <Star className="fill-current h-4 w-4 mr-1" />
                    <span className="font-medium">{course.rating}</span>
                    <span className="text-gray-500 text-sm ml-2">({course.students} estudiantes)</span>
                  </div>
                  <div className="flex gap-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div>{course.level}</div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center pt-0">
                  <div className="font-bold text-lg">${course.price}</div>
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    Ver curso
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Lo que dicen nuestros estudiantes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">¿Listo para comenzar tu formación profesional?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Únete a más de 5,000 estudiantes que ya han transformado su carrera en la industria de la belleza
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              Ver todos los cursos
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
