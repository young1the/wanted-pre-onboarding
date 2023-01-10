import { Styled } from "./styled";
import SearchBar from "../SearchBar";
import SearchDetail from "../SearchDetail";
import useToggle from "../../hooks/useToggle";

const SearchSection = () => {
  const {isOn, on, off} = useToggle();

  return (
    <Styled.Wrapper>
      <SearchBar onBlur={off} onClick={on}/>
      {isOn ? <SearchDetail /> : null}
    </Styled.Wrapper>
  );
};

export default SearchSection;
