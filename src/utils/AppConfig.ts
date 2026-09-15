import type { LocalePrefix } from 'next-intl/routing';

const localePrefix: LocalePrefix<string[], 'as-needed'> = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Elaine\'s Portfolio',
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localePrefix,
};
