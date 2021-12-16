import { FC } from "react";
import { StyleEffectCard, StyleMoriaFont } from "../styles/styles";

interface IEffectList {
  key: string;
  data: string[];
  color: string;
}

const EffectCard: FC<IEffectList> = (props) => {
  return (
    <StyleEffectCard color={props.color}>
      <StyleMoriaFont>{props.data[0]}</StyleMoriaFont>
      <p>{props.data[1]}</p>
    </StyleEffectCard>
  );
};

export default EffectCard;
