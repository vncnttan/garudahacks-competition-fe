import { BookIcon, List } from "lucide-react";
import type { ReactNode } from "react";

function QuestItem({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex flex-row gap-5 place-items-center p-4 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
      <div className="rounded-full bg-red-200 text-red-600 p-3">{icon}</div>
      <div className="flex flex-col">
        <div className="text-2xl font-semibold">First Word</div>
        <div className="text-md">Add your first word!</div>
      </div>
    </div>
  );
}

export default function DailyQuestSection() {
  return (
    <div className="w-full bg-white rounded-md flex flex-col gap-4 p-6 col-span-2">
      <div className="flex flex-row gap-2 p-2">
        <List /> Daily Quests
      </div>
      <QuestItem icon={<BookIcon />} />
      <QuestItem icon={<BookIcon />} />
      <QuestItem icon={<BookIcon />} />
    </div>
  );
}
