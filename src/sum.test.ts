import { sumForTesting } from "./sum";
test("adds 1 + 2 to equal 3", () => {
  expect(sumForTesting(1, 2)).toBe(3);
});
