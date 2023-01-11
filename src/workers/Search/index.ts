import axios, { AxiosInstance } from "axios";
import { PATHS } from "@/constants/api";
import { TSickInfo, TSickParams } from "@/types/api";

interface ISearchWorker {
  axiosInstance: AxiosInstance;
  getSickInfoByQueryString({ q }: TSickParams): Promise<TSickInfo[]>;
}

class SearchWorker implements ISearchWorker {
  axiosInstance = axios.create({ baseURL: PATHS.BASE_URL });
  async getSickInfoByQueryString(params: TSickParams) {
    const { data } = await this.axiosInstance.get<TSickInfo[]>(PATHS.SICK, {
      params,
    });
    return data;
  }
}

export default new SearchWorker();
