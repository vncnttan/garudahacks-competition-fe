import type { UserLevel } from "./UserLevel";

export interface User {
    id: string,
    username: string,
    points: number,
    experience: number,
    level: UserLevel,
}