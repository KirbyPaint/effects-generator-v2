import { FC } from "react";
import { StyleEffectTextInsert } from "../styles/styles";

interface IEffectList {
  title: string;
  text: string;
}

const EffectTextInsert: FC<IEffectList> = (props) => {
  return (
    <StyleEffectTextInsert>
      {props.title}
      {props.text}
    </StyleEffectTextInsert>
  );
};

export default EffectTextInsert;
