import type { ApiResponse } from "./Api";
import type { User } from "./User";

export interface RegisterVariables {
  username: string;
  password: string;
  confirmPassword: string;
  //   TODO: Define types
}

export type RegisterResponse = ApiResponse<User>;

export interface LoginVariables {
  username: string,
  password: string,
}

export interface LoginResponse<T> {
  success: boolean,
  message: string,
  data: T,
}
