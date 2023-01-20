import axios from "axios";
import { PATHS } from "@/constants/api";

export const axiosInstance = axios.create({
  baseURL: PATHS.BASE_URL,
});
