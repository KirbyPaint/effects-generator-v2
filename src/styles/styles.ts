import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    background-color: lightgray;
    border: 2px solid red;
  }
`;

// export const StylePage = styled.div`
//   background-color: lightgray;
//   width: 100%;
//   height: 100%;
// `;

export const StyleTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  font-family: "moriaregular";
`;

export const EasyBreezyBeautifulBorder = styled.div`
  border: 2px solid red;
`;

export const StyleButtonArray = styled.div`
  border: 5px solid black;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const StyleMainContainer = styled.div`
  border: 10px solid blue;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 85% auto;
`;

export const StyleEffectList = styled.div`
  border: 5px solid gold;
  max-height: auto;
`;

export const StyleButtonColumn = styled.div`
  border: 2px solid lightblue;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  justify-content: center;
  padding: 10px 0px;
`;

export const StyleEffectButton = styled.div`
  border: 2px solid red;
  width: 50px;
  height: 50px;
  border-radius: 300px;
  margin: 10px;
`;

export const StyleEffectTextInsert = styled.div`
  border: 2px solid green;
  padding: 5px;
  margin: 5px;
`;

export const StylePopup = styled.div`
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(202, 166, 115);
  padding: 50px;
  width: 600px;
  border: 10px solid rgb(165, 91, 42);
  border-radius: 50px;
  border-style: ridge groove groove ridge;
  box-shadow: 15px 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const StyleHeaderText = styled.p`
  display: table;
  margin: 0 auto;
  text-decoration: underline;
  font-family: "moriaregular";
  font-size: xx-large;
  color: white;
  text-shadow: 2px 2px 8px #ff0000, 1px 0px 1px black, 0px 1px 1px black,
    -1px 0px 1px black, 0px -1px 1px black, 2px 0px 1px black, 0px 2px 1px black,
    -2px 0px 1px black, 0px -2px 1px black;
`;

export const StyleBodyText = styled.div`
  white-space: pre-wrap;
  font-size: 20px;
`;
