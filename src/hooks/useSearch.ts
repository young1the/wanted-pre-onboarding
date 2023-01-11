import { useState, useEffect } from "react";
import useInput from "@/hooks/useInput";

export type TSearchStates = "None" | "Loading" | "Done" | "Fail";

const useSearch = <T>(searchFn: (arg: string) => Promise<T[]>, delay = 0) => {
  const { value, onChange } = useInput();
  const [result, setResults] = useState<T[]>();
  const [searchState, setSearchState] = useState<TSearchStates>("None");
  const search = async (arg: string) => {
    setSearchState("Loading");
    const data: T[] = await searchFn(arg);
    console.log(data);
    if (data.length === 0) setSearchState("Fail");
    else {
      setResults([...data]);
      setSearchState("Done");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!value) setSearchState("None");
    else {
      timer = setTimeout(() => {
        search(value);
      }, delay);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value]);

  return { value, onChange, searchState, result };
};

export default useSearch;
