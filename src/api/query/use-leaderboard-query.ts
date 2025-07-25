import type { LeaderboardEntry, LeaderboardResponse } from "@/types/api/LeaderBoard"
import { useQuery } from "@tanstack/react-query"
import { LeaderboardService } from "../service/leaderboard-service"

export const useLeaderboardQuery = () => {
    return useQuery<LeaderboardResponse<LeaderboardEntry[]>>({
        queryKey: ["leaderboard"],
        queryFn: LeaderboardService.getLeaderboard,
        meta: {
            ERROR_MESSAGE : "Failed to fetch leaderboard",
        }
    })
}