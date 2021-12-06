import { FC } from "react";
import { StyleButtonColumnContainer } from "../styles/styles";
import FumbleButtonColumn from "./columns/fumbleButtonColumn";
import MajorButtonColumn from "./columns/majorButtonColumn";
import MinorButtonColumn from "./columns/minorButtonColumn";
import SevereButtonColumn from "./columns/severeButtonColumn";

const ButtonColumnContainer: FC = () => {
  return (
    <div>
      <StyleButtonColumnContainer>
        <FumbleButtonColumn />
        <MinorButtonColumn />
        <MajorButtonColumn />
        <SevereButtonColumn />
      </StyleButtonColumnContainer>
    </div>
  );
};

export default ButtonColumnContainer;
