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
import {
  StyleButtonColumn,
  StyleEffectButtonContainer,
} from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const SevereButtonColumn: FC<IButtonColumn> = () => {
  return (
    <StyleButtonColumn>
      <StyleEffectButtonContainer>
        <Button
          buttonText={slashingText}
          titleText={severeSlashingTitle}
          bodyText={severeSlashingText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={piercingText}
          titleText={severePiercingTitle}
          bodyText={severePiercingText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={bludgeoningText}
          titleText={severeBludgeoningTitle}
          bodyText={severeBludgeoningText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={magicText}
          titleText={severeMagicTitle}
          bodyText={severeMagicText}
        />
      </StyleEffectButtonContainer>
    </StyleButtonColumn>
  );
};

export default SevereButtonColumn;
