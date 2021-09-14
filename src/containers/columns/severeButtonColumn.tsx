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
import { StyleButtonColumn } from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const SevereButtonColumn: FC<IButtonColumn> = () => {
  return (
    <StyleButtonColumn>
      <Button
        buttonText={slashingText}
        titleText={severeSlashingTitle}
        bodyText={severeSlashingText}
      />
      <Button
        buttonText={piercingText}
        titleText={severePiercingTitle}
        bodyText={severePiercingText}
      />
      <Button
        buttonText={bludgeoningText}
        titleText={severeBludgeoningTitle}
        bodyText={severeBludgeoningText}
      />
      <Button
        buttonText={magicText}
        titleText={severeMagicTitle}
        bodyText={severeMagicText}
      />
    </StyleButtonColumn>
  );
};

export default SevereButtonColumn;
