import { hasEatenFood } from "./";

describe('hasEatenFood.js', () => {
  it('returns false if snake does not eat food', () => {
    const food = { row: 7, column: 10 };
    const snakeHead = { row: 2, column: 5 };
    expect(hasEatenFood(food, snakeHead)).toBeFalsy();
  });

  it('returns true if snake does eat food', () => {
    const food = { row: 7, column: 10 };
    const snakeHead = { row: 7, column: 10 };
    expect(hasEatenFood(food, snakeHead)).toBeTruthy();
  });
});
