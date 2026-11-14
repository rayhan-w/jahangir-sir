import bnMessages from "@/locales/bn.json";
import enMessages from "@/locales/en.json";

export type Locale = "bn" | "en";

export const DEFAULT_LOCALE: Locale = "bn";

export function toBengaliNumber(input: number | string): string {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(input).replace(/[0-9]/g, (digit) => bengaliDigits[parseInt(digit, 10)]);
}

export function formatNumber(input: number | string, locale: Locale = "bn"): string {
  if (locale === "bn") {
    return toBengaliNumber(input);
  }
  return String(input);
}

export function getDictionary(locale: Locale = DEFAULT_LOCALE) {
  return locale === "en" ? enMessages : bnMessages;
}

export function getTranslation(key: string, locale: Locale = DEFAULT_LOCALE, params?: Record<string, string | number>): string {
  const dict = getDictionary(locale) as Record<string, any>;
  const keys = key.split(".");
  let current: any = dict;

  for (const k of keys) {
    if (current && typeof current === "object" && k in current) {
      current = current[k];
    } else {
      return key; // fallback to key
    }
  }

  if (typeof current !== "string") {
    return key;
  }

  let text = current;
  if (params) {
    for (const [paramKey, paramVal] of Object.entries(params)) {
      const formattedVal = typeof paramVal === "number" ? formatNumber(paramVal, locale) : String(paramVal);
      text = text.replace(new RegExp(`{${paramKey}}`, "g"), formattedVal);
    }
  }

  return text;
}
