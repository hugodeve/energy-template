import en from './en.json';
import pt from './pt.json';

export type Translations = typeof en;

const translations: { [key: string]: Translations } = {
  en,
  pt,
};

/**
 * Obtiene las traducciones para el idioma especificado.
 * @param lang Código de idioma ('en', 'pt', etc.)
 * @returns Objeto de traducciones
 */
export const getTranslations = (lang: string): Translations => {
  return translations[lang] || translations['en'];
};

/**
 * Traduce una clave basada en el idioma.
 * @param lang Código de idioma
 * @param key Clave de traducción (ej. 'nav.home')
 * @returns Traducción correspondiente o la clave si no se encuentra
 */
export const t = (lang: string, key: string): string => {
  const keys = key.split('.');
  let translation: any = translations[lang] || translations['en'];

  for (const k of keys) {
    translation = translation[k];
    if (!translation) break;
  }

  return translation || key;
};

/**
 * Hook para obtener la función de traducción basada en el idioma actual.
 * @param lang Código de idioma
 * @returns Función `t` para traducir claves
 */
export const useTranslations = (lang: string) => {
  return (key: string) => t(lang, key);
};

/**
 * Obtiene el idioma de la URL. Por ejemplo, de '/en/about' extraerá 'en'.
 * Si no se encuentra un idioma válido, retorna 'en' por defecto.
 * @param url Objeto URL de la petición
 * @returns Código de idioma ('en', 'pt', etc.)
 */
export const getLangFromUrl = (url: URL): string => {
  const pathSegments = url.pathname.split('/');
  const potentialLang = pathSegments[1];
  return Object.keys(translations).includes(potentialLang) ? potentialLang : 'en';
};
