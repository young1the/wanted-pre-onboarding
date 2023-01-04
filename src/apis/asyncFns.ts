import { axiosInstance, PATH } from "./axios";

export const getManagerList = async () => {
    const response = await axiosInstance.get(PATH.MANAGER, {
    });
    return response.data;
};
  