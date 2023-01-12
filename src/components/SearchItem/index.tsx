import { Styled } from "./styled";
import { TSickInfo } from "@/types/api";
import { useMemo } from "react";

type Props = TSickInfo & { value: string; isFocused: boolean; focusValueRef: React.MutableRefObject<string> };

const SearchItem = ({ sickCd, sickNm, value, isFocused, focusValueRef }: Props) => {
  if (isFocused) focusValueRef.current = sickCd;
  const content = useMemo(() => {
    const _cutted = sickNm.split(value);
    return _cutted.map((ele, idx) => {
      const key = sickCd + idx;
      return (
        <p key={key}>
          {ele}
          {idx !== _cutted.length - 1 ? (
            <Styled.Strong>{value}</Styled.Strong>
          ) : null}
        </p>
      );
    });
  }, [sickNm]);
  return <Styled.Wrapper isFocused={isFocused}>{content}</Styled.Wrapper>;
};

export default SearchItem;
