import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Users, Award, BookOpen, Briefcase, Heart } from "lucide-react"

// Datos del equipo
const teamMembers = [
  {
    id: 1,
    name: "Elena Rodríguez",
    role: "Fundadora y CEO",
    bio: "Con más de 15 años de experiencia en la industria de la belleza, Elena fundó la academia con la visión de transformar la educación en belleza y crear oportunidades para profesionales apasionados.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "Carlos Martínez",
    role: "Director Académico",
    bio: "Experto en pedagogía y con una extensa carrera como estilista internacional, Carlos diseña programas educativos innovadores que combinan teoría y práctica de manera efectiva.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Laura Gómez",
    role: "Directora de Maquillaje",
    bio: "Maquilladora de celebridades y con experiencia en producciones internacionales, Laura lidera el departamento de maquillaje y aporta las últimas tendencias globales.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Javier López",
    role: "Director de Colorimetría",
    bio: "Reconocido por sus técnicas innovadoras de color, Javier ha trabajado con las principales marcas de la industria y ahora comparte su conocimiento con nuestros estudiantes.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 5,
    name: "Ana Fernández",
    role: "Directora de Innovación",
    bio: "Especialista en tecnologías aplicadas a la belleza, Ana lidera la integración de herramientas digitales en nuestros programas educativos para una experiencia de aprendizaje moderna.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "Miguel Sánchez",
    role: "Director de Relaciones Corporativas",
    bio: "Con amplia experiencia en el sector empresarial, Miguel establece alianzas estratégicas con salones y marcas para ofrecer oportunidades laborales a nuestros graduados.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
]

// Datos de la historia
const historyMilestones = [
  {
    year: 2010,
    title: "Fundación",
    description:
      "Nuestra academia nace con la visión de transformar la educación en belleza, ofreciendo un enfoque innovador y práctico.",
  },
  {
    year: 2012,
    title: "Primera Sede",
    description:
      "Inauguramos nuestra primera sede en Madrid, con instalaciones de vanguardia y un equipo de instructores de élite.",
  },
  {
    year: 2015,
    title: "Expansión Nacional",
    description:
      "Abrimos nuevas sedes en Barcelona y Valencia, llevando nuestra metodología a más estudiantes en todo el país.",
  },
  {
    year: 2017,
    title: "Reconocimiento Internacional",
    description:
      "Recibimos el premio a la Mejor Academia de Belleza en los International Beauty Awards, consolidando nuestra reputación global.",
  },
  {
    year: 2019,
    title: "Lanzamiento de Plataforma Online",
    description:
      "Expandimos nuestro alcance con una plataforma de educación online, permitiendo a estudiantes de todo el mundo acceder a nuestra formación.",
  },
  {
    year: 2021,
    title: "Alianzas Estratégicas",
    description:
      "Establecemos colaboraciones con las principales marcas de la industria para ofrecer a nuestros estudiantes acceso a productos y tecnologías de vanguardia.",
  },
  {
    year: 2023,
    title: "Centro de Innovación",
    description:
      "Inauguramos nuestro Centro de Innovación en Belleza, un espacio dedicado a la investigación y desarrollo de nuevas técnicas y productos.",
  },
  {
    year: 2025,
    title: "Presente y Futuro",
    description:
      "Continuamos creciendo y evolucionando, siempre comprometidos con la excelencia educativa y el desarrollo profesional de nuestros estudiantes.",
  },
]

// Datos de valores
const values = [
  {
    title: "Excelencia",
    description:
      "Nos esforzamos por alcanzar los más altos estándares en todo lo que hacemos, desde la calidad de nuestra enseñanza hasta las instalaciones y materiales que ofrecemos.",
    icon: Award,
  },
  {
    title: "Innovación",
    description:
      "Constantemente buscamos nuevas formas de mejorar la experiencia educativa, incorporando tecnologías emergentes y metodologías pedagógicas avanzadas.",
    icon: BookOpen,
  },
  {
    title: "Comunidad",
    description:
      "Creemos en el poder de la colaboración y el apoyo mutuo. Fomentamos un ambiente donde estudiantes y profesionales pueden crecer juntos.",
    icon: Users,
  },
  {
    title: "Profesionalismo",
    description:
      "Preparamos a nuestros estudiantes no solo con habilidades técnicas, sino también con la ética y actitud necesarias para destacar en la industria.",
    icon: Briefcase,
  },
  {
    title: "Pasión",
    description:
      "Amamos lo que hacemos y transmitimos esa pasión a nuestros estudiantes, inspirándolos a encontrar su propio camino en el mundo de la belleza.",
    icon: Heart,
  },
]

// Datos de reconocimientos
const awards = [
  {
    year: 2023,
    title: "Academia de Belleza del Año",
    organization: "International Beauty Education Awards",
  },
  {
    year: 2022,
    title: "Mejor Programa de Formación Online",
    organization: "Digital Learning Excellence Awards",
  },
  {
    year: 2021,
    title: "Premio a la Innovación Educativa",
    organization: "European Education Summit",
  },
  {
    year: 2020,
    title: "Mejor Academia de Maquillaje",
    organization: "Global Makeup Association",
  },
  {
    year: 2019,
    title: "Premio a la Excelencia en Formación Profesional",
    organization: "Consejo Nacional de Educación Vocacional",
  },
]

// Datos de alianzas
const partners = [
  {
    name: "L'Oréal Professional",
    logo: "/placeholder.svg?height=100&width=200",
    description:
      "Colaboramos con L'Oréal para ofrecer a nuestros estudiantes acceso a productos profesionales y formación especializada.",
  },
  {
    name: "MAC Cosmetics",
    logo: "/placeholder.svg?height=100&width=200",
    description:
      "Nuestros estudiantes de maquillaje trabajan con productos MAC y reciben masterclasses de sus maquilladores senior.",
  },
  {
    name: "Wella Professionals",
    logo: "/placeholder.svg?height=100&width=200",
    description:
      "Alianza estratégica para la formación en colorimetría y tratamientos capilares con tecnología de vanguardia.",
  },
  {
    name: "Asociación Internacional de Estilistas",
    logo: "/placeholder.svg?height=100&width=200",
    description:
      "Miembros activos de esta prestigiosa asociación que certifica la calidad de nuestra formación a nivel global.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 via-violet-600 to-fuchsia-600 py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestra Historia, Nuestra Pasión</h1>
            <p className="text-xl mb-8">
              Conoce quiénes somos, nuestra misión y cómo estamos transformando la educación en belleza desde 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">
                Nuestra Misión
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Conoce al Equipo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-700 mb-6">
                Transformar la educación en belleza a través de programas innovadores que combinen excelencia técnica,
                creatividad y desarrollo profesional, formando a los líderes que definirán el futuro de la industria.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nos comprometemos a proporcionar una formación integral que no solo desarrolle habilidades técnicas
                excepcionales, sino también competencias empresariales, éticas y creativas que permitan a nuestros
                graduados destacar en un sector en constante evolución.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Formación práctica con los más altos estándares de calidad</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Instructores con experiencia internacional y reconocimiento en la industria
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Metodología innovadora que combina teoría, práctica y desarrollo personal
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Compromiso con la empleabilidad y el éxito profesional de nuestros graduados
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ser reconocidos globalmente como la institución educativa líder en el sector de la belleza,
                estableciendo nuevos estándares de excelencia e innovación que inspiren a toda la industria.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Aspiramos a crear una red global de profesionales que no solo dominen su oficio, sino que también
                lideren la transformación del sector hacia prácticas más sostenibles, inclusivas y vanguardistas.
              </p>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=500&width=800" alt="Nuestra visión" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestra Historia</h2>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>

            <div className="space-y-12">
              {historyMilestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold z-10 relative">
                        {milestone.year}
                      </div>
                      <div
                        className="absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-purple-200 z-0 
                        ${index % 2 === 0 ? 'left-full' : 'right-full'}"
                      ></div>
                    </div>
                  </div>
                  <Card className="w-full md:w-1/2">
                    <CardHeader>
                      <CardTitle>{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Reconocimientos y Premios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Reconocimientos" fill className="object-cover" />
            </div>
            <div>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl">{award.title}</CardTitle>
                        <Badge className="bg-purple-600">{award.year}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{award.organization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alianzas Estratégicas */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Alianzas Estratégicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="flex flex-col md:flex-row overflow-hidden">
                <div className="relative w-full md:w-1/3 h-40 md:h-auto">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Lo Que Dicen de Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Testimonio" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">María Fernández</h4>
                    <p className="text-sm text-gray-600">Directora de Recursos Humanos, L'Oréal</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Los graduados de esta academia destacan por su excelente formación técnica y su mentalidad
                  profesional. Son siempre nuestra primera opción cuando buscamos nuevo talento."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Testimonio" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Carlos Ruiz</h4>
                    <p className="text-sm text-gray-600">Editor de Belleza, Revista Vogue</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "La innovación y creatividad que fomentan en sus estudiantes es extraordinaria. Sus graduados están
                  definiendo las nuevas tendencias en la industria de la belleza."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Testimonio" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana Martínez</h4>
                    <p className="text-sm text-gray-600">Graduada y Propietaria de Salón</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Mi formación en esta academia cambió mi vida. No solo aprendí técnicas excepcionales, sino también
                  cómo construir un negocio exitoso. Hoy dirijo mi propio salón con un equipo de 15 personas."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres Formar Parte de Nuestra Historia?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad educativa y comienza tu camino hacia una carrera exitosa en la industria de la
            belleza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              Explorar Programas
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contactar con Admisiones
            </Button>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Instalaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Contamos con instalaciones de vanguardia diseñadas específicamente para la formación en belleza,
                  incluyendo:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Estudios de maquillaje profesional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Salones de práctica con equipamiento de última generación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Laboratorios de colorimetría</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Aulas multimedia para clases teóricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Estudio fotográfico profesional</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Galería
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Responsabilidad Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Estamos comprometidos con devolver a la comunidad y promover prácticas sostenibles en la industria de
                  la belleza:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Programa de becas para estudiantes con talento y recursos limitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Iniciativas de belleza solidaria en hospitales y centros comunitarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Compromiso con productos y prácticas sostenibles y cruelty-free</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Programas de reciclaje y reducción de residuos</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Conocer Iniciativas
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Oportunidades Laborales</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Nuestro compromiso con los estudiantes va más allá de su formación, ayudándoles a iniciar su carrera
                  profesional:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Bolsa de trabajo exclusiva con ofertas nacionales e internacionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Programa de prácticas en salones y marcas de prestigio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Asesoramiento para emprendedores que desean abrir su propio negocio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Networking con profesionales establecidos en la industria</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver Oportunidades
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
