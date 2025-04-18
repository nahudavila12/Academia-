import AccessibilityControls from "@/components/accesibility/accesibilty";

export default function AccessibilityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Accesibilidad</h1>
      <p className="text-gray-500">Personaliza la plataforma para adaptarla a tus necesidades</p>

      <AccessibilityControls />
    </div>
  )
}
