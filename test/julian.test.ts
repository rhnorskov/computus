import { julian } from "../src";

describe("Julian Implementation Tests", () => {
  it("27 April 2008", () => {
    expect(julian(2008)).toEqual(new Date(2008, 4 - 1, 27));
  });

  it("19 April 2009", () => {
    expect(julian(2009)).toEqual(new Date(2009, 4 - 1, 19));
  });

  it("4 April 2010", () => {
    expect(julian(2010)).toEqual(new Date(2010, 4 - 1, 4));
  });

  it("24 April 2011", () => {
    expect(julian(2011)).toEqual(new Date(2011, 4 - 1, 24));
  });

  it("1 May 2016", () => {
    expect(julian(2016)).toEqual(new Date(2016, 5 - 1, 1));
  });
});
