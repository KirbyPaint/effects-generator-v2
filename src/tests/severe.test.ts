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
import {
  TESTsevereMagicTitle,
  TESTsevereMagicText,
  TESTseverePiercingTitle,
  TESTseverePiercingText,
  TESTsevereBludgeoningTitle,
  TESTsevereBludgeoningText,
  TESTsevereSlashingTitle,
  TESTsevereSlashingText,
} from "./test-utilities";

describe("severeMagic", () => {
  it("title and text arrays should be the same lengths", () => {
    expect(severeMagicTitle.length).toEqual(severeMagicText.length);
    expect(severePiercingTitle.length).toEqual(severePiercingText.length);
    expect(severeBludgeoningTitle.length).toEqual(severeBludgeoningText.length);
    expect(severeSlashingTitle.length).toEqual(severeSlashingText.length);
  });

  it("severeMagicTitle array should reflect correct titles", () => {
    severeMagicTitle.forEach((text, index) => {
      expect(text).toBe(TESTsevereMagicTitle[index]);
    });
  });

  it("severeMagicText array should reflect correct text bodies", () => {
    severeMagicText.forEach((text, index) => {
      expect(text).toBe(TESTsevereMagicText[index]);
    });
  });
});

describe("severePiercing", () => {
  it("severePiercingTitle array should reflect correct titles", () => {
    severePiercingTitle.forEach((text, index) => {
      expect(text).toBe(TESTseverePiercingTitle[index]);
    });
  });

  it("severePiercingText array should reflect correct text bodies", () => {
    severePiercingText.forEach((text, index) => {
      expect(text).toBe(TESTseverePiercingText[index]);
    });
  });
});

describe("severeBludgeoning", () => {
  it("severeBludgeoningTitle array should reflect correct titles", () => {
    severeBludgeoningTitle.forEach((text, index) => {
      expect(text).toBe(TESTsevereBludgeoningTitle[index]);
    });
  });

  it("severeBludgeoningText array should reflect correct text bodies", () => {
    severeBludgeoningText.forEach((text, index) => {
      expect(text).toBe(TESTsevereBludgeoningText[index]);
    });
  });
});

describe("severeSlashing", () => {
  it("severeSlashingTitle array should reflect correct titles", () => {
    severeSlashingTitle.forEach((text, index) => {
      expect(text).toBe(TESTsevereSlashingTitle[index]);
    });
  });

  it("severeSlashingText array should reflect correct text bodies", () => {
    severeSlashingText.forEach((text, index) => {
      expect(text).toBe(TESTsevereSlashingText[index]);
    });
  });
});
