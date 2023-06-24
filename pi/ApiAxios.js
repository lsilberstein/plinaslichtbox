import axios from "axios";

export default function createAxios(baseURL) {
    return axios.create({
        baseURL: baseURL,
        timeout: 1000,
    })
}