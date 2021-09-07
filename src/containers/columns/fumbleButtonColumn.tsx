import { FC } from "react";
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
import { randomNumber } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";
import ReactModal from "react-modal";

function insertPopupText(title: string, text: string) {
  return <Popup titleText={title} bodyText={text} />;
}

const melee = () => {
  const effect = randomNumber();
  insertPopupText(fumbleMeleeTitle[effect], fumbleMeleeText[effect]);
  <ReactModal isOpen={false} shouldCloseOnOverlayClick={true} />;
};

const ranged = () => {
  const effect = randomNumber();
  alert(`${fumbleRangedTitle[effect]} ${fumbleRangedText[effect]}`);
};

const natural = () => {
  const effect = randomNumber();
  alert(`${fumbleNaturalTitle[effect]} ${fumbleNaturalText[effect]}`);
};

const magic = () => {
  const effect = randomNumber();
  alert(`${fumbleMagicTitle[effect]} ${fumbleMagicText[effect]}`);
};

const meleeText = "Melee";
const rangedText = "Ranged";
const naturalText = "Natural";
const magicText = "Magic";

const FumbleButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button handleClick={melee} buttonText={meleeText} />
      <Button handleClick={ranged} buttonText={rangedText} />
      <Button handleClick={natural} buttonText={naturalText} />
      <Button handleClick={magic} buttonText={magicText} />
    </StyleButtonColumn>
  );
};

export default FumbleButtonColumn;
