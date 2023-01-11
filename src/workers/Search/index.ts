import { TSickInfo, TSickParams } from "@/types/api";
import { getSickInfoByQueryString } from "@/lib/axios/api";
import CacheStorage from "@/lib/cache";

interface ISearchWorker {
  getSickInfos(query: string): Promise<TSickInfo[]>;
}

class SearchWorker implements ISearchWorker {
  async getSickInfos(query: string) {
    const Cache = new CacheStorage("sick");
    const params: TSickParams = { q: query };
    const cachedData = await Cache.match(query);
    if (cachedData) {
      console.log("캐싱된 데이터");
      return cachedData;
    }
    const requestedData = await getSickInfoByQueryString(params);
    Cache.put(query, requestedData);
    return requestedData;
  }
}

export default new SearchWorker();
