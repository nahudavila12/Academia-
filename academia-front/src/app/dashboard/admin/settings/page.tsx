import { Save, Mail, Database, Server } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Configuración</h1>
          <p className="text-gray-500">Administra la configuración de la plataforma</p>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="bg-[#F3D9E2]/30">
          <TabsTrigger value="general" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            General
          </TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Apariencia
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white"
          >
            Notificaciones
          </TabsTrigger>
          <TabsTrigger value="security" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Seguridad
          </TabsTrigger>
          <TabsTrigger value="integrations" className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white">
            Integraciones
          </TabsTrigger>
        </TabsList>

        {/* Configuración general */}
        <TabsContent value="general" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle>Información de la plataforma</CardTitle>
              <CardDescription>Configura la información básica de la plataforma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="platform-name">Nombre de la plataforma</Label>
                  <Input
                    id="platform-name"
                    placeholder="Gisela Echavarria"
                    defaultValue="Gisela Echavarria"
                    className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="platform-url">URL de la plataforma</Label>
                  <Input
                    id="platform-url"
                    placeholder="https://beautyacademy.com"
                    defaultValue="https://beautyacademy.com"
                    className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform-description">Descripción</Label>
                <Textarea
                  id="platform-description"
                  placeholder="Descripción de la plataforma"
                  defaultValue="Academia online especializada en cursos de belleza, estilismo y empoderamiento femenino."
                  className="min-h-[100px] border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email de contacto</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="contacto@beautyacademy.com"
                    defaultValue="contacto@beautyacademy.com"
                    className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="support-email">Email de soporte</Label>
                  <Input
                    id="support-email"
                    type="email"
                    placeholder="soporte@beautyacademy.com"
                    defaultValue="soporte@beautyacademy.com"
                    className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle>Configuración regional</CardTitle>
              <CardDescription>Configura el idioma y la zona horaria de la plataforma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="language">Idioma predeterminado</Label>
                  <Select defaultValue="es">
                    <SelectTrigger id="language" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                      <SelectValue placeholder="Selecciona un idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="es">Español</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Zona horaria</Label>
                  <Select defaultValue="europe-madrid">
                    <SelectTrigger id="timezone" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                      <SelectValue placeholder="Selecciona una zona horaria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="europe-madrid">Europe/Madrid (UTC+1)</SelectItem>
                      <SelectItem value="america-mexico">America/Mexico_City (UTC-6)</SelectItem>
                      <SelectItem value="america-bogota">America/Bogota (UTC-5)</SelectItem>
                      <SelectItem value="america-buenos">America/Buenos_Aires (UTC-3)</SelectItem>
                      <SelectItem value="america-santiago">America/Santiago (UTC-4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date-format">Formato de fecha</Label>
                  <Select defaultValue="dd-mm-yyyy">
                    <SelectTrigger id="date-format" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                      <SelectValue placeholder="Selecciona un formato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                      <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY/MM/DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Moneda predeterminada</Label>
                  <Select defaultValue="eur">
                    <SelectTrigger id="currency" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                      <SelectValue placeholder="Selecciona una moneda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                      <SelectItem value="usd">Dólar estadounidense ($)</SelectItem>
                      <SelectItem value="mxn">Peso mexicano (MXN)</SelectItem>
                      <SelectItem value="cop">Peso colombiano (COP)</SelectItem>
                      <SelectItem value="ars">Peso argentino (ARS)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Apariencia */}
        <TabsContent value="appearance" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle>Personalización de la interfaz</CardTitle>
              <CardDescription>Configura la apariencia visual de la plataforma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="primary-color">Color primario</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="primary-color"
                      type="color"
                      defaultValue="#8E3A59"
                      className="h-10 w-20 border-[#F3D9E2] p-1 focus-visible:ring-[#8E3A59]"
                    />
                    <Input value="#8E3A59" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]" readOnly />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondary-color">Color secundario</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="secondary-color"
                      type="color"
                      defaultValue="#F3D9E2"
                      className="h-10 w-20 border-[#F3D9E2] p-1 focus-visible:ring-[#8E3A59]"
                    />
                    <Input value="#F3D9E2" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]" readOnly />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="theme-mode">Modo de tema</Label>
                <Select defaultValue="light">
                  <SelectTrigger id="theme-mode" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                    <SelectValue placeholder="Selecciona un modo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Claro</SelectItem>
                    <SelectItem value="dark">Oscuro</SelectItem>
                    <SelectItem value="system">Según sistema</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="font-family">Familia de fuentes</Label>
                <Select defaultValue="poppins">
                  <SelectTrigger id="font-family" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                    <SelectValue placeholder="Selecciona una fuente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poppins">Poppins</SelectItem>
                    <SelectItem value="roboto">Roboto</SelectItem>
                    <SelectItem value="montserrat">Montserrat</SelectItem>
                    <SelectItem value="opensans">Open Sans</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Modo oscuro</Label>
                  <p className="text-sm text-gray-500">Permitir a los usuarios cambiar al modo oscuro</p>
                </div>
                <Switch id="dark-mode" defaultChecked />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notificaciones */}
        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle>Configuración de notificaciones</CardTitle>
              <CardDescription>Configura las notificaciones del sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notificaciones por email</Label>
                  <p className="text-sm text-gray-500">Enviar notificaciones por email a los usuarios</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications">Notificaciones push</Label>
                  <p className="text-sm text-gray-500">Enviar notificaciones push a los usuarios</p>
                </div>
                <Switch id="push-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="sms-notifications">Notificaciones SMS</Label>
                  <p className="text-sm text-gray-500">Enviar notificaciones SMS a los usuarios</p>
                </div>
                <Switch id="sms-notifications" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notification-frequency">Frecuencia de notificaciones</Label>
                <Select defaultValue="immediate">
                  <SelectTrigger id="notification-frequency" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                    <SelectValue placeholder="Selecciona una frecuencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Inmediata</SelectItem>
                    <SelectItem value="daily">Diaria</SelectItem>
                    <SelectItem value="weekly">Semanal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Seguridad */}
        <TabsContent value="security" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle>Configuración de seguridad</CardTitle>
              <CardDescription>Configura las opciones de seguridad de la plataforma</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Autenticación de dos factores</Label>
                  <p className="text-sm text-gray-500">Requerir 2FA para todos los usuarios</p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="password-expiry">Caducidad de contraseñas</Label>
                  <p className="text-sm text-gray-500">Requerir cambio de contraseña periódicamente</p>
                </div>
                <Switch id="password-expiry" defaultChecked />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-expiry-days">Días para caducidad de contraseña</Label>
                <Input
                  id="password-expiry-days"
                  type="number"
                  defaultValue="90"
                  min="30"
                  max="365"
                  className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Tiempo de inactividad (minutos)</Label>
                <Input
                  id="session-timeout"
                  type="number"
                  defaultValue="30"
                  min="5"
                  max="120"
                  className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Integraciones */}
        <TabsContent value="integrations" className="mt-6 space-y-6">
          <Card className="border-[#F3D9E2]">
            <CardHeader>
              <CardTitle>Integraciones</CardTitle>
              <CardDescription>Configura las integraciones con servicios externos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <h3 className="font-medium">Servicio de email</h3>
                      <p className="text-sm text-gray-500">Configura el servicio para envío de emails</p>
                    </div>
                  </div>
                  <Switch id="email-service" defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email-api-key">API Key</Label>
                    <Input
                      id="email-api-key"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email-from">Email remitente</Label>
                    <Input
                      id="email-from"
                      type="email"
                      placeholder="no-reply@beautyacademy.com"
                      defaultValue="no-reply@beautyacademy.com"
                      className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <h3 className="font-medium">Almacenamiento</h3>
                      <p className="text-sm text-gray-500">Configura el servicio de almacenamiento</p>
                    </div>
                  </div>
                  <Switch id="storage-service" defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="storage-api-key">API Key</Label>
                    <Input
                      id="storage-api-key"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storage-region">Región</Label>
                    <Select defaultValue="eu-west-1">
                      <SelectTrigger id="storage-region" className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]">
                        <SelectValue placeholder="Selecciona una región" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eu-west-1">Europa (Irlanda)</SelectItem>
                        <SelectItem value="us-east-1">US Este (Virginia)</SelectItem>
                        <SelectItem value="us-west-1">US Oeste (California)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Server className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <h3 className="font-medium">Pasarela de pagos</h3>
                      <p className="text-sm text-gray-500">Configura la pasarela de pagos</p>
                    </div>
                  </div>
                  <Switch id="payment-service" defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="payment-api-key">API Key</Label>
                    <Input
                      id="payment-api-key"
                      type="password"
                      placeholder="••••••••••••••••"
                      className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-webhook">URL de Webhook</Label>
                    <Input
                      id="payment-webhook"
                      placeholder="https://beautyacademy.com/api/webhooks/payments"
                      className="border-[#F3D9E2] focus-visible:ring-[#8E3A59]"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#8E3A59] hover:bg-[#7A3049] text-white">
                <Save className="mr-2 h-4 w-4" />
                Guardar cambios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
