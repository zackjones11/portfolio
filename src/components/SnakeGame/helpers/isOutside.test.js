import { isOutside } from "./";

describe('isOutside.js', () => {
  const numOfCells = 50;
  it('returns false if snake is within board', () => {
    const snakeHead = { row: 2, column: 5 };
    expect(isOutside(numOfCells, snakeHead)).toBeFalsy();
  });

  it('returns true if snake is outside board (rows)', () => {
    const snakeHead = { row: numOfCells + 1, column: 5 };
    expect(isOutside(numOfCells, snakeHead)).toBeTruthy();
  });

  it('returns true if snake is outside board (columns)', () => {
    const snakeHead = { row: 2, column: numOfCells + 1 };
    expect(isOutside(numOfCells, snakeHead)).toBeTruthy();
  });
});
