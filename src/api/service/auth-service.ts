import { axiosClient } from "@/api/axiosClient.ts";
import type { LoginResponse, LoginVariables, RegisterResponse, RegisterVariables } from "@/types/api/Auth.ts";

const ENDPOINT = "/auth";

export const AuthService = {
  register: async (values: RegisterVariables) : Promise<RegisterResponse> => {
    const response = await axiosClient.post<RegisterResponse>(
      ENDPOINT + "/signup",
      values,
    );
    return response.data;
  },

  login: async (values: LoginVariables) : Promise<LoginResponse<string>> => {
    const response = await axiosClient.post<LoginResponse<string>>(
      ENDPOINT + "/login",
      values
    );
    return response.data;
  }
};
