import { FC } from "react";
import Button from "../components/effectButton";
import { StyleButtonColumn } from "../styles/styles";

const handleClick = () => {
  alert("fuck yes");
};

const test = "test";

const ButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button handleClick={handleClick} text={test} />
      <Button handleClick={handleClick} text={test} />
      <Button handleClick={handleClick} text={test} />
      <Button handleClick={handleClick} text={test} />
    </StyleButtonColumn>
  );
};

export default ButtonColumn;
