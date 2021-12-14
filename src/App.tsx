import MainContainer from "./containers/mainContainer";
import { GlobalStyle } from "./styles/styles";
import GlobalFonts from "./fonts/moria_citadel/fonts";
import { RecoilRoot } from "recoil";

function App(): JSX.Element {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <GlobalFonts />
        <MainContainer />
      </RecoilRoot>
    </>
  );
}

export default App;
