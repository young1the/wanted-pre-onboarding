import { GlobalStyle } from "./style/global";
import { Styled } from "./App.styled";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <SearchSection />
    </Styled.Wrapper>
  );
}

export default App;
