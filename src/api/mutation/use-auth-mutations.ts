import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import type {
  LoginResponse,
  LoginVariables,
  MeResponse,
  MeVariables,
  RegisterResponse,
  RegisterVariables,
} from "@/types/api/Auth.ts";
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
      LoginResponse<object>,
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
    },
  });
};

export const useMeMutation = (
  options?: Omit<
    UseMutationOptions<MeResponse, AxiosError<ApiErrorResponse>, MeVariables>,
    "mutationFn"
  >,
) => {
  return useMutation({
    mutationFn: AuthService.me,
    ...options,
    meta: {
      ERROR_MESSAGE: "Error Login",
    },
  });
};
