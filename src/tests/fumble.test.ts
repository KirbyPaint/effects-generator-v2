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
import {
  TESTfumbleMagicText,
  TESTfumbleMagicTitle,
  TESTfumbleMeleeText,
  TESTfumbleMeleeTitle,
  TESTfumbleNaturalText,
  TESTfumbleNaturalTitle,
  TESTfumbleRangedText,
  TESTfumbleRangedTitle,
} from "./test-utilities";

describe("fumbleMagic", () => {
  it("title and text arrays should be the same lengths", () => {
    expect(fumbleMagicTitle.length).toEqual(fumbleMagicText.length);
    expect(fumbleMeleeTitle.length).toEqual(fumbleMeleeText.length);
    expect(fumbleNaturalTitle.length).toEqual(fumbleNaturalText.length);
    expect(fumbleRangedTitle.length).toEqual(fumbleRangedText.length);
  });

  it("fumbleMagicTitle array should reflect correct titles", () => {
    fumbleMagicTitle.forEach((text, index) => {
      expect(text).toBe(TESTfumbleMagicTitle[index]);
    });
  });

  it("fumbleMagicText array should reflect correct text bodies", () => {
    fumbleMagicText.forEach((text, index) => {
      expect(text).toBe(TESTfumbleMagicText[index]);
    });
  });
});

describe("fumbleMelee", () => {
  it("fumbleMeleeTitle array should reflect correct titles", () => {
    fumbleMeleeTitle.forEach((text, index) => {
      expect(text).toBe(TESTfumbleMeleeTitle[index]);
    });
  });

  it("fumbleMeleeText array should reflect correct text bodies", () => {
    fumbleMeleeText.forEach((text, index) => {
      expect(text).toBe(TESTfumbleMeleeText[index]);
    });
  });
});

describe("fumbleNatural", () => {
  it("fumbleNaturalTitle array should reflect correct titles", () => {
    fumbleNaturalTitle.forEach((text, index) => {
      expect(text).toBe(TESTfumbleNaturalTitle[index]);
    });
  });

  it("fumbleNaturalText array should reflect correct text bodies", () => {
    fumbleNaturalText.forEach((text, index) => {
      expect(text).toBe(TESTfumbleNaturalText[index]);
    });
  });
});

describe("fumbleRanged", () => {
  it("fumbleRangedTitle array should reflect correct titles", () => {
    fumbleRangedTitle.forEach((text, index) => {
      expect(text).toBe(TESTfumbleRangedTitle[index]);
    });
  });

  it("fumbleRangedText array should reflect correct text bodies", () => {
    fumbleRangedText.forEach((text, index) => {
      expect(text).toBe(TESTfumbleRangedText[index]);
    });
  });
});
