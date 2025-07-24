import { FlameIcon, TriangleIcon } from "lucide-react";
import type { ReactNode } from "react";

export default function LeaderboardItem({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="flex flex-row place-items-center gap-2">
      {icon}
      <div>{value}</div>
    </div>
  );
}

export function LeaderboardItems({ endSection }: { endSection?: ReactNode }) {
  return (
    <div className="w-full bg-white rounded-md flex flex-row justify-between p-6">
      <div className="flex flex-col justify-between">
        <div className="text-xl font-semibold">Username</div>
        <div className="flex flex-row gap-5">
          <LeaderboardItem
            icon={<TriangleIcon size={12} />}
            value={"Level 12"}
          />
          <LeaderboardItem
            icon={<FlameIcon size={12} />}
            value={"10 day streak"}
          />
        </div>
      </div>
      {endSection}
    </div>
  );
}
