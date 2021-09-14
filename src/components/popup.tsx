import { FC } from "react";
import { StyleBodyText, StyleHeaderText, StylePopup } from "../styles/styles";

interface IPopup {
  titleText: string;
  bodyText: string;
  closeModal: () => void;
}

const Popup: FC<IPopup> = (props) => {
  const { titleText, bodyText } = props;
  return (
    <StylePopup>
      <StyleHeaderText>{titleText}</StyleHeaderText>
      <StyleBodyText>{bodyText}</StyleBodyText>
    </StylePopup>
  );
};

export default Popup;
