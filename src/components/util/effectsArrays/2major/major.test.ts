import { majorMagicText, majorMagicTitle } from "./majorMagic";
import { majorPiercingText, majorPiercingTitle } from "./majorPiercing";
import {
  majorBludgeoningText,
  majorBludgeoningTitle,
} from "./majorBludgeoning";
import { majorSlashingText, majorSlashingTitle } from "./majorSlashing";

describe("majorMagic", () => {
  it("majorMagicTitle array should reflect correct titles", () => {
    majorMagicTitle.forEach((text, index) => {
      expect(text).toBe(majorMagicTitle[index]);
    });
  });

  it("majorMagicText array should reflect correct text bodies", () => {
    majorMagicText.forEach((text, index) => {
      expect(text).toBe(majorMagicText[index]);
    });
  });
});

describe("majorPiercing", () => {
  it("majorPiercingTitle array should reflect correct titles", () => {
    majorPiercingTitle.forEach((text, index) => {
      expect(text).toBe(majorPiercingTitle[index]);
    });
  });

  it("majorPiercingText array should reflect correct text bodies", () => {
    majorPiercingText.forEach((text, index) => {
      expect(text).toBe(majorPiercingText[index]);
    });
  });
});

describe("majorBludgeoning", () => {
  it("majorBludgeoningTitle array should reflect correct titles", () => {
    majorBludgeoningTitle.forEach((text, index) => {
      expect(text).toBe(majorBludgeoningTitle[index]);
    });
  });

  it("majorBludgeoningText array should reflect correct text bodies", () => {
    majorBludgeoningText.forEach((text, index) => {
      expect(text).toBe(majorBludgeoningText[index]);
    });
  });
});

describe("majorSlashing", () => {
  it("majorSlashingTitle array should reflect correct titles", () => {
    majorSlashingTitle.forEach((text, index) => {
      expect(text).toBe(majorSlashingTitle[index]);
    });
  });

  it("majorSlashingText array should reflect correct text bodies", () => {
    majorSlashingText.forEach((text, index) => {
      expect(text).toBe(majorSlashingText[index]);
    });
  });
});
