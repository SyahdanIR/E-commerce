import axios from "axios";
export const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
    // baseURL: "http://localhost:5433/",
})