import {
  fumbleMagicText,
  fumbleMagicTitle,
} from "../components/util/effectsArrays/0fumble/fumbleMagic";
import {
  fumbleMeleeText,
  fumbleMeleeTitle,
} from "../components/util/effectsArrays/0fumble/fumbleMelee";
import {
  fumbleNaturalText,
  fumbleNaturalTitle,
} from "../components/util/effectsArrays/0fumble/fumbleNatural";
import {
  fumbleRangedText,
  fumbleRangedTitle,
} from "../components/util/effectsArrays/0fumble/fumbleRanged";

describe("fumbleMagic", () => {
  it("fumbleMagicTitle array should reflect correct titles", () => {
    fumbleMagicTitle.forEach((text, index) => {
      expect(text).toBe(fumbleMagicTitle[index]);
    });
  });

  it("fumbleMagicText array should reflect correct text bodies", () => {
    fumbleMagicText.forEach((text, index) => {
      expect(text).toBe(fumbleMagicText[index]);
    });
  });
});

describe("fumbleMelee", () => {
  it("fumbleMeleeTitle array should reflect correct titles", () => {
    fumbleMeleeTitle.forEach((text, index) => {
      expect(text).toBe(fumbleMeleeTitle[index]);
    });
  });

  it("fumbleMeleeText array should reflect correct text bodies", () => {
    fumbleMeleeText.forEach((text, index) => {
      expect(text).toBe(fumbleMeleeText[index]);
    });
  });
});

describe("fumbleNatural", () => {
  it("fumbleNaturalTitle array should reflect correct titles", () => {
    fumbleNaturalTitle.forEach((text, index) => {
      expect(text).toBe(fumbleNaturalTitle[index]);
    });
  });

  it("fumbleNaturalText array should reflect correct text bodies", () => {
    fumbleNaturalText.forEach((text, index) => {
      expect(text).toBe(fumbleNaturalText[index]);
    });
  });
});

describe("fumbleRanged", () => {
  it("fumbleRangedTitle array should reflect correct titles", () => {
    fumbleRangedTitle.forEach((text, index) => {
      expect(text).toBe(fumbleRangedTitle[index]);
    });
  });

  it("fumbleRangedText array should reflect correct text bodies", () => {
    fumbleRangedText.forEach((text, index) => {
      expect(text).toBe(fumbleRangedText[index]);
    });
  });
});
