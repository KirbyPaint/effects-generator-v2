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
import {
  StyleButton,
  StyleButtonColumn,
  StyleButtonContainer,
} from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MinorButtonColumn: FC<IButtonColumn> = () => {
  return (
    <StyleButtonColumn>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={slashingText}
            titleText={minorSlashingTitle}
            bodyText={minorSlashingText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={piercingText}
            titleText={minorPiercingTitle}
            bodyText={minorPiercingText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={bludgeoningText}
            titleText={minorBludgeoningTitle}
            bodyText={minorBludgeoningText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={magicText}
            titleText={minorMagicTitle}
            bodyText={minorMagicText}
          />
        </StyleButton>
      </StyleButtonContainer>
    </StyleButtonColumn>
  );
};

export default MinorButtonColumn;
