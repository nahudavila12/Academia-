import Image from "next/image"
import { Search, Filter, Download, Play, FileText, Clock, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function MaterialsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Materiales de estudio</h1>
          <p className="text-gray-500">Accede a todos los recursos de tus cursos</p>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar materiales..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Filtrar
        </Button>
      </div>

      {/* Pestañas de materiales */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-[#F3D9E2]/30">
          <TabsTrigger value="all" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Todos
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Videos
          </TabsTrigger>
          <TabsTrigger value="documents" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Documentos
          </TabsTrigger>
          <TabsTrigger value="quizzes" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Cuestionarios
          </TabsTrigger>
        </TabsList>

        {/* Todos los materiales */}
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {materials.map((material, index) => (
              <MaterialCard key={index} material={material} />
            ))}
          </div>
        </TabsContent>

        {/* Videos */}
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {materials
              .filter((material) => material.type === "video")
              .map((material, index) => (
                <MaterialCard key={index} material={material} />
              ))}
          </div>
        </TabsContent>

        {/* Documentos */}
        <TabsContent value="documents" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {materials
              .filter((material) => material.type === "document" || material.type === "pdf")
              .map((material, index) => (
                <MaterialCard key={index} material={material} />
              ))}
          </div>
        </TabsContent>

        {/* Cuestionarios */}
        <TabsContent value="quizzes" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {materials
              .filter((material) => material.type === "quiz")
              .map((material, index) => (
                <MaterialCard key={index} material={material} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Materiales recientes */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Vistos recientemente</h2>
        <ScrollArea className="w-full whitespace-nowrap pb-4">
          <div className="flex w-max space-x-4 p-1">
            {recentlyViewed.map((material, index) => (
              <Card key={index} className="w-[250px] border-[#F3D9E2]">
                <div className="relative aspect-video">
                  <Image
                    src={material.thumbnail || "/placeholder.svg"}
                    alt={material.title}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                  {material.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
                      <Button size="icon" className="h-12 w-12 rounded-full bg-white/80 text-[#8E3A59] hover:bg-white">
                        <Play className="h-6 w-6 fill-current" />
                      </Button>
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={
                        material.type === "video"
                          ? "bg-blue-500"
                          : material.type === "document" || material.type === "pdf"
                            ? "bg-green-500"
                            : "bg-amber-500"
                      }
                    >
                      {material.type === "video"
                        ? "Video"
                        : material.type === "document"
                          ? "Documento"
                          : material.type === "pdf"
                            ? "PDF"
                            : "Cuestionario"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <h3 className="line-clamp-1 font-medium">{material.title}</h3>
                  <p className="text-xs text-gray-500">{material.course}</p>
                  <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Visto hace {material.lastViewed}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Materiales recomendados */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Recomendados para ti</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {recommendedMaterials.map((material, index) => (
            <MaterialCard key={index} material={material} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MaterialCard({ material }) {
  return (
    <Card className="overflow-hidden border-[#F3D9E2]">
      <div className="relative aspect-video">
        <Image
          src={material.thumbnail || "/placeholder.svg"}
          alt={material.title}
          fill
          className="rounded-t-lg object-cover"
        />
        {material.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity hover:opacity-100">
            <Button size="icon" className="h-12 w-12 rounded-full bg-white/80 text-[#8E3A59] hover:bg-white">
              <Play className="h-6 w-6 fill-current" />
            </Button>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge
            className={
              material.type === "video"
                ? "bg-blue-500"
                : material.type === "document" || material.type === "pdf"
                  ? "bg-green-500"
                  : "bg-amber-500"
            }
          >
            {material.type === "video"
              ? "Video"
              : material.type === "document"
                ? "Documento"
                : material.type === "pdf"
                  ? "PDF"
                  : "Cuestionario"}
          </Badge>
        </div>
      </div>
      <CardHeader className="p-3 pb-0">
        <CardTitle className="line-clamp-1 text-base">{material.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <p className="text-xs text-gray-500">{material.course}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${i < material.rating ? "fill-[#D4AF37] text-[#D4AF37]" : "text-gray-300"}`}
                />
              ))}
            <span className="ml-1 text-xs text-gray-500">({material.reviews})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {material.type === "video" ? (
              <>
                <Clock className="h-3.5 w-3.5" />
                <span>{material.duration}</span>
              </>
            ) : (
              <>
                <FileText className="h-3.5 w-3.5" />
                <span>{material.pages} páginas</span>
              </>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0">
        <Button
          className="w-full bg-[#8E3A59] hover:bg-[#7A3049] text-white"
          leftIcon={
            material.type === "video" ? <Play className="mr-2 h-4 w-4" /> : <Download className="mr-2 h-4 w-4" />
          }
        >
          {material.type === "video" ? "Ver video" : material.type === "quiz" ? "Iniciar" : "Descargar"}
        </Button>
      </CardFooter>
    </Card>
  )
}

const materials = [
  {
    title: "Tutorial: Base perfecta para piel grasa",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    rating: 5,
    reviews: 28,
    duration: "18:45",
  },
  {
    title: "Guía de colorimetría personal",
    thumbnail: "/images/pdf.png", // PDF
    type: "pdf",
    course: "Estilismo y Asesoría de Imagen",
    rating: 4,
    reviews: 15,
    pages: 24,
  },
  {
    title: "Técnicas de degradado para uñas",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Nail Art Profesional",
    rating: 5,
    reviews: 32,
    duration: "22:10",
  },
  {
    title: "Plantillas de diseño para maquillaje",
    thumbnail: "/images/pdf.png", // PDF
    type: "document",
    course: "Maquillaje Profesional",
    rating: 4,
    reviews: 18,
    pages: 12,
  },
  {
    title: "Evaluación: Conocimientos básicos de skincare",
    thumbnail: "/images/pdf.png", // PDF
    type: "quiz",
    course: "Skincare Avanzado",
    rating: 4,
    reviews: 22,
    questions: 15,
  },
  {
    title: "Masterclass: Maquillaje para eventos",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    rating: 5,
    reviews: 45,
    duration: "1:05:30",
  },
  {
    title: "Glosario de términos de belleza",
    thumbnail: "/images/pdf.png", // PDF
    type: "pdf",
    course: "Fundamentos de Estética",
    rating: 4,
    reviews: 12,
    pages: 36,
  },
  {
    title: "Técnicas avanzadas de contouring",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    rating: 5,
    reviews: 38,
    duration: "28:15",
  },
]

const recentlyViewed = [
  {
    title: "Tutorial: Base perfecta para piel grasa",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    lastViewed: "2 horas",
  },
  {
    title: "Guía de colorimetría personal",
    thumbnail: "/images/pdf.png", // PDF
    type: "pdf",
    course: "Estilismo y Asesoría de Imagen",
    lastViewed: "ayer",
  },
  {
    title: "Evaluación: Conocimientos básicos de skincare",
    thumbnail: "/images/pdf.png", // PDF
    type: "quiz",
    course: "Skincare Avanzado",
    lastViewed: "3 días",
  },
  {
    title: "Masterclass: Maquillaje para eventos",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    lastViewed: "1 semana",
  },
]

const recommendedMaterials = [
  {
    title: "Técnicas avanzadas de contouring",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    rating: 5,
    reviews: 38,
    duration: "28:15",
  },
  {
    title: "Tendencias de maquillaje 2023",
    thumbnail: "/images/pdf.png", // PDF
    type: "pdf",
    course: "Maquillaje Profesional",
    rating: 4,
    reviews: 24,
    pages: 18,
  },
  {
    title: "Masterclass: Automaquillaje en 15 minutos",
    thumbnail: "/images/video.png", // Video
    type: "video",
    course: "Maquillaje Profesional",
    rating: 5,
    reviews: 42,
    duration: "32:20",
  },
  {
    title: "Evaluación: Técnicas de maquillaje avanzado",
    thumbnail: "/images/pdf.png", // PDF
    type: "quiz",
    course: "Maquillaje Profesional",
    rating: 4,
    reviews: 19,
    questions: 20,
  },
]

