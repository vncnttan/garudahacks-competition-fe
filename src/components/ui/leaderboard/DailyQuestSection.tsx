import { BookIcon, List } from "lucide-react";
import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

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
    <div className="w-full flex flex-col gap-4 col-span-2">
      <Card className="h-full">
        <CardHeader>
          <div className="flex gap-5 items-center">
            <List />
            <CardTitle className="text-2xl">Daily Quests</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <QuestItem icon={<BookIcon />} />
          <QuestItem icon={<BookIcon />} />
          <QuestItem icon={<BookIcon />} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
