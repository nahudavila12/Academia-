"use client"

import { useState, useEffect } from "react"
import { Eye, Type, MousePointer, Volume2, Moon, Sun, Contrast, Palette, RotateCcw } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AccessibilitySettings {
  fontSize: number
  lineHeight: number
  letterSpacing: number
  contrast: number
  reducedMotion: boolean
  highContrast: boolean
  dyslexicFont: boolean
  cursorSize: string
  colorScheme: "light" | "dark" | "system"
  accentColor: string
}

export default function AccessibilityControls() {
  const [settings, setSettings] = useState<AccessibilitySettings>({
    fontSize: 100, // percentage of default
    lineHeight: 150, // percentage of default
    letterSpacing: 0, // additional spacing in px
    contrast: 100, // percentage
    reducedMotion: false,
    highContrast: false,
    dyslexicFont: false,
    cursorSize: "default",
    colorScheme: "light",
    accentColor: "default",
  })

  const [isOpen, setIsOpen] = useState(false)

  // Apply settings to the document
  useEffect(() => {
    // This is a simplified implementation
    // In a real app, you would apply these settings more comprehensively

    // Font size
    document.documentElement.style.setProperty("--accessibility-font-size", `${settings.fontSize}%`)

    // Line height
    document.documentElement.style.setProperty("--accessibility-line-height", `${settings.lineHeight}%`)

    // Letter spacing
    document.documentElement.style.setProperty("--accessibility-letter-spacing", `${settings.letterSpacing}px`)

    // Reduced motion
    if (settings.reducedMotion) {
      document.documentElement.classList.add("reduce-motion")
    } else {
      document.documentElement.classList.remove("reduce-motion")
    }

    // High contrast
    if (settings.highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }

    // Dyslexic font
    if (settings.dyslexicFont) {
      document.documentElement.classList.add("dyslexic-font")
    } else {
      document.documentElement.classList.remove("dyslexic-font")
    }

    // Cursor size
    document.documentElement.style.setProperty("--accessibility-cursor-size", settings.cursorSize)

    // Color scheme
    if (settings.colorScheme === "dark") {
      document.documentElement.classList.add("dark-theme")
      document.documentElement.classList.remove("light-theme")
    } else if (settings.colorScheme === "light") {
      document.documentElement.classList.add("light-theme")
      document.documentElement.classList.remove("dark-theme")
    }

    // Accent color
    document.documentElement.style.setProperty("--accessibility-accent-color", settings.accentColor)
  }, [settings])

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      lineHeight: 150,
      letterSpacing: 0,
      contrast: 100,
      reducedMotion: false,
      highContrast: false,
      dyslexicFont: false,
      cursorSize: "default",
      colorScheme: "light",
      accentColor: "default",
    })
  }

  const updateSetting = <K extends keyof AccessibilitySettings>(key: K, value: AccessibilitySettings[K]) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-[#8E3A59]" />
            <CardTitle className="text-xl text-[#8E3A59]">Controles de Accesibilidad</CardTitle>
          </div>
          <CardDescription>Personaliza la plataforma para adaptarla a tus necesidades</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="text">
            <TabsList className="mb-4 grid w-full grid-cols-4 bg-[#F3D9E2]/30">
              <TabsTrigger value="text">Texto</TabsTrigger>
              <TabsTrigger value="visual">Visual</TabsTrigger>
              <TabsTrigger value="motion">Movimiento</TabsTrigger>
              <TabsTrigger value="color">Color</TabsTrigger>
            </TabsList>

            <TabsContent value="text" className="mt-0 space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium">Tamaño de texto</label>
                    <span className="text-xs text-gray-500">{settings.fontSize}%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Type className="h-4 w-4 text-gray-500" />
                    <Slider
                      value={[settings.fontSize]}
                      min={75}
                      max={200}
                      step={5}
                      onValueChange={(value) => updateSetting("fontSize", value[0])}
                      className="flex-1"
                    />
                    <Type className="h-6 w-6 text-gray-500" />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium">Altura de línea</label>
                    <span className="text-xs text-gray-500">{settings.lineHeight}%</span>
                  </div>
                  <Slider
                    value={[settings.lineHeight]}
                    min={100}
                    max={200}
                    step={10}
                    onValueChange={(value) => updateSetting("lineHeight", value[0])}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium">Espaciado entre letras</label>
                    <span className="text-xs text-gray-500">{settings.letterSpacing}px</span>
                  </div>
                  <Slider
                    value={[settings.letterSpacing]}
                    min={0}
                    max={10}
                    step={0.5}
                    onValueChange={(value) => updateSetting("letterSpacing", value[0])}
                  />
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#F3D9E2] p-3">
                  <div className="flex items-center gap-2">
                    <Type className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <p className="font-medium">Fuente para dislexia</p>
                      <p className="text-xs text-gray-500">Utiliza una fuente especial para facilitar la lectura</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.dyslexicFont}
                    onCheckedChange={(checked) => updateSetting("dyslexicFont", checked)}
                    className="data-[state=checked]:bg-[#8E3A59]"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-[#F3D9E2] bg-[#F3D9E2]/10 p-4">
                <div className="flex items-start gap-3">
                  <Type className="h-5 w-5 text-[#8E3A59]" />
                  <div>
                    <h4 className="font-medium">Vista previa de texto</h4>
                    <p className="mt-2">
                      Este es un ejemplo de cómo se verá el texto con la configuración actual. Puedes ajustar los
                      controles para personalizar la apariencia del texto en toda la plataforma.
                    </p>
                    <p className="mt-2">
                      La accesibilidad es importante para garantizar que todas las estudiantes puedan disfrutar de la
                      experiencia de aprendizaje de manera óptima.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="visual" className="mt-0 space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium">Contraste</label>
                    <span className="text-xs text-gray-500">{settings.contrast}%</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Contrast className="h-4 w-4 text-gray-500" />
                    <Slider
                      value={[settings.contrast]}
                      min={75}
                      max={150}
                      step={5}
                      onValueChange={(value) => updateSetting("contrast", value[0])}
                      className="flex-1"
                    />
                    <Contrast className="h-6 w-6 text-gray-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#F3D9E2] p-3">
                  <div className="flex items-center gap-2">
                    <Contrast className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <p className="font-medium">Alto contraste</p>
                      <p className="text-xs text-gray-500">Aumenta el contraste para mejorar la legibilidad</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.highContrast}
                    onCheckedChange={(checked) => updateSetting("highContrast", checked)}
                    className="data-[state=checked]:bg-[#8E3A59]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Tamaño del cursor</label>
                  <Select value={settings.cursorSize} onValueChange={(value) => updateSetting("cursorSize", value)}>
                    <SelectTrigger className="border-[#F3D9E2] focus:ring-[#8E3A59]">
                      <SelectValue placeholder="Seleccionar tamaño" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Normal</SelectItem>
                      <SelectItem value="large">Grande</SelectItem>
                      <SelectItem value="x-large">Extra grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-[#F3D9E2] bg-[#F3D9E2]/10 p-4">
                  <div className="flex items-start gap-3">
                    <MousePointer className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <h4 className="font-medium">Vista previa visual</h4>
                      <p className="mt-2">
                        Esta sección muestra cómo se verán los elementos visuales con la configuración actual. Los
                        ajustes de contraste y tamaño del cursor pueden ayudar a mejorar la experiencia visual.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="motion" className="mt-0 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-[#F3D9E2] p-3">
                  <div className="flex items-center gap-2">
                    <Volume2 className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <p className="font-medium">Reducir movimiento</p>
                      <p className="text-xs text-gray-500">Minimiza animaciones y efectos de movimiento</p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.reducedMotion}
                    onCheckedChange={(checked) => updateSetting("reducedMotion", checked)}
                    className="data-[state=checked]:bg-[#8E3A59]"
                  />
                </div>

                <div className="rounded-lg border border-[#F3D9E2] bg-[#F3D9E2]/10 p-4">
                  <div className="flex items-start gap-3">
                    <Volume2 className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <h4 className="font-medium">Información sobre movimiento</h4>
                      <p className="mt-2">
                        Reducir el movimiento puede ayudar a prevenir mareos o molestias causadas por animaciones. Esta
                        configuración minimizará o eliminará las animaciones en toda la plataforma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="color" className="mt-0 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Esquema de color</label>
                  <div className="flex gap-2">
                    <Button
                      variant={settings.colorScheme === "light" ? "default" : "outline"}
                      className={`flex-1 ${
                        settings.colorScheme === "light"
                          ? "bg-[#8E3A59] hover:bg-[#7A3049]"
                          : "border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]"
                      }`}
                      onClick={() => updateSetting("colorScheme", "light")}
                    >
                      <Sun className="mr-2 h-4 w-4" />
                      Claro
                    </Button>
                    <Button
                      variant={settings.colorScheme === "dark" ? "default" : "outline"}
                      className={`flex-1 ${
                        settings.colorScheme === "dark"
                          ? "bg-[#8E3A59] hover:bg-[#7A3049]"
                          : "border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]"
                      }`}
                      onClick={() => updateSetting("colorScheme", "dark")}
                    >
                      <Moon className="mr-2 h-4 w-4" />
                      Oscuro
                    </Button>
                    <Button
                      variant={settings.colorScheme === "system" ? "default" : "outline"}
                      className={`flex-1 ${
                        settings.colorScheme === "system"
                          ? "bg-[#8E3A59] hover:bg-[#7A3049]"
                          : "border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]"
                      }`}
                      onClick={() => updateSetting("colorScheme", "system")}
                    >
                      Sistema
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Color de acento</label>
                  <Select value={settings.accentColor} onValueChange={(value) => updateSetting("accentColor", value)}>
                    <SelectTrigger className="border-[#F3D9E2] focus:ring-[#8E3A59]">
                      <SelectValue placeholder="Seleccionar color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Rosa (Predeterminado)</SelectItem>
                      <SelectItem value="purple">Púrpura</SelectItem>
                      <SelectItem value="blue">Azul</SelectItem>
                      <SelectItem value="green">Verde</SelectItem>
                      <SelectItem value="orange">Naranja</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="rounded-lg border border-[#F3D9E2] bg-[#F3D9E2]/10 p-4">
                  <div className="flex items-start gap-3">
                    <Palette className="h-5 w-5 text-[#8E3A59]" />
                    <div>
                      <h4 className="font-medium">Vista previa de colores</h4>
                      <p className="mt-2">
                        Esta sección muestra cómo se verán los colores con la configuración actual. Puedes elegir entre
                        el modo claro, oscuro o seguir la configuración de tu sistema.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between border-t border-[#F3D9E2] bg-[#F3D9E2]/5 px-6 py-4">
          <Button
            variant="outline"
            className="border-[#F3D9E2] text-[#8E3A59] hover:bg-[#F3D9E2]"
            onClick={resetSettings}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Restablecer valores predeterminados
          </Button>
          <Button className="bg-[#8E3A59] hover:bg-[#7A3049]">Guardar preferencias</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
