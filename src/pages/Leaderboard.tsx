import LeaderboardHeaderSection from "@/components/ui/leaderboard/LeaderboardHeaderSection.tsx";
import TopLeaderboardSection from "@/components/ui/leaderboard/TopLeaderboardSection.tsx";
import DailyQuestSection from "@/components/ui/leaderboard/DailyQuestSection.tsx";

export default function Leaderboard() {
  return (
    <div className="container flex flex-col mx-auto py-10 gap-5 ">
      <LeaderboardHeaderSection />
      <div className="grid grid-cols-5 gap-5">
        <TopLeaderboardSection />
        <DailyQuestSection />
      </div>
    </div>
  );
}
