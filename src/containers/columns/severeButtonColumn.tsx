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
  StyleButton,
  StyleButtonColumn,
  StyleButtonContainer,
} from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const SevereButtonColumn: FC<IButtonColumn> = () => {
  return (
    <StyleButtonColumn>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={slashingText}
            titleText={severeSlashingTitle}
            bodyText={severeSlashingText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={piercingText}
            titleText={severePiercingTitle}
            bodyText={severePiercingText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={bludgeoningText}
            titleText={severeBludgeoningTitle}
            bodyText={severeBludgeoningText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={magicText}
            titleText={severeMagicTitle}
            bodyText={severeMagicText}
          />
        </StyleButton>
      </StyleButtonContainer>
    </StyleButtonColumn>
  );
};

export default SevereButtonColumn;
