import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import type { RegisterResponse, RegisterVariables } from "@/types/api/Auth.ts";
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

// export const useLogin = (
//   options?: Omit<
//     UseMutationOptions<LoginResponse, AxiosError<LoginError>, FormData>,
//     "mutationFn"
//   >,
// ) => {
//   return useMutation<LoginResponse, AxiosError<LoginError>, FormData>({
//     mutationFn: AuthService.login,
//     ...options,
//     meta: {
//       ERROR_MESSAGE: "Error Login",
//     },
//   });
// };

// const mutation = useMutation({
//   mutationFn: async () => {
//     const res = await axios.post(
//       `${import.meta.env.VITE_API_URL}/auth/signup`,
//       {
//         username,
//         password,
//         confirmPassword,
//       },
//     );
//     return res.data;
//   },
//   onSuccess: () => {
//     navigate("/login");
//   },
//   onError: (err: any) => {
//     const message = err?.response?.data?.message;
//     setError(message);
//   },
// });
