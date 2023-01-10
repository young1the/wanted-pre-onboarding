import { Styled } from "./styled";
import { Sick } from "@/types/api";

const SearchItem = ({ sickCd, sickNm }: Sick) => {
  return (
    <Styled.Wrapper>
      <Styled.Title>{sickNm}</Styled.Title>
    </Styled.Wrapper>
  );
};

export default SearchItem;
