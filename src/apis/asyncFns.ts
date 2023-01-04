import { axiosInstance, PATH } from "./axios";

export const getManagerList = async () => {
  const response = await axiosInstance.get(PATH.MANAGER, {});
  return response.data;
};

export const createIssue = async ({ title, time, content, managers }) => {
  const response = await axiosInstance.post(PATH.ISSUE, {
    title,
    time,
    content,
    managers,
    status: "todo",
  });
  return response.data;
};
