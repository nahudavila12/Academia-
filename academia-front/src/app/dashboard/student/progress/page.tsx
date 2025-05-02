import SmartProgressAssistant from "@/components/progress/smart-progress";

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Progreso Inteligente</h1>
      <p className="text-gray-500">Análisis personalizado de tu progreso y recomendaciones para mejorar</p>

      <SmartProgressAssistant />
    </div>
  )
}
