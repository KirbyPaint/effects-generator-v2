import { FC } from "react";
import { StyleEffectList } from "../styles/styles";
import EffectTextInsert from "./effectTextInsert";

const EffectList: FC = () => {
  return (
    <div>
      <StyleEffectList>
        <EffectTextInsert />
      </StyleEffectList>
    </div>
  );
};

export default EffectList;
