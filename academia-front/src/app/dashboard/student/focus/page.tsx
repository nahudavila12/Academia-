import DistractionBlocker from "@/components/study-mode/distraction";
import FocusTimer from "@/components/study-mode/pomodoro";

export default function FocusModePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Modo de Estudio Enfocado</h1>
      <p className="text-gray-500">Herramientas para maximizar tu concentración y productividad</p>

      <FocusTimer />
      <DistractionBlocker />
    </div>
  )
}
