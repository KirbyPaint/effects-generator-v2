import {
  minorMagicText,
  minorMagicTitle,
} from "../components/util/effectsArrays/1minor/minorMagic";
import {
  minorPiercingText,
  minorPiercingTitle,
} from "../components/util/effectsArrays/1minor/minorPiercing";
import {
  minorBludgeoningText,
  minorBludgeoningTitle,
} from "../components/util/effectsArrays/1minor/minorBludgeoning";
import {
  minorSlashingText,
  minorSlashingTitle,
} from "../components/util/effectsArrays/1minor/minorSlashing";

describe("minorMagic", () => {
  it("minorMagicTitle array should reflect correct titles", () => {
    minorMagicTitle.forEach((text, index) => {
      expect(text).toBe(minorMagicTitle[index]);
    });
  });

  it("minorMagicText array should reflect correct text bodies", () => {
    minorMagicText.forEach((text, index) => {
      expect(text).toBe(minorMagicText[index]);
    });
  });
});

describe("minorPiercing", () => {
  it("minorPiercingTitle array should reflect correct titles", () => {
    minorPiercingTitle.forEach((text, index) => {
      expect(text).toBe(minorPiercingTitle[index]);
    });
  });

  it("minorPiercingText array should reflect correct text bodies", () => {
    minorPiercingText.forEach((text, index) => {
      expect(text).toBe(minorPiercingText[index]);
    });
  });
});

describe("minorBludgeoning", () => {
  it("minorBludgeoningTitle array should reflect correct titles", () => {
    minorBludgeoningTitle.forEach((text, index) => {
      expect(text).toBe(minorBludgeoningTitle[index]);
    });
  });

  it("minorBludgeoningText array should reflect correct text bodies", () => {
    minorBludgeoningText.forEach((text, index) => {
      expect(text).toBe(minorBludgeoningText[index]);
    });
  });
});

describe("minorSlashing", () => {
  it("minorSlashingTitle array should reflect correct titles", () => {
    minorSlashingTitle.forEach((text, index) => {
      expect(text).toBe(minorSlashingTitle[index]);
    });
  });

  it("minorSlashingText array should reflect correct text bodies", () => {
    minorSlashingText.forEach((text, index) => {
      expect(text).toBe(minorSlashingText[index]);
    });
  });
});
