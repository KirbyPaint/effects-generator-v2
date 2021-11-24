import {
  severeMagicText,
  severeMagicTitle,
} from "../components/util/effectsArrays/3severe/severeMagic";
import {
  severePiercingText,
  severePiercingTitle,
} from "../components/util/effectsArrays/3severe/severePiercing";
import {
  severeBludgeoningText,
  severeBludgeoningTitle,
} from "../components/util/effectsArrays/3severe/severeBludgeoning";
import {
  severeSlashingText,
  severeSlashingTitle,
} from "../components/util/effectsArrays/3severe/severeSlashing";

describe("severeMagic", () => {
  it("severeMagicTitle array should reflect correct titles", () => {
    severeMagicTitle.forEach((text, index) => {
      expect(text).toBe(severeMagicTitle[index]);
    });
  });

  it("severeMagicText array should reflect correct text bodies", () => {
    severeMagicText.forEach((text, index) => {
      expect(text).toBe(severeMagicText[index]);
    });
  });
});

describe("severePiercing", () => {
  it("severePiercingTitle array should reflect correct titles", () => {
    severePiercingTitle.forEach((text, index) => {
      expect(text).toBe(severePiercingTitle[index]);
    });
  });

  it("severePiercingText array should reflect correct text bodies", () => {
    severePiercingText.forEach((text, index) => {
      expect(text).toBe(severePiercingText[index]);
    });
  });
});

describe("severeBludgeoning", () => {
  it("severeBludgeoningTitle array should reflect correct titles", () => {
    severeBludgeoningTitle.forEach((text, index) => {
      expect(text).toBe(severeBludgeoningTitle[index]);
    });
  });

  it("severeBludgeoningText array should reflect correct text bodies", () => {
    severeBludgeoningText.forEach((text, index) => {
      expect(text).toBe(severeBludgeoningText[index]);
    });
  });
});

describe("severeSlashing", () => {
  it("severeSlashingTitle array should reflect correct titles", () => {
    severeSlashingTitle.forEach((text, index) => {
      expect(text).toBe(severeSlashingTitle[index]);
    });
  });

  it("severeSlashingText array should reflect correct text bodies", () => {
    severeSlashingText.forEach((text, index) => {
      expect(text).toBe(severeSlashingText[index]);
    });
  });
});
