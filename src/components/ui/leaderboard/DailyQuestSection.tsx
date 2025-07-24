import { List } from "lucide-react";

export default function DailyQuestSection() {
  return (
    <div className="w-full bg-white rounded-md flex flex-col gap-4 p-6 col-span-2">
      <div className="flex flex-row gap-2 p-2">
        <List /> Daily Quests
        <div></div>
      </div>
    </div>
  );
}
