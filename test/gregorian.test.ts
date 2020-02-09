import { gregorian } from "../src";

describe("Gregorian Implementation Tests", () => {
  it("2 April 1961", () => {
    expect(gregorian(1961)).toEqual(new Date(1961, 4 - 1, 2));
  });

  it("12 April 2020", () => {
    expect(gregorian(2020)).toEqual(new Date(2020, 4 - 1, 12));
  });
});
