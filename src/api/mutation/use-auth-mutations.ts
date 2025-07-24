import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import type { LoginResponse, LoginVariables, RegisterResponse, RegisterVariables } from "@/types/api/Auth.ts";
import type { ApiErrorResponse } from "@/types/api/Api.ts";
import { AuthService } from "@/api/service/auth-service.ts";

export const useRegisterMutation = (
  options?: Omit<
    UseMutationOptions<
      RegisterResponse,
      AxiosError<ApiErrorResponse>,
      RegisterVariables
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: AuthService.register,
    ...options,
    meta: {
      ERROR_MESSAGE: "Error Register",
      SUCCESS_MESSAGE: "Registration successful! Please log in.",
    },
  });
};

export const useLoginMutation = (
  options?: Omit<
    UseMutationOptions<
      LoginResponse<string>,
      AxiosError<ApiErrorResponse>,
      LoginVariables
    >,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: AuthService.login,
    ...options,
    meta: {
      ERROR_MESSAGE: "Error Login",
    }
  })
}