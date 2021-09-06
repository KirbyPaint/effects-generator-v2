import { FC } from "react";
import { StyleButtonArray } from "../styles/styles";
import FumbleButtonColumn from "./columns/fumbleButtonColumn";
import MajorButtonColumn from "./columns/majorButtonColumn";
import MinorButtonColumn from "./columns/minorButtonColumn";
import SevereButtonColumn from "./columns/severeButtonColumn";

const ButtonArray: FC = () => {
  return (
    <div>
      <StyleButtonArray>
        <FumbleButtonColumn />
        <MinorButtonColumn />
        <MajorButtonColumn />
        <SevereButtonColumn />
      </StyleButtonArray>
    </div>
  );
};

export default ButtonArray;
