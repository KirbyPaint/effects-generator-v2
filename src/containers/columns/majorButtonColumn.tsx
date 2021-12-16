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
import {
  StyleButton,
  StyleButtonColumn,
  StyleButtonContainer,
} from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MajorButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={slashingText}
            titleText={majorSlashingTitle}
            bodyText={majorSlashingText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={piercingText}
            titleText={majorPiercingTitle}
            bodyText={majorPiercingText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={bludgeoningText}
            titleText={majorBludgeoningTitle}
            bodyText={majorBludgeoningText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={magicText}
            titleText={majorMagicTitle}
            bodyText={majorMagicText}
          />
        </StyleButton>
      </StyleButtonContainer>
    </StyleButtonColumn>
  );
};

export default MajorButtonColumn;
