import { FC } from "react";
import {
  StyleBodyText,
  StylePopupContainer,
  StylePopupTitle,
  StylePopupWindow,
} from "../styles/styles";

interface IPopup {
  titleText: string;
  bodyText: string;
  closeModal: () => void;
}

const Popup: FC<IPopup> = (props) => {
  const { titleText, bodyText } = props;
  return (
    <StylePopupWindow>
      <StylePopupContainer>
        <StylePopupTitle>{titleText}</StylePopupTitle>
      </StylePopupContainer>
      <StylePopupContainer>
        <StyleBodyText>{bodyText}</StyleBodyText>
      </StylePopupContainer>
    </StylePopupWindow>
  );
};

export default Popup;
