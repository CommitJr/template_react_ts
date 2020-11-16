import axios from "axios";
import apiConfig from '../config/api.json';

const getApiBase = () => {

    const apiBaseUrl:string = apiConfig.local;
    // const apiBaseUrl = apiConfig.dev;
    // const apiBaseUrl = apiConfig.prod;

    const token = localStorage.getItem("token");

    const api = axios.create({
        baseURL: apiBaseUrl,
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
        },
    });

    return api;
}

export default getApiBase;
