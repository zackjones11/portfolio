import { randomNumber } from "./";

describe("randomNumber.js", () => {
  it("returns a number", () => {
    const random = randomNumber({ min: 1, max: 100 });
    expect(typeof random).toBe("number");
  });

  it("returns a number in-between min and max args", () => {
    const args = { min: 10, max: 100 };
    const random = randomNumber(args);

    expect(random).toBeGreaterThan(args.min);
    expect(random).toBeLessThan(args.max);
  });
});
