import { FC } from "react";
import Button from "../../components/effectButton";
import {
  majorBludgeoningText,
  majorBludgeoningTitle,
} from "../../components/util/effectsArrays/2major/majorBludgeoning";
import {
  majorMagicText,
  majorMagicTitle,
} from "../../components/util/effectsArrays/2major/majorMagic";
import {
  majorPiercingText,
  majorPiercingTitle,
} from "../../components/util/effectsArrays/2major/majorPiercing";
import {
  majorSlashingText,
  majorSlashingTitle,
} from "../../components/util/effectsArrays/2major/majorSlashing";
import { randomNumber } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";

const slashing = () => {
  const effect = randomNumber();
  alert(`${majorSlashingTitle[effect]} ${majorSlashingText[effect]}`);
};

const piercing = () => {
  const effect = randomNumber();
  alert(`${majorPiercingTitle[effect]} ${majorPiercingText[effect]}`);
};

const bludgeoning = () => {
  const effect = randomNumber();
  alert(`${majorBludgeoningTitle[effect]} ${majorBludgeoningText[effect]}`);
};

const magic = () => {
  const effect = randomNumber();
  alert(`${majorMagicTitle[effect]} ${majorMagicText[effect]}`);
};

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MajorButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button handleClick={slashing} buttonText={slashingText} />
      <Button handleClick={piercing} buttonText={piercingText} />
      <Button handleClick={bludgeoning} buttonText={bludgeoningText} />
      <Button handleClick={magic} buttonText={magicText} />
    </StyleButtonColumn>
  );
};

export default MajorButtonColumn;
