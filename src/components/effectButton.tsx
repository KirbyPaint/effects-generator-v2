import { FC } from "react";
import { StyleEffectButton } from "../styles/styles";

interface IButton {
  handleClick: () => void;
  buttonText: string;
}

const Button: FC<IButton> = (props) => {
  return (
    <StyleEffectButton onClick={props.handleClick}>
      {props.buttonText}
    </StyleEffectButton>
  );
};

export default Button;
