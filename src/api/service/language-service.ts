import { axiosClient } from "@/api/axiosClient.ts";
import type { Language, LanguageResponse } from "@/types/api/Language";

const ENDPOINT = "/languages";

export const LanguageService = {
  getAllLanguages: async () : Promise<LanguageResponse<Language[]>> => {
    const response = await axiosClient.get<LanguageResponse<Language[]>>(
      ENDPOINT,
      { }
    );
    return response.data;
  }
};
