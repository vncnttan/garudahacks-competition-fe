import { ChartAreaIcon, CrownIcon } from "lucide-react";
import { LeaderboardItems } from "@/components/ui/leaderboard/LeaderboardItem.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { useLeaderboardQuery } from "@/api/query/use-leaderboard-query";
import type { LeaderboardEntry } from "@/types/api/LeaderBoard";

interface UserLeaderboardItemProps {
  leaderboardData : LeaderboardEntry;
  rank : number;
}

function UserLeaderboardItem({leaderboardData, rank} : UserLeaderboardItemProps) {
  return (
    <div className="p-1 flex flex-row place-items-center gap-4">
      <div className="flex flex-row gap-2 place-items-center text-xl">
        {rank} <CrownIcon />
      </div>
      <LeaderboardItems level={leaderboardData.points} endSection={<div>{leaderboardData.points} points</div>} />
    </div>
  );
}

export default function TopLeaderboardSection() {
  const { data } = useLeaderboardQuery();
  const leaderboardResponse : LeaderboardEntry[] | undefined = data?.data

  console.log(leaderboardResponse)

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
            {leaderboardResponse?.map((res, idx) => {
              return(
                <UserLeaderboardItem rank={idx} leaderboardData={res}/>
              )
            })}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
