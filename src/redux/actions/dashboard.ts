import {API_ROUTES} from "@/utils/routes/api_routes";
import {mockApiRequest} from "@/utils/request";
import {transactions} from "@/data/transactions";

export const getTransactions = async () => {
    const url = API_ROUTES.TRANSACTION;
    const response: any = await mockApiRequest({url, method: "GET", body: transactions, statusCode: 200});

    console.log(response);

    return response;
};