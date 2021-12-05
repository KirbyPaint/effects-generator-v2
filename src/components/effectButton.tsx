import { FC, useState } from "react";
import { StyleEffectButton } from "../styles/styles";
import Popup from "../components/popup";
import { randomizer } from "./util/randomNumberGenerator";

interface IButton {
  buttonText: string;
  titleText: string[];
  bodyText: string[];
}

const Button: FC<IButton> = (props) => {
  const { buttonText, titleText, bodyText } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [randomEffect, setRandomEffect] = useState(0);
  const [cardTitleText, setCardTitleText] = useState("");
  const [cardBodyText, setCardBodyText] = useState("");

  function toggleShowModal() {
    setRandomEffect(randomizer());
    setModalIsOpen(!modalIsOpen);
    setCardTitleText(titleText[randomEffect]);
    setCardBodyText(bodyText[randomEffect]);
  }
  return (
    <StyleEffectButton onClick={toggleShowModal}>
      {buttonText}
      {modalIsOpen && (
        <Popup
          titleText={titleText[randomEffect]}
          bodyText={bodyText[randomEffect]}
          closeModal={toggleShowModal}
        />
      )}
    </StyleEffectButton>
  );
};

export default Button;
