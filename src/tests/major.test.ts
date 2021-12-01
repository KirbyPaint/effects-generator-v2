import {
  majorMagicText,
  majorMagicTitle,
} from "../components/util/effectsArrays/2major/majorMagic";
import {
  majorPiercingText,
  majorPiercingTitle,
} from "../components/util/effectsArrays/2major/majorPiercing";
import {
  majorBludgeoningText,
  majorBludgeoningTitle,
} from "../components/util/effectsArrays/2major/majorBludgeoning";
import {
  majorSlashingText,
  majorSlashingTitle,
} from "../components/util/effectsArrays/2major/majorSlashing";
import {
  TESTmajorMagicTitle,
  TESTmajorMagicText,
  TESTmajorPiercingTitle,
  TESTmajorPiercingText,
  TESTmajorBludgeoningTitle,
  TESTmajorBludgeoningText,
  TESTmajorSlashingTitle,
  TESTmajorSlashingText,
} from "./test-utilities";

describe("majorMagic", () => {
  it("title and text arrays should be the same lengths", () => {
    expect(majorMagicTitle.length).toEqual(majorMagicText.length);
    expect(majorPiercingTitle.length).toEqual(majorPiercingText.length);
    expect(majorBludgeoningTitle.length).toEqual(majorBludgeoningText.length);
    expect(majorSlashingTitle.length).toEqual(majorSlashingText.length);
  });

  it("majorMagicTitle array should reflect correct titles", () => {
    majorMagicTitle.forEach((text, index) => {
      expect(text).toBe(TESTmajorMagicTitle[index]);
    });
  });

  it("majorMagicText array should reflect correct text bodies", () => {
    majorMagicText.forEach((text, index) => {
      expect(text).toBe(TESTmajorMagicText[index]);
    });
  });
});

describe("majorPiercing", () => {
  it("majorPiercingTitle array should reflect correct titles", () => {
    majorPiercingTitle.forEach((text, index) => {
      expect(text).toBe(TESTmajorPiercingTitle[index]);
    });
  });

  it("majorPiercingText array should reflect correct text bodies", () => {
    majorPiercingText.forEach((text, index) => {
      expect(text).toBe(TESTmajorPiercingText[index]);
    });
  });
});

describe("majorBludgeoning", () => {
  it("majorBludgeoningTitle array should reflect correct titles", () => {
    majorBludgeoningTitle.forEach((text, index) => {
      expect(text).toBe(TESTmajorBludgeoningTitle[index]);
    });
  });

  it("majorBludgeoningText array should reflect correct text bodies", () => {
    majorBludgeoningText.forEach((text, index) => {
      expect(text).toBe(TESTmajorBludgeoningText[index]);
    });
  });
});

describe("majorSlashing", () => {
  it("majorSlashingTitle array should reflect correct titles", () => {
    majorSlashingTitle.forEach((text, index) => {
      expect(text).toBe(TESTmajorSlashingTitle[index]);
    });
  });

  it("majorSlashingText array should reflect correct text bodies", () => {
    majorSlashingText.forEach((text, index) => {
      expect(text).toBe(TESTmajorSlashingText[index]);
    });
  });
});
