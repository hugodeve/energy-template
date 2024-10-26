export const locales = {
    en: () => import('./locales/en.json'),
    pt: () => import('./locales/pt.json'),
  };
  
  export async function getTranslation(locale) {
    // Si el idioma no está en los locales, usar 'en' por defecto
    const selectedLocale = locales[locale] ? locale : 'en';
  
    try {
      const langModule = await locales[selectedLocale]();
      return langModule.default;
    } catch (error) {
      console.error(`Error loading locale [${selectedLocale}]:`, error);
      return locales.en(); // Fallback al inglés si hay un problema
    }
  }
  