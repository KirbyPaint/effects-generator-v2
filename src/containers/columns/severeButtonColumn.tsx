import { FC } from "react";
import Button from "../../components/effectButton";
import {
  severeBludgeoningText,
  severeBludgeoningTitle,
} from "../../components/util/effectsArrays/3severe/severeBludgeoning";
import {
  severeMagicText,
  severeMagicTitle,
} from "../../components/util/effectsArrays/3severe/severeMagic";
import {
  severePiercingText,
  severePiercingTitle,
} from "../../components/util/effectsArrays/3severe/severePiercing";
import {
  severeSlashingText,
  severeSlashingTitle,
} from "../../components/util/effectsArrays/3severe/severeSlashing";
import { IButtonColumn } from "../../components/util/exports";
import { randomizer } from "../../components/util/randomNumberGenerator";
import { StyleButtonColumn } from "../../styles/styles";

const slashing = () => {
  const effect = randomizer();
  alert(`${severeSlashingTitle[effect]} ${severeSlashingText[effect]}`);
};

const piercing = () => {
  const effect = randomizer();
  alert(`${severePiercingTitle[effect]} ${severePiercingText[effect]}`);
};

const bludgeoning = () => {
  const effect = randomizer();
  alert(`${severeBludgeoningTitle[effect]} ${severeBludgeoningText[effect]}`);
};

const magic = () => {
  const effect = randomizer();
  alert(`${severeMagicTitle[effect]} ${severeMagicText[effect]}`);
};

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const SevereButtonColumn: FC<IButtonColumn> = (props) => {
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

export default SevereButtonColumn;
