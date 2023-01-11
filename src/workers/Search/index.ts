import { PATHS } from "@/constants/api";
import { TSickInfo, TSickParams } from "@/types/api";
import { axiosInstance } from "@/lib/axios";

interface ISearchWorker {
  getSickInfoByQueryString(value: string): Promise<TSickInfo[]>;
}

class SearchWorker implements ISearchWorker {
  async getSickInfoByQueryString(value: string) {
    const params: TSickParams = { q: value };
    const { data } = await axiosInstance.get<TSickInfo[]>(PATHS.SICK, {
      params,
    });
    return data;
  }
}

export default new SearchWorker();
