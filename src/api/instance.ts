import axios from "axios";
import key from "./key";

const instance = axios.create({
    baseURL: import.meta.env['VITE_BASE_URL'],
    params: {
        key
    }
})

export { instance };