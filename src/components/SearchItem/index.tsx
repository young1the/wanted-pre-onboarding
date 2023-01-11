import { Styled } from "./styled";
import { TSickInfo } from "@/types/api";
import { useMemo } from "react";

type Props = TSickInfo & { value: string };

const SearchItem = ({ sickCd, sickNm, value }: Props) => {
  const content = useMemo(() => {
    const _cutted = sickNm.split(value);
    return _cutted.map((ele, idx) => {
      if (ele === "")
        return (
          <div key={sickCd + ele}>
            <Styled.Strong>{value}</Styled.Strong>
          </div>
        );
      if (idx === _cutted.length - 1)
        return (
          <div key={sickCd + ele}>
            <p>{ele}</p>
          </div>
        );
      return (
        <div key={sickCd + idx}>
          <p>
            {ele}
            <Styled.Strong>{value}</Styled.Strong>
          </p>
        </div>
      );
    });
  }, [sickNm]);

  return <Styled.Wrapper>{content}</Styled.Wrapper>;
};

export default SearchItem;
