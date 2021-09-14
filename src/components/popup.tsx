import { FC } from "react";
import { StylePopup } from "../styles/styles";

interface IPopup {
  titleText: string;
  bodyText: string;
  closeModal: () => void;
}

const Popup: FC<IPopup> = (props) => {
  const { titleText, bodyText } = props;
  return (
    <StylePopup>
      <p>{titleText}</p>
      <p>{bodyText}</p>
      <button>Close</button>
    </StylePopup>
  );
};

export default Popup;
