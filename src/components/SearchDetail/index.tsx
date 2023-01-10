import SearchItem from "@/components/SearchItem";
import { Styled } from "./styled";

const SearchDetail = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>추천검색어</Styled.Title>
        <Styled.List>
          <SearchItem sickCd="t18" sickNm="감기"/>
          <SearchItem sickCd="t18" sickNm="감기"/>
          <SearchItem sickCd="t18" sickNm="감기"/>
        </Styled.List>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default SearchDetail;
