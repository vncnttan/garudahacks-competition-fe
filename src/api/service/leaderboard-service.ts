import type { LeaderboardEntry, LeaderboardResponse } from "@/types/api/LeaderBoard"
import { axiosClient } from "../axiosClient"

const ENDPOINT = "/leaderboard"

export const LeaderboardService = {
    getLeaderboard: async () : Promise<LeaderboardResponse<LeaderboardEntry[]>> => {
        const response = await axiosClient.get<LeaderboardResponse<LeaderboardEntry[]>>(
            ENDPOINT,
            { }
        );
        return response.data;
    }
}