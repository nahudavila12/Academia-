import ForumDiscussions from "@/components/community/forum";
import StudyGroups from "@/components/community/study-gropus";

export default function CommunityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight text-[#8E3A59]">Comunidad</h1>
      <p className="text-gray-500">Conecta con otras estudiantes, comparte experiencias y aprende juntas</p>

      <ForumDiscussions />
      <StudyGroups />
    </div>
  )
}
