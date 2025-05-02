"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Bell, BellOff, Coffee, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type TimerMode = "pomodoro" | "shortBreak" | "longBreak"

export default function FocusTimer() {
  const [isRunning, setIsRunning] = useState(false)
  const [mode, setMode] = useState<TimerMode>("pomodoro")
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [cycles, setCycles] = useState(0)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [backgroundNoise, setBackgroundNoise] = useState<string | null>(null)
  const [volume, setVolume] = useState(50)
  const [autoStartBreaks, setAutoStartBreaks] = useState(true)
  const [autoStartPomodoros, setAutoStartPomodoros] = useState(false)

  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const timerSettings = {
    pomodoro: 25 * 60, // 25 minutes
    shortBreak: 5 * 60, // 5 minutes
    longBreak: 15 * 60, // 15 minutes
  }

  useEffect(() => {
    // Reset timer when mode changes
    setTimeLeft(timerSettings[mode])
    setIsRunning(false)

    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [mode])

  useEffect(() => {
    // Timer logic
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            // Timer completed
            clearInterval(timerRef.current as NodeJS.Timeout)
            handleTimerComplete()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isRunning])

  useEffect(() => {
    // Background noise logic
    if (backgroundNoise && soundEnabled) {
      if (!audioRef.current) {
        audioRef.current = new Audio()
        audioRef.current.loop = true
      }

      // Different audio sources based on selection
      switch (backgroundNoise) {
        case "whitenoise":
          // In a real app, you would use actual audio files
          audioRef.current.src = "/placeholder-audio.mp3"
          break
        case "rain":
          audioRef.current.src = "/placeholder-audio.mp3"
          break
        case "cafe":
          audioRef.current.src = "/placeholder-audio.mp3"
          break
        case "nature":
          audioRef.current.src = "/placeholder-audio.mp3"
          break
        default:
          audioRef.current.src = ""
      }

      audioRef.current.volume = volume / 100
      audioRef.current.play().catch((e) => console.error("Audio play failed:", e))
    } else if (audioRef.current) {
      audioRef.current.pause()
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [backgroundNoise, soundEnabled, volume])

  const handleTimerComplete = () => {
    if (soundEnabled) {
      // Play notification sound
      const notification = new Audio("/placeholder-audio.mp3")
      notification.play().catch((e) => console.error("Notification sound failed:", e))
    }

    if (mode === "pomodoro") {
      const newCycles = cycles + 1
      setCycles(newCycles)

      // After 4 pomodoros, take a long break
      if (newCycles % 4 === 0) {
        setMode("longBreak")
        if (autoStartBreaks) {
          setTimeLeft(timerSettings.longBreak)
          setIsRunning(true)
        } else {
          setTimeLeft(timerSettings.longBreak)
          setIsRunning(false)
        }
      } else {
        setMode("shortBreak")
        if (autoStartBreaks) {
          setTimeLeft(timerSettings.shortBreak)
          setIsRunning(true)
        } else {
          setTimeLeft(timerSettings.shortBreak)
          setIsRunning(false)
        }
      }
    } else {
      // After break, go back to pomodoro
      setMode("pomodoro")
      if (autoStartPomodoros) {
        setTimeLeft(timerSettings.pomodoro)
        setIsRunning(true)
      } else {
        setTimeLeft(timerSettings.pomodoro)
        setIsRunning(false)
      }
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const calculateProgress = () => {
    const total = timerSettings[mode]
    return ((total - timeLeft) / total) * 100
  }

  const handleStartPause = () => {
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(timerSettings[mode])
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
  }

  const getModeIcon = () => {
    switch (mode) {
      case "pomodoro":
        return <Brain className="h-6 w-6 text-[#8E3A59]" />
      case "shortBreak":
        return <Coffee className="h-6 w-6 text-[#5D8CAE]" />
      case "longBreak":
        return <Coffee className="h-6 w-6 text-[#5D8CAE]" />
      default:
        return <Brain className="h-6 w-6 text-[#8E3A59]" />
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-[#F3D9E2]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-[#8E3A59]">
            {getModeIcon()}
            Temporizador de Enfoque
          </CardTitle>
          <CardDescription>Utiliza la técnica Pomodoro para mejorar tu concentración y productividad</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8 flex flex-col items-center">
            <Tabs value={mode} onValueChange={(value) => setMode(value as TimerMode)} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3 bg-[#F3D9E2]/30">
                <TabsTrigger
                  value="pomodoro"
                  className="data-[state=active]:bg-[#8E3A59] data-[state=active]:text-white"
                >
                  Pomodoro
                </TabsTrigger>
                <TabsTrigger
                  value="shortBreak"
                  className="data-[state=active]:bg-[#5D8CAE] data-[state=active]:text-white"
                >
                  Descanso Corto
                </TabsTrigger>
                <TabsTrigger
                  value="longBreak"
                  className="data-[state=active]:bg-[#5D8CAE] data-[state=active]:text-white"
                >
                  Descanso Largo
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="my-8 flex h-64 w-64 flex-col items-center justify-center rounded-full border-8 border-[#F3D9E2]">
              <div className="text-5xl font-bold text-[#8E3A59]">{formatTime(timeLeft)}</div>
              <div className="mt-2 text-sm text-gray-500">
                {mode === "pomodoro" ? "Tiempo de estudio" : "Tiempo de descanso"}
              </div>
            </div>

            <Progress
              value={calculateProgress()}
              className={`mb-6 h-2 w-full max-w-md bg-[#F3D9E2] ${
                mode === "pomodoro" ? "indicator:bg-[#8E3A59]" : "indicator:bg-[#5D8CAE]"
              }`}
            />

            <div className="mb-4 flex gap-3">
              <Button
                onClick={handleStartPause}
                className={`h-12 w-12 rounded-full ${
                  mode === "pomodoro" ? "bg-[#8E3A59] hover:bg-[#7A3049]" : "bg-[#5D8CAE] hover:bg-[#4A7A9D]"
                }`}
                aria-label={isRunning ? "Pausar" : "Iniciar"}
              >
                {isRunning ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="h-12 w-12 rounded-full border-[#F3D9E2]"
                aria-label="Reiniciar"
              >
                <RotateCcw className="h-5 w-5 text-gray-600" />
              </Button>
            </div>

            <div className="text-sm text-gray-500">
              Ciclos completados: <span className="font-medium text-[#8E3A59]">{cycles}</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-[#F3D9E2]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#8E3A59]">Sonido Ambiental</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {soundEnabled ? (
                        <Bell className="h-4 w-4 text-[#8E3A59]" />
                      ) : (
                        <BellOff className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="text-sm">Sonido</span>
                    </div>
                    <Switch
                      checked={soundEnabled}
                      onCheckedChange={setSoundEnabled}
                      className="data-[state=checked]:bg-[#8E3A59]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-500">Sonido de fondo</label>
                    <Select value={backgroundNoise || ""} onValueChange={setBackgroundNoise} disabled={!soundEnabled}>
                      <SelectTrigger className="border-[#F3D9E2] focus:ring-[#8E3A59]">
                        <SelectValue placeholder="Seleccionar sonido" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Ninguno</SelectItem>
                        <SelectItem value="whitenoise">Ruido blanco</SelectItem>
                        <SelectItem value="rain">Lluvia</SelectItem>
                        <SelectItem value="cafe">Café</SelectItem>
                        <SelectItem value="nature">Naturaleza</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm text-gray-500">Volumen</label>
                      <span className="text-xs text-gray-500">{volume}%</span>
                    </div>
                    <Slider
                      value={[volume]}
                      min={0}
                      max={100}
                      step={1}
                      onValueChange={(value: number[]) => setVolume(value[0])}
                      disabled={!soundEnabled}
                      className="data-[disabled]:opacity-50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#F3D9E2]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-[#8E3A59]">Configuración</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Auto-iniciar descansos</label>
                    <Switch
                      checked={autoStartBreaks}
                      onCheckedChange={setAutoStartBreaks}
                      className="data-[state=checked]:bg-[#8E3A59]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Auto-iniciar pomodoros</label>
                    <Switch
                      checked={autoStartPomodoros}
                      onCheckedChange={setAutoStartPomodoros}
                      className="data-[state=checked]:bg-[#8E3A59]"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
