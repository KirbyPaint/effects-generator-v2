import { FC } from "react";
import { StyleClosePopupButton } from "../styles/styles";
import { useRecoilState } from "recoil";
import { popupState } from "./DataStore";

// tslint:disable-next-line: no-empty-interface
interface IClosePopupButton {
  data: string;
}

const ClosePopupButton: FC<IClosePopupButton> = (props) => {
  const [, setPopupIsOpen] = useRecoilState(popupState);

  function toggleHideModal() {
    setPopupIsOpen(false);
  }
  return (
    <StyleClosePopupButton onClick={toggleHideModal}>
      {props.data}
    </StyleClosePopupButton>
  );
};

export default ClosePopupButton;
