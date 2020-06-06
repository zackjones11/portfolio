import { hasBitSelf } from "./";

describe("hasBitSelf.js", () => {
  it("returns false if snake does not include row and column", () => {
    const snake = [{ row: 2, column: 5 }];
    expect(hasBitSelf(snake, { row: 1, column: 3 })).toBeFalsy();
  });

  it("returns true if snake does include row and column", () => {
    const snake = [{ row: 2, column: 5 }];
    expect(hasBitSelf(snake, { row: 2, column: 5 })).toBeTruthy();
  });
});
