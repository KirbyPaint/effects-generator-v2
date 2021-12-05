// Ash
// Refactor the margin and padding to the containers for consistency
// Container border style dashed, root elements are solid (for dev testing)
// obviously actual borders will be solid

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
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

export const StyleButtonArray = styled.div`
  border: 5px dashed black;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

export const StyleMainContainer = styled.div`
  border: 10px dashed red;
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

export const StyleEffectButtonContainer = styled.div`
  border: 2px dashed blue;
  margin: 10px;
  padding: 10px;
`;

export const StyleEffectButton = styled.div`
  border: 2px solid blue;
  background-color: blue;
  width: 100px;
  height: 100px;
  border-radius: 300px;
  color: white;
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
