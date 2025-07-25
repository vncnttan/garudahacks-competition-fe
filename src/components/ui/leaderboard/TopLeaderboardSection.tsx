import { ChartAreaIcon, CrownIcon } from "lucide-react";
import { LeaderboardItems } from "@/components/ui/leaderboard/LeaderboardItem.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

function UserLeaderboardItem() {
  return (
    <div className="p-1 flex flex-row place-items-center gap-4">
      <div className="flex flex-row gap-2 place-items-center text-xl">
        #1 <CrownIcon />
      </div>
      <LeaderboardItems endSection={<div>1000 points</div>} />
    </div>
  );
}

export default function TopLeaderboardSection() {
  return (
    <div className="w-full flex flex-col col-span-3">
      <Card className="h-full">
        <CardHeader>
          <div className="flex gap-5 items-center">
            <ChartAreaIcon />
            <CardTitle className="text-2xl">Top Leaderboard</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <UserLeaderboardItem />
            <UserLeaderboardItem />
            <UserLeaderboardItem />
            <UserLeaderboardItem />
            <UserLeaderboardItem />
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
