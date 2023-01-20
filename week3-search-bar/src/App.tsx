import { GlobalStyle } from "./style/global";
import { Styled } from "./App.styled";
import SearchSection from "./components/SearchSection";

function App() {
  const deleteCachedData = () => {
    caches.delete("sick");
  };
  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <button onClick={deleteCachedData}> Delete CachedData </button>
      <SearchSection />
    </Styled.Wrapper>
  );
}

export default App;
