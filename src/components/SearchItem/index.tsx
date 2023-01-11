import { Styled } from "./styled";
import { TSickInfo } from "@/types/api";
import { useMemo } from "react";

type Props = TSickInfo & { value: string };

const SearchItem = ({ sickCd, sickNm, value }: Props) => {
  const content = useMemo(() => {
    const _cutted = sickNm.split(value);
    return _cutted.map((ele, idx) => {
      if (idx === _cutted.length - 1) return <p>{ele}</p>;
      return (
        <>
          <p>{ele}</p>
          <strong>{value}</strong>
        </>
      );
    });
  }, [sickNm]);
  return <Styled.Wrapper>{content}</Styled.Wrapper>;
};

export default SearchItem;
