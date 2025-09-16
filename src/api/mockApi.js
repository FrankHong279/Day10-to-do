import axios from "axios";
import {message} from "antd";

const api = axios.create({
    baseURL: "https://68c7ac8c5d8d9f514732871a.mockapi.io",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10_000
})

api.interceptors.response.use(
    (response) => {
        // handle response
        return response;
    },
    (error) => {
        const {status} = error.response;
        if (status === 404) {
            message.error(error.message, 10_000).then(r => {});
        }
        return Promise.reject(error);
    }
);

export {api}