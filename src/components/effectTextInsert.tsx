import { FC } from "react";
import { StyleEffectCard } from "../styles/styles";

interface IEffectList {
  title: string;
  text: string;
}

const EffectCard: FC<IEffectList> = (props) => {
  return (
    <StyleEffectCard>
      <p>{props.title}:</p>
      <p>{props.text}</p>
    </StyleEffectCard>
  );
};

export default EffectCard;
