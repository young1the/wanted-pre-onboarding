import { axiosInstance, PATH } from "./axios";

export const getManagerList = async () => {
  const response = await axiosInstance.get(PATH.MANAGER, {});
  return response.data;
};

export const createIssue = async ({ title, time, content, managers, status }) => {
  const response = await axiosInstance.post(PATH[status], {
    title,
    time,
    content,
    managers,
    status,
  });
  return response.data;
};

export const getIssues = async (type) => {
  const {data} = await axiosInstance.get(PATH[type], {});
  return data;
};

export const getIssueById = async ({status, id}) => {
  const {data} = await axiosInstance.get(PATH[status] + id, {});
  return data;
}

export const deleteIssue = async ({status, id}) => {
  console.log(status, id);
  const {data} = await axiosInstance.delete(PATH[status] + id, {});
  return data;
}

export const updateIssue = async (prevStatus, { title, time, content, managers, status, id }) => {
  const {data} = await axiosInstance.put(PATH[prevStatus] + id, {
    title,
    time,
    content,
    managers,
    id,
    status,
  });
  return data;
}

// {id, status}
export const updateIssueOrder = async ({prev, next}) => {
  console.log(`gogogo ${prev.id},${next.id}`);
  const {data} = await axiosInstance.put(PATH.ISSUE + prev.id, {
    prev,
    next,
  });
  return data;
}