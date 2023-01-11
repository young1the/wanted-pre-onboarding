import SearchItem from "@/components/SearchItem";
import { TSickInfo } from "@/types/api";
import { TSearchStates } from "@/hooks/useSearch";
import { Styled } from "./styled";

type TContent = {
  [index: string] : JSX.Element | JSX.Element[] | undefined;
}

type Props = {
  sickInfos: TSickInfo[] | undefined,
  searchState: TSearchStates,
  value: string,
}

const SearchDetail = ({sickInfos, searchState, value} : Props) => {
  const content : TContent = {
    "None" : <p>검색어를 입력해주세요.</p>,
    "Loading" : <p>데이터를 불러오고 있습니다.</p>,
    "Done" : sickInfos?.map(({sickCd, sickNm}: TSickInfo) => {
      return <SearchItem key={sickCd} sickCd={sickCd} sickNm={sickNm} />;
    }),
    "Fail" : <p>검색결과가 없습니다.</p>,
  }

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>추천검색어</Styled.Title>
        <Styled.List>
          {content[searchState]}
        </Styled.List>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default SearchDetail;
