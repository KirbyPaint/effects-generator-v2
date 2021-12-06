import { FC } from "react";
import { DataStore } from "../components/DataStore";
import { StyleMainContainer } from "../styles/styles";
import ButtonColumnContainer from "./buttonColumnContainer";
import EffectList from "./effectList";
import HeaderContainer from "./headerContainer";

const MainContainer: FC = () => {
  return (
    <div>
      <HeaderContainer />
      <StyleMainContainer>
        <ButtonColumnContainer />
        <EffectList
          data={[
            "Component must get main data from the mainContainer.tsx file",
            "this is the lowest point in which the buttons and the sidebar exist in the same space",
          ]}
        />
      </StyleMainContainer>
      {/* <DataStore /> */}
    </div>
  );
};

export default MainContainer;
