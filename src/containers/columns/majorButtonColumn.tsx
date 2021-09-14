import { FC, useState } from "react";
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

const piercing = () => {
  alert(`cum`);
};

const bludgeoning = () => {
  alert(`cum`);
};

const magic = () => {
  alert(`cum`);
};

const slashingText = "Slashing";
const piercingText = "Piercing";
const bludgeoningText = "Bludgeoning";
const magicText = "Magic";

const MajorButtonColumn: FC = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  function slashing() {
    console.log("randomNumber :>> ", randomNumber);
    return;
  }

  return (
    <StyleButtonColumn>
      <Button
        buttonText={slashingText}
        titleTexts={majorSlashingTitle}
        bodyTexts={majorSlashingText}
      />
      {/* <Button
        handleClick={piercing}
        buttonText={piercingText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        handleClick={bludgeoning}
        buttonText={bludgeoningText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      />
      <Button
        handleClick={magic}
        buttonText={magicText}
        titleText={"function for title text"}
        bodyText={"function for body text"}
      /> */}
    </StyleButtonColumn>
  );
};

export default MajorButtonColumn;
