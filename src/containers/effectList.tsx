import { FC } from "react";
import EffectTextInsert from "../components/effectTextInsert";
import { v4 } from "uuid";
import { StyleEffectContainer } from "../styles/styles";

interface IEffectList {
  data: string[];
}

const EffectList: FC<IEffectList> = ({ data }) => {
  return (
    <StyleEffectContainer>
      <EffectTextInsert title={data[0]} text={data[1]} key={v4()} />
    </StyleEffectContainer>
  );
};

export default EffectList;
