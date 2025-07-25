import { useQuery } from "@tanstack/react-query";
import { AuthService } from "../service/auth-service";
import type { MeResponse } from "@/types/api/Auth";

export const useMeQuery = (enabled: boolean) => {
  return useQuery<MeResponse>({
    queryKey: ["me"],
    queryFn: AuthService.me,
    enabled: enabled,
    meta: {
      ERROR_MESSAGE: "Failed to fetch me",
    }
  });
};
