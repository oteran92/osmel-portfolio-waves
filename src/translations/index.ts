
import { en } from './en';
import { es } from './es';
import { de } from './de';

export type LanguageCode = 'en' | 'es' | 'de';

export const translations = {
  en,
  es,
  de
};

export type TranslationKeys = typeof en;
