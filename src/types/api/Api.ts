export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface QueryResult<T> {
  items: T[];
}

export interface ApiErrorResponse {
  message: string;
}
