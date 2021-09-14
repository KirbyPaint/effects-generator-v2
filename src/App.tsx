import MainContainer from "./containers/mainContainer";
import { StyleTitle } from "./styles/styles";
import GlobalFonts from "./fonts/moria_citadel/fonts";

function App() {
  return (
    <div className="App">
      <GlobalFonts />
      <StyleTitle>
        <p>Welcome to the new version of the effects generator</p>
      </StyleTitle>
      <MainContainer />
    </div>
  );
}

export default App;
