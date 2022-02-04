import axios from "axios";
import { BACK_URL } from "./constants";

export const ax = axios.create({
    baseURL: BACK_URL
});