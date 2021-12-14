import { FC } from "react";
import {
  StyleBodyText,
  StylePopupContainer,
  StylePopupTitle,
  StylePopupWindow,
} from "../styles/styles";
import ClosePopupButton from "./closePopupButton";

interface IPopup {
  titleText: string;
  bodyText: string;
  // closeModal: () => void;
}

const Popup: FC<IPopup> = (props) => {
  const { titleText, bodyText } = props;
  return (
    <StylePopupWindow>
      <StylePopupContainer>
        <ClosePopupButton data={"x"} />
        <StylePopupTitle>{titleText}</StylePopupTitle>
      </StylePopupContainer>
      <StylePopupContainer>
        <StyleBodyText>{bodyText}</StyleBodyText>
      </StylePopupContainer>
    </StylePopupWindow>
  );
};

export default Popup;
