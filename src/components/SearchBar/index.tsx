import { Styled } from "./styled";

const SearchBar = () => {
  return (
    <Styled.Container>
      <Styled.Input placeholder="질환명을 입력해 주세요."/>
      <Styled.Button>
      🔍</Styled.Button>
    </Styled.Container>
  )
};

export default SearchBar;
