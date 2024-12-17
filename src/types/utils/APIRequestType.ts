export interface ApiResponse<T = unknown> {
  status: number;
  data: T;
  message: string;
}

export interface ApiError<T = unknown> {
  status: number;
  message: string;
  data: T;
}

export type MockApiRequestOptions = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  statusCode?: number;
  delay?: number;
};
