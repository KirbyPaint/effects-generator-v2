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

  function setCurrentEffect(title: string, text: string) {
    setTitleDetails(title);
    setTextDetails(text);
  }

  function triggerEffect() {
    setRandomEffect(randomizer());
    setPopupIsOpen(true);
    setCurrentEffect(titleText[randomEffect], bodyText[randomEffect]);
    setEffectsListDetails([
      ...effectsListDetails,
      [titleText[randomEffect], bodyText[randomEffect]],
    ]);
  }
  return (
    <StyleButton onClick={triggerEffect}>
      {buttonText}
      {popupIsOpen && <Popup titleText={titleDetails} bodyText={textDetails} />}
    </StyleButton>
  );
};

export default Button;
