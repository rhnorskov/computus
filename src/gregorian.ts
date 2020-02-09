import { integerDivision } from "./utils";

/**
 * Calculates the computus for a given year in the Gregorian calendar.
 *
 * https://en.wikipedia.org/wiki/Computus#Anonymous_Gregorian_algorithm
 *
 * @param {number} year
 * @returns {Date} computus
 * @example const computus = gregorian(1970);
 */
export function gregorian(year: number): Date {
  const a = year % 19;
  const b = integerDivision(year, 100);
  const c = year % 100;
  const d = integerDivision(b, 4);
  const e = b % 4;
  const g = integerDivision(8 * b + c, 25);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = integerDivision(c, 4);
  const k = c % 4;
  const l = (2 * e + 2 * i - h - k + 32) % 7;
  const m = integerDivision(a + 11 * h + 22 * l, 451);
  const month = integerDivision(h + l - 7 * m + 114, 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(year, month - 1, day);
}
