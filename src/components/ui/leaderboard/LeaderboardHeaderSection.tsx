import { LeaderboardItems } from "@/components/ui/leaderboard/LeaderboardItem.tsx";
import { Slider } from "@/components/ui/slider.tsx";
import { cn } from "@/lib/utils.ts";

export default function LeaderboardHeaderSection() {
  return (
    <LeaderboardItems
      endSection={
        <div className="space-y-2 place-items-end">
          <div className="font-medium">Next Level Progress</div>
          <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn("w-[150%]")}
          />
          <div className="font-medium">110 XP to level 14</div>
        </div>
      }
    />
  );
}
