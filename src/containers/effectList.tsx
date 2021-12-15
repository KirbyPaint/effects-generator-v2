import { FC } from "react";
import { v4 } from "uuid";
import { StyleEffectContainer } from "../styles/styles";
import { useRecoilState } from "recoil";
import { effectsListState } from "../components/DataStore";
import EffectCard from "../components/effectCard";

interface IEffectList {
  data: string[];
}

function getEffectsList() {
  const [effectsListDetails] = useRecoilState(effectsListState);
  return effectsListDetails;
}

const EffectList: FC<IEffectList> = () => {
  return (
    <StyleEffectContainer>
      {getEffectsList()
        .map((effect) => <EffectCard key={v4()} data={effect} />)
        .reverse()}
    </StyleEffectContainer>
  );
};
export default EffectList;
