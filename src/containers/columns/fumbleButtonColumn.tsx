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
  StyleButton,
  StyleButtonColumn,
  StyleButtonContainer,
} from "../../styles/styles";

const meleeText = "Melee";
const rangedText = "Ranged";
const naturalText = "Natural";
const magicText = "Magic";

const FumbleButtonColumn: FC = () => {
  return (
    <StyleButtonColumn>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={meleeText}
            titleText={fumbleMeleeTitle}
            bodyText={fumbleMeleeText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={rangedText}
            titleText={fumbleRangedTitle}
            bodyText={fumbleRangedText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={naturalText}
            titleText={fumbleNaturalTitle}
            bodyText={fumbleNaturalText}
          />
        </StyleButton>
      </StyleButtonContainer>
      <StyleButtonContainer>
        <StyleButton>
          <Button
            buttonText={magicText}
            titleText={fumbleMagicTitle}
            bodyText={fumbleMagicText}
          />
        </StyleButton>
      </StyleButtonContainer>
    </StyleButtonColumn>
  );
};

export default FumbleButtonColumn;
