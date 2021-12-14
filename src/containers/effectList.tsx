import { FC } from "react";
import EffectTextInsert from "../components/effectTextInsert";
import { v4 } from "uuid";
import { StyleEffectContainer } from "../styles/styles";
import { useRecoilState } from "recoil";
import {
  effectsListState,
  textState,
  titleState,
} from "../components/DataStore";

interface IEffectList {
  data: string[];
}

function getCurrentEffect() {
  const [titleDetails] = useRecoilState(titleState);
  const [textDetails] = useRecoilState(textState);
  const [effectsListDetails, setEffectsListDetails] =
    useRecoilState(effectsListState);
  return [titleDetails, textDetails];
}

const EffectList: FC<IEffectList> = () => {
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
