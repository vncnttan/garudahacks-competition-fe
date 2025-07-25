import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from "axios";

const STORAGE_KEYS = {
  // @ts-ignore
  ACCESS_TOKEN: import.meta.env.VITE_ACCESS_TOKEN_KEY as string,
  REFRESH_TOKEN: "refresh_token",
} as const;

export const axiosClient: AxiosInstance = axios.create({
  // @ts-ignore
  baseURL: (import.meta.env.VITE_BASE_URL as string),
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