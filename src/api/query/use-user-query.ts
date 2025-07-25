import { useQuery } from "@tanstack/react-query";
import { AuthService } from "../service/auth-service";
import type { MeResponse } from "@/types/api/Auth";

export const useMeQuery = () => {
  return useQuery<MeResponse>({
    queryKey: ["me"],
    queryFn: AuthService.me,
    meta: {
      ERROR_MESSAGE: "Failed to fetch me",
    }
  });
};
