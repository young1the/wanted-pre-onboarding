import { TSickParams, TSickInfo } from "@/types/api";
import { formToJSON } from "axios";

interface ICacheStorage {
  name: string;
  put(request: string, response: TSickInfo[]): any;
}

class CacheStorage implements ICacheStorage {
  constructor(public name: string) {}

  async put(request: string, response: TSickInfo[]) {
    const cache = await caches.open(this.name);
    await cache.put(request, new Response(JSON.stringify(response)));
  }

  async match(request: string) {
    const cache = await caches.open(this.name);
    const response = await cache.match(request);
    const data: TSickInfo[] = await response?.json();
    return data;
  }
}

export default CacheStorage;
