import { FC } from "react";
import { randomizer } from "./util/randomNumberGenerator";
import { useRecoilState } from "recoil";
import {
  colorState,
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
  const [color, setColor] = useRecoilState(colorState);

  function triggerEffect() {
    const randomNumber = randomizer();
    setRandomEffect(randomNumber);
    setTitleDetails(titleText[randomEffect]);
    setTextDetails(bodyText[randomEffect]);
    switch (buttonText) {
      case "Slashing":
        setColor(`blue`);
        break;
      case "Bludgeoning":
        setColor(`red`);
        break;
      case "Piercing":
        setColor(`green`);
        break;
      case "Magic":
        setColor(`orange`);
        break;
    }
    setEffectsListDetails([
      ...effectsListDetails,
      [titleText[randomEffect], bodyText[randomEffect], color],
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
    console.log("color :>> ", color);
    console.log(`-------------------`);
  }

  return <div onClick={triggerEffect}>{buttonText}</div>;
};

export default Button;
