import { useQuery } from "@tanstack/react-query";
import type { Language, LanguageResponse } from "@/types/api/Language";
import { LanguageService } from "../service/language-service";

export const useLanguagesQuery = () => {
  return useQuery<LanguageResponse<Language[]>>({
    queryKey: ["languages"],
    queryFn: LanguageService.getAllLanguages,
    meta: {
      ERROR_MESSAGE: "Failed to fetch languages",
    }
  });
};
