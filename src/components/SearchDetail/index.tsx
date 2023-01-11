import SearchItem from "@/components/SearchItem";
import { TSickInfo } from "@/types/api";
import { Styled } from "./styled";

type TContent = {
  [index: string] : JSX.Element | JSX.Element[];
}

const SearchDetail = ({sickInfos, searchState} : any) => {
  const content : TContent = {
    "None" : <p>검색결과가 없습니다.</p>,
    "Loading" : <p>데이터를 불러오고 있습니다.</p>,
    "Done" : sickInfos.map(({ sickCd, sickNm } : TSickInfo) => {
      return <SearchItem key={sickCd} sickCd={sickCd} sickNm={sickNm} />;
    }),
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
