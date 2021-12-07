import { FC } from "react";
import EffectTextInsert from "../components/effectTextInsert";
import { v4 } from "uuid";
import { StyleEffectContainer } from "../styles/styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { textState, titleState } from "../components/DataStore";

interface IEffectList {
  data: string[];
}

function getCurrentEffect() {
  const [titleDetails, setTitleDetails] = useRecoilState(titleState);
  const [textDetails, setTextDetails] = useRecoilState(textState);
  return [titleDetails, textDetails];
}

const EffectList: FC<IEffectList> = ({ data }) => {
  return (
    <StyleEffectContainer>
      <EffectTextInsert
        title={getCurrentEffect()[0]}
        text={getCurrentEffect()[1]}
        key={v4()}
      />
    </StyleEffectContainer>
  );
};
export default EffectList;
