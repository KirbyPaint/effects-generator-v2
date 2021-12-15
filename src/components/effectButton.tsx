import { FC } from "react";
import { StyleButton } from "../styles/styles";
import Popup from "../components/popup";
import { randomizer } from "./util/randomNumberGenerator";
import { useRecoilState } from "recoil";
import {
  effectsListState,
  popupState,
  randomEffectState,
  textState,
  titleState,
} from "./DataStore";

interface IButton {
  buttonText: string;
  titleText: string[];
  bodyText: string[];
}

const Button: FC<IButton> = (props) => {
  const { buttonText, titleText, bodyText } = props;
  const [popupIsOpen, setPopupIsOpen] = useRecoilState(popupState);
  const [randomEffect, setRandomEffect] = useRecoilState(randomEffectState);
  const [titleDetails, setTitleDetails] = useRecoilState(titleState);
  const [textDetails, setTextDetails] = useRecoilState(textState);
  const [effectsListDetails, setEffectsListDetails] =
    useRecoilState(effectsListState);

  function triggerEffect() {
    const randomNumber = randomizer();
    setRandomEffect(randomNumber);
    setTitleDetails(titleText[randomEffect]);
    setTextDetails(bodyText[randomEffect]);
    setEffectsListDetails([
      ...effectsListDetails,
      [titleText[randomEffect], bodyText[randomEffect]],
    ]);
    setPopupIsOpen(true);
    showMeTheDebugging();
  }

  function showMeTheDebugging() {
    console.log(`-----DEBUGGING-----`);
    console.log("randomNumber :>> ", randomEffect);
    console.log("popupIsOpen :>> ", popupIsOpen);
    console.log("titleDetails :>> ", titleDetails);
    console.log("textDetails :>> ", textDetails);
    console.log(`-------------------`);
  }

  return <div onClick={() => triggerEffect()}>{buttonText}</div>;
};

export default Button;
