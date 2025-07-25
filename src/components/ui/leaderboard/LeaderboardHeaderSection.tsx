import { LeaderboardItems } from "@/components/ui/leaderboard/LeaderboardItem.tsx";
import { Slider } from "@/components/ui/slider.tsx";
import { cn } from "@/lib/utils.ts";
import { Card, CardContent } from "../card";
import { useMeQuery } from "@/api/query/use-user-query";

export default function LeaderboardHeaderSection() {
  const {data} = useMeQuery();
  const user = data?.data;
  
  console.log(user)

  return (
    <Card>
      <CardContent>
        <LeaderboardItems
        level={user?.level.currentLevel}
          endSection={
            <div className="space-y-2 place-items-end">
              <div className="font-medium">Next Level Progress</div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className={cn("w-[150%]")}
              />
              <div className="font-medium">{user?.level.expToNextLevel} XP to level {user?.level.currentLevel! + 1}</div>
            </div>
          }
        />
      </CardContent>
    </Card>
  );
}
