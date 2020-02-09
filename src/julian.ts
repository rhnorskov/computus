import { integerDivision } from "./utils";

/**
 * Calculates the computus for a given year in the Julian calendar.
 *
 * https://en.wikipedia.org/wiki/Computus#Meeus's_Julian_algorithm
 *
 * @param {number} year
 * @returns {Date} computus
 * @example const computus = julian(1970);
 */
export function julian(year: number): Date {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;
  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;
  const month = integerDivision(d + e + 114, 31);
  const day = ((d + e + 114) % 31) + 1;

  return new Date(year, month - 1, day + 13);
}
