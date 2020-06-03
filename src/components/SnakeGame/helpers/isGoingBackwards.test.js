import { isGoingBackwards } from "./";
import { KEY_BIND } from "../constants";

describe('isGoingBackwards.js truthy tests', () => {
  it('returns true if current direction is DOWN and new direction is UP', () => {
    const direction = 'down'
    const keyCode = 38; // up
    expect(isGoingBackwards({direction, keyCode})).toBeTruthy();
  });

  it('returns true if current direction is UP and new direction is DOWN', () => {
    const direction = 'up'
    const keyCode = 40; // down
    expect(isGoingBackwards({direction, keyCode})).toBeTruthy();
  });

  it('returns true if current direction is LEFT and new direction is RIGHT', () => {
    const direction = 'left'
    const keyCode = 39; // right
    expect(isGoingBackwards({direction, keyCode})).toBeTruthy();
  });

  it('returns true if current direction is RIGHT and new direction is LEFT', () => {
    const direction = 'right'
    const keyCode = 37; // left
    expect(isGoingBackwards({direction, keyCode})).toBeTruthy();
  });
});

describe('isGoingBackwards.js falsy tests', () => {
  it('returns false if current direction is DOWN and new direction is LEFT', () => {
    const direction = 'down'
    const keyCode = 37; // left
    expect(isGoingBackwards({direction, keyCode})).toBeFalsy();
  });

  it('returns false if current direction is DOWN and new direction is RIGHT', () => {
    const direction = 'down'
    const keyCode = 39; // right
    expect(isGoingBackwards({direction, keyCode})).toBeFalsy();
  });

  it('returns false if current direction is UP and new direction is LEFT', () => {
    const direction = 'up'
    const keyCode = 37; // left
    expect(isGoingBackwards({direction, keyCode})).toBeFalsy();
  });

  it('returns false if current direction is UP and new direction is RIGHT', () => {
    const direction = 'up'
    const keyCode = 39; // right
    expect(isGoingBackwards({direction, keyCode})).toBeFalsy();
  });
});
