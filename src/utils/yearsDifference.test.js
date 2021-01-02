import { yearsDifference } from "./";

describe("yearsDifference.js", () => {
  it("returns a number", () => {
    const start = "September 1 2019";
    const end = "September 1 2020";
    const yearsSince = yearsDifference({ start, end });

    expect(typeof yearsSince).toBe("number");
  });

  it("compares with today if no end provided", () => {
    const start = "October 1 2010";
    const yearsSince = yearsDifference({ start });

    expect(yearsSince).toBe(10);
  });

  test.each`
    start                  | end                    | expected
    ${"September 1 2018"}  | ${"September 1 2020"}  | ${2}
    ${"September 1, 2013"} | ${"January 2, 2021"}   | ${7}
    ${"July 2, 2010"}      | ${"September 2, 2014"} | ${4}
  `("should return $expected years difference", ({ start, end, expected }) => {
    const yearsSince = yearsDifference({ start, end });
    expect(yearsSince).toBe(expected);
  });
});
