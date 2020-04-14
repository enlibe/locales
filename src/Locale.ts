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
export interface LocaleInterface {
  language: LanguageCode;
  country: CountryCode;

  toString(): string;
}

/**
 *
 * Implementation of LocaleInterface.
 *
 */
export class Locale implements LocaleInterface {
  public readonly language: LanguageCode;
  public readonly country: CountryCode;

  /**
   * @throws Error
   */
  public constructor(language: LanguageCode, country: CountryCode) {
    if (!languages.includes(language)) {
      throw new Error(`Language "${language}" is invalid.`);
    }
    if (!countries.includes(country)) {
      throw new Error(`Country "${country}" is invalid.`);
    }
    this.language = language;
    this.country = country;
  }

  /**
   * @throws Error
   */
  public static fromString(locale: string): LocaleInterface {
    const [language, country]: [LanguageCode, CountryCode] = locale.split("_", 2) as [LanguageCode, CountryCode];

    if (languages.includes(language) && countries.includes(country)) {
      return new Locale(LanguageCode[language], CountryCode[country]);
    }
    throw new Error(`Locale "${locale}" is invalid.`);
  }

  public toString(): string {
    return `${this.language.toString()}_${this.country.toString()}`;
  }
}
