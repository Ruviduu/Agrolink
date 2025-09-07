import { API_ENDPOINTS } from "@/api/apiConfig";
import axios from "axios";

export interface SimpleResponse {
    message: string;
}


export const createMessage = async (
    messageBody: string
): Promise<SimpleResponse> => {
    try {
        const response = await axios.post<SimpleResponse>(
            API_ENDPOINTS.CREATE_MESSAGE,
            {
                messageSubject: 'ADMIN',
                messageBody: messageBody,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data;
    } catch (error: unknown) {
        return {
            message: "Unexpected error occurred",
        };
    }
};

// export const deleteMessage = async (
//     messageBody: string
// ): Promise<SimpleResponse> => {
//     try {
//         const response = await axios.delete<SimpleResponse>(
//             API_ENDPOINTS.CREATE_MESSAGE,
//             {
//                 messageSubject: 'ADMIN',
//                 messageBody: messageBody,
//             },
//             {
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         return response.data;
//     } catch (error: unknown) {
//         return {
//             message: "Unexpected error occurred",
//         };
//     }
// };