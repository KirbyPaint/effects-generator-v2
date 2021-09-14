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
import { StyleButtonColumn } from "../../styles/styles";

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MajorButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button
        buttonText={slashingText}
        titleText={majorSlashingTitle}
        bodyText={majorSlashingText}
      />
      <Button
        buttonText={piercingText}
        titleText={majorPiercingTitle}
        bodyText={majorPiercingText}
      />
      <Button
        buttonText={bludgeoningText}
        titleText={majorBludgeoningTitle}
        bodyText={majorBludgeoningText}
      />
      <Button
        buttonText={magicText}
        titleText={majorMagicTitle}
        bodyText={majorMagicText}
      />
    </StyleButtonColumn>
  );
};

export default MajorButtonColumn;
