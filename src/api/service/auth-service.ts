import { axiosClient } from "@/api/axiosClient.ts";
import type { RegisterVariables } from "@/types/api/Auth.ts";

const ENDPOINT = "";

export const AuthService = {
  register: async (values: RegisterVariables) => {
    const response = await axiosClient.post<RegisterVariables>(
      ENDPOINT + "/login",
      values,
    );
    return response.data;
  },
};
