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
import { IButtonColumn } from "../../components/util/exports";
import { randomizer } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";

const slashing = () => {
  const effect = randomizer();
  alert(`${minorSlashingTitle[effect]} ${minorSlashingText[effect]}`);
};

const piercing = () => {
  const effect = randomizer();
  alert(`${minorPiercingTitle[effect]} ${minorPiercingText[effect]}`);
};

const bludgeoning = () => {
  const effect = randomizer();
  alert(`${minorBludgeoningTitle[effect]} ${minorBludgeoningText[effect]}`);
};

const magic = () => {
  const effect = randomizer();
  alert(`${minorMagicTitle[effect]} ${minorMagicText[effect]}`);
};

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MinorButtonColumn: FC<IButtonColumn> = (props) => {
  return (
    <StyleButtonColumn>
      {/* <Button
        buttonText={slashingText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        buttonText={piercingText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        buttonText={bludgeoningText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        buttonText={magicText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      /> */}
    </StyleButtonColumn>
  );
};

export default MinorButtonColumn;
