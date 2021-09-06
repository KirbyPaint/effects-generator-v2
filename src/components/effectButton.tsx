import { FC } from "react";
import { StyleEffectButton } from "../styles/styles";

interface IButton {
  handleClick: () => void;
  text: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <StyleEffectButton onClick={props.handleClick}>
      {props.text}
    </StyleEffectButton>
  );
};

export default Button;
