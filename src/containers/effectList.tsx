import { FC } from "react";
import EffectTextInsert from "../components/effectTextInsert";
import { StyleEffectList } from "../styles/styles";

interface IEffectList {
  data: string[];
}

const EffectList: FC<IEffectList> = ({ data }) => {
  return (
    <StyleEffectList>
      {data.map((effect) => (
        <EffectTextInsert title={data[0]} text={effect[1]} />
      ))}
    </StyleEffectList>
  );
};

export default EffectList;
