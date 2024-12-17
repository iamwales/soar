import {ApiError, ApiResponse, MockApiRequestOptions} from "@/types/utils/APIRequestType";

export const mockApiRequest = <T>(options: MockApiRequestOptions): Promise<ApiResponse<T> | ApiError> => {
    const { url, method = 'GET', body, statusCode = 200, delay = 100 } = options;

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (statusCode >= 200 && statusCode < 300) {
                resolve({
                    status: statusCode,
                    data: body || ({} as T),
                    message: `Successfully mocked ${method} request`,
                });
            }

            // Simulate client or server error (status 400-499 for client, 500-599 for server)
            else {
                reject({
                    status: statusCode,
                    message: `Error mocking ${method} request with status code ${statusCode}`,
                });
            }
        }, delay);
    });
};