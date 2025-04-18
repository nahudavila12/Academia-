"use client"

import { useState } from "react"
import { MessageSquare, Users, Heart, MessageCircle, Share2, BookmarkPlus, Search, Filter } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ForumPost {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  category: string
  tags: string[]
  likes: number
  comments: number
  views: number
  createdAt: string
  isLiked: boolean
  isBookmarked: boolean
}

export default function ForumDiscussions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: "1",
      title: "¿Cuáles son las mejores técnicas para maquillaje de ojos para principiantes?",
      content:
        "Hola a todas, estoy empezando en el mundo del maquillaje y me gustaría saber cuáles son las mejores técnicas para maquillaje de ojos para principiantes. ¿Qué productos recomiendan? ¿Hay algún tutorial específico que les haya ayudado mucho? Gracias por sus consejos.",
      author: {
        name: "Laura Gómez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Estudiante",
      },
      category: "maquillaje",
      tags: ["principiantes", "ojos", "técnicas"],
      likes: 24,
      comments: 15,
      views: 142,
      createdAt: "Hace 2 días",
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: "2",
      title: "Compartiendo mi experiencia con el curso de colorimetría",
      content:
        "Quería compartir mi experiencia con el curso de colorimetría que acabo de terminar. Ha sido increíble aprender cómo los colores pueden transformar completamente un look. He descubierto que soy una 'primavera clara' y ahora entiendo por qué ciertos colores me favorecen más que otros...",
      author: {
        name: "María López",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Estudiante Avanzada",
      },
      category: "cursos",
      tags: ["colorimetría", "experiencia", "paletas-de-color"],
      likes: 36,
      comments: 22,
      views: 198,
      createdAt: "Hace 5 días",
      isLiked: true,
      isBookmarked: true,
    },
    {
      id: "3",
      title: "Dudas sobre técnicas de nail art 3D",
      content:
        "Estoy practicando técnicas de nail art 3D y tengo algunas dudas sobre los materiales. ¿Qué tipo de gel recomiendan para crear relieves? ¿Es mejor usar acrílico para ciertos diseños? Agradezco cualquier consejo de quienes ya dominan estas técnicas.",
      author: {
        name: "Carmen Martínez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Estudiante",
      },
      category: "nail-art",
      tags: ["3d", "técnicas-avanzadas", "materiales"],
      likes: 18,
      comments: 12,
      views: 105,
      createdAt: "Hace 1 semana",
      isLiked: false,
      isBookmarked: false,
    },
    {
      id: "4",
      title: "Consejos para montar tu propio estudio de belleza",
      content:
        "Después de completar varios cursos, estoy considerando abrir mi propio estudio de belleza. Me encantaría escuchar consejos de quienes ya han pasado por este proceso. ¿Qué aspectos legales debo considerar? ¿Cómo calcularon su inversión inicial? ¿Qué errores debo evitar?",
      author: {
        name: "Ana Rodríguez",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Estudiante Avanzada",
      },
      category: "negocios",
      tags: ["emprendimiento", "estudio", "inversión"],
      likes: 42,
      comments: 28,
      views: 230,
      createdAt: "Hace 2 semanas",
      isLiked: false,
      isBookmarked: true,
    },
  ])

  const handleLikePost = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            isLiked: !post.isLiked,
          }
        }
        return post
      }),
    )
  }

  const handleBookmarkPost = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isBookmarked: !post.isBookmarked,
          }
        }
        return post
      }),
    )
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === "recent") {
      // This is a simplified sort - in a real app you'd use actual dates
      return a.createdAt > b.createdAt ? -1 : 1
    } else if (sortBy === "popular") {
      return b.likes - a.likes
    } else if (sortBy === "comments") {
      return b.comments - a.comments
    }
    return 0
  })

  const categories = [
    { value: "all", label: "Todas las categorías" },
    { value: "maquillaje", label: "Maquillaje" },
    { value: "nail-art", label: "Nail Art" },
    { value: "skincare", label: "Skincare" },
    { value: "peluquería", label: "Peluquería" },
    { value: "cursos", label: "Cursos" },
    { value: "negocios", label: "Negocios" },
  ]

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-6 w-6 text-[#8E3A59]" />
            <CardTitle className="text-xl text-[#8E3A59]">Foro de Discusión</CardTitle>
          </div>
          <CardDescription>Conecta con otras estudiantes, comparte experiencias y resuelve dudas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar en el foro..."
                className="w-full rounded-full border-[#F3D9E2] bg-white pl-8 focus-visible:ring-[#8E3A59]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="popular">Más populares</SelectItem>
                  <SelectItem value="comments">Más comentados</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                <Filter className="mr-1 h-4 w-4" />
                Filtros
              </Button>
            </div>
          </div>

          <Tabs defaultValue="discussions">
            <TabsList className="mb-4 grid w-full grid-cols-4 bg-[#F3D9E2]/30">
              <TabsTrigger value="discussions">Discusiones</TabsTrigger>
              <TabsTrigger value="questions">Preguntas</TabsTrigger>
              <TabsTrigger value="resources">Recursos</TabsTrigger>
              <TabsTrigger value="saved">Guardados</TabsTrigger>
            </TabsList>

            <TabsContent value="discussions" className="mt-0">
              <div className="mb-4 flex justify-between">
                <h3 className="font-medium">Mostrando {sortedPosts.length} discusiones</h3>
                <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">
                  <MessageCircle className="mr-1 h-4 w-4" />
                  Nueva discusión
                </Button>
              </div>

              <div className="space-y-4">
                {sortedPosts.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[#F3D9E2] p-8 text-center">
                    <MessageSquare className="mx-auto mb-2 h-10 w-10 text-gray-300" />
                    <h3 className="mb-1 text-lg font-medium">No se encontraron discusiones</h3>
                    <p className="text-sm text-gray-500">
                      Intenta con otros términos de búsqueda o crea una nueva discusión
                    </p>
                  </div>
                ) : (
                  sortedPosts.map((post) => (
                    <Card key={post.id} className="border-[#F3D9E2] hover:border-[#8E3A59]/50">
                      <CardContent className="p-4">
                        <div className="mb-3 flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{post.author.name}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{post.author.role}</span>
                                <span>•</span>
                                <span>{post.createdAt}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-[#8E3A59]">
                            {categories.find((c) => c.value === post.category)?.label || post.category}
                          </Badge>
                        </div>

                        <h3 className="mb-2 text-lg font-medium hover:text-[#8E3A59] hover:underline">{post.title}</h3>

                        <p className="mb-3 text-sm text-gray-600 line-clamp-2">{post.content}</p>

                        <div className="mb-3 flex flex-wrap gap-1">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="border-[#F3D9E2] text-xs text-[#8E3A59]">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleLikePost(post.id)}
                              className={`flex items-center gap-1 p-0 text-sm ${
                                post.isLiked ? "text-[#8E3A59]" : "text-gray-500 hover:text-[#8E3A59]"
                              }`}
                            >
                              <Heart className={`h-4 w-4 ${post.isLiked ? "fill-[#8E3A59]" : ""}`} />
                              <span>{post.likes}</span>
                            </Button>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1 p-0 text-sm text-gray-500 hover:text-[#8E3A59]"
                            >
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </Button>

                            <span className="flex items-center gap-1 text-sm text-gray-500">
                              <Users className="h-4 w-4" />
                              <span>{post.views}</span>
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleBookmarkPost(post.id)}
                              className={`h-8 w-8 p-0 ${
                                post.isBookmarked ? "text-[#8E3A59]" : "text-gray-500 hover:text-[#8E3A59]"
                              }`}
                            >
                              <BookmarkPlus className={`h-4 w-4 ${post.isBookmarked ? "fill-[#8E3A59]" : ""}`} />
                            </Button>

                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 text-gray-500 hover:text-[#8E3A59]"
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>

              {sortedPosts.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
                    Cargar más discusiones
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="questions" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2] p-6 text-center">
                <p className="text-gray-500">Aquí podrás ver las preguntas específicas de la comunidad</p>
              </div>
            </TabsContent>

            <TabsContent value="resources" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2] p-6 text-center">
                <p className="text-gray-500">Recursos compartidos por la comunidad</p>
              </div>
            </TabsContent>

            <TabsContent value="saved" className="mt-0">
              <div className="rounded-lg border border-[#F3D9E2] p-6 text-center">
                <p className="text-gray-500">Aquí encontrarás las discusiones que has guardado</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col items-start border-t border-[#F3D9E2] bg-[#F3D9E2]/5 px-6 py-4">
          <div className="flex w-full items-center justify-between">
            <h4 className="font-medium">Temas populares</h4>
            <Button variant="link" className="p-0 text-[#8E3A59]">
              Ver todos
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
              #técnicas-de-maquillaje
            </Badge>
            <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
              #colorimetría
            </Badge>
            <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
              #nail-art-3d
            </Badge>
            <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
              #emprendimiento
            </Badge>
            <Badge variant="outline" className="border-[#F3D9E2] text-[#8E3A59]">
              #skincare-natural
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
