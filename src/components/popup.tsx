import { FC } from "react";

interface IPopup {
  titleText: string;
  bodyText: string;
}

const Popup: FC<IPopup> = (props) => {
  return (
    <div>
      <p>{props.titleText}</p>
      <p>{props.bodyText}</p>
    </div>
  );
};

export default Popup;
