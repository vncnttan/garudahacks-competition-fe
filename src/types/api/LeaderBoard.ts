export interface LeaderboardResponse<T> {
    success: boolean,
    message: string,
    data: T,
}

export interface LeaderboardUser {
    id : string,
    username : string
}

export interface LeaderboardEntry {
    id: string,
    points: number,
    userId: string,
    user: LeaderboardUser,
    createdAt: Date,
    updateAt: Date
}