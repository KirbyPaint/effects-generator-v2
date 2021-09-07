import { FC } from "react";
import Button from "../../components/effectButton";
import {
  minorBludgeoningText,
  minorBludgeoningTitle,
} from "../../components/util/effectsArrays/1minor/minorBludgeoning";
import {
  minorMagicText,
  minorMagicTitle,
} from "../../components/util/effectsArrays/1minor/minorMagic";
import {
  minorPiercingText,
  minorPiercingTitle,
} from "../../components/util/effectsArrays/1minor/minorPiercing";
import {
  minorSlashingText,
  minorSlashingTitle,
} from "../../components/util/effectsArrays/1minor/minorSlashing";
import { randomNumber } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";

const slashing = () => {
  const effect = randomNumber();
  alert(`${minorSlashingTitle[effect]} ${minorSlashingText[effect]}`);
};

const piercing = () => {
  const effect = randomNumber();
  alert(`${minorPiercingTitle[effect]} ${minorPiercingText[effect]}`);
};

const bludgeoning = () => {
  const effect = randomNumber();
  alert(`${minorBludgeoningTitle[effect]} ${minorBludgeoningText[effect]}`);
};

const magic = () => {
  const effect = randomNumber();
  alert(`${minorMagicTitle[effect]} ${minorMagicText[effect]}`);
};

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MinorButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button handleClick={slashing} buttonText={slashingText} />
      <Button handleClick={piercing} buttonText={piercingText} />
      <Button handleClick={bludgeoning} buttonText={bludgeoningText} />
      <Button handleClick={magic} buttonText={magicText} />
    </StyleButtonColumn>
  );
};

export default MinorButtonColumn;
