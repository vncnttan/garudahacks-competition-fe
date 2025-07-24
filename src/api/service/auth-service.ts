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

  me: async (values : MeVariables) : Promise<MeResponse> => {
    const response = await axiosClient.get<MeResponse>(
      ENDPOINT + "/me",
      {
        headers: {
          Authorization: `Bearer ${values.accessToken}`,
        },
      }
    );
    return response.data;
  }
};
