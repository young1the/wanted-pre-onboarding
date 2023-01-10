import { Styled } from "./styled";
import SearchBar from "@/components/SearchBar";
import SearchDetail from "@/components/SearchDetail";
import useInput from "@/hooks/useInput";
import useToggle from "@/hooks/useToggle";

const SearchSection = () => {
  const { isOn, on, off } = useToggle();
  const { value, onChange } = useInput();

  return (
    <Styled.Wrapper>
      <SearchBar value={value} onChange={onChange} onBlur={off} onClick={on} />
      {isOn ? <SearchDetail /> : null}
    </Styled.Wrapper>
  );
};

export default SearchSection;
