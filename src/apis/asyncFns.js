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

export const getIssues = async () => {
  const {data} = await axiosInstance.get(PATH.ISSUE, {});
  return data;
};

export const getIssueById = async (id) => {
  const {data} = await axiosInstance.get(PATH.ISSUE + id, {});
  return data;
}

export const deleteIssue = async (id) => {
  const {data} = await axiosInstance.delete(PATH.ISSUE + id, {});
  return data;
}

export const updateIssue = async (id, { title, time, content, managers,status }) => {
  const {data} = await axiosInstance.put(PATH.ISSUE + id, {
    title,
    time,
    content,
    managers,
    id,
    status,
  });
  return data;
}