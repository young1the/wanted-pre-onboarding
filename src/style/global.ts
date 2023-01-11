import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body,html {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }
  * {
      box-sizing: border-box;
    }
`;

export { GlobalStyle };
