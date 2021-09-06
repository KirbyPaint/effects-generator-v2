import { FC } from "react";
import { StyleButtonArray } from "../styles/styles";
import ButtonColumn from "./buttonColumn";

const ButtonArray: FC = () => {
  return (
    <div>
      <StyleButtonArray>
        <ButtonColumn />
        <ButtonColumn />
        <ButtonColumn />
        <ButtonColumn />
      </StyleButtonArray>
    </div>
  );
};

export default ButtonArray;
