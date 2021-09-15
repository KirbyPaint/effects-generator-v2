import MainContainer from "./containers/mainContainer";
import { StyleTitle, GlobalStyle } from "./styles/styles";
import GlobalFonts from "./fonts/moria_citadel/fonts";

function App() {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <StyleTitle>Critical Hits - Effects Generator</StyleTitle>
      <MainContainer />
    </>
  );
}

export default App;
