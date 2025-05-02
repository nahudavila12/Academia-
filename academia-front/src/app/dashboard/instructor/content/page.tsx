import Image from "next/image"
import { Search, Filter, Plus, Edit, Trash, Eye, MoreHorizontal, FileText, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InstructorContentPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Contenidos</h1>
          <p className="text-gray-500">Gestiona y crea contenido para tus cursos</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
            <Plus className="mr-2 h-4 w-4" />
            Crear contenido
          </Button>
        </div>
      </div>

      {/* Filtros y búsqueda */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
          <Input placeholder="Buscar contenidos..." className="pl-10 focus-visible:ring-[#8E3A59]" />
        </div>
        <Select defaultValue="all-courses">
          <SelectTrigger className="w-[200px] border-[#F3D9E2] focus:ring-[#8E3A59]">
            <SelectValue placeholder="Filtrar por curso" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-courses">Todos los cursos</SelectItem>
            <SelectItem value="makeup">Maquillaje Profesional</SelectItem>
            <SelectItem value="styling">Estilismo y Asesoría</SelectItem>
            <SelectItem value="skincare">Skincare Avanzado</SelectItem>
            <SelectItem value="nails">Nail Art Profesional</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex gap-2 border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
          <Filter className="h-4 w-4" />
          Más filtros
        </Button>
      </div>

      {/* Pestañas de contenido */}
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
          <TabsTrigger value="drafts" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Borradores
          </TabsTrigger>
        </TabsList>

        {/* Todos los contenidos */}
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contents.map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
          </div>
        </TabsContent>

        {/* Videos */}
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contents
              .filter((content) => content.type === "video")
              .map((content, index) => (
                <ContentCard key={index} content={content} />
              ))}
          </div>
        </TabsContent>

        {/* Documentos */}
        <TabsContent value="documents" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contents
              .filter((content) => content.type === "document" || content.type === "pdf")
              .map((content, index) => (
                <ContentCard key={index} content={content} />
              ))}
          </div>
        </TabsContent>

        {/* Cuestionarios */}
        <TabsContent value="quizzes" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contents
              .filter((content) => content.type === "quiz")
              .map((content, index) => (
                <ContentCard key={index} content={content} />
              ))}
          </div>
        </TabsContent>

        {/* Borradores */}
        <TabsContent value="drafts" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {contents
              .filter((content) => content.status === "draft")
              .map((content, index) => (
                <ContentCard key={index} content={content} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Estadísticas de contenido */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total de contenidos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-green-600">+5 este mes</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Visualizaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,845</div>
            <p className="text-xs text-green-600">+12% vs. mes anterior</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Valoración promedio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8/5</div>
            <p className="text-xs text-green-600">+0.2 vs. mes anterior</p>
          </CardContent>
        </Card>
        <Card className="border-[#F3D9E2]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Contenidos pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">Borradores sin publicar</p>
          </CardContent>
        </Card>
      </div>

      {/* Contenidos populares */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-[#8E3A59]">Contenidos más populares</h2>
        <Card className="border-[#F3D9E2]">
          <CardContent className="p-6">
            <div className="space-y-6">
              {popularContents.map((content, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={content.thumbnail || "/placeholder.svg"}
                      alt={content.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{content.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Badge
                        className={
                          content.type === "video"
                            ? "bg-blue-100 text-blue-800"
                            : content.type === "document" || content.type === "pdf"
                              ? "bg-green-100 text-green-800"
                              : "bg-amber-100 text-amber-800"
                        }
                      >
                        {content.type === "video"
                          ? "Video"
                          : content.type === "document"
                            ? "Documento"
                            : content.type === "pdf"
                              ? "PDF"
                              : "Cuestionario"}
                      </Badge>
                      <span>•</span>
                      <span>{content.course}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{content.views} vistas</div>
                    <div className="text-sm text-gray-500">{content.rating}/5 ★</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

interface Content {
  title: string;
  thumbnail: string;
  type: "video" | "document" | "pdf" | "quiz";
  course: string;
  views: number;
  duration?: string;
  pages?: number;
  questions?: number;
  status: "published" | "draft";
}

function ContentCard({ content }: { content: Content }) {
  return (
    <Card className="overflow-hidden border-[#F3D9E2]">
      <div className="relative aspect-video">
        <Image
          src={content.thumbnail || "/placeholder.svg"}
          alt={content.title}
          fill
          className="rounded-t-lg object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge
            className={
              content.type === "video"
                ? "bg-blue-500"
                : content.type === "document" || content.type === "pdf"
                  ? "bg-green-500"
                  : "bg-amber-500"
            }
          >
            {content.type === "video"
              ? "Video"
              : content.type === "document"
                ? "Documento"
                : content.type === "pdf"
                  ? "PDF"
                  : "Cuestionario"}
          </Badge>
        </div>
        {content.status === "draft" && (
          <div className="absolute top-2 left-2">
            <Badge variant="outline" className="bg-white/80 text-gray-700">
              Borrador
            </Badge>
          </div>
        )}
      </div>
      <CardHeader className="p-3 pb-0">
        <CardTitle className="line-clamp-1 text-base">{content.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-1">
        <p className="text-xs text-gray-500">{content.course}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Eye className="h-3.5 w-3.5" />
            <span>{content.views} vistas</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {content.type === "video" ? (
              <>
                <Clock className="h-3.5 w-3.5" />
                <span>{content.duration}</span>
              </>
            ) : (
              <>
                <FileText className="h-3.5 w-3.5" />
                <span>{content.pages} páginas</span>
              </>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-3 pt-0">
        <Button variant="outline" size="sm" className="h-8 border-[#8E3A59] text-[#8E3A59] hover:bg-[#F3D9E2]">
          <Eye className="mr-1 h-4 w-4" />
          Vista previa
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 px-2">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Vista previa
            </DropdownMenuItem>
            {content.status === "draft" ? (
              <DropdownMenuItem>Publicar</DropdownMenuItem>
            ) : (
              <DropdownMenuItem>Despublicar</DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash className="mr-2 h-4 w-4" />
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}

const contents: Content[] = [
  {
    title: "Tutorial: Base perfecta para piel grasa",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    course: "Maquillaje Profesional",
    views: 1245,
    duration: "18:45",
    status: "published",
  },
  {
    title: "Guía de colorimetría personal",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "pdf",
    course: "Estilismo y Asesoría de Imagen",
    views: 876,
    pages: 24,
    status: "published",
  },
  {
    title: "Técnicas de degradado para uñas",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    course: "Nail Art Profesional",
    views: 932,
    duration: "22:10",
    status: "published",
  },
  {
    title: "Plantillas de diseño para maquillaje",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "document",
    course: "Maquillaje Profesional",
    views: 654,
    pages: 12,
    status: "published",
  },
  {
    title: "Evaluación: Conocimientos básicos de skincare",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "quiz",
    course: "Skincare Avanzado",
    views: 543,
    questions: 15,
    status: "published",
  },
  {
    title: "Masterclass: Maquillaje para eventos",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    course: "Maquillaje Profesional",
    views: 1532,
    duration: "1:05:30",
    status: "published",
  },
  {
    title: "Glosario de términos de belleza",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "pdf",
    course: "Fundamentos de Estética",
    views: 432,
    pages: 36,
    status: "published",
  },
  {
    title: "Técnicas avanzadas de contouring (Borrador)",
    thumbnail: "/placeholder.svg?height=180&width=320",
    type: "video",
    course: "Maquillaje Profesional",
    views: 0,
    duration: "28:15",
    status: "draft",
  },
]

const popularContents = [
  {
    title: "Masterclass: Maquillaje para eventos",
    thumbnail: "/placeholder.svg?height=64&width=96",
    type: "video",
    course: "Maquillaje Profesional",
    views: 1532,
    rating: 4.9,
  },
  {
    title: "Tutorial: Base perfecta para piel grasa",
    thumbnail: "/placeholder.svg?height=64&width=96",
    type: "video",
    course: "Maquillaje Profesional",
    views: 1245,
    rating: 4.8,
  },
  {
    title: "Técnicas de degradado para uñas",
    thumbnail: "/placeholder.svg?height=64&width=96",
    type: "video",
    course: "Nail Art Profesional",
    views: 932,
    rating: 4.7,
  },
  {
    title: "Guía de colorimetría personal",
    thumbnail: "/placeholder.svg?height=64&width=96",
    type: "pdf",
    course: "Estilismo y Asesoría de Imagen",
    views: 876,
    rating: 4.6,
  },
]
