import { Styled } from "./styled";
import { TSickInfo } from "@/types/api";
import { useMemo } from "react";

type Props = TSickInfo & { value: string; isFocused: boolean };

const SearchItem = ({ sickCd, sickNm, value, isFocused }: Props) => {
  const content = useMemo(() => {
    const _cutted = sickNm.split(value);
    return _cutted.map((ele, idx) => {
      const key = sickCd + ele;
      return (
        <>
          {ele}
          {idx !== _cutted.length - 1 ? (
            <Styled.Strong key={key}>{value}</Styled.Strong>
          ) : null}
        </>
      );
    });
  }, [sickNm]);
  return <Styled.Wrapper isFocused={isFocused}>{content}</Styled.Wrapper>;
};

export default SearchItem;
