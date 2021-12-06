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
import { StyleButtonColumn, StyleButtonContainer } from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const SevereButtonColumn: FC<IButtonColumn> = () => {
  return (
    <StyleButtonColumn>
      <StyleButtonContainer>
        <Button
          buttonText={slashingText}
          titleText={severeSlashingTitle}
          bodyText={severeSlashingText}
        />
      </StyleButtonContainer>
      <StyleButtonContainer>
        <Button
          buttonText={piercingText}
          titleText={severePiercingTitle}
          bodyText={severePiercingText}
        />
      </StyleButtonContainer>
      <StyleButtonContainer>
        <Button
          buttonText={bludgeoningText}
          titleText={severeBludgeoningTitle}
          bodyText={severeBludgeoningText}
        />
      </StyleButtonContainer>
      <StyleButtonContainer>
        <Button
          buttonText={magicText}
          titleText={severeMagicTitle}
          bodyText={severeMagicText}
        />
      </StyleButtonContainer>
    </StyleButtonColumn>
  );
};

export default SevereButtonColumn;
