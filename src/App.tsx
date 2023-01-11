import { GlobalStyle } from "./style/global";
import { Styled } from "./App.styled";
import SearchSection from "./components/SearchSection";
import CacheStorage from "./lib/cache";

function App() {
  return (
    <Styled.Wrapper>
      <GlobalStyle />
      <button onClick={()=>{
  caches.delete('sick')
      }}>Delete All Cache</button>
      <SearchSection />
    </Styled.Wrapper>
  );
}

export default App;
