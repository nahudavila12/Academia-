"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#F3D9E2] px-3 py-1 text-sm font-medium text-[#8E3A59]">
              Preguntas Frecuentes
            </div>
            <h2 className="font-serif text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8E3A59]">
              ¿Tienes dudas?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Encuentra respuestas a las preguntas más comunes sobre nuestros cursos y metodología.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#F3D9E2]">
                <AccordionTrigger className="text-left font-medium text-gray-700 hover:text-[#8E3A59]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    question: "¿Cómo funcionan los cursos online?",
    answer:
      "Nuestros cursos están diseñados para que puedas aprender a tu propio ritmo. Tendrás acceso a videos, material descargable, ejercicios prácticos y foros de discusión. Además, contarás con sesiones en vivo con tus instructoras para resolver dudas y recibir feedback personalizado.",
  },
  {
    question: "¿Necesito experiencia previa para tomar los cursos?",
    answer:
      "No, nuestros cursos están diseñados para todos los niveles. Tenemos cursos para principiantes que parten desde cero, así como cursos avanzados para quienes ya tienen conocimientos previos y desean especializarse.",
  },
  {
    question: "¿Qué materiales necesito para los cursos prácticos?",
    answer:
      "Al inscribirte, recibirás una lista detallada de los materiales necesarios para cada curso. En algunos cursos ofrecemos kits de inicio que puedes adquirir directamente con nosotros, con productos profesionales seleccionados por nuestras instructoras.",
  },
  {
    question: "¿Los certificados tienen validez profesional?",
    answer:
      "Sí, todos nuestros certificados están avalados por asociaciones profesionales del sector de la belleza y el estilismo. Son reconocidos en el mercado laboral y te servirán para demostrar tus habilidades y conocimientos.",
  },
  {
    question: "¿Puedo acceder a los cursos desde cualquier dispositivo?",
    answer:
      "Sí, nuestra plataforma es compatible con ordenadores, tablets y smartphones. Puedes acceder desde cualquier dispositivo con conexión a internet, lo que te permite aprender desde donde quieras y cuando quieras.",
  },
  {
    question: "¿Ofrecen opciones de pago fraccionado?",
    answer:
      "Sí, contamos con diferentes opciones de pago para facilitar tu acceso a la formación. Puedes pagar en cuotas sin intereses o acceder a descuentos por pago único. También ofrecemos becas para situaciones especiales.",
  },
]
