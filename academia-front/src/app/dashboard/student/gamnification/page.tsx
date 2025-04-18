import BadgesSystem from "@/components/gamnification/badge";
import Leaderboard from "@/components/gamnification/ladearboard";
import PointsSystem from "@/components/gamnification/pointsystem";

export default function GamificationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Gamificación</h1>
      <p className="text-gray-500">Haz tu aprendizaje más divertido y motivador</p>

      <PointsSystem />
      <BadgesSystem />
      <Leaderboard />
    </div>
  )
}
