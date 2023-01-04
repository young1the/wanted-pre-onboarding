import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "http://test.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const PATH = {
  MANAGER: "/manager",
  ISSUE: "/issue",
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
