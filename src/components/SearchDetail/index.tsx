import { Styled } from "./styled";

type Props = {
  content: JSX.Element | JSX.Element[] | undefined;
};

const SearchDetail = ({ content }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Title>추천검색어</Styled.Title>
        <Styled.List>{content}</Styled.List>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default SearchDetail;
