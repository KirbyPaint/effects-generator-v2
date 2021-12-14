// Ash
// Refactor the margin and padding to the containers/columns for consistency
// Container border style dashed, root elements are solid (for dev testing)
// obviously actual borders will be solid

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  body, html {
    background-color: lightgray;
  }
`;

export const StyleHeaderContainer = styled.div`
  background-color: black;
  border: 5px solid white;
  border-radius: 30px;
  padding: 5px;
`;

export const StyleHeaderText = styled.h1`
  display: table;
  margin: 0 auto;
  font-family: "Moria Citadel";
  font-size: xx-large;
  color: white;
`;

export const StyleButtonColumnContainer = styled.div`
  border: 1px dashed black;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const StyleMainContainer = styled.div`
  border: 1px dashed red;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 85% auto;
`;

export const StyleEffectContainer = styled.div`
  border: 10px dashed gold;
  max-width: 100%;
  max-height: auto;
  padding: 10px;
  position: relative;
`;

export const StyleButtonColumn = styled.div`
  border: 1px dashed purple;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  justify-content: center;
  padding: 10px 0px;
`;

export const StyleButtonContainer = styled.div`
  border: 1px dashed blue;
  margin: 10px;
  padding: 10px;
`;

export const StyleButton = styled.div`
  border: 1px solid blue;
  background-color: blue;
  width: 100px;
  height: 100px;
  border-radius: 300px;
  color: white;
`;

export const StyleEffectCard = styled.div`
  border: 1px solid green;
  min-width: 100%;
  max-width: 100%;
  word-break: break-word;
`;

export const StylePopupWindow = styled.div`
  height: min-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(202, 166, 115);
  width: (min-content + 50px);
  border: 10px solid rgb(165, 91, 42);
  border-radius: 50px;
  border-style: ridge groove groove ridge;
  box-shadow: 15px 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const StylePopupContainer = styled.div`
  margin: 10px;
  padding: 10px;
`;

export const StylePopupTitle = styled.p`
  display: table;
  margin: 0 auto;
  text-decoration: underline;
  font-family: "Moria Citadel";
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

export const StyleDataStore = styled.div`
  border: 1px dashed black;
  margin: 10px;
  padding: 10px;
`;

export const StyleClosePopupButton = styled.button`
  border: 1px solid white;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 30px;
  width: 50px;
  height: 50px;
  float: right;
`;
