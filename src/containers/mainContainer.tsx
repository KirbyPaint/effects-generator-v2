import { FC } from "react";
import { StyleMainContainer } from "../styles/styles";
import ButtonArray from "./buttonArray";
import EffectList from "./effectList";
import HeaderContainer from "./headerContainer";

const MainContainer: FC = () => {
  return (
    <div>
      <HeaderContainer />
      <StyleMainContainer>
        <ButtonArray />
        <EffectList
          data={[
            "Component must get main data from the mainContainer.tsx file",
            "this is the lowest point in which the buttons and the sidebar exist in the same space",
          ]}
        />
      </StyleMainContainer>
    </div>
  );
};

export default MainContainer;
