export const DEFAULT_LOCALE_SETTING: string = "en";

export const LOCALES_SETTING: LocaleSetting = {
  "en": {
    "label": "🇺🇸 EN"
  },
  "pt": {
    "label": "🇧🇷 PT"
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
  };
}
