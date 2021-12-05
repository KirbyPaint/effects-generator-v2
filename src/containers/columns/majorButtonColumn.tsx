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
  StyleButtonColumn,
  StyleEffectButtonContainer,
} from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MajorButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <StyleEffectButtonContainer>
        <Button
          buttonText={slashingText}
          titleText={majorSlashingTitle}
          bodyText={majorSlashingText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={piercingText}
          titleText={majorPiercingTitle}
          bodyText={majorPiercingText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={bludgeoningText}
          titleText={majorBludgeoningTitle}
          bodyText={majorBludgeoningText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={magicText}
          titleText={majorMagicTitle}
          bodyText={majorMagicText}
        />
      </StyleEffectButtonContainer>
    </StyleButtonColumn>
  );
};

export default MajorButtonColumn;
