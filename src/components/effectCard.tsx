import { FC } from "react";
import { StyleEffectCard } from "../styles/styles";

interface IEffectList {
  key: string;
  data: string[];
}

const EffectCard: FC<IEffectList> = (props) => {
  return (
    <StyleEffectCard>
      <p>{props.data[0]}</p>
      <p>{props.data[1]}</p>
    </StyleEffectCard>
  );
};

export default EffectCard;
