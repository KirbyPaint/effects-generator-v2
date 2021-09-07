import { FC } from "react";
import { StyleMainContainer } from "../styles/styles";
import ButtonArray from "./buttonArray";
import EffectList from "./effectList";

const MainContainer: FC = () => {
  return (
    <div>
      <StyleMainContainer>
        <ButtonArray />
        <EffectList data={["title text", "body text"]} />
      </StyleMainContainer>
    </div>
  );
};

export default MainContainer;
