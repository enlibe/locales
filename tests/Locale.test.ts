import "jest";
import { LanguageCode, CountryCode, ILocale, Locale } from "../ts";

test("should be able to change Locale to string", (): void => {
  const locale1: ILocale = new Locale(LanguageCode.en, CountryCode.US);
  expect(locale1.toString()).toBe("en_US");

  const locale2: ILocale = new Locale(LanguageCode.pl, CountryCode.PL);
  expect(locale2.toString()).toBe("pl_PL");
});

test("should be able to change string to Locale", (): void => {
  const locale1: ILocale = Locale.fromString("en_GB");
  expect(locale1.language).toBe(LanguageCode.en);
  expect(locale1.country).toBe(CountryCode.GB);

  const locale2: ILocale = Locale.fromString("pl_PL");
  expect(locale2.language).toBe(LanguageCode.pl);
  expect(locale2.country).toBe(CountryCode.PL);
});

test("should throw error if locale code is invalid", (): void => {
  expect(() => Locale.fromString("pl_XX")).toThrow(new TypeError(`Locale "pl_XX" is invalid.`));
  expect(() => Locale.fromString("xx_PL")).toThrow(new TypeError(`Locale "xx_PL" is invalid.`));
  expect(() => Locale.fromString("xx_XX")).toThrow(new TypeError(`Locale "xx_XX" is invalid.`));
  expect(() => Locale.fromString("hey hey hello")).toThrow(new TypeError(`Locale "hey hey hello" is invalid.`));
});
