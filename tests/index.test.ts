import "jest";
import * as index from "../src/index";

test("should export public API properties", (): void => {
  const properties: string[] = [
    "LanguageCode",
    "CountryCode",
    "Locale", // note: ts interface cannot be exported as js object (LocaleInterface)
    "languages",
    "ltrLanguages",
    "rtlLanguages",
    "countries",
  ];
  for (const property of properties) {
    expect(index).toHaveProperty(property);
  }
});
