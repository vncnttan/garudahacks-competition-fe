import { FlameIcon, TriangleIcon } from "lucide-react";
import DictionaryCard from "@/components/ui/dictionary/DictionaryCard.tsx";
import { Card, CardContent } from "@/components/ui/card";

function ProfileItem({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex flex-row place-items-center gap-2">
      <div>{icon}</div>
      <div className="mt-1">{value}</div>
    </div>
  );
}

function ProfileHeader() {
  return (
    <div className="w-full rounded-md flex flex-row justify-between">
      <Card className="w-full">
        <CardContent>
          <div className="flex flex-col justify-between">
            <div className="text-2xl font-semibold">Username</div>
            <div className="flex flex-row gap-5 mt-5">
              <ProfileItem
                icon={<TriangleIcon size={14} fill="black" />}
                value={"Level 14"}
              />
              <ProfileItem
                icon={<FlameIcon size={18} fill="red" />}
                value={"10 day streak"}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Profile() {
  return (
    <div className="container flex flex-col mx-auto p-10 xl:px-72 gap-5">
      <ProfileHeader />
      <DictionaryCard />
      <DictionaryCard />
    </div>
  );
}
