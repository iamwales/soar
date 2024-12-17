import {API_ROUTES} from "@/utils/routes/api_routes";
import {mockApiRequest} from "@/utils/request";
import {transactions} from "@/data/transactions";
import {users} from "@/data/users";
import {SendMoneyType} from "@/types/dashboard";
import {ApiError, ApiResponse} from "@/types/utils/APIRequestType";

export const getTransactions = async () => {
    const url = API_ROUTES.TRANSACTION;
    const response: ApiResponse | ApiError = await mockApiRequest({url, method: "GET", body: transactions, statusCode: 200});


    return response;
};

export const getUsers = async () => {
    const url = API_ROUTES.USERS;
    const response: ApiResponse | ApiError = await mockApiRequest({
      url,
      method: "GET",
      body: users,
      statusCode: 200,
    });

    return response;
};

export const sendMoney = async (data: SendMoneyType) => {
    const url = API_ROUTES.USERS;
    const response: ApiResponse | ApiError = await mockApiRequest({
      url,
      method: "POST",
      body: data,
      statusCode: 200,
    });

    return response;
};