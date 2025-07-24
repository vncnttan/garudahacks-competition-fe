import LeaderboardItem, {
  LeaderboardItems,
} from "@/components/ui/leaderboard/LeaderboardItem.tsx";

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

    // <div className="w-full bg-white rounded-md flex flex-row justify-between p-6">
    //   <div className="flex flex-col justify-between">
    //     <div className="text-xl font-semibold">Username</div>
    //     <div className="flex flex-row gap-5">
    //       <LeaderboardItem
    //         icon={<TriangleIcon size={12} />}
    //         value={"Level 12"}
    //       />
    //       <LeaderboardItem
    //         icon={<FlameIcon size={12} />}
    //         value={"10 day streak"}
    //       />
    //     </div>
    //   </div>
    //   <div className="space-y-0.5 place-items-end">
    //     <div className="font-medium">Next Level Progress</div>
    //     <div className="font-medium">110 XP to level 14</div>
    //   </div>
    // </div>
  );
}
