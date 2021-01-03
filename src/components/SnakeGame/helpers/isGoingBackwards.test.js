import { DIRECTIONS } from "../constants";
import { isGoingBackwards } from "./";

const KEYS = {
  Up: 38,
  Down: 40,
  Right: 39,
  Left: 37,
};

describe("isGoingBackwards.js throw tests", () => {
  it("should throw when a direction is not supported", () => {
    const direction = "random";
    const keyCode = 1000;

    expect(() => isGoingBackwards({ direction, keyCode })).toThrow(
      "isGoingBackwards - Direction not supported"
    );
  });
});

describe("isGoingBackwards.js truthy tests", () => {
  it("returns true if current direction is DOWN and new direction is UP", () => {
    const direction = DIRECTIONS.Down;
    const keyCode = KEYS.Up;
    expect(isGoingBackwards({ direction, keyCode })).toBeTruthy();
  });

  it("returns true if current direction is UP and new direction is DOWN", () => {
    const direction = DIRECTIONS.Up;
    const keyCode = KEYS.Down;
    expect(isGoingBackwards({ direction, keyCode })).toBeTruthy();
  });

  it("returns true if current direction is LEFT and new direction is RIGHT", () => {
    const direction = DIRECTIONS.Left;
    const keyCode = KEYS.Right;
    expect(isGoingBackwards({ direction, keyCode })).toBeTruthy();
  });

  it("returns true if current direction is RIGHT and new direction is LEFT", () => {
    const direction = DIRECTIONS.Right;
    const keyCode = KEYS.Left;
    expect(isGoingBackwards({ direction, keyCode })).toBeTruthy();
  });
});

describe("isGoingBackwards.js falsy tests", () => {
  it("returns false if current direction is DOWN and new direction is LEFT", () => {
    const direction = DIRECTIONS.Down;
    const keyCode = KEYS.Left;
    expect(isGoingBackwards({ direction, keyCode })).toBeFalsy();
  });

  it("returns false if current direction is DOWN and new direction is RIGHT", () => {
    const direction = DIRECTIONS.Down;
    const keyCode = KEYS.Right;
    expect(isGoingBackwards({ direction, keyCode })).toBeFalsy();
  });

  it("returns false if current direction is UP and new direction is LEFT", () => {
    const direction = DIRECTIONS.Up;
    const keyCode = KEYS.Left;
    expect(isGoingBackwards({ direction, keyCode })).toBeFalsy();
  });

  it("returns false if current direction is UP and new direction is RIGHT", () => {
    const direction = DIRECTIONS.Up;
    const keyCode = KEYS.Right;
    expect(isGoingBackwards({ direction, keyCode })).toBeFalsy();
  });
});
