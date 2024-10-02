import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { computus } from "./computus";

describe("Implementation Tests", () => {
  it("2 April 1961", () => {
    expect(computus(1961)).toEqual(Temporal.PlainDate.from("1961-04-02"));
  });

  it("12 April 2020", () => {
    expect(computus(2020)).toEqual(Temporal.PlainDate.from("2020-04-12"));
  });

  it("4 April 2021", () => {
    expect(computus(2021)).toEqual(Temporal.PlainDate.from("2021-04-04"));
  });

  it("17 April 2022", () => {
    expect(computus(2022)).toEqual(Temporal.PlainDate.from("2022-04-17"));
  });

  it("9 April 2023", () => {
    expect(computus(2023)).toEqual(Temporal.PlainDate.from("2023-04-09"));
  });

  it("31 March 2024", () => {
    expect(computus(2024)).toEqual(Temporal.PlainDate.from("2024-03-31"));
  });

  it("20 April 2025", () => {
    expect(computus(2025)).toEqual(Temporal.PlainDate.from("2025-04-20"));
  });
});
