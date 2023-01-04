import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://wanted-wemade-default-rtdb.asia-southeast1.firebasedatabase.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const PATH = {
  MANAGER: "/manager.json",
};

export async function requestAxios(asyncFn) {
  try {
    return [await asyncFn, null];
  } catch (error) {
    if (axios.isAxiosError(error)) return [null, error.response];
    throw error;
    return [null, error];
  }
}
