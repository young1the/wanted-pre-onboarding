import { Styled } from "./styled";
import SearchBar from "../SearchBar";
import SearchDetail from "../SearchDetail";

const SearchSection = () => {
  return (
    <Styled.Wrapper>
      <SearchBar />
      <SearchDetail />
    </Styled.Wrapper>
  );
};

export default SearchSection;
