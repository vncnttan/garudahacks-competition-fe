import { LeaderboardItems } from "@/components/ui/leaderboard/LeaderboardItem.tsx";

export default function LeaderboardHeaderSection() {
  return (
    <LeaderboardItems
      endSection={
        <div className="space-y-0.5 place-items-end">
          <div className="font-medium">Next Level Progress</div>
          <div className="font-medium">110 XP to level 14</div>
        </div>
      }
    />
  );
}
