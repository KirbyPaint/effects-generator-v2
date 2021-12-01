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
import {
  TESTminorMagicTitle,
  TESTminorMagicText,
  TESTminorPiercingTitle,
  TESTminorPiercingText,
  TESTminorBludgeoningTitle,
  TESTminorBludgeoningText,
  TESTminorSlashingTitle,
  TESTminorSlashingText,
} from "./test-utilities";

describe("minorMagic", () => {
  it("title and text arrays should be the same lengths", () => {
    expect(minorMagicTitle.length).toEqual(minorMagicText.length);
    expect(minorPiercingTitle.length).toEqual(minorPiercingText.length);
    expect(minorBludgeoningTitle.length).toEqual(minorBludgeoningText.length);
    expect(minorSlashingTitle.length).toEqual(minorSlashingText.length);
  });

  it("minorMagicTitle array should reflect correct titles", () => {
    minorMagicTitle.forEach((text, index) => {
      expect(text).toBe(TESTminorMagicTitle[index]);
    });
  });

  it("minorMagicText array should reflect correct text bodies", () => {
    minorMagicText.forEach((text, index) => {
      expect(text).toBe(TESTminorMagicText[index]);
    });
  });
});

describe("minorPiercing", () => {
  it("minorPiercingTitle array should reflect correct titles", () => {
    minorPiercingTitle.forEach((text, index) => {
      expect(text).toBe(TESTminorPiercingTitle[index]);
    });
  });

  it("minorPiercingText array should reflect correct text bodies", () => {
    minorPiercingText.forEach((text, index) => {
      expect(text).toBe(TESTminorPiercingText[index]);
    });
  });
});

describe("minorBludgeoning", () => {
  it("minorBludgeoningTitle array should reflect correct titles", () => {
    minorBludgeoningTitle.forEach((text, index) => {
      expect(text).toBe(TESTminorBludgeoningTitle[index]);
    });
  });

  it("minorBludgeoningText array should reflect correct text bodies", () => {
    minorBludgeoningText.forEach((text, index) => {
      expect(text).toBe(TESTminorBludgeoningText[index]);
    });
  });
});

describe("minorSlashing", () => {
  it("minorSlashingTitle array should reflect correct titles", () => {
    minorSlashingTitle.forEach((text, index) => {
      expect(text).toBe(TESTminorSlashingTitle[index]);
    });
  });

  it("minorSlashingText array should reflect correct text bodies", () => {
    minorSlashingText.forEach((text, index) => {
      expect(text).toBe(TESTminorSlashingText[index]);
    });
  });
});
