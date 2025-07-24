import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from "axios";

// class ApiError extends Error {
//   public code: string;
//   public status: number;
//
//   constructor(message: string, code: string, status: number) {
//     super(message);
//     this.name = "ApiError";
//     this.code = code;
//     this.status = status;
//   }
// }

const STORAGE_KEYS = {
  // @ts-ignore
  ACCESS_TOKEN: import.meta.env.VITE_ACCESS_TOKEN_KEY as string,
  REFRESH_TOKEN: "refresh_token",
} as const;

export const axiosClient: AxiosInstance = axios.create({
  // @ts-ignore
  baseURL: (import.meta.env.VITE_BASE_URL as string) + "/api",
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

// interface ErrorResponseData {
//   message?: string;
//   code?: string;
// }

// axiosClient.interceptors.response.use(
//   (response: AxiosResponse): AxiosResponse => {
//     return response;
//   },
//   async (error: AxiosError<ErrorResponseData>): Promise<AxiosResponse> => {
//     const originalRequest = error.config;
//
//     if (
//       error.response?.status === 401 &&
//       originalRequest &&
//       !originalRequest._retry
//     ) {
//       originalRequest._retry = true;
//
//       try {
//         const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
//         const response = await axios.post(
//           `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
//           { refreshToken },
//         );
//
//         const { accessToken, refreshToken: newRefreshToken } =
//           response.data as Record<string, string>;
//
//         localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
//         localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, newRefreshToken);
//
//         originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//         return axiosClient(originalRequest);
//       } catch (refreshError: unknown) {
//         console.error("Token refresh failed:", refreshError);
//
//         localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
//         localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
//         window.location.href = "/login";
//       }
//     }
//
//     // Standardize and reject all errors with ApiError
//     const apiError = new ApiError(
//       error.response?.data?.message ?? "An unexpected error occurred",
//       error.response?.data?.code ?? "UNKNOWN_ERROR",
//       error.response?.status ?? 500,
//     );
//
//     return Promise.reject(apiError);
//   },
// );
