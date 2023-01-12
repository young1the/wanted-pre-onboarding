import { Styled } from "./styled";
import { TSickInfo } from "@/types/api";
import { useMemo } from "react";

type Props = TSickInfo & { value: string } & { tabIndex: number };

const SearchItem = ({ sickCd, sickNm, value, tabIndex }: Props) => {
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

  return <Styled.Wrapper tabIndex={tabIndex}>{content}</Styled.Wrapper>;
};

export default SearchItem;
