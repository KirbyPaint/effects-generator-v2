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
import {
  StyleButtonColumn,
  StyleEffectButtonContainer,
} from "../../styles/styles";

const meleeText = "Melee";
const rangedText = "Ranged";
const naturalText = "Natural";
const magicText = "Magic";

const FumbleButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <StyleEffectButtonContainer>
        <Button
          buttonText={meleeText}
          titleText={fumbleMeleeTitle}
          bodyText={fumbleMeleeText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={rangedText}
          titleText={fumbleRangedTitle}
          bodyText={fumbleRangedText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={naturalText}
          titleText={fumbleNaturalTitle}
          bodyText={fumbleNaturalText}
        />
      </StyleEffectButtonContainer>
      <StyleEffectButtonContainer>
        <Button
          buttonText={magicText}
          titleText={fumbleMagicTitle}
          bodyText={fumbleMagicText}
        />
      </StyleEffectButtonContainer>
    </StyleButtonColumn>
  );
};

export default FumbleButtonColumn;
