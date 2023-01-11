import { Styled } from "./styled";
import SearchBar from "@/components/SearchBar";
import SearchDetail from "@/components/SearchDetail";
import useToggle from "@/hooks/useToggle";
import useSearch from "@/hooks/useSearch";
import SearchWorker from "@/workers/Search";

const SearchSection = () => {
  const { isOn, on, off } = useToggle();
  const { value, onChange, searchState, result: sickInfos } = useSearch(
    SearchWorker.getSickInfoByQueryString
  );

  return (
    <Styled.Wrapper>
      <SearchBar value={value} onChange={onChange} onBlur={off} onClick={on} />
      {isOn ? (
        <SearchDetail searchState={searchState} sickInfos={sickInfos} value={value} />
      ) : null}
    </Styled.Wrapper>
  );
};

export default SearchSection;
