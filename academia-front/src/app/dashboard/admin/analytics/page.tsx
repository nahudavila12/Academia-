import { BarChart, LineChart, PieChart, ArrowUpDown, Download, Calendar, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Analíticas</h1>
          <p className="text-gray-500">Monitorea el rendimiento de la plataforma</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30">
            <SelectTrigger className="w-[180px] border-[#F3D9E2] focus:ring-[#8E3A59]">
              <SelectValue placeholder="Periodo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 días</SelectItem>
              <SelectItem value="30">Últimos 30 días</SelectItem>
              <SelectItem value="90">Últimos 3 meses</SelectItem>
              <SelectItem value="365">Último año</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
            <Calendar className="mr-2 h-4 w-4" />
            Personalizar
          </Button>
          <Button variant="outline" className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Métricas principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard title="Usuarios activos" value="845" change="+12%" trend="up" description="vs. periodo anterior" />
        <MetricCard
          title="Nuevas inscripciones"
          value="215"
          change="+8%"
          trend="up"
          description="vs. periodo anterior"
        />
        <MetricCard title="Ingresos" value="$42,580" change="+15%" trend="up" description="vs. periodo anterior" />
        <MetricCard
          title="Tasa de finalización"
          value="72%"
          change="-3%"
          trend="down"
          description="vs. periodo anterior"
        />
      </div>

      {/* Pestañas de analíticas */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-[#F3D9E2]/30">
          <TabsTrigger value="overview" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Resumen
          </TabsTrigger>
          <TabsTrigger value="users" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Usuarios
          </TabsTrigger>
          <TabsTrigger value="courses" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Cursos
          </TabsTrigger>
          <TabsTrigger value="revenue" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Ingresos
          </TabsTrigger>
        </TabsList>

        {/* Resumen */}
        <TabsContent value="overview" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Actividad de usuarios</CardTitle>
                <Select defaultValue="daily">
                  <SelectTrigger className="w-[150px] border-[#F3D9E2] focus:ring-[#8E3A59]">
                    <SelectValue placeholder="Agrupación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diario</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Usuarios activos en la plataforma</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <div className="flex h-full items-center justify-center">
                <LineChart className="h-16 w-16 text-[#8E3A59]" />
                <p className="ml-4 text-gray-500">Gráfico de actividad de usuarios</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Distribución de usuarios</CardTitle>
                <CardDescription>Por tipo de usuario</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <PieChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de distribución de usuarios</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Cursos populares</CardTitle>
                <CardDescription>Por inscripciones</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <BarChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de cursos populares</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Usuarios */}
        <TabsContent value="users" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Crecimiento de usuarios</CardTitle>
                <Button variant="outline" className="border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrar
                </Button>
              </div>
              <CardDescription>Nuevos registros vs. usuarios activos</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <div className="flex h-full items-center justify-center">
                <LineChart className="h-16 w-16 text-[#8E3A59]" />
                <p className="ml-4 text-gray-500">Gráfico de crecimiento de usuarios</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Retención de usuarios</CardTitle>
                <CardDescription>Tasa de retención por cohorte</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <BarChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de retención de usuarios</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Actividad por dispositivo</CardTitle>
                <CardDescription>Distribución de accesos</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <PieChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de actividad por dispositivo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Cursos */}
        <TabsContent value="courses" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Rendimiento de cursos</CardTitle>
                <Button variant="outline" className="border-[#F3D9E2] text-gray-700 hover:bg-[#F3D9E2]/50">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrar
                </Button>
              </div>
              <CardDescription>Inscripciones y tasa de finalización</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <div className="flex h-full items-center justify-center">
                <BarChart className="h-16 w-16 text-[#8E3A59]" />
                <p className="ml-4 text-gray-500">Gráfico de rendimiento de cursos</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Valoraciones de cursos</CardTitle>
                <CardDescription>Promedio por categoría</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <BarChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de valoraciones de cursos</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Contenido más visto</CardTitle>
                <CardDescription>Por tipo de contenido</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <PieChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de contenido más visto</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Ingresos */}
        <TabsContent value="revenue" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Ingresos mensuales</CardTitle>
                <Select defaultValue="monthly">
                  <SelectTrigger className="w-[150px] border-[#F3D9E2] focus:ring-[#8E3A59]">
                    <SelectValue placeholder="Agrupación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Diario</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                    <SelectItem value="monthly">Mensual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardDescription>Tendencia de ingresos</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <div className="flex h-full items-center justify-center">
                <LineChart className="h-16 w-16 text-[#8E3A59]" />
                <p className="ml-4 text-gray-500">Gráfico de ingresos mensuales</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Ingresos por categoría</CardTitle>
                <CardDescription>Distribución de ventas</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <PieChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de ingresos por categoría</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardHeader>
                <CardTitle>Valor promedio por estudiante</CardTitle>
                <CardDescription>LTV por cohorte</CardDescription>
              </CardHeader>
              <CardContent className="h-[250px]">
                <div className="flex h-full items-center justify-center">
                  <BarChart className="h-16 w-16 text-[#8E3A59]" />
                  <p className="ml-4 text-gray-500">Gráfico de valor por estudiante</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  description: string;
}

function MetricCard({ title, value, change, trend, description }: MetricCardProps) {
  return (
    <Card className="border-[#F3D9E2]">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">{value}</div>
          <div
            className={`flex items-center ${
              trend === "up" ? "text-green-600" : trend === "down" ? "text-red-600" : "text-gray-500"
            }`}
          >
            {trend === "up" ? (
              <ArrowUpDown className="mr-1 h-4 w-4 rotate-0" />
            ) : trend === "down" ? (
              <ArrowUpDown className="mr-1 h-4 w-4 rotate-180" />
            ) : null}
            <span className="text-xs font-medium">{change}</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
