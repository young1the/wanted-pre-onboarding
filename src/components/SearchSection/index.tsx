import { Styled } from "./styled";
import SearchBar from "../SearchBar";
import SearchDetail from "../SearchDetail";
import { ReactEventHandler, useState } from "react";

const SearchSection = () => {
  const [isFocused, setIsFocused] = useState(false);
  const onBlur = () => {
    setIsFocused(false);
  }
  const onClick = () => {
    setIsFocused(true);
  }

  return (
    <Styled.Wrapper>
      <SearchBar onBlur={onBlur} onClick={onClick}/>
      {isFocused ? <SearchDetail /> : null}
    </Styled.Wrapper>
  );
};

export default SearchSection;
