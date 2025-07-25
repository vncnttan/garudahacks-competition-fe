export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  createdAt? : Date;
  updatedAt? : Date;
}

export interface QueryResult<T> {
  items: T[];
}

export interface ApiErrorResponse {
  message: string;
}
