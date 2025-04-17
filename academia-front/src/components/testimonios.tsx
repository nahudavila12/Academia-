"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Laura Pérez",
    location: "Madrid",
    image: "/images/perfil.jpg?height=80&width=80",
    content:
      "Los cursos de maquillaje transformaron mi vida. Pasé de ser una aficionada a tener mi propio estudio y trabajar con marcas reconocidas.",
    course: "Maquillaje Profesional",
  },
  {
    id: 2,
    name: "Sofía Martínez",
    location: "Barcelona",
    image: "/images/perfil.jpg?height=80&width=80",
    content:
      "La formación en asesoría de imagen me dio las herramientas para emprender mi propio negocio. Ahora ayudo a otras mujeres a encontrar su estilo.",
    course: "Estilismo y Asesoría de Imagen",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    location: "Valencia",
    image: "/images/perfil.jpg?height=80&width=80",
    content:
      "Gracias a la certificación en skincare, pude especializarme y ofrecer servicios de mayor calidad en mi centro estético.",
    course: "Skincare Avanzado",
  },
  {
    id: 4,
    name: "María López",
    location: "Sevilla",
    image: "/images/perfil.jpg?height=80&width=80",
    content:
      "El curso de nail art me permitió desarrollar un estilo único que mis clientas adoran. Mi agenda está completa con meses de antelación.",
    course: "Nail Art y Manicura Profesional",
  },
  {
    id: 5,
    name: "Carmen Gómez",
    location: "Málaga",
    image: "/images/perfil.jpg?height=80&width=80",
    content:
      "La comunidad de mujeres que conocí durante mi formación se ha convertido en mi red de apoyo profesional y personal.",
    course: "Empoderamiento Femenino",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState<typeof testimonials>([])
  const [itemsToShow, setItemsToShow] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1)
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2)
      } else {
        setItemsToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const endIndex = currentIndex + itemsToShow
    setVisibleTestimonials(
      testimonials
        .slice(currentIndex, endIndex)
        .concat(endIndex > testimonials.length ? testimonials.slice(0, endIndex - testimonials.length) : []),
    )
  }, [currentIndex, itemsToShow])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex w-full transition-transform duration-500 ease-in-out">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-full px-4 sm:w-1/2 lg:w-1/3"
              style={{ flex: `0 0 ${100 / itemsToShow}%` }}
            >
              <Card className="h-full border-[#F3D9E2] bg-white">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="mb-4">
                    <p className="text-gray-600">"{testimonial.content}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      width={50}
                      height={50}
                      alt={testimonial.name}
                      className="rounded-full border-2 border-[#F3D9E2]"
                    />
                    <div>
                      <h4 className="font-semibold text-[#8E3A59]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <p className="text-xs text-[#8E3A59]">{testimonial.course}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2] hover:text-[#8E3A59]"
          aria-label="Testimonio anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2] hover:text-[#8E3A59]"
          aria-label="Testimonio siguiente"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
