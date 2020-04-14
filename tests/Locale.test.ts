import "jest";
import { LanguageCode, CountryCode, LocaleInterface, Locale } from "../src";

test("should be able to change Locale to string", (): void => {
  const locale1: LocaleInterface = new Locale(LanguageCode.en, CountryCode.US);
  expect(locale1.toString()).toBe("en_US");

  const locale2: LocaleInterface = new Locale(LanguageCode.pl, CountryCode.PL);
  expect(locale2.toString()).toBe("pl_PL");
});

test("should be able to change string to Locale", (): void => {
  const locale1: LocaleInterface = Locale.fromString("en_GB");
  expect(locale1.language).toBe(LanguageCode.en);
  expect(locale1.country).toBe(CountryCode.GB);

  const locale2: LocaleInterface = Locale.fromString("pl_PL");
  expect(locale2.language).toBe(LanguageCode.pl);
  expect(locale2.country).toBe(CountryCode.PL);
});

test("should throw error if any code is invalid", (): void => {
  expect((): Locale => new Locale("pl" as LanguageCode, "XX" as CountryCode)).toThrow(
    new Error(`Country "XX" is invalid.`)
  );

  expect((): Locale => new Locale("xx" as LanguageCode, "PL" as CountryCode)).toThrow(
    new Error(`Language "xx" is invalid.`)
  );

  expect((): Locale => Locale.fromString("pl_XX")).toThrow(new Error(`Locale "pl_XX" is invalid.`));
  expect((): Locale => Locale.fromString("xx_PL")).toThrow(new Error(`Locale "xx_PL" is invalid.`));
  expect((): Locale => Locale.fromString("xx_XX")).toThrow(new Error(`Locale "xx_XX" is invalid.`));
  expect((): Locale => Locale.fromString("hey hey hello")).toThrow(new Error(`Locale "hey hey hello" is invalid.`));
});
