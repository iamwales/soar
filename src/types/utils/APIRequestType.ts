import exp from "node:constants";

export interface ApiResponse<T = any> {
    status: number;
    data: T;
    message: string;
}

export interface ApiError {
    status: number;
    message: string;
}

export type MockApiRequestOptions = {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    statusCode?: number;
    delay?: number;
};