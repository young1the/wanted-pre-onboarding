import { Styled } from "./styled";
import { useMemo } from "react";
import SearchBar from "@/components/SearchBar";
import SearchDetail from "@/components/SearchDetail";
import useToggle from "@/hooks/useToggle";
import useSearch from "@/hooks/useSearch";
import SearchWorker from "@/workers/Search";
import { TSickInfo } from "@/types/api";
import SearchItem from "@/components/SearchItem";

export type TContent = {
  [index: string]: JSX.Element | JSX.Element[] | undefined;
  None: JSX.Element;
  Loading: JSX.Element;
  Done: JSX.Element[] | undefined;
  Fail: JSX.Element;
};

const SearchSection = () => {
  const { isOn, on, off } = useToggle();
  const { value, onChange, searchState, result } = useSearch(
    SearchWorker.getSickInfoByQueryString
  );

  const content = useMemo<TContent>(() => {
    return {
      None: <div>검색어를 입력해주세요.</div>,
      Loading: <div>데이터를 불러오고 있습니다.</div>,
      Done: result?.map(({ sickCd, sickNm }: TSickInfo) => {
        return (
          <SearchItem
            key={sickCd}
            sickCd={sickCd}
            sickNm={sickNm}
            value={value}
          />
        );
      }),
      Fail: <div>검색결과가 없습니다.</div>,
    };
  }, [result]);

  return (
    <Styled.Wrapper>
      <SearchBar value={value} onChange={onChange} onBlur={off} onClick={on} />
      {isOn ? <SearchDetail content={content[searchState]} /> : null}
    </Styled.Wrapper>
  );
};

export default SearchSection;
