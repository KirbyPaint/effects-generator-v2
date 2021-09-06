import { FC } from "react";
import { StyleButtonColumn } from "../styles/styles";

const ButtonColumn: FC = () => {
  return (
    <div>
      <StyleButtonColumn>
        <p>Button</p>
        <p>Button</p>
        <p>Button</p>
        <p>Button</p>
      </StyleButtonColumn>
    </div>
  );
};

export default ButtonColumn;
