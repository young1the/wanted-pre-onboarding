import { PATHS } from "@/constants/api";
import { axiosInstance } from ".";
import { TSickParams, TSickInfo } from "@/types/api";

export const getSickInfoByQueryString = async (params: TSickParams) => {
  console.log("api 요청!");
  const { data } = await axiosInstance.get<TSickInfo[]>(PATHS.SICK, {
    params,
  });
  return data;
};
