import { FC } from "react";
import Button from "../../components/effectButton";
import {
  fumbleMagicText,
  fumbleMagicTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleMagic";
import {
  fumbleMeleeText,
  fumbleMeleeTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleMelee";
import {
  fumbleNaturalText,
  fumbleNaturalTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleNatural";
import {
  fumbleRangedText,
  fumbleRangedTitle,
} from "../../components/util/effectsArrays/0fumble/fumbleRanged";
import { StyleButtonColumn } from "../../styles/styles";

const meleeText = "Melee";
const rangedText = "Ranged";
const naturalText = "Natural";
const magicText = "Magic";

const FumbleButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <Button
        buttonText={meleeText}
        titleText={fumbleMeleeTitle}
        bodyText={fumbleMeleeText}
      />
      <Button
        buttonText={rangedText}
        titleText={fumbleRangedTitle}
        bodyText={fumbleRangedText}
      />
      <Button
        buttonText={naturalText}
        titleText={fumbleNaturalTitle}
        bodyText={fumbleNaturalText}
      />
      <Button
        buttonText={magicText}
        titleText={fumbleMagicTitle}
        bodyText={fumbleMagicText}
      />
    </StyleButtonColumn>
  );
};

export default FumbleButtonColumn;
