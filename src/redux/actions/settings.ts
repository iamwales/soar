import {API_ROUTES} from "@/utils/routes/api_routes";
import {mockApiRequest} from "@/utils/request";
import {user} from "@/data/user";
import {ProfileType} from "@/types/setting/ProfileType";


export const getUserDetails = async () => {
    const url = API_ROUTES.USER;
    const response: any = await mockApiRequest({url, method: "GET", body: user, statusCode: 200});

    return response;
};

export const updateUserProfile = async (data: ProfileType) => {
    const url = API_ROUTES.USER;
    const response: any = await mockApiRequest({url, method: "PUT", body: data, statusCode: 200});

    return response;
};