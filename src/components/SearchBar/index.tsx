import { Styled } from "./styled";

const SearchBar = ({onBlur, onClick} : any) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.Input onBlur={onBlur} placeholder="질환명을 입력해 주세요."/>
      <Styled.Button>
      🔍</Styled.Button>
    </Styled.Container>
  )
};

export default SearchBar;
