import styled from "styled-components";

export const StyleTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
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
  height: fit-content;
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

// export const StyleEffectButton = styled.button`
//   border: 2px solid red;
//   width: 50px;
//   height: 50px;
//   border-radius: 300px;
//   margin: 10px;
// `;

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
