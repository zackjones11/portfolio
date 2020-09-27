import { yearsDifference } from "./";

describe("yearsDifference.js", () => {
  it("returns a number", () => {
    const start = "September 1 2019";
    const end = "September 1 2020";
    const yearsSince = yearsDifference({ start, end });

    expect(typeof yearsSince).toBe("number");
  });

  it("returns a correct years difference", () => {
    const start = "September 1 2018";
    const end = "September 1 2020";
    const yearsSince = yearsDifference({ start, end });

    expect(yearsSince).toBe(2);
  });

  it("compares with today if no end provided", () => {
    const start = "October 1 2010";
    const yearsSince = yearsDifference({ start });

    expect(yearsSince).toBe(10);
  });
});
