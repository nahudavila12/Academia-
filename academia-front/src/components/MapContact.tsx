"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"

// Fix para los iconos de Leaflet en Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
})

export default function MapContact() {
  useEffect(() => {
    // Esto es para evitar problemas de SSR con Leaflet
    import("leaflet/dist/leaflet.css")
  }, [])

  return (
    <MapContainer
      center={[-28.464384412602524, -65.80315252539982]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-28.464384412602524, -65.80315252539982]} icon={icon}>
        <Popup>
          Aquí está la ubicación de la academia.
        </Popup>
      </Marker>
    </MapContainer>
  )
} 