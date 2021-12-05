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
        <EffectList data={["title text", "body text"]} />
      </StyleMainContainer>
    </div>
  );
};

export default MainContainer;
