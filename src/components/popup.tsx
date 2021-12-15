import { FC } from "react";
import { useRecoilState } from "recoil";
import {
  StyleBodyText,
  StylePopupContainer,
  StylePopupTitle,
  StylePopupWindow,
} from "../styles/styles";
import ClosePopupButton from "./closePopupButton";
import { popupState } from "./DataStore";

interface IPopup {
  titleText: string;
  bodyText: string;
}

const Popup: FC<IPopup> = (props) => {
  const { titleText, bodyText } = props;
  const [popupIsOpen, setPopupIsOpen] = useRecoilState(popupState);
  return (
    <>
      {popupIsOpen && (
        <StylePopupWindow>
          <StylePopupContainer>
            <ClosePopupButton data={"x"} />
            <StylePopupTitle>{titleText}</StylePopupTitle>
          </StylePopupContainer>
          <StylePopupContainer>
            <StyleBodyText>{bodyText}</StyleBodyText>
          </StylePopupContainer>
        </StylePopupWindow>
      )}
    </>
  );
};

export default Popup;
