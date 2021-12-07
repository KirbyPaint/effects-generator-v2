import { FC, useState } from "react";
import { StyleButton } from "../styles/styles";
import Popup from "../components/popup";
import { randomizer } from "./util/randomNumberGenerator";
import { useRecoilState } from "recoil";
import { textState, titleState } from "./DataStore";

interface IButton {
  buttonText: string;
  titleText: string[];
  bodyText: string[];
}

const Button: FC<IButton> = (props) => {
  const { buttonText, titleText, bodyText } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [randomEffect, setRandomEffect] = useState(0);
  const [titleDetails, setTitleDetails] = useRecoilState(titleState);
  const [textDetails, setTextDetails] = useRecoilState(textState);

  function setCurrentEffect(title: string, text: string) {
    setTitleDetails(title);
    setTextDetails(text);
  }

  function getCurrentEffect() {
    const [titleDetails, setTitleDetails] = useRecoilState(titleState);
    const [textDetails, setTextDetails] = useRecoilState(textState);
    return [titleDetails, textDetails];
  }

  function toggleShowModal() {
    setRandomEffect(randomizer());
    setModalIsOpen(!modalIsOpen);
    setCurrentEffect(titleText[randomEffect], bodyText[randomEffect]);
  }
  return (
    <StyleButton onClick={toggleShowModal}>
      {buttonText}
      {modalIsOpen && (
        <Popup
          titleText={titleDetails}
          bodyText={textDetails}
          closeModal={toggleShowModal}
        />
      )}
    </StyleButton>
  );
};

export default Button;
