import { Styled } from "./styled";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import useToggle from "@/hooks/useToggle";
import useSearch from "@/hooks/useSearch";
import SearchWorker from "@/workers/Search";

import { TSickInfo } from "@/types/api";

import SearchBar from "@/components/SearchBar";
import SearchDetail from "@/components/SearchDetail";
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
  const { value, onChange, setValue ,searchState, result } = useSearch(
    SearchWorker.getSickInfos,
    1000
  );
  const valueRef = useRef(value);
  const [tabIndex, setTabIndex] = useState<number>(-1);
  const onKeyDownHandler = useCallback(
    (ev: KeyboardEvent) => {
      if (result) {
        switch (ev.key) {
          case "Tab":
            ev.preventDefault();
            setTabIndex((prev) => (prev === result?.length - 1 ? 0 : prev + 1));
            break;
          case "ArrowDown":
            setTabIndex((prev) => (prev === result?.length - 1 ? 0 : prev + 1));
            break;
          case "ArrowUp":
            setTabIndex((prev) => (prev === 0 ? -1 : prev - 1));
            break;
          case "Escape":
            off();
            setValue("");
            setTabIndex(-1);
            break;
          case "Enter":
            alert(valueRef.current);
            off();
            setValue("");
            setTabIndex(-1);
            break;
        }
      }
    },
    [result, valueRef.current]
  );

  const content = useMemo<TContent>(() => {
    return {
      None: <div>검색어를 입력해주세요.</div>,
      Loading: <div>데이터를 불러오고 있습니다.</div>,
      Done: result?.map(({ sickCd, sickNm }: TSickInfo, index) => {
        return (
          <SearchItem
            key={sickCd}
            sickCd={sickCd}
            sickNm={sickNm}
            value={value}
            isFocused={index === tabIndex}
            focusValueRef={valueRef}
          />
        );
      }),
      Fail: <div>검색결과가 없습니다.</div>,
    };
  }, [result, tabIndex]);

  return (
    <Styled.Wrapper>
      <SearchBar
        value={value}
        onChange={onChange}
        onBlur={() => {
          off();
          setTabIndex(-1);
        }}
        onClick={on}
        onKeyDown={onKeyDownHandler}
      />
      {isOn || value ? <SearchDetail content={content[searchState]} /> : null}
    </Styled.Wrapper>
  );
};

export default SearchSection;
