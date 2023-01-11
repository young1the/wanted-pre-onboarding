import { Styled } from "./styled";
import { TSickInfo } from "@/types/api";

const SearchItem = ({ sickCd, sickNm }: TSickInfo) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{sickNm}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default SearchItem;
