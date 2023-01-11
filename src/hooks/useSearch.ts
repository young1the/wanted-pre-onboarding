import { useState, useEffect } from "react";
import useInput from "./useInput";

export type TSearchStates = "None" | "Loading" | "Done" | "Fail";

const useSearch = <RET>(searchFn: (arg: string) => Promise<RET[]>) => {
  const { value, onChange } = useInput();
  const [result, setResults] = useState<RET[]>();
  const [searchState, setSearchState] = useState<TSearchStates>("None");
  const search = async (arg: string) => {
    setSearchState("Loading");
    const data: RET[] = await searchFn(arg);
    if (data.length === 0) setSearchState("Fail");
    else {
      setResults([...data]);
      setSearchState("Done");
    }
  };

  useEffect(() => {
    if (!value) setSearchState("None");
    else search(value);
  }, [value]);

  return { value, onChange, searchState, result };
};


export default useSearch;
