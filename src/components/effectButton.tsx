import { FC, useState } from "react";
import { StyleEffectButton } from "../styles/styles";
import Popup from "../components/popup";
import { randomizer } from "./util/randomNumberGenerator";

interface IButton {
  buttonText: string;
  titleTexts: string[];
  bodyTexts: string[];
}

const Button: FC<IButton> = (props) => {
  const { buttonText, titleTexts, bodyTexts } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [randomEffect, setRandomEffect] = useState(0);

  function toggleShowModal() {
    setRandomEffect(randomizer());
    setModalIsOpen(!modalIsOpen);
  }
  return (
    <StyleEffectButton onClick={toggleShowModal}>
      {buttonText}
      {modalIsOpen && (
        <Popup
          titleText={titleTexts[randomEffect]}
          bodyText={bodyTexts[randomEffect]}
          closeModal={toggleShowModal}
        />
      )}
    </StyleEffectButton>
  );
};

export default Button;
