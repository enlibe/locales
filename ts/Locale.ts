import { LanguageCode } from "./LanguageCode";
import { CountryCode } from "./CountryCode";
import { languages } from "./languages";
import { countries } from "./countries";

/**
 *
 * Combination of language code and country code for specific region.
 * E.g. "en_US" (as plain text) for english and United States.
 *
 * References:
 * - https://en.wikipedia.org/wiki/Locale_(computer_software)
 *
 */
export interface ILocale {
  language: LanguageCode;
  country: CountryCode;

  toString(): string;
}

/**
 *
 * Implementation of ILocale interface.
 *
 */
export class Locale implements ILocale {
  public readonly language: LanguageCode;
  public readonly country: CountryCode;

  public constructor(language: LanguageCode, country: CountryCode) {
    this.language = language;
    this.country = country;
  }

  /**
   * @throws TypeError
   */
  public static fromString(locale: string): ILocale {
    const [language, country] = locale.split("_", 2) as [LanguageCode, CountryCode];

    if (languages.includes(language) && countries.includes(country)) {
      return new Locale(LanguageCode[language], CountryCode[country]);
    }
    throw new TypeError(`Locale "${locale}" is invalid.`);
  }

  public toString(): string {
    return `${this.language.toString()}_${this.country.toString()}`;
  }
}
