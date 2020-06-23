import { DIRECTIONS } from "../constants";
import { createNewSnakeHead } from "./";

describe("createNewSnakeHead.js", () => {
  it("should minus row by 1 when going up", () => {
    const currentHead = { row: 2, column: 5 };
    const expected = {
      row: currentHead.row - 1,
      column: currentHead.column
    };

    expect(
      createNewSnakeHead(currentHead, { direction: DIRECTIONS.Up })
    ).toEqual(expected);
  });

  it("should plus row by 1 when going down", () => {
    const currentHead = { row: 2, column: 5 };
    const expected = {
      row: currentHead.row + 1,
      column: currentHead.column
    };

    expect(
      createNewSnakeHead(currentHead, { direction: DIRECTIONS.Down })
    ).toEqual(expected);
  });

  it("should minus column by 1 when going left", () => {
    const currentHead = { row: 2, column: 5 };
    const expected = {
      row: currentHead.row,
      column: currentHead.column - 1
    };

    expect(
      createNewSnakeHead(currentHead, { direction: DIRECTIONS.Left })
    ).toEqual(expected);
  });

  it("should plus column by 1 when going rigbt", () => {
    const currentHead = { row: 2, column: 5 };
    const expected = {
      row: currentHead.row,
      column: currentHead.column + 1
    };

    expect(
      createNewSnakeHead(currentHead, { direction: DIRECTIONS.Right })
    ).toEqual(expected);
  });

  it("should throw when a direction is not supported", () => {
    const currentHead = { row: 2, column: 5 };
    expect(() =>
      createNewSnakeHead(currentHead, { direction: "space" })
    ).toThrow("createNewSnakeHead - Direction not supported");
  });
});
