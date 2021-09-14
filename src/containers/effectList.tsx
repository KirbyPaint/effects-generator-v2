import { FC } from "react";
import EffectTextInsert from "../components/effectTextInsert";
import { StyleEffectList } from "../styles/styles";
import { v4 } from "uuid";

interface IEffectList {
  data: string[];
}

const EffectList: FC<IEffectList> = ({ data }) => {
  return (
    <StyleEffectList>
      {data.map((effect) => (
        <EffectTextInsert title={data[0]} text={effect[1]} key={v4()} />
      ))}
    </StyleEffectList>
  );
};

export default EffectList;
