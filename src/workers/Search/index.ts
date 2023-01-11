import { TSickInfo, TSickParams } from "@/types/api";
import { getSickInfoByQueryString } from "@/lib/axios/api";

interface ISearchWorker {
  getSickInfos(value: string): Promise<TSickInfo[]>;
}

class SearchWorker implements ISearchWorker {
  async getSickInfos(value: string) {
    const params: TSickParams = { q: value };
    const sickInfos = await getSickInfoByQueryString(params);
    return sickInfos;
  }
}

export default new SearchWorker();
