import { gregorian } from "../src";

describe("Gregorian Implementation Tests", () => {
  it("2 April 1961", () => {
    expect(gregorian(1961)).toEqual(new Date(1961, 4 - 1, 2));
  });

  it("12 April 2020", () => {
    expect(gregorian(2020)).toEqual(new Date(2020, 4 - 1, 12));
  });

  it("4 April 2021", () => {
    expect(gregorian(2021)).toEqual(new Date(2021, 4 - 1, 4));
  });

  it("17 April 2022", () => {
    expect(gregorian(2022)).toEqual(new Date(2022, 4 - 1, 17));
  });

  it("9 April 2023", () => {
    expect(gregorian(2023)).toEqual(new Date(2023, 4 - 1, 9));
  });

  it("31 March 2024", () => {
    expect(gregorian(2024)).toEqual(new Date(2024, 3 - 1, 31));
  });

  it("20 April 2025", () => {
    expect(gregorian(2025)).toEqual(new Date(2025, 4 - 1, 20));
  });
});
