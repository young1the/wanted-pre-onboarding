import { useState, useEffect } from "react";
import useInput from "./useInput";
import SearchWorker from "@/workers/Search";
import { TSickInfo, TSickParams } from "@/types/api";

type TSearchStates = "None" | "Loading" | "Done";

const useSearch = () => {
  const { value, onChange } = useInput();
  const [sickInfos, setSickInfos] = useState<TSickInfo[]>([]);
  const [searchState, setSearchState] = useState<TSearchStates>("None");

  const getSickInfoByQueryString = async (params: TSickParams) => {
    setSearchState("Loading");
    const data = await SearchWorker.getSickInfoByQueryString(params);
    setSickInfos([...data]);
    setSearchState("Done");
  };

  useEffect(() => {
    const _params = value ? { q: value } : undefined;
    if (!_params) setSearchState("None");
    else getSickInfoByQueryString(_params);
  }, [value]);
  
  return { value, onChange, searchState, sickInfos };
};

export default useSearch;
