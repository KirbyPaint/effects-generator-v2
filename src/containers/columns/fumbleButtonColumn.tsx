import { FC, useState } from "react";
import Button from "../../components/effectButton";
import {
  fumbleMagicText,
  fumbleMagicTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleMagic";
import {
  fumbleMeleeText,
  fumbleMeleeTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleMelee";
import {
  fumbleNaturalText,
  fumbleNaturalTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleNatural";
import {
  fumbleRangedText,
  fumbleRangedTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleRanged";
import Popup from "../../components/popup";
import { randomizer } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";
// import { IButtonColumn } from "../../components/util/exports";

const meleeText = "Melee";
const rangedText = "Ranged";
const naturalText = "Natural";
const magicText = "Magic";

const FumbleButtonColumn: FC = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [activeModal, setActiveModal] = useState(""); // might not be needed
  function closeModal() {
    setModalIsOpen(false);
    setActiveModal("");
  }

  function insertPopupText(title: string, text: string) {
    // return <Popup titleText={title} bodyText={text} />;
  }

  const melee = () => {
    const effect = randomizer();
    insertPopupText(fumbleMeleeTitle[effect], fumbleMeleeText[effect]);
  };

  const ranged = () => {
    const effect = randomizer();
    alert(`${fumbleRangedTitle[effect]} ${fumbleRangedText[effect]}`);
  };

  const natural = () => {
    const effect = randomizer();
    alert(`${fumbleNaturalTitle[effect]} ${fumbleNaturalText[effect]}`);
  };

  const magic = () => {
    const effect = randomizer();
    alert(`${fumbleMagicTitle[effect]} ${fumbleMagicText[effect]}`);
  };

  return (
    <StyleButtonColumn>
      {/* <Button
        // handleClick={melee}
        buttonText={meleeText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        // handleClick={ranged}
        buttonText={rangedText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        // handleClick={natural}
        buttonText={naturalText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        // handleClick={magic}
        buttonText={magicText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      /> */}
    </StyleButtonColumn>
  );
};

export default FumbleButtonColumn;
