import MainContainer from "./containers/mainContainer";
import { StyleTitle } from "./styles/styles";

function App() {
  return (
    <div className="App">
      <StyleTitle>
        <p>Welcome to the new version of the effects generator</p>
      </StyleTitle>
      <MainContainer />
    </div>
  );
}

export default App;
