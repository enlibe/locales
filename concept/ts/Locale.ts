import { LanguageCode } from "./LanguageCode";
import { CountryCode } from "./CountryCode";

/**
 *
 * Combination of language code and country code for specific region.
 * E.g. "en_US" (as plain text) for english and United States.
 *
 * References:
 * - https://en.wikipedia.org/wiki/Locale_(computer_software)
 *
 */
export interface Locale {
  language: LanguageCode
  country: CountryCode
}
