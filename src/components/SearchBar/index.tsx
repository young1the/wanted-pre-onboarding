import { Styled } from "./styled";

export type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onClick: () => void;
};

const SearchBar = ({ value, onChange, onBlur, onClick }: SearchBarProps) => {
  return (
    <Styled.Container onClick={onClick}>
      <Styled.Input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder="질환명을 입력해 주세요."
      />
      <Styled.Button tabIndex={-1}>🔍</Styled.Button>
    </Styled.Container>
  );
};

export default SearchBar;
