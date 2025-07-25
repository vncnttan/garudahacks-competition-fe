import { axiosClient } from "@/api/axiosClient.ts";
import type { LoginResponse, LoginVariables, MeResponse, MeVariables, RegisterResponse, RegisterVariables } from "@/types/api/Auth.ts";

const ENDPOINT = "/auth";

export const AuthService = {
  register: async (values: RegisterVariables) : Promise<RegisterResponse> => {
    const response = await axiosClient.post<RegisterResponse>(
      ENDPOINT + "/signup",
      values,
    );
    return response.data;
  },

  login: async (values: LoginVariables) : Promise<LoginResponse<object>> => {
    const response = await axiosClient.post<LoginResponse<object>>(
      ENDPOINT + "/login",
      values
    );
    return response.data;
  },

  me: async () : Promise<MeResponse> => {
    const response = await axiosClient.get<MeResponse>(
      ENDPOINT + "/me",
    );
    return response.data;
  }
};
