import SearchItem from "@/components/SearchItem";
import { Styled } from "./styled";

const SearchDetail = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>추천검색어</Styled.Title>
        <Styled.List>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </Styled.List>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default SearchDetail;
