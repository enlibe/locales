import "jest";
import * as index from "../ts/index";

test("should export public API parts", (): void => {
  const properties: string[] = [
    "LanguageCode",
    "CountryCode",
    "Locale", // note: ts interface cannot be exported as js object (ILocale)
    "languages",
    "ltrLanguages",
    "rtlLanguages",
    "countries",
  ];
  for (const property of properties) {
    expect(index).toHaveProperty(property);
  }
});
