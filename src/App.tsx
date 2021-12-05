import MainContainer from "./containers/mainContainer";
import { GlobalStyle } from "./styles/styles";
import GlobalFonts from "./fonts/moria_citadel/fonts";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <MainContainer />
    </>
  );
}

export default App;
