import { redirect } from "next/navigation"

export default function DashboardPage() {
  // En una implementación real, verificaríamos la autenticación del usuario
  // y redirigimos según su rol

  // Simulación: redirigir al dashboard de estudiante por defecto
  redirect("/dashboard/student")
}
