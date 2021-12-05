import { FC } from "react";
import { StyleBodyText, StylePopupTitle, StylePopup } from "../styles/styles";

interface IPopup {
  titleText: string;
  bodyText: string;
  closeModal: () => void;
}

const Popup: FC<IPopup> = (props) => {
  const { titleText, bodyText } = props;
  return (
    <StylePopup>
      <StylePopupTitle>{titleText}</StylePopupTitle>
      <StyleBodyText>{bodyText}</StyleBodyText>
    </StylePopup>
  );
};

export default Popup;
