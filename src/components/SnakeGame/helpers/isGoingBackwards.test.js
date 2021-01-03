import { DIRECTIONS } from "../constants";
import { isGoingBackwards } from "./";

describe("isGoingBackwards.js throw tests", () => {
  it("should throw when a direction is not supported", () => {
    const direction = "random";
    const newDirection = "diagonal";

    expect(() => isGoingBackwards({ direction, newDirection })).toThrow(
      "isGoingBackwards - Direction not supported"
    );
  });
});

describe("isGoingBackwards.js truthy tests", () => {
  it("returns true if current direction is DOWN and new direction is UP", () => {
    const currDirection = DIRECTIONS.Down;
    const newDirection = DIRECTIONS.Up;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeTruthy();
  });

  it("returns true if current direction is UP and new direction is DOWN", () => {
    const currDirection = DIRECTIONS.Up;
    const newDirection = DIRECTIONS.Down;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeTruthy();
  });

  it("returns true if current direction is LEFT and new direction is RIGHT", () => {
    const currDirection = DIRECTIONS.Left;
    const newDirection = DIRECTIONS.Right;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeTruthy();
  });

  it("returns true if current direction is RIGHT and new direction is LEFT", () => {
    const currDirection = DIRECTIONS.Right;
    const newDirection = DIRECTIONS.Left;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeTruthy();
  });
});

describe("isGoingBackwards.js falsy tests", () => {
  it("returns false if current direction is DOWN and new direction is LEFT", () => {
    const currDirection = DIRECTIONS.Down;
    const newDirection = DIRECTIONS.Left;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeFalsy();
  });

  it("returns false if current direction is DOWN and new direction is RIGHT", () => {
    const currDirection = DIRECTIONS.Down;
    const newDirection = DIRECTIONS.Right;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeFalsy();
  });

  it("returns false if current direction is UP and new direction is LEFT", () => {
    const currDirection = DIRECTIONS.Up;
    const newDirection = DIRECTIONS.Left;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeFalsy();
  });

  it("returns false if current direction is UP and new direction is RIGHT", () => {
    const currDirection = DIRECTIONS.Up;
    const newDirection = DIRECTIONS.Right;
    expect(isGoingBackwards({ currDirection, newDirection })).toBeFalsy();
  });
});
