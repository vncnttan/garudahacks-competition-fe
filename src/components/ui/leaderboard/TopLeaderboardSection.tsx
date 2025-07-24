import { ChartAreaIcon, CrownIcon, FlameIcon, Triangle } from "lucide-react";
import LeaderboardItem, {
  LeaderboardItems,
} from "@/components/ui/leaderboard/LeaderboardItem.tsx";

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
    <div className="w-full bg-white rounded-md flex flex-col p-6 col-span-3">
      <div className="flex flex-row gap-2 p-2">
        <ChartAreaIcon /> Top Leaderboard
      </div>
      <UserLeaderboardItem />
      <UserLeaderboardItem />
      <UserLeaderboardItem />
      <UserLeaderboardItem />
      <UserLeaderboardItem />
    </div>
  );
}
