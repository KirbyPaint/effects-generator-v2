import { FC } from "react";
import Button from "../../components/effectButton";
import {
  severeBludgeoningText,
  severeBludgeoningTitle,
} from "../../components/effectsArrays/3severe/severeBludgeoning";
import {
  severeMagicText,
  severeMagicTitle,
} from "../../components/effectsArrays/3severe/severeMagic";
import {
  severePiercingText,
  severePiercingTitle,
} from "../../components/effectsArrays/3severe/severePiercing";
import {
  severeSlashingText,
  severeSlashingTitle,
} from "../../components/effectsArrays/3severe/severeSlashing";
import { randomNumber } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";

const slashing = () => {
  const effect = randomNumber();
  alert(`${severeSlashingTitle[effect]} ${severeSlashingText[effect]}`);
};

const piercing = () => {
  const effect = randomNumber();
  alert(`${severePiercingTitle[effect]} ${severePiercingText[effect]}`);
};

const bludgeoning = () => {
  const effect = randomNumber();
  alert(`${severeBludgeoningTitle[effect]} ${severeBludgeoningText[effect]}`);
};

const magic = () => {
  const effect = randomNumber();
  alert(`${severeMagicTitle[effect]} ${severeMagicText[effect]}`);
};

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const SevereButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button handleClick={slashing} buttonText={slashingText} />
      <Button handleClick={piercing} buttonText={piercingText} />
      <Button handleClick={bludgeoning} buttonText={bludgeoningText} />
      <Button handleClick={magic} buttonText={magicText} />
    </StyleButtonColumn>
  );
};

export default SevereButtonColumn;
